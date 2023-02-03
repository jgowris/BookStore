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
            Name: <input type="text" defaultValue="" name="username" required />
            <br />
            Password:{" "}
            <input type="password" defaultValue="" name="password" required />
            <br />
            <input type="submit" name="" value="Login" />
          </form>
        </div>
        <div class="signUp">
          <a href="/user/signup">
            <h3>Signup</h3>
          </a>
        </div>
        // //{" "}
      </DefaultLayout>
    );
  }
}

module.exports = Login;
