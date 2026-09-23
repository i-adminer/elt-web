import Image from "next/image";
import { TransitionLink } from "@/components/Transitions/TransitionLink";

const pillars = [
  {
    image: "/images/it.jpeg",
    alt: "Customization",
    overline: "Pillar 01",
    title: "Customization",
    description:
      "Tailored IT solutions designed around your specific business needs — never a one-size-fits-all approach.",
    accent: "var(--color-primary)",
    cta: null,
  },
  {
    image: "/images/insta/insta2.png",
    alt: "Professionalism",
    overline: "Pillar 02",
    title: "Professionalism",
    description:
      "Enterprise-grade ICT support delivered to businesses of every size, with the same standards throughout.",
    accent: "var(--color-accent)",
    cta: null,
  },
  {
    image: "/images/insta/insta3.png",
    alt: "Care",
    overline: "Pillar 03",
    title: "Care",
    description:
      "We treat your technology like our own. Your success is our success and we are always in your corner.",
    accent: "var(--color-primary)",
    cta: null,
  },
  {
    image: "/images/elt-hero.png",
    alt: "24/7 Support",
    overline: "Pillar 04",
    title: "24/7 Support",
    description:
      "Always here when you need us. Round-the-clock helpdesk support across East Africa, any day, any time.",
    accent: "var(--color-accent)",
    cta: "/contact",
  },
];

const Insta = () => {
  return (
    <section className="container mx-auto max-w-2xl pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:-mb-44 lg:-mb-34">
      <div className="grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((pillar, i) => (
          <div
            key={i}
            className="relative group mx-auto w-full overflow-hidden rounded-3xl border border-cyan-300/20per"
          >
            {/* Background image */}
            <Image
              src={pillar.image}
              width={306}
              height={306}
              alt={pillar.alt}
              className="w-full h-full object-cover"
            />

            {/* Always-visible bottom gradient so the image doesn't look bare */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-3xl" />

            {/* Sliding overlay — slides up from bottom on hover */}
            <div
              className="absolute inset-0 rounded-3xl translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out flex flex-col justify-end p-6"
              style={{
                background: `linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.80) 50%, rgba(0,0,0,0.50) 100%)`,
              }}
            >
              <p className="text-white/70 text-xs font-mono uppercase tracking-widest mb-2">
                {pillar.overline}
              </p>
              <h4 className="text-white text-xl font-bold mb-3">
                {pillar.title}
              </h4>
              <p className="text-white/90 text-sm leading-relaxed">
                {pillar.description}
              </p>
              {pillar.cta && (
                <TransitionLink
                  href={pillar.cta}
                  label="Contact"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-xs font-semibold w-fit transition-all hover:opacity-90"
                  style={{ color: pillar.accent }}
                >
                  Get Started
                </TransitionLink>
              )}
              {/* Accent colour bar */}
              <div
                className="mt-4 h-1 w-12 rounded-full"
                style={{ backgroundColor: pillar.accent }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Insta;
