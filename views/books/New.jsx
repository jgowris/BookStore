const React = require("react");
const DefaultLayout = require("../layout/Default");

class New extends React.Component {
  render() {
    return (
      <DefaultLayout title="New Book page">
        {/* NOTE: action will be the route, method will be the HTTP verb */}
        <div class="bookNew">
          <form action="/books" method="POST">
            Name: <input type="text" name="name" class="newFlow" />
            <br />
            Author: <input type="text" name="author" class="newFlow" />
            <br />
            Book Cover: <input type="text" name="image" class="newFlow" />
            <br />
            Is Book Available:{" "}
            <input type="checkbox" name="bookIsAvailable" class="newFlow" />
            <br />
            <input type="submit" name="" value="Add a book" class="newFlow" />
          </form>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = New;
