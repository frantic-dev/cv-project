import { Component } from "react";

class SkillsForm extends Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
    return (
      <section>
        <label htmlFor="skills">Enter your skills:</label>
        <textarea name="skills" id="skills" cols="30" rows="2"></textarea>
      </section>
    );
  }
}
export default SkillsForm;
