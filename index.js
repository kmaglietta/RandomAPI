var randAPI = angular.module('randApi',['ngRoute']);

randAPI.controller('MainControler', function MainControler($scope, $http){
  console.log("Sending to Microsoft ..." );

  var apiURL = "https://986q6ottq1.execute-api.us-west-2.amazonaws.com/prod/getquote";

  var config = {
    headers : {
      "Access-Control-Allow-Origin" : "*"
    }
  }

  $http.post(apiURL)                    //send request
  .success(function (data) {                          //200 response
    if (data[0]) {                                    //face detected and retrive the data
      console.log(data);
    }
    else {

    }
  })
  .error(function (data){                             //400 error
    console.log("error");
  });
});
