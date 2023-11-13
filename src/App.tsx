import Clients from './pages/clients/Clients';
import Analytics from './pages/analytics/Analytics';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layout/Layout';
import './styles/global.scss';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Clients />,
        },
        {
          path: '/analytics',
          element: <Analytics />,
        },
      ]
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
