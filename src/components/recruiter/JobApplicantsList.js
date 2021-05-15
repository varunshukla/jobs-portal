import React from 'react';
import { Modal } from 'react-bootstrap';
import { map } from 'lodash';
import { ApplicantCard } from '../common/ApplicantCard';

function JobsApplicantsList(props) {
  const { modalData } = props;

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter"
      scrollable={modalData ? true : false}
      centered
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" style={{
          font: 'normal normal bold 19px / 24px Helvetica Neue',
        }}>
          Applicants for this job
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <div className="container">
          <div className="row">
            <div className="col-sm-8"
              style={{
                font: 'normal normal normal 15px/17px Helvetica Neue',
                color: '#303F60',
                opacity: 1,
              }}>
              {modalData?.length || 0} applications
            </div>
          </div>
          <div className="row"
            style={{
              marginTop: 10,
              marginBottom: 10,
              background: '#A9AFBC',
              borderRadius: 10,
              color: '#303F60',
            }}>
            {
              modalData?.length > 0 ?
                map(modalData, eachData => <ApplicantCard {...eachData} />)
                :
                <div className="d-flex align-items-center justify-content-center" style={{
                  height: 600
                }}>
                  <div>
                    <div className="row text-center">
                      <div className="material-icons material-icons-outlined gray descriptionsize">
                        description
                    </div>
                    </div>
                    <div className="row" style={{
                      font: 'normal normal normal 20px/24px Helvetica Neue',
                      color: '#303F60',
                      opacity: 0.8,
                    }}>
                      No applications available!
                  </div>
                  </div>
                </div>
            }
          </div>
        </div>
      </Modal.Body>
    </Modal >
  );
}

export default JobsApplicantsList;
