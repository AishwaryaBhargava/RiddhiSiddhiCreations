export interface GalleryImage {
  id: string
  src: string
  alt: string
  category: 'bridal' | 'festival' | 'prom' | 'babyshower' | 'custom'
}

export const galleryImages: GalleryImage[] = [
  // Real images will be added here when Arpana provides them
  // Example structure:
  // { id: '1', src: '/images/gallery/bridal-1.jpg', alt: 'Bridal mehndi full hands', category: 'bridal' },
]