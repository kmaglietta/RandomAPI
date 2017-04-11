function cllCallAPI () {
  $.ajax({
    url:'functions.php',
    complete: function (response) {
      console.log(response.responseText);
    },
    error: function () {
      console.log("error occured obviously ...");
    }
  });
}
