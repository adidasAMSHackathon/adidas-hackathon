import React from "react";
import SectionHeader from "./section-header";
import styles from "./section.scss";

export default () => {
  return (
    <section className={`flex cnw section newsletter`}>
      <SectionHeader title={`Newsletter`} description={`Be the first one to try it out. Sign up for our newsletter.`} invert />
      <form action="" method="post" className={`flex cnw form`}>
        <div className="flex cnw input__group">
          <label htmlFor="email-field" className={`input__label`}>Email</label>
          <input id="email-field" type="email" name="email" className={`input input__field`} />
        </div>
        <div className="flex cnw input__group">
          <input type="submit" value="Subscribe" className={`input input__submit`} />
        </div>
      </form>
      <style jsx>{styles}</style>
    </section>
  );
};
