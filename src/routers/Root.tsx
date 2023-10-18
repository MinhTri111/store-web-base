import React from 'react';
import { useRoutes } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';

import { AuthProvider } from 'src/contexts/requiredAuth/RequiredAuth';
import _publicRoutes from './_public';
import _privateRoutes from './_private';

const RootRouter: React.FC = () => {
  const totalRouters: RouteObject[] = [..._privateRoutes, ..._publicRoutes];

  return <AuthProvider>{useRoutes(totalRouters)}</AuthProvider>;
};

export default RootRouter;
