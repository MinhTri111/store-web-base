import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import type { ColumnsType } from 'antd/es/table';

import { useAppDispatch, useAppSelector } from 'src/stores';
import { PARAM_PRODUCT } from 'src/constants';
import { getListCategoriesAction, getListProductAction } from 'src/stores/screens/product/product.action';

export const useListProduct = (): any => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(state => state.product.listCategories);
  const products = useAppSelector(state => state.product.listProduct);
  const isLoading = useAppSelector(state => state.product.isLoading);
  const total = useAppSelector(state => state.product.total);
  const [tableParams, setTableParams] = useState<Product.TableParam>({
    current: 1,
    pageSize: PARAM_PRODUCT.LIMIT,
  });

  const [listProduct, setListProduct] = useState<Product.ListProduct[] | null>([]);

  const fetchCategories = async (): Promise<void> => {
    await dispatch(getListCategoriesAction());
  };

  const fetchProducts = async (params: Product.ParamsListProduct): Promise<void> => {
    await dispatch(getListProductAction(params));
  };

  const handleOnChangePagination = (page: number): void => {
    void fetchProducts({ limit: PARAM_PRODUCT.LIMIT, skip: PARAM_PRODUCT.LIMIT * (page - 1) + 1 });
    setTableParams({
      ...tableParams,
      current: page,
    });
  };

  useEffect(() => {
    setListProduct(products);
  }, [products]);

  const defaultValue = {
    sortBy: [],
  };

  const formik = useFormik<Product.Product_FormValue>({
    initialValues: { ...defaultValue },
    onSubmit(values) {
      if (values.sortBy?.length && listProduct) {
        const listProductFilter = products?.filter(item =>
          values?.sortBy.includes(item?.category ? item.category : ''),
        );
        setListProduct(listProductFilter?.length ? listProductFilter : []);
      } else {
        setListProduct(products);
      }
    },
  });

  const handleFilterCatogories = (categories: Product.ListCategories[]): Product.OptionValue[] | [] => {
    if (categories?.length) {
      return categories.map(item => ({ value: item.category, label: item.category === null ? 'Null' : item.category }));
    }
    return [];
  };

  const COLUMN: ColumnsType<Product.ListProduct[]> = [
    {
      title: '#',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Categories',
      dataIndex: 'category',
      key: 'category',
    },
  ];

  useEffect(() => {
    void fetchCategories();
    void fetchProducts({ limit: PARAM_PRODUCT.LIMIT, skip: 1 });
  }, []);

  return {
    categories,
    formik,
    products,
    handleFilterCatogories,
    listProduct,
    total,
    COLUMN,
    isLoading,
    tableParams,
    handleOnChangePagination,
  };
};
