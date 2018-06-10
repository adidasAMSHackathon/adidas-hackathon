import React from "react";
import Slider from "./slider";
import styles from "./section.scss";

export default () => {
  return (
    <section className={`flex cnw aic section how-it-works`}>
      <Slider />
      <style jsx>{styles}</style>
    </section>
  );
};

