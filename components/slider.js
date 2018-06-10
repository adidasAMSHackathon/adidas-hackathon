import React from "react";
import SectionHeader from "./section-header";
import styles from "./slider.scss";

export default class extends React.Component {

  state = {
    current: 0,
    content: [
      {
        description: "Start by scanning your environment, drawing, texture or anything. You decide!",
        image: "/static/images/content/02.jpg"
      },
      {
        description: "I-Adidas will create a shoe based on your input.",
        image: "/static/images/content/03-01.jpg"
      },
      {
        description: "Enter your I-Adidas key to make it the perfect fit.",
        image: "/static/images/content/03-b.jpg"
      },
    ]
  }

  handlePreviousImage = () => {
    const {current, content} = this.state;

    let nextCurrent = current - 1;

    if (nextCurrent < 0) {
      nextCurrent = content.length - 1;
    }

    this.setState({current: nextCurrent});
  };

  handleNextImage = () => {
    const {current, content} = this.state;

    let nextCurrent = current + 1;

    if (nextCurrent >= content.length - 1) {
      nextCurrent %= content.length;
    }

    this.setState({current: nextCurrent});
  };

  render() {
    const {current, content} = this.state;
    return (
      <article className={`flex cnw aic slider-content`}>
        <SectionHeader title={`How it works`} description={content[current].description} />
        <div className="flex jcc aic button button--left">
          <img src="/static/icons/ic-arrow-16-thin.png" alt="left button" className="button--left__image" onClick={this.handlePreviousImage} />
        </div>
        <img src={content[current].image} alt="app screen" className="slider__image" />
        <div className="flex jcc aic button button--right" onClick={this.handleNextImage}>
          <img src="/static/icons/ic-arrow-16-thin.png" alt="left button" className="button--right__image" />
        </div>
        <style jsx>{styles}</style>
      </article>
    );
  }
}
