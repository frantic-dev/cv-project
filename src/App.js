import "./styles/App.css";
import EducationForm from "./components/EducationForm";
import ExperienceForm from "./components/ExperienceForm";
import GeneralForm from "./components/GeneralForm";
import SkillsForm from "./components/SkillsForm";
import Cv from "./components/Cv";
import { useState } from "react";

function App() {
  const [info, setInfo] = useState({
    fullName: "Stella Walker",
    email: "example@example.com",
    number: "5555555555",
    summary:
      "Dedicated professional with demonstrated skills in customer service, time management and trend tracking. Experience working in challenging environments to provide customer-focused resolutions and feedback. Willing to take on any task to support team and help the business succeed.",
    skills:
      "Positive and professional,Conflict resolution,Request management, reliability, client advocacy, critical thinking, issue troubleshooting",
    education: [
      {
        schoolName: "University of Washington, Seattle, WA1",
        studyTitle: "Bachelor of Arts - Communication",
        studyDate: "2017-05",
      },
    ],
    currentEducation: 0,
    experience: [
      {
        companyName: "Alaska Airlines | Seattle, WA",
        positionTitle: "Lead Customer Service Agent",
        jobTasks:
          "Met face-to-face with customers to handle issues escalated by associates,  Followed up with customers to share findings and offer solutions for ongoing inquiries, Avoided revenue losses with diligent attention to customers' needs and complaints",
        startingDate: "2019-05",
        endingDate: "2023-06",
      },
    ],
    currentExperience: 0,
  });

  function handleClick(e) {
    let propName = e.target.previousElementSibling.textContent;
    let inputIds = Object.keys(info[propName][0]);
    let newProps = {};
    let updatedIndex =
      "current" + propName.charAt(0).toUpperCase() + propName.slice(1);
    inputIds.forEach((prop) => (newProps = { ...newProps, [prop]: "" }));
    console.log(newProps);
    setInfo((prev) => ({
      ...prev,
      [propName]: [...prev[propName], newProps],
      [updatedIndex]: prev[propName].length,
    }));
    inputIds.forEach((id) => {
      let input = document.getElementById(id);
      input.value = "";
    });
  }

  function handleDelete(e) {
    e.preventDefault();

    let sectionName = e.target.className.split("-")[0];
    let currentIndex =
      "current" + sectionName.charAt(0).toUpperCase() + sectionName.slice(1);
    let deleteBtns = document.getElementsByClassName(e.target.className);
    let index = [...deleteBtns].indexOf(e.target);
    let inputIds = Object.keys(info[sectionName][0]);
    let resetProps = {};

    inputIds.forEach((prop) => (resetProps = { ...resetProps, [prop]: "" }));

    setInfo((prevInfo) => {
      if (prevInfo[sectionName].length === 1)
        return {
          ...prevInfo,
          [sectionName]: [resetProps],
        };
      else
        return {
          ...prevInfo,
          [sectionName]: prevInfo[sectionName].filter(
            (school) => prevInfo[sectionName].indexOf(school) !== index
          ),
          [currentIndex]: prevInfo[sectionName].length - 2,
        };
    });
  }

  function handleEdit(e) {
    e.preventDefault();

    let sectionName = e.target.className.split("-")[0];
    let currentIndex =
      "current" + sectionName.charAt(0).toUpperCase() + sectionName.slice(1);
    let editBtns = document.getElementsByClassName(e.target.className);
    let index = [...editBtns].indexOf(e.target);

    setInfo((prevInfo) => ({
      ...prevInfo,
      [currentIndex]: index,
    }));
  }

  function handleChange(e, currentIndex) {
    let key = e.target.id;
    console.log("key is", key);
    let infoArray = e.target.parentElement.className;
    console.log("infoArray is", infoArray);

    if (infoArray === "education" || infoArray === "experience") {
      let currentProp = info[infoArray][currentIndex];
      console.log("currentProp is", currentProp);
      setInfo((prevInfo) => ({
        ...prevInfo,
        [infoArray]: prevInfo[infoArray].map((school) =>
          school === currentProp ? { ...school, [key]: e.target.value } : school
        ),
      }));
    } else setInfo((prevInfo) => ({ ...prevInfo, [key]: e.target.value }));
    console.log("info is", info);
  }
  return (
    <div>
      <h1 className="title">Cv project</h1>
      <form>
        <GeneralForm
          fullName={info.fullName}
          email={info.email}
          number={info.number}
          summary={info.summary}
          onChange={handleChange}
        />
        <SkillsForm skills={info.skills} onChange={handleChange} />
        <EducationForm
          education={info.education}
          onChange={handleChange}
          handleClick={handleClick}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          currentEducation={info.currentEducation}
        />
        <ExperienceForm
          experience={info.experience}
          onChange={handleChange}
          handleClick={handleClick}
          currentExperience={info.currentExperience}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </form>
      <Cv information={info} />
    </div>
  );
}
export default App;

