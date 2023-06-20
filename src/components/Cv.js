import { Component } from "react";
import "../styles/Cv-ready.css"
import CvGeneral from "./CvGeneral";

export default class Cv extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
  }
  render(){
    return(
      <div className="cv">
        <CvGeneral fullName={this.props.information.fullName} email={this.props.information.email} number={this.props.information.number} summary={this.props.information.summary} />
      </div>
    )
  }
}