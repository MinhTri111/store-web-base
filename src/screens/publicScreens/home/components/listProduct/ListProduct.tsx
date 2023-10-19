import React from 'react';
import { Row, Col, Table } from 'antd';

import { PARAM_PRODUCT } from 'src/constants';
import { SelectField } from 'src/components/form';
import { useListProduct } from './useListProduct';

import { ListProductStyled, TitleStyled, TextStyled, ButtonSearchStyled } from './ListProduct.styled';

const ListProduct: React.FC = () => {
  const productHook = useListProduct();
  const {
    categories,
    formik,
    handleFilterCatogories,
    listProduct,
    COLUMN,
    isLoading,
    total,
    tableParams,
    handleOnChangePagination,
  } = productHook;

  const { getFieldProps, errors, touched, setFieldValue, handleSubmit } = formik;

  return (
    <ListProductStyled>
      <TitleStyled>LIST PRODUCT</TitleStyled>
      <Row>
        <Col span={24}>
          <TextStyled>Search By Categories</TextStyled>
          <div className="field-search">
            <SelectField
              field={getFieldProps('sortBy')}
              setFieldValue={setFieldValue}
              optionsSelect={handleFilterCatogories(categories)}
              selectProps={{
                showArrow: true,
                placeholder: '',
                allowClear: true
              }}
              error={errors.sortBy}
              touched={touched.sortBy}
              className="sort-by-field"
            />
            <ButtonSearchStyled onClick={handleSubmit}>Search</ButtonSearchStyled>
          </div>
        </Col>

        <Col span={24}>
          <Table
            rowKey={'id'}
            dataSource={listProduct}
            columns={COLUMN}
            loading={isLoading}
            pagination={{
              total: Math.floor(total / PARAM_PRODUCT.LIMIT),
              pageSize: PARAM_PRODUCT.LIMIT,
              current: tableParams.current,
              onChange: (page) => {
                handleOnChangePagination(page)
              },
            }}
          />

        </Col>
      </Row>
    </ListProductStyled>
  );
};

export default ListProduct;
