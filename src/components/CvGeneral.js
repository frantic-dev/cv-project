import { Component } from "react";

export default class CvGeneral extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    let number =
      this.props.number.slice(0, 3) +
      "-" +
      this.props.number.slice(3, 6) +
      "-" +
      this.props.number.slice(6);

    return (
      <div className="cv-general">
        <div className="general-info">
          <h1>{this.props.fullName}</h1>
          <div>
            <div className="number">{number} </div>
            <div className="email">{this.props.email}</div>
          </div>
        </div>
        <div className="cv-section">
          <h3 className="cv-section-name">professional summary </h3>
          <p> {this.props.summary} </p>
        </div>
      </div>
    );
  }
}
