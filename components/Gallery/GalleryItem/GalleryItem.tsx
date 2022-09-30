import { ReactElement } from "react";
import tw from "tailwind-styled-components";
import Image from "next/image";

const TWGalleryItemWrapper = tw.div<any>``;
const TWImageWrapper = tw.div<any>`
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
