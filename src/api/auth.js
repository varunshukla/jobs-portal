import API from './API';

const login = (data) => {
  const response = API.makePostCall('/auth/login', {
    email: data.email, password: data.password
  });
  console.log(response);
  // save received info in local storage
};

const register = (data) => {
  const info = {
    email: data.email,
    name: data.fullname,
    userRole: data.role,
    password: data.password,
    confirmPassword: data.confirmPassword,
    skills: data.skills,
  }

  const response = API.makePostCall('/auth/register', info);
  console.log(response);
}

const resetPasswordToken = (data) => {
  const response = API.makeGetCall(`/auth/resetpassword?email=${data.email}`);
  console.log(response);
  //save in local storage
}

const verifyPasswordToken = (data) => {
  const response = API.makeGetCall(`/auth/resetpassword/${data.token}`);
  console.log(response);
  //save i local storage
}

const changePassword = (data) => {
  const info = {
    password: data.password,
    confirmPassword: data.confirmPassword,
    token: data.token, // get from local storage
  }

  const response = API.makePostCall('/auth/resetpassword', info);
  console.log(response);
}
// eslint-disable-next-line import/no-anonymous-default-export
export default { login, register, resetPasswordToken, verifyPasswordToken, changePassword };