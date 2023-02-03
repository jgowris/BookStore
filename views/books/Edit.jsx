const React = require("react");
const DefaultLayout = require("../layout/Default");

class Edit extends React.Component {
  render() {
    const { name, _id, bookIsAvailable, author, image } = this.props.book;

    return (
      <DefaultLayout title={`Edit Book - ${name}`}>
        <div class="bookEdit">
          <form action={`/books/${_id}?_method=PUT`} method="POST">
            <div>
              Name:{" "}
              <input
                type="text"
                name="name"
                class="editFlow"
                defaultValue={name}
              />
            </div>
            <div>
              Author:{" "}
              <input
                type="text"
                name="author"
                class="editFlow"
                defaultValue={author}
              />
            </div>
            <div>
              Is Book Available:
              {bookIsAvailable ? (
                <input
                  type="checkbox"
                  name="bookIsAvailable"
                  class="editFlow"
                  defaultChecked
                />
              ) : (
                <input
                  type="checkbox"
                  name="bookIsAvailable"
                  class="editFlow"
                />
              )}
            </div>
            <div>
              <input type="submit" value="Submit Changes" class="editFlow" />
            </div>
          </form>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = Edit;
