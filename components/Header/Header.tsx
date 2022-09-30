import Image from "next/image";
import { ReactElement } from "react";
import tw from "tailwind-styled-components";
import { FaInstagram } from "react-icons/fa";
import { TWLinkButton } from "../Button/Button";

const TWTopbar = tw.div`
    py-2
    bg-primary
`;

const TWTopbarContainer = tw.div`
    container
    flex
    justify-center

    md:justify-start
`;

const TWHeader = tw.header`
    bg-primary/5
`;

const TWHeaderContainer = tw.div`
    container
    py-4
    flex
    items-center
    gap-8

    md:justify-between
`;

const TWLogoWrapper = tw.div``;

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
        <TWLinkButton href="tel:57730384">Zadzwoń Do nas</TWLinkButton>
      </TWHeaderContainer>
    </TWHeader>
  </>
);

export default Header;
