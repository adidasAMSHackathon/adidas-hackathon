import React from "react";
import styles from "./navigation.scss";

export default () => {

  return (
    <nav className={`flex rnw aic jcsb nav`}>
      <div className="flex svg__container hamburger">
        <img src="/static/svg/menu.svg" alt="hamburger icon" className={`svg menu-icon`} />
      </div>
      <img src="/static/images/adidas-logo.png" alt="adidas logo" className={`nav-logo`} />
      <div className="flex svg__container search">
        <img src="/static/svg/search.svg" alt="search icon" className={`svg search-icon`} />
      </div>
      <style jsx>{styles}</style>
    </nav>
  );

};
