import { ReactElement } from "react";
import tw from "tailwind-styled-components";
import Image from "next/image";

const TWAboutWrapper = tw.div<any>`
    py-24
    bg-primary/10
`;
const TWContainer = tw.div<any>`
    relative
    container
    grid
    grid-cols-1
    gap-8


    lg:block
`;

const TWImageWrapper = tw.div<any>`
  relative
  rounded
  overflow-hidden
  shadow-2xl

  lg:w-3/4
`;

const TWDescription = tw.div<any>`
  p-4
  flex
  flex-col
  space-y-4

  bg-white
  border
  border-prim
  rounded

  lg:absolute
  lg:w-1/2
  lg:top-1/2
  lg:left-1/2
  lg:transform
  lg:-translate-y-1/2
  lg:p-8

`;

const About = (): ReactElement => (
  <TWAboutWrapper>
    <TWContainer>
      <TWImageWrapper
        style={{
          height: "450px",
        }}
      >
        <Image
          src="/img/unknown.jpg"
          alt="Salon Kosmetyczny Margarida"
          layout="fill"
          objectPosition="bottom"
          objectFit="cover"
        />
      </TWImageWrapper>
      <TWDescription>
        <p>
          Salon Margarida to wyjątkowe miejsce tworzone z pasją i miłością do
          podkreślenia urody i naturalnego piękna. W ofercie gabinetu dostępne
          są zabiegi zarówno dla Pań jak i dla Panów.
        </p>
        <p>
          Szeroki wachlarz usług z zakresu pielęgnacji włosów oraz stylizacji
          paznokci. Wieloletnie doświadczenie oraz nieustanny rozwój i
          holistyczne podejście pozwala na profesjonalne obsłuenie klienta.
        </p>
      </TWDescription>
    </TWContainer>
  </TWAboutWrapper>
);

export default About;
