// console.log('this is answers.js');
function screenShake(time) {
  console.log(document);
  var el = document.getElementsByClassName('content');
  baz = el;
  console.log(baz[0]);
  el[0].className = el[0].className + ' shake';
  if (time > 0) {
    setTimeout(function () {
      el[0].className = 'content';
    }, time);
  }
};

// the screenShake macro. Adapted from Emmanuel Turner's article on creating Twine macros. http://eturnerx.blogspot.com/2012/12/how-to-create-custom-macros-in-twine.html
try {
  version.extensions['screenShakeMacro'] = {
    major: 1,
    minor: 0,
    revision: 0
  };
  macros['screenShake'] = {
    handler: function (place, macroName, params, parser) {
      var time = parseInt(params[0]);
      if (typeof time !== 'number') {
        time = 1000;
      }

      // we're overriding the fade function. It behaves as usual except it runs screenShake() if time >= 0.
      fade = function (el, options) {
        var current;
        var proxy = el.cloneNode(true);
        var direction = (options.fade == 'in') ? 1 : -1;

        el.parentNode.replaceChild(proxy, el);

        if (options.fade == 'in') {
          current = 0;
          proxy.style.visibility = 'visible';
        } else current = 1;

        setOpacity(proxy, current);
        var interval = window.setInterval(tick, 25);

        function tick() {
          current += 0.05 * direction;

          setOpacity(proxy, Math.easeInOut(current));

          if (((direction == 1) && (current >= 1)) || ((direction == -1) && (current <= 0))) {
            console.log('swapping fader proxy out');
            el.style.visibility = (options.fade == 'in') ? 'visible' : 'hidden';
            proxy.parentNode.replaceChild(el, proxy);
            delete proxy;
            window.clearInterval(interval);

            if (options.onComplete) options.onComplete();

            if (time >= 0) {
              screenShake(time);
              time = -1;
            }

          }
        };

        function setOpacity(el, opacity) {
          var percent = Math.floor(opacity * 100);

          // IE
          el.style.zoom = 1;
          el.style.filter = 'alpha(opacity=' + percent + ')';

          // CSS 3
          el.style.opacity = opacity;
        };
      };
    },
    init: function () {},
  };
} catch (e) {
  throwError(place, "screenShake Setup Error: " + e.message);
}
