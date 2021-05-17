import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/components/DashboardLayout';
import MainLayout from 'src/components/MainLayout';
import Account from 'src/pages/Account';
import NotFound from 'src/pages/NotFound';
import ProductList from 'src/pages/ProductList';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: '', element: <ProductList /> },
      { path: 'account', element: <Account /> },
      { path: 'products', element: <ProductList /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '404', element: <NotFound /> },
      { path: '/', element: <Navigate to="/app/products" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
