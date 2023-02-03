const React = require("react");
const DefaultLayout = require("../layout/Default");

class Checkout extends React.Component {
  render() {
    const { name, _id, bookIsAvailable, author, image } = this.props.book;

    return (
      <DefaultLayout title={`Checkout - ${name}`}>
        <div class="bookCheckout">
          <form action={`/books/${_id}?_method=PUT`} method="POST">
            Book Name: {book.name} <br />
            Author: {book.author} <br />
            {/* Name:{" "}
            <input
              type="text"
              name="name"
              class="editFlow"
              defaultValue={name}
            />
            <br />
            Author:{" "}
            <input
              type="text"
              name="author"
              class="editFlow"
              defaultValue={author}
            />
            <br /> */}
            Is Book Available:
            {bookIsAvailable ? (
              <input
                type="checkbox"
                name="bookIsAvailable"
                class="editFlow"
                defaultChecked
              />
            ) : (
              <input type="checkbox" name="bookIsAvailable" class="editFlow" />
            )}
            <br />
            <input type="submit" value="Submit Changes" class="editFlow" />
          </form>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = Checkout;
