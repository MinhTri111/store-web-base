import React from 'react';
import type { RouteObject } from 'react-router-dom';

import { PublicLayout } from 'src/layouts';

const HomeScreen = React.lazy(
  async () => await import('src/screens/publicScreens').then(module => ({ default: module.HomeScreen })),
);

const LoginScreen = React.lazy(
  async () => await import('src/screens/publicScreens').then(module => ({ default: module.LoginScreen })),
);

const RegisterScreen = React.lazy(
  async () => await import('src/screens/publicScreens').then(module => ({ default: module.RegisterScreen })),
);

const NotFoundScreen = React.lazy(
  async () => await import('src/screens/NotFound').then(module => ({ default: module.NotFound })),
);

const _publicRoutes: RouteObject[] = [
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      { path: '/', element: <HomeScreen /> },
      { path: 'login', element: <LoginScreen /> },
      { path: 'register', element: <RegisterScreen /> },
    ],
  },
  { element: <NotFoundScreen />, path: '*' },
];

export default _publicRoutes;
