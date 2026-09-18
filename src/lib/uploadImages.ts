/* Client-side image upload for the inquiry form.
   Images are shrunk in the browser, uploaded to Cloudinary through an unsigned preset,
   and the resulting links travel with the Formspree submission. */

const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME as string | undefined
const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET as string | undefined

const PLACEHOLDER = /your_|_here$/i

export function isUploadConfigured(): boolean {
  return Boolean(CLOUD_NAME && UPLOAD_PRESET && !PLACEHOLDER.test(CLOUD_NAME) && !PLACEHOLDER.test(UPLOAD_PRESET))
}

export const MAX_FILES = 5
export const MAX_FILE_MB = 10

/* Shrink to at most `maxEdge` pixels and re-encode as JPEG. Falls back to the original
   file when the browser cannot decode it (for example HEIC from an iPhone); Cloudinary
   converts those server-side. */
async function shrink(file: File, maxEdge = 1600, quality = 0.85): Promise<Blob> {
  try {
    const bitmap = await createImageBitmap(file)
    const scale = Math.min(1, maxEdge / Math.max(bitmap.width, bitmap.height))
    if (scale === 1 && file.size < 1.5 * 1024 * 1024) return file
    const canvas = document.createElement('canvas')
    canvas.width = Math.round(bitmap.width * scale)
    canvas.height = Math.round(bitmap.height * scale)
    const ctx = canvas.getContext('2d')
    if (!ctx) return file
    ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height)
    bitmap.close()
    return await new Promise<Blob>((resolve, reject) =>
      canvas.toBlob((b) => (b ? resolve(b) : reject(new Error('encode failed'))), 'image/jpeg', quality)
    )
  } catch {
    return file
  }
}

async function uploadOne(file: File, folder: string): Promise<string> {
  const blob = await shrink(file)
  const body = new FormData()
  body.append('file', blob, file.name)
  body.append('upload_preset', UPLOAD_PRESET as string)
  body.append('folder', folder)
  const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, { method: 'POST', body })
  if (!res.ok) throw new Error(`upload failed (${res.status})`)
  const json = (await res.json()) as { secure_url?: string }
  if (!json.secure_url) throw new Error('upload failed (no url)')
  return json.secure_url
}

/* Uploads all files in parallel and returns their public links in the same order */
export async function uploadImages(files: File[], folder = 'riddhisiddhi/inquiries'): Promise<string[]> {
  if (!isUploadConfigured()) throw new Error('uploads not configured')
  return Promise.all(files.map((f) => uploadOne(f, folder)))
}
