import { Component } from "react";

export default class Cvskills extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    // console.log(props)
  }
  render() {
    return (
      <div>
        <h3 className="cv-section-name">Skills</h3>
        <ul className="skills">{this.props.makeList(this.props.skills)}</ul>
      </div>
    );
  }
}
