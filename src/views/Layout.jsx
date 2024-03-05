const React = require('react');

module.exports = function Layout({ title, children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="style.css" />
        <script defer src="script.js" />
        <title>{title}</title>
      </head>
      <body>{children}</body>
    </html>
  );
};
