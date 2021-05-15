const baseUrl = "https://jobs-api.squareboat.info/api/v1/";

async function makeDeleteCall(url, data) {
  if (url && data) {
    const path = `${baseUrl}${url}`;
    const response = await fetch(path, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorisation: window.localStorage.getItem('token')
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }
}

async function makePostCall(url, data, tokenRequired = true) {
  if (url && data) {
    const path = `${baseUrl}${url}`;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: tokenRequired ? window.localStorage.getItem('token') : null,
      },
    };
    const response = await fetch(path, options);
    return response.json();
  }
}

async function makeGetCall(url, tokenRequired = false) {
  const path = `${baseUrl}${url}`;
  const options = {
    method: 'GET',
    headers: {
      Authorization: tokenRequired ? window.localStorage.getItem('token') : null,
    },
  };
  const response = await fetch(path, options);
  return response.json();
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { makeDeleteCall, makePostCall, makeGetCall, baseUrl };
