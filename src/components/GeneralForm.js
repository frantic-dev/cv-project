import { Component } from "react";
import SubmitBtn from "./SubmitBtn";
class GeneralData extends Component {
  constructor(props) {
    super(props);
    // console.log(props)
  }
  render() {
    return (
      <section>
        <h3>General information</h3>
        <label htmlFor="name">Enter name:</label>
        <input type="text" id="fullName" value={this.props.fullName} onChange={(e)=> this.props.onChange(e)} />
        <SubmitBtn/>
        <label htmlFor="email">Enter email:</label>
        <input type="text" id="email" value={this.props.email} onChange={(e)=> this.props.onChange(e)} />
        <SubmitBtn/>
        <label htmlFor="number">Enter phone number:</label>
        <input type="number" id="number" value={this.props.number} onChange={(e)=> this.props.onChange(e)} />
        <SubmitBtn/>
        <h3>professional summary</h3>
        <label htmlFor="summary">Enter professional summary:</label>
        <textarea id="summary" rows="1" value={this.props.summary} onChange={(e)=> this.props.onChange(e)} />
        <SubmitBtn/>
      </section>
    );
  }
}
export default GeneralData;
