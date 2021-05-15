import React, { useEffect, useState } from 'react';
import { isEmpty, map } from 'lodash';
import { Card } from '../common/Card';
import { Link } from 'react-router-dom';
import JobsApplicantsList from './JobApplicantsList';

const data = [
  {
    title: "Designer",
    description: "lkdsjf sgsh fsd afbgekjfbf adj  fefgejf fgsef ffjhw rwemfef wegfwef wefwefjw das sh asdhs a bjhfas dwkgc asasasf ajfgfh ff fjfafbasjhfg s",
    location: "Gurgaon",
    id: 'ewewsdfe'
  }, {
    title: "DesignerAA",
    description: "lkdsjf sgsh fsd afbgekjfbf adj  fefgejf fgsef ffjhw rwemfef wegfwef wefwefjw das sh asdhs a bjhfas dwkgc asasasf ajfgfh ff fjfafbasjhfg s",
    location: "Gurgaon",
    id: 'ewewsdfe'
  }, {
    title: "Akjk",
    description: "lkdsjf sgsh fsd afbgekjfbf adj  fefgejf fgsef ffjhw rwemfef wegfwef wefwefjw das sh asdhs a bjhfas dwkgc asasasf ajfgfh ff fjfafbasjhfg s",
    location: "Gurgaon",
    id: 'ewewsdfe'
  }, {
    title: "skjdh",
    description: "lkdsjf sgsh fsd afbgekjfbf adj  fefgejf fgsef ffjhw rwemfef wegfwef wefwefjw das sh asdhs a bjhfas dwkgc asasasf ajfgfh ff fjfafbasjhfg s",
    location: "Gurgaon",
    id: 'ewewsdfe'
  }, {
    title: "sdsfkjsdhf",
    description: "lkdsjf sgsh fsd afbgekjfbf adj  fefgejf fgsef ffjhw rwemfef wegfwef wefwefjw das sh asdhs a bjhfas dwkgc asasasf ajfgfh ff fjfafbasjhfg s",
    location: "Gurgaon",
    id: 'ewewsdfe'
  },
];

export const JobsPosted = () => {
  const [openjobs, setopenjobs] = useState(data)
  const [modalShow, setModalShow] = useState(false);
  const [modalJob, setmodalJob] = useState(null);

  useEffect(() => {
    // api call for posted jobs
    setopenjobs(data);

  }, [openjobs])

  const actionCta = (job) => {
    // open candidates applied
    console.log(job);
    setModalShow(true);
    setmodalJob(job);
  }

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <span className="material-icons material-icons-outlined blue homeiconsize">
              home
            </span>
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
      <JobsApplicantsList show={modalShow} onHide={() => setModalShow(false)} modalData={modalJob} />
    </div>
  );
};