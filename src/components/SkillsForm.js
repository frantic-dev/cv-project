import { Component } from "react";
import SubmitBtn from "./SubmitBtn";
class SkillsForm extends Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
    return (
      <section>
        <h3>skills</h3>
        <label htmlFor="skills">Enter your skills:</label>
        <textarea name="skills" id="skills" rows="1"></textarea>
        <SubmitBtn/>
      </section>
    );
  }
}
export default SkillsForm;
