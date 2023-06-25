import plusIcon from "./../icons/plusIcon.svg";
import "../styles/Tooltip.css";
function EducationForm(props) {
  let currentEducation = props.currentEducation;
  let schools = props.education.map((school, index) => {
    return (
      <>
        <div className="tooltip">
          <li key={index}>
            {school.schoolName} || {school.studyTitle} || {school.studyDate}
          </li>
          <span className="tooltiptext">
            <button
              className="education-edit-btn"
              onClick={(e) => props.handleEdit(e)}
            >
              edit
            </button>
            <button
              className="education-delete-btn"
              onClick={(e) => props.handleDelete(e)}
            >
              delete
            </button>
          </span>
        </div>
      </>
    );
  });
  return (
    <section className="education">
      <div className="section-header">
        <h3>education</h3>
        <img
          src={plusIcon}
          alt="a plus icon"
          className="plus-icon"
          onClick={props.handleClick}
        />
      </div>
      <label htmlFor="schoolName">Enter school name:</label>
      <input
        type="text"
        id="schoolName"
        value={props.education[currentEducation].schoolName}
        onChange={(e) => props.onChange(e, currentEducation)}
      />

      <label htmlFor="studyTitle">Enter study title:</label>
      <input
        type="text"
        id="studyTitle"
        value={props.education[currentEducation].studyTitle}
        onChange={(e) => props.onChange(e, currentEducation)}
      />

      <label htmlFor="studyDate">Enter study date:</label>
      <input
        type="month"
        id="studyDate"
        value={props.education[currentEducation].studyDate}
        onChange={(e) => props.onChange(e, currentEducation)}
      />

      <ul>{schools}</ul>
    </section>
  );
}

export default EducationForm;
