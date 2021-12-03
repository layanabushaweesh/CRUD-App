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
    //  save the value that the user input
      // console.log(e.target.value)
      this.setState({
        current : e.target.value
      })

    }

    // add course
  addCours =(e)=>{
    e.preventDefault();;
    // console.log('courses add')
    let current =this.state.current;
    let courses=this.state.courses
    courses.push({name :current})
    this.setState({
      courses:courses,
      current :""
    })

  }

  // delete courses :p
  deleteCourse =(index)=>{
 let courses = this.state.courses;
// splice remove one item acording to the index 
 courses.splice(index ,1)
//  update for state
 this.setState({
  courses 
 })
 
  }

  render(){
    const {courses} =this.state
    const courseList =courses.map((couurs, index) =>{
      return < CoursList  deleteCourse={this.deleteCourse}  index={index} detalis={couurs} key={index}/>
    })
  return (
    <section className="App">
      <h2>add courses</h2>
      < CoursForm current={this.state.current} updateCours ={this.updateCourse} addCours={this.addCours} />
     <ul> {courseList} </ul>      
    </section>
  );
}
}

export default App;
