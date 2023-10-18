import React, { useEffect } from 'react';
import { Spin } from 'antd';
import { Navigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'src/stores';
import { LOCAL_STORAGE_KEY } from 'src/constants';
import { getMeAction } from 'src/stores/screens/auth/auth.action';

interface IAuthContext {
  getMeLoading: boolean;
  error: any;
  meInfo: any;
}

const AuthContext = React.createContext<IAuthContext>({
  getMeLoading: false,
  error: null,
  meInfo: null,
});

export const useAuth = (): IAuthContext => {
  return React.useContext(AuthContext);
};

export const AuthProvider = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement<IAuthContext> => {
  const dispatch = useAppDispatch();

  const { meInfo, error, getMeLoading } = useAppSelector(state => state.auth);

  useEffect(() => {
    const localToken: string = localStorage.getItem(LOCAL_STORAGE_KEY.TOKEN) ?? '';
    if (localToken && !meInfo) {
      void dispatch(getMeAction());
    }
  }, []);

  const value = { meInfo, error, getMeLoading };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const ProtectedRoutes: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { error, meInfo, getMeLoading } = useAuth();
  const localToken: string = localStorage.getItem(LOCAL_STORAGE_KEY.TOKEN) ?? '';

  return (
    <Spin wrapperClassName="root-spin" spinning={getMeLoading}>
      {localToken ? meInfo ? children : error ? <Navigate to={'/login'} /> : null : <Navigate to={'/login'} />}
    </Spin>
  );
};

export const PublishedRoutes: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { getMeLoading, meInfo } = useAuth();

  return (
    <Spin wrapperClassName="root-spin" spinning={getMeLoading}>
      {meInfo ? <Navigate to={'/dashboard'} /> : children}
    </Spin>
  );
};
