import React from "react";
import Head from "next/head";

import Global from "./_global.js";
import Navigation from "../components/navigation";
import Hero from "../components/hero";
import HowItWorks from "../components/how-it-works";
import AdiKey from "../components/adikey";
import Newsletter from "../components/newsletter";
import Footer from "../components/footer";
import styles from "./index.scss";

export default class extends React.Component {
  render() {
    return (
      <Global>
        <Head>
          <title>Home</title>
        </Head>
        <Navigation />
        <Hero />
        <HowItWorks title={`How it works`} description={`Start by scanning your environment.`} />
        <AdiKey title={`Meet the match`} description={`Start by scanning the your environment.`} />
        <Newsletter />
        <Footer />
        <style jsx>{styles}</style>
      </Global>
    );
  }
}
