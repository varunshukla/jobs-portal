import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { register } from '../../api/auth';
import { InputField } from '../common/InputField';
import { RadioField } from '../common/RadioField';

const pageSyles = {
  loginStyle: {
    font: 'normal normal bold 22px / 27px Helvetica Neue',
    marginBottom: 10,
  },
  formStyle: {
    padding: '30px',
    boxShadow: '0px 30px 36px #557DA526',
    border: '1px solid #c9c9c9',
    borderRadius: '20px',
    background: '#f5f5f5',
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

const SignupForm = () => {
  const [role, setrole] = useState(undefined);
  const [fullname, setfullname] = useState(undefined);
  const [initialpassword, setinitialpassword] = useState(undefined);
  const [confirmpassword, setconfirmpassword] = useState(undefined);
  const [email, setemailaddress] = useState(undefined);
  const [skills, setskills] = useState(null);
  const [errors, seterrors] = useState({});
  const [serverError, setserverError] = useState(null);

  let history = useHistory();

  const handleValidation = () => {
    const fields = {
      role,
      fullname,
      initialpassword,
      confirmpassword,
      email,
      skills
    };
    let errors = {};
    let isFormValid = true;

    // Role
    if (!fields["role"]) {
      isFormValid = false;
      errors["role"] = "Role is mandatory";
    }

    // Name
    if (!fields["fullname"]) {
      isFormValid = false;
      errors["fullname"] = "Field is mandatory";
    }

    if (typeof fields["fullname"] !== "undefined") {
      if (!fields["fullname"].match(/^[a-zA-Z]+$/)) {
        isFormValid = false;
        errors["fullname"] = "Only letters are allowed";
      }
    }

    // Password
    if (!fields["initialpassword"] || !fields["confirmpassword"]) {
      isFormValid = false;
      errors["confirmpassword"] = "Field is mandatory";
    }
    if (fields["initialpassword"].length < 6 || fields["confirmpassword"] < 6) {
      isFormValid = false;
      errors["confirmpassword"] = "Password must be greater than 6 characters";
    }

    if (!fields["initialpassword"] !== !fields["confirmpassword"]) {
      isFormValid = false;
      errors["confirmpassword"] = "Passwords do not match";
    }

    //Email
    if (!fields["email"]) {
      isFormValid = false;
      errors["email"] = "Field is mandatory";
    }

    if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf('@');
      let lastDotPos = fields["email"].lastIndexOf('.');

      if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
        isFormValid = false;
        errors["email"] = "Email is not valid";
      }
    }

    seterrors(errors);
    return isFormValid;
  };

  const handleSignup = () => {
    const isValid = handleValidation();
    if (isValid) {
      const data = {
        userRole: role,
        name: fullname,
        password: initialpassword,
        confirmPassword: confirmpassword,
        email: email,
        skills
      };
      //api call for signup
      register(data).then(resp => {
        seterrors({});
        setserverError(null);
        if (resp.success) {
          if (role === 0) // recruiter role
            history.push('/recruiter/home');
          else if (role === 1)
            history.push('/candidate/home');
        } else {
          setserverError(resp.message);
        }
      });
    }
  };

  return (
    <div className="row align-items-center justify-content-center">
      <div style={pageSyles.formStyle} className="col-6 justify-content-center">
        <div style={pageSyles.loginStyle}>Signup</div>
        <label>I'm a*</label>
        <RadioField
          setrole={(event) => {
            setrole(event.target.htmlFor)
          }}
          role={role}
          error={!!errors['role']}
          errorText={errors['role']}
        />
        <InputField
          label="Full Name*"
          value={fullname}
          onChange={(e) => setfullname(e)}
          required
          error={!!errors['fullname']}
          errorText={errors['fullname']}
          placeholder="Enter full name" />
        <InputField
          label="Email Address*"
          value={email}
          onChange={(e) => setemailaddress(e)}
          type="email"
          required
          error={!!errors['email']}
          errorText={errors['email']}
          placeholder="Enter email address" />
        <div className="row">
          <div className="col">
            <InputField
              label="Create Password*"
              value={initialpassword}
              onChange={(e) => setinitialpassword(e)}
              type="password"
              required
              error={!!errors['confirmpassword']}
              placeholder="Enter your password" />
          </div>
          <div className="col">
            <InputField
              label="Confirm Password*"
              value={confirmpassword}
              onChange={(e) => setconfirmpassword(e)}
              required
              error={!!errors['confirmpassword']}
              errorText={errors['confirmpassword']}
              placeholder="Enter your password" />
          </div>
        </div>
        <InputField
          label="Skills*"
          value={skills}
          onChange={(e) => { setskills(e) }}
          placeholder="Enter comma separated skills" />
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
          <button style={pageSyles.submitStyle} type="submit" onClick={handleSignup} >Signup</button>
        </div>
        <div className="row justify-content-center" style={pageSyles.footerStyle}>
          <div>Have an account? <span
            style={pageSyles.newAccountStyle}
            onClick={() => history.push("/login")}
          >&nbsp;Login</span></div>
        </div>
      </div >
    </div >
  );
};

export default SignupForm;
