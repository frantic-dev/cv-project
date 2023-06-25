export default function CvEducation(props) {
  let schools = props.schools.map((school, index) => (
    <div className="school-container" key={index}>
      <div className="schoolNames">
        <div>{school.schoolName} </div>
        <div>{school.studyTitle} </div>
      </div>
      <div>{school.studyDate} </div>
    </div>
  ));
  return (
    <div>
      <h3 className="cv-section-name">Education</h3>
      {schools}
    </div>
  );
}
