import { get } from 'lodash';
import Axios from 'src/configs/axios';

const PRODUCT_API = {
  getListCategoryAPI: async () => {
    const response: Product.ResponseCategories = await Axios.get('/catalog/categories');
    const data = get(response, 'categories', null);
    return data;
  },

  getListProductAPI: async (params: Product.ParamsListProduct) => {
    if (typeof params.category === 'string') {
      const response = await Axios.get(`/catalog/category/${params.category}/products?limit=${params?.limit}&skip=${params?.skip}`);
      return response;
    } else {
      const response = await Axios.get(`/catalog/products?limit=${params?.limit}&skip=${params?.skip}`);
      return response;
    }
  },
};

export default PRODUCT_API;
