import { ReactElement } from "react";
import tw from "tailwind-styled-components";

const TWAboutWrapper = tw.div<any>`
    py-24
    bg-primary/10
`;
const TWContainer = tw.div<any>`
    container
    grid
    grid-cols-1

    md:grid-cols-2
`;

const About = (): ReactElement => (
  <TWAboutWrapper>
    <TWContainer>
      <p>photo</p>
      <p>description</p>
    </TWContainer>
  </TWAboutWrapper>
);

export default About;
