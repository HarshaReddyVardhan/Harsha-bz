$(document).ready(function(){
	
	$.getJSON("/data",function(d){
	$("#name").text(d.name);
	$("#college").text(d.college);
	$("#regno").text(d.regno);
})
})