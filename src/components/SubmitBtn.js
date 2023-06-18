import { Component } from "react";
import checkIcon from "../icons/checkIcon.svg";
export default class SubmitBtn extends Component {
  render() {
    return (
      <button className="submit-btn">
        <img src={checkIcon} alt="icon of a check mark" />
      </button>
    );
  }
}
