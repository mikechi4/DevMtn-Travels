angular.module('devmtnTravel')
  .controller('bookedCtrl', function($scope, mainSrv, $stateParams){
    $scope.data = mainSrv.travelInfo;
    for(var i = 0; i < $scope.data.length; i++){
      if($stateParams.id == $scope.data[i].id) {
        $scope.data = $scope.data[i];

      }
    }
    console.log('city name!! ' + $scope.data)
  })
