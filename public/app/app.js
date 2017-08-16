var app = angular.module('evanApp', ['ui.router', 'ngMaterial', 'ngMessages', 'chart.js', 'countUpModule']).config(function($stateProvider, $urlRouterProvider, $mdThemingProvider, $httpProvider, ChartJsProvider){


$httpProvider.defaults.headers.post['Content-Type'] = 'text/plain'; 

  var evanPalette = $mdThemingProvider.extendPalette('green', {
    '400': '#1B5E20',
    'contrastDefaultColor': 'dark'
  });

  // Register the new color palette map with the name <code>neonRed</code>
  $mdThemingProvider.definePalette('evanPalette', evanPalette);

  // Use that theme for the primary intentions
  $mdThemingProvider.theme('default')
    .primaryPalette('evanPalette')
    .accentPalette('blue-grey')
    .dark();

    

$stateProvider.state('speedtest', {
                url: '/',
                views: {
                    
                    'speedtestview': {
                        templateUrl: "app/views/skills.view.html",
                        controller: 'SplashController'
                    },
                    'contact': {
                        templateUrl: "app/views/contact.view.html"
                    }
                }
            })
  $urlRouterProvider.otherwise('/');

});


