import { get } from 'lodash';
import Axios from 'src/configs/axios';

const PRODUCT_API = {
  getListCategoryAPI: async (params) => {
    const response = await Axios.get('/catalog/categories');
    const data = get(response, 'data', null);
    return data;
  },

  getListProductAPI: async (params) => {
    const response = await Axios.get('/catalog/products');
    const data = get(response, 'data', null);
    return data;
  },
};

export default PRODUCT_API;
