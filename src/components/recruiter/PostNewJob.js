import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createJob } from '../../api/jobs';
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

const PostNewJob = () => {
  const [title, settitle] = useState('');
  const [description, setdescription] = useState('');
  const [location, setlocation] = useState('');
  const [error, seterror] = useState(false);

  const history = useHistory();

  const handlePostJob = () => {
    if (!title || !description || !location) {
      seterror(true);
    } else {
      const data = { title, description, location };
      createJob(data).then(resp => {
        if (resp.success) {
          history.push('/recruiter/home');
        } else if (!resp.success) {
          seterror(true);
        }
      });
    }
  };

  return (
    <div>
      <div className="row justify-content-start">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              Home
          </li>
            <li className="breadcrumb-item">
              Post a job
          </li>
          </ol>
        </nav>
      </div>
      <div className="row align-items-center justify-content-center">
        <div style={pageSyles.formStyle} className="col-6">
          <div style={pageSyles.forgotStyle}>Post a job</div>
          <div>
            <InputField
              label="Job title*"
              required
              value={title}
              onChange={settitle}
              error={error}
              placeholder="Enter job title"
            />
            <InputField
              label="Description*"
              required
              value={description}
              onChange={setdescription}
              error={error}
              placeholder="Enter job description"
            />
            <InputField
              label="Location*"
              required
              value={location}
              onChange={setlocation}
              error={error}
              errorText="All fields are mandatory"
              placeholder="Enter job location"
            />
          </div>
          <div className="row justify-content-center">
            <button style={pageSyles.submitStyle} onClick={handlePostJob}>Post</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostNewJob;
