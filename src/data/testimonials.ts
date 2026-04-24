export interface Testimonial {
  id: string
  name: string
  occasion: string
  review: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Priya S.',
    occasion: 'Bridal',
    review: 'Absolutely stunning henna for my wedding. Arpana truly listened to every detail and made me feel so special throughout.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Anisha M.',
    occasion: 'Festival',
    review: 'She recreated my inspiration image perfectly. Beautiful, detailed, and such a calm and personal experience. Highly recommend.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Ritu K.',
    occasion: 'Baby Shower',
    review: 'The most elegant mehndi I have ever had. Organic paste, gorgeous patterns, and a wonderful artist to spend the afternoon with.',
    rating: 5,
  },
]