import API from './API';

const login = async (data) => {
  const response = await API.makePostCall('/auth/login', {
    email: data.email, password: data.password
  }, false);
  if (response.success) {
    window.localStorage.setItem('user', JSON.stringify(response.data));
    window.localStorage.setItem('token', JSON.stringify(response.data.token));
  }
  return response;
};

const register = async (data) => {
  const info = {
    email: data.email,
    name: data.name,
    userRole: data.userRole,
    password: data.password,
    confirmPassword: data.confirmPassword,
    skills: data.skills,
  }

  const response = await API.makePostCall('/auth/register', info, false);
  if (response.success) {
    window.localStorage.setItem('user', JSON.stringify(response.data));
    window.localStorage.setItem('token', JSON.stringify(response.data.token));
  }
  return response;
}

const resetPasswordToken = async (data) => {
  const response = await API.makeGetCall(`/auth/resetpassword?email=${data.email}`);
  //save in local storage
  if (response.success) {
    window.localStorage.setItem('resettokendata', JSON.stringify(response.data));
  }
  return response;
}

const verifyPasswordToken = async (data) => {
  const resetTokenData = JSON.parse(window.localStorage.getItem('resettokendata'));
  var finalResp = {};
  if (resetTokenData) {
    const response = await API.makeGetCall(`/auth/resetpassword/${resetTokenData.token}`);
    if (response?.data?.exp - parseInt(new Date().getTime() / 1000) > 0) {
      const aa = await changePassword({ ...data, token: resetTokenData.token }).then(resp => {
        if (resp.success) {
          window.localStorage.setItem('user', JSON.stringify(response.data));
          window.localStorage.setItem('token', JSON.stringify(response.data.token));
          return resp;
        }
      });
      finalResp = aa;
      return aa;
    }
    else return response;
  }
  return finalResp;
}

const changePassword = async (data) => {
  const info = {
    password: data.password,
    confirmPassword: data.confirmPassword,
    token: data.token,
  }
  const response = await API.makePostCall('/auth/resetpassword', info, false);
  return response;
}
// eslint-disable-next-line import/no-anonymous-default-export
export { login, register, resetPasswordToken, verifyPasswordToken, changePassword };