import React from 'react';
import PropTypes from 'prop-types';

export const Card = (props) => {
  const { title, description, location, showAction, actionCta, actionText } = props;

  return (
    <div className="col-sm-3 mb-5">
      <div style={{
        background: 'white',
        boxShadow: '0px 3px 6px #557DA526',
        borderRadius: 5,
        opacity: 1,
        padding: 20
      }}>
        <div style={{
          font: 'normal normal normal 17px / 20px Helvetica Neue',
          color: '#303F60',
          opacity: 1,
          marginBottom: 10,
        }}>
          {title}
        </div>

        <div style={{
          font: 'normal normal normal 14px / 16px Helvetica Neue',
          color: '#303F60',
          opacity: 0.8,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          height: 64
        }}>
          {description}
        </div>
        <div className="row" style={{
          paddingTop: 20,
          marginBottom: 17,
          alignItems: 'center',
        }}>
          <div className="col" style={{
            font: 'normal normal normal 14px / 16px Helvetica Neue',
            color: '#303F60',
            opacity: 0.8,
            alignContent: 'center',
          }}>
              <span className="material-icons material-icons-outlined blue">
                place
            </span>
              {location}
          </div>
          <div className="col">
            {showAction &&
              <button style={{
                background: '#43AFFF33',
                borderRadius: 5,
                opacity: 1,
                font: 'normal normal normal 12px / 14px Helvetica Neue',
                color: '#303F60',
                float: 'right',
                padding: '9px 15px',
                border: 'none'
              }}
                onClick={actionCta}
              >
                {actionText}
              </button>}
          </div>
        </div>
      </div>
    </div>
  );
}

Card.defaultProps = {
  showAction: false,
  actionCta: () => { },
  actionText: null,
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  showAction: PropTypes.bool,
  actionCta: PropTypes.func,
  actionText: PropTypes.string,
}