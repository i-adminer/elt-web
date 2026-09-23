import Image from "next/image";
import { TransitionLink } from "@/components/Transitions/TransitionLink";

const Logo: React.FC = () => {
  return (
    <TransitionLink href="/" label="Home" className="block">
      <Image
        src="/logo/logo.png"
        alt="Desgy Solutions"
        width={150}
        height={50}
        className="h-auto w-auto max-h-12"
        priority
      />
    </TransitionLink>
  );
};

export default Logo;
