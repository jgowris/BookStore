const React = require("react");
const DefaultLayout = require("../layout/Default");

class New extends React.Component {
  render() {
    return (
      <DefaultLayout title="New Book page">
        {/* NOTE: action will be the route, method will be the HTTP verb */}
        <form action="/books" method="POST">
          Name: <input type="text" name="name" />
          <br />
          Author: <input type="text" name="author" />
          <br />
          Is Book Available: <input type="checkbox" name="bookIsAvailable" />
          <br />
          <input type="submit" name="" value="Add a book" />
        </form>
      </DefaultLayout>
    );
  }
}

module.exports = New;
