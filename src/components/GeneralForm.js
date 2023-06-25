function GeneralForm(props) {
  return (
    <section>
      <h3>General information</h3>
      <label htmlFor="fullName">Enter name:</label>
      <input
        type="text"
        id="fullName"
        value={props.fullName}
        onChange={(e) => props.onChange(e)}
      />
      <label htmlFor="email">Enter email:</label>
      <input
        type="email"
        id="email"
        value={props.email}
        onChange={(e) => props.onChange(e)}
      />
      <label htmlFor="number">Enter phone number:</label>
      <input
        type="number"
        id="number"
        value={props.number}
        onChange={(e) => props.onChange(e)}
      />
      <h3>professional summary</h3>
      <label htmlFor="summary">Enter professional summary:</label>
      <textarea
        id="summary"
        rows="10"
        value={props.summary}
        onChange={(e) => props.onChange(e)}
      />
    </section>
  );
}

export default GeneralForm;
