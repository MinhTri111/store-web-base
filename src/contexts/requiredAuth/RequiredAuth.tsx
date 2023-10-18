// import React, { useEffect } from 'react';
// import { Spin } from 'antd';
// import { Navigate, useLocation } from 'react-router-dom';

// import { useAppDispatch, useAppSelector } from 'src/stores';
// import {
//   LIST_ROUTER_PRIVATE,
//   LIST_ROUTER_PUBLIC,
//   LOCAL_STORAGE_KEY,
//   LOGIN_TYPE,
//   ROUTER_PATH,
//   TOTAL_PATH,
// } from 'src/constants';
// import { getMeAction } from 'src/stores/screens/auth/auth.action';
// import useLanguage from 'src/hooks/useLanguage/useLanguage';

// interface IAuthContext {
//   getMeLoading: boolean;
//   error: any;
//   meInfo: any;
//   role?: string | null;
// }

// const AuthContext = React.createContext<IAuthContext>({
//   getMeLoading: false,
//   error: null,
//   meInfo: null,
//   role: null,
// });

// export const useAuth = (): IAuthContext => {
//   return React.useContext(AuthContext);
// };

// export const AuthProvider = ({
//   children,
//   role,
// }: {
//   children: React.ReactNode;
//   role?: string | null;
// }): React.ReactElement<IAuthContext> => {
//   const dispatch = useAppDispatch();
//   const { pathname } = useLocation();
//   useLanguage();

//   const { meInfo, error, getMeLoading } = useAppSelector(state => state.auth);

//   useEffect(() => {
//     const localToken: string = localStorage.getItem(LOCAL_STORAGE_KEY.TOKEN) ?? '';
//     if (
//       (localToken && !meInfo && LIST_ROUTER_PRIVATE.includes(pathname)) ||
//       (localToken && !TOTAL_PATH.includes(pathname)) ||
//       (localToken && !meInfo && LIST_ROUTER_PUBLIC.includes(pathname))
//     ) {
//       void dispatch(getMeAction());
//     }
//   }, []);

//   const value = { meInfo, error, getMeLoading, role };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };

// export const ProtectedRoutes: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const { error, meInfo, getMeLoading } = useAuth();
//   const localToken: string = localStorage.getItem(LOCAL_STORAGE_KEY.TOKEN) ?? '';

//   return (
//     <Spin wrapperClassName="root-spin" spinning={getMeLoading}>
//       {localToken ? (
//         meInfo ? (
//           children
//         ) : error ? (
//           <Navigate to={ROUTER_PATH.LOGIN.PATH} />
//         ) : null
//       ) : (
//         <Navigate to={ROUTER_PATH.LOGIN.PATH} />
//       )}
//     </Spin>
//   );
// };

// export const PublishedRoutes: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const { getMeLoading, meInfo, role } = useAuth();

//   return (
//     <Spin wrapperClassName="root-spin" spinning={getMeLoading}>
//       {meInfo ? (
//         <Navigate to={role === LOGIN_TYPE.ADMIN ? ROUTER_PATH.DASHBOARD_ADMIN.PATH : ROUTER_PATH.DASHBOARD.PATH} />
//       ) : (
//         children
//       )}
//     </Spin>
//   );
// };
