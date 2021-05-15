import React from 'react';
import Avatar from 'react-avatar';

export const ApplicantCard = (props) => {
  const { name, email, skills } = props;
  return (
    <div className="col-sm-6">
      <div style={{
        background: '#FFFFFF',
        border: '1px solid #303F6080',
        borderRadius: 5,
        opacity: 1,
        padding: 20,
        margin: 5,
      }}>
        <div className="row">
          <div className="col-sm-3">
            <Avatar name={name} round size={45} color="gray" />
          </div>
          <div className="col-sm-9">
            <div className="row"
              style={{
                font: 'normal normal normal 15px/18px Helvetica Neue',
                color: '#303F60',
                opacity: 1,
              }}>
              {name}
            </div>
            <div className="row"
              style={{
                font: 'normal normal normal 15px/17px Helvetica Neue',
                color: '#303F60',
                opacity: 0.8,
              }}>
              {email}
            </div>
          </div>
        </div>
        <div className="row"
          style={{
            font: 'normal normal normal 13px/16px Helvetica Neue',
            color: '#303F60',
            opacity: 1,
            marginTop: 20,
          }}>
          <div className="col">
            Skills
        </div>
        </div>
        <div className="row"
          style={{
            font: 'normal normal normal 15px/18px Helvetica Neue',
            color: '#303F60',
            opacity: 0.8,
          }}>
          <div className="col">
            {skills}
          </div>
        </div>
      </div>
    </div>
  );
};