import React, { useEffect, useState } from 'react';
import { map } from 'lodash';
import { Card } from '../common/Card';
import { getAllJobs } from '../../api/jobs';
import { applyToJob } from '../../api/candidates';

export const OpenJobs = () => {
  const [openjobs, setopenjobs] = useState('');
  const [pageNo, setpageNo] = useState(1);

  useEffect(() => {
    // api call for open job
    getAllJobs({ pageNo }).then(resp => {
      if (resp.success) {
        setopenjobs(resp.data);
      }
    });
  }, [pageNo]);

  const actionCta = (job) => {
    // apply for job
    applyToJob(job).then(resp => {
      if (resp.success) {
        setopenjobs(resp.data);
      }
    });
  }

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            Home
          </li>
        </ol>
      </nav>
      <div style={{
        font: 'normal normal bold 22px/27px Helvetica Neue',
        color: '#FFFFFF',
        opacity: 1,
      }} className="my-4">
        Jobs for you
      </div>
      <div className="row">
        {
          map(openjobs, (eachJob) => {
            return (
              <Card
                title={eachJob.title}
                description={eachJob.description}
                location={eachJob.location}
                showAction={true}
                actionCta={() => actionCta(eachJob)}
                actionText="Apply"
              />
            );
          })
        }
      </div>
    </div>
  );
};