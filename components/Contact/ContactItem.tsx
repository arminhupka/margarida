import { ReactElement } from "react";
import tw from "tailwind-styled-components";
import { FaPhone } from "react-icons/fa";

const TWItemWrapper = tw.div<any>``;
const TWIconWrapper = tw.div<any>``;
const TWDetailsWrapper = tw.div<any>``;

const ContactItem = (): ReactElement => (
  <TWItemWrapper>
    <TWIconWrapper>
      <FaPhone />
    </TWIconWrapper>
    <TWDetailsWrapper>some info</TWDetailsWrapper>
  </TWItemWrapper>
);

export default ContactItem;
