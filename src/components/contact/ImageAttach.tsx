import { useEffect, useMemo, useRef, useState } from 'react'
import type { DragEvent, ChangeEvent } from 'react'
import { ImagePlus, X } from 'lucide-react'
import { MAX_FILES, MAX_FILE_MB, isUploadConfigured } from '../../lib/uploadImages'

interface ImageAttachProps {
  files: File[]
  onChange: (files: File[]) => void
}

/* Reference-image picker: drag-and-drop or tap to choose, with thumbnails and remove buttons */
function ImageAttach({ files, onChange }: ImageAttachProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [dragging, setDragging] = useState(false)
  const [warning, setWarning] = useState<string | null>(null)
  const configured = isUploadConfigured()

  /* Object URLs for thumbnails; revoked when the file list changes or the picker unmounts */
  const previews = useMemo(() => files.map((f) => URL.createObjectURL(f)), [files])
  useEffect(() => () => previews.forEach((u) => URL.revokeObjectURL(u)), [previews])

  const addFiles = (incoming: FileList | File[]) => {
    const picked = Array.from(incoming)
    const problems: string[] = []
    const accepted: File[] = []
    for (const f of picked) {
      const isImage = f.type.startsWith('image/') || /\.(heic|heif)$/i.test(f.name)
      if (!isImage) { problems.push(`${f.name} is not an image`); continue }
      if (f.size > MAX_FILE_MB * 1024 * 1024) { problems.push(`${f.name} is larger than ${MAX_FILE_MB} MB`); continue }
      accepted.push(f)
    }
    const next = [...files, ...accepted].slice(0, MAX_FILES)
    if (files.length + accepted.length > MAX_FILES) problems.push(`You can attach up to ${MAX_FILES} images`)
    setWarning(problems.length ? problems.join('. ') : null)
    onChange(next)
  }

  const onDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDragging(false)
    if (!configured) return
    addFiles(e.dataTransfer.files)
  }

  const onPick = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) addFiles(e.target.files)
    e.target.value = ''
  }

  const remove = (index: number) => onChange(files.filter((_, i) => i !== index))

  if (!configured) {
    return (
      <div className="rounded-lg border border-dashed border-marigold-600/40 bg-cream-200/60 px-5 py-4 flex items-center gap-3">
        <ImagePlus size={18} strokeWidth={1.5} className="text-marigold-600 shrink-0" />
        <p className="font-sans text-[12px] text-wine-700/70 leading-relaxed">
          Image uploads are being set up. For now, please share a link to your reference images above.
        </p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-3">
      <div
        role="button"
        tabIndex={0}
        onClick={() => inputRef.current?.click()}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); inputRef.current?.click() } }}
        onDragOver={(e) => { e.preventDefault(); setDragging(true) }}
        onDragLeave={() => setDragging(false)}
        onDrop={onDrop}
        className={`rounded-lg border border-dashed px-5 py-6 flex flex-col items-center text-center gap-2 cursor-pointer transition-colors duration-200 ${
          dragging ? 'border-rose-600 bg-rose-100/50' : 'border-marigold-600/50 bg-cream hover:border-rose-600/70 hover:bg-cream-200/60'
        }`}
      >
        <ImagePlus size={22} strokeWidth={1.5} className="text-marigold-600" />
        <p className="font-sans text-[13px] text-wine-800">
          Drop images here or <span className="text-rose-600 font-medium">browse</span>
        </p>
        <p className="font-sans text-[11px] text-wine-700/60">
          Up to {MAX_FILES} images, {MAX_FILE_MB} MB each. JPG, PNG, HEIC or WebP.
        </p>
        <input
          ref={inputRef}
          type="file"
          accept="image/*,.heic,.heif"
          multiple
          onChange={onPick}
          className="sr-only"
          aria-label="Choose reference images"
        />
      </div>

      {warning && <p className="font-sans text-[11px] text-rose-700">{warning}</p>}

      {files.length > 0 && (
        <ul className="grid grid-cols-3 sm:grid-cols-5 gap-3">
          {files.map((f, i) => (
            <li key={`${f.name}-${f.size}-${i}`} className="relative aspect-square rounded-lg overflow-hidden border border-marigold-600/40 bg-cream-200">
              {previews[i] && (
                <img src={previews[i]} alt={f.name} className="w-full h-full object-cover" />
              )}
              <button
                type="button"
                onClick={() => remove(i)}
                aria-label={`Remove ${f.name}`}
                className="absolute top-1 right-1 w-6 h-6 rounded-full bg-wine-800/85 text-cream flex items-center justify-center hover:bg-rose-600 transition-colors"
              >
                <X size={13} strokeWidth={2.5} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ImageAttach
