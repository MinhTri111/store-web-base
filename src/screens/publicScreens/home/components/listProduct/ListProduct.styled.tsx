import styled from 'styled-components';
import { Typography, Button } from 'antd';

const { Title, Text } = Typography;

export const TitleStyled = styled(Title)`
  text-align: center;
`;

export const TextStyled = styled(Text)`
  font-size: 24px;
  font-weight: 500;
`;

export const ListProductStyled = styled.div`
  padding: 0 20px;

  .field-search {
    display: flex;
    align-items: center;
    gap: 20px;

    .sort-by-field {
      width: 30%;
      margin-bottom: initial;
    }
  }
`;

export const ButtonSearchStyled = styled(Button)``;
