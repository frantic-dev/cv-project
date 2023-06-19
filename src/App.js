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
      skillsForm: [],
      education: [
        {
          schoolName: "",
          studyTitle: "",
          studyDate: "",
        },
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
          jobTasks: [],
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
    console.log(propName);
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
    console.log(Object.keys(this.state[propName][0]));
    inputIds.forEach((id) => {
      let input = document.getElementById(id);
      input.value = "";
    });
  }
  handleChange(e) {
    let key = e.target.id;
    let stateArray = e.target.parentElement.className;
    console.log(e.target.parentElement.className);
    let currentEducation =
      this.state.education[this.state.education.length - 1];
    if (stateArray === "education") {
      // console.log(currentEducation)
      // console.log(this.state)
      this.setState((prevState) => ({
        [stateArray]: prevState[stateArray].map((school) =>
          school === currentEducation
            ? { ...school, [key]: e.target.value }
            : school
        ),
      }));
    } else this.setState({ [key]: e.target.value });
    if (key === "skills") {
      this.setState((state) => {
        console.log(state);
        return { skillsForm: state.skills.split(",") };
      });
    }
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
        <Experience />
      </form>
    );
  }
}
export default App;

