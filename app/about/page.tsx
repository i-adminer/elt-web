"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { TransitionLink } from "@/components/Transitions/TransitionLink";
import { FaArrowRight, FaTicketAlt, FaCheckCircle } from "react-icons/fa";

// ── CountUp hook ────────────────────────────────────────────────────────────
function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);

  return count;
}

// ── Stat card with countup ───────────────────────────────────────────────────
function StatCard({
  value,
  suffix,
  label,
  started,
}: {
  value: number;
  suffix: string;
  label: string;
  started: boolean;
}) {
  const count = useCountUp(value, 2000, started);
  return (
    <div className="text-center">
      <p className="text-5xl md:text-6xl font-bold text-white">
        {count}
        <span style={{ color: "var(--color-accent)" }}>{suffix}</span>
      </p>
      <p className="text-white/70 text-base mt-2 font-medium">{label}</p>
    </div>
  );
}

export default function AboutPage() {
  // Trigger countup when stats section enters viewport
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStatsVisible(true);
      },
      { threshold: 0.3 },
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      {/* ── SECTION 1: HERO INTRO ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-40 pb-24 bg-white">
        {/* Decorative circles */}
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-5"
          style={{ background: "var(--color-primary)" }}
        />
        <div
          className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full opacity-5"
          style={{ background: "var(--color-accent)" }}
        />

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <p
                className="text-sm font-mono uppercase tracking-widest mb-4"
                style={{ color: "var(--color-accent)" }}
              >
                Est. 2014
              </p>
              <h1 className="text-gray-900 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                East Africa&apos;s Trusted ICT Support Partner
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Founded in 2014, EasyLink Technologies has grown into a
                recognized leader delivering enterprise-grade IT support to
                small and medium businesses across East Africa. With over two
                decades of combined expertise, our team brings deep technical
                knowledge and genuine care to every client we serve.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                We believe technology should work for your business, not against
                it. From 24/7 helpdesk support to strategic IT leadership, we
                handle the complexity so you can focus on growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <TransitionLink
                  href="/contact"
                  label="Contact"
                  className="inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold text-white transition-all hover:opacity-90"
                  style={{ backgroundColor: "var(--color-accent)" }}
                >
                  Work with Us <FaArrowRight size={13} />
                </TransitionLink>
                <a
                  href="https://easylinktechnologies.freshdesk.com/support/home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border-2 px-7 py-4 text-sm font-semibold transition-all hover:text-white"
                  style={{
                    borderColor: "var(--color-primary)",
                    color: "var(--color-primary)",
                  }}
                >
                  <FaTicketAlt size={13} /> Raise a Ticket
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/team/team.png"
                  alt="EasyLink Technologies Team"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.6), transparent 60%)",
                  }}
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5">
                <p
                  className="text-3xl font-bold"
                  style={{ color: "var(--color-primary)" }}
                >
                  10+
                </p>
                <p className="text-sm text-gray-600 font-medium">
                  Years of Service
                </p>
              </div>
              <div
                className="absolute -top-6 -right-6 rounded-2xl shadow-xl p-5"
                style={{ backgroundColor: "var(--color-accent)" }}
              >
                <p className="text-3xl font-bold text-white">24/7</p>
                <p className="text-sm text-white/80 font-medium">Always On</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: STATS COUNTUP ──────────────────────────────────────── */}
      <section ref={statsRef} className="py-20 bg-gray-900">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <StatCard
              value={10}
              suffix="+"
              label="Years Founded"
              started={statsVisible}
            />
            <StatCard
              value={20}
              suffix="+"
              label="Years Combined Expertise"
              started={statsVisible}
            />
            <StatCard
              value={150}
              suffix="+"
              label="Clients Served"
              started={statsVisible}
            />
            <StatCard
              value={99}
              suffix="%"
              label="Client Satisfaction"
              started={statsVisible}
            />
          </div>
        </div>
      </section>

      {/* ── SECTION 3: MISSION / VISION / VALUES ──────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <p
              className="text-sm font-mono uppercase tracking-widest mb-3"
              style={{ color: "var(--color-accent)" }}
            >
              Who We Are
            </p>
            <h2 className="text-gray-900 max-w-2xl mx-auto">
              Built on purpose, driven by values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Mission */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col gap-4">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: "var(--color-primary)" }}
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To deliver reliable, affordable, and professional ICT support
                that empowers businesses across East Africa to operate
                efficiently, securely, and confidently in a technology-driven
                world.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-black">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted ICT partner for small and medium
                businesses in East Africa, making enterprise-grade technology
                support accessible to every organisation regardless of size or
                budget.
              </p>
            </div>

            {/* Core Values */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col gap-4">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: "var(--color-accent)" }}
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Core Values</h3>
              <ul className="flex flex-col gap-3">
                {[
                  "Customization, solutions built around you",
                  "Professionalism, enterprise standards always",
                  "Care, your success is our success",
                ].map((v, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-600">
                    <FaCheckCircle
                      className="mt-1 flex-shrink-0"
                      style={{ color: "var(--color-primary)" }}
                    />
                    <span>{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Achievements strip */}
          <div className="rounded-3xl p-8 md:p-12 text-white bg-primary">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                  Why businesses across East Africa choose us
                </h3>
                <p className="text-white/80 leading-relaxed">
                  From Nairobi to the wider East African region, we have helped
                  over 200 businesses transform how they use and manage
                  technology. Our fixed monthly pricing, proactive approach, and
                  genuine care set us apart.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Active Cybersecurity Protection" },
                  { label: "Strategic IT Planning" },
                  { label: "Cloud Migration Experts" },
                  { label: "Proactive Maintenance" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-white/10 rounded-2xl p-4"
                  >
                    <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0"
                      style={{ backgroundColor: 'var(--color-accent)' }} />
                    <span className="text-sm font-medium text-white">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: FOUNDER + TEAM ──────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <p
              className="text-sm font-mono uppercase tracking-widest mb-3"
              style={{ color: "var(--color-accent)" }}
            >
              Leadership
            </p>
            <h2 className="text-gray-900">The people behind EasyLink</h2>
          </div>

          {/* Founder */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/images/founder/ceo.png"
                  alt="Mr. Ephraim John — Founder & CIO"
                  width={560}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)",
                  }}
                />
                <div className="absolute bottom-6 left-6">
                  <p className="text-white text-xl font-bold">Mr. Ephraim John</p>
                  <p
                    className="text-white/70 text-sm"
                    style={{ color: "var(--color-accent)" }}
                  >
                    Founder & CIO
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p
                className="text-sm font-mono uppercase tracking-widest mb-4"
                style={{ color: "var(--color-primary)" }}
              >
                A Word from the Founder
              </p>
              <blockquote className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                &ldquo;Dedicated to ICT excellence.&rdquo;
              </blockquote>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Mr. Ephraim John founded EasyLink Technologies with a clear
                conviction: every business, regardless of size, deserves access
                to reliable, professional IT support. With over two decades of
                experience spanning cybersecurity, data protection, network
                infrastructure, and strategic IT leadership, he built EasyLink
                to be the partner he wished existed when he started in the
                industry.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Under his leadership, EasyLink has grown from a local Nairobi
                operation into a trusted ICT partner serving businesses across
                East Africa, always guided by the principles of customization,
                professionalism, and care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: CTA ────────────────────────────────────────────────── */}
      <section className="py-24 bg-black">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <p
            className="text-sm font-mono uppercase tracking-widest mb-4"
            style={{ color: "var(--color-accent)" }}
          >
            Let&apos;s Work Together
          </p>
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
            Ready to transform your business?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
            Talk to our team today and find out how EasyLink Technologies can
            take the stress out of IT so you can focus on what matters most —
            growing your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <TransitionLink
              href="/contact"
              label="Contact"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white transition-all hover:opacity-90 shadow-lg"
              style={{ backgroundColor: "var(--color-accent)" }}
            >
              Get in Touch <FaArrowRight size={14} />
            </TransitionLink>
            <a
              href="https://easylinktechnologies.freshdesk.com/support/home"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-8 py-4 text-base font-semibold text-white transition-all hover:border-white hover:bg-white/10"
            >
              <FaTicketAlt size={14} /> Raise a Ticket
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
