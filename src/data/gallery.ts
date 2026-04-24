export interface GalleryImage {
  id: string
  src: string
  alt: string
  category: 'all' | 'bridal' | 'festival' | 'prom' | 'babyshower' | 'custom'
}

export const galleryImages: GalleryImage[] = [
  // Images will be added here once Arpana provides them
  // Example:
  // {
  //   id: '1',
  //   src: '/src/assets/images/gallery/bridal-1.jpg',
  //   alt: 'Intricate bridal mehndi on both hands',
  //   category: 'bridal',
  // },
]

export const categories = [
  { label: 'All', value: 'all' },
  { label: 'Bridal', value: 'bridal' },
  { label: 'Festival', value: 'festival' },
  { label: 'Proms & Parties', value: 'prom' },
  { label: 'Baby Shower', value: 'babyshower' },
  { label: 'Custom', value: 'custom' },
]