import React , { Component } from "react";
import CoursForm from "./components/courseform"
import CoursList from "./components/courseList"

class App extends Component{
  state ={
    courses :[
      {name : "html"},
      {name : "css"},
      {name : "jQuery"}

    ],
    current : ""
    }


    // update value
    updateCourse =(e) =>{
      console.log(e.target.value)
    }

    // add course
  addCours =(e)=>{
    e.preventDefault()
    console.log('courses add')
  }

  render(){
    const {courses} =this.state
    const courseList =courses.map((couurs, index) =>{
      return < CoursList detalis={couurs} key={index}/>
    })
  return (
    <section className="App">
      <h2>add courses</h2>
      < CoursForm updateCours ={this.updateCourse} addCours={this.addCours} />
     <ul> {courseList} </ul>      
    </section>
  );
}
}

export default App;
