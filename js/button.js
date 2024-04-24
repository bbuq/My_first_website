var count = 0;
document.getElementById("myButton").onclick = function () {
	count++;
	if (count % 2 == 0) { 
        document.getElementById("demo").innerHTML = "";
	} else {
		var img = document.createElement("img");
        img.src = "image/dog3.jpg";
		img.style.width = "400px";
        img.style.height = "400px";
        document.getElementById("demo").appendChild(img);
	}
}