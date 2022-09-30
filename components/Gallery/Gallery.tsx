import { ReactElement } from "react";
import tw from "tailwind-styled-components";
import SectionTitle from "../SectionTitle/SectionTitle";
import GalleryItem from "./GalleryItem/GalleryItem";

const TWGalleryWrapper = tw.div`
    py-24
`;

const TWContainer = tw.div`
    container
`;

const TWGrid = tw.div`
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
        <GalleryItem />
        <GalleryItem />
        <GalleryItem />
        <GalleryItem />
        <GalleryItem />
        <GalleryItem />
        <GalleryItem />
        <GalleryItem />
      </TWGrid>
    </TWContainer>
  </TWGalleryWrapper>
);

export default Gallery;
