import API from './API';

const login = async (data) => {
  const response = await API.makePostCall('/auth/login', {
    email: data.email, password: data.password
  });
  window.localStorage.setItem('user', response);
  window.localStorage.setItem('token', response.data.token);
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
  window.localStorage.setItem('user', response);
  window.localStorage.setItem('token', response.data.token);
  return response;
}

const resetPasswordToken = async (data) => {
  const response = await API.makeGetCall(`/auth/resetpassword?email=${data.email}`);
  console.log(response);
  //save in local storage
  window.localStorage.setItem('resettokendata', response.data);
  return response;
}

const verifyPasswordToken = async (data) => {
  const resetTokenData = window.localStorage.getItem('resettokendata');
  if (resetTokenData) {
    const response = await API.makeGetCall(`/auth/resetpassword/${resetTokenData.token}`);
    if (response.data.exp - parseInt(new Date().getTime() / 1000) > 0) {
      changePassword({ ...data, token: resetPasswordToken.token }).then(resp => {
        if (resp.success) {
          window.localStorage.setItem('user', response);
          window.localStorage.setItem('token', response.data.token);
          return resp;
        }
      });
    }
  }
}

const changePassword = async (data) => {
  const info = {
    password: data.password,
    confirmPassword: data.confirmPassword,
    token: data.token,
  }
  const response = await API.makePostCall('/auth/resetpassword', info);
  return response;
}
// eslint-disable-next-line import/no-anonymous-default-export
export { login, register, resetPasswordToken, verifyPasswordToken, changePassword };