import { ReactElement } from "react";
import tw from "tailwind-styled-components";
import Image from "next/image";

const TWGalleryItemWrapper = tw.div``;
const TWImageWrapper = tw.div`
    relative
    aspect-square
`;

const GalleryItem = (): ReactElement => (
  <TWGalleryItemWrapper>
    <TWImageWrapper>
      <Image src="/img/manicure.jpeg" alt="manicure" layout="fill" />
    </TWImageWrapper>
  </TWGalleryItemWrapper>
);

export default GalleryItem;
