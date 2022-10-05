import { ReactElement } from "react";
import tw from "tailwind-styled-components";
import {FiClock, FiHome, FiPhone} from "react-icons/fi";

const TWFooter = tw.footer<any>`
`;

const TWMain = tw.div<any>`
    bg-primary/30
    border-t-2
    border-primary
`;

const TWMainContainer = tw.div<any>`
    container
    py-16
    
    grid
    gap-8
    grid-cols-1
    
    lg:grid-cols-3
`;

const TWCopy = tw.div<any>`
    bg-dark
    border-t
    border-primary/10
`;

const TWCopyContainer = tw.div<any>`
    container
    py-3
    text-sm
    text-center
    text-white
    lowercase
`;

const TWFooterWidget = tw.div<any>`
    flex
    flex-col
    items-center
    space-y-4
`

const TWFooterWidgetTitle = tw.h4<any>`
    text-2xl
    font-prata
    text-center
`

const TWIconWrapper = tw.div<any>`
    text-6xl
    text-primary
`

const Footer = (): ReactElement => (
  <TWFooter>
    <TWMain>
      <TWMainContainer>
          <TWFooterWidget>
              <TWIconWrapper>
                  <FiPhone/>
              </TWIconWrapper>
              <TWFooterWidgetTitle>Kontakt</TWFooterWidgetTitle>
              <ul>
                  <li>
                      <a href="tel:577308384">T: 577-308-384</a>
                  </li>
              </ul>
          </TWFooterWidget>
          <TWFooterWidget>
              <TWIconWrapper>
                  <FiClock/>
              </TWIconWrapper>
              <TWFooterWidgetTitle>Godziny Otwarcia</TWFooterWidgetTitle>
              <ul className="flex flex-col space-y-4">
                  <li className="flex flex-col items-center">
                      <span className="font-medium">Poniedziałek / Piątek</span>
                      <span>08:00 - 20:00</span>
                  </li>
                  <li className="flex flex-col items-center">
                      <span className="font-medium">Sobota</span>
                      <span>08:00 - 13:00</span>
                  </li>
              </ul>
          </TWFooterWidget>
          <TWFooterWidget>
              <TWIconWrapper>
                  <FiHome/>
              </TWIconWrapper>
              <TWFooterWidgetTitle>Adres</TWFooterWidgetTitle>
              <address>
                  <ul>
                      <li className="flex flex-col items-center">
                          <span>ul. Tyniecka 13A</span>
                          <span>Żerniki Małe, 55-040</span>
                      </li>
                  </ul>
              </address>
          </TWFooterWidget>
      </TWMainContainer>
    </TWMain>
    <TWCopy>
      <TWCopyContainer>
        <span>Created with love by Netriot</span>
      </TWCopyContainer>
    </TWCopy>
  </TWFooter>
);

export default Footer;
