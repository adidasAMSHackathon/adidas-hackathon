import React from "react";
import SectionHeader from "./section-header";
import styles from "./section.scss";

export default () => {
  return (
    <section className={`flex cnw aic section adikey`}>
      <SectionHeader title={`Meet Adidas Key`} description={`With I-Adidas key you can make the shoe fit perfectly.`} />
      <video className={`mockup video`} autoPlay loop muted playsInline src={`/static/videos/key-animation.mov`} />
      <style jsx>{styles}</style>
    </section>
  );
};
