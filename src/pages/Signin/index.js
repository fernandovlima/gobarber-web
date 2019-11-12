import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

export default function Signin() {
  return (
    <>
      <img src={logo} alt="gobarber" />

      <form>
        <input type="email" placeholder="Seu E-mail" />
        <input type="password" placeholder="sua senha secreta" />
        <button type="submit">LOGIN</button>
        <Link to="/register">create account</Link>
      </form>
    </>
  );
}
