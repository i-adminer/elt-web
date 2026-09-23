"use client";
import React from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  speed: 3000,
  autoplaySpeed: 2000,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

const partners = [
  { name: "ESET", logo: "/images/partners/eset.webp" },
  { name: "Google Workspace", logo: "/images/partners/google-workspace.webp" },
  { name: "Dell", logo: "/images/partners/dell.webp" },
  { name: "Linux", logo: "/images/partners/linux.webp" },
  { name: "Office 365", logo: "/images/partners/office365.webp" },
  { name: "TeamViewer", logo: "/images/partners/teamviewer.webp" },
  { name: "Zoho", logo: "/images/partners/zoho.webp" },
  { name: "Sophos", logo: "/images/partners/sophos.webp" },
  { name: "Cisco", logo: "/images/partners/cisco.webp" },
  { name: "Microsoft", logo: "/images/partners/microsoft.webp" },
];

const Partners = () => {
  return (
    <section id="Partners" className="relative py-16 bg-grey overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <p className="text-primary text-lg tracking-widest uppercase mb-3">
            Trusted Partners
          </p>
          <h2 className="text-black">Our Partners</h2>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-4">
        <Slider {...settings}>
          {partners.map((partner, i) => (
            <div key={i} className="px-6 py-8">
              <div className="flex items-center justify-center">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={250}
                  height={100}
                  className="object-contain w-auto h-auto max-h-20"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Partners;
