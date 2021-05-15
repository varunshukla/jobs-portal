import API from './API';

const getPostedJobs = async () => {
  const response = await API.makeGetCall(`/recruiters/jobs`, true);
  console.log(response);
  return response;
}

const getJobCandidates = async (data) => {
  const response = await API.makeGetCall(`/recruiters/jobs/${data.jobId}/candidates`, true);
  console.log(response);
  return response;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getPostedJobs, getJobCandidates };