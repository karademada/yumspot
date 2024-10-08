import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { MapPin, Youtube, CreditCard } from 'lucide-react';

const features = [
  {
    icon: Youtube,
    title: 'YouTube Integration',
    description: 'Discover local eateries through popular food review videos.',
  },
  {
    icon: MapPin,
    title: 'Location-Based',
    description: 'Find and fund restaurants near you with ease.',
  },
  {
    icon: CreditCard,
    title: 'Easy Funding',
    description: 'Contribute to your meal fund securely and effortlessly.',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          How YumSpot Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
