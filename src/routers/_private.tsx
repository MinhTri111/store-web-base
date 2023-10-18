import React from 'react';
import type { RouteObject } from 'react-router-dom';

import { PrivateLayout } from 'src/layouts';

const HomeScreen = React.lazy(
  async () => await import('src/screens/publicScreens').then(module => ({ default: module.HomeScreen })),
);

const NotFoundScreen = React.lazy(
  async () => await import('src/screens/NotFound').then(module => ({ default: module.NotFound })),
);

const _privateRoutes: RouteObject[] = [
  {
    element: <PrivateLayout />,
    children: [
      { path: '/dashboard', element: <HomeScreen /> },
      { element: <NotFoundScreen />, path: '*' },
    ],
  },
];

export default _privateRoutes;
