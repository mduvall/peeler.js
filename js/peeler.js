(function() {
  var root = this,
      Peeler = function() {},
      articles = document.querySelectorAll("article"),
      viewportWidth = root.innerWidth,
      aspectRatio = 1200/1440,
      bodyHeight = 0,
      articleStates = [];

  Peeler.prototype.bind = function() {
    var article,
        i,
        len,
        height;

    root.onscroll = function(event) {
      var yOffset = window.pageYOffset,
          i = 0;
      for (len = articles.length; i < len; i++) {
        if (yOffset <= articleStates[i].max && yOffset >= articleStates[i].min) {
          articles[i].style["margin-top"] = -(yOffset-(articleStates[i].min)) + "px";
          articles[i].style["z-index"] = "2";
        } else {
          articles[i].style["margin-top"] = "0px";
          articles[i].style["z-index"] = "1";
        }
      }
    };

    articles[0].style["z-index"] = "2";

    // Set each of the articles according to the aspect ratio
    for (i = 0, len = articles.length; i < len; i++) {
      article = articles[i];
      height = viewportWidth * aspectRatio;
      article.style.height = height + "px";
      articleStates.push({min: bodyHeight, max: bodyHeight+height});
      bodyHeight += height;
    }

    document.body.style.height = bodyHeight + "px";
  };

  Peeler.prototype.peel = function() {
  };

  root.Peeler = Peeler;
}).call(this);
