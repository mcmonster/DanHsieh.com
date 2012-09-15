function fetch(target, file) {
	var xmlhttp;
	if (window.XMLHttpRequest)
	{// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else
	{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById(target).innerHTML=xmlhttp.responseText;
		}
	}
	xmlhttp.open("GET", file, true);
	xmlhttp.send();
}

function slideGalleryRight() {
	document.getElementById("right_preview").innerHTML = 
		"<img src='images/resume_preview.png' onclick='slideResumeLeft()' /><img class='drop_shadow' src='images/drop_shadow.png' />";
	document.getElementById("left_preview").innerHTML =
		"<img src='images/about_me_preview.png' onclick='slideAboutMeRight()' /><img class='drop_shadow' src='images/drop_shadow.png' />";
	fetch("content", "gallery.html");
}

function slideGalleryLeft() {
	document.getElementById("right_preview").innerHTML =
		"<img src='images/resume_preview.png' onclick='slideResumeLeft()' /><img class='drop_shadow' src='images/drop_shadow.png' />";
	document.getElementById("left_preview").innerHTML =
		"<img src='images/about_me_preview.png' onclick='slideAboutMeRight()' /><img class='drop_shadow' src='images/drop_shadow.png' />";
	fetch("content", "gallery.html");
}

function slideAboutMeLeft() {
	document.getElementById("right_preview").innerHTML =
		"<img src='images/gallery_preview.png' onclick='slideGalleryLeft()' /><img class='drop_shadow' src='images/drop_shadow.png' />";
	document.getElementById("left_preview").innerHTML =
		"<img src='images/resume_preview.png' onclick='slideResumeRight()' /><img class='drop_shadow' src='images/drop_shadow.png' />";
	fetch("content", "about_me.html");
}

function slideAboutMeRight() {
	document.getElementById("right_preview").innerHTML =
		"<img src='images/gallery_preview.png' onclick='slideGalleryLeft()' /><img class='drop_shadow' src='images/drop_shadow.png' />";
	document.getElementById("left_preview").innerHTML =
		"<img src='images/resume_preview.png' onclick='slideResumeRight()' /><img class='drop_shadow' src='images/drop_shadow.png' />";
	fetch("content", "about_me.html");
}

function slideResumeRight() {
	document.getElementById("right_preview").innerHTML =
		"<img src='images/about_me_preview.png' onclick='slideAboutMeLeft()' /><img class='drop_shadow' src='images/drop_shadow.png' />";
	document.getElementById("left_preview").innerHTML =
		"<img src='images/gallery_preview.png' onclick='slideGalleryRight()' /><img class='drop_shadow' src='images/drop_shadow.png' />";
	fetch("content", "resume.html");
}

function slideResumeLeft() {
	document.getElementById("left_preview").innerHTML =
		"<img src='images/gallery_preview.png' onclick='slideGalleryRight()' /><img class='drop_shadow' src='images/drop_shadow.png' />";
	document.getElementById("right_preview").innerHTML =
		"<img src='images/about_me_preview.png' onclick='slideAboutMeLeft()' /><img class='drop_shadow' src='images/drop_shadow.png' />";
	fetch("content", "resume.html");
}

function setAbout1() {
	document.getElementById("about_1").innerHTML = "<center>Daniel Hsieh's work is more than just an installation, for it is an environment that nullifies any hesitation to go beyond 'seeing' an artwork.</center>";
}

function setAbout2() {
document.getElementById("about_2").innerHTML = "<center>It is an intimate setting where the five senses revolve around the subject.</center>";
}

function setAbout3() {
document.getElementById("about_3").innerHTML = "<center>It is an escape from one's daily fast paced schedule, and a setting that expands a sliver of a moment in a day in a life.</center>";
}

function setAbout4() {
document.getElementById("about_4").innerHTML = "<center>It is a meditation, where people can reflect upon and release all compressed emotions of their day; becoming an extension of environment that decompresses one's body and soul to art.</center>";
}

