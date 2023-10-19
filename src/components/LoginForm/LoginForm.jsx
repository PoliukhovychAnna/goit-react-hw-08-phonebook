import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  Button,
  Input,
  Label,
  StyledForm,
  StyledError,
} from './/Styled.LoginForm';

const defaultValues = {
  email: '',
  password: '',
};

const LoginSchema = Yup.object().shape({
  password: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleLoginSubmit = (values, action) => {
    dispatch(logIn(values));
    action.resetForm();
  };

  return (
    <Formik
      initialValues={defaultValues}
      onSubmit={handleLoginSubmit}
      validationSchema={LoginSchema}
    >
      <StyledForm>
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
        <Button type="submit">Log In</Button>
      </StyledForm>
    </Formik>
  );
};
