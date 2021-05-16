import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { login } from '../../api/auth';
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
    textAlign: 'center'
  }
};

const LoginForm = () => {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [error, seterror] = useState(null);

  const history = useHistory();

  const handleSubmit = () => {
    if (!username || !password) {
      seterror("Incorrect email address & password");
    } else {
      const data = { email: username, password };

      login(data).then(resp => {
        seterror(null);
        if (resp.success) {
          if (resp.data.role === 0)
            history.push('/recruiter/home');
          else
            history.push('/candidate/home');
        } else {
          seterror(resp.message);
        }
      });
    }
  };

  return (
    <div className="row align-items-center justify-content-center">
      <div style={pageSyles.formStyle} className="col-5">
        <div className="row">
          <div style={pageSyles.loginStyle}>Login</div>
        </div>
        <InputField
          label="Email address"
          type="email"
          value={username}
          onChange={setusername}
          error={error}
        />
        <InputField
          label="Password"
          type="password"
          value={password}
          onChange={setpassword}
          error={!!error}
          errorText={error}
        />
        <div className="row justify-content-center">
          <button style={pageSyles.submitStyle} type="submit" onClick={handleSubmit}>Login</button>
        </div>
        <div className="row justify-content-center" style={pageSyles.footerStyle}>
          <div>New to MyJobs? <span style={pageSyles.newAccountStyle} onClick={() => history.push('/signup')}>&nbsp;Create an account</span></div>
        </div>
      </div >
    </div >
  );
};

export default LoginForm;
