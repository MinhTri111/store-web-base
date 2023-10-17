declare namespace Product {
  export interface ProductState {
    isLoading: boolean;
    error: any;
    listProduct: ListProduct | null;
  }

  export interface ListProduct {}

  export interface RootProduct {
  }
}
