"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import { TransitionLink } from "@/components/Transitions/TransitionLink";
import { FaArrowRight } from "react-icons/fa6";
import {
  ZOHO_ALL_SIGNUP_URL,
  ZOHO_PRODUCTS,
  ZOHO_BENEFITS,
  type ZohoProduct,
} from "@/data/zoho";

// Product Card
function ZohoProductCard({ product }: { product: ZohoProduct }) {
  return (
    <article className="w-full flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Logo header — fixed height */}
      <div
        className="flex items-center justify-center h-24 flex-shrink-0 rounded-t-2xl px-6"
        style={{ backgroundColor: "var(--color-grey)" }}
      >
        <Image
          src={product.logo}
          alt={product.name}
          width={80}
          height={80}
          className="object-contain w-auto h-auto max-h-14 transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content — grows to fill, pins CTA at bottom */}
      <div className="flex flex-col flex-1 p-6">
        <div className="mb-3">
          <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
          <p
            className="text-sm font-medium mt-0.5"
            style={{ color: "var(--color-accent)" }}
          >
            {product.tagline}
          </p>
        </div>

        {/* Fixed-height description area — 3 lines max, all cards identical */}
        <p className="text-sm text-gray-600 leading-relaxed flex-1 line-clamp-3">
          {product.description}
        </p>

        <a
          href={product.signupUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Get started with ${product.name}, opens Zoho sign-up page`}
          className="mt-5 inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-all hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
          style={{ backgroundColor: "var(--color-primary)" }}
        >
          Get Started <FaArrowRight size={11} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

// Main Page
export default function ZohoPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="pt-40 pb-20 border-b border-gray-100 overflow-hidden">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div data-aos="fade-right" data-aos-duration="600">
              <p
                className="text-sm font-mono uppercase tracking-widest mb-4"
                style={{ color: "var(--color-accent)" }}
              >
                Zoho Business Solutions
              </p>
              <h1 className="text-gray-900 text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Power your business
                <br />
                with Zoho
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-xl">
                EasyLink helps businesses discover, implement, configure,
                integrate, and support Zoho solutions across East Africa. From
                team collaboration to cloud accounting and customer support, we
                match the right Zoho products to your business needs and make
                sure they are set up to deliver real results.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={ZOHO_ALL_SIGNUP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Get started with Zoho, opens Zoho sign-up page"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold text-white transition-all hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent"
                  style={{ backgroundColor: "var(--color-accent)" }}
                >
                  Get Started with Zoho{" "}
                  <FaArrowRight size={13} aria-hidden="true" />
                </a>
                <TransitionLink
                  href="/contact"
                  label="Contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 px-7 py-3.5 text-base font-semibold transition-all hover:bg-primary hover:text-white hover:border-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
                  style={{
                    borderColor: "var(--color-primary)",
                    color: "var(--color-primary)",
                  }}
                >
                  Talk to Our Team
                </TransitionLink>
              </div>
            </div>

            {/* Right — premium partner badge */}
            <div
              className="flex items-center justify-center lg:justify-end"
              data-aos="fade-left"
              data-aos-duration="600"
            >
              <div className="relative">
                <div className="w-72 h-72 rounded-3xl bg-gray-50 border border-gray-100 flex items-center justify-center shadow-sm overflow-hidden p-6">
                  <Image
                    src="/zoho/premium-badge-new.avif"
                    alt="Zoho Premium Partner badge"
                    width={240}
                    height={240}
                    className="object-contain w-auto h-auto max-w-full max-h-full"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY ZOHO */}
      <section className="py-20 bg-grey">
        <div className="container mx-auto max-w-7xl px-4">
          <div
            className="text-center mb-14"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <p
              className="text-sm font-mono uppercase tracking-widest mb-3"
              style={{ color: "var(--color-accent)" }}
            >
              Why Zoho
            </p>
            <h2 className="text-gray-900 text-3xl md:text-4xl font-bold mb-4">
              Everything your business needs, connected
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Zoho is a comprehensive cloud software suite trusted by businesses
              worldwide. Here is what it can do for yours.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ZOHO_BENEFITS.map((benefit, i) => (
              <div
                key={benefit.title}
                className="flex flex-col gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay={String(i * 80)}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "rgba(45,88,29,0.08)" }}
                >
                  <Icon
                    icon={benefit.icon}
                    className="text-xl"
                    style={{ color: "var(--color-primary)" }}
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-1.5">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ZOHO PRODUCTS */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div
            className="text-center mb-14"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <p
              className="text-sm font-mono uppercase tracking-widest mb-3"
              style={{ color: "var(--color-accent)" }}
            >
              Zoho Products
            </p>
            <h2 className="text-gray-900 text-3xl md:text-4xl font-bold mb-4">
              Six products, one connected platform
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Sign up directly using our partner links. EasyLink handles setup,
              configuration, and ongoing support so you can focus on running
              your business.
            </p>
          </div>

          {/* Flat 6-card grid: 2 cols on mobile/tablet, 3 cols on desktop = 2 rows */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ZOHO_PRODUCTS.map((product, i) => (
              <div
                key={product.slug}
                className="flex"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay={String(i * 80)}
              >
                <ZohoProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-20 bg-primary mb-7 text-white">
        <div
          className="container mx-auto max-w-4xl px-4 text-center"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <p
            className="text-sm font-mono uppercase tracking-widest mb-4"
            style={{ color: "var(--color-accent)" }}
          >
            Get Started
          </p>
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
            Ready to get started with Zoho?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Choose a Zoho solution or speak with our team about the right setup
            for your business.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={ZOHO_ALL_SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Explore all Zoho products, opens Zoho sign-up page"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white transition-all hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent"
              style={{ backgroundColor: "var(--color-accent)" }}
            >
              Explore Zoho <FaArrowRight size={13} aria-hidden="true" />
            </a>
            <TransitionLink
              href="/contact"
              label="Contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-8 py-4 text-base font-semibold text-white transition-all hover:border-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
            >
              Talk to Our Team
            </TransitionLink>
          </div>
        </div>
      </section>
    </main>
  );
}
