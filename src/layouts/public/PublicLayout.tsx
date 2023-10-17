import React from 'react';
import { Layout, Row, Col } from 'antd';
import styled from 'styled-components';
import { Link, useOutlet, NavLink } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

const PublicLayout: React.FC = () => {
  const outlet = useOutlet();

  return (
    <PublicLayoutStyle>
      <Layout className="layout-body">
        <Header className="body-header">
          <Row>
            <Col span={12} className="body-header__menu">
              <NavLink
                className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')}
                to={'/'}
              >
                HOME
              </NavLink>

              <NavLink
                className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')}
                to={'/about'}
              >
                ABOUT
              </NavLink>
            </Col>

            <Col span={12} className="body-header__auth">
              <Link className='link-auth' to={'/login'}>LOGIN</Link>
              <Link className='link-auth' to={'/login'}>REGISTER</Link>
            </Col>
          </Row>
        </Header>

        <Content className="body-content">{outlet}</Content>

        <Footer className="body-footer">PhanHuuMinhTri</Footer>
      </Layout>
    </PublicLayoutStyle>
  );
};

export default PublicLayout;

const PublicLayoutStyle = styled(Layout)`
  height: 100%;
  width: 100%;

  .layout-body {
    .body-header {
      padding: 0;
      background-color: transparent;
      text-align: center;
      padding: 0 30px;
      font-size: 26px;

      a {
        color: rgba(0, 0, 0, 0.87);
      }

      .body-header__menu {
        text-align: right;

        a {
          padding: 10px;
          font-weight: 500;

          &:hover {
            border-bottom: 2px solid red;
            background-color: rgba(0, 0, 0, 0.04);
          }
        }

        a.active {
          border-bottom: 2px solid red;
        }
      }

      .body-header__auth {
        text-align: right;
        
        .link-auth{
        }
      }
    }

    .body-content {
      margin: 30px;
    }
    .body-footer {
      text-align: center;
    }
  }
`;
