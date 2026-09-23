"use client";
import { Key, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { HeaderItem } from "@/types/menu";
import Logo from "./Logo";
import HeaderLink from "./Navigation/HeaderLink";
import MobileHeaderLink from "./Navigation/MobileHeaderLink";
import { Icon } from "@iconify/react/dist/iconify.js";
import ThemeToggler from "./ThemeToggler";
import { TransitionLink } from "@/components/Transitions/TransitionLink";

const Header: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const navbarRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    setSticky(window.scrollY >= 80);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarOpen]);

  useEffect(() => {
    if (navbarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [navbarOpen]);

  // header data fetch

  const [headerData, setHeaderData] = useState<HeaderItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/data");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setHeaderData(data.headerData);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-all duration-300 border-b border-black/10 ${
        sticky ? " shadow-lg bg-white" : "shadow-none"
      }`}
    >
      <div className="lg:py-0 py-2">
        <div className="container mx-auto max-w-(--breakpoint-xl) flex items-center justify-between px-4">
          <div
            className={`pr-16 lg:border-r border-black/10 duration-300 ${
              sticky ? "py-3" : "py-7"
            }`}
          >
            <Logo />
          </div>
          <nav className="hidden lg:flex grow items-center gap-8 justify-center">
            {headerData.map((item, index) => (
              <HeaderLink key={index} item={item} />
            ))}
          </nav>
          <div
            className={`flex items-center gap-4 pl-16 lg:border-l border-black/10 duration-300 ${
              sticky ? "py-3" : "py-7"
            }`}
          >
            <Link
              href="https://easylinktechnologies.freshdesk.com/support/home"
              target="_blank"
              className="hidden lg:block bg-transparent text-darkmode border hover:bg-darkmode border-darkmode hover:text-white px-4 py-2 rounded-lg hover:cursor-pointer transition-colors duration-300"
            >
              Raise a Ticket
            </Link>
            <TransitionLink
              href="/contact"
              label="Contact Us"
              className="hidden lg:block bg-[var(--color-accent)] text-white hover:bg-[var(--color-primary)] border border-[var(--color-accent)] hover:border-[var(--color-primary)] px-4 py-2 rounded-lg hover:cursor-pointer transition-colors duration-300"
            >
              Work with Us
            </TransitionLink>

            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="block lg:hidden p-2 rounded-lg"
              aria-label="Toggle mobile menu"
            >
              <span className="block w-6 h-0.5 bg-darkmode"></span>
              <span className="block w-6 h-0.5 bg-darkmode mt-1.5"></span>
              <span className="block w-6 h-0.5 bg-darkmode mt-1.5"></span>
            </button>
          </div>
        </div>
        {navbarOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-40" />
        )}
        <div
          ref={mobileMenuRef}
          className={`lg:hidden fixed top-0 right-0 h-full w-full bg-white shadow-lg transform transition-transform duration-300 max-w-xs ${
            navbarOpen ? "translate-x-0" : "translate-x-full"
          } z-50`}
        >
          <div className="flex items-center justify-between p-4 border-b border-border">
            <Logo />

            {/*  */}
            <button
              onClick={() => setNavbarOpen(false)}
              className="bg-[url('/images/closed.svg')] bg-no-repeat bg-contain w-5 h-5"
              aria-label="Close menu Modal"
            ></button>
          </div>
          <nav className="flex flex-col items-start p-4">
            {headerData.map(
              (item: HeaderItem, index: Key | null | undefined) => (
                <MobileHeaderLink
                  key={index}
                  item={item}
                  onLinkClick={() => setNavbarOpen(false)}
                />
              ),
            )}
            <div className="mt-4 flex flex-col space-y-4 w-full">
              <Link
                href="https://easylinktechnologies.freshdesk.com/support/home"
                target="_blank"
                className="bg-transparent border border-black text-black px-4 py-2 rounded-lg hover:bg-black hover:text-white text-center transition-colors duration-300"
                onClick={() => {
                  setNavbarOpen(false);
                }}
              >
                Raise a Ticket
              </Link>
              <TransitionLink
                href="/contact"
                label="Contact Us"
                onNavigate={() => setNavbarOpen(false)}
                className="bg-[var(--color-accent)] text-white px-4 py-2 rounded-lg hover:bg-[var(--color-primary)] text-center transition-colors duration-300"
              >
                Work with Us
              </TransitionLink>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
