"use client";
import React from "react";
import Slider from "react-slick";
import { Icon } from "@iconify/react";

interface Testimonial {
  name: string;
  company?: string; // hidden for now, kept for future use
  rating: number;
  comment: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Desmond Wafula",
    company: "Financial Services",
    rating: 5,
    comment:
      "EasyLink transformed how we handle IT. Their 24/7 support means we never lose productivity and any issue gets resolved fast. The fixed monthly pricing makes budgeting simple and stress-free.",
  },
  {
    name: "Ernest Opiyo",
    company: "Legal Practice",
    rating: 5,
    comment:
      "Switching to EasyLink was the best decision for our firm. Their team understands our industry and keeps our systems secure and compliant. Response times are excellent and they are always available when we need them.",
  },
  {
    name: "Simon Kamau",
    company: "Engineering",
    rating: 5,
    comment:
      "The managed ICT service has freed up our team to focus on core business. EasyLink handles everything from network monitoring to user support. Professional, reliable, and always proactive.",
  },
  {
    name: "Albert Mwasaru",
    company: "Hospitality",
    rating: 5,
    comment:
      "Our POS and payment systems used to cause constant headaches. EasyLink sorted everything out and now provides ongoing support. Downtime is almost zero and our operations run smoothly.",
  },
  {
    name: "Sheldon Mule",
    company: "Accounting",
    rating: 5,
    comment:
      "I appreciate how EasyLink tailored their solution specifically to our needs. They did not offer a generic package. They took time to understand our workflow and delivered exactly what we required.",
  },
  {
    name: "Jane Grace Njeri",
    company: "Financial Services",
    rating: 5,
    comment:
      "Their cloud migration service was seamless. Zero data loss, minimal disruption, and excellent guidance throughout the whole process. The team is knowledgeable and communicates clearly at every step.",
  },
  {
    name: "Patricia Akinyi",
    company: "Education",
    rating: 5,
    comment:
      "EasyLink provides our institution with reliable IT support at a cost we can afford. Having enterprise-grade assistance as a small business is something we never thought possible. They make it a reality.",
  },
  {
    name: "Allan Kipchirchir",
    company: "Construction",
    rating: 5,
    comment:
      "The helpdesk is outstanding. I raise a ticket and within minutes someone is working on it. EasyLink has genuinely changed how we think about IT. It is no longer a burden, it is just handled.",
  },
  {
    name: "Caroline Wanjiku",
    company: "Retail",
    rating: 5,
    comment:
      "We had been struggling with slow computers and network problems for years. EasyLink came in, diagnosed everything and fixed it within days. Our staff are more productive now than they have ever been.",
  },
];

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: false,
  autoplay: true,
  speed: 600,
  autoplaySpeed: 5000,
  cssEase: "ease-in-out",
  responsive: [
    {
      breakpoint: 1200,
      settings: { slidesToShow: 3, slidesToScroll: 3 },
    },
    {
      breakpoint: 800,
      settings: { slidesToShow: 2, slidesToScroll: 2 },
    },
    {
      breakpoint: 450,
      settings: { slidesToShow: 1, slidesToScroll: 1 },
    },
  ],
};

const TestimonialCard = ({ item }: { item: Testimonial }) => {
  return (
    <div className="px-3 py-6 h-full">
      <div className="bg-white shadow-md rounded-3xl p-8 h-full flex flex-col justify-between gap-6">
        {/* Stars */}
        <div className="flex gap-1">
          {Array.from({ length: 5 }, (_, i) => (
            <Icon
              key={i}
              icon="twemoji:star"
              width="16"
              className={i < item.rating ? "" : "opacity-20"}
            />
          ))}
        </div>

        {/* Comment */}
        <p className="text-base text-gray-700 leading-relaxed flex-1">
          &ldquo;{item.comment}&rdquo;
        </p>

        {/* Divider */}
        <hr className="border-gray-100" />

        {/* Author */}
        <div className="flex items-center gap-4">
          {/* Default user icon — no profile images */}
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: "var(--color-primary)" }}
          >
            <Icon icon="mdi:account" width="26" className="text-white" />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">{item.name}</p>
            {/* Company hidden for now — kept in data for future use */}
            {/* <p className='text-xs text-gray-500'>{item.company}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonial: React.FC = () => {
  return (
    <section
      className="bg-testimonial bg-cover bg-center overflow-hidden"
      id="testimonial-section"
    >
      <div className="container mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <p
            className="text-sm font-mono uppercase tracking-widest mb-3"
            style={{ color: "var(--color-accent)" }}
          >
            Testimonials
          </p>
          <h2 className="text-gray-900">See what others are saying.</h2>
        </div>

        <Slider {...settings}>
          {testimonials.map((item, i) => (
            <TestimonialCard key={i} item={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
