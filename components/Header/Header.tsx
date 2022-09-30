import Image from "next/image";
import { ReactElement } from "react";
import { FaInstagram } from "react-icons/fa";
import tw from "tailwind-styled-components";
import { TWLinkButton } from "../Button/Button";
import { FaPhone } from "react-icons/fa";

const TWTopbar = tw.div<any>`
    py-2
    bg-primary
`;

const TWTopbarContainer = tw.div<any>`
    container
    flex
    justify-center

    md:justify-start
`;

const TWHeader = tw.header<any>`
    bg-dark
`;

const TWHeaderContainer = tw.div<any>`
    container
    py-4
    flex
    items-center
    justify-between
    gap-8
`;

const TWSimpleLink = tw.a<any>`
    relative
    p-4
    inline-flex
    items-center
    font-semibold
    bg-primary
    uppercase
    transition-colors
    cursor-pointer
    text-lg

    hover:bg-primaryLight

`;

const TWLogoWrapper = tw.div<any>``;

const Header = (): ReactElement => (
  <>
    <TWTopbar>
      <TWTopbarContainer>
        <a href="https://www.instagram.com/margaridasalon/">
          <FaInstagram />
        </a>
      </TWTopbarContainer>
    </TWTopbar>
    <TWHeader>
      <TWHeaderContainer>
        <TWLogoWrapper>
          <Image
            src="/margarida_logo_color.svg"
            alt="Margarida Salon Logo"
            width={200}
            height={70}
          />
        </TWLogoWrapper>
        <TWLinkButton className="hidden md:block" href="tel:57730384">
          Zadzwoń Do nas
        </TWLinkButton>
        <TWSimpleLink href="tel:57730384" className="md:hidden">
          <FaPhone />
        </TWSimpleLink>
      </TWHeaderContainer>
    </TWHeader>
  </>
);

export default Header;
