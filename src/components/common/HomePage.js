import React from 'react';
import { useHistory } from 'react-router-dom';

export const HomePage = () => {
  const history = useHistory();

  const login = () => {
    window.localStorage.clear();
    history.push("/signup");
  }

  return (
    <div>
      <div className="row">
        <div className="col-sm-6">
          <div className="row">
            <div style={{
              font: 'normal normal normal 60px/74px Helvetica Neue',
              color: '#FFFFFF',
            }} className="col">
              Welcome to My<span style={{ color: '#43AFFF' }}>Jobs</span>
            </div>
          </div>
          <div className="row" style={{
            marginTop: 30
          }}>
            <div className="col">
              <button style={{
                margin: '10px 0 0 0',
                padding: '7px 10px',
                border: '1px solid #43AFFF',
                opacity: 1,
                borderRadius: '5px',
                background: '#43AFFF',
                color: 'white',
                width: '144px',
              }} onClick={login} className="cursor">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-6" style={{ height: 300 }}>
          <img src='../../assets/images/home.jpeg' alt="home" />
        </div>
      </div>
      <div className="row" style={{
        paddingTop: 80,
        paddingBottom: 40,
        font: 'normal normal bold 22px/27px Helvetica Neue',
        color: '#303F60',
        opacity: '1',
      }}>
        <div className="col">
          Why Us?
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <div style={{
            background: '#FFFFFF',
            boxShadow: '0px 3px 6px #557DA526',
            borderRadius: 5,
            opacity: 1,
            padding: 20,
            height: 200
          }}>
            <div className="row">
              <div style={{
                font: 'normal normal bold 22px / 27px Helvetica Neue',
                color: '#43AFFF',
                textTransform: 'capitalize',
                opacity: 1,
              }}>
                Get More Visibility
              </div>
            </div>
            <div className="row">
              <div style={{
                font: 'normal normal normal 14px / 20px Helvetica Neue',
                color: '#303F60',
                opacity: '1',
                marginTop: 50
              }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div style={{
            background: '#FFFFFF',
            boxShadow: '0px 3px 6px #557DA526',
            borderRadius: 5,
            opacity: 1,
            padding: 20,
            height: 200
          }}>
            <div className="row">
              <div style={{
                font: 'normal normal bold 22px / 27px Helvetica Neue',
                color: '#43AFFF',
                textTransform: 'capitalize',
                opacity: 1,
              }}>
                Organize your candidates
              </div>
            </div>
            <div className="row">
              <div style={{
                font: 'normal normal normal 14px / 20px Helvetica Neue',
                color: '#303F60',
                opacity: '1',
                marginTop: 50
              }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div style={{
            background: '#FFFFFF',
            boxShadow: '0px 3px 6px #557DA526',
            borderRadius: 5,
            opacity: 1,
            padding: 20,
            height: 200
          }}>
            <div className="row">
              <div style={{
                font: 'normal normal bold 22px / 27px Helvetica Neue',
                color: '#43AFFF',
                textTransform: 'capitalize',
                opacity: 1,
              }}>
                Verify their abilities
              </div>
            </div>
            <div className="row">
              <div style={{
                font: 'normal normal normal 14px / 20px Helvetica Neue',
                color: '#303F60',
                opacity: '1',
                marginTop: 50
              }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};