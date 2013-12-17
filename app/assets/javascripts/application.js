// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(window).load(function() {
  $(".loader").fadeOut("slow");
})

$(window).ready(function(){
	FONDAK_Init();
	console.log("pipise");
});

function FONDAK_Init(){
	// $('#footer').hide();

	var endDate = "April 25, 2014 12:00:00";
	console.log("pipise");

	$("#owl-demo").owlCarousel({
    	// navigation : true
    	items: 3,
    	itemsDesktopSmall:[1280,2],
    	autoPlay : 3000,
    	itemsMobile : false,
    	rewindSpeed: 1500,
    	stopOnHover: true,
  	});

  	$('.countdown.styled').countdown({
        date: endDate,
        render: function(data) {
        	$(this.el).html("<div><span>dni</span>" + this.leadingZeros(data.days, 3) + "</div><div><span>hod</span>" + this.leadingZeros(data.hours, 2) + "</div><div><span>min</span>" + this.leadingZeros(data.min, 2) + "</div><div><span>sek</span>" + this.leadingZeros(data.sec, 2) + "</div>");
        }
   	});

}