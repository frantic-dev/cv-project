import { Component } from "react";
class SkillsForm extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    // console.log(props)
  }
  render() {
    return (
      <section>
        <h3>skills</h3>
        <label htmlFor="skills">Enter your skills:</label>
        <textarea
          name="skills"
          id="skills"
          rows="6"
          value={this.props.skills}
          onChange={this.props.onChange}
        ></textarea>
      </section>
    );
  }
}
export default SkillsForm;
