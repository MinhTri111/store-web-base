/* eslint-disable react/prop-types */
import { Route, Redirect } from 'react-router-dom';

import PublicLayout from 'src/layouts/private/PrivateLayout';
import { useAppSelector } from 'src/stores';
import React from 'react';

const PublicRoute: React.FC<any> = ({ component: Component, layout: Layout = PublicLayout, ...rest }: any) => {
  const { meInfo } = useAppSelector(state => state.auth);

  return (
    <Route
      {...rest}
      render={(props: any) =>
        !meInfo
          ? (
          <Layout>
            <Component {...props} />
          </Layout>
            )
          : (
          <Redirect to={{ pathname: '/' }} />
            )
      }
    />
  );
};

export default PublicRoute;
