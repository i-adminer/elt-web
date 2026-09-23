"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaXTwitter } from "react-icons/fa6";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-4 right-0 md:bottom-8 md:right-4 z-999">
      <div className="bg-[var(--color-accent)] rounded-l-lg md:rounded-lg shadow-2xl">
        <Link
          href="https://www.linkedin.com/company/easylinktechnologies/"
          target="_blank"
          aria-label="linkedin"
          className="back-to-top flex h-10 w-10 cursor-pointer items-center justify-center bg-[var(--color-accent)] text-white transition duration-300 ease-in-out hover:bg-[var(--color-primary)] rounded-tl-lg md:rounded-t-lg"
        >
          <FaLinkedin className="size-5" />
        </Link>
        <Link
          href="https://x.com/Easylinktech?s=20"
          target="_blank"
          aria-label="twitter"
          className="back-to-top flex h-10 w-10 cursor-pointer items-center justify-center bg-[var(--color-accent)] text-white transition duration-300 ease-in-out hover:bg-[var(--color-primary)]"
        >
          <FaXTwitter className="size-5" />
        </Link>
        <Link
          href="https://wa.me/254202597788"
          target="_blank"
          aria-label="whatsapp"
          className="back-to-top flex h-10 w-10 cursor-pointer items-center justify-center bg-[var(--color-accent)] text-white transition duration-300 ease-in-out hover:bg-[var(--color-primary)]"
        >
          <FaWhatsapp className="size-5" />
        </Link>
        <Link
          href="mailto:info@easylink.co.ke"
          aria-label="email"
          className="back-to-top flex h-10 w-10 cursor-pointer items-center justify-center bg-[var(--color-accent)] text-white transition duration-300 ease-in-out hover:bg-[var(--color-primary)] rounded-bl-lg md:rounded-b-lg"
        >
          <CgMail className="size-5" />
        </Link>
      </div>

      {isVisible && (
        <div className="mt-2">
          <div
            onClick={scrollToTop}
            aria-label="scroll to top"
            className="back-to-top flex h-10 w-10 cursor-pointer items-center justify-center hover:bg-[var(--color-primary)] bg-[var(--color-accent)] text-white shadow-2xl transition duration-300 ease-in-out rounded-l-lg md:rounded-lg"
          >
            <span className="mt-[6px] h-3 w-3 rotate-45 border-l border-t border-white"></span>
          </div>
        </div>
      )}
    </div>
  );
}
