import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import AdminLayout from '../layout';
import PrivateRoute from './PrivateRoute';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

const Home = lazy(() => import('../pages/Home'));

const NotFound = () => <Navigate to="/" />;

const routes = [
  {
    path: '/',
    element: <AdminLayout />,
    children: [{ path: '/', element: <PrivateRoute element={<Home />} /> }],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
  { path: '/*', element: <NotFound /> },
];

export const AppRoutes = () => (
  <Routes>
    {routes.map((route) => (
      <Route key={route.path} path={route.path} element={route.element}>
        {route.children &&
          route.children.map((childRoute) => (
            <Route key={childRoute.path} path={childRoute.path} element={childRoute.element} />
          ))}
      </Route>
    ))}
  </Routes>
);
