import { ReactElement } from "react";
import tw from "tailwind-styled-components";
import SectionTitle from "../SectionTitle/SectionTitle";
import GalleryItem from "./GalleryItem/GalleryItem";

const TWGalleryWrapper = tw.div<any>`
    py-24
`;

const TWContainer = tw.div<any>`
    container
`;

const TWGrid = tw.div<any>`
    grid
    grid-cols-2
    gap-8

    md:grid-cols-4
`;

const Gallery = (): ReactElement => (
  <TWGalleryWrapper>
    <TWContainer>
      <SectionTitle title="Nasze prace" />
      <TWGrid>
        <GalleryItem image="/gallery/1.jpeg" />
        <GalleryItem image="/gallery/2.jpeg" />
        <GalleryItem image="/gallery/3.jpeg" />
        <GalleryItem image="/gallery/4.jpeg" />
        <GalleryItem image="/gallery/5.jpeg" />
        <GalleryItem image="/gallery/6.jpeg" />
        <GalleryItem image="/gallery/7.jpeg" />
        <GalleryItem image="/gallery/8.jpeg" />
      </TWGrid>
    </TWContainer>
  </TWGalleryWrapper>
);

export default Gallery;
