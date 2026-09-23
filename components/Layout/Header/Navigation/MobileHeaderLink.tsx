import { useState } from "react";
import { HeaderItem } from "@/types/menu";
import { usePathname } from "next/navigation";
import { TransitionLink } from "@/components/Transitions/TransitionLink";

interface MobileHeaderLinkProps {
  item: HeaderItem;
  onLinkClick?: () => void;
}

const MobileHeaderLink: React.FC<MobileHeaderLinkProps> = ({ item, onLinkClick }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const path = usePathname();

  const handleToggle = (e: React.MouseEvent) => {
    if (item.submenu) {
      e.preventDefault();
      setSubmenuOpen(!submenuOpen);
    }
    // Note: onLinkClick for regular links is now handled via onNavigate prop
  };

  const handleSubmenuClick = () => {
    // Close menu when submenu link is clicked
    onLinkClick?.();
  };

  const isActive = path === item.href || item.submenu?.some(sub => path === sub.href);

  return (
    <div className="relative w-full">
      <div
        onClick={handleToggle}
        className="cursor-pointer"
      >
        <TransitionLink
          href={item.href}
          label={item.label}
          onNavigate={() => !item.submenu && onLinkClick?.()}
          className={`flex items-center justify-between w-full py-2 focus:outline-hidden ${
            isActive ? "text-primary font-semibold" : "text-black/75"
          }`}
        >
          {item.label}
          {item.submenu && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
              className={`transition-transform duration-300 ${submenuOpen ? 'rotate-180' : ''}`}
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
        </TransitionLink>
      </div>
      {submenuOpen && item.submenu && (
        <div className="bg-white rounded-lg mt-2 overflow-hidden shadow-md">
          {item.submenu.map((subItem, index) => (
            <TransitionLink
              key={index}
              href={subItem.href}
              label={subItem.label}
              onNavigate={handleSubmenuClick}
              className={`block py-2 px-4 transition-colors duration-200 ${
                path === subItem.href 
                  ? "bg-primary text-white font-semibold" 
                  : "text-black hover:bg-primary hover:text-white"
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

export default MobileHeaderLink;
