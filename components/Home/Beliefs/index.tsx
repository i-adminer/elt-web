"use client";
import React from "react";
import { TransitionLink } from "@/components/Transitions/TransitionLink";

const Beliefs = () => {
  return (
    <section className="bg-cover bg-center overflow-hidden py-16">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* COLUMN-1 */}

          <div className="bg-primary pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl bg-[url('/images/beliefs/swirls.svg')] bg-no-repeat bg-right-bottom">
            <p className="text-lg font-normal text-white tracking-widest mb-5 text-center sm:text-start uppercase">
              24/7 Support
            </p>
            <h3 className="text-white mb-5 text-center sm:text-start">
              Reliable{" "}
              <span className="text-white/60">
                ICT support whenever you need it.
              </span>
            </h3>
            <p className="text-lg text-white/75 pt-2 mb-16 text-center sm:text-start">
              Our team provides round-the-clock technical assistance to ensure
              your business operations run smoothly without interruption.
            </p>
            <div className="text-center sm:text-start">
              <TransitionLink
                href="/contact"
                label="Contact"
                className="inline-block text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full duration-300 bg-accent border border-accent hover:bg-primary hover:border-primary"
              >
                Get Started
              </TransitionLink>
            </div>
          </div>

          {/* COLUMN-2 */}
          <div className="">
            <div className="bg-[#D6FFEB] pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl bg-[url('/images/it.png')] bg-no-repeat bg-bottom-right">
              <p className="text-lg font-normal text-primary tracking-widest mb-5 text-center sm:text-start uppercase">
                Customized Solutions
              </p>
              <h3 className="text-black mb-5 text-center sm:text-start">
                <span className="text-primary">Tailored</span> IT solutions for
                your unique business needs.
              </h3>
              <p className="pt-2 mb-16 text-center sm:text-start text-black/75 text-lg">
                We combine professionalism and care to deliver comprehensive ICT
                services that help your business grow and thrive.
              </p>
              <div className="text-center sm:text-start">
                <TransitionLink
                  href="/solutions"
                  label="Solutions"
                  className="inline-block text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full bg-primary border border-primary hover:bg-accent hover:border-accent duration-300"
                >
                  View Solutions
                </TransitionLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Beliefs;
