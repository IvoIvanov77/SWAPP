import React from 'react';

import { GroupContainer, FormInputContainer } from './input.styles';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <GroupContainer>
    <FormInputContainer
      className="form-input"
      onChange={handleChange}
      {...otherProps}
    />
  </GroupContainer>
);

export default FormInput;
