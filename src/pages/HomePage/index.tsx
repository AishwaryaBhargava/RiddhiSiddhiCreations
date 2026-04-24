import Button from '../../components/ui/Button'
import SectionHeading from '../../components/ui/SectionHeading'
import Divider from '../../components/ui/Divider'

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] gap-8 px-8">
      <SectionHeading overline="Portfolio" title="Our Henna Artistry" />
      <Divider />
      <div className="flex gap-4">
        <Button variant="outline">Book Your Appointment</Button>
        <Button variant="solid">Get in Touch</Button>
      </div>
    </div>
  )
}

export default HomePage