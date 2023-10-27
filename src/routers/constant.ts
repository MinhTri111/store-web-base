import React from 'react';
import { PrivateLayout, PublicLayout } from 'src/layouts';

const HomeScreen = React.lazy(
  async () => await import('src/screens/publicScreens').then(module => ({ default: module.HomeScreen })),
);

const RoutesName = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register'
}

export const PRIVATE_ROUTES = [
  {
    path: RoutesName.HOME,
    component: HomeScreen,
    exact: true,
    layout: PrivateLayout,
  },
]

export const CUSTOME_ROUTE = [
  {
    path: RoutesName.HOME,
    component: HomeScreen,
    newRules: true,
    exact: true,
    layout: PublicLayout,
  },
]
