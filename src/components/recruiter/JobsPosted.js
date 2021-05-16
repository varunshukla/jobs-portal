import React, { useEffect, useState } from 'react';
import { isEmpty, map } from 'lodash';
import { Link, useHistory } from 'react-router-dom';
import { Card } from '../common/Card';
import JobsApplicantsList from './JobApplicantsList';
import { getPostedJobs, getJobCandidates } from '../../api/recruiters';

export const JobsPosted = () => {
  const [openjobs, setopenjobs] = useState(null)
  const [modalShow, setModalShow] = useState(false);
  const [modalApplicants, setmodalJob] = useState(null);
  const [metaData, setmetaData] = useState(null);
  const history = useHistory();

  useEffect(() => {
    // api call for posted jobs
    getPostedJobs().then(resp => {
      if (resp.success) {
        setopenjobs(resp.data.data);
        setmetaData(resp.data.metadata);
      }
    });

  }, [])

  const actionCta = (job) => {
    // open candidates applied
    getJobCandidates(job).then(resp => {
      if (resp.success) {
        setModalShow(true);
        setmodalJob(resp.data);
      }
    });
  }

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item cursor" onClick={ () => history.push('/recruiter/home')}>
            Home
          </li>
        </ol>
      </nav>
      <div style={{
        font: 'normal normal bold 22px/27px Helvetica Neue',
        color: '#FFFFFF',
        opacity: 1,
      }} className="my-4">
        Jobs posted by you
      </div>
      {
        !isEmpty(openjobs) ? <div className="row">
          {
            map(openjobs, (eachJob) => {
              return (
                <Card
                  title={eachJob.title}
                  description={eachJob.description}
                  location={eachJob.location}
                  showAction={true}
                  actionCta={() => actionCta(eachJob)}
                  actionText="View Applications"
                />
              );
            })
          }
        </div> :
          <div className="align-items-center justify-content-center">
            <div className="row">
              <span className="material-icons material-icons-outlined gray editsize">
                edit_note
            </span>
            </div>
            <div style={{
              font: 'normal normal normal 20px/24px Helvetica Neue',
              color: '#303F60',
              opacity: '0.8',
            }}>
              Your posted jobs will show here!
            </div>
            <button style={{
              background: '#43AFFF33',
              borderRadius: 5,
              opacity: 1,
              font: 'normal normal normal 12px / 14px Helvetica Neue',
              color: '#303F60',
              padding: '9px 15px',
              border: 'none'
            }}
              onClick={<Link to="/recruiter/post-job" />}
            >
              Post a job
          </button>
          </div>
      }
      <JobsApplicantsList show={modalShow} onHide={() => setModalShow(false)} modalData={modalApplicants} />
    </div>
  );
};