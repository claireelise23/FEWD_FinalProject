$(document).ready(function(){
    $(".menu_item").mouseover(function(){
      console.log ("hello");
        $(this).addClass("active");
    });
});

var headerWaypoint = new Waypoint({
    element: document.getElementById('OS'),
    handler: function(direction) {
      console.log ("hello");
      if (direction === 'down') {
        $('head').delay(500).fadeIn();
      }
      if (direction === 'up') {
        $('head').delay(500).fadeOut();
      }
    },
    // offset: 350
  });

////////////
$("#OurStory").click(function() {
  console.log("test");
  $("html, body").animate({ scrollTop: $("#OS").offset().top}, "slow");
  return false;
});

// switch the ids and make sure that the title has an a tag

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
