// The Newest News
// Gaby Clarke, Spring 2017
// Parsons Paris, Spatial Lab

// Adapted from code at http://codepen.io/Dannzzor/pen/dlAap

$(document).ready(function(){
  $(window).scroll(function(){
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 49) {
        $('body').addClass('header-fixed');
    } else {
        $('body').removeClass('header-fixed');
    }
  });
});
