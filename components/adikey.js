import React from "react";
import SectionHeader from "./section-header";
import styles from "./section.scss";

export default () => {
  return (
    <section className={`flex cnw section adikey`}>
      <SectionHeader title={`Meet the match`} description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor.`} />
      <style jsx>{styles}</style>
    </section>
  );
};
