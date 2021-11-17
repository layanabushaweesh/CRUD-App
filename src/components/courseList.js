import React , { Component } from "react";


class CoursList extends Component{
    render(){
    return (
     <React.Fragment>
        <li>
        {this.props.detalis.name}
        </li>
     </React.Fragment>
        
     
    );
  }
  }
  
  export default CoursList;
