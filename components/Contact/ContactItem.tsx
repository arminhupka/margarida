import { ReactElement } from "react";
import tw from "tailwind-styled-components";
import { FaPhone } from "react-icons/fa";

const TWItemWrapper = tw.div``;
const TWIconWrapper = tw.div``;
const TWDetailsWrapper = tw.div``;

const ContactItem = (): ReactElement => (
  <TWItemWrapper>
    <TWIconWrapper>
      <FaPhone />
    </TWIconWrapper>
    <TWDetailsWrapper>some info</TWDetailsWrapper>
  </TWItemWrapper>
);

export default ContactItem;
