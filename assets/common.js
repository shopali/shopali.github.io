$(function() {
	$(document).pjax("a", "#pjax-container", {
		fragment: "#pjax-container"
	})
});
$(document).on("ready pjax:end", function(a) {
	$(document).ready(function() {
		$.getScript("/assets/ytplayer/jquery.mb.ytplayer.min.js");
		$.getScript("/assets/theme/js/script.js")
	});
});