import { Component } from "react";
import "./App.css";
import EducationForm from "./components/EducationForm";
import Experience from "./components/ExperienceForm";
import GeneralData from "./components/GeneralForm";
import SkillsForm from "./components/SkillsForm";

class App extends Component {
  render() {
    return (
      <div>
        <GeneralData />
        <SkillsForm />
        <EducationForm />
        <Experience />
      </div>
    );
  }
}

export default App;

