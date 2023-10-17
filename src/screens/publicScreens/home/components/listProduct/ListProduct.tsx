import React from 'react';

import { ListProductStyled, TitleStyled } from './ListProduct.styled';
// import { useListProduct } from './useListProduct';

const ListProduct: React.FC = () => {
  // const productHook = useListProduct();
  // const data = fetch('https://mystoreapi.com/catalog/categories')

  // console.log('data', data);
  return (
    <ListProductStyled>
      <TitleStyled>LIST PRODUCT</TitleStyled>
    </ListProductStyled>
  );
};

export default ListProduct;
