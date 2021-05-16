import API from './API';

const getPostedJobs = async () => {
  const response = await API.makeGetCall(`/recruiters/jobs`, true);
  return response;
}

const getJobCandidates = async (data) => {
  const response = await API.makeGetCall(`/recruiters/jobs/${data.id}/candidates`, true);
  return response;
}

// eslint-disable-next-line import/no-anonymous-default-export
export { getPostedJobs, getJobCandidates };