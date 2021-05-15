import API from './API';

const createJob = (data) => {
  const info = {
    title: data.title,
    description: data.description,
    location: data.location,
  }

  const response = API.makePostCall('/jobs/', info);
  console.log(response);
}

const getJobDetails = (data) => {
  const response = API.makeGetCall(`/jobs/${data.jobId}`);
  console.log(response);
}

const getAllJobs = () => {
  const response = API.makeGetCall(`/jobs`);
  console.log(response);
}

const deleteJob = (data) => {
  const info = {
    jobId: data.jobId,
  }

  const response = API.makeDeleteCall('/jobs', info);
  console.log(response);
}
// eslint-disable-next-line import/no-anonymous-default-export
export default { createJob, getJobDetails, getAllJobs, deleteJob };