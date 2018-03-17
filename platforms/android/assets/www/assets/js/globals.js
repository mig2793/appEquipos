var userAgent = navigator.userAgent || navigator.vendor || window.opera;
if(userAgent.match( /Android/i ))
{
	window.urlService = 'http://app.mincivil.net:90/public/';
}else{
	window.urlService = 'http://app.mincivil.net:90/public/';
}

window.urlImages = "http://app.mincivil.net:90/public/uploads/images/";


//window.urlService = 'http://127.0.0.1:8000/';

//window.urlImages = "http://127.0.0.1:8000/uploads/images/";

var width=$("#menu").width();
var width_display = $(window).width();
var height_display = $(window).height();

function confirmDOMChanges (callback){
	callback();
	var count = 0;
	var limit = 20;
	var interval = setInterval(function(){
		count++;
		if(count > limit){
			return clearInterval(interval);
		}
		callback();
	}, 100)
}

function time (time){
	var h = parseInt(time.split(":")[0]);
	var m = time.split(":")[1];
	var mer = ' AM';
	if(h >= 12){
		mer = ' PM';
		if(h >= 13){
			h = h - 12;
		}
	}
	return h +':'+ m + mer;
}

function getDateCurrent(){
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();

	if(dd<10) {
	    dd='0'+dd
	} 

	if(mm<10) {
	    mm='0'+mm
	} 

	today = yyyy +'/'+ mm +'/'+ dd;
	return today;	
}

function hideLoad(){
	$(".load").hide();
}

function showLoad(){
	$(".load").show();
}

function hideWall(){
	$(".Wall").hide();
}

function showWall(){
	$(".Wall").show();
}

function timeWait(){
	showWall();
	setTimeout(function(){ 
		hideWall();
	}, 2000);
}

function timeDiff(h1, h2){
	var d1= new Date("1970-01-01 "+ h1)
	var d2= new Date("1970-01-01 "+ h2)
	Math.abs(d1.getTime()-d2.getTime()) / 3600000;
}

function whenIsDate(date){
	var today = new Date();
	date = date.split('-');
	if(today.getUTCFullYear() == date[0]){
		if((today.getUTCMonth() + 1) == date[1]){
			var day = parseInt(date[2])
			if(today.getUTCDate() === day){
				return 'hoy';
			}
			if((today.getUTCDate() + 1)=== day){
				return 'mañana';
			}
			if((today.getUTCDate() + 2)=== day){
				return 'pasado mañana';
			}
		}
	}
	return [date[0], date[1], date[2]].join('/');
}

function getAge(dateString) {
	var today = new Date();
	var birthDate = new Date(dateString);
	var age = today.getFullYear() - birthDate.getFullYear();
	var m = today.getMonth() - birthDate.getMonth();
	if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
		age--;
	}
	return age;
}

jQuery.fn.removeAttributes = function() {
	return this.each(function() {
		var attributes = $.map(this.attributes, function(item) {
			return item.name;
		});
		var img = $(this);
		$.each(attributes, function(i, item) {
			img.removeAttr(item);
		});
	});
}

document.addEventListener("backbutton", function (e) {
    e.preventDefault();
}, false );