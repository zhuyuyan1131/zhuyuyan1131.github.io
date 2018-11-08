(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=960){cw++;}if(w>=1200){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=1200){$('.js').attr('src', (dpi>1) ? 'images/beijing-2400.jpg' : 'images/beijing-1200.jpg');
$('.js-2').attr('src', (dpi>1) ? 'images/sanjiao-52.png' : 'images/sanjiao-26.png');
$('.js-3').attr('src', (dpi>1) ? 'images/sanjiao-46.png' : 'images/sanjiao-23.png');
$('.js-4').attr('src', (dpi>1) ? 'images/chengtiao-340.png' : 'images/chengtiao-170.png');
$('.js-5').attr('src', (dpi>1) ? 'images/chengkuang-1860.png' : 'images/chengkuang-930.png');
$('.js-6').attr('src', (dpi>1) ? 'images/toumingjuxing-476.png' : 'images/toumingjuxing-238.png');
$('.js-7').attr('src', (dpi>1) ? 'images/tu-404-1.png' : 'images/tu-202-1.png');
$('.js-8').attr('src', (dpi>1) ? 'images/beijingjuxing-2174.png' : 'images/beijingjuxing-1087.png');
$('.js-9').attr('src', (dpi>1) ? 'images/cafe-452.png' : 'images/cafe-226.png');
$('.js-10').attr('src', (dpi>1) ? 'images/cat-1236-1.png' : 'images/cat-618-1.png');
$('.js-11').attr('src', (dpi>1) ? 'images/lvtiao-186.png' : 'images/lvtiao-93.png');
$('.js-12').attr('src', (dpi>1) ? 'images/sucai1-984-1.png' : 'images/sucai1-492-1.png');
$('.js-13').attr('src', (dpi>1) ? 'images/santiao-1098.png' : 'images/santiao-549.png');
$('.js-14').attr('src', (dpi>1) ? 'images/meizi-1496.png' : 'images/meizi-748.png');
$('.js-15').attr('src', (dpi>1) ? 'images/heifangkuai-90.png' : 'images/heifangkuai-45.png');
$('.js-16').attr('src', (dpi>1) ? 'images/huitiao-2050.png' : 'images/huitiao-1025.png');
$('.js-17').attr('src', (dpi>1) ? 'images/zhu-370.png' : 'images/zhu-185.png');
$('.js-18').attr('src', (dpi>1) ? 'images/ditu-2314.png' : 'images/ditu-1157.png');
$('.js-19').attr('src', (dpi>1) ? 'images/you-xiang-136.png' : 'images/you-xiang-68.png');
$('.js-20').attr('src', (dpi>1) ? 'images/qq-112.png' : 'images/qq-56.png');}else if($(window).width()>=960){$('.js').attr('src', (dpi>1) ? 'images/beijing-1920.jpg' : 'images/beijing-960.jpg');
$('.js-2').attr('src', (dpi>1) ? 'images/sanjiao-52.png' : 'images/sanjiao-26.png');
$('.js-3').attr('src', (dpi>1) ? 'images/sanjiao-52.png' : 'images/sanjiao-26.png');
$('.js-4').attr('src', (dpi>1) ? 'images/chengtiao-276.png' : 'images/chengtiao-138.png');
$('.js-5').attr('src', (dpi>1) ? 'images/chengkuang-1488.png' : 'images/chengkuang-744.png');
$('.js-6').attr('src', (dpi>1) ? 'images/toumingjuxing-382.png' : 'images/toumingjuxing-191.png');
$('.js-7').attr('src', (dpi>1) ? 'images/tu-322-1.png' : 'images/tu-161-1.png');
$('.js-8').attr('src', (dpi>1) ? 'images/beijingjuxing-1740.png' : 'images/beijingjuxing-870.png');
$('.js-9').attr('src', (dpi>1) ? 'images/cafe-362.png' : 'images/cafe-181.png');
$('.js-10').attr('src', (dpi>1) ? 'images/cat-988-1.png' : 'images/cat-494-1.png');
$('.js-11').attr('src', (dpi>1) ? 'images/lvtiao-148.png' : 'images/lvtiao-74.png');
$('.js-12').attr('src', (dpi>1) ? 'images/sucai1-788-1.png' : 'images/sucai1-394-1.png');
$('.js-13').attr('src', (dpi>1) ? 'images/santiao-878.png' : 'images/santiao-439.png');
$('.js-14').attr('src', (dpi>1) ? 'images/meizi-1194.png' : 'images/meizi-597.png');
$('.js-15').attr('src', (dpi>1) ? 'images/heifangkuai-72.png' : 'images/heifangkuai-36.png');
$('.js-16').attr('src', (dpi>1) ? 'images/huitiao-1640.png' : 'images/huitiao-820.png');
$('.js-17').attr('src', (dpi>1) ? 'images/zhu-294.png' : 'images/zhu-147.png');
$('.js-18').attr('src', (dpi>1) ? 'images/ditu-1850.png' : 'images/ditu-925.png');
$('.js-19').attr('src', (dpi>1) ? 'images/you-xiang-108.png' : 'images/you-xiang-54.png');
$('.js-20').attr('src', (dpi>1) ? 'images/qq-90.png' : 'images/qq-45.png');}else{$('.js').attr('src', (dpi>1) ? 'images/beijing-640.jpg' : 'images/beijing-320.jpg');
$('.js-2').attr('src', (dpi>1) ? 'images/sanjiao-16.png' : 'images/sanjiao-8.png');
$('.js-3').attr('src', (dpi>1) ? 'images/sanjiao-16.png' : 'images/sanjiao-8.png');
$('.js-4').attr('src', (dpi>1) ? 'images/chengtiao-82.png' : 'images/chengtiao-41.png');
$('.js-5').attr('src', (dpi>1) ? 'images/chengkuang-478.png' : 'images/chengkuang-239.png');
$('.js-6').attr('src', (dpi>1) ? 'images/toumingjuxing-126.png' : 'images/toumingjuxing-63.png');
$('.js-7').attr('src', (dpi>1) ? 'images/tu-108-1.png' : 'images/tu-54-1.png');
$('.js-8').attr('src', (dpi>1) ? 'images/beijingjuxing-544.png' : 'images/beijingjuxing-272.png');
$('.js-9').attr('src', (dpi>1) ? 'images/cafe-136.png' : 'images/cafe-68.png');
$('.js-10').attr('src', (dpi>1) ? 'images/cat-328-1.png' : 'images/cat-164-1.png');
$('.js-11').attr('src', (dpi>1) ? 'images/lvtiao-50.png' : 'images/lvtiao-25.png');
$('.js-12').attr('src', (dpi>1) ? 'images/sucai1-278-1.png' : 'images/sucai1-139-1.png');
$('.js-13').attr('src', (dpi>1) ? 'images/santiao-294.png' : 'images/santiao-147.png');
$('.js-14').attr('src', (dpi>1) ? 'images/meizi-622.png' : 'images/meizi-311.png');
$('.js-15').attr('src', (dpi>1) ? 'images/heifangkuai-24.png' : 'images/heifangkuai-12.png');
$('.js-16').attr('src', (dpi>1) ? 'images/huitiao-554.png' : 'images/huitiao-277.png');
$('.js-17').attr('src', (dpi>1) ? 'images/zhu-110.png' : 'images/zhu-55.png');
$('.js-18').attr('src', (dpi>1) ? 'images/ditu-634.png' : 'images/ditu-317.png');
$('.js-19').attr('src', (dpi>1) ? 'images/you-xiang-38.png' : 'images/you-xiang-19.png');
$('.js-20').attr('src', (dpi>1) ? 'images/qq-30.png' : 'images/qq-15.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();

});