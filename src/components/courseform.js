import React from "react"

const CoursForm =(props)=>{
    return (
       <form onSubmit={props.addCours}>
          <input type="text" onChange={props.updateCourse} />
          <button type="submit">Add Course</button>
       </form>
    )
}
export default CoursForm