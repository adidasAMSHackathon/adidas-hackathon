import React from "react";
import styles from "./section-header.scss";

export default ({title, description}) => {
  return (
    <div className="section__header__wrapper">
      <header className={`flex cnw section__header`}>
        <h1 className="section__title">{title}</h1>
      </header>
      <p className="section__description">{description}</p>
      <style jsx>{styles}</style>
    </div>
  );
};
