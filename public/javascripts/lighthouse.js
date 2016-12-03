angular.module('chatApp',
  ['ngRoute', 'ngResource', 'mobile-angular-ui', 'mobile-angular-ui.gestures', 'ngScrollGlue', 'ngMap']);

angular.module('chatApp').run(
  ['$rootScope', '$http', 'socket', 'rest', 'currentUserService',
    function ($rootScope, $http, socket, rest, currentUserService) {
      $rootScope.$watch(currentUserService.isAuthenticated, function () {
        $rootScope.authenticated = currentUserService.isAuthenticated();
        $rootScope.canMonitor = currentUserService.isAuthenticated() &&
          (currentUserService.getProfile().privilege === 'administrator' || currentUserService.getProfile().privilege === 'monitor');
      });

      $rootScope.logOut = function () {
        rest.postLogOut(currentUserService.getCurrentUser());
        currentUserService.logOut();
        socket.disconnect();
      };
    }
  ]
);

angular.module('chatApp').config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/message', {
      templateUrl: 'message.html',
      controller: 'MessageController as vm',
      reloadOnSearch: false
    })
      .when('/', {
          templateUrl: 'home.html',
          controller: 'HomeController as vm',
          reloadOnSearch: false
      })
    .when('/location', {
        templateUrl: 'location.html',
        controller: 'LocationController as vm',
        reloadOnSearch: false
    })
    .when('/contact', {
        templateUrl: 'contact.html',
        controller: 'ContactController as vm',
        reloadOnSearch: false
    })
      .when('/camera', {
          templateUrl: 'camera.html',
          controller: 'CameraController as vm',
          reloadOnSearch: false
      });
}]);

angular.module('chatApp').config(['$logProvider', function ($logProvider) {
  $logProvider.debugEnabled(true);
}]);
