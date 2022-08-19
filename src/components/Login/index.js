import React, { useEffect, useState } from "react";
import { auth, logInWithEmailAndPassword } from "../../config/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import styles from "./Login.module.css";

const Signin = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e, param) => {
    e.preventDefault();
    if (param === "login") {
      await logInWithEmailAndPassword(login.email, login.password);
      alert();
    }
  };

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) navigate("/");
    if (error) alert(error);
  }, [loading, user, error, navigate]);

  return (
    <React.Fragment>
      <h2 className="header-title">FORM LOGIN</h2>

      <div className={styles.contentLogin}>
        <div className={styles.container}>
          <form className={styles.user} action="" method="">
            <input
              type="text"
              name="username"
              required
              value={login.email}
              onChange={(e) => setLogin({ ...login, email: e.target.value })}
              placeholder="Username.."
            />
            <input
              type="password"
              name="password"
              required
              value={login.password}
              onChange={(e) => setLogin({ ...login, password: e.target.value })}
              placeholder="Password.."
            />
            <button type="submit" onClick={(e) => handleLogin(e, "login")}>
              Login
            </button>
            <Link to="/register" className={styles.register}>
              Register
            </Link>
            {/* <a href="#" className={styles.forgot}>
              Forgot Password
            </a> */}
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Signin;
