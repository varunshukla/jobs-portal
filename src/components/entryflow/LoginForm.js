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
  const [errors, seterrors] = useState({});
  const [serverError, setserverError] = useState(null);

  const history = useHistory();

  const handleValidation = () => {
    const fields = {
      username, password
    };
    let errors = {};
    let isFormValid = true;

    // Password
    if (!fields["password"]) {
      isFormValid = false;
      errors["password"] = "Field is mandatory";
    }
    if (fields["password"].length < 6) {
      isFormValid = false;
      errors["password"] = "Password must be greater than 6 characters";
    }

    //Email
    if (!fields["username"]) {
      isFormValid = false;
      errors["username"] = "Field is mandatory";
    }

    if (typeof fields["username"] !== "undefined") {
      let lastAtPos = fields["username"].lastIndexOf('@');
      let lastDotPos = fields["username"].lastIndexOf('.');

      if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["username"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["username"].length - lastDotPos) > 2)) {
        isFormValid = false;
        errors["username"] = "Email is not valid";
      }
    }

    seterrors(errors);
    return isFormValid;
  };

  const handleSubmit = () => {
    const isValid = handleValidation();
    if (isValid) {
      const data = { email: username, password };
      login(data).then(resp => {
        seterrors(null);
        setserverError(null);
        if (resp.success) {
          if (resp.data.userRole === 0)
            setTimeout(function () {
              history.replace('/recruiter/home');
            }, 1000);
          else
            setTimeout(function () {
              history.replace('/candidate/home');
            }, 1000);
        } else {
          setserverError("Incorrect email & password!!! ");
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
        <div className="row">
          <InputField
            label="Email address"
            type="email"
            value={username}
            onChange={setusername}
            error={!!errors?.username}
            errorText={errors?.username}
          />
          <InputField
            label="Password"
            type="password"
            value={password}
            onChange={setpassword}
            error={!!errors?.password}
            errorText={errors?.password}
          />
        </div>
        {
          serverError &&
          <div className="row justify-content-center">
            <div style={{
              float: 'right',
              font: 'normal normal normal 12px / 14px Helvetica Neue',
              color: '#FF0000',
              opacity: 0.8
            }}>
              {serverError}
            </div>
          </div>
        }
        <div className="row justify-content-center">
          <button style={pageSyles.submitStyle} type="submit" onClick={handleSubmit}>Login</button>
        </div>
        <div className="row justify-content-center" style={pageSyles.footerStyle}>
          <div>New to MyJobs? <span style={pageSyles.newAccountStyle}
            className="cursor" onClick={() => history.push('/signup')}>&nbsp;Create an account</span></div>
        </div>
      </div >
    </div >
  );
};

export default LoginForm;
