import { Component } from "react";
import "../styles/Cv-ready.css"
import CvGeneral from "./CvGeneral";
import CvSkills from "./CvSkills";

export default class Cv extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
    this.makeList = this.makeList.bind(this)
  }
  makeList(preList) {
    let listArray = preList.split(",") 
    return listArray.map((task, index) => {
      let trimmedTask = task.trimStart()
      console.log(!!task)
      if(!!trimmedTask) return <li key={index} >{trimmedTask[0].toUpperCase() + trimmedTask.slice(1)}</li>
  })
  }
  render(){
    return(
      <div className="cv">
        <CvGeneral fullName={this.props.information.fullName} email={this.props.information.email} number={this.props.information.number} summary={this.props.information.summary} />
        <CvSkills skills={this.props.information.skills} makeList={this.makeList} />
      </div>
    )
  }
}