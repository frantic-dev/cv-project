import { Component } from "react";
import "./App.css";
import EducationForm from "./components/EducationForm";
import Experience from "./components/ExperienceForm";
import GeneralData from "./components/GeneralForm";
import SkillsForm from "./components/SkillsForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // cv: {
      fullName: "",
      email: "",
      phone: "",
      number: "",
      summary: "",
      skills: "",
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
      <form>
        <GeneralData
          fullName={this.state.fullName}
          email={this.state.email}
          phone={this.state.phone}
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
    );
  }
}
export default App;

