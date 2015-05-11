// this is the unminified version of the bookmarklet
// minify and add 'javascript:' to the beginning.

(function(){ 
	function loadScript(url, callback) {
		var head = document.getElementsByTagName("body")[0];
		var script = document.createElement("script");
		script.src = url;

		// Attach handlers for all browsers
		var done = false;
		script.onload = script.onreadystatechange = function()
		{
			if( !done && ( !this.readyState 
						|| this.readyState == "loaded" 
						|| this.readyState == "complete") )
			{
				done = true;

				// Continue your code
				callback();

				// Handle memory leak in IE
				script.onload = script.onreadystatechange = null;
				head.removeChild( script );
			}
		};

		head.appendChild(script);
	}

	function thingToDo() {
		$("*").css({"color":"#000000"});
		$("*").css({"background":"#ffffff"});
		$("img").css({"display":"none"});		
	}

	if (window.jQuery) {
		thingToDo();
	} else {
		var scriptUrl = "//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js";
		loadScript(scriptUrl, thingToDo);
	}


})();