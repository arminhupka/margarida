import { ReactElement } from "react";
import tw from "tailwind-styled-components";

const TWFooter = tw.footer`
    bg-dark
    text-primary
`;

const TWMain = tw.div`
`;

const TWMainContainer = tw.div`
    container
    py-4
`;

const TWCopy = tw.div`
    border-t
    border-primary
`;

const TWCopyContainer = tw.div`
    container
    py-2
    text-sm
    text-center
    text-white
`;

const Footer = (): ReactElement => (
  <TWFooter>
    <TWMain>
      <TWMainContainer>Main</TWMainContainer>
    </TWMain>
    <TWCopy>
      <TWCopyContainer>
        <span>Created with love by Netriot</span>
      </TWCopyContainer>
    </TWCopy>
  </TWFooter>
);

export default Footer;
