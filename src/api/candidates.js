import API from './API';

const applyToJob = async (data) => {
  const info = {
    jobId: data.jobId,
  }
  const response = await API.makePostCall('/candidates/jobs', info);
  console.log(response);
  return response;
}

const getAvailableJobs = async () => {
  const response = await API.makeGetCall(`/candidates/jobs`, true);
  console.log(response);
  return response;
}

const getAppliedJobs = async () => {
  const response = await API.makeGetCall(`/candidates/jobs/applied`, true);
  console.log(response);
  return response;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { applyToJob, getAvailableJobs, getAppliedJobs };