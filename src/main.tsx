import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router";

import '../res/css/index.css';

import Login from './page/auth/login';
import Recovery from './page/auth/recovery';
import Signup from './page/auth/signup';
import Error from './page/error';
import RegisterSubjects from './page/subjects/register-subjects';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    errorElement: <Error />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/recovery',
    element: <Recovery />
  },
  {
    path: '/register/subjects',
    element: <RegisterSubjects />
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
