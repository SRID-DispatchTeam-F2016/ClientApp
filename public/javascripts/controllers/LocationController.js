angular.module('chatApp').controller('LocationController',
    ['$window', '$scope', 'socket', 'rest', 'publicHistoryService', 'currentUserService',
        function ($window, $scope, socket, rest, publicHistoryService, currentUserService) {
            var vm = this;

            vm.click = function() {
                alert(1);
            };
        }
    ]
);