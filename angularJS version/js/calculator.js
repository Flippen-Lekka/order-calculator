//Remove button Focus Script
$(document).ready(function () {
  $(".btn").click(function(event) {
    // Removes focus of the button.
    $(this).blur();
  });
});


