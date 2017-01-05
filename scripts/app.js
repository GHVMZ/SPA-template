var app = angular.module('app', ['ngRoute', 'ngAnimate']);

  app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider

    .when('/', {
      title: 'Home',
      templateUrl: './pages/home.html'
    })

    .when('/home', {
      title: 'Home',
      templateUrl: './pages/home.html'
    })

    .when('/about', {
      title: 'About',
      templateUrl: './pages/about.html'
    })

    .when('/contact', {
      title: 'contact',
      templateUrl: './pages/contact.html'
    })

    .otherwise({
      title: '404',
      redirectTo: '/404',
      templateUrl: './pages/404.html'
    });

}]);

  app.directive("headerSection", function() {
      return {
        templateUrl: './pages/structure/header.html'
      };
  });

  app.directive("footerSection", function() {
      return {
        templateUrl: './pages/structure/footer.html'
      };
  });

  app.directive("sideBar", function() {
      return {
        templateUrl: './pages/structure/sidebar.html'
      };
  });

app.run(['$location', '$rootScope', function($location, $rootScope) {
      $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {

          if (current.hasOwnProperty('$$route')) {

              $rootScope.title = current.$$route.title;
          }
      });
}]);
