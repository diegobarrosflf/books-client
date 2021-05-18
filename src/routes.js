import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/components/DashboardLayout';
import MainLayout from 'src/components/MainLayout';
import BookDetails from 'src/pages/BookDetails';
import NotFound from 'src/pages/NotFound';
import BookList from 'src/pages/BookList';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: '', element: <BookList /> },
      { path: 'account', element: <BookDetails /> },
      { path: 'books', element: <BookList /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '404', element: <NotFound /> },
      { path: '/', element: <Navigate to="/app/books" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
