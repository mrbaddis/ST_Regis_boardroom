home_animation = (function() {
	
	var boundEvents = {};

	function Reset()
	{
			
	}
	
	function init()
	{
	
				
		frame1();
		
	}


		// vars	/*		
		var text02 = document.getElementById("text01");
		var text02 = document.getElementById("text02");
		var button = document.getElementById("button");

	
	function frame1()
	{
		
		TweenLite.to(text01, 2, { opacity:1, delay:.5});
		TweenLite.to(text02, 2, { opacity:1, delay:2.5});
		TweenLite.to(button, 2, { opacity:1, delay:4.5});
	
	}
		
	init();
});


// If true, start function. If false, listen for INIT.
window.onload = function() {
  home_animation();
  }

