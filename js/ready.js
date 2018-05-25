alert(111);

/**
$(document).ready(function() {
  alert(222);
  fnNavActive();
});
**/

function fnNavActive() {
  alert(333);
  /**
  var pageUrl = "{{ page.url }}";
  if(pageUrl.substr(pageUrl.length - 1) == "/") pageUrl = pageUrl.substr(0, pageUrl.length - 1);
  if(pageUrl.substr(pageUrl.length - 5) == ".html") pageUrl = pageUrl.substr(0, pageUrl.length - 5);
  $("ul.navbar-nav > li").each(function() {
    var li = $(this);
    var href = li.find("a").attr("href");
    if(pageUrl && href.indexOf(pageUrl) == 0) {
      li.addClass("active");
    } else {
      li.removeClass("active");
    }
  });
  **/
}
