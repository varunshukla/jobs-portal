import React from 'react';

const pageSyles = {
  errorTextStyle: {
    float: 'right',
    font: 'normal normal normal 12px / 14px Helvetica Neue',
    color: '#FF0000',
    opacity: 0.8
  },
  radioStyle: {
    background: '#43AFFF',
    border: '1px solid #43AFFF',
    borderRadius: 5,
    opacity: 1,
    marginRight: 20,
  }
};

export const RadioField = (props) => {
  const { setrole, error, errorText } = props;
  return (
    <div className="row">
        <div className="col">
        <div onClick={setrole}>
          <input type="radio" className="btn-check" name="options" id="0"/>
          <label className="btn btn-primary" for="0" style={pageSyles.radioStyle}>Recruiter</label>

          <input type="radio" className="btn-check" name="options" id="1"/>
          <label className="btn btn-primary" for="1" style={pageSyles.radioStyle}>Candidate</label>
        </div>
      </div>
      <div className="row justify-content-end">
        {error && <div style={pageSyles.errorTextStyle}>
          {errorText}
        </div>
        }
      </div>
    </div>
  );
}