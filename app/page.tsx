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
  title: "Home",
  description:
    "EasyLink Technologies — East Africa's trusted ICT support partner. 24/7 managed IT services, helpdesk support, cloud solutions, and data protection for businesses in Kenya and beyond.",
  alternates: { canonical: "https://www.easylink.co.ke" },
  openGraph: {
    title: "EasyLink Technologies | ICT Support Services East Africa",
    description:
      "24/7 managed IT services, helpdesk support, cloud solutions, and data protection for businesses in East Africa.",
    url: "https://www.easylink.co.ke",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
  },
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
