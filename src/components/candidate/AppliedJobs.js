import React, { useEffect, useState } from 'react';
import { isEmpty, map } from 'lodash';
import { Card } from '../common/Card';
import { Link } from 'react-router-dom';

const data = [
  {
    title: "Designer",
    description: "lkdsjf sgsh fsd afbgekjfbf adj  fefgejf fgsef ffjhw rwemfef wegfwef wefwefjw das sh asdhs a bjhfas dwkgc asasasf ajfgfh ff fjfafbasjhfg s",
    location: "Gurgaon",
  }, {
    title: "DesignerAA",
    description: "lkdsjf sgsh fsd afbgekjfbf adj  fefgejf fgsef ffjhw rwemfef wegfwef wefwefjw das sh asdhs a bjhfas dwkgc asasasf ajfgfh ff fjfafbasjhfg s",
    location: "Gurgaon",
  }, {
    title: "Akjk",
    description: "lkdsjf sgsh fsd afbgekjfbf adj  fefgejf fgsef ffjhw rwemfef wegfwef wefwefjw das sh asdhs a bjhfas dwkgc asasasf ajfgfh ff fjfafbasjhfg s",
    location: "Gurgaon",
  }, {
    title: "skjdh",
    description: "lkdsjf sgsh fsd afbgekjfbf adj  fefgejf fgsef ffjhw rwemfef wegfwef wefwefjw das sh asdhs a bjhfas dwkgc asasasf ajfgfh ff fjfafbasjhfg s",
    location: "Gurgaon",
  }, {
    title: "sdsfkjsdhf",
    description: "lkdsjf sgsh fsd afbgekjfbf adj  fefgejf fgsef ffjhw rwemfef wegfwef wefwefjw das sh asdhs a bjhfas dwkgc asasasf ajfgfh ff fjfafbasjhfg s",
    location: "Gurgaon",
  },
];

export const AppliedJobs = () => {
  const [appliedjobs, setappliedjobs] = useState(data)

  useEffect(() => {
    // api call for open job
    setappliedjobs(data);

  }, [appliedjobs])

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