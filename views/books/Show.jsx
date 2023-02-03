const React = require("react");
const DefaultLayout = require("../layout/Default");

class Show extends React.Component {
  render() {
    const book = this.props.book;

    // Alternative syntax
    // const {fruit} = this.props

    return (
      <DefaultLayout title="Book show page">
        <nav class="editConfirm">
          <a href="/books">Back to Index</a>
        </nav>
        <div class="editConfirmContent">
          <div class="editConfirmImage">
            <img src={book.image} height="300px" width="200px" />
          </div>
          <div class="editContent">
            Book Name: {book.name} <br />
            Author: {book.author} <br />
            Is Book available: <br />
            {book.bookIsAvailable
              ? `The book is currently available for checkout`
              : `This book is currently not available for checkout`}
          </div>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = Show;
