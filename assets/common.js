$(function() {
	$(document).pjax("a", "#pjax-container", {
		fragment: "#pjax-container"
	})
});
$(document).on("ready pjax:end", function(a) {
	$(document).ready(function() {
		$.getScript("/assets/web/assets/jquery/jquery.min.js");
		$.getScript("/assets/ytplayer/jquery.mb.ytplayer.min.js");
		$.getScript("https://s.ytimg.com/yts/jsbin/www-widgetapi-vflcZyLnu/www-widgetapi.js");
		$.getScript("/assets/theme/js/script.js")
	})
});