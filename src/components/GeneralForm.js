import { Component } from "react";

class GeneralData extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section>
        <label htmlFor="name">Enter name:</label>
        <input type="text" id="name" />
        <label htmlFor="email">Enter email:</label>
        <input type="text" id="email" />
        <label htmlFor="number">Enter phone number:</label>
        <input type="text" id="number" />
        <label htmlFor="professionalSummary">Enter professional summary:</label>
        <textarea id="professionalSummary" />
      </section>
    );
  }
}
export default GeneralData;
