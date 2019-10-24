import React from 'react';
import useForm from "./useForm";
import validate from './LoginFormValidationRules';
//  import Example1 from './render_Names';

const Form = () => {
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(login, validate);

  function login() {

 
  }

  return (
    <div className="section is-fullheight">
      <div className="container">
        <div className="column is-4 is-offset-4">
          <div className="box">
            <form onSubmit={handleSubmit} noValidate>
              <div className="field">
                <label className="label">Email Address</label>
                <div className="control">
                  <input autoComplete="off" className={`input ${errors.name && 'is-danger'}`} type="text" name="name" onChange={handleChange} value={values.name || ''} required />
                  {errors.name && (
                    <p className="help is-danger">{errors.name}</p>
                  )}
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input className={`input ${errors.password && 'is-danger'}`} type="password" name="password" onChange={handleChange} value={values.password || ''} required />
                </div>
                {errors.password && (
                  <p className="help is-danger">{errors.password}</p>
                )}
              </div>
              <button type="submit" className="button is-block is-info is-fullwidth">Login</button>
            </form>
          </div>
        </div>
      </div>


    </div>



  );
};

export default Form;
