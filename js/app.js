// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$('#grid').on('click', function(){
    $('.listView').hide();
    $('.gridView').show();
});
$('#list').on('click', function(){
    $('.gridView').hide();
    $('.listView').show();
});
$.get("header.html", function(data) {
  $(".header-wrapper").replaceWith(data);
  $(document).foundation('reflow');


});
$.get("footer.html", function(data) {
  $(".footer-wrapper").replaceWith(data);
  $(document).foundation('reflow');

});
$(".chosen").chosen();