const Register = () => {
  return (
    <React.Fragment>
      <h2 className="header-title">REGISTER</h2>

      <div className="content-product">
        <div className="container">
          <form className="user" action="" method="">
            <input type="text" name="name" required placeholder="Full name.." />
            <input type="email" name="" required placeholder="Email.." />
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
            <button type="submit">Submit</button>
            <a href="login.html" className="forgot">
              Already have an account ?
            </a>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Register;
