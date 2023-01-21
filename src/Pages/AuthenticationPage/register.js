import React from 'react';
import { Link } from 'react-router-dom';
import '../AuthenticationPage/register.css';
const Register = () => {
  return (
    <div className="register">
      <div className="card1">
        <div className="left">
          <h1>Hello World</h1>
          <p>
            Lets make this project success..Social media has became crucial part
            of life in today's generation! Dont use social media in wrong way.
            It has awesome features. So use it in right way.
          </p>
          <span>Do you have account?</span>
          <Link to="/login">
            <button className="button">
              <span>LOGIN</span>
            </button>
          </Link>
        </div>
        <div className="right">
          <h1>REGISTER</h1>
          <form className="f">
            <input type="text" placeholder="Username: "></input>
            <input type="password" placeholder="Password: "></input>
            <input type="email" placeholder="E-mail: "></input>
            <input type="text" placeholder="Name: "></input>
            <button>REGISTER</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
