import styles from "./Register.module.css";
import React, { useEffect, useState } from "react";
import { auth, registerWithEmailAndPassword } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  // State for the form
  const [dataRegister, setDataRegister] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e, params) => {
    e.preventDefault();

    if (params === "register") {
      const isRegistered = await registerWithEmailAndPassword(
        dataRegister.name,
        dataRegister.email,
        dataRegister.password
      );
      if (isRegistered) {
        alert("User created successfully");
      }
      console.log(isRegistered);
      return;
    }
  };

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) navigate("/");
    if (error) alert("Error");
  }, [loading, user, error, navigate]);

  return (
    <React.Fragment>
      <h2 className="header-title">REGISTER</h2>

      <div className={styles.contentRegister}>
        <div className={styles.container}>
          <form className={styles.user} action="" method="">
            <input
              type="text"
              name="username"
              onChange={(e) =>
                setDataRegister({ ...dataRegister, name: e.target.value })
              }
              required
              placeholder="Username.."
            />
            <input
              type="email"
              name="email"
              onChange={(e) =>
                setDataRegister({ ...dataRegister, email: e.target.value })
              }
              required
              placeholder="Email.."
            />
            <input
              type="password"
              name="password"
              onChange={(e) =>
                setDataRegister({
                  ...dataRegister,
                  password: e.target.value,
                })
              }
              required
              placeholder="Password.."
            />
            <button type="submit" onClick={(e) => handleSubmit(e, "register")}>
              Submit
            </button>
            <Link to="/login" className={styles.forgot}>
              Already have an account ?
            </Link>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Register;
