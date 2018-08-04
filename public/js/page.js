$(document).scroll(function() {
  var y = $(this).scrollTop();
  var x = $("#skillsSection").position();

  if (y > x.top - 50) {
    $(".skillbar").each(function() {
      $(this)
        .find(".skillbar-bar")
        .animate(
          {
            width: $(this).attr("data-percent")
          },
          1000
        );
    });
    console.log("works");
  }
});
//Scroll to Div
$(document).ready(function() {
  var scrollLink = $(".scroll");
  scrollLink.click(function(e) {
    e.preventDefault();
    $("body, html").animate(
      {
        scrollTop: $(this.hash).offset().top
      },
      900
    );
  });
});
