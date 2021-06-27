import React from 'react';
import styled from '@emotion/styled';
import { Input, Button } from './Form';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  align-items: center;
  > button {
    margin-left: 1%;
  }
`;

const InputForm = ({ inputVal, onChange, onSubmit, buttonText }) => {
  return (
    <Container>
      <Input value={inputVal} onChange={onChange} />
      <Button onClick={onSubmit}>{buttonText || "Search"}</Button>
    </Container>
  );
};

InputForm.propTypes = {
  inputVal: PropTypes.string.isRequired,
  onChange: PropTypes.any,
  onSubmit: PropTypes.any,
  buttonText: PropTypes.string
};

export default InputForm;