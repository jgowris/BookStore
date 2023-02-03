const React = require("react");
const DefaultLayout = require("../layout/Default");

class Login extends React.Component {
  render() {
    return (
      <DefaultLayout title="Book Store" cssPath="/css/app.css">
        //{" "}
        <div class="signIn">
          <h2>Login</h2>
          <form action="/user/login" method="POST">
            Name:{" "}
            <input
              type="text"
              defaultValue=""
              name="username"
              class="userNameInfo"
              required
            />
            <br />
            Password:{" "}
            <input
              type="password"
              defaultValue=""
              name="password"
              class="passwordInfo"
              required
            />
            <br />
            <input type="submit" name="" value="Login" class="loginBtn" />
          </form>
          <h4>
            Don't have an account? <a href="/user/signup">Signup!</a>
          </h4>
          {/* <div class="signUp">
            <a href="/user/signup">
              <h3>Signup</h3>
            </a>
          </div> */}
        </div>
        {/* <div class="signUp">
          <a href="/user/signup">
            <h3>Signup</h3>
          </a>
        </div> */}
        // //{" "}
      </DefaultLayout>
    );
  }
}

module.exports = Login;
