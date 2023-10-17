import { useEffect } from 'react';

import { useAppDispatch } from 'src/stores';
import { getListCategoriesAction } from 'src/stores/screens/product/product.action';

export const useListProduct = (): any => {
  const dispatch = useAppDispatch();

  const fetchCategories = async (): Promise<void> => {
    await dispatch(getListCategoriesAction());
  };

  useEffect(() => {
    void fetchCategories();
  }, []);
  return {};
};
