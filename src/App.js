import { Component } from "react";
import "./styles/App.css";
import EducationForm from "./components/EducationForm";
import Experience from "./components/ExperienceForm";
import GeneralData from "./components/GeneralForm";
import SkillsForm from "./components/SkillsForm";
import Cv from "./components/Cv";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // cv: {
      fullName: "Stella Walker",
      email: "example@example.com",
      number: "5555555555",
      summary: "Dedicated professional with demonstrated skills in customer service, time management and trend tracking. Experience working in challenging environments to provide customer-focused resolutions and feedback. Willing to take on any task to support team and help the business succeed.",
      skills: "Positive and professional,Conflict resolution,Request management, reliability, client advocacy, critical thinking, issue troubleshooting",
      education: [
        {
          schoolName: "",
          studyTitle: "",
          studyDate: "",
        },
      ],
      experience: [
        {
          companyName: "",
          positionTitle: "",
          jobTasks: "",
          startingDate: "",
          endingDate: "",
        },
      ],
      // }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    let propName = e.target.previousElementSibling.textContent;
    let inputIds = Object.keys(this.state[propName][0]);
    this.setState((prev) => ({
      [propName]: [
        ...prev[propName],
        {
          schoolName: "",
          studyTitle: "",
          studyDate: "",
        },
      ],
    }));
    inputIds.forEach((id) => {
      let input = document.getElementById(id);
      input.value = "";
    });
  }
  handleChange(e) {
    let key = e.target.id;
    let stateArray = e.target.parentElement.className;
    if (stateArray === "education" || stateArray === "experience") {
      let currentProp =
        this.state[stateArray][this.state[stateArray].length - 1];
      this.setState((prevState) => ({
        [stateArray]: prevState[stateArray].map((school) =>
          school === currentProp ? { ...school, [key]: e.target.value } : school
        ),
      }));
    } else this.setState({ [key]: e.target.value });
  }
  render() {
    return (
      <div>
        <form>
          <GeneralData
            fullName={this.state.fullName}
            email={this.state.email}
            number={this.state.number}
            summary={this.state.summary}
            onChange={this.handleChange}
          />
          <SkillsForm skills={this.state.skills} onChange={this.handleChange} />
          <EducationForm
            education={this.state.education}
            onChange={this.handleChange}
            handleClick={this.handleClick}
          />
          <Experience
            experience={this.state.experience}
            onChange={this.handleChange}
            handleClick={this.handleClick}
          />
        </form>
        <Cv information={this.state} />
      </div>
    );
  }
}
export default App;

