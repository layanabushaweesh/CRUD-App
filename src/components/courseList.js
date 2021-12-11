import React , { Component } from "react";


class CoursList extends Component{
   state ={
      isIdit : false
   }
   //render cours item
   renderCourse =()=>{
      return (
         <li>
              <span>{this.props.detalis.name}</span>

              <button onClick ={() => {this.toggleState()}}>edite course</button>
              <button onClick={()=> {this.props.deleteCourse(this.props.index)}}> delete course</button>
        </li>
      )
   }
// toggle state
toggleState =() => {
let {isIdit} = this.state
this.setState ({
   isIdit : !isIdit
})
}

// 
updateCourseItem =(e)=>{
e.preventDefault()
this.props.editeCourse(this.props.index ,this.input.value )
this.toggleState()

}
// render update form
renderUpdateForm =()=>{
      return(
         <form onSubmit={this.updateCourseItem}>
            <input type="text"  ref={ (v) => {this.input = v}} defaultValue ={this.props.detalis.name}/>
            <button>update cours</button>
         </form>
      )
   }

    render(){
      let {isIdit} = this.state
    return (
       
     <React.Fragment>
        { isIdit ? this.renderUpdateForm()
        : this.renderCourse()}
     </React.Fragment>
        
     
    );
  }
  }
  
  export default CoursList;
