import React, { Component } from 'react'
import './SignIn.css'
import useForm from "./useForm";
import validate from './LoginFormValidateRules';

const SignIn = () => {
  const {
    values,
    errors,
    isWrongCredentials,
    handleChange,
    handleSubmit,
  } = useForm(login, validate);

  function login() {
    console.log('No errors, submit callback called!');
  }

  return (
    <div className="container">
      <div className="card card-container">
        <img id="profile-img" className="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
        <p id="profile-name" className="profile-name-card"></p>
        <form className="form-signin" onSubmit={handleSubmit} noValidate>
          <input
            name="email"
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email address"
            onChange={handleChange}
            required
            autoFocus
          />
          {errors.email &&
            <span className='error error text-danger'><h6>{errors.email} </h6></span>}
          <input
            className={`input ${errors.email && 'is-danger'}`}
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            required />
          {errors.password &&
            <span className='error error text-danger'><h6>{errors.password}</h6></span>}
          <button
            className="btn btn-secondary btn-lg btn-block btn-signin"
            type="submit" type="submit">Sign in</button>
          {
                        isWrongCredentials?
                        <small><div className="alert alert-danger" >Wrong Credetials!</div></small>:null
                    }
        </form>
        <a href="#" className="forgot-password">
          Create Account?
                </a>
      </div>
    </div>
  )
}

export default SignIn