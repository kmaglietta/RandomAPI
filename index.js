var randAPIApp = angular.module('randAPIApp', []);

randAPIApp.controller('RandAPIController', function
RandAPIController ($scope) {
  $scope.getQuote = function () {
    $.ajax({
      url:'functions.php',
      complete: function (response) {
        var json = JSON.parse(response.responseText);
        console.log(json);
        $scope.author = json.author;
        $scope.body = json.body;
        $scope.$apply();
      },
      error: function () {
        console.log("error occured obviously ...");
      }
    });
  }
});
