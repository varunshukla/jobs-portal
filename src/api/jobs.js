import API from './API';

async function createJob(data) {
  const info = {
    title: data.title,
    description: data.description,
    location: data.location,
  }

  const response = await API.makePostCall('/jobs/', info);
  console.log(response);
  return response;
}

async function getJobDetails(data) {
  const response = await API.makeGetCall(`/jobs/${data.jobId}`);
  console.log(response);
  return response;
}

async function getAllJobs(data) {
  const response = await API.makeGetCall(`/jobs?page=${data.pageNo}`);
  console.log('response ', response);
  return response;
}

async function deleteJob(data) {
  const info = {
    jobId: data.jobId,
  }

  const response = await API.makeDeleteCall('/jobs', info);
  console.log(response);
  return response;
}
// eslint-disable-next-line import/no-anonymous-default-export
export {createJob, getJobDetails, getAllJobs, deleteJob};