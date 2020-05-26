import axios from 'axios';
import { get as getl } from 'lodash';
import { notification } from 'antd';

const server = 'http://localhost:5000';

function getHeaders(type: string) {
  const token = localStorage.getItem('token');

  return {
    Authorization: token || '',
    'Content-Type': type || 'application/json',
  };
}

interface IHttpMethod {
  method?: 'get' | 'post' | 'patch' | 'delete';
  url: string;
  data?: any;
  type?: string;
}

const successHandler = (res: any) => {
  const messageTitle = getl(res, 'data.message');
  const messageDescription = getl(res, 'data.message');
  const isSilent = getl(res, 'data.silent');
  const isSuccess = getl(res, 'data.success');

  if (isSuccess && !isSilent && messageTitle) {
    notification.success({
      message: messageTitle,
      description: messageDescription,
      duration: 1,
    });
  } else {
    console.log(res);
  }
};

const failHandler = (res: any) => {
  const messageTitle = getl(res, 'response.data.message');
  const isSilent = getl(res, 'response.data.silent');
  const isFail = getl(res, 'response.data.fail');
  const statusCode = getl(res, 'response.status');
  const statusText = getl(res, 'response.statusText');

  if (statusCode === 500) {
    notification.error({
      message: statusText,
      duration: 4,
    });
  }

  if (isFail && !isSilent && messageTitle) {
    notification.error({
      message: messageTitle,
      duration: 1,
    });
  } else {
    //console.log(res);
  }
};


function httpMethod({ method, url, data, type = '' }: IHttpMethod) {
  return axios({
    method,
    url: server + url,
    data,
    headers: getHeaders(type),
  })
    .then((res) => {
      successHandler(res);
      return res.data;
    })
    .catch((error) => {
      failHandler(error);
    });
}

export function get({ url, data }: IHttpMethod) {
  return httpMethod({ method: 'get', url, data });
}

export function post({ url, data, type }: IHttpMethod) {
  return httpMethod({ method: 'post', url, data, type });
}

export function patch({ url, data, type }: IHttpMethod) {
  return httpMethod({ method: 'patch', url, data, type });
}

export function del({ url, data }: IHttpMethod) {
  return httpMethod({ method: 'delete', url, data });
}
