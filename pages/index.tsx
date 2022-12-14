import {ReactElement} from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import dynamic from "next/dynamic";
import Head from "next/head";
import Gallery from "../components/Gallery/Gallery";
import About from "../components/About/About";
import BooksyCta from "../components/BooksyCta/BooksyCta";

const MyAwesomeMap = dynamic(() => import("../components/Map/Map"), {
    ssr: false,
});

const HomePage = (): ReactElement => (
    <>
        <Head>
            <title>Margarida | Salon Kosmetyczny</title>
            <meta title="description"
                  content="Salon Margarida to wyjątkowe miejsce tworzone z pasją i miłością do podkreślenia urody i naturalnego piękna. W ofercie gabinetu dostępne są zabiegi zarówno dla Pań jak i dla Panów."/>
        </Head>
        <Header/>
        <Hero/>
        <About/>
        <Services/>
        <BooksyCta/>
        <Gallery/>
        <MyAwesomeMap/>
        <Footer/>
    </>
);

export default HomePage;
