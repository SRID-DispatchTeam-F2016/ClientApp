angular.module('chatApp').factory('publicHistoryService', ['$q', 'rest', function ($q, rest) {
  var history = [];
  var getHistory = function getHistory() {
    // if (history.length === 0) {
    //   return rest.getPublicHistory().then(function handleHistory(res) {
    //     history = res.data;
    //     return history;
    //   });
    // }

    return $q.when(history);
  };

  var insert = function insert(message) {
    history.push(message);
  };

  var getMessage = function getMessage(messageID) {
    var message = {
      username: "",
      timestamp: "",
      content: ""
    };
    rest.getPublicMessage(messageID).then(function handleHistory(res) {
      message = res.data;
      history.push(message);
      // return message;
    });
  };

  return {
    getHistory: getHistory,
    insert: insert,
    getMessage: getMessage
  };
}]);
