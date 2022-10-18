import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Register = (props) => {
  return (
    <div>
      <div className="register">
        <div className="card">
          <div className="card-header">
            <h3>Register</h3>
          </div>
          <div className="card-body">
            <form action="">
              <div className="form-group">
                <label htmlFor="username">User Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter username"
                  id="username"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter email"
                  id="email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  id="password"
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter you confirm password"
                  id="confirmPassword"
                />
              </div>
              <div className="form-group">
                <div className="file-image">
                  <div className="image"></div>
                  <div className="file">
                    <label htmlFor="image">Select Image</label>
                    <input type="file" className="form-control" id="image" />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <input type="submit" value="register" className="btn" />
              </div>
              <div className="form-group">
                <span>
                  <Link to="/messenger/login">Login your account</Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

Register.propTypes = {};

export default Register;
