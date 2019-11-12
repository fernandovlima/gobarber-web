import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

export default function Signin() {
  const schema = Yup.object().shape({
    email: Yup.string()
      .email('invalid e-mail')
      .required('email is required'),
    password: Yup.string().required('password required'),
  });

  function handleSubmit(data) {
    console.tron.log(data);
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
