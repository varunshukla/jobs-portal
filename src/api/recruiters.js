import API from './API';

const getPostedJobs = () => {
  const response = API.makeGetCall(`/recruiters/jobs`, true);
  console.log(response);
}

const getJobCandidates = (data) => {
  const response = API.makeGetCall(`/recruiters/jobs/${data.jobId}/candidates`, true);
  console.log(response);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getPostedJobs, getJobCandidates };