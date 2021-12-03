import React , { Component } from "react";


class CoursList extends Component{
   //render cours item
   renderCourse =()=>{
      return (
         <li>
              <span>{this.props.detalis.name}</span>
              <button onClick={()=> {this.props.deleteCourse(this.props.index)}}> delete course</button>
        </li>
      )
   }

    render(){
    return (
     <React.Fragment>
        {this.renderCourse()}
     </React.Fragment>
        
     
    );
  }
  }
  
  export default CoursList;
