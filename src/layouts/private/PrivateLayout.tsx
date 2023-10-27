import React from 'react';
import { Layout, Image } from 'antd';
import { NavLink, useHistory } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from 'src/stores';
import actions from 'src/stores/screens/auth/auth.reducer';

import { PrivateLayoutStyle, ButtonAuthStyled } from './PrivateLayout.style';
import LOGO from 'src/assets/icons/logo.png';

const { Header, Content, Footer } = Layout;

const PublicLayout: React.FC< { children: React.ReactNode } > = ({ children }) => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const info = useAppSelector(state => state.auth.meInfo);

  const handleLougout = async (): Promise<void> => {
    await dispatch(actions.logOut());
    localStorage.clear();
    history.push('/login');
  };

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
            <p>Hello {info?.username} </p>
            <div className="button-auth">
              <ButtonAuthStyled
                onClick={() => {
                  void handleLougout();
                }}
              >
                Logout
              </ButtonAuthStyled>
            </div>
          </div>
        </Header>

        <Content className="body-content">{children}</Content>

        <Footer className="body-footer">PhanHuuMinhTri</Footer>
      </Layout>
    </PrivateLayoutStyle>
  );
};

export default PublicLayout;
