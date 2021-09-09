function calculateFee() {
	var priceWithFee = document.getElementById("price").value;
	var calculateFee = (3.44*priceWithFee)/100;
	document.getElementById("fee").innerHTML = "Real state agent fee" + calculateFee.toFixed(2) + "euros";
	if(priceWithFee <= 50000){document.getElementById("fee").innerHTML = "Real state agent's fee is 2400.00 euros";}}


