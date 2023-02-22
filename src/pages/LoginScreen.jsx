import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginScreen = ({ cambiarLogin }) => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const [showMessage, setShowMessage] = useState(false);
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");

  const handleChange = (e) => {
    setShowMessage(false);
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value, //email:'correo@correo.com'
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      email: "rolling@rolling.com",
      password: "123456",
    };

    const { email, password } = formValues;

    if (!email) {
      //   alert("Faltan datos de email");
      setShowMessage(true);
    }

    if (email === user.email && password === user.password) {
      //redireccionar al home
      cambiarLogin();
      navigate("/");
    } else {
      alert("Email o password incorrectos");
    }
  };
  //   const handleChangeEmail = (e) => {
  //     setEmail(e.target.value);
  //   };

  //   const handleChangePassword = (e) => {
  //     setPassword(e.target.value);
  //   };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col text-center">
          <h3>
            Sign in to <i className="fa fa-btc" aria-hidden="true"></i>
            RollingCoins
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col col-md-6 offset-md-3">
          <form onSubmit={handleSubmit}>
            <div className="mb-3 d-grid">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formValues.email}
                onChange={handleChange}
              />
              {showMessage && (
                <p className="text-danger m-0">Faltan datos del campo</p>
              )}
            </div>
            <div className="mb-3 d-grid">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={formValues.password}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3 d-grid">
              <button className="btn btn-success">Sign in</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
