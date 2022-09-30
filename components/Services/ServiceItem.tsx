import Image from "next/image";
import { ReactElement } from "react";
import tw from "tailwind-styled-components";

const TWServiceItemWrapper = tw.div<any>`
    group
    relative
    overflow-hidden
    bg-red-750
`;

const TWImageWrapper = tw.div<any>`
    relative
    h-96
    transition
    duration-300

    group-hover:scale-105
`;

const TWDescriptionWrapper = tw.div<any>`
  absolute
  w-full
  h-full
  top-0
  left-0
  p-8
  flex
  items-center
  justify-center
  bg-black/50
  transform
  translate-y-full
  transition
  duration-500

  group-hover:translate-y-0
`;

const TWTitleWrapper = tw.div<any>`
    relative
    bottom-0
    py-4
    w-full
    flex
    justify-center
    bg-primary
`;

const Title = tw.h3<any>`
    font-prata
    text-white
    text-lg
    text-center
`;

const Description = tw.p<any>`
  text-white
  text-center
  opacity-0
  transition-opacity
  duration-500

  group-hover:opacity-100
`;

interface IProps {
  title: string;
  description: string;
  image: string;
}

const ServiceItem = ({ title, description, image }: IProps): ReactElement => (
  <TWServiceItemWrapper>
    <TWImageWrapper>
      <Image
        src={image}
        alt="Usluga"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        quality={65}
      />
    </TWImageWrapper>
    <TWDescriptionWrapper>
      <Description>{description}</Description>
    </TWDescriptionWrapper>
    <TWTitleWrapper>
      <Title>{title}</Title>
    </TWTitleWrapper>
  </TWServiceItemWrapper>
);

export default ServiceItem;
