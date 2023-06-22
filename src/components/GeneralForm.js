import { Component } from "react";
class GeneralData extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    // console.log(props)
  }
  render() {
    return (
      <section>
        <h3>General information</h3>
        <label htmlFor="fullName">Enter name:</label>
        <input
          type="text"
          id="fullName"
          value={this.props.fullName}
          onChange={(e) => this.props.onChange(e)}
        />
        <label htmlFor="email">Enter email:</label>
        <input
          type="email"
          id="email"
          value={this.props.email}
          onChange={(e) => this.props.onChange(e)}
        />
        <label htmlFor="number">Enter phone number:</label>
        <input
          type="number"
          id="number"
          value={this.props.number}
          onChange={(e) => this.props.onChange(e)}
        />
        <h3>professional summary</h3>
        <label htmlFor="summary">Enter professional summary:</label>
        <textarea
          id="summary"
          rows="10"
          value={this.props.summary}
          onChange={(e) => this.props.onChange(e)}
        />
      </section>
    );
  }
}
export default GeneralData;
