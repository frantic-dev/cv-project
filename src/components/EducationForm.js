import { Component } from "react";

class EducationForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section>
        <label htmlFor="school-name">Enter school name:</label>
        <input type="text" id="school-name" />
        <label htmlFor="study-title">Enter study title:</label>
        <input type="text" id="study-title" />
        <label htmlFor="study-date">Enter study date:</label>
        <input type="text" id="study-date" />
      </section>
    );
  }
}
export default EducationForm;
