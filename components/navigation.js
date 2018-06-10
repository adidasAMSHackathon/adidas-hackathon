import React from "react";
import styles from "./navigation.scss";

export default () => {

  return (
    <nav className={`flex rnw nav`}>
      <div className="flex hamburger">
        <svg className="flex cnw jcsb menu">
          <line className="menu-line line-top" x1="0%" y1="10%" x2="100%" y2="10%" />
          <line className="menu-line line-center" x1="0%" y1="50%" x2="100%" y2="50%" />
          <line className="menu-line line-bottom" x1="0%" y1="90%" x2="100%" y2="90%" />
        </svg>
        <img src="/static/images/adidas-logo.png" alt="adidas logo" className={`nav-logo`} />
        <div className="flex search">
          <img src="/static/svg/search.svg" alt="search icon" />
        </div>
      </div>
      <style jsx>{styles}</style>
    </nav>
  );

};
