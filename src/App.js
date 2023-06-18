import { Component } from "react";
import "./App.css";
import EducationForm from "./components/EducationForm";
import GeneralData from "./components/GeneralForm";

class App extends Component {
  render() {
    return (
      <div>
        <GeneralData />
        <EducationForm />
      </div>
    );
  }
}

export default App;

