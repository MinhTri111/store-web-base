import React from 'react';
import { Layout, Image } from 'antd';
import { NavLink, useHistory } from 'react-router-dom';

import { PublicLayoutStyle, ButtonAuthStyled } from './PublicLayout.style';
import LOGO from 'src/assets/icons/logo.png';

const { Header, Content, Footer } = Layout;

const PublicLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const history = useHistory();

  return (
    <PublicLayoutStyle>
      <Layout className="layout-body">
        <Header className="body-header">
          <div className="body-header__icon">
            <Image
              src={LOGO}
              className="icon"
              alt="logo"
              preview={false}
              onClick={() => {
                history.push('/');
              }}
            />
          </div>
          <div className="body-header__menu">
            <NavLink
              to={'/'}
            >
              HOME
            </NavLink>

            <div className="button-auth">
              <ButtonAuthStyled
                onClick={() => {
                  history.push('/login');
                }}
              >
                LOGIN
              </ButtonAuthStyled>
              <ButtonAuthStyled
                onClick={() => {
                  history.push('/register');
                }}
              >
                REGISTER
              </ButtonAuthStyled>
            </div>
          </div>
        </Header>

        <Content className="body-content">{children}</Content>

        <Footer className="body-footer">PhanHuuMinhTri</Footer>
      </Layout>
    </PublicLayoutStyle>
  );
};

export default PublicLayout;
