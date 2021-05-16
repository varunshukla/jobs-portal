import React, { useEffect, useState } from 'react';
import { isEmpty, map } from 'lodash';
import { Card } from '../common/Card';
import { Link } from 'react-router-dom';
import { getAppliedJobs } from '../../api/candidates';

export const AppliedJobs = () => {
  const [appliedjobs, setappliedjobs] = useState(null);

  useEffect(() => {
    // api call for applied job
    getAppliedJobs().then(resp => {
      if (resp.success) {
        setappliedjobs(resp.data);
      }
    });
  }, [appliedjobs])

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            Home
          </li>
          <li className="breadcrumb-item">
            Applied Jobs
          </li>
        </ol>
      </nav>
      <div style={{
        font: 'normal normal bold 22px/27px Helvetica Neue',
        color: '#FFFFFF',
        opacity: 1,
      }} className="my-4">
        Jobs applied by you
      </div>
      {
        !isEmpty(appliedjobs) ?
          <div className="row">
            {
              map(appliedjobs, (eachJob) => {
                return (
                  <Card
                    title={eachJob.title}
                    description={eachJob.description}
                    location={eachJob.location}
                  />
                );
              })
            }
          </div> :
          <div className="d-flex align-items-center justify-content-center">
            <div className="row">
              <span className="material-icons material-icons-outlined gray editsize">
                edit_note
            </span>
            </div>
            <div style={{
              font: 'normal normal normal 20px/24px Helvetica Neue',
              color: '#303F60',
              opacity: '0.8',
            }}>Your applied jobs will show here!</div>
            <button style={{
              background: '#43AFFF33',
              borderRadius: 5,
              opacity: 1,
              font: 'normal normal normal 12px / 14px Helvetica Neue',
              color: '#303F60',
              padding: '9px 15px',
              border: 'none'
            }}
              onClick={<Link to="/candidate/home" />}
            >
              See all jobs
          </button>
          </div>
      }
    </div>
  );
};