var sowb=window.sowb||{};jQuery(function(a){var o=function(){a(".sowb-google-map-static").each(function(){var o=a(this),r=function(){if(o.data("fallbackImage")){var a=o.data("fallbackImage");a.hasOwnProperty("img")&&(o.parent().append(a.img),o.remove())}};this.sowbLoadError?r():this.complete||o.error(r)})};o()}),window.sowb=sowb;