// adjust according to the your internet speed 
var SPEED = 1000;

var lastBodyHeight = 0;

function getBodyHeight() {
    var body = document.body;
    var html = document.documentElement;
    var height = Math.max( body.scrollHeight, body.offsetHeight, 
                           html.clientHeight, html.scrollHeight, html.offsetHeight );
    return height;
}


var interval = setInterval(function() {
	var actualBodyHeight = getBodyHeight();
	if(lastBodyHeight == actualBodyHeight) {
		clearInterval(interval);
	} else {
		lastBodyHeight = actualBodyHeight;
		window.scrollTo(0,document.body.scrollHeight);
	}	
}, SPEED);
