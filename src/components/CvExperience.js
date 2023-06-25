export default function CvExperience(props) {
  let companies = props.companies.map((company, index) => {
    return (
      <div className="cv-company-container" key={index}>
        <div className="job-title-date" key={index}>
          <div>{company.positionTitle} </div>
          <div>
            {company.startingDate} | {company.endingDate}{" "}
          </div>
        </div>
        <div>{company.companyName} </div>
        <ul className="job-tasks">{props.makeList(company.jobTasks)} </ul>
      </div>
    );
  });
  return (
    <div>
      <h3 className="cv-section-name">experience</h3>
      {companies}
    </div>
  );
}
