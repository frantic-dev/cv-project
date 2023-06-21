/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import plusIcon from "./../icons/plusIcon.svg";
import "../styles/Tooltip.css";
class EducationForm extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    // console.log(props);
  }
  render() {
    let currentEducation = this.props.education.length - 1;
    // function handleClick(e) {
    //   e.preventDefault();
    //   console.log(e.target.parentElement);
    // }
    let schools = this.props.education.map((school, index) => {
      return (
        <>
          <div className="tooltip">
            <li key={index}>
              {school.schoolName} || {school.studyTitle} || {school.studyDate}
            </li>
            <span className="tooltiptext">
              <button className="education-edit-btn">edit</button>
              <button
                className="education-delete-btn"
                onClick={(e) => this.props.handleDelete(e)}
              >
                delete
              </button>
            </span>
          </div>
        </>
      );
    });
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
          value={this.props.education[currentEducation].schoolName}
          onChange={this.props.onChange}
        />

        <label htmlFor="studyTitle">Enter study title:</label>
        <input
          type="text"
          id="studyTitle"
          value={this.props.education[currentEducation].studyTitle}
          onChange={this.props.onChange}
        />

        <label htmlFor="studyDate">Enter study date:</label>
        <input
          type="month"
          id="studyDate"
          value={this.props.education[currentEducation].studyDate}
          onChange={this.props.onChange}
        />

        <ul>{schools}</ul>
      </section>
    );
  }
}
export default EducationForm;
