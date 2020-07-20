import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  border: 0;
  font-size: ${props => props.fontSize}rem;
  padding: 5px 15px;
`;

const InputField = ({
  value,
  readOnly,
  onChange,
  placeholder,
  fontSize,
  ...props
}) => {
  return (
    <StyledInput
      readOnly={readOnly}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      fontSize={fontSize}
    />
  );
};

export default InputField;
