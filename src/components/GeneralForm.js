import { Component } from "react";

class GeneralData extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <section>
        <h3>General information</h3>
        <label htmlFor="name">Enter name:</label>
        <input type="text" id="name" />
        <label htmlFor="email">Enter email:</label>
        <input type="text" id="email" />
        <label htmlFor="number">Enter phone number:</label>
        <input type="text" id="number" />
        <h3>professional summary</h3>
        <label htmlFor="professionalSummary">Enter professional summary:</label>
        <textarea id="professionalSummary" rows="1" />
      </section>
    );
  }
}
export default GeneralData;
