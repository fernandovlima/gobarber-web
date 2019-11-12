import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

export default function Signup() {
  return (
    <>
      <img src={logo} alt="gobarber" />

      <form>
        <input type="text" placeholder="nome completo" />
        <input type="email" placeholder="seu e-mail" />
        <input type="password" placeholder="sua senha secreta" />

        <button type="submit">Create Account</button>
        <Link to="/">already register</Link>
      </form>
    </>
  );
}
