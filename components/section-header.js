import React from "react";
import styles from "./section-header.scss";

export default ({title, description, invert}) => {
  return (
    <div className="section__header__wrapper">
      <header className={`flex cnw section__header`}>
        <h1 className={invert ? `section__title section__title--white` : `section__title`}>{title}</h1>
      </header>
      <p className={invert ? `section__description section__description--white` : `section__description`}>{description}</p>
      <style jsx>{styles}</style>
    </div>
  );
};
