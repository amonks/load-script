# loadscript.js

super quick bookmarklet to load external javascript

<a href='javascript: !function(){function e(e,t){var a=document.getElementsByTagName("body")[0],n=document.createElement("script");n.src=e;var o=!1;n.onload=n.onreadystatechange=function(){o||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(o=!0,t(),n.onload=n.onreadystatechange=null,a.removeChild(n))},a.appendChild(n)}var t=prompt("Script URL?");e(t,function(){})}();'>Load Script</a>

Drag the above link onto your bookmarks bar. When you click on it, it'll prompt you for a script URL and then load it into the DOM.