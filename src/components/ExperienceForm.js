import { Component } from "react";

class Experience extends Component {
  // constructor(props){
  //   super(props)
  // }
  render() {
    return (
      <section>
        <h3>experience</h3>
        <label htmlFor="company-name">Enter the company name:</label>
        <input type="text" name="company-name" id="company-name" />
        <label htmlFor="position-title">Enter the position title:</label>
        <input type="text" name="position-title" id="position-title" />
        <label htmlFor="job-tasks">Enter main tasks of the job:</label>
        <input type="text" name="job-tasks" id="job-tasks" />
        <label htmlFor="starting-date">Enter the date you started:</label>
        <input type="date" name="starting-date" id="starting-date" />
        <label htmlFor="ending-date">Enter the date you ended:</label>
        <input type="date" name="ending-date" id="ending-date" />
      </section>
    );
  }
}
export default Experience;
