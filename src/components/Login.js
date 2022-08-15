const Signin = () => {
  return (
    <React.Fragment>
      <h2 className="header-title">FORM LOGIN</h2>

      <div className="content-product">
        <div className="container">
          <form className="user" action="" method="">
            <input
              type="text"
              name="username"
              required
              placeholder="Username.."
            />
            <input
              type="password"
              name="password"
              required
              placeholder="Password.."
            />
            <button type="submit">Login</button>
            <a href="#" className="forgot">
              Forgot Password
            </a>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Signin;
