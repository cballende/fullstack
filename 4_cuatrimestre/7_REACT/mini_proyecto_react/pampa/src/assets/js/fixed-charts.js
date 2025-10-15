function _possibleConstructorReturn(t, e) {
  if (!t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return !e ||
  'object' != typeof e &&
  'function' != typeof e ? t : e
}
function _inherits(t, e) {
  if ('function' != typeof e && null !== e) throw new TypeError(
    'Super expression must either be null or a function, not ' + typeof e
  );
  t.prototype = Object.create(
    e &&
    e.prototype,
    {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }
  ),
  e &&
  (
    Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e
  )
}
function _classCallCheck(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function randomNumber(t, e) {
  return Math.random() * (e - t) + t
}
function getRandomBarNoTime(t) {
  var e = randomNumber(0.95 * t, 1.05 * t),
  i = randomNumber(0.95 * e, 1.05 * e),
  n = randomNumber(Math.max(e, i), 1.1 * Math.max(e, i)),
  s = randomNumber(0.9 * Math.min(e, i), Math.min(e, i));
  return {
    o: e,
    h: n,
    l: s,
    c: i
  }
}
function randomBar(t, e) {
  var i = getRandomBarNoTime(e);
  return i.t = t.valueOf(),
  i
}
function getRandomData(t, e) {
  for (
    var i = 'MMMM DD YYYY',
    t = moment(t, i),
    n = [
      randomBar(t, 30)
    ];
    n.length < e;
  ) t = t.clone().add(1, 'd'),
  t.isoWeekday() <= 5 &&
  n.push(randomBar(t, n[n.length - 1].c));
  return n
}
function rgbToRgba(t, e) {
  return t.replace(')', ', ' + e + ')').replace('rgb', 'rgba')
}
function componentToHex(t) {
  var e = t.toString(16);
  return 1 == e.length ? '0' + e : e
}
function rgbToHex(t) {
  var e = /(.*?)rgb\((\d+),(\d+),(\d+)\)/.exec(t),
  i = parseInt(e[2]),
  n = parseInt(e[3]),
  s = parseInt(e[4]);
  return '#' + componentToHex(i) + componentToHex(n) + componentToHex(s)
}
var _get = function t(e, i, n) {
  null === e &&
  (e = Function.prototype);
  var s = Object.getOwnPropertyDescriptor(e, i);
  if (void 0 === s) {
    var o = Object.getPrototypeOf(e);
    return null === o ? void 0 : t(o, i, n)
  }
  if ('value' in s) return s.value;
  var a = s.get;
  if (void 0 !== a) return a.call(n)
},
_createClass = function () {
  function t(t, e) {
    for (var i = 0; i < e.length; i++) {
      var n = e[i];
      n.enumerable = n.enumerable ||
      !1,
      n.configurable = !0,
      'value' in n &&
      (n.writable = !0),
      Object.defineProperty(t, n.key, n)
    }
  }
  return function (e, i, n) {
    return i &&
    t(e.prototype, i),
    n &&
    t(e, n),
    e
  }
}();

!function ($) {
  $(document).ready(
    function () {
     
      $(document).on(
        'click',
        '.card-metric',
        function () {
          var t = $(this).closest('.card'),
          e = t.find($('.card-chart'));
          if (e.length) {
            var i = chartExists(e);
            if (i) {
              $(this).toggleClass('active');
              var n = $(this).index(),
              s = $(this).hasClass('active');
              i.data.datasets[n].hidden = !s,
              i.update()
            }
          }
        }
      ),
      $(document).on(
        'click',
        '.tab',
        function () {
          var t = $(this).closest('.card'),
          e = t.find($('.card-chart'));
          if (e.length) {
            var i = chartExists(e);
            if (i) {
              for (var n = $(this).index(), s = 0; s < i.data.datasets.length; s++) {
                var o = !0;
                s === n &&
                (o = !1),
                i.data.datasets[s].hidden = o
              }
              i.update()
            }
          }
        }
      );
      
    }
  )
}(jQuery);