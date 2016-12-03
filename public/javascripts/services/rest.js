angular.module('chatApp').factory('rest',
  ['$http', function ($http) {
    var postRegister = function postRegister(user) {
      return $http.post('/users/register', user);
    };

    var postLogIn = function postLogIn(user) {
      return $http.post('/users/login', user);
    };

    var postStatus = function postStatus(userInfo) {
      return $http.post('/users/status', userInfo);
    };

    var postLogOut = function postLogOut(username) {
      return $http.post('/users/logout', { username: username });
    };

    var postPublicMessage = function postPublicMessage(message) {
      return $http.post('/messages/public', message);
    };

    var postPrivateMessage = function postPrivateMessage(message) {
      return $http.post('/messages/private', message);
    };

    var getPublicHistory = function getPublicHistory() {
      return $http.get('/messages/public');
    };

    var getPrivateHistory = function getPrivateHistory(sender, receiver) {
      return $http.get('/messages/private', { params: { sender: sender, receiver: receiver } });
    };

    var getAnnouncementHistory = function getAnnouncementHistory() {
      return $http.get('/announcements');
    };

    var getDirectory = function getDirectory() {
      return $http.get('/users');
    };

    var getPublicMessage = function getPublicMessage(id) {
      return $http.get('/messages/public/message/' + id);
    };

    var getPrepareMeasure = function getPrepareMeasure() {
      return $http.get('/measure/prepare');
    };

    var getFinalizeMeasure = function getFinalizeMeasure() {
      return $http.get('/measure/finalize');
    };

    var getPrivateMessage = function getPrivateMessage(id) {
      return $http.get('/messages/private/message/' + id);
    };

    // For privilege
    var getUserProfile = function getUserProfile(id) {
      return $http.get('/users/' + id);
    };

    var updateProfile = function updateProfile(user) {
        return $http.post('/users/update', user);
    };

    var getSupplyHistory = function getSupplyHistory() {
      return $http.get('/supply');
    };

    var postNewSupply = function postNewSupply(supply) {
      return $http.post('/supply/', supply);
    };

    var getSupply = function getSupply(id) {
      return $http.get('/supply/' + id);
    };

    return {
      postRegister: postRegister,
      postLogIn: postLogIn,
      postStatus: postStatus,
      postLogOut: postLogOut,
      postPublicMessage: postPublicMessage,
      postPrivateMessage: postPrivateMessage,
      getPublicHistory: getPublicHistory,
      getPrivateHistory: getPrivateHistory,
      getAnnouncementHistory: getAnnouncementHistory,
      getDirectory: getDirectory,
      getPublicMessage: getPublicMessage,
      getPrepareMeasure: getPrepareMeasure,
      getFinalizeMeasure: getFinalizeMeasure,
      getPrivateMessage: getPrivateMessage,
      getUserProfile: getUserProfile,
      updateProfile: updateProfile,
      getSupply: getSupply,
      postNewSupply: postNewSupply,
      getSupplyHistory: getSupplyHistory
    };
  }]
);
