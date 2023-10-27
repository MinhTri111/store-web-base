import React from 'react';
import { Route } from 'react-router-dom';

import PublicLayout from 'src/layouts/private/PrivateLayout';

const CustomRoute: React.FC = ({ component: Component, layout: Layout = PublicLayout, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

export default CustomRoute;
