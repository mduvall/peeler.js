peeler.js
=========

A library to add peeling to the center of your content. This was inspired by the brilliant folks over at Teehan+Lax and introduced in their blog [post](http://www.teehanlax.com/story/medium/) for UX considerations for Medium.

Look at the demo of the user experience here! [http://mattduvall.com/peeler.js/](http://mattduvall.com/peeler.js/)

![gif of demo](http://cl.ly/image/1Q0T3U2h3z37/out.gif)

## Usage

Getting the peeling to your content will be quick and easy, follow these few steps:

1. Include `peeler.css` and `peeler.js`.
2. After the JS is loaded, start the peeler by doing `(new Peeler()).bind()`
3. You are good to go?

### What are peelable elements?

Every `<article>` element will become "peelable", the height of the peel will be set to the current screens height.

To override this, add a `data-height` attribute to the `<article>`. Supported heights are only *greater* than the `screen.height`.

## Open issues

- Interaction to peel a page that is smaller than the screen height?
