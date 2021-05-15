import React, { useState } from 'react';
import { InputField } from '../common/InputField';

const pageSyles = {
  forgotStyle: {
    font: 'normal normal bold 22px / 27px Helvetica Neue'
  },
  subheading: {
    font: 'normal normal normal 14px / 20px Helvetica Neue',
    color: '#303F60',
    marginTop: '20px',
    marginBottom: '20px',
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
};

const ForgotPassword = () => {
  const [email, setemail] = useState('');
  const [error, seterror] = useState(false);

  const handleSubmit = () => {
    if (!email) {
      seterror(true);
    } else {
      const data = { username: email };
      //api all login
      // onSubmit(data);
    }
  };

  return (
    <div className="row align-items-center justify-content-center">
      <div style={pageSyles.formStyle} className="col-6">
        <div style={pageSyles.forgotStyle}>Forgot your password?</div>
        <div style={pageSyles.subheading}>
          Enter the email associated with your account and we’ll send you instructions to reset your password.
        </div>
        <div>
          <InputField
            label="Email address"
            type="email"
            value={email}
            onChange={setemail}
            error={error}
            errorText={"Cannot be left blank"}
            placeholder="Enter your email"
          />
        </div>
        <div className="row justify-content-center">
          <button style={pageSyles.submitStyle} type="submit" onClick={handleSubmit} >Submit</button>
        </div>
      </div >
    </div >
  );
};

export default ForgotPassword;
