<?php
#created a function that makes a curl call
#Idea from http://stackoverflow.com/questions/9802788/call-a-rest-api-in-php
function callAPI($method, $url) {
  #create a curl
  $curl = curl_init();

  #switch on the method parameter
  #can be use and expanded for future projects
  switch ($method) {
    #set up the curl to POST
    case 'POST':
      curl_setopt($curl, CURLOPT_POST, 1);
      break;

    default:
      # code...
      break;
  }

  #Set the remote url
  curl_setopt($curl, CURLOPT_URL, $url);
  curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);

  #execute the curl and save the response
  $result = curl_exec($curl);

  #close
  curl_close($curl);

  #return
  return $result;
}

#Echo the result from the function
echo (callAPI('POST','https://986q6ottq1.execute-api.us-west-2.amazonaws.com/prod/getquote'));
?>
