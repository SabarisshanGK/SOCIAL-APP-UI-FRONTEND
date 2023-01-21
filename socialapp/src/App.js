//import necessary libraries and files

import './App.css';
import Login from './Pages/AuthenticationPage/Login';
import Register from './Pages/AuthenticationPage/register';
import './style.scss';
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import LeftBar from './components/LeftBar';
import RightBar from './components/RightBar';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import { useContext } from 'react';
import { DarkModeToggleContext } from './context/DarkModeContext';
import { UserContext } from './context/userContext';

//Start of function

function App() {
  const { currentUser } = useContext(UserContext);

  const { darkMode } = useContext(DarkModeToggleContext);

  // Layout Function to define layouts for our application

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? 'dark' : 'light'}`}>
        <Navbar />
        <div style={{ display: 'flex' }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    );
  };

  // Protected Router for to protect user to view home page if they didn't login or registered to the application

  const ProtectedRouter = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login"></Navigate>;
    }
    return children;
  };
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <ProtectedRouter>
          <Layout />
        </ProtectedRouter>
      ),
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/profile/:id',
          element: <Profile />,
        },
      ],
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
