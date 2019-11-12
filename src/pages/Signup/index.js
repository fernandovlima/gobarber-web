import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

export default function Signup() {
  const schema = Yup.object().shape({
    name: Yup.string().required('name required'),
    email: Yup.string()
      .email('invalid e-mail')
      .required('email is required'),
    password: Yup.string()
      .min(6, 'Password must have at least 6 characters')
      .required('password required'),
  });
  function handleSubmit(data) {
    console.tron.log(data);
  }
  return (
    <>
      <img src={logo} alt="gobarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="nome completo" />
        <Input name="email" type="email" placeholder="seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="sua senha secreta"
        />

        <button type="submit">Create Account</button>
        <Link to="/">already register</Link>
      </Form>
    </>
  );
}
