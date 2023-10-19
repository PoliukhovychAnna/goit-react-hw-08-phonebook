import styled from 'styled-components';
import { Field, Form, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  margin-top: 90px;
  display: flex;
  flex-direction: column;
  row-gap: 25px;
  align-items: center;
  padding: 20px;
  border-radius: 5px;
  min-width: 350px;
`;

export const Label = styled.label`
  font-weight: 500;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  row-gap: 2px;
  color: hsla(323, 87%, 50%, 0.664);
  max-width: 300px;
`;

export const Input = styled(Field)`
  min-width: 300px;
  min-height: 36px;
  padding: 1px 5px;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  border-width: 0;
`;

export const Button = styled.button`
  margin-top: 15px;
  width: 130px;
  height: 35px;
  border-radius: 30px;
  margin-left: 20px;
  font-size: 20px;
  font-weight: 500;
  transition: all 300ms cubic-bezier(0.39, 0.575, 0.565, 1);
  background-color: hsla(323, 87%, 50%, 0.664);
  border: 1px solid #111;
  justify-content: center;

  cursor: pointer;
  text-decoration: none;
  color: black;
  text-align: center;

  &:hover {
    box-shadow: 0px 0px 26px 8px hsla(323, 87%, 50%, 0.664);
    background-color: #000428;
    color: hsla(323, 87%, 50%, 0.664);
    transform: scale(1.05);
  }

  /* &:disabled {
    background-color: hsla(323, 87%, 50%, 0.664);
    border: 1px solid #111;
    color: black;
    box-shadow: 0px 0px 0px 0px hsla(323, 87%, 50%, 0.664);
    transform: scale(1);
  } */
`;

export const StyledError = styled(ErrorMessage)`
  font-size: 14px;
  color: black;
  max-width: 300px;
`;
