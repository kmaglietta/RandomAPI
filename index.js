function cllCallAPI () {
  $.ajax({
    url:'functions.php',
    complete: function (response) {
      console.log(response.responseText);
      var json = JSON.parse(response.responseText);
      return json;
    },
    error: function () {
      console.log("error occured obviously ...");
      return null;
    }
  });
}
