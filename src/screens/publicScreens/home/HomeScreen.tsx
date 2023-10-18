import React from 'react';
import { Row, Col } from 'antd';

import Banner from './components/banner/Banner';
import ListProduct from './components/listProduct/ListProduct';

import { HomeScreenStyled } from './HomeScreen.styled';

const HomeScreen: React.FC = () => {
  return (
    <HomeScreenStyled>
      <Row style={{ height: '100%' }}>
        <Col span={24} className="col-banner">
          <Banner />
        </Col>
        <Col span={24}>
          <ListProduct />
        </Col>
      </Row>
    </HomeScreenStyled>
  );
};

export default HomeScreen;
