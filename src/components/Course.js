import React, { Component } from 'react';
import Lesson from  './Lesson';

class Course extends Component {

	constructor(props) {
		super(props);
		this.state = {

			isShowOutLine: false,
			totalStudents: 69
		};

			

		this.handleClick3= this.handleClick3.bind(this);
		this.RegisterCourse= this.RegisterCourse.bind(this);
		this.handleToogleOutLine= this.handleToogleOutLine.bind(this);
	}

	handleClick1() {
		alert("view 1");

	}

	handleClick2(content) {
		alert(content);

	}

	handleClick3(content) {
		alert(this.props.name);

	}

	RegisterCourse() {
		//alert("RegisterCourse");
		console.log(this.refs.username.value);
	}

	handleToogleOutLine() {
		this.setState ({isShowOutLine:!this.state.isShowOutLine});
	}

	 ShowButtonFree() {

	  const isFree = this.props.free;
	//  console.log("isFree",isFree);
	  if (isFree===true) {
	    return  (
	  			  <div className="btn-group"> 

          				<button onClick ={this.handleClick1} type="button" className="btn btn-warning"> View 1 </button>
          				<button onClick = {() => this.handleClick2("view 2")} type="button" className="btn btn-danger"> View 2 </button>
          				<button onClick = { this.handleClick3} type="button" className="btn btn-success"> View 3</button>
	   			  </div>

	    	)

          	
	  }
	  else {

	  		return(

				<div className="input-group">
					<span className="input-group-btn">
						<button onClick={this.RegisterCourse} className="btn btn-info" type="button">Register</button>
					</span>
					<input type="text" className="form-control" placeholder="username" ref= "username" />
				</div>

		

	  		)
	  }
	  
	}

	render() {
		console.log("render");
		let emlOutLine = null;
		if(this.state.isShowOutLine)  {
			emlOutLine = <ul className="list-group">
				                          <Lesson/>
				                          <Lesson/>
				                          <Lesson> </Lesson>
                   		 </ul>
		}
		  return (

		  	<div> 
				     <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
				              <div className="panel panel-info">
				                  <div className="panel-heading">
				                      <h3 className="panel-title">{this.props.name}</h3>

				                  </div>
				                  <div className="panel-body">
				                  <p> {this.props.time} </p>
				                  <p> {this.props.children} </p>
				                  <p> <button onClick = {this.handleToogleOutLine} className="btn btn-success" type="button">Toogle OutLine</button> </p>
				                  		{emlOutLine}
				                      
				                  </div>

				                 <div className="panel-footer">
				               		 {this.ShowButtonFree()}
				                 </div>
	
				                  


				              </div>
				      
				     </div>
			    
		  	</div>
      	
		  	);

	}
		  

	
}

export default Course;
