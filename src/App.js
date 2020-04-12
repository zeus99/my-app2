import React, { Component } from 'react';
import Course from  './components/Course';
import './App.css';

class App extends Component {

	render() {

		const items = [
			{
				name1: 'ReactJs',
				time1: '30h',
				free1: false,
				desc: "ReactJs is very Simple"

			},
			{
				name1: "Angular 4x",
				time1: "55h",
				free1: true,
				desc: "Angular is very Simple"

			},
			{
				name1: "NodeJS",
				time1: "35h",
				free1: true,
				desc: "NodeJS is very Simple"

			}
		];

			const elmCourses = items.map((item,index) =>

			 <Course key= {index} name= {item.name1} time= {item.time1} free= {item.free1} outdate={item.name1} > {item.desc} </Course>
	
			);

		  return  (
		    
		        <div className="row">
		            {elmCourses}
		         
		        </div>
		         
		  );

	}
}

export default App;
