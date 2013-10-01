peeler.js
=========

A library to add peeling to the center of your content.

Look at the demo of the user experience here! [www.mattduvall.com/peeler.js](www.mattduvall.com/peeler.js)

## Usage

Getting the peeling to your content will be quick and easy, follow these few steps:

1. Include `peeler.css` and `peeler.js`.
2. After the JS is loaded, start the peeler by doing `(new Peeler()).bind()`
3. You are good to go?

### What are peelable elements?

Every `<article>` element will become "peelable", the height of the peel will be set to the current screens height. To overload this, add a `data-height` attribute to the `<article>`.