import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Icon } from "@iconify/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { EmblaOptionsType } from 'embla-carousel'
import EmblaCarousel from '@/components/ui/EmblaCarousel'

const IMG_PATH = [
  "/photos/149608.jpg",
  "/photos/f0e956568293387bc53bb514cfc5cf92.jpg",
  "/photos/f41e76aa862cd39be5a95a940497930f.jpeg",
];

export default function Home() {
  
  return (
    <main className="min-h-screen">
      <header className="px-8 py-4 flex space-x-6 items-center w-full border-2 border-b border-gray-200">
        <h1 className="text-xl font-bold">TNT</h1>
        <nav className="hidden md:flex space-x-6 text-gray-600">
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Portfolio</a>
          <a href="#">Team</a>
          <a href="#">Contact</a>
        </nav>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen items-stretch font-sans">
        <div className="flex flex-col justify-center space-y-8 px-8 py-12 md:px-16">

          <div className="space-y-0">
            <p className="uppercase text-gray-500 font-semibold text-sm">Hello World!</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight mb-4">
              We are creative agency.
              <br/>
              We build digital work that
              <br/>
              you will love!
            </h2>
            <Button className="text-white text-md bg-yellow-500 hover:bg-yellow-600 px-6 py-6 rounded-none">
              Explore our portfolio →
            </Button>
          </div>

          {/* jasa yang di offer */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 pt-8 items-end">
            <Card className="border-t-4 bg-neutral-50 shadow-none border-red-500 border-b-0 border-l-0 border-r-0 rounded-none">
              <CardContent className=" flex flex-col px-4 pt-4">
                <div className="flex-1">
                  <Icon icon="ph:desktop-light" width={40} height={40} className="text-red-500 mb-4"></Icon> 
                  <h3 className="font-bold text-2xl leading-7 mb-2">Web Design Project</h3>
                  <p className="text-gray-500 text-sm mb-6">
                    Sed ut perspjctatjs unde omni
                      iste natus error SJt volunteer
                      accusantum doloremque.
                  </p>
                </div>
                <div className="flex justify-end">
                  <Icon icon="gg:arrow-up-o" width={35} height={35} rotate={45} className="text-red-500"></Icon>
                  </div>
              </CardContent>
            </Card>

            <Card className="shadow-none bg-neutral-50 rounded-none border-blue-500 border-t-4 border-b-0 border-l-0 border-r-0">
              <CardContent className="flex flex-col px-4 pt-4">
                <div className="flex-1">
                  <Icon icon="solar:ruler-cross-pen-outline" width={40} height={40} className="text-blue-500 mb-4"></Icon> 
                  <h3 className="font-bold text-2xl leading-7 mb-2">Digital Artwork</h3>
                  <p className="text-gray-500 text-sm mb-4">
                    Sed ut persptciatls unde omni iste natus error sit volunte-
                  </p>
                </div>
                <div className="flex justify-end">
                  <Icon icon="gg:arrow-up-o" width={35} height={35} rotate={45} className="text-blue-500"></Icon>
                  </div>
              </CardContent>
            </Card>

            <Card className="rounded-none shadow-none bg-neutral-50 border-green-500 border-b-0 border-l-0 border-r-0 border-t-4">
              <CardContent className="flex flex-col px-4 pt-4">
                <div className="flex-1">
                  <Icon icon="hugeicons:computer-programming-01" width={40} height={40} className="text-green-500 mb-4"></Icon> 
                  <h3 className="font-bold text-2xl leading-7 mb-2">Website Development</h3>
                  <p className="text-gray-500 text-sm mb-10">
                    Sed ut perspxjat•s unde omni
                      tste natus error sit volunteer
                      accusantum doloremque. ut
                      perspioatjs unde omm iSte
                      natus error Sit volunteer
                      accusantum doloremque,
                  </p>
                </div>
                <div className="flex justify-end">
                  <Icon icon="gg:arrow-up-o" width={35} height={35} rotate={45} className="text-green-500"></Icon>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* astronaut image carousel thingy */}
        <div className="relative bg-cyan-500 h-full">
          <Carousel className="w-full h-full">
            <CarouselContent>
              {IMG_PATH.map((path, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-screen md:h-full w-full">
                    <Image
                      src={path}
                      alt={`Slide ${index + 1}`}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>

          <div className="absolute bottom-6 left-6 text-white text-sm z-10">
            <p className="font-light">Artwork project</p>
            <p className="font-semibold">Enjoy the space</p>
          </div>
        </div>
      </div>
    </main>
  );
}
