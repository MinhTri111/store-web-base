import React, { Suspense } from 'react';
import { Switch } from 'react-router-dom';
import CustomRoute from 'src/components/route/customRoute';
import PrivateRoute from 'src/components/route/privateRoute';
import Loading from 'src/components/loading/Loading';

import AuthRoutes from './AuthRoutes';
import { PRIVATE_ROUTES, CUSTOME_ROUTE } from './constant';

const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        {PRIVATE_ROUTES.map(routeConfig => (
          <PrivateRoute key={routeConfig.path} {...routeConfig} />
        ))}
        {CUSTOME_ROUTE.map(routeConfig => (
          <CustomRoute key={routeConfig.path} {...routeConfig} />
        ))}
      </Switch>
      <AuthRoutes />
    </Suspense>
  );
};
export default AppRoutes;
