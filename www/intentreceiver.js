/**
 * cordova plugin intent receiver
 *
 */
(function (cordova) {
  var IntentReceiver = function () {

  };

  IntentReceiver.prototype.ACTION_SEND = "android.intent.action.SEND";
  IntentReceiver.prototype.EXTRA_TEXT = "android.intent.extra.TEXT";

  IntentReceiver.prototype.hasExtra = function (params, success, fail) {
    return cordova.exec(function (args) {
      success(args);
    }, function (args) {
      fail(args);
    }, 'IntentReceiver', 'hasExtra', [params]);
  };

  IntentReceiver.prototype.getExtra = function (params, success, fail) {
    return cordova.exec(function (args) {
      success(args);
    }, function (args) {
      fail(args);
    }, 'IntentReceiver', 'getExtra', [params]);
  };

  IntentReceiver.prototype.onNewIntent = function (params, callback) {
    return cordova.exec(function (args) {
      callback(args);
    }, function (args) {
    }, 'IntentReceiver', 'onNewIntent', [params]);
  };

  window.IntentReceiver = new IntentReceiver();

  // backwards compatibility
  window.plugins = window.plugins || {};
  window.plugins.IntentReceiver = window.IntentReceiver;
})(window.PhoneGap || window.Cordova || window.cordova);
