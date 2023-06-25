import plusIcon from "../icons/plusIcon.svg";
import "../styles/Tooltip.css";
function ExperienceForm(props) {
  let currentExperience = props.currentExperience;
  let companies = props.experience.map((company, index) => {
    return (
      <>
        <div className="tooltip">
          <li key={index}>
            {company.companyName} || {company.positionTitle} ||{" "}
            {company.startingDate} || {company.endingDate}
          </li>
          <span className="tooltiptext">
            <button
              className="experience-edit-btn"
              onClick={(e) => props.handleEdit(e)}
            >
              edit
            </button>
            <button
              className="experience-delete-btn"
              onClick={(e) => props.handleDelete(e)}
            >
              delete
            </button>
          </span>
        </div>
        <p>{company.jobTasks}</p>
      </>
    );
  });
  return (
    <section className="experience">
      <div className="section-header">
        <h3>experience</h3>
        <img
          src={plusIcon}
          alt="a plus icon"
          className="plus-icon"
          onClick={props.handleClick}
        />
      </div>
      <label htmlFor="companyName">Enter the company name:</label>
      <input
        type="text"
        name="companyName"
        id="companyName"
        value={props.experience[currentExperience].companyName}
        onChange={(e) => props.onChange(e, currentExperience)}
      />
      <label htmlFor="positionTitle">Enter the position title:</label>
      <input
        type="text"
        name="positionTitle"
        id="positionTitle"
        value={props.experience[currentExperience].positionTitle}
        onChange={(e) => props.onChange(e, currentExperience)}
      />
      <label htmlFor="jobTasks">Enter main tasks of the job:</label>
      <textarea
        type="text"
        rows={5}
        name="jobTasks"
        id="jobTasks"
        value={props.experience[currentExperience].jobTasks}
        onChange={(e) => props.onChange(e, currentExperience)}
      />
      <label htmlFor="startingDate">Enter the date you started:</label>
      <input
        type="month"
        name="startingDate"
        id="startingDate"
        value={props.experience[currentExperience].startingDate}
        onChange={(e) => props.onChange(e, currentExperience)}
      />
      <label htmlFor="endingDate">Enter the date you ended:</label>
      <input
        type="month"
        name="endingDate"
        id="endingDate"
        value={props.experience[currentExperience].endingDate}
        onChange={(e) => props.onChange(e, currentExperience)}
      />
      <ul>{companies}</ul>
    </section>
  );
}

export default ExperienceForm;
