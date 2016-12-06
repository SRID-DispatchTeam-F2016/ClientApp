angular.module('chatApp').controller('LocationController',
    ['$window', '$scope', 'socket', 'rest', 'publicHistoryService', 'currentUserService',
        function ($window, $scope, socket, rest, publicHistoryService, currentUserService) {
            var vm = this;

            vm.insert = function() {
                var message = {
                    username: "You",
                    timestamp: Date.now(),
                    content: "Position is Set"
                };

                publicHistoryService.insert(message);
            };
        }
    ]
);