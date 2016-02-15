$(document).ready(function(){
  $.get("html/sentence.html", function(response) {
    $("#sentences").html(response);
  });
});