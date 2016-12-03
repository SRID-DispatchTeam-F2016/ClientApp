'use strict';

angular.module('chatApp').factory('socket',
  ['$rootScope', '$window', '$location', 'publicHistoryService', 'currentUserService', 'rest',
    function ($rootScope, $window, $location, publicHistoryService, currentUserService, rest) {
      var socket;

      return {
        connect: function connect() {
          if (angular.isUndefined(socket)) {
            socket = io.connect();
            socket.on('public_say', function handlePublicSay(message) {
              publicHistoryService.insert(message);
              $rootScope.$broadcast('public:say', message);
            });
            socket.on('public_new', function handlePublicNew(messageID) {
              publicHistoryService.getMessage(messageID.id);
            });
          } else {
            socket.connect();
          }

          socket.emit('new_connection', { username: currentUserService.getCurrentUser() });
          socket.on('disconnect', function handleDisconnect() {
            if (currentUserService.isAuthenticated()) {
              socket.connect();
            }
          });
        },
        sendPublicMessage: function sendPublicMessage(message) {
          socket.emit('public_say', message);
        }
      };
    }
  ]
);
