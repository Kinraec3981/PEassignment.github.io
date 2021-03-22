function myfunction(){
	document.getElementById("first").style.display = "none";
	document.getElementById("second").style.display = "none";
	document.getElementById("third").style.display = "none";
	document.getElementById("fourth").style.display = "none";
	var first = document.getElementById("first").value;
	document.getElementById("day").innerHTML = ("Day: " + first);
	var second = document.getElementById("second").value;
	document.getElementById("meters").innerHTML = ("Meters Run: " + second + " meters");
	var fourth = document.getElementById("fourth").value;
	document.getElementById("success").innerHTML = (fourth);
	document.getElementById("page").style.background = "#add8e6";
	document.getElementById("success").style.display = "block";

	
}
