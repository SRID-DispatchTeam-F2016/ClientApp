angular.module('chatApp').controller('PublicChatController',
  ['$window', '$scope', 'socket', 'rest', 'publicHistoryService', 'currentUserService',
    function ($window, $scope, socket, rest, publicHistoryService, currentUserService) {
      var vm = this;
      
      vm.send = function send() {
        var message = {
          username: currentUserService.getCurrentUser(),
          timestamp: Date.now(),
          content: vm.content
        };

        rest.postPublicMessage(message).then(function handleSuccess(res) {
          // $window.alert(res.data.state === 'success' ? 'Sent Successfully-!' : 'Failure-!');
        });
        publicHistoryService.insert(message);

        vm.content = '';
      };

      $scope.$on('public:say', function handlePublicSay() {
        publicHistoryService.getHistory().then(function handleHistory(history) {
          vm.history = history;
        });
        $scope.$apply();
        $scope.glued = true;
      });

      publicHistoryService.getHistory().then(function handleHistory(history) {
        vm.history = history;
      });
    }
  ]
);
