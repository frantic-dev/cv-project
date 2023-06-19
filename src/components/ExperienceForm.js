import { Component } from "react";
import SubmitBtn from "./SubmitBtn";
import plusIcon from "../icons/plusIcon.svg"
class Experience extends Component {
  // constructor(props){
  //   super(props)
  // }
  render() {
    return (
      <section>
        <div className="section-header">
          <h3>experience</h3>
          <img src={plusIcon} alt="a plus icon" className="plus-icon" />
        </div>{" "}
        <label htmlFor="company-name">Enter the company name:</label>
        <input type="text" name="company-name" id="company-name" />
        <SubmitBtn />
        <label htmlFor="position-title">Enter the position title:</label>
        <input type="text" name="position-title" id="position-title" />
        <SubmitBtn />
        <label htmlFor="job-tasks">Enter main tasks of the job:</label>
        <input type="text" name="job-tasks" id="job-tasks" />
        <SubmitBtn />
        <label htmlFor="starting-date">Enter the date you started:</label>
        <input type="date" name="starting-date" id="starting-date" />
        <SubmitBtn />
        <label htmlFor="ending-date">Enter the date you ended:</label>
        <input type="date" name="ending-date" id="ending-date" />
        <SubmitBtn />
      </section>
    );
  }
}
export default Experience;
