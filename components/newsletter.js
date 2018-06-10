import React from "react";
import SectionHeader from "./section-header";
import styles from "./newsletter.scss";

export default () => {
  return (
    <section className={`flex cnw section newsletter`}>
      <SectionHeader title={`Newsletter`} description={`Be the first one to try it out. Sign up for our newsletter.`} invert />
      <form method="post" className={`flex cnw form`}>
        <div className="flex cnw input__group">
          <label htmlFor="email-field" className={`input__label hide`}>Email</label>
          <input id="email-field" type="email" name="email" placeholder={`hackathon@adidas.com`} className={`input input__field`} />
        </div>
        <div className="flex cnw input__group">
          <button type="submit" className={`flex jcc aic input input__submit`}>Subscribe</button>
        </div>
      </form>
      <style jsx>{styles}</style>
    </section>
  );
};
