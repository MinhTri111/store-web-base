declare namespace Product {
  export interface ProductState {
    isLoading: boolean;
    error: any;
    listProduct: ListProduct[] | null;
    listCategories: ListCategories[] | null;
    total: number | null;
  }

  export interface ListProduct {
    id: number | null;
    name: string | null;
    category: string | null;
  }

  export interface ListCategories {
    category: string;
  }

  export interface Product_FormValue {
    sortBy: string[];
  }

  export interface ResponseCategories {
    categories: ListCategories[];
  }

  export interface OptionValue {
    value: string | null;
    label: string;
  }

  export interface ParamsListProduct {
    limit: number | string;
    skip: number | string;
  }
  export interface RootProduct {}

  export interface TableParam {
    current: number,
    pageSize: number,
  }
}
