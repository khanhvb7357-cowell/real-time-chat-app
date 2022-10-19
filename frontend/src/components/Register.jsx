import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { userRegister } from "../store/actions/authActions";

const Register = (props) => {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: "",
  });
  const [loadImage, setLoadImage] = useState("");
  const [nameImage, setNameImage] = useState("");

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const fileHandle = (e) => {
    if (e.target.files.length !== 0) {
      setState({
        ...state,
        [e.target.name]: e.target.value,
      });
    }
    const reader = new FileReader();
    reader.onload = () => {
      setLoadImage(reader.result);
      setNameImage(e.target.files[0].name); // name file
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const register = (e) => {
    const { userName, email, password, image, confirmPassword } = state;
    e.preventDefault();
    const formData = new FormData();

    formData.append("userName", userName);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("image", image);
    formData.append("confirmPassword", confirmPassword);
    console.log(state);
    dispatch(userRegister(formData));
  };

  return (
    <div>
      <div className="register">
        <div className="card">
          <div className="card-header">
            <h3>Register</h3>
          </div>
          <div className="card-body">
            <form onSubmit={register}>
              <div className="form-group">
                <label htmlFor="username">User Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter username"
                  id="username"
                  onChange={inputHandle}
                  name="userName"
                  value={state.userName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter email"
                  id="email"
                  onChange={inputHandle}
                  name="email"
                  value={state.email}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  id="password"
                  onChange={inputHandle}
                  name="password"
                  value={state.password}
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter you confirm password"
                  id="confirmPassword"
                  onChange={inputHandle}
                  name="confirmPassword"
                  value={state.confirmPassword}
                />
              </div>
              <div className="form-group">
                <div className="file-image">
                  <div className="image">
                    {loadImage ? <img src={loadImage} alt={nameImage} /> : ""}
                  </div>
                  <div className="file">
                    <label htmlFor="image">Select Image</label>
                    <input
                      type="file"
                      className="form-control"
                      id="image"
                      onChange={fileHandle}
                      name="image"
                      // value={state.image}
                    />
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
