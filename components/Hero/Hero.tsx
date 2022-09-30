import Image from "next/image";
import { ReactElement } from "react";
import tw from "tailwind-styled-components";
import { TWLinkButton } from "../Button/Button";

const TWHeroWrapper = tw.div`
    relative
    py-24
`;

const TWImageWrapper = tw.div`
  absolute
  top-0
  left-0
  w-full
  h-full
`;

const TWImageOverlay = tw.div`
  absolute
  w-full
  h-full
  top-0
  left-0
  bg-black/50
  z-10
`;

const TWHeroContainer = tw.div`
    relative
    container
    h-96
    flex
    flex-col
    items-center
    justify-center
    space-y-8
    z-20
`;

const TWTitle = tw.h2`
    font-prata
    text-white
    text-7xl
`;

const TWDescription = tw.p`
    text-white
    text-center

    lg:w-1/2
`;

const Hero = (): ReactElement => (
  <TWHeroWrapper>
    <TWHeroContainer>
      <TWTitle>Margarida</TWTitle>
      {/* <TWDescription>
        W naszym salonie zaopiekujemy się Twoja skórą, włosami oraz paznokciami.
        Salon Margarida to miejsce w którym doświadczenie oraz pasja pozwala
        wydobyć piękno które jest w każdym z nas.
      </TWDescription> */}
      {/* <TWLinkButton>Umów się na wizytę</TWLinkButton> */}
    </TWHeroContainer>
    <TWImageWrapper>
      <TWImageOverlay />
      <Image
        src="/img/fryzjerstwo.jpeg"
        alt=""
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
    </TWImageWrapper>
  </TWHeroWrapper>
);

export default Hero;
