angular.module('evanApp').service('httpService', ['$http', '$mdMedia', function ($http, $mdMedia) {

    var service = this;
    service.currentTab;
    service.screenIsExtraSmall = $mdMedia('xs');
    service.screenIsSmall = $mdMedia('sm');
    service.screenIsMedium = $mdMedia('md');
    service.screenIsLarge = $mdMedia('lg');




}])