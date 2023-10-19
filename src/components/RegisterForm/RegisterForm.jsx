// import { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import 'react-toastify/dist/ReactToastify.css';
// import { Loader } from 'components/Loader';
import {
  Button,
  Input,
  Label,
  StyledForm,
  StyledError,
} from './Styled.RegisterForm';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const defaultValues = {
  name: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleRegisterSubmit = (values, action) => {
    dispatch(register(values));
    action.resetForm();
  };
  return (
    <Formik
      initialValues={defaultValues}
      onSubmit={handleRegisterSubmit}
      validationSchema={SignupSchema}
    >
      <StyledForm>
        <Label>
          Username
          <Input type="text" name="name" />
          <StyledError name="name" component="div" />
        </Label>
        <Label>
          Email
          <Input type="email" name="email" />
          <StyledError name="email" component="div" />
        </Label>
        <Label>
          Password
          <Input type="password" name="password" />
          <StyledError name="password" component="div" />
        </Label>
        <Button type="submit">Register</Button>
      </StyledForm>
    </Formik>
  );
};
