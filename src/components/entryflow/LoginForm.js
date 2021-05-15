import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { InputField } from '../common/InputField';

const pageSyles = {
  loginStyle: {
    font: 'normal normal bold 22px / 27px Helvetica Neue'
  },
  formStyle: {
    marginTop: '150px',
    padding: '30px',
    boxShadow: '0px 30px 36px #557DA526',
    border: '1px solid #c9c9c9',
    borderRadius: '20px',
    background: '#f5f5f5',
  },
  labelStyle: {
    margin: '10px 0 5px 0',
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '15px',
  },
  submitStyle: {
    margin: '10px 0 0 0',
    padding: '7px 10px',
    border: '1px solid #43AFFF',
    opacity: 1,
    borderRadius: '5px',
    background: '#43AFFF',
    color: 'white',
    width: '144px',
  },
  newAccountStyle: {
    color: '#43AFFF',
  },
  footerStyle: {
    font: 'normal normal normal 16px Helvetica Neue',
    marginTop: 20,
  }
};

const LoginForm = () => {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [error, seterror] = useState(false);

  const handleSubmit = () => {
    if (!username || !password) {
      seterror(true);
    } else {
      const data = { username, password };
      //api all login
      // onSubmit(data);
    }
  };

  return (
    <div className="row align-items-center justify-content-center">
      <div style={pageSyles.formStyle} className="col-5">
        <div className="row">
          <div style={pageSyles.loginStyle}>Login</div>
        </div>
        <div className="row">
          <InputField
            label="Email address"
            type="email"
            value={username}
            onChange={setusername}
            error={error}
          />
        </div>
        <div className="row">
          <InputField
            label="Password"
            type="password"
            value={password}
            onChange={setpassword}
            error={error}
            errorText={"Incorrect email address & password"}
          />
        </div>
        <div className="row justify-content-center">
          <button style={pageSyles.submitStyle} type="submit" onClick={handleSubmit} >Login</button>
        </div>
        <div className="row justify-content-center" style={pageSyles.footerStyle}>
          New to MyJobs? <Link style={pageSyles.newAccountStyle} to="/signup">&nbsp;Create an account</Link>
        </div>
      </div >
    </div >
  );
};

export default LoginForm;
