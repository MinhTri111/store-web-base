import styled from 'styled-components';
import { Layout } from 'antd';

const { Content } = Layout;

export const HomeScreenStyled = styled(Content)`
  width: 100%;
  .col-banner {
    .ant-image {
      height: 450px;
      width: 100%;

      .ant-image-img {
        object-fit: cover;
        height: 100%;
      }
    }
  }
`;
