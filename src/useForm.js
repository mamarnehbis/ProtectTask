import { useState, useEffect } from 'react';
// import Example1 from './render_Names';
// import ReactDOM from "react-dom";
import {render} from 'react-dom';
// import AlertDialog from './alert';

import React, { Component }  from 'react';
// import { Route, Redirect } from 'react-router';
// import {BrowserRouter} from 'react-router';
// import { createHashHistory } from 'history'
// import { browserHistory } from 'react-router';
// import Form from './Form';
import GetNames from './render_Names';






//import axios from 'axios';



const useForm = (callback, validate) => {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);

    // check  login Information

    if((event.target.name.value) ==="Mutasem" && (event.target.password.value) ==="P@$$w0rd") 
    
    {
      // get the data from json URL .
       getDataAxios();

    }
    else 
    {
      // simple alert 
      window.confirm(" UserName OR Password IS Incorrect Please Try Again ");

    }


     function  getDataAxios(){


     // this component (<GetNames/>) get the names of json URL  then view them on the secreen 
      const View = () => (
        <div>
          <GetNames/>
        </div>

      );
      
      render(<View />, document.getElementById('root'));
  }
    
  
  };

  const handleChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    
    
  };

  return {


    handleChange,
    handleSubmit,
    values,
    errors,

    
  }
};




export default useForm;


