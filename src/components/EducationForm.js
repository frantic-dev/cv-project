import { Component } from "react";
import SubmitBtn from "./SubmitBtn";
import plusIcon from "./../icons/plusIcon.svg";
class EducationForm extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <section>
        <div className="section-header" >
          <h3>education</h3> 
          <img src={plusIcon} alt="a plus icon" className="plus-icon" />
        </div>
        <label htmlFor="school-name">Enter school name:</label>
        <input type="text" id="school-name" />
        <SubmitBtn />

        <label htmlFor="study-title">Enter study title:</label>
        <input type="text" id="study-title" />
        <SubmitBtn />

        <label htmlFor="study-date">Enter study date:</label>
        <input type="text" id="study-date" />
        <SubmitBtn />
      </section>
    );
  }
}
export default EducationForm;
