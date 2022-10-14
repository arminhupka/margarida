import { ReactElement } from "react";
import tw from "tailwind-styled-components";
import Image from "next/image";

const TWGalleryItemWrapper = tw.div<any>``;
const TWImageWrapper = tw.div<any>`
    relative
    aspect-square
`;

interface IProps {
    image: string;
}

const GalleryItem = ({image}: IProps): ReactElement => (
  <TWGalleryItemWrapper>
    <TWImageWrapper>
      <Image src={image} alt="Margarida Salon Kosmetyczny" layout="fill" objectFit="cover" objectPosition="center" />
    </TWImageWrapper>
  </TWGalleryItemWrapper>
);

export default GalleryItem;
