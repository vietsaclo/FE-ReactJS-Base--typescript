import React from 'react';
import './App.css';
import { useRoutes } from 'react-router-dom';
// import PageNotFoundView from './other-pages/PageNotFoundView';
// import LoginPage from './login-page/LoginPage';
// import HomePage from './home-page/HomePage';
import loadable from '@loadable/component';
import LoadingTopPageFallBack from './components/common/LoadingTopPageFallback';

const PageNotFoundView = loadable(() => import('./other-pages/PageNotFoundView'), {
  fallback: <LoadingTopPageFallBack />,
});
const LoginPage = loadable(() => import('./login-page/LoginPage'), {
  fallback: <LoadingTopPageFallBack />,
});
const HomePage = loadable(() => import('./home-page/HomePage'), {
  fallback: <LoadingTopPageFallBack />,
});

interface PageRoute {
  path: string,
  element: JSX.Element,
  children: any[],
}

const App: React.FC = () => {
  const listRoute: PageRoute[] = [
    {
      path: '/',
      element: <HomePage />,
      children: [],
    },
    {
      path: '/home',
      element: <HomePage />,
      children: [],
    },
    {
      path: '/404',
      element: <PageNotFoundView />,
      children: [],
    },
    {
      path: '/login',
      element: <LoginPage />,
      children: [],
    },
  ];

  const routing = useRoutes(listRoute);

  return <>{routing}</>;
}

export default App;
