import { ReactElement } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Contact from "../components/Contact/Contact";
import dynamic from "next/dynamic";
import Head from "next/head";
import Gallery from "../components/Gallery/Gallery";
import About from "../components/About/About";
const MyAwesomeMap = dynamic(() => import("../components/Map/Map"), {
  ssr: false,
});

const HomePage = (): ReactElement => (
  <>
    <Head>
      <title>Margarida | Salon Kosmetyczny</title>
    </Head>
    <Header />
    <Hero />
    <About />
    <Services />
    <Gallery />
    <MyAwesomeMap />
    <Footer />
  </>
);

export default HomePage;
