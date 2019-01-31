"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var symbolKeys = {
  ArrowRight: '▶',
  ArrowLeft: '◀',
  ArrowUp: '▲',
  ArrowDown: '▼'
};
var styles = {
  minHeight: '50px',
  minWidth: '50px',
  marginRight: '10px',
  padding: '5px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#fff',
  background: '#777',
  opacity: 0.4,
  fontSize: '28px',
  borderRadius: '5px'
};
var wrapperStyle = {
  position: 'fixed',
  top: '30px',
  right: '30px',
  display: 'flex'
};

var useMultiKeyDebugger = function useMultiKeyDebugger() {
  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      key = _useState2[0],
      setKey = _useState2[1];

  function onKeyDown() {
    var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var tempkey = JSON.parse(JSON.stringify(key));
    var currentKey = symbolKeys[event.key] || event.key;

    if (!event.repeat) {
      tempkey.push(currentKey);
      setKey(tempkey);
    }
  }

  function onKeyUp() {
    var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var tempkey = JSON.parse(JSON.stringify(key));
    var currentKey = symbolKeys[event.key] || event.key;
    tempkey = tempkey.filter(function (val) {
      return val !== currentKey;
    });
    setKey(tempkey);
  }

  function reset() {
    setKey([]);
  }

  (0, _react.useEffect)(function () {
    window.addEventListener('keydown', onKeyDown);
    var timeout = window.setTimeout(reset, 500);
    return function cleanup() {
      window.clearTimeout(timeout);
      return window.removeEventListener('keydown', onKeyDown);
    };
  }, [key.length]);
  (0, _react.useEffect)(function () {
    window.addEventListener('keyup', onKeyUp);
    return function cleanup() {
      return window.removeEventListener('keyup', onKeyUp);
    };
  }, [key.length]);
  return function (props) {
    return key.length ? _react.default.createElement("div", {
      style: wrapperStyle
    }, key.map(function (k, index) {
      return _react.default.createElement("div", _extends({
        style: styles
      }, props, {
        key: k
      }), k);
    })) : null;
  };
};

var _default = useMultiKeyDebugger;
exports.default = _default;
