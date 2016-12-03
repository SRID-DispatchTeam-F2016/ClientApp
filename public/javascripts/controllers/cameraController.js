angular.module('chatApp').controller('CameraController',
    ['$window', '$scope', 'socket', 'rest', 'publicHistoryService',
        function ($window, $scope, socket, rest, publicHistoryService) {
            var vm = this;
            vm.insert = function() {
                var message = {
                    username: "You",
                    timestamp: Date.now(),
                    content: "Video is Sent"
                };

                publicHistoryService.insert(message);
            };
        }
    ]
);
