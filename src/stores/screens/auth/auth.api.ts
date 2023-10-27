import { get } from 'lodash';

import Axios from 'src/configs/axios';

const AUTH_API = {
  loginAPI: async (params: Auth.LoginRequestData) => {
    const response: any = await Axios.post('/auth/login', params);
    return response.data;
  },

  registerAPI: async (params: Auth.LoginRequestData) => {
    const response: Auth.ResponseRegister = await Axios.post('/auth/user', params);
    return response;
  },

  getMeAPI: async () => {
    const response: Auth.ResponseRegister = await Axios.get('/auth/me');
    const data = get(response, 'data', null);
    return data;
  },
};

export default AUTH_API;
