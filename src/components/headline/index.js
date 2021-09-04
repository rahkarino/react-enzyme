import React, { Component } from "react";
import "./styles.scss";

class HeadLine extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { header, desc } = this.props;
    if (!header) {
      return null;
    }
    return (
      <div className="head-line" data-test="headline-component">
        <div className="container">
          <h1 data-test="header">{header}</h1>
          <p data-test="desc">{desc}</p>
        </div>
      </div>
    );
  }
}

export default HeadLine;
