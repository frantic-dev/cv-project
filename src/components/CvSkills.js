export default function CvSkills(props) {
  return (
    <div>
      <h3 className="cv-section-name">Skills</h3>
      <ul className="skills">{props.makeList(props.skills)}</ul>
    </div>
  );
}
