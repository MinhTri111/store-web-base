import React from 'react';
import { Layout, Image } from 'antd';
import { useOutlet, NavLink, useNavigate } from 'react-router-dom';

import { PrivateLayoutStyle, ButtonAuthStyled } from './PrivateLayout.style';
import LOGO from 'src/assets/icons/logo.png';

const { Header, Content, Footer } = Layout;

const PublicLayout: React.FC = () => {
  const outlet = useOutlet();
  const navigate = useNavigate();

  return (
    <PrivateLayoutStyle>
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
              to={'/dashboard'}
            >
              HOME
            </NavLink>

            <div className="button-auth">
              <ButtonAuthStyled
                onClick={() => {
                  navigate('/register');
                }}
              >
                Logout
              </ButtonAuthStyled>
            </div>
          </div>
        </Header>

        <Content className="body-content">{outlet}</Content>

        <Footer className="body-footer">PhanHuuMinhTri</Footer>
      </Layout>
    </PrivateLayoutStyle>
  );
};

export default PublicLayout;
