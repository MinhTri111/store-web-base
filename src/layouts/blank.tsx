import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const BlankLayout: React.FC< { children: React.ReactNode } > = ({ children }) => <Wrapper>{children}</Wrapper>;

export default BlankLayout;
