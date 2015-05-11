# loadscript.js

super quick bookmarklet to load external javascript

	javascript: !function(){function e(e,t){var a=document.getElementsByTagName("body")[0],n=document.createElement("script");n.src=e;var o=!1;n.onload=n.onreadystatechange=function(){o||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(o=!0,t(),n.onload=n.onreadystatechange=null,a.removeChild(n))},a.appendChild(n)}var t=prompt("Script URL?");e(t,function(){})}();

Make a new link on your bookmarks bar with the above snippet. When you click on it, it'll prompt you for a script URL and then load it into the DOM.

### See also:

I talk about how to make bookmarklets in general in [this gist](https://gist.github.com/amonks/9363267).

I talk about user scripts, which are related to bookmarklets, in [this gist](https://gist.github.com/amonks/b68fe6fc0c447719f2a9)
