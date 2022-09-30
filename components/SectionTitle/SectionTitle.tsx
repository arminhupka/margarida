import { ReactElement } from "react";
import tw from "tailwind-styled-components";

const TWSectionTitleWapper = tw.div<any>`
  relative
  mb-8
`;

const TWTitle = tw.h2<{ light?: boolean }>`
  ${(props: { light?: boolean }) => props.light && "text-primary"}
  
  relative
  font-prata
  text-4xl
  flex
  items-center
  
  after:content-[""]
  after:-bottom-4
  after:inline-block
  after:flex-1
  after:h-1
  after:ml-8
  after:bg-primary
`;

interface IProps {
  title: string;
  light?: boolean;
}

const SectionTitle = ({ title, light }: IProps): ReactElement => (
  <TWSectionTitleWapper>
    <TWTitle light={light}>{title}</TWTitle>
  </TWSectionTitleWapper>
);

export default SectionTitle;
