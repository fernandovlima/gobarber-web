import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';

export default function Profile() {
  return (
    <Container>
      <Form>
        <Input name="name" placeholder="full name" />
        <Input name="email" type="email" placeholder="your e-mail address" />

        <hr />

        <Input name="oldPassword" type="password" placeholder="old password" />
        <Input name="password" type="password" placeholder="new password" />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="confirm password"
        />
        <button type="submit">save changes</button>
      </Form>
      <button type="submit">logout</button>
    </Container>
  );
}
