$(document).ready(function(){
    $(".menu_item").mouseover(function(){
      console.log ("hello");
        $(this).addClass("active");
    });
});

// Waypoint code
var headerWaypoint = new Waypoint({
  element: document.getElementById('head'),
  handler: function(direction) {
    console.log('test')
    if (direction === 'down') {
      $('#head').addClass('fixed');
    }
    if (direction === 'up') {
      $('#head').removeClass('fixed');
    }
  }
});

// Navigation Code
$("#OurStory").click(function() {
  console.log("test");
  $("html, body").animate({ scrollTop: $("#OS").offset().top}, "slow");
  return false;
});

$("#OurPartners").click(function() {
  console.log("test");
  $("html, body").animate({ scrollTop: $("#OP").offset().top}, "slow");
  return false;
});

$("#FloralPro").click(function() {
  console.log("test");
  $("html, body").animate({ scrollTop: $("#FP").offset().top}, "slow");
  return false;
});

$("#HerbPro").click(function() {
  console.log("test");
  $("html, body").animate({ scrollTop: $("#HP").offset().top}, "slow");
  return false;
});

$("#plug").click(function() {
  console.log("test");
  $("html, body").animate({ scrollTop: $("#CU").offset().top}, "slow");
  return false;
});


$("#VegPro").click(function() {
  console.log("test");
  $("html, body").animate({ scrollTop: $("#VP").offset().top}, "slow");
  return false;
});

$("#Food").click(function() {
  console.log("test");
  $("html, body").animate({ scrollTop: $("#FS").offset().top}, "slow");
  return false;
});

$(".Title").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});
