function layout(html) {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <title>Wikistack</title>
    <link rel="stylesheet" href="stylesheets/style.css" />
  </head>
  <body>
    ${html}
  </body>
  </html>`;
}

module.exports = layout;
