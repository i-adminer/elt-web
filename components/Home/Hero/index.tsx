"use client";

import Image from "next/image";
import { TransitionLink } from "@/components/Transitions/TransitionLink";

const Hero = () => {
  return (
    <section className="relative overflow-hidden z-1">
      {/* Mobile background image */}
      <div className="lg:hidden absolute inset-0 opacity-10">
        <Image
          src="/images/elt-hero.png"
          alt="EasyLink Technologies Background"
          fill
          className="object-contain object-right"
          priority
        />
      </div>

      <div className="container mx-auto pt-24 max-w-7xl px-4 relative z-10">
        <div className="grid grid-cols-12 justify-center items-center">
          <div className="col-span-12 xl:col-span-5 lg:col-span-6 md:col-span-12 sm:col-span-12">
            <div className="py-2 px-5 bg-primary/15 rounded-full w-fit mb-10">
              <p className="text-primary text-lg font-bold mb10">
                Fully Managed IT Services
              </p>
            </div>
            <h2>Reliable ICT Services for Your Business Growth</h2>
            <TransitionLink href="/contact" label="Contact">
              <button className="bg-primary text-white text-xl font-semibold py-5 px-12 rounded-full hover:bg-accent hover:cursor-pointer mt-10 transition-colors duration-300">
                Get Started
              </button>
            </TransitionLink>
          </div>
          <div className="xl:col-span-7 lg:col-span-6 lg:block hidden">
            <Image
              src="/images/elt-hero.png"
              alt="EasyLink Technologies - ICT Support Services"
              width={600}
              height={600}
              className="w-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
