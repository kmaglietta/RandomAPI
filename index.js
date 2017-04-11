function cllCallAPI () {
  $.ajax({
    url:'functions.php',
    complete: function (response) {
      console.log(response);
    },
    error: function () {
      console.log("Fuck");
    }
  });
}
