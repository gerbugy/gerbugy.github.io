function activeNav(pageUrl) {
  if(pageUrl.substr(pageUrl.length - 1) == "/") pageUrl = pageUrl.substr(0, pageUrl.length - 1);
  if(pageUrl.substr(pageUrl.length - 5) == ".html") pageUrl = pageUrl.substr(0, pageUrl.length - 5);
  $("ul.navbar-nav > li").each(function() {
    var li = $(this);
    activeNavItem(pageUrl, li);
    /***
    
    var href = li.find("a").attr("href");
    if(pageUrl.indexOf(href) == 0) {
      li.addClass("active");
    } else {
      li.removeClass("active");
    }
    ***/

    li.find("ul.dropdown-menu > li").each(function() {
      activeNavItem(pageUrl, $(this));
    });
    
  });
}

function activeNavItem(pageUrl, li) {
  var href = li.find("a").attr("href");
  if(pageUrl.indexOf(href) == 0) {
    li.addClass("active");
  } else {
    li.removeClass("active");
  }
}
