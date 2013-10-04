(function() {
  var ABOVE = "1000";

  var root = this,
      Peeler = function(opts) {
        this.options = opts || {};
      },
      articles = document.querySelectorAll("article"),
      backgroundImages = document.querySelectorAll(".background"),
      viewportWidth = root.innerWidth,
      aspectRatio = 1200/1440,
      bodyHeight = 0,
      articleStates = [];

  Peeler.prototype.bind = function(opts) {
    var article,
        i,
        len,
        height,
        currentOffset,
        backgroundImage,
        prevScroll = 0;

    root.onscroll = function(event) {
      var yOffset = window.pageYOffset,
          i = 0,
          j = 0,
          triggered = false,
          below = 999,
          curr,
          len = articles.length,
          scrollingDown;

      for (; i < len; i++) {
        if (yOffset <= articleStates[i].max && yOffset >= articleStates[i].min) {
          offset = -(yOffset-(articleStates[i].min));
          scrollingDown = prevScroll < document.body.scrollTop;

          // Trigger peel event when the offset reset
          if (offset > currentOffset) {
            // If we are scrolling down, trigger next callback
            if (scrollingDown && typeof this.options.nextCallback === "function") {
              this.options.nextCallback(articles[i]);
            } else {
              // TODO: Previous callback here? Not exactly sure why
              // that'd be useful right now though
            }
          }

          prevScroll = document.body.scrollTop;
          currentOffset = offset;

          articles[i].style.marginTop = -(yOffset-(articleStates[i].min)) + "px";
          articles[i].style.zIndex = ABOVE;
          triggered = true;
          curr = i;
          break;
        }
      }

      for (;j < len; j++) {
        if (i !== curr && i < len) {
          articles[i].style.marginTop = "0px";
          articles[i].style.zIndex = below--;
        }
        i++;
        // Reset at rotation point
        if (i == len) {
          i = 0;
        }
      }

      // Case where it goes above the fold for OSX trackpads
      if (!triggered) {
          articles[0].style.marginTop = "0px";
          articles[0].style.zIndex = ABOVE;
      }
    }.bind(this);

    articles[0].style.zIndex = "2";

    // Set each of the articles according to the aspect ratio
    for (i = 0, len = articles.length; i < len; i++) {
      article = articles[i];
      // viewport with aspectRatio
      height = article.getAttribute("data-height") || window.innerHeight;
      article.style.height = parseInt(height) + "px";
      articleStates.push({min: bodyHeight, max: bodyHeight+height});
      bodyHeight += height;
    }

    for (i = 0, len = backgroundImages.length; i < len; i++) {
      backgroundImage = backgroundImages[i];
      backgroundImage.style.background = "url(" + backgroundImage.src + ") no-repeat center center";
      backgroundImage.style.backgroundSize = "cover";
      backgroundImage.src = "data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
    }

    document.body.style.height = bodyHeight + "px";
  };

  Peeler.prototype.peel = function() {
  };

  root.Peeler = Peeler;
}).call(this);
