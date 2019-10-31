import styled from 'styled-components';

import { ReactComponent as Icon } from '../../assets/logout-icon.svg';

export const LogoutIcon = styled(Icon)`
  width: 20px;
  height: 20px;
  padding: 8px;
  margin: 7px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.cards.background};
  &:hover {
    cursor: pointer;
  }
`;
