import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { useAppDispatch } from 'src/stores';
import { getMeAction } from 'src/stores/screens/auth/auth.action';
import Loading from 'src/components/loading/Loading';
import { LOCAL_STORAGE_KEY } from 'src/constants';
import AppRoutes from './AppRoutes';

const RootRouter: React.FC = () => {
  const { search }: any = useLocation();
  const dispatch = useAppDispatch();
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const query = new URLSearchParams(search);
    const paramsToken = query.get(LOCAL_STORAGE_KEY.TOKEN);
    const userToken = localStorage.getItem(LOCAL_STORAGE_KEY.TOKEN);

    if (userToken && !paramsToken) {
      void dispatch(getMeAction());
    }
    if (paramsToken) {
      localStorage.setItem(LOCAL_STORAGE_KEY.TOKEN, paramsToken);
      void dispatch(getMeAction());
    }
    setTimeout(() => setLoading(false), 1500);
  }, []);

  return loading ? <Loading /> : <AppRoutes />;
};

export default RootRouter;
