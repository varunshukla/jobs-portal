import React, { useState } from 'react';
import { Toast } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { verifyPasswordToken } from '../../api/auth';
import { InputField } from '../common/InputField';

const pageSyles = {
  loginStyle: {
    font: 'normal normal bold 22px / 27px Helvetica Neue',
    marginBottom: 10,
  },
  subheading: {
    font: 'normal normal normal 14px / 20px Helvetica Neue',
    color: '#303F60',
    marginTop: '20px',
    marginBottom: '20px',
  },
  formStyle: {
    marginTop: '100px',
    padding: '30px',
    boxShadow: '0px 30px 36px #557DA526',
    border: '1px solid #c9c9c9',
    borderRadius: '20px',
    background: '#f5f5f5',
  },
  resetStyle: {
    margin: '30px 0 0 0',
    padding: '7px 10px',
    border: '1px solid #43AFFF',
    opacity: 1,
    borderRadius: '5px',
    background: '#43AFFF',
    color: 'white',
    width: '144px',
  },
};

const ResetPassword = () => {
  const [initialpassword, setinitialpassword] = useState(undefined);
  const [confirmpassword, setconfirmpassword] = useState(undefined);
  const [errors, seterrors] = useState({});
  const [serverError, setserverError] = useState(null);
  const [show, setShow] = useState(false);

  const history = useHistory();

  const handleValidation = () => {
    const fields = {
      initialpassword,
      confirmpassword,
    };
    let errors = {};
    let isFormValid = true;

    // Password
    if (!fields["initialpassword"] || !fields["confirmpassword"]) {
      isFormValid = false;
      errors["confirmpassword"] = "Field is mandatory";
    }

    if (!fields["initialpassword"] !== !fields["confirmpassword"]) {
      isFormValid = false;
      errors["confirmpassword"] = "Passwords do not match";
    }

    seterrors(errors);
    return isFormValid;
  };

  const handleReset = () => {
    const isValid = handleValidation();
    if (isValid) {
      const data = {
        password: initialpassword,
        confirmPassword: confirmpassword,
      };
      //api call for signup
      verifyPasswordToken(data).then(resp => {
        setserverError(null);
        seterrors({});
        if (resp?.success) {
          setShow(true);
          history.push('/');
        } else {
          setserverError(`Something went wrong. Please try again. \n ${resp?.message}`);
        }
      });
    }
  };

  return (
    <div className="row align-items-center justify-content-center">
      <div style={pageSyles.formStyle} className="col-6 justify-content-center">
        <div style={pageSyles.loginStyle}>Reset Your Password</div>
        <div style={pageSyles.subheading}>
          Enter your new password below.
        </div>
        <InputField
          label="New password"
          value={initialpassword}
          onChange={(e) => setinitialpassword(e)}
          type="password"
          required
          error={!!errors?.confirmpassword}
          placeholder="Enter your password" />
        <InputField
          label="Confirm new password"
          value={confirmpassword}
          onChange={(e) => setconfirmpassword(e)}
          required
          error={!!errors?.confirmpassword}
          errorText={errors?.confirmpassword}
          placeholder="Enter your password" />
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
          <button style={pageSyles.resetStyle} type="submit" onClick={handleReset} >Reset</button>
        </div>
      </div>
      <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
        }}>
        <Toast.Header>
          <img
            src="holder.js/20x20?text=%20"
            className="rounded mr-2"
            alt=""
          />
          <strong className="mr-auto">Voila</strong>
        </Toast.Header>
        <Toast.Body>Password changed successfully!!</Toast.Body>
      </Toast>
    </div >
  );
};

export default ResetPassword;
