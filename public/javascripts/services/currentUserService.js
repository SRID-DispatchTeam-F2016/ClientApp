angular.module('chatApp').factory('currentUserService', function () {
  var authenticated = false;
  var currentUser = '';
  var currentStatus = '';
  var currentLocation = '';
  var profile = {};

  var isAuthenticated = function isAuthenticated() {
    return authenticated;
  };

  var logIn = function logIn(username) {
    authenticated = true;
    currentUser = username;
  };

  var logOut = function logOut() {
    authenticated = false;
    currentUser = '';
    currentStatus = '';
    currentLocation = '';
  };

  var getCurrentUser = function getCurrentUser() {
    return "You";
  };

  return {
    isAuthenticated: isAuthenticated,
    logIn: logIn,
    logOut: logOut,
    getCurrentUser: getCurrentUser,
  };
});
