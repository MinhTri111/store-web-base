import { Layout, Button } from 'antd';
import styled from 'styled-components';

export const PublicLayoutStyle = styled(Layout)`
  width: 100%;
  overflow: scroll;
  .layout-body {

    .body-header {
      display: flex;
      justify-content: space-between;
      padding: 0;
      background-color: transparent;
      text-align: center;
      padding: 0 100px;
      font-size: 26px;
      border-bottom: 1px solid #eaeef2;
      margin-bottom: 10px;

      a {
        padding: 0;
        color: rgba(0, 0, 0, 0.87);
      }

      .body-header__icon {
        .icon {
          cursor: pointer;
        }
      }

      .body-header__menu {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 100px;

        a {
          font-weight: 500;
          height: 90%;

          &:hover {
            border-bottom: 2px solid red;
            background-color: rgba(0, 0, 0, 0.04);
          }
        }

        a.active {
          border-bottom: 2px solid #4caf4f;
        }

        .button-auth {
          .ant-btn {
            :first-child {
              margin-right: 10px;
            }
          }
        }
      }

      .body-header__icon {
        text-align: right;

        .link-auth {
        }
      }
    }

    .body-content{
      margin-bottom: 20px;
    }

    .body-footer {
      text-align: center;
    }
  }
`;

export const ButtonAuthStyled = styled(Button)`
  min-width: 70px;
  height: auto;
  border: initial;
  border-radius: 3px;
  background-color: #4caf4f;
  font-size: 20px;
  color: #ffffff;

  &:hover, &:active {
    background-color: #a4daa6;
    border: initial;
    color: #ffffff;
  }

  &:focus {
    background-color: #4caf4f;
    border: initial;
    color: #ffffff;
  }
`;
