import { Button } from '@/components/ui/button'

const CallToAction = () => {
  return (
    <section className="bg-primary text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Boost Your Productivity?</h2>
        <p className="text-xl mb-8">Join thousands of satisfied users and transform your workflow today.</p>
        <Button size="lg" variant="secondary">
          Get Started Now
        </Button>
      </div>
    </section>
  )
}

export default CallToAction