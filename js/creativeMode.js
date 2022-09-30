function toggleCreativeModeMenus(x) {
	var menu;
	var height;
	if (x == 0) {
		menu = document.getElementById("creativeModeStatusBarContainer");
		height = "550px"
	}
	else if (x == 1) {
		menu = document.getElementById("creativeModeCustomDropdownContainer");
		height = "210px"
	}
	else if (x == 2) {
		menu = document.getElementById("creativeModeCustomNotificationContainer");
		height = "260px"
	}
	if (menu.style.maxHeight === "0px") {
		menu.style.maxHeight = height;
		document.getElementById("CreativeModeContainer").style.maxHeight='0px';
	} else {
		menu.style.maxHeight = "0px";
		document.getElementById("CreativeModeContainer").style.maxHeight='450px';
	}
}

function creativeModeChangeCoverage(x) {
	if (x == 1) {
		document.getElementById("coverage1").style.display = "block";	
		document.getElementById("coverage2").style.display = "none";	
		document.getElementById("coverage3").style.display = "none";	
		document.getElementById("coverage4").style.display = "none";
	}
	else if (x == 2) {
		document.getElementById("coverage1").style.display = "none";	
		document.getElementById("coverage2").style.display = "block";	
		document.getElementById("coverage3").style.display = "none";	
		document.getElementById("coverage4").style.display = "none";
	}	
	else if (x == 3) {
		document.getElementById("coverage1").style.display = "none";	
		document.getElementById("coverage2").style.display = "none";	
		document.getElementById("coverage3").style.display = "block";	
		document.getElementById("coverage4").style.display = "none";
	}
	else if (x == 4) {
		document.getElementById("coverage1").style.display = "none";	
		document.getElementById("coverage2").style.display = "none";	
		document.getElementById("coverage3").style.display = "none";	
		document.getElementById("coverage4").style.display = "block";
	}			
}

function creativeModeChangeTime() {
	var x = document.getElementById("creativeModeChangeTimeTextField").value;
	document.getElementById('currentTime').innerHTML = x;
}

function creativeModeChangeBatteryStatus(x) {
	hideBatteries();
	if (x==1) {
		document.getElementById("battery_full").style.display = "block";
	}
	else if (x==2) {
		document.getElementById("battery_34").style.display = "block";
	}
	else if (x==3) {
		document.getElementById("battery_half").style.display = "block";
	}
	else if (x==4) {
		document.getElementById("battery_14").style.display = "block";
	}
	else if (x==5) {
		document.getElementById("battery_low").style.display = "block";
	}
	else if (x==6) {
		document.getElementById("battery_34_charging").style.display = "block";
	}
	else if (x==7) {
		document.getElementById("battery_half_charging").style.display = "block";
	}
	else if (x==8) {
		document.getElementById("battery_14_charging").style.display = "block";
	}
	else if (x==9) {
		document.getElementById("battery_low_charging").style.display = "block";
	}
}

function hideBatteries() {
		document.getElementById("battery_full").style.display = "none";
		document.getElementById("battery_34").style.display = "none";	
		document.getElementById("battery_half").style.display = "none";	
		document.getElementById("battery_14").style.display = "none";
		document.getElementById("battery_low").style.display = "none";	
		document.getElementById("battery_34_charging").style.display = "none";	
		document.getElementById("battery_half_charging").style.display = "none";	
		document.getElementById("battery_14_charging").style.display = "none";
		document.getElementById("battery_low_charging").style.display = "none";
}

function toggleCustomDropdownMenu() {
	var tickbox = document.getElementById("enableCustomDropdownMenuCheckbox");
	if (tickbox.checked) {
		document.getElementById("customDropdownMenu").style.display= 'block';
	}
	else {
		document.getElementById("customDropdownMenu").style.display= 'none';
	}
}

function setCustomDropdownMenuLabel() {
	var x = document.getElementById("customDropdownMenuLabelTextField").value;
	document.getElementById('customDropdownLabel').innerHTML = x;
	document.getElementById("customDropdownMenu").style.display= 'block';
	document.getElementById("enableCustomDropdownMenuCheckbox").checked = true;
}

function setCustomDropdownMenuValue() {
	var x = document.getElementById("customDropdownMenuValueTextField").value;
	document.getElementById('customDropdownValue').innerHTML = x;
	document.getElementById("customDropdownMenu").style.display= 'block';
	document.getElementById("enableCustomDropdownMenuCheckbox").checked = true;
}
