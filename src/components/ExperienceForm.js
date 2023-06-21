import { Component } from "react";
import SubmitBtn from "./SubmitBtn";
import plusIcon from "../icons/plusIcon.svg";
class Experience extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    // console.log(props)
  }
  render() {
    let currentExperience = this.props.currentExperience
    let companies = this.props.experience.map((company, index) => {
      return (
        <>
        <li key={index}>
          {company.companyName} || {company.positionTitle} || {company.startingDate} || {company.endingDate}
        </li>
        <p>{company.jobTasks}</p>
        </>
      );
    });
    return (
      <section className="experience">
        <div className="section-header">
          <h3>experience</h3>
          <img
            src={plusIcon}
            alt="a plus icon"
            className="plus-icon"
            onClick={this.props.handleClick}
          />
        </div>
        <label htmlFor="companyName">Enter the company name:</label>
        <input
          type="text"
          name="companyName"
          id="companyName"
          value={this.props.experience[currentExperience].companyName}
          onChange={(e) => this.props.onChange(e, currentExperience)}
        />
        {/* <SubmitBtn /> */}
        <label htmlFor="positionTitle">Enter the position title:</label>
        <input
          type="text"
          name="positionTitle"
          id="positionTitle"
          value={this.props.experience[currentExperience].positionTitle}
          onChange={(e) => this.props.onChange(e, currentExperience)}
        />
        {/* <SubmitBtn /> */}
        <label htmlFor="jobTasks">Enter main tasks of the job:</label>
        <textarea
          type="text"
          rows={5}
          name="jobTasks"
          id="jobTasks"
          value={this.props.experience[currentExperience].jobTasks}
          onChange={(e) => this.props.onChange(e, currentExperience)}
        />
        {/* <SubmitBtn /> */}
        <label htmlFor="startingDate">Enter the date you started:</label>
        <input
          type="month"
          name="startingDate"
          id="startingDate"
          value={this.props.experience[currentExperience].startingDate}
          onChange={(e) => this.props.onChange(e, currentExperience)}
        />
        {/* <SubmitBtn /> */}
        <label htmlFor="endingDate">Enter the date you ended:</label>
        <input
          type="month"
          name="endingDate"
          id="endingDate"
          value={this.props.experience[currentExperience].endingDate}
          onChange={(e) => this.props.onChange(e, currentExperience)}
        />
        {/* <SubmitBtn /> */}
        <ul>
          {companies}
        </ul>
      </section>
    );
  }
}
export default Experience;
