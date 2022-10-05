import Image from "next/image";
import { ReactElement } from "react";
import {FaFacebookF, FaInstagram} from "react-icons/fa";
import tw from "tailwind-styled-components";
import { TWLinkButton } from "../Button/Button";
import { FaPhone } from "react-icons/fa";

const TWTopbar = tw.div<any>`
    py-4
    bg-primary
`;

const TWTopbarContainer = tw.div<any>`
    container
    flex
    justify-center
    items-center
    space-x-4

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
        <a href="https://www.facebook.com/malgorzataprzygodamargaridasalon">
          <FaFacebookF/>
        </a>
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
            priority
          />
        </TWLogoWrapper>
        <TWLinkButton className="hidden md:block" href="tel:577308384">
          Zadzwoń Do nas
        </TWLinkButton>
        <TWSimpleLink href="tel:577308384" className="md:hidden">
          <FaPhone />
        </TWSimpleLink>
      </TWHeaderContainer>
    </TWHeader>
  </>
);

export default Header;
