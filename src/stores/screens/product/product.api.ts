import { get } from 'lodash';
import Axios from 'src/configs/axios';

const PRODUCT_API = {
  getListCategoryAPI: async () => {
    const response: Product.ResponseCategories = await Axios.get('/catalog/categories');
    const data = get(response, 'categories', null);
    return data;
  },

  getListProductAPI: async (params: Product.ParamsListProduct) => {
    const response = await Axios.get(`/catalog/products?limit=${params?.limit}&skip=${params?.skip}`);

    return response;
  },
};

export default PRODUCT_API;
