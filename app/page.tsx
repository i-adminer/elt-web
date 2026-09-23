import React from "react";
import Hero from "@/components/Home/Hero";
import Aboutus from "@/components/Home/AboutUs";
import Partners from "@/components/Home/Partners";
import Dedicated from "@/components/Home/Dedicated";
import Beliefs from "@/components/Home/Beliefs";
import Team from "@/components/Home/Team";
import Featured from "@/components/Home/Featured";
import FAQ from "@/components/Home/FAQ";
import Testimonial from "@/components/Home/Testimonials";
import Join from "@/components/Home/Joinus";
import Insta from "@/components/Home/Insta";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Easylink Technologies | Outsourcing Managed IT Services",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Aboutus />
      <Partners />
      <Beliefs />
      <Dedicated />
      <Team />
      <Featured />
      <FAQ />
      <Testimonial />
      <Join />
      <Insta />
    </main>
  );
}
