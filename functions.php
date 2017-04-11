<?php
function callAPI($method, $url, $data = false) {
  $curl = curl_init();

  switch ($method) {
    case 'POST':
      echo "post how";
      curl_setopt($curl, CURLOPT_POST, 1);
      break;

    default:
      # code...
      break;
  }

  curl_setopt($curl, CURLOPT_URL, $url);
  curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);

  $result = curl_exec($curl);

  curl_close($curl);

  return $result;
}

echo (callAPI('POST','https://986q6ottq1.execute-api.us-west-2.amazonaws.com/prod/getquote'));
?>
