import React from 'react';
import PropTypes from 'prop-types';

const pageSyles = {
  labelStyle: {
    margin: '10px 0 0 0',
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '15px',
  },
  errorTextStyle: {
    float: 'right',
    font: 'normal normal normal 12px / 14px Helvetica Neue',
    color: '#FF0000',
    opacity: 0.8
  }
};

export const InputField = ({ label, type, value, onChange, required, error, errorText, placeholder }) => {
  return (
    <div className="row">
      <div className="col">
        <label style={pageSyles.labelStyle} >{label}</label>
        <input value={value} type={type}
          required={required}
          placeholder={placeholder}
          style={{
            margin: '5px 0 10px 0',
            padding: '5px',
            border: error ? '1px solid red' : '1px solid #bfbfbf',
            borderRadius: '5px',
            boxSizing: 'border-box',
            width: '100%',
            background: '#E8E8E833',
          }} onChange={(e) => onChange(e.target.value)} />
      </div>
      <div className="row justify-content-end">
        {error && <div style={pageSyles.errorTextStyle}>
          {errorText}
        </div>
        }
      </div>
    </div>
  );
};

InputField.defaultProps = {
  type: 'text',
  required: false,
  error: false,
  errorText: null,
  placeholder: '',
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  error: PropTypes.bool,
  errorText: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
};