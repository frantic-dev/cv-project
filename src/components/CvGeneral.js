export default function CvGeneral(props) {
  let number =
    props.number.slice(0, 3) +
    "-" +
    props.number.slice(3, 6) +
    "-" +
    props.number.slice(6);

  return (
    <div className="cv-general">
      <div className="general-info">
        <h1>{props.fullName}</h1>
        <div>
          <div className="number">{number} </div>
          <div className="email">{props.email}</div>
        </div>
      </div>
      <div className="cv-section">
        <h3 className="cv-section-name">professional summary </h3>
        <p> {props.summary} </p>
      </div>
    </div>
  );
}
