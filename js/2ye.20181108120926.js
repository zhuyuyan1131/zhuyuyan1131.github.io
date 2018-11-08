(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=960){cw++;}if(w>=1200){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=1200){$('.js-61').attr('src', 'images/fengmian-1200-1.png');
$('.js-62').attr('src', 'images/kuaizi-460-1.png');
$('.js-63').attr('src', (dpi>1) ? 'images/yu-1328.png' : 'images/yu-664.png');
$('.js-64').attr('src', 'images/sanjiao-49.png');
$('.js-65').attr('src', 'images/sanjiao-48.png');
$('.js-66').attr('src', 'images/sanjiao-48.png');
$('.js-67').attr('src', 'images/juxing-346.png');
$('.js-68').attr('src', (dpi>1) ? 'images/hua-ban-1-1224.png' : 'images/hua-ban-1-612.png');
$('.js-69').attr('src', 'images/chengse-101.png');
$('.js-70').attr('src', 'images/huisetuoyuan-194.png');
$('.js-71').attr('src', 'images/fense-171.png');
$('.js-72').attr('src', 'images/huisetuoyuan-195.png');
$('.js-73').attr('src', 'images/fense-171-1.png');
$('.js-74').attr('src', 'images/yingtao-120-1.png');
$('.js-75').attr('src', 'images/yingtao-120.png');
$('.js-76').attr('src', 'images/huisetuoyuan-194.png');
$('.js-77').attr('src', 'images/fense-171.png');
$('.js-78').attr('src', (dpi>1) ? 'images/yi-196-1.png' : 'images/yi-98-1.png');
$('.js-79').attr('src', 'images/chengse-103.png');}else if($(window).width()>=960){$('.js-61').attr('src', (dpi>1) ? 'images/fengmian-1920-1.png' : 'images/fengmian-960-1.png');
$('.js-62').attr('src', (dpi>1) ? 'images/kuaizi-736-1.png' : 'images/kuaizi-368-1.png');
$('.js-63').attr('src', (dpi>1) ? 'images/yu-1064.png' : 'images/yu-532.png');
$('.js-64').attr('src', (dpi>1) ? 'images/sanjiao-78.png' : 'images/sanjiao-39.png');
$('.js-65').attr('src', (dpi>1) ? 'images/sanjiao-78.png' : 'images/sanjiao-39.png');
$('.js-66').attr('src', (dpi>1) ? 'images/sanjiao-78.png' : 'images/sanjiao-39.png');
$('.js-67').attr('src', (dpi>1) ? 'images/juxing-554.png' : 'images/juxing-277.png');
$('.js-68').attr('src', (dpi>1) ? 'images/hua-ban-1-980.png' : 'images/hua-ban-1-490.png');
$('.js-69').attr('src', 'images/chengse-83.png');
$('.js-70').attr('src', (dpi>1) ? 'images/huisetuoyuan-312.png' : 'images/huisetuoyuan-156.png');
$('.js-71').attr('src', (dpi>1) ? 'images/fense-274.png' : 'images/fense-137.png');
$('.js-72').attr('src', (dpi>1) ? 'images/huisetuoyuan-312.png' : 'images/huisetuoyuan-156.png');
$('.js-73').attr('src', (dpi>1) ? 'images/fense-274.png' : 'images/fense-137.png');
$('.js-74').attr('src', (dpi>1) ? 'images/yingtao-192-1.png' : 'images/yingtao-96-1.png');
$('.js-75').attr('src', (dpi>1) ? 'images/yingtao-192.png' : 'images/yingtao-96.png');
$('.js-76').attr('src', (dpi>1) ? 'images/huisetuoyuan-312.png' : 'images/huisetuoyuan-156.png');
$('.js-77').attr('src', (dpi>1) ? 'images/fense-274.png' : 'images/fense-137.png');
$('.js-78').attr('src', (dpi>1) ? 'images/yi-158-1.png' : 'images/yi-79-1.png');
$('.js-79').attr('src', 'images/chengse-83.png');}else{$('.js-61').attr('src', (dpi>1) ? 'images/fengmian-640-1.png' : 'images/fengmian-320-1.png');
$('.js-62').attr('src', (dpi>1) ? 'images/kuaizi-246-1.png' : 'images/kuaizi-123-1.png');
$('.js-63').attr('src', (dpi>1) ? 'images/yu-348.png' : 'images/yu-174.png');
$('.js-64').attr('src', (dpi>1) ? 'images/sanjiao-26-1.png' : 'images/sanjiao-13.png');
$('.js-65').attr('src', (dpi>1) ? 'images/sanjiao-26-1.png' : 'images/sanjiao-13.png');
$('.js-66').attr('src', (dpi>1) ? 'images/sanjiao-26-1.png' : 'images/sanjiao-13.png');
$('.js-67').attr('src', (dpi>1) ? 'images/juxing-184.png' : 'images/juxing-92.png');
$('.js-68').attr('src', (dpi>1) ? 'images/hua-ban-1-318.png' : 'images/hua-ban-1-159.png');
$('.js-69').attr('src', (dpi>1) ? 'images/chengse-54.png' : 'images/chengse-27.png');
$('.js-70').attr('src', (dpi>1) ? 'images/huisetuoyuan-106.png' : 'images/huisetuoyuan-53.png');
$('.js-71').attr('src', (dpi>1) ? 'images/fense-92.png' : 'images/fense-46.png');
$('.js-72').attr('src', (dpi>1) ? 'images/huisetuoyuan-106.png' : 'images/huisetuoyuan-53.png');
$('.js-73').attr('src', (dpi>1) ? 'images/fense-92.png' : 'images/fense-46.png');
$('.js-74').attr('src', (dpi>1) ? 'images/yingtao-64-1.png' : 'images/yingtao-32-1.png');
$('.js-75').attr('src', (dpi>1) ? 'images/yingtao-64.png' : 'images/yingtao-32.png');
$('.js-76').attr('src', (dpi>1) ? 'images/huisetuoyuan-106.png' : 'images/huisetuoyuan-53.png');
$('.js-77').attr('src', (dpi>1) ? 'images/fense-92.png' : 'images/fense-46.png');
$('.js-78').attr('src', (dpi>1) ? 'images/yi-52-1.png' : 'images/yi-26-1.png');
$('.js-79').attr('src', (dpi>1) ? 'images/chengse-54.png' : 'images/chengse-27.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();

});