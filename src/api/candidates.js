import API from './API';

const applyToJob = (data) => {
  const info = {
    jobId: data.jobId,
  }
  const response = API.makePostCall('/candidates/jobs', info);
  console.log(response);
}

const getAvailableJobs = () => {
  const response = API.makeGetCall(`/candidates/jobs`, true);
  console.log(response);
}

const getAppliedJobs = () => {
  const response = API.makeGetCall(`/candidates/jobs/applied`, true);
  console.log(response);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { applyToJob, getAvailableJobs, getAppliedJobs };