import React from 'react';
import { Layout, Image } from 'antd';
import { useOutlet, NavLink, useNavigate } from 'react-router-dom';

import { PublicLayoutStyle, ButtonAuthStyled } from './PublicLayout.style';
import LOGO from 'src/assets/icons/logo.png';

const { Header, Content, Footer } = Layout;

const PublicLayout: React.FC = () => {
  const outlet = useOutlet();
  const navigate = useNavigate();

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
                navigate('/');
              }}
            />
          </div>
          <div className="body-header__menu">
            <NavLink
              className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')}
              to={'/'}
            >
              HOME
            </NavLink>

            <div className="button-auth">
              <ButtonAuthStyled
                onClick={() => {
                  navigate('/login');
                }}
              >
                LOGIN
              </ButtonAuthStyled>
              <ButtonAuthStyled
                onClick={() => {
                  navigate('/register');
                }}
              >
                REGISTER
              </ButtonAuthStyled>
            </div>
          </div>
        </Header>

        <Content className="body-content">{outlet}</Content>

        <Footer className="body-footer">PhanHuuMinhTri</Footer>
      </Layout>
    </PublicLayoutStyle>
  );
};

export default PublicLayout;
