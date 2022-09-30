import { ReactElement } from "react";
import tw from "tailwind-styled-components";
import SectionTitle from "../SectionTitle/SectionTitle";
import ServiceItem from "./ServiceItem";

const TWServicesWrapper = tw.div<any>`
    py-24
    bg-primaryLight
    border-t
    border-b
    border-primary
`;
const TWContainer = tw.div<any>`
    container
`;
const TWGrid = tw.div<any>`
    p-8
    grid
    grid-cols-1
    gap-8
    bg-dark

    md:grid-cols-2
    lg:grid-cols-4
`;

const data = [
  {
    id: 1,
    title: "Fryzjerstwo damskie",
    description: "Some description",
    url: "/img/fryzjerstwo.jpeg",
  },
  {
    id: 2,
    title: "Fryzjerstwo męskie",
    url: "/img/fryzjerstwo_meskie.jpeg",
    description:
      "W salonie jest wydzielone specjalne miejsce dla barbera, który zadba o włosy i brodę prawdziwego mężczyzny.",
  },
  {
    id: 3,
    title: "Fryzjerstwo okolicznościowe",
    description:
      "Specjalnością salonu są fryzury okolicznościowe wykonywane na miejscu lub z dojazdem do klienta w pakietach ślubnych.",
    url: "/img/fryzjerstwo_okolicznosciowe.jpeg",
  },
  {
    id: 4,
    title: "Manicure",
    description:
      "Wykonujemy manicure żelowy, hybrydowy, akrylożel, przedłużanie paznokci. Specjalizujemy się w zdobieniach artystycznych.",
    url: "/img/manicure.jpeg",
  },
  {
    id: 5,
    title: "Pedicure",
    description:
      "Nie tylko ładne, zadbane dłonie, ale i stopy stanowią wizytówkę pięknej kobiety.",
    url: "/img/pedicure.jpeg",
  },
  {
    id: 6,
    title: "Stylizacja rzęs i brwi",
    description:
      "Dla upiększenia oprawy oczu proponujemy m.in lifting rzęs i hennę brwi.",
    url: "/img/brwi_i_rzesy.jpeg",
  },
  {
    id: 7,
    title: "Przekłuwanie uszu",
    description:
      "Przekłuwanie uszu wykonujemy jednocześnie na dwie małżowiny uszne, specjalnym bezhukowym urządzeniem. Przekłuwamy również cześć chrzestną ucha i nos.",
    url: "/img/przekluwanie_uszu.jpeg",
  },
  {
    id: 8,
    title: "Makijaże okolicznosciowe",
    description:
      "Dzięki makijażowi możesz poczuć się wyjątkowo piękna. Oferujemy profesjonalny makijaż, stylizacje wieczorowe i do sesji zdjęciowej.",
    url: "/img/makijaz_okolicznosciowy.jpeg",
  },
];

const Services = (): ReactElement => (
  <TWServicesWrapper>
    <TWContainer>
      <SectionTitle title="Co możemy dla Ciebie zrobi" />
      <TWGrid>
        {data.map((item) => (
          <ServiceItem
            key={item.id}
            title={item.title}
            image={item.url}
            description={item.description}
          />
        ))}
      </TWGrid>
    </TWContainer>
  </TWServicesWrapper>
);

export default Services;
