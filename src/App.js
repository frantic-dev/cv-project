import { Component } from "react";
import "./App.css";
import EducationForm from "./components/EducationForm";
import GeneralData from "./components/GeneralForm";
import SkillsForm from "./components/SkillsForm";

class App extends Component {
  render() {
    return (
      <div>
        <GeneralData />
        <SkillsForm />
        <EducationForm />
      </div>
    );
  }
}

export default App;

