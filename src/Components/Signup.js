const Signup = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>New User</h1>
      <div className="center">
        <form>
          <label htmlFor="username" for="username">
            User Name
          </label>

          <input type="text" name="username" style={{ width: "98%" }} />

          <label htmlFor="password" for="password">
            Password
          </label>

          <input type="text" name="password" style={{ width: "98%" }} />

          <br />
          <br />

          <button name="submitbtn">Create Account</button>
        </form>
      </div>
    </>
  );
};

export default Signup;
