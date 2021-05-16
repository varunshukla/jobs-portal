import React, { useEffect, useState } from 'react';
import { isEmpty, map } from 'lodash';
import { Link, useHistory } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

import { Card } from '../common/Card';
import { getAppliedJobs } from '../../api/candidates';

export const AppliedJobs = () => {
  const [appliedjobs, setappliedjobs] = useState(null);
  const [pageCount, setPageCount] = useState(null);
  const [pageNo, setpageNo] = useState(0);
  const history = useHistory();

  useEffect(() => {
    // api call for applied job
    makeCall();
  }, []);

  const makeCall = () => {
    getAppliedJobs({pageNo}).then(resp => {
      if (resp.success) {
        setappliedjobs(resp.data);
        setPageCount(Math.ceil(resp.metadata.count / resp.metadata.limit));
      }
    });
  }

  const handlePageClick = (data) => {
    let selected = data.selected;
    setpageNo(selected);
    makeCall();
  };

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item cursor" onClick={() => history.push('/candidate/home')}>
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
      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </div>
  );
};