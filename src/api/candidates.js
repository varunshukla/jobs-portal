import API from './API';

const applyToJob = async (data) => {
  const info = {
    jobId: data.id,
  }
  const response = await API.makePostCall('/candidates/jobs', info);
  return response;
}

const getAvailableJobs = async () => {
  const response = await API.makeGetCall(`/candidates/jobs`, true);
  return response;
}

const getAppliedJobs = async (data) => {
  const response = await API.makeGetCall(`/candidates/jobs/applied?pageNo=${data.pageNo}`, true);
  return response;
}

// eslint-disable-next-line import/no-anonymous-default-export
export { applyToJob, getAvailableJobs, getAppliedJobs };