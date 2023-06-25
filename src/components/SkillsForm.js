function SkillsForm(props) {
  return (
    <section>
      <h3>skills</h3>
      <label htmlFor="skills">Enter your skills:</label>
      <textarea
        name="skills"
        id="skills"
        rows="6"
        value={props.skills}
        onChange={props.onChange}
      ></textarea>
    </section>
  );
}

export default SkillsForm;
