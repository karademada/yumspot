import React from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

// Sample data for screenshots
const screenshots = [
  { id: 1, src: '/gallery1.png', alt: 'Screenshot 1' },
  { id: 2, src: '/gallery2.png', alt: 'Screenshot 2' },
  { id: 3, src: '/gallery3.png', alt: 'Screenshot 3' },
]

export function PhoneCarousel() {
  return (
    <div className="w-full max-w-sm mx-auto">
      <Carousel className="w-full">
        <CarouselContent>
          {screenshots.map((screenshot) => (
            <CarouselItem key={screenshot.id}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-[9/16] items-center justify-center p-6">
                    <div className="relative w-full h-full overflow-hidden rounded-3xl shadow-lg">
                      <Image
                        src={screenshot.src}
                        alt={screenshot.alt}
                        layout="fill"
                        objectFit="cover"
                        className="w-full h-full"
                      />
                      <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl"></div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}