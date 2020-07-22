$("#toggle").on("click", function(){
  $("#dropDown").slideToggle();
});

// cache the selector
var follower1 = $("#follower1");
var xp = 0, yp = 0;
var loop = setInterval(function(){
    // change 12 to alter damping higher is slower
    xp += (mouseX - xp) / 20;
    yp += (mouseY - yp) / 15;
    follower1.css({left:xp, top:yp});
    
}, 4);

var mouseX = 0, mouseY = 0, limitX = 123-25, limitY = 70-25;
$(window).mousemove(function(e){
  var offset = $('.container2').offset();
   mouseX = Math.min(e.pageX - offset.left, limitX);
   mouseY = Math.min(e.pageY - offset.top, limitY);
   if (mouseX < 0) mouseX = 0;
   if (mouseY < 0) mouseY = 0;
});

// cache the selector
var follower2 = $("#follower2");
var xp = 0, yp = 0;
var loop = setInterval(function(){
    // change 12 to alter damping higher is slower
    xp += (mouseX - xp) / 20;
    yp += (mouseY - yp) / 15;
    follower2.css({left:xp, top:yp});
    
}, 3);