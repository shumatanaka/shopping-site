$(document).ready(function(){
  $(".slide1 .u-max-full-width2").click(function(){
    var img_src = $(this).attr("src");
    $(".slidetop .u-max-full-width1").attr("src", img_src);
  });
});

/*
$(window).load(function(){
  $(".u-max-full-width2").click(function(){
    var img_src = $(this).attr("src");
    $(".slidetop img").attr("src", img_src);
    return false;
  });
});
*/
$(document).ready(function(){
  $(".unedercategories1").click(function(){
    $(".cate1").slideToggle();
  });
});