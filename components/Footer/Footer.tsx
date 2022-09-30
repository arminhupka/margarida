import { ReactElement } from "react";
import tw from "tailwind-styled-components";

const TWFooter = tw.footer<any>`
    bg-dark
    text-primary
`;

const TWMain = tw.div<any>`
`;

const TWMainContainer = tw.div<any>`
    container
    py-4
`;

const TWCopy = tw.div<any>`
    border-t
    border-primary
`;

const TWCopyContainer = tw.div<any>`
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
