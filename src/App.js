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
      skills: [],
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
          jobTasks: [],
          startingDate: "",
          endingDate: "",
        },
      ],
      // }
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange (e) {
    console.log(e.target)
    this.setState({ [e.target.id]: e.target.value });
  };
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
        <SkillsForm />
        <EducationForm />
        <Experience />
      </form>
    );
  }
}
export default App;

