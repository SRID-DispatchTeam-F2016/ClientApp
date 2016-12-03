angular.module('chatApp').controller('ContactController',
    ['$window', '$scope', 'socket', 'rest',
        function ($window, $scope, socket, rest, publicHistoryService, currentUserService) {
            var vm = this;
            vm.users = [
                {
                    username: "Father",
                    number: "(650)123-4567"
                },
                {
                    username: "Mather",
                    number: "(650)234-5680"
                },
                {
                    username: "Bother",
                    number: "(650)789-2480"
                }
            ];
        }
    ]
);
