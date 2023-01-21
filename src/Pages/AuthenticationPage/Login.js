import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import './Login.css';
const Login = () => {
  const { login } = useContext(UserContext);
  const handleLogin = () => {
    login();
  };
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello Friends</h1>
          <p>
            Lets make this project success..Social media has became crucial part
            of life in today's generation! Dont use social media in wrong way.
            It has awesome features. So use it in right way.
          </p>
          <span>Don't you have account?</span>
          <Link to="/register">
            <button className="button">
              <span>REGISTER</span>
            </button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form className="f">
            <input
              type="text"
              placeholder="Enter your user name or email id"
            ></input>
            <input type="password" placeholder="Enter your password"></input>
            <button onClick={handleLogin}>LOGIN</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
