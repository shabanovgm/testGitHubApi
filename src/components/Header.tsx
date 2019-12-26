import React from 'react';
import styled from 'styled-components';

const Header: React.FC = () => {
  return (
    <CustomHeader>Commit history</CustomHeader>
  );
};

const CustomHeader = styled.header`
  height: 50px;
  background-color: #292961;
  width: 100%;
  line-height: 50px;
  text-align: center;
  color: #ffffff;
  font-size: 25px;
  font-weight: bold;
`;

export default Header;
