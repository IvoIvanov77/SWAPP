import styled from 'styled-components';

export const HeaderContainer = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: ${({ theme }) => theme.appBar.background};
`;

export const LogoContainer = styled.li`
  float: left;
  a {
    display: block;
    color: #ffe300;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
  span {
  }
`;

export const NavigationListItem = styled.li`
  float: right;
  a {
    display: block;
    color: ${({ theme }) => theme.appBar.fontColor};
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
  a:hover {
    background-color: #111;
  }
`;
