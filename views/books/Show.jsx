const React = require("react");
const DefaultLayout = require("../layout/Default");

class Show extends React.Component {
  render() {
    const book = this.props.book;

    // Alternative syntax
    // const {fruit} = this.props

    return (
      <DefaultLayout title="Book show page">
        <nav>
          <a href="/books">Back</a>
        </nav>
        {book.name} by {book.author} {" - "}
        {book.bookIsAvailable
          ? `The book is currently available for checkout`
          : `This book is currently not available for checkout`}
      </DefaultLayout>
    );
  }
}

module.exports = Show;
