import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, lazy } from 'react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { Layout } from 'components/Layout/Layout';
import { PrivateRoute } from 'components/PrivateRoute';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import NotFound from 'pages/NotFound/NotFound';

import { MainContainer } from './Styled.App';

const Home = lazy(() => import('pages/Home/Home'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const Register = lazy(() => import('pages/Register/Register'));
const Login = lazy(() => import('pages/Login/Login'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <p>Refreshing user...</p>
  ) : (
    <MainContainer>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Register />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </MainContainer>
  );
};
