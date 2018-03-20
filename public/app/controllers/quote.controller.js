angular.module('evanApp').controller('SplashController', ['$scope', '$mdMedia', 'httpService', '$filter', function ($scope, $mdMedia, httpService, $filter) {

    $scope.test = 'This is test';


    $scope.httpService = httpService;
    $scope.httpService.currentTab = 'splash';
    $scope.bitcoin_price;
    $scope.historic_prices = [];
    $scope.historic_labels = [];
    $scope.colors;

    $scope.skills = {
        'AngularJS': 90,
        'Angular Material': 82,
        'Javascript': 87,
        'CSS3': 80,
        'Adobe Illustrator': 80,
        'RESTful Endpoints': 85,
        'JSON': 89,
        'Git': 65,
        'HTML5': 87,
        'npm': 75,
        'Web Design': 60,
        'Amazon S3': 55,
        'Adobe Photoshop': 40,
        'Jquery': 45,
        'Adobe Indesign': 30,
        'NodeJS': 40,
        'ExpressJS': 25,
        'Heroku': 40,
        'Amazon API Gateway': 35,
        'Amazon Route 53': 30,
        'TypeScript': 55,
        'Angular 2': 68,
        'Angular 5': 75
        

    }
    $scope.labels = [];
    $scope.series = ['Skills',];

    $scope.options = {

        scales: {
            yAxes: [
                {
                    id: 'y-axis-1',
                    type: 'linear',
                    display: true,
                    position: 'left',
                    ticks: { min: 0, max: 100}
                },
                {
                    id: 'y-axis-2',
                    type: 'linear',
                    display: false,
                    position: 'right'
                }
            ],
            xAxes: [{
                ticks: {
                    autoSkip: false
                }
            }]
        },
        animation: {
            duration: 5000,
            easing: 'easeInOutExpo'
        }
    }
    $scope.colors = ['rgba(98,98,98,.9)']



    $scope.data = [
        [],

    ];
    for (item in $scope.skills) {
        $scope.data[0].push($scope.skills[item]);
        $scope.labels.push(item);
    }



}]);