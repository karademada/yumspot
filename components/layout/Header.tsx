'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/yumspot-logo.png"
            alt="YumSpot Logo"
            width={60}
            height={60}
          />
        </Link>
        <div className="hidden md:block">
          <Button variant="outline" className="mr-2">
            Log in
          </Button>
          <Button>Sign up</Button>
        </div>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu />
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white py-2">
          <div className="container mx-auto px-4 flex flex-col space-y-2">
            <Link
              href="#features"
              className="text-gray-600 hover:text-gray-800"
            >
              How It Works
            </Link>
            <Link
              href="#testimonials"
              className="text-gray-600 hover:text-gray-800"
            >
              Success Stories
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-gray-800">
              Pricing
            </Link>
            <Button variant="outline" className="w-full">
              Log in
            </Button>
            <Button className="w-full">Sign up</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
