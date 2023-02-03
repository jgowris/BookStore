const React = require("react");
const DefaultLayout = require("../layout/Default");
class Index extends React.Component {
  render() {
    // method 2: destructure the props
    const { books } = this.props;

    return (
      <DefaultLayout title="Book Store" cssPath="/css/app.css">
        <nav>
          <a href="/books/new">Add a book</a>
          <a href="/user/logout">
            <button className="logoutBtn">Logout</button>
          </a>
        </nav>

        <ul clsss="bookContainer">
          {this.props.books.map((book, i) => {
            return (
              <li key={i}>
                <img src={book.image} height="300px" width="200px" />
                {/* <div>
                  <a href={`/books/${book.id}`}> {book.name}</a>
                  <br />
                  {book.author}
                  {" - "}
                </div> */}
                <br />
                <div class="availability">
                  {book.bookIsAvailable
                    ? `Available for checkout`
                    : `Not available for checkout`}
                </div>
                <div class="buttonContainer">
                  {/* <div class="deleteButton">
                    <form
                      action={`/books/${book._id}?_method=DELETE`}
                      method="POST"
                    >
                      <input type="submit" value="DELETE" />
                    </form>
                  </div>
                  <div class="updateButton">
                    <form action={`/books/${book._id}/edit`} method="GET">
                      <input type="submit" value="UPDATE" />
                    </form>
                  </div> */}
                  <div>
                    <form action={`/books/${book._id}/edit`} method="GET">
                      <input type="submit" value="CHECKOUT" />
                    </form>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </DefaultLayout>
    );
  }
}

module.exports = Index;
