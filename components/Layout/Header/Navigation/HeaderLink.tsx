"use client";
import { useState } from "react";
import { HeaderItem } from "@/types/menu";
import { usePathname } from "next/navigation";
import { TransitionLink } from "@/components/Transitions/TransitionLink";

const HeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const path = usePathname();
  const handleMouseEnter = () => {
    if (item.submenu) {
      setSubmenuOpen(true);
    }
  };
  const handleMouseLeave = () => {
    setSubmenuOpen(false);
  };

  const isActive =
    path === item.href || item.submenu?.some((sub) => path === sub.href);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <TransitionLink
        href={item.href}
        label={item.label}
        className={` flex items-center gap-1 capitalize relative group ${
          isActive
            ? "text-primary font-semibold"
            : "text-black/75 hover:text-black"
        }`}
      >
        {item.label}
        {item.submenu && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="m7 10l5 5l5-5"
            />
          </svg>
        )}
        {/* Animated underline */}
        <span
          className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
            isActive ? "w-full" : "w-0 group-hover:w-1/2 group-hover:left-1/4"
          }`}
          style={{
            transformOrigin: isActive ? "left" : "center",
          }}
        />
      </TransitionLink>
      {submenuOpen && (
        <div
          className="absolute py-2 left-0 mt-0.5 w-60 bg-white shadow-lg rounded-lg z-50"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          {item.submenu?.map((subItem, index) => (
            <TransitionLink
              key={index}
              href={subItem.href}
              label={subItem.label}
              className={`block px-4 py-2 transition-colors duration-200 ${
                path === subItem.href
                  ? "bg-primary text-white font-semibold"
                  : "text-black/75 hover:bg-primary hover:text-white"
              }`}
            >
              {subItem.label}
            </TransitionLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeaderLink;
