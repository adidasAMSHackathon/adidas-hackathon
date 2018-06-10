import React from "react";
import styles from "./hero.scss";

export default () => {

  return (
    <header className={`flex cnw jcc aic hero__header`}>
      <h1 className={`hero__header__title`}>
        Empowering users to create
      </h1>
      <a href="#how-it-works" className="flex jcc cta hero__cta">
        <span className="flex rnw jcc aic cta__text">discover more</span>
      </a>
      <style jsx>{styles}</style>
    </header>
  );
};
