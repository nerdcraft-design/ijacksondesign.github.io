$(".wd-1").click(function() {
    window.location = $(this).find("a").attr("href"); 
    return false;
  });