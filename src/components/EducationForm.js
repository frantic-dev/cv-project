import { Component } from "react";
import SubmitBtn from "./SubmitBtn";
import plusIcon from "./../icons/plusIcon.svg";
class EducationForm extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    // console.log(props);
  }
  render() {
    return (
      <section className="education">
        <div className="section-header">
          <h3>education</h3>
          <img
            src={plusIcon}
            alt="a plus icon"
            className="plus-icon"
            onClick={this.props.handleClick}
          />
        </div>
        <label htmlFor="schoolName">Enter school name:</label>
        <input
          type="text"
          id="schoolName"
          value={this.props.education.schoolName}
          onChange={this.props.onChange}
        />
        <SubmitBtn />

        <label htmlFor="studyTitle">Enter study title:</label>
        <input
          type="text"
          id="studyTitle"
          value={this.props.education.studyTitle}
          onChange={this.props.onChange}
        />
        <SubmitBtn />

        <label htmlFor="studyDate">Enter study date:</label>
        <input
          type="date"
          id="studyDate"
          value={this.props.education.studyDate}
          onChange={this.props.onChange}
        />
        <SubmitBtn />
      </section>
    );
  }
}
export default EducationForm;
