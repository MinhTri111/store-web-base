import { AxiosClient } from './axios';

const Axios = new AxiosClient(`${process.env.REACT_APP_API_URL}`);

export default Axios;
