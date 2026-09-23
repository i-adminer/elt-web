import React from "react";
import Image from "next/image";

const Team = () => {
  return (
    <section className="overflow-x-hidden py-16">
      <div className="container mx-auto max-w-7xl px-4 relative">
        <h2 className="text-center max-w-5xl mx-auto">
          Our team believes you deserve only the best ICT support.
        </h2>
        <h5 className="font-medium text-center pt-10 text-black/50 max-w-3xl mx-auto">
          A dedicated team of IT professionals committed to delivering reliable,
          24/7 support and innovative solutions for your business.
        </h5>
        <div className="grid grid-cols-1 mt-16">
          <div className="relative rounded-3xl overflow-hidden shadow-xl group">
            <Image
              src="/images/team/team.png"
              alt="EasyLink Technologies Team"
              width={1296}
              height={684}
              className="w-full h-auto object-cover"
              priority
            />
            {/* Overlay with CTA */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60 group-hover:from-black/50 group-hover:via-black/60 group-hover:to-black/70 transition-all duration-300 flex items-center justify-center">
              <div className="text-center px-4">
                <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 drop-shadow-lg">
                  Ready to Transform Your Business?
                </h3>
                <a
                  href="/contact"
                  className="inline-block bg-accent hover:bg-primary text-white text-base md:text-lg lg:text-xl font-semibold py-3 md:py-4 px-8 md:px-10 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  Get Started Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
