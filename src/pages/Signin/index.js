import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('invalid e-mail')
    .required('email is required'),
  password: Yup.string().required('password required'),
});

export default function Signin() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="gobarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Seu E-mail" />
        <Input
          name="password"
          type="password"
          placeholder="sua senha secreta"
        />
        <button type="submit">LOGIN</button>
        <Link to="/register">create account</Link>
      </Form>
    </>
  );
}
