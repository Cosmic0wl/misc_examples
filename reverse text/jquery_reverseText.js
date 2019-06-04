// REVERSE TEXT JQUERY PLUGIN
(function($) {
    $.fn.reverseText = function(params) {
        params = $.extend({ min: 0, max: 99999 }, params);
        this.each(function() {
            var e = $(this);
            var txt = e.text();
            if (txt.length >= params.min && txt.length <= params.max) {
            	e.text(txt.split("").reverse().join(""));
            }
        });
        return this;
    };
})(jQuery);


$(".reverse").reverseText();