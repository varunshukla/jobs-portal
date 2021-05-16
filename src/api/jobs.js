import API from './API';

async function createJob(data) {
  const info = {
    title: data.title,
    description: data.description,
    location: data.location,
  }
  const response = await API.makePostCall('/jobs/', info);
  return response;
}

async function getJobDetails(data) {
  const response = await API.makeGetCall(`/jobs/${data.id}`);
  return response;
}

async function getAllJobs(data) {
  const response = await API.makeGetCall(`/jobs?page=${data.pageNo}`);
  return response;
}

async function deleteJob(data) {
  const info = {
    jobId: data.id,
  }
  const response = await API.makeDeleteCall('/jobs', info);
  return response;
}
// eslint-disable-next-line import/no-anonymous-default-export
export {createJob, getJobDetails, getAllJobs, deleteJob};