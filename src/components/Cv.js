import "../styles/Cv-ready.css";
import CvEducation from "./CvEducation";
import CvExperience from "./CvExperience";
import CvGeneral from "./CvGeneral";
import CvSkills from "./CvSkills";

export default function Cv(props) {
  function makeList(preList) {
    if (!!preList) {
      let listArray = preList.split(",");
      return listArray.map((task, index) => {
        let trimmedTask = task.trimStart();
        if (!!trimmedTask)
          return (
            <li key={index}>
              {trimmedTask[0].toUpperCase() + trimmedTask.slice(1)}
            </li>
          );
        else return "";
      });
    }
  }
  return (
    <div className="cv">
      <CvGeneral
        fullName={props.information.fullName}
        email={props.information.email}
        number={props.information.number}
        summary={props.information.summary}
      />
      <CvSkills skills={props.information.skills} makeList={makeList} />
      <CvEducation schools={props.information.education} />
      <CvExperience
        companies={props.information.experience}
        makeList={makeList}
      />
    </div>
  );
}
