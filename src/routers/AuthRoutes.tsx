import React from 'react';
import { Switch } from 'react-router-dom';

import PublicRoute from 'src/components/route/publicRoute';
import PublicLayout from 'src/layouts/public/PublicLayout';
const LoginScreen = React.lazy(
  async () => await import('src/screens/publicScreens').then(module => ({ default: module.LoginScreen })),
);

const RegisterScreen = React.lazy(
  async () => await import('src/screens/publicScreens').then(module => ({ default: module.RegisterScreen })),
);

export const RoutesName = {
  LOGIN: '/login',
  REGISTER: '/register',
};

export const ROUTES = [
  {
    path: RoutesName.LOGIN,
    component: LoginScreen,
    layout: PublicLayout,
  },
  {
    path: RoutesName.REGISTER,
    component: RegisterScreen,
    layout: PublicLayout,
  }
];

const AuthRoutes: React.FC = () => {
  return (
    <Switch>
      {ROUTES.map((routeConfig) => (
        <PublicRoute key={routeConfig.path} {...routeConfig} />
      ))}
    </Switch>
  );
};

export default AuthRoutes;
