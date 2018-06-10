import React from "react";
import SectionHeader from "./section-header";
import styles from "./section.scss";

export default () => {
  return (
    <section className={`flex cnw section how-it-works`}>
      <SectionHeader title={`How it works`} description={`Start by scanning your environment.`} />
      <style jsx>{styles}</style>
    </section>
  );
};

