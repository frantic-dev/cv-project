import { Component } from "react";
import SubmitBtn from "./SubmitBtn";
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
        <SubmitBtn/>
        <label htmlFor="email">Enter email:</label>
        <input type="text" id="email" />
        <SubmitBtn/>
        <label htmlFor="number">Enter phone number:</label>
        <input type="text" id="number" />
        <SubmitBtn/>
        <h3>professional summary</h3>
        <label htmlFor="professionalSummary">Enter professional summary:</label>
        <textarea id="professionalSummary" rows="1" />
        <SubmitBtn/>
      </section>
    );
  }
}
export default GeneralData;
