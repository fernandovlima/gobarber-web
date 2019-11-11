import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const signed = false;
  // se nao logado e rota privada redireciona para o login
  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }
  // se logado e rota nao privada redireciona para dashboard
  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  // se tiver logado
  return <Route {...rest} component={Component} />;
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
