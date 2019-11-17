import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';

import logop from '~/assets/logop.svg';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logop} alt="gobarbar" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>
        <Profile>
          <div>
            <strong>Fernando Lima</strong>
            <Link to="/profile">my profile</Link>
          </div>
          <img
            src="https://api.adorable.io/avatars/50/abott@adorable.png"
            alt="avatar"
          />
        </Profile>
      </Content>
    </Container>
  );
}
