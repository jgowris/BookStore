const React = require("react");
const DefaultLayout = require("../layout/Default");

class Edit extends React.Component {
  render() {
    const { name, _id, bookIsAvailable, author } = this.props.book;

    return (
      <DefaultLayout title={`${name} Edit Page`}>
        <form action={`/books/${_id}?_method=PUT`} method="POST">
          Name: <input type="text" name="name" defaultValue={name} />
          <br />
          Color: <input type="text" name="author" defaultValue={author} />
          <br />
          Is Book Available:
          {bookIsAvailable ? (
            <input type="checkbox" name="readyToEat" defaultChecked />
          ) : (
            <input type="checkbox" name="readyToEat" />
          )}
          <br />
          <input type="submit" value="Submit Changes" />
        </form>
      </DefaultLayout>
    );
  }
}

module.exports = Edit;
