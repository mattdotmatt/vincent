// Generated by CoffeeScript 1.6.3
(function() {
  var Listener, TextListener, TextMessage, inspect,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  inspect = require('util').inspect;

  TextMessage = require('./message').TextMessage;

  Listener = (function() {
    function Listener(robot, matcher, callback) {
      this.robot = robot;
      this.matcher = matcher;
      this.callback = callback;
    }

    Listener.prototype.call = function(message) {
      var match;
      if (match = this.matcher(message)) {
        if (this.regex) {
          this.robot.logger.debug("Message '" + message + "' matched regex /" + (inspect(this.regex)) + "/");
        }
        this.callback(new this.robot.Response(this.robot, message, match));
        return true;
      } else {
        return false;
      }
    };

    return Listener;

  })();

  TextListener = (function(_super) {
    __extends(TextListener, _super);

    function TextListener(robot, regex, callback) {
      var _this = this;
      this.robot = robot;
      this.regex = regex;
      this.callback = callback;
      this.matcher = function(message) {
        if (message instanceof TextMessage) {
          return message.match(_this.regex);
        }
      };
    }

    return TextListener;

  })(Listener);

  module.exports = {
    Listener: Listener,
    TextListener: TextListener
  };

}).call(this);
