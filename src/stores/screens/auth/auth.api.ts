import Axios from 'src/configs/axios';
import { AxiosClient } from 'src/configs/axios/axios';

const AUTH_API = {
  loginAPI: async (params: Auth.LoginRequestData) => {
    const response: any = await Axios.post('/auth/login', params);
    return response;
  },

  registerAPI: async (params: Auth.LoginRequestData) => {
    const response: Auth.ResponseRegister = await Axios.post('/auth/user', params);
    return response;
  },

  getMeAPI: async () => {
    const response: Auth.ResponseRegister = await new AxiosClient().get('/auth/me');
    return response;
  },
};

export default AUTH_API;
