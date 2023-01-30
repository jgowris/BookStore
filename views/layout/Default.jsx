const React = require("react");

// Higher order component
class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href={"/css/app.css"} />
        </head>
        <body>
          <div>
            <h1>{this.props.title}</h1>
            {this.props.children}
          </div>
        </body>
      </html>
    );
  }
}

module.exports = DefaultLayout;
