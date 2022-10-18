import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Login = (props) => {
  return (
    <div className="login">
      <div className="card">
        <div className="card-header">
          <h3>Login</h3>
        </div>
        <div className="card-body">
          <form action="">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                id="email"
                name="email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                id="password"
                name="password"
              />
            </div>
            <div className="form-group">
              <input type="submit" value="login" className="btn" />
            </div>
            <div className="form-group">
              <span>
                <Link to="/messenger/register">Register your account</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {};

export default Login;
