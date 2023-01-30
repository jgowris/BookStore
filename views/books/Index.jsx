const React = require("react");
const DefaultLayout = require("../layout/Default");
class Index extends React.Component {
  render() {
    // method 2: destructure the props
    const { books } = this.props;

    return (
      <DefaultLayout title="Books index page" cssPath="/css/app.css">
        <nav>
          <a href="/books/new">Add a New Book</a>
          <a href="/user/logout">
            <button className="logoutBtn">Logout</button>
          </a>
        </nav>

        <ul>
          {this.props.books.map((book, i) => {
            return (
              <li key={i}>
                <a href={`/books/${book.id}`}> {book.name} </a> by {book.author}
                {" - "}
                {book.bookIsAvailable
                  ? `Available for checkout`
                  : `Not available for checkout`}
                <form
                  action={`/books/${book._id}?_method=DELETE`}
                  method="POST"
                >
                  <input type="submit" value="DELETE" />
                </form>
                <form action={`/books/${book._id}/edit`} method="GET">
                  <input type="submit" value="UPDATE" />
                </form>
              </li>
            );
          })}
        </ul>
      </DefaultLayout>
    );
  }
}

module.exports = Index;
