import React from 'react';

import { ButtonContainer } from './button.styles';

const CustomButton = ({ children, ...otherProps }) => (
  <ButtonContainer {...otherProps}>{children}</ButtonContainer>
);

export default CustomButton;
