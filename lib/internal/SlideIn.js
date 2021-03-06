'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _simpleAssign = require('simple-assign');

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsTransitionGroup = require('react-addons-transition-group');

var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);

var _SlideInChild = require('./SlideInChild');

var _SlideInChild2 = _interopRequireDefault(_SlideInChild);

var _getMuiTheme = require('../styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var SlideIn = _react2.default.createClass({
  displayName: 'SlideIn',


  propTypes: {
    childStyle: _react2.default.PropTypes.object,
    children: _react2.default.PropTypes.node,
    direction: _react2.default.PropTypes.oneOf(['left', 'right', 'up', 'down']),
    enterDelay: _react2.default.PropTypes.number,

    /**
     * Override the inline-styles of the root element.
     */
    style: _react2.default.PropTypes.object
  },

  contextTypes: {
    muiTheme: _react2.default.PropTypes.object
  },

  childContextTypes: {
    muiTheme: _react2.default.PropTypes.object
  },

  getDefaultProps: function getDefaultProps() {
    return {
      enterDelay: 0,
      direction: 'left'
    };
  },
  getInitialState: function getInitialState() {
    return {
      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
    };
  },
  getChildContext: function getChildContext() {
    return {
      muiTheme: this.state.muiTheme
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
    this.setState({ muiTheme: newMuiTheme });
  },
  _getLeaveDirection: function _getLeaveDirection() {
    return this.props.direction;
  },
  render: function render() {
    var _this = this;

    var _props = this.props;
    var enterDelay = _props.enterDelay;
    var children = _props.children;
    var childStyle = _props.childStyle;
    var direction = _props.direction;
    var style = _props.style;

    var other = _objectWithoutProperties(_props, ['enterDelay', 'children', 'childStyle', 'direction', 'style']);

    var prepareStyles = this.state.muiTheme.prepareStyles;


    var mergedRootStyles = (0, _simpleAssign2.default)({}, {
      position: 'relative',
      overflow: 'hidden',
      height: '100%'
    }, style);

    var newChildren = _react2.default.Children.map(children, function (child) {
      return _react2.default.createElement(
        _SlideInChild2.default,
        {
          key: child.key,
          direction: direction,
          enterDelay: enterDelay,
          getLeaveDirection: _this._getLeaveDirection,
          style: childStyle
        },
        child
      );
    }, this);

    return _react2.default.createElement(
      _reactAddonsTransitionGroup2.default,
      _extends({}, other, {
        style: prepareStyles(mergedRootStyles),
        component: 'div'
      }),
      newChildren
    );
  }
});

exports.default = SlideIn;