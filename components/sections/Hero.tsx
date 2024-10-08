import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PhoneCarousel } from './PhoneCarroussel';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-[#8cc63f] to-[#00a651] text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Discover Your Next Yummy Spot
          </h1>
          <p className="text-xl mb-6">
            Find and fund local eateries based on YouTube food reviews near you.
            Turn video recommendations into delicious reality with YumSpot!
          </p>
          <div className="flex space-x-4">
            <Button size="lg" variant="secondary">
              Android Store
            </Button>
            <Button size="lg" variant="secondary">
              Apple Store
            </Button>
          </div>
        </div>
        <div className="md:w-1/2">
          <PhoneCarousel />
        </div>
      </div>
    </section>
  );
};

export default Hero;
