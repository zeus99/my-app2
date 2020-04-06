import React from 'react';
import Course from  './components/Course';
import './App.css';

function App() {
	
  return  (
    
			  	 
        <div className="row">
         <Course name="ReactJs" time="30h" free={true}> React very Simple </Course>
         <Course name="Angular 4x" time="55h" free={false}/>
         <Course name ="NodeJS" time="35h" free= {true} / >
     
         
   
      </div>
         
  );
}

export default App;
