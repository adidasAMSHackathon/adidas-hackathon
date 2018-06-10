import React from "react";
import styles from "./hero.scss";

export default () => {

  return (
    <header className={`flex cnw hero__header`}>
      <h1 className={`hero__header__title`}>
        Empowering users to create
      </h1>
      <a href="#how-it-works" className="flex cta hero__cta">
        <span className="cta__text">discover more</span>
      </a>
      <style jsx>{styles}</style>
    </header>
  );
};
