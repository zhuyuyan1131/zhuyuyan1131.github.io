(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=960){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=960){$('.js').attr('src', (dpi>1) ? 'images/1-1920.png' : 'images/1-960.png');
$('.js-2').attr('src', (dpi>1) ? 'images/2-1256.jpg' : 'images/2-628.jpg');
$('.js-3').attr('src', (dpi>1) ? 'images/-jia-yi-bei-shou-jie-shou-hui-yi-shu-da-sai-366.png' : 'images/-jia-yi-bei-shou-jie-shou-hui-yi-shu-da-sai-183.png');
$('.js-4').attr('src', (dpi>1) ? 'images/xiao-you-fan-xiao-bi-ye-shi-nian-huo-dong-358.png' : 'images/xiao-you-fan-xiao-bi-ye-shi-nian-huo-dong-179.png');
$('.js-5').attr('src', (dpi>1) ? 'images/dsc_1556-by-zhu-xian-yan-354.jpg' : 'images/dsc_1556-by-zhu-xian-yan-177.jpg');
$('.js-6').attr('src', (dpi>1) ? 'images/-yi-chu-hao-xi-15zhou-nian-wan-hui-huo-dong-364.jpg' : 'images/-yi-chu-hao-xi-15zhou-nian-wan-hui-huo-dong-182.jpg');
$('.js-7').attr('src', (dpi>1) ? 'images/group-2-360-2.png' : 'images/group-2-180-2.png');
$('.js-8').attr('src', (dpi>1) ? 'images/3-354.jpg' : 'images/3-177.jpg');
$('.js-9').attr('src', (dpi>1) ? 'images/2007jie-yi-shu-she-ji-xi-2272-400.jpg' : 'images/2007jie-yi-shu-she-ji-xi-2272-200.jpg');
$('.js-10').attr('src', (dpi>1) ? 'images/2008jie-bi-ye-sheng-he-ying-1000-408.jpg' : 'images/2008jie-bi-ye-sheng-he-ying-1000-204.jpg');
$('.js-11').attr('src', (dpi>1) ? 'images/2009jie-bi-ye-sheng-he-ying-1296-408.jpg' : 'images/2009jie-bi-ye-sheng-he-ying-1296-204.jpg');
$('.js-12').attr('src', (dpi>1) ? 'images/2010yi-she-1584-400.jpg' : 'images/2010yi-she-1584-200.jpg');
$('.js-13').attr('src', (dpi>1) ? 'images/2011jie-dong-hua-1296-408.jpg' : 'images/2011jie-dong-hua-1296-204.jpg');
$('.js-14').attr('src', (dpi>1) ? 'images/2011jie-yi-she-1584-408.jpg' : 'images/2011jie-yi-she-1584-204.jpg');
$('.js-15').attr('src', (dpi>1) ? 'images/2012jie-dong-hua-1296-400.jpg' : 'images/2012jie-dong-hua-1296-200.jpg');
$('.js-16').attr('src', (dpi>1) ? 'images/2012jie-yi-she-1584-408.jpg' : 'images/2012jie-yi-she-1584-204.jpg');
$('.js-17').attr('src', (dpi>1) ? 'images/2013jie-yi-she-1584-408.jpg' : 'images/2013jie-yi-she-1584-204.jpg');
$('.js-18').attr('src', (dpi>1) ? 'images/2017jie-shi-jue-chuan-da-zhuan-ye-2000-400.jpg' : 'images/2017jie-shi-jue-chuan-da-zhuan-ye-2000-200.jpg');
$('.js-19').attr('src', (dpi>1) ? 'images/2017jie-dong-hua-zhuan-ye-1151-408.jpg' : 'images/2017jie-dong-hua-zhuan-ye-1151-204.jpg');
$('.js-20').attr('src', (dpi>1) ? 'images/2017jie-chan-pin-she-ji-zhuan-ye-1151-408.jpg' : 'images/2017jie-chan-pin-she-ji-zhuan-ye-1151-204.jpg');
$('.js-21').attr('src', (dpi>1) ? 'images/2018jie-huan-jing-she-ji-he-zhao-2000-400.jpg' : 'images/2018jie-huan-jing-she-ji-he-zhao-2000-200.jpg');
$('.js-22').attr('src', (dpi>1) ? 'images/2018jie-dong-hua-he-zhao-2000-408.jpg' : 'images/2018jie-dong-hua-he-zhao-2000-204.jpg');
$('.js-23').attr('src', (dpi>1) ? 'images/2018jie-chan-pin-he-zhao-2000-408.jpg' : 'images/2018jie-chan-pin-he-zhao-2000-204.jpg');
$('.js-24').attr('src', 'images/bitmap-259.png');
$('.js-25').attr('src', 'images/bitmap-303.png');}else{$('.js').attr('src', (dpi>1) ? 'images/1-640.png' : 'images/1-320.png');
$('.js-2').attr('src', (dpi>1) ? 'images/2-420.jpg' : 'images/2-210.jpg');
$('.js-3').attr('src', (dpi>1) ? 'images/-jia-yi-bei-shou-jie-shou-hui-yi-shu-da-sai-204.png' : 'images/-jia-yi-bei-shou-jie-shou-hui-yi-shu-da-sai-102.png');
$('.js-4').attr('src', (dpi>1) ? 'images/xiao-you-fan-xiao-bi-ye-shi-nian-huo-dong-200.png' : 'images/xiao-you-fan-xiao-bi-ye-shi-nian-huo-dong-100.png');
$('.js-5').attr('src', (dpi>1) ? 'images/dsc_1556-by-zhu-xian-yan-204.jpg' : 'images/dsc_1556-by-zhu-xian-yan-102.jpg');
$('.js-6').attr('src', (dpi>1) ? 'images/-yi-chu-hao-xi-15zhou-nian-wan-hui-huo-dong-206.jpg' : 'images/-yi-chu-hao-xi-15zhou-nian-wan-hui-huo-dong-103.jpg');
$('.js-7').attr('src', (dpi>1) ? 'images/group-2-206.png' : 'images/group-2-103.png');
$('.js-8').attr('src', (dpi>1) ? 'images/3-202.jpg' : 'images/3-101.jpg');
$('.js-9').attr('src', (dpi>1) ? 'images/2007jie-yi-shu-she-ji-xi-2272-132.jpg' : 'images/2007jie-yi-shu-she-ji-xi-2272-66.jpg');
$('.js-10').attr('src', (dpi>1) ? 'images/2008jie-bi-ye-sheng-he-ying-1000-136.jpg' : 'images/2008jie-bi-ye-sheng-he-ying-1000-68.jpg');
$('.js-11').attr('src', (dpi>1) ? 'images/2009jie-bi-ye-sheng-he-ying-1296-136.jpg' : 'images/2009jie-bi-ye-sheng-he-ying-1296-68.jpg');
$('.js-12').attr('src', (dpi>1) ? 'images/2010yi-she-1584-134.jpg' : 'images/2010yi-she-1584-67.jpg');
$('.js-13').attr('src', (dpi>1) ? 'images/2011jie-dong-hua-1296-136.jpg' : 'images/2011jie-dong-hua-1296-68.jpg');
$('.js-14').attr('src', (dpi>1) ? 'images/2011jie-yi-she-1584-136.jpg' : 'images/2011jie-yi-she-1584-68.jpg');
$('.js-15').attr('src', (dpi>1) ? 'images/2012jie-dong-hua-1296-134.jpg' : 'images/2012jie-dong-hua-1296-67.jpg');
$('.js-16').attr('src', (dpi>1) ? 'images/2012jie-yi-she-1584-136.jpg' : 'images/2012jie-yi-she-1584-68.jpg');
$('.js-17').attr('src', (dpi>1) ? 'images/2013jie-yi-she-1584-136.jpg' : 'images/2013jie-yi-she-1584-68.jpg');
$('.js-18').attr('src', (dpi>1) ? 'images/2017jie-shi-jue-chuan-da-zhuan-ye-2000-134.jpg' : 'images/2017jie-shi-jue-chuan-da-zhuan-ye-2000-67.jpg');
$('.js-19').attr('src', (dpi>1) ? 'images/2017jie-dong-hua-zhuan-ye-1151-136.jpg' : 'images/2017jie-dong-hua-zhuan-ye-1151-68.jpg');
$('.js-20').attr('src', (dpi>1) ? 'images/2017jie-chan-pin-she-ji-zhuan-ye-1151-136.jpg' : 'images/2017jie-chan-pin-she-ji-zhuan-ye-1151-68.jpg');
$('.js-21').attr('src', (dpi>1) ? 'images/2018jie-huan-jing-she-ji-he-zhao-2000-134.jpg' : 'images/2018jie-huan-jing-she-ji-he-zhao-2000-67.jpg');
$('.js-22').attr('src', (dpi>1) ? 'images/2018jie-dong-hua-he-zhao-2000-136.jpg' : 'images/2018jie-dong-hua-he-zhao-2000-68.jpg');
$('.js-23').attr('src', (dpi>1) ? 'images/2018jie-chan-pin-he-zhao-2000-136.jpg' : 'images/2018jie-chan-pin-he-zhao-2000-68.jpg');
$('.js-24').attr('src', (dpi>1) ? 'images/bitmap-170.png' : 'images/bitmap-85.png');
$('.js-25').attr('src', (dpi>1) ? 'images/bitmap-202.png' : 'images/bitmap-101.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();

});