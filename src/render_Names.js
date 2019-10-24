
//import axios from 'axios';
//import React from 'react';
import {render} from 'react-dom';

import React, { Component } from 'react';
import Posts from './Posts';
const URL = "https://jsonplaceholder.typicode.com/users";

class GetNames extends Component {
   // initially data is empty in state
   state = { data: [] };
 
   componentDidMount() {
     // when component mounted, start a GET request
     // to specified URL
     fetch(URL)
       // when we get a response map the body to json
       .then(response => response.json())
       // and update the state data to said json
       .then(data => this.setState({ data }));



      
   }


   GetID (id )
   {




       alert("My id is ->  " + id );  
       
       // i cant send id from this component to posts component !!!!!!!!!!!!!!
       // and then use it with URL as Parameter ! 


       // sorry 

    
    const View = () => (
      <div>
        <Posts/>
      </div>

    );
    
    render(<View />, document.getElementById('child1'));

   }


   
 
   render() {
      
     return (

       <div id="ch1" class="col-sm-12">
               <h1 id="person"> Persons Names  : </h1>

         <ul>
         {
           this.state.data.map(function(person){
             return <li  onClick={() => {
               this.GetID(person.id);
             }}
           
             key={person.id}>{person.id} - {person.name}



             </li>;
             

           },this)
         }
         </ul>

         </div>



     );  
   } 
 }


 
export default GetNames;
