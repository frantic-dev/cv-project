import { Component } from "react";
import SubmitBtn from "./SubmitBtn";
import plusIcon from "../icons/plusIcon.svg";
class Experience extends Component {
  constructor(props){
    super(props)
    console.log(props)
  }
  render() {
    return (
      <section className="experience" >
        <div className="section-header">
          <h3>experience</h3>
          <img src={plusIcon} alt="a plus icon" className="plus-icon" onClick={this.props.handleClick} />
        </div>
        <label htmlFor="companyName">Enter the company name:</label>
        <input type="text" name="companyName" id="companyName" value={this.props.experience.companyName} onChange={this.props.onChange} />
        <SubmitBtn />
        <label htmlFor="positionTitle">Enter the position title:</label>
        <input type="text" name="positionTitle" id="positionTitle" value={this.props.experience.positionTitle} onChange={this.props.onChange} />
        <SubmitBtn />
        <label htmlFor="jobTasks">Enter main tasks of the job:</label>
        <input type="text" name="jobTasks" id="jobTasks" value={this.props.experience.jobTasks} onChange={this.props.onChange}/>
        <SubmitBtn />
        <label htmlFor="startingDate">Enter the date you started:</label>
        <input type="date" name="startingDate" id="startingDate" value={this.props.experience.startingDate} onChange={this.props.onChange} />
        <SubmitBtn />
        <label htmlFor="endingDate">Enter the date you ended:</label>
        <input type="date" name="endingDate" id="endingDate" value={this.props.experience.endingDate} onChange={this.props.onChange} />
        <SubmitBtn />
      </section>
    );
  }
}
export default Experience;
