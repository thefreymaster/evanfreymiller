var app = angular.module('evanApp', ['ui.router', 'ngMaterial', 'ngMessages', 'chart.js', 'countUpModule']).config(function($stateProvider, $urlRouterProvider, $mdThemingProvider, $httpProvider, ChartJsProvider){


$httpProvider.defaults.headers.post['Content-Type'] = 'text/plain'; 

  var evanPalette = $mdThemingProvider.extendPalette('grey', {
    '900': '#626262',
    'contrastDefaultColor': 'light'
  });

  // Register the new color palette map with the name <code>neonRed</code>
  $mdThemingProvider.definePalette('evanPalette', evanPalette);

  // Use that theme for the primary intentions
  $mdThemingProvider.theme('default')
    .primaryPalette('evanPalette', {
      'default': '900', // by default use shade 400 from the pink palette for primary intentions
      'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
      'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
      'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
    })
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


