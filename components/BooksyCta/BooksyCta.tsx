import {ReactElement} from "react";
import tw from 'tailwind-styled-components'
import {TWLinkButton} from "../Button/Button";
import Image from "next/image";

const TWWrapper = tw.div<any>`
    pt-24
    border-b
    border-primary
`

const TWContainer = tw.div<any>`
    container
`

const TWGrid = tw.div<any>`
    grid
    grid-cols-1
    
    md:grid-cols-2
`

const TWGridItem = tw.div<any>`
    relative
`


const BooksyCta = (): ReactElement => (
    <TWWrapper>
        <TWContainer>
            <TWGrid>
                <TWGridItem className="space-y-4 flex flex-col justify-center items-start mb-4">
                    <h2 className="text-3xl font-semi font-prata">Znajdź nas na Booksy</h2>
                    <p>Już teraz możesz nas znaleźć w serwisie Booksy dzięki któremu możesz znaleźć odpowiedni dla siebie termin na skorzystanie oraz otrzymywać przypomnienia o umówionej wizycie.</p>
                    <TWLinkButton href="https://booksy.com/pl-pl/162508_margarida-salon_fryzjer_15108_kobierzyce">Umów wizytę na Booksy</TWLinkButton>
                </TWGridItem>
                <TWGridItem className="mt-16 lg:mt-0">
                    <Image src="/img/girl.png" layout="responsive" width={250} height={200} objectFit="contain"/>
                </TWGridItem>
            </TWGrid>
        </TWContainer>
    </TWWrapper>
)

export default BooksyCta
