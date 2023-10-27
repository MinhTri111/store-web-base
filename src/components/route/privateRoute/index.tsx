import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { PrivateLayout } from 'src/layouts';
import { useAppSelector } from 'src/stores';

const PrivateRoute: React.FC = ({ component: Component, layout: Layout = PrivateLayout, ...rest }: any) => {
  const { meInfo } = useAppSelector(state => state.auth);

  return (
    <Route
      {...rest}
      render={(props: any) =>
        meInfo
          ? (
          <Layout>
            <Component {...props} />
          </Layout>
            )
          : (
          <Redirect to={{ pathname: '/login' }} />
            )
      }
    />
  );
};

export default PrivateRoute;
