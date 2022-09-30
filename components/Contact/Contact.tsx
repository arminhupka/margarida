import { ReactElement } from "react";
import tw from "tailwind-styled-components";
import ContactItem from "./ContactItem";

const TWContactWrapper = tw.div`
    py-8
    bg-primary
`;
const TWContainer = tw.div`
    container
`;
const TWGrid = tw.div`
    grid
    grid-cols-2
    gap-8
`;

const Contact = (): ReactElement => (
  <TWContactWrapper>
    <TWContainer>
      <TWGrid>
        <ContactItem />
        <ContactItem />
      </TWGrid>
    </TWContainer>
  </TWContactWrapper>
);

export default Contact;
