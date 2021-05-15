import API from './API';

const login = async (data) => {
  const response = await API.makePostCall('/auth/login', {
    email: data.email, password: data.password
  });
  console.log(response);
  // save received info in local storage
  window.localStorage.setItem('user', response);
  return response;
};

const register = async (data) => {
  const info = {
    email: data.email,
    name: data.fullname,
    userRole: data.role,
    password: data.password,
    confirmPassword: data.confirmPassword,
    skills: data.skills,
  }

  const response = await API.makePostCall('/auth/register', info);
  console.log(response);
  return response;
}

const resetPasswordToken = async (data) => {
  const response = await API.makeGetCall(`/auth/resetpassword?email=${data.email}`);
  console.log(response);
  //save in local storage
  window.localStorage.setItem('resettoken', response);
  return response;
}

const verifyPasswordToken = async (data) => {
  const response = await API.makeGetCall(`/auth/resetpassword/${data.token}`);
  console.log(response);
  //save i local storage
  window.localStorage.setItem('passwordtoken', response);
  return response;
}

const changePassword = async (data) => {
  const info = {
    password: data.password,
    confirmPassword: data.confirmPassword,
    token: data.token, // get from local storage
  }

  const response = await API.makePostCall('/auth/resetpassword', info);
  console.log(response);
  return response;
}
// eslint-disable-next-line import/no-anonymous-default-export
export default { login, register, resetPasswordToken, verifyPasswordToken, changePassword };