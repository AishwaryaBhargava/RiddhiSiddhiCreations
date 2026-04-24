export interface Service {
  id: string
  name: string
  description: string
  duration: string
  price: string
  note?: string
}

export const services: Service[] = [
  {
    id: '1',
    name: 'Bridal Mehndi',
    description:
      'Full bridal coverage for hands and feet. Deeply intricate, traditional or contemporary designs tailored entirely to the bride\'s vision and personality.',
    duration: '4 to 6 hours',
    price: 'Starting from $300',
    note: 'Includes consultation and touch-up',
  },
  {
    id: '2',
    name: 'Guest Henna',
    description:
      'Beautiful, elegant designs for wedding guests or event attendees. Quick application with stunning results that complement any occasion.',
    duration: '15 to 45 minutes',
    price: 'Starting from $20 per person',
  },
  {
    id: '3',
    name: 'Festivals & Carnivals',
    description:
      'Vibrant and celebratory designs perfect for Diwali, Eid, Navratri, cultural festivals, and community events of every kind.',
    duration: '1 to 2 hours',
    price: 'Starting from $150',
  },
  {
    id: '4',
    name: 'Baby Shower',
    description:
      'Gentle, meaningful mehndi to celebrate the arrival of new life. Safe organic henna with designs that honour the occasion beautifully.',
    duration: '1 to 2 hours',
    price: 'Starting from $120',
  },
  {
    id: '5',
    name: 'Custom Requests',
    description:
      'Have a Pinterest board, a reference image, or a unique idea? Arpana will recreate your vision and blend it with her artistry to create something truly one of a kind.',
    duration: 'Varies by design',
    price: 'Request a Quote',
  },
]