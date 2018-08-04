// //Experience Bar
jQuery(document).ready(function() {
  jQuery(".skillbar").each(function() {
    jQuery(this)
      .find(".skillbar-bar")
      .animate(
        {
          width: jQuery(this).attr("data-percent")
        },
        4000
      );
  });
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
