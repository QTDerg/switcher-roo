function toggleMainMenus(x) {
	// 0 - Advanced Settings
	// 1 - CharViz
	// 2 - Customize App
	var y;
	if (x == 0) 		{ x = document.getElementById("AdvancedSettingsContainer");  y = "1180px"}
	else if (x == 1) 	{ x = document.getElementById("CharVizMenusContainer"); 	 y = "340px"; closeCharvizContainers()}
	else if (x == 2) 	{ x = document.getElementById("CustomizeAppMenusContainer"); y = "520px"; closeContainers()}
	if (x.style.maxHeight === "0px") { x.style.maxHeight = y; } 
	else { x.style.maxHeight = "0px"; }
}

function toggleMenus(x) {
	var menu;
	var height;
	if (x == 0) {
		menu = document.getElementById("addRemoveSlidersContainer");
		height = "620px"
	}
	else if (x == 1) {
		menu = document.getElementById("CustomSlidersContainer");
		height = "500px"
	}
	else if (x == 2) {
		menu = document.getElementById("CustomCheckboxesContainer");
		height = "380px"
	}
	else if (x == 3) {
		menu = document.getElementById("CustomRadioInputsContainer");
		height = "350px"
	}
	else if (x == 4) {
		menu = document.getElementById("CustomSpeciesContainer");
		height = "520px"
	}
	else if (x == 5) {
		menu = document.getElementById("defineInanimateObjectsContainer");
		height = "520px"
	}
	else if (x == 6) {
		menu = document.getElementById("CustomCockTypesContainer");
		height = "570px"
	}
	else if (x == 7) {
		menu = document.getElementById("renamePresetsContainer");
		height = "630px"
	}
	else if (x == 8) {
		menu = document.getElementById("batteryDrainOptionsContainer");
		height = "400px"
	}
	else if (x == 9) {
		var isEnabled = localStorage.getItem("Third_Sex_Enabled");
		if (isEnabled === "Yes") {
			menu = document.getElementById("ThirdSexContainer");
			height = "150px"
		}
		else {
			return;
		}
	}
	else if (x == 10) {
		var isEnabled = localStorage.getItem("Creative_Mode_Enabled");
		if (isEnabled === "Yes") {
			menu = document.getElementById("CreativeModeContainer");
			height = "450px"
		}
		else {
			return;
		}
	}
	if (menu.style.maxHeight === "0px") {
		menu.style.maxHeight = height;
		document.getElementById("CustomizeAppMenusContainer").style.maxHeight='0px'
	} else {
		menu.style.maxHeight = "0px";
		document.getElementById("CustomizeAppMenusContainer").style.maxHeight='520px'
	}
}

function menuNavigation(x, y, z) {
	document.getElementById(x).style.maxHeight = "0px";
	document.getElementById(y).style.maxHeight = z + "px"
}

function menuNavigation2 (x, y, z, a, b) {
	// x - Show/Hide menu // y - Which menu // z - Set menu height
	if (x == "Show") {
		document.getElementById(y).style.maxHeight = z + "px"
	}
	else {
		document.getElementById(y).style.maxHeight = "0px";
	}
	// a - Show/Hide button	// b - Which button
	if (a == "Show") {
		document.getElementById(b).style.padding='10px';
		document.getElementById(b).style.border="2px solid #59568f";
		document.getElementById(b).style.fontSize='26px';
		document.getElementById(b).style.marginTop='5px';
	}
	else {
		document.getElementById(b).style.padding='0px';
		document.getElementById(b).style.border='0';
		document.getElementById(b).style.fontSize='0px';
		document.getElementById(b).style.marginTop='0px';
	}
}

function menuNavigation3(x, y) {
	document.getElementById(x).style.display = "none";
	document.getElementById(y).style.display = "block"
}

function toggleButton(x, y) {
	// x - Show/Hide button
	// y - Which button
	if (x == "Show") {
		document.getElementById(y).style.padding='10px';
		document.getElementById(y).style.border="2px solid #59568f";
		document.getElementById(y).style.fontSize='26px';
		document.getElementById(y).style.marginTop='5px';
	}
	else {
		document.getElementById(y).style.padding='0px';
		document.getElementById(y).style.border='0';
		document.getElementById(y).style.fontSize='0px';
		document.getElementById(y).style.marginTop='0px';
	}
}

function closeContainers() {
	document.getElementById("addRemoveSlidersContainer").style.maxHeight='0px';
	document.getElementById("CustomSlidersContainer").style.maxHeight='0px';
	document.getElementById("CustomCheckboxesContainer").style.maxHeight='0px';
	document.getElementById("CustomRadioInputsContainer").style.maxHeight='0px';
	document.getElementById("CustomSpeciesContainer").style.maxHeight='0px';
	document.getElementById("defineInanimateObjectsContainer").style.maxHeight='0px';
	document.getElementById("CustomCockTypesContainer").style.maxHeight='0px';
	document.getElementById("renamePresetsContainer").style.maxHeight='0px';
	document.getElementById("batteryDrainOptionsContainer").style.maxHeight='0px';
	document.getElementById("ThirdSexContainer").style.maxHeight='0px';
	document.getElementById("CreativeModeContainer").style.maxHeight='0px';
	document.getElementById("creativeModeStatusBarContainer").style.maxHeight='0px';
	document.getElementById("creativeModeCustomDropdownContainer").style.maxHeight='0px';
	document.getElementById("creativeModeCustomNotificationContainer").style.maxHeight='0px';
}

function toggleFeedbackMenu() {
	var x = document.getElementById("feedback");
	if (x.style.maxHeight === "0px") {
		x.style.borderTop = "2px solid #807F97";
		x.style.maxHeight = "300px";
		x.style.marginTop = "10px";
	} else {
		x.style.borderTop = "0";
		x.style.maxHeight = "0px";
		x.style.marginTop = "0px";
	}
}

function showCredits() {
	var c = document.getElementById("credits");
	c.style.borderTop = "2px solid #807F97";
	c.style.maxHeight = "375px";
	c.style.marginTop = "10px";
	var showCreditsButton = document.getElementById("showCreditsButton");
	showCreditsButton.style.padding = "0px";
	showCreditsButton.style.border = "0";
	showCreditsButton.style.fontSize = "0px";
	showCreditsButton.style.marginTop = "0px";
	var hideCreditsButton = document.getElementById("hideCreditsButton");
	hideCreditsButton.style.padding = "10px";
	hideCreditsButton.style.border = "2px solid #59568f";
	hideCreditsButton.style.fontSize = "26px";
	hideCreditsButton.style.marginTop = "5px";
}

function hideCredits() {
	var c = document.getElementById("credits");
	c.style.borderTop = "0";
	c.style.maxHeight = "0px";
	c.style.marginTop = "0px";
	var hideCreditsButton = document.getElementById("hideCreditsButton");
	hideCreditsButton.style.padding = "0px";
	hideCreditsButton.style.border = "0";
	hideCreditsButton.style.fontSize = "0px";
	hideCreditsButton.style.marginTop = "0px";
	var showCreditsButton = document.getElementById("showCreditsButton");
	showCreditsButton.style.padding = "10px";
	showCreditsButton.style.border = "2px solid #59568f";
	showCreditsButton.style.fontSize = "26px";
	showCreditsButton.style.marginTop = "5px";
}
	
function setContainersHeightToZero() {
	document.getElementById("AdvancedSettingsContainer").style.maxHeight='0px';
	document.getElementById("addRemoveSlidersContainer").style.maxHeight='0px';
	document.getElementById("addRemoveSlidersContainer").style.borderBottom='0';
	document.getElementById("CustomSlidersContainer").style.maxHeight='0px';
	document.getElementById("CustomCheckboxesContainer").style.maxHeight='0px';
	document.getElementById("CustomRadioInputsContainer").style.maxHeight='0px';
	document.getElementById("CustomSpeciesContainer").style.maxHeight='0px';
	document.getElementById("defineInanimateObjectsContainer").style.maxHeight='0px';
	document.getElementById("CustomCockTypesContainer").style.maxHeight='0px';
	document.getElementById("ThirdSexContainer").style.maxHeight='0px';
	document.getElementById("renamePresetsContainer").style.maxHeight='0px';
	document.getElementById("batteryDrainOptionsContainer").style.maxHeight='0px';
	document.getElementById("creativeModeStatusBarContainer").style.maxHeight='0px';
	document.getElementById("creativeModeCustomNotificationContainer").style.maxHeight='0px';
	document.getElementById("creativeModeCustomDropdownContainer").style.maxHeight='0px';
	document.getElementById("charVizCharacterColorsContainer").style.maxHeight='0px';
	document.getElementById("charVizClothingContainer").style.maxHeight='0px';
	document.getElementById("charVizClothingColorsContainer").style.maxHeight='0px';
	document.getElementById("charVizOptionsContainer").style.maxHeight='0px';
	document.getElementById("charVizCreditsContainer").style.maxHeight='0px';
	document.getElementById("charVizReadmeContainer").style.maxHeight='0px';
	document.getElementById("charVizPickerContainer").style.maxHeight='0px';
	var c = document.getElementById("feedback");
	c.style.borderTop = "0";
	c.style.maxHeight = "0px";
	c.style.marginTop = "0px";
}
	
function changeCoverageWait() {
	setTimeout(changeCoverage, 20000);
}

function changeCoverage() {
	var isCMon = localStorage.getItem("Creative_Mode_Enabled");
	if (isCMon === "Yes") {
		setTimeout(changeCoverage, 20000);
	}
	else {
		var coverage = Math.floor(Math.random() * 100) + 1;
		
		var x;
		for (x = 1; x < 5; x++) {
			document.getElementById("coverage" + x).style.display = "none";
		}
		
		if (coverage <= 5) {
			document.getElementById("coverage1").style.display = "block";
			setTimeout(changeCoverage, 20000);
		}
		else if (coverage >= 6 && coverage <=14) {
			document.getElementById("coverage2").style.display = "block";
			setTimeout(changeCoverage, 20000);
		}
		else if (coverage >= 15 && coverage <=29) {
			document.getElementById("coverage3").style.display = "block";
			setTimeout(changeCoverage, 20000);
		}
		else if (coverage >= 30) {
			document.getElementById("coverage4").style.display = "block";
			setTimeout(changeCoverage, 20000);
		}
	}
}

function currentTime() {
	var isCMon = localStorage.getItem("Creative_Mode_Enabled");
	if (isCMon === "Yes") {
		setTimeout(currentTime, 1000);
	}
	else {
		var isBatteryLow = document.getElementById("battery_low");
		if (isBatteryLow.style.display === "block") {
			document.getElementById('currentTime').innerHTML = "Charge battery!";
			setTimeout(currentTime, 1000);
		}
		else {
			var date = new Date();
			var hours = date.getHours();
			var minutes = date.getMinutes();
			var ampm = hours >= 12 ? 'PM' : 'AM';
			hours = hours % 12;
			hours = hours ? hours : 12; // the hour '0' should be '12'
			minutes = minutes < 10 ? '0'+minutes : minutes;
			var strTime = hours + ':' + minutes + ' ' + ampm;
			document.getElementById('currentTime').innerHTML = strTime;
			setTimeout(currentTime, 1000);
		}
	}
}
	
function disableBatteryFuntion() {
	var tickbox = document.getElementById("disableBatteryCheckbox");
	if (tickbox.checked) {
		tickbox = "Yes"
	}
	else {
		tickbox = "No"
	}
	localStorage.setItem("Battery_Disabled", tickbox);
}

function displayBatteryDrainSettings() {
	var chance = localStorage.getItem("Battery_Drain_Error_Chance");
	var interval = localStorage.getItem("Battery_Drain_Error_Interval");
	if (chance == null) { chance = 100; }
	if (interval != null) { interval = interval / 1000; }
	if (interval == null) { interval = 20; }
	document.getElementById('batteryDrainMessage').innerHTML = "When battery is low there is 3 in " + chance + " chance every " + interval + " seconds that error will occur.";
}

function batteryDrainAdjustErrorChance() {
	var x = document.getElementById("batteryDrainAdjustErrorChanceTextField").value;
	localStorage.setItem("Battery_Drain_Error_Chance", x);
	displayBatteryDrainSettings();
}

function batteryDrainAdjustErrorInterval() {
	var x = document.getElementById("batteryDrainAdjustErrorIntervalTextField").value;
	x = x * 1000;
	localStorage.setItem("Battery_Drain_Error_Interval", x);
	displayBatteryDrainSettings();
}

function batteryDrainReset() {
	localStorage.setItem("Battery_Drain_Error_Chance", 100);
	localStorage.setItem("Battery_Drain_Error_Interval", 20000);
	displayBatteryDrainSettings();
}

function batteryDrain(x) {
	var isCreativeModeEnabled = localStorage.getItem("Creative_Mode_Enabled");
	var isBatteryDrainingDisabled = localStorage.getItem("Battery_Disabled");
	var depletingInterval = localStorage.getItem("Battery_Depleting_Interval");
	var chargingInterval = localStorage.getItem("Battery_Charging_Interval");
	
	if (depletingInterval == null) 	{ depletingInterval = 40000 }
	if (chargingInterval == null) 	{ chargingInterval = 20000 	}
	
	if (isCreativeModeEnabled === "Yes" || isBatteryDrainingDisabled === "Yes") {
		setTimeout(batteryDrain, depletingInterval, x)
	}
	else {
		// 0-5 - Battery depleting
		// 0 - full (wait 40 seconds)
		// 1 - full -> 3/4
		// 2 - 3/4 -> half
		// 3 - half -> 1/4
		// 4 - 1/4 -> low
		// 5-9 - Battery charging
		// 5 - low (start charging)
		// 6 - low -> 1/4
		// 7 - 1/4 -> half
		// 8 - half -> 3/4
		// 9 - 3/4 -> full
		if (x == 0) { setTimeout(batteryDrain, depletingInterval, 1); }
		else if (x == 1) {
			document.getElementById("battery_full").style.display = "none";
			document.getElementById("battery_34").style.display = "block";
			setTimeout(batteryDrain, depletingInterval, 2);
		}
		else if (x == 2) {
			document.getElementById("battery_34").style.display = "none";
			document.getElementById("battery_half").style.display = "block";
			setTimeout(batteryDrain, depletingInterval, 3);
		}
		else if (x == 3) {
			document.getElementById("battery_half").style.display = "none";
			document.getElementById("battery_14").style.display = "block";
			setTimeout(batteryDrain, depletingInterval, 4);
		}
		else if (x == 4) {
			document.getElementById("battery_14").style.display = "none";
			document.getElementById("battery_low").style.display = "block";
			lowBatteryWait(); // Display message about low battery and wait 20 seconds before it starts giving errors
		}
		else if (x == 5) {
			document.getElementById("battery_low").style.display = "none";
			document.getElementById("battery_low_charging").style.display = "block";
			setTimeout(batteryDrain, chargingInterval, 6);
		}
		else if (x == 6) {
			document.getElementById("battery_low_charging").style.display = "none";
			document.getElementById("battery_14_charging").style.display = "block";
			setTimeout(batteryDrain, chargingInterval, 7);
		}
		else if (x == 7) {
			document.getElementById("battery_14_charging").style.display = "none";
			document.getElementById("battery_half_charging").style.display = "block";
			setTimeout(batteryDrain, chargingInterval, 8);
		}
		else if (x == 8) {
			document.getElementById("battery_half_charging").style.display = "none";
			document.getElementById("battery_34_charging").style.display = "block";
			setTimeout(batteryDrain, chargingInterval, 9);
		}
		else if (x == 9) {
			document.getElementById("battery_34_charging").style.display = "none";
			document.getElementById("battery_full").style.display = "block";
			setTimeout(batteryDrain, chargingInterval, 0);
		}
	}
}

function batteryCharge() {
	// Start charging battery
	var isCMon = localStorage.getItem("Creative_Mode_Enabled");
	if (isCMon === "Yes") {
		return;
	}
	else {
		var doesBatteryNeedCharging = document.getElementById("battery_low");
		if (doesBatteryNeedCharging.style.display === "none"){
			return
		}
		else {
			batteryDrain(5)
		}
	}
}

function lowBatteryWait() {
	lowBatteryMessage();
	setTimeout(errorLowBattery, 20000);
}

function errorLowBattery() {
	var areAdminPermsOn = document.getElementById("adminPermsText");
	if (areAdminPermsOn.style.display === "none"){
		var isBatteryLow = document.getElementById("battery_low");
		if (isBatteryLow.style.display === "block") {
			var chance = localStorage.getItem("Battery_Drain_Error_Chance");
			var interval = localStorage.getItem("Battery_Drain_Error_Interval");
			if (chance == null) { chance = 100; }
			if (interval != null) { interval = interval / 1000; }
			if (interval == null) { interval = 20000; }
			var rng = Math.floor(Math.random() * chance) + 1;
				if (rng == 1) {
				remoteLoginError();
				setTimeout(errorLowBattery, interval);
			}
				else if (rng == 2) {
				error69();
				setTimeout(errorLowBattery, interval);
			}
				else if (rng == 3) {
				error621();
				setTimeout(errorLowBattery, interval);
			}
				else {
				setTimeout(errorLowBattery, interval);
			}
		}
		else {
			return;
		}
	}
	else {
			return;
		}	
}

function showSecondSliderHandle() {
	document.getElementById("secondSliderHandleContainer").style.display = "block";	
	document.getElementById("secondSliderHandle").style.display = "block";	
}

function switchLock() {
	var lock = document.getElementById("lockClosed");
	if (lock.style.display === "block") {
		openLockStage1();
	}
	else {
		closeLock();
	}
}

function openLockStage1() {
	var enabled = localStorage.getItem("Lock_Settings_Password_Enabled");
	if (enabled === "Yes") {
		document.getElementById("lockClosed").style.display='none'; 
		document.getElementById("lockSettings").style.display='none'; 
		document.getElementById("lockSettingsPasswordAndButtonContainer").style.display='block'; 
		document.getElementById('processingText').style.color = "#FFFFFF";
		document.getElementById('processingText').innerHTML = "Please input password!";
		document.getElementById("passwordTextFieldOpenLock").value = "";
		document.getElementById("passwordTextFieldOpenLock").focus();
	}
	else {
		openLockStage3();
	}	
}

function openLockStage2() {
	var currentPassword = localStorage.getItem("Current_Password");
	var currentPasswordCheck = document.getElementById("passwordTextFieldOpenLock").value;
	if (currentPassword === currentPasswordCheck) {
		openLockStage3();
		document.getElementById('processingText').innerHTML = "Password OK! Settings unlocked!";
		document.getElementById('processingText').style.color = "#4EFF45";
		document.getElementById("lockOpen").style.display='block'; 
		document.getElementById("lockSettings").style.display='block'; 
		document.getElementById("lockSettingsPasswordAndButtonContainer").style.display='none'; 
		setTimeout(hidePasswordMessage, 3000);
	}
	else {
		document.getElementById('processingText').innerHTML = "Password invalid!";
		document.getElementById('processingText').style.color = "#FF4550";
		document.getElementById("lockClosed").style.display='block'; 
		document.getElementById("lockSettings").style.display='block'; 
		document.getElementById("lockSettingsPasswordAndButtonContainer").style.display='none'; 
		setTimeout(hidePasswordMessage, 3000);
	}
}

function hidePasswordMessage() {
	var x = document.getElementById("lockSettingsPasswordAndButtonContainer");
	if (x.style.display === "block") {
		return;
	}
	else {
		var processingAnimAlwaysOn = localStorage.getItem("Always_Show_Processing_Animation");
		if (processingAnimAlwaysOn === "Yes") {
			document.getElementById('processingText').innerHTML = "Processing...";	
		}
		else {
			document.getElementById('processingText').innerHTML = "&nbsp;";			
		}
		document.getElementById('processingText').style.color = "#FFFFFF";
	}
}

function openLockStage3() {
	document.getElementById("lockOpen").style.display='block'; 
	document.getElementById("lockClosed").style.display='none'; 
	mySlider.enable();
	mySlider2.enable();
	mySlider3.enable();
	mySlider4.enable();
	mySlider5.enable();
	mySlider6.enable();
	mySlider7.enable();
	mySlider8.enable();
	mySlider9.enable();
	mySlider10.enable();
	mySlider11.enable();
	mySlider12.enable();
	mySlider13.enable();
	mySlider14.enable();
	mySlider15.enable();
	mySlider16.enable();
	mySlider20.enable();
	mySlider23.enable();
	CustomSliderNo1.enable();
	CustomSliderNo2.enable();
	CustomSliderNo3.enable();
	CustomSliderNo4.enable();
	CustomSliderNo5.enable();
	CustomSliderNo6.enable();
	CustomSliderNo7.enable();
	CustomSliderNo8.enable();
	CustomSliderNo9.enable();
	CustomSliderNo10.enable();
	document.getElementById("radiobuttonMale").disabled = false;
	document.getElementById("radiobuttonFemale").disabled = false;
	document.getElementById("radiobuttonOther").disabled = false;
	document.getElementById("adaptClothingCheckbox").disabled = false;
	document.getElementById("pregnancyLockCheckbox").disabled = false;
	document.getElementById("genitalsPenisCheckbox").disabled = false;
	document.getElementById("genitalsVaginaCheckbox").disabled = false;
	var x;
	for (x = 1; x < 4; x++) { // Enable custom checkboxes and radio inputs
		document.getElementById("CC" + x + "value1Checkbox").disabled = false;
		document.getElementById("CC" + x + "value2Checkbox").disabled = false;
		document.getElementById("radiobuttonCustom" + x + "Value1").disabled = false;
		document.getElementById("radiobuttonCustom" + x + "Value2").disabled = false;
	}
	localStorage.setItem("Settings_Locked", "No");
	changeOptionsAppearanceToUnlocked();
}

function closeLock() {
	document.getElementById("lockOpen").style.display='none';
	document.getElementById("lockClosed").style.display='block';
	mySlider.disable();
	mySlider2.disable();
	mySlider3.disable();
	mySlider4.disable();
	mySlider5.disable();
	mySlider6.disable();
	mySlider7.disable();
	mySlider8.disable();
	mySlider9.disable();
	mySlider10.disable();
	mySlider11.disable();
	mySlider12.disable();
	mySlider13.disable();
	mySlider14.disable();
	mySlider15.disable();
	mySlider16.disable();
	mySlider20.disable();
	mySlider23.disable();
	CustomSliderNo1.disable();
	CustomSliderNo2.disable();
	CustomSliderNo3.disable();
	CustomSliderNo4.disable();
	CustomSliderNo5.disable();
	CustomSliderNo6.disable();
	CustomSliderNo7.disable();
	CustomSliderNo8.disable();
	CustomSliderNo9.disable();
	CustomSliderNo10.disable();
	document.getElementById("radiobuttonMale").disabled = true;
	document.getElementById("radiobuttonFemale").disabled = true;
	document.getElementById("radiobuttonOther").disabled = true;
	document.getElementById("adaptClothingCheckbox").disabled = true;
	document.getElementById("pregnancyLockCheckbox").disabled = true;
	document.getElementById("genitalsPenisCheckbox").disabled = true;
	document.getElementById("genitalsVaginaCheckbox").disabled = true;
	var x;
	for (x = 1; x < 4; x++) { // Disable custom checkboxes and radio inputs
		document.getElementById("CC" + x + "value1Checkbox").disabled = true;
		document.getElementById("CC" + x + "value2Checkbox").disabled = true;
		document.getElementById("radiobuttonCustom" + x + "Value1").disabled = true;
		document.getElementById("radiobuttonCustom" + x + "Value2").disabled = true;
	}
	localStorage.setItem("Settings_Locked", "Yes");
	changeOptionsAppearanceToLocked();
}

function changeOptionsAppearanceToLocked() {
	var changeAppearance = localStorage.getItem("Change_Options_Appearance_When_App_Locked");
	if (changeAppearance != "No") {
		document.getElementById("speciesCurrentContainer").style.backgroundColor = '#282640';
		document.getElementById("inanimateObjectsCurrentContainer").style.backgroundColor = '#282640';
		document.getElementById("cockTypeCurrentContainer").style.backgroundColor = '#282640';
		document.getElementById("speciesCurrentContainer").style.cursor = 'not-allowed';
		document.getElementById("inanimateObjectsCurrentContainer").style.cursor = 'not-allowed';
		document.getElementById("cockTypeCurrentContainer").style.cursor = 'not-allowed';
		document.getElementById("adaptClothingContainer").style.cursor = 'not-allowed';
		document.getElementById("genitalsPenisContainer").style.cursor = 'not-allowed';
		document.getElementById("genitalsVaginaContainer").style.cursor = 'not-allowed';
		document.getElementById("RBMaleContainer").style.cursor = 'not-allowed';
		document.getElementById("RBFemaleContainer").style.cursor = 'not-allowed';
		document.getElementById("RBOtherContainer").style.cursor = 'not-allowed';
		var x;
		for (x = 1; x < 4; x++) {
			document.getElementById("CC" + x + "value1Container").style.cursor = 'not-allowed';
			document.getElementById("CC" + x + "value2Container").style.cursor = 'not-allowed';
			document.getElementById("CRI" + x + "Container21").style.cursor = 'not-allowed';
			document.getElementById("CRI" + x + "Container22").style.cursor = 'not-allowed';
		}
		document.getElementById("speciesSearch").style.cursor = 'not-allowed';
		document.getElementById("inanimateObjectsSearch").style.cursor = 'not-allowed';
		document.getElementById("cockTypeSearch").style.cursor = 'not-allowed';		
		var areAdminPermsOn = document.getElementById("adminPermsText");
		if (areAdminPermsOn.style.display === "none"){
			document.getElementById('defaultcss').href='css/dhtmlxslider.css';
		}
		else {
			document.getElementById('defaultcss').href='css/admindhtmlxslider.css';
		}
	}
	else {
		var areAdminPermsOn = document.getElementById("adminPermsText");
		if (areAdminPermsOn.style.display === "none"){
			document.getElementById('defaultcss').href='css/dhtmlxslider_alt.css';
		}
		else {
			document.getElementById('defaultcss').href='css/admindhtmlxslider_alt.css';
		}
	}
}

function changeOptionsAppearanceToUnlocked() {
	var changeAppearance = localStorage.getItem("Change_Options_Appearance_When_App_Locked");
	if (changeAppearance === "No") {
		return;
	}
	else {
		document.getElementById("speciesCurrentContainer").style.backgroundColor = '#3b395e';
		document.getElementById("inanimateObjectsCurrentContainer").style.backgroundColor = '#3b395e';
		document.getElementById("cockTypeCurrentContainer").style.backgroundColor = '#3b395e';
		document.getElementById("speciesCurrentContainer").style.cursor = 'pointer';
		document.getElementById("inanimateObjectsCurrentContainer").style.cursor = 'pointer';
		document.getElementById("cockTypeCurrentContainer").style.cursor = 'pointer';
		document.getElementById("adaptClothingContainer").style.cursor = 'pointer';
		document.getElementById("genitalsPenisContainer").style.cursor = 'pointer';
		document.getElementById("genitalsVaginaContainer").style.cursor = 'pointer';
		document.getElementById("RBMaleContainer").style.cursor = 'pointer';
		document.getElementById("RBFemaleContainer").style.cursor = 'pointer';
		document.getElementById("RBOtherContainer").style.cursor = 'pointer';
		var x;
		for (x = 1; x < 4; x++) {
			document.getElementById("CC" + x + "value1Container").style.cursor = 'pointer';
			document.getElementById("CC" + x + "value2Container").style.cursor = 'pointer';
			document.getElementById("CRI" + x + "Container21").style.cursor = 'pointer';
			document.getElementById("CRI" + x + "Container22").style.cursor = 'pointer';
		}
		document.getElementById("speciesSearch").style.cursor = 'pointer';
		document.getElementById("inanimateObjectsSearch").style.cursor = 'pointer';
		document.getElementById("cockTypeSearch").style.cursor = 'pointer';		
	}
}

function lockSettingsOnStartup() {
	var areSettingsLocked = localStorage.getItem("Settings_Locked");
	if (areSettingsLocked === "Yes") {
		closeLock();
	}
	else {
		return;
	}
}

function toggleAppAppearance() {
	var tickbox = document.getElementById("appAppearanceCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		localStorage.setItem("Change_Options_Appearance_When_App_Locked", tickbox);
		var areAdminPermsOn = document.getElementById("adminPermsText");
		if (areAdminPermsOn.style.display === "none"){
			document.getElementById('defaultcss').href='css/dhtmlxslider_alt.css';
		}
		else {
			document.getElementById('defaultcss').href='css/admindhtmlxslider_alt.css';
		}
	}
	else {
		var tickbox = "No"
		localStorage.setItem("Change_Options_Appearance_When_App_Locked", tickbox);
		var areAdminPermsOn = document.getElementById("adminPermsText");
		if (areAdminPermsOn.style.display === "none"){
			document.getElementById('defaultcss').href='css/dhtmlxslider.css';
		}
		else {
			document.getElementById('defaultcss').href='css/admindhtmlxslider.css';
		}
	}
}

function checkAppAppearanceWhenLockedStatusOnStartup() {
	var x = localStorage.getItem("Change_Options_Appearance_When_App_Locked");
	if (x != "No") {
		document.getElementById("appAppearanceCheckbox").checked = true;
	}
	else {
		var areAdminPermsOn = document.getElementById("adminPermsText");
		if (areAdminPermsOn.style.display === "none"){
			document.getElementById('defaultcss').href='css/dhtmlxslider_alt.css';
		}
		else {
			document.getElementById('defaultcss').href='css/admindhtmlxslider_alt.css';
		}
	}
}

function toggleAlwaysShowAnim() {
		var tickbox = document.getElementById("alwaysShowCheckbox");
		if (tickbox.checked) {
			var tickbox = "Yes"
			localStorage.setItem("Always_Show_Processing_Animation", tickbox);
			document.getElementById('processingText').innerHTML = "Processing...";
			document.getElementById("processingAnim").style.display='block';
		}
		else {
			var tickbox = "No"
			localStorage.setItem("Always_Show_Processing_Animation", tickbox);
			document.getElementById('processingText').innerHTML = "";
			document.getElementById("processingAnim").style.display='none';
		}
	}

function showProcessingAnimation() {
		document.getElementById('processingText').innerHTML = "Processing...";
		document.getElementById("processingAnim").style.display='block'; 
		var alwaysShow = localStorage.getItem("Always_Show_Processing_Animation");
		if (alwaysShow == "Yes") {
			return;
		}
		else {		
			var rng = Math.floor(Math.random() * 2500) + 1500;
			setTimeout(hideProcessingAnimation, rng)    
		}
	}

function hideProcessingAnimation() {
		document.getElementById('processingText').innerHTML = "";
		document.getElementById("processingAnim").style.display='none';   
	}

function enterPasswordFunction(){
	document.getElementById("adminbutton").style.padding='0px';
	document.getElementById("adminbutton").style.border='0';
	document.getElementById("adminbutton").style.fontSize='0px';
	document.getElementById("adminbutton").style.marginTop='0px'; 
	document.getElementById("enterPassword").style.maxHeight='140px';
	document.getElementById("enterPassword").style.marginTop='5px'; 
}

function processingPasswordFunction(){
	document.getElementById("enterPassword").style.maxHeight='0px';
	document.getElementById("enterPassword").style.marginTop='0px';
	document.getElementById("processingPasswordDisplay").style.border="2px solid #59568f";
	document.getElementById("processingPasswordDisplay").style.backgroundColor="#282640";
	document.getElementById('processingPasswordDisplay').innerHTML = ">Processing";
	document.getElementById("processingPasswordDisplay").style.display='block';  
	setTimeout(processing1, 250);
}

function processing1() { document.getElementById('processingPasswordDisplay').innerHTML = ">Processing."; setTimeout(processing2, 250)}
function processing2() { document.getElementById('processingPasswordDisplay').innerHTML = ">Processing.."; setTimeout(processing3, 250)}
function processing3() { document.getElementById('processingPasswordDisplay').innerHTML = ">Processing..."; setTimeout(processing4, 250)}
function processing4() { document.getElementById('processingPasswordDisplay').innerHTML = ">Processing...."; setTimeout(processing5, 250)}
function processing5() { document.getElementById('processingPasswordDisplay').innerHTML = ">Processing"; setTimeout(processing6, 250)}
function processing6() { document.getElementById('processingPasswordDisplay').innerHTML = ">Processing."; setTimeout(processing7, 250)}
function processing7() { document.getElementById('processingPasswordDisplay').innerHTML = ">Processing.."; setTimeout(processing8, 250)}
function processing8() { document.getElementById('processingPasswordDisplay').innerHTML = ">Processing..."; setTimeout(processing9, 250)}
function processing9() { document.getElementById('processingPasswordDisplay').innerHTML = ">Processing...."; setTimeout(processing10, 250)}
function processing10() { document.getElementById('processingPasswordDisplay').innerHTML = ">Processing"; setTimeout(processing11, 250)}
function processing11() { document.getElementById('processingPasswordDisplay').innerHTML = ">Processing."; setTimeout(processing12, 250)}
function processing12() { document.getElementById('processingPasswordDisplay').innerHTML = ">Processing.."; setTimeout(adminPasswordCheck, 1000)}

function adminPasswordCheck() {
	var password = document.getElementById("password").value;
		if (password == "OwO") {
			document.getElementById("processingPasswordDisplay").style.border="2px solid #145214";
			document.getElementById("processingPasswordDisplay").style.backgroundColor="#29a329";
			document.getElementById('processingPasswordDisplay').innerHTML = ">Access Granted OwO";
			setTimeout(adminPermsOn, 1500);
		} else {
			document.getElementById("processingPasswordDisplay").style.border="2px solid #b30003";
			document.getElementById("processingPasswordDisplay").style.backgroundColor="#660002";
			document.getElementById('processingPasswordDisplay').innerHTML = ">Access Denied UwU";
			setTimeout(reTry, 2000);
		}
	}

function adminPermsOn() {
		document.getElementById("processingPasswordDisplay").style.display='none';
		document.getElementById('defaultcss').href='css/admindhtmlxslider.css';
		document.getElementById("adminPermsText").style.display='block';  
		localStorage.setItem("Admin_passwd_entered", "Yes");
		localStorage.setItem("Admin_mode_on", "Yes");
		document.getElementById("adminbuttontoggle").style.padding='10px';
		document.getElementById("adminbuttontoggle").style.border="2px solid #b30003";
		document.getElementById("adminbuttontoggle").style.fontSize='26px';
		document.getElementById("adminbuttontoggle").style.marginTop='5px';
	}
	
function toggleAdminMode() {
		if (controlsessionactive === "Yes") {
			conn.send({firstParam: "Toggle_Admin_Mode"});
		}
		var isAdminOn = document.getElementById("adminPermsText");
		if (isAdminOn.style.display === "none") {
			isAdminOn.style.display = "block";			
			localStorage.setItem("Admin_mode_on", "Yes");
			var x = localStorage.getItem("Change_Options_Appearance_When_App_Locked");
			if (x != "No") {
				document.getElementById('defaultcss').href='css/admindhtmlxslider.css';
			}
			else {
				document.getElementById('defaultcss').href='css/admindhtmlxslider_alt.css';
			}
		} else {
			isAdminOn.style.display = "none";			
			localStorage.setItem("Admin_mode_on", "No");
			var x = localStorage.getItem("Change_Options_Appearance_When_App_Locked");
			if (x != "No") {
				document.getElementById('defaultcss').href='css/dhtmlxslider.css';
			}
			else {
				document.getElementById('defaultcss').href='css/dhtmlxslider_alt.css';
			}
		}	
	}

function adminPermsTextOff() {
		document.getElementById('defaultcss').href='css/dhtmlxslider.css';
		document.getElementById("adminPermsText").style.display='none';  
	}
 
function reTry() {
		document.getElementById("processingPasswordDisplay").style.display='none';
		document.getElementById("adminbutton").style.padding='10px';
		document.getElementById("adminbutton").style.border="2px solid #b30003";
		document.getElementById("adminbutton").style.fontSize='26px';
		document.getElementById("adminbutton").style.marginTop='5px';
	}
  
function remoteLoginError() {
		radiobtn = document.getElementById("radiobuttonFemale");
		radiobtn.checked = true;
		radiobtn2 = document.getElementById("radiobuttonMale");
		radiobtn2.checked = false;
		mySlider12.setValue(100);			// Set shy = 100
		mySlider4.setValue(0);				// Set tall = 0
		mySlider10.setValue(100);			// Set submissive = 100
		mySlider.setValue(100);				// Set fluffiness = 100
		closeLock();
		displayNotification(0);
	}
 
function error69() {
		displayNotification(2); 
		closeLock();
	}
	
function error621() {
		document.getElementById("container2").style.display = "none";
		document.getElementById("speciesMenu").style.display = "none";
		document.getElementById("sexMenu").style.display = "none";
		document.getElementById("adaptClothing").style.display= 'none';
		document.getElementById("inanimateObjectsMenu").style.display= 'none';
		document.getElementById("genitalsMenu").style.display= 'none';
		var x;
		for (x = 1; x < 4; x++) { // Custom checkboxes and radio input menus
			document.getElementById("customCheckbox" + x + "Menu").style.display= 'none';
			document.getElementById("customRadioInput" + x + "Menu").style.display= 'none';
		}
		document.getElementById("error621").style.display = "block";
		document.getElementById("processingText").style.display = "none";
		mySlider6.setValue(99);
		mySlider6.disable();
		document.getElementById('defaultcss').href='css/dhtmlxslider_error.css';
		showSecondSliderHandle();
	}

function lowBatteryMessage() {
		var lowBatteryMessageSeen = localStorage.getItem("Low_Battery_Message_Seen");
		if (lowBatteryMessageSeen === "True") {
			return;
		}
		else {
			displayNotification(4);
			localStorage.setItem("Low_Battery_Message_Seen", "True");
		}
	}

function showOptions() {
	document.getElementById("preferences").style.padding='0px';
	document.getElementById("preferences").style.border='0';
	document.getElementById("preferences").style.fontSize='0px';
	document.getElementById("preferences").style.marginTop='0px';
	document.getElementById("goBack").style.padding='10px';
	document.getElementById("goBack").style.border="2px solid #59568f";
	document.getElementById("goBack").style.fontSize='26px';
	document.getElementById("goBack").style.marginTop='5px';
	document.getElementById("optionsList").style.maxHeight='740px';
}
	
function goBackFromOptions() {
	document.getElementById("preferences").style.padding='10px';
	document.getElementById("preferences").style.border="2px solid #59568f";
	document.getElementById("preferences").style.fontSize='26px';
	document.getElementById("preferences").style.marginTop='5px';
	document.getElementById("goBack").style.padding='0px';
	document.getElementById("goBack").style.border='0';
	document.getElementById("goBack").style.fontSize='0px';
	document.getElementById("goBack").style.marginTop='0px';
	document.getElementById("optionsList").style.maxHeight='0';
}

function saveSex(sex) {
	var x;
	if (sex === "Male") {
		localStorage.setItem("Slot0_Sex", sex);
		showProcessingAnimation();
		document.getElementById("showAdvancedSettings4a").style.maxHeight= '60px';
		document.getElementById("showAdvancedSettings4a").style.borderBottom= '2px solid #807F97';
		document.getElementById("showAdvancedSettings4a").style.paddingBottom= '15px'; 
		document.getElementById("showAdvancedSettings4b").style.maxHeight= '0';
		document.getElementById("showAdvancedSettings4b").style.borderBottom= '0';
		document.getElementById("showAdvancedSettings4b").style.paddingBottom= '0';
		showOrHideBreastSizeMaleSlider();
		showOrHideGenitalSizeFemaleSlider();
		x = mySlider9.getValue();
	}
	else if (sex === "Female") {
		localStorage.setItem("Slot0_Sex", sex);
		showProcessingAnimation();
		document.getElementById("showAdvancedSettings4a").style.maxHeight= '0';
		document.getElementById("showAdvancedSettings4a").style.borderBottom= '0';
		document.getElementById("showAdvancedSettings4a").style.paddingBottom= '0';
		document.getElementById("showAdvancedSettings4b").style.maxHeight= '60px';
		document.getElementById("showAdvancedSettings4b").style.borderBottom= '2px solid #807F97';
		document.getElementById("showAdvancedSettings4b").style.paddingBottom= '15px';
		showOrHideGenitalSizeFemaleSlider();
		x = mySlider8.getValue();
	}
	else if (sex === "Other") {
		var sex = document.getElementById("thirdSexValue").innerHTML;
		localStorage.setItem("Slot0_Sex", sex);
		showProcessingAnimation();
		document.getElementById("showAdvancedSettings4a").style.maxHeight= '0';
		document.getElementById("showAdvancedSettings4a").style.borderBottom= '0';
		document.getElementById("showAdvancedSettings4a").style.paddingBottom= '0';
		document.getElementById("showAdvancedSettings4b").style.maxHeight= '60px';
		document.getElementById("showAdvancedSettings4b").style.borderBottom= '2px solid #807F97';
		document.getElementById("showAdvancedSettings4b").style.paddingBottom= '15px';
		document.getElementById("genitalSizeSlider").style.maxHeight= '60px';
		document.getElementById("genitalSizeSlider").style.borderBottom= '2px solid #807F97';
		document.getElementById("genitalSizeSlider").style.paddingBottom= '15px';
		x = mySlider8.getValue();
	}	
	setBreastSizeBodyMorph(x);
}

function MSSErrorChance() {
	var isBatteryLow = document.getElementById("battery_low"); // Battery must be low for error to occur
	if (isBatteryLow.style.display === "block") {
		var areAdminPermsOn = document.getElementById("adminPermsText"); // Admin permissions needs to be disabled
		if (areAdminPermsOn.style.display === "none"){
			var isThirdSexOn = localStorage.getItem("Third_Sex_Enabled"); // Third Sex must be disabled
			if (isThirdSexOn != "Yes") {
				var rng = Math.floor(Math.random() * 20) + 1; // 1 in 20 chance
				if (rng == 7) {
					MSSError();
				}
				else {
					return;
				}
			}
			else {
				return;
			}
		}
		else {
			return;
		}
	}
	else {
		return;
	}
}

function MSSError() {
	document.getElementById("sexMenu").style.display='none';
	document.getElementById("sexMenuError").style.display='block';
	displayNotification(1);
}

function saveCurrentSpecies() {
	var settingSpecies = document.getElementById('speciesChoice').value 
	localStorage.setItem("Slot0_Species", settingSpecies);	 
	processingShowFunctionV2();
}
 
function saveCheckbox() {
	var tickbox = document.getElementById("adaptClothingCheckbox");
	if (tickbox.checked) {
		tickbox = "Yes"
	}
	else {
		tickbox = "No"
	}
	localStorage.setItem("Slot0_AC_Box_Ticked", tickbox);
	showProcessingAnimation()
}

function savePregnancyLockCheckbox() {
	var tickbox = document.getElementById("pregnancyLockCheckbox");
	if (tickbox.checked) {
		tickbox = "Yes"
	}
	else {
		tickbox = "No"
	}
	localStorage.setItem("Slot0_Pregnancy_Lock_Box_Ticked", tickbox);
	showProcessingAnimation()
}

function saveCheckboxGenitalsPenis() {
	var tickbox = document.getElementById("genitalsPenisCheckbox");
	if (tickbox.checked) {
		tickbox = "Yes"
	}
	else {
		tickbox = "No"
	}
	localStorage.setItem("Slot0_Genitals_Menu_Penis_Box_Ticked", tickbox);
	showProcessingAnimation()
}

function saveCheckboxGenitalsVagina() {
	var tickbox = document.getElementById("genitalsVaginaCheckbox");
	if (tickbox.checked) {
		tickbox = "Yes"
	}
	else {
		tickbox = "No"
	}
	localStorage.setItem("Slot0_Genitals_Menu_Vagina_Box_Ticked", tickbox);
	showProcessingAnimation()
}

function saveCheckboxCustom(x,y) {
	var tickbox = document.getElementById("CC" + x + "value" + y + "Checkbox");
	if (tickbox.checked) {
		tickbox = "Yes"
	}
	else {
		tickbox = "No"
	}
	localStorage.setItem("Slot0_Custom_Checkbox" + x + "_Value" + y + "_Ticked", tickbox);
	showProcessingAnimation()
}

function showSaveSlotButtons() {
	document.getElementById("saveSlotButtons").style.marginTop='5px';
	document.getElementById("saveSlotButtons").style.border='3px solid #b30003';
	document.getElementById("saveSlotButtons").style.maxHeight='180px';
	var saveSettingsButton = document.getElementById("saveSettingsButton");
	saveSettingsButton.style.padding = "0px";
	saveSettingsButton.style.border = "0";
	saveSettingsButton.style.fontSize = "0px";
	saveSettingsButton.style.marginTop = "0px";	 
}
 
function hideSaveSlotButtons() {
	document.getElementById("saveSlotButtons").style.marginTop='0';
	document.getElementById("saveSlotButtons").style.border='0px solid transparent';
	document.getElementById("saveSlotButtons").style.maxHeight='0';
	var saveSettingsButton = document.getElementById("saveSettingsButton");
	saveSettingsButton.style.padding = "10px";
	saveSettingsButton.style.border = "2px solid #59568f";
	saveSettingsButton.style.fontSize = "26px";
	saveSettingsButton.style.marginTop = "5px";	
}

function showLoadSlotButtons() {
	document.getElementById("loadSlotButtons").style.marginTop='5px';
	document.getElementById("loadSlotButtons").style.border='3px solid #29a329';
	document.getElementById("loadSlotButtons").style.maxHeight='180px';
	var loadSettingsButton = document.getElementById("loadSettingsButton");
	loadSettingsButton.style.padding = "0px";
	loadSettingsButton.style.border = "0";
	loadSettingsButton.style.fontSize = "0px";
	loadSettingsButton.style.marginTop = "0px";	 
}
 
function hideLoadSlotButtons() {
	document.getElementById("loadSlotButtons").style.marginTop='0';
	document.getElementById("loadSlotButtons").style.border='0px solid transparent';
	document.getElementById("loadSlotButtons").style.maxHeight='0';
	var loadSettingsButton = document.getElementById("loadSettingsButton");
	loadSettingsButton.style.padding = "10px";
	loadSettingsButton.style.border = "2px solid #59568f";
	loadSettingsButton.style.fontSize = "26px";
	loadSettingsButton.style.marginTop = "5px";	
}

function hideLoadedPopup() {
	document.getElementById("settingsLoadedPopup").style.display = "none";	
}

function hideUnblockSettingsError() {
	document.getElementById("unblockSettingsOkayContainer").style.display='none'; 
	document.getElementById("unblockSettingsOkay").style.display='none'; 
	document.getElementById("unblockSettingsMessage").style.display='none'; 
	document.getElementById("errorMessageContainer").style.display='none'; 
}

function loadPreviousState() {
	// Main options
	var Species = localStorage.getItem("Slot0_Species");
	if (Species == null) { Species = "Default" }
	document.getElementById('speciesCurrent').innerHTML = Species;
	
	var Sex = localStorage.getItem("Slot0_Sex");
	if (Sex != null) {
		if (Sex == "Male") {
			document.getElementById("radiobuttonMale").checked = true;
		}
		else if (Sex == "Female") {
			document.getElementById("radiobuttonFemale").checked = true;
		}
		else {
			document.getElementById("radiobuttonOther").checked = true;
		}
	}
	
	var AC_Box_Ticked = localStorage.getItem("Slot0_AC_Box_Ticked");
	if (AC_Box_Ticked == "Yes") {
		document.getElementById("adaptClothingCheckbox").checked = true;
	}
	
	// Sliders
	var bodyType1 = localStorage.getItem("Slot0_Body_Type1");
	var bodyType2 = localStorage.getItem("Slot0_Body_Type2");
	var bodyType3 = localStorage.getItem("Slot0_Body_Type3");
	var hips = localStorage.getItem("Slot0_Hips");
	var genitalSize = localStorage.getItem("Slot0_Genital_Size");
	var fluffiness = localStorage.getItem("Slot0_Fluffiness");
	var libido = localStorage.getItem("Slot0_Libido");
	var domsub = localStorage.getItem("Slot0_Position_Preference");
	var sensitivity = localStorage.getItem("Slot0_Sensitivity");
	var assertiveShy = localStorage.getItem("Slot0_Demeanor");
	var buttSize = localStorage.getItem("Slot0_Butt_Size");
	var bellySize = localStorage.getItem("Slot0_Belly_Size");
	var bellyShape = localStorage.getItem("Slot0_Belly_Shape");
	var intelligence = localStorage.getItem("Slot0_Intelligence");
	var hairLenght = localStorage.getItem("Slot0_Hair_Lenght");
	var fertility = localStorage.getItem("Slot0_Fertility");
	var breastSizeM = localStorage.getItem("Slot0_Breast_Size_Male");
	var breastSizeF = localStorage.getItem("Slot0_Breast_Size_Female");
	
	if (bodyType1 != null) 		{ mySlider6.setValue(bodyType1) 	}
	if (bodyType2 != null) 		{ mySlider5.setValue(bodyType2) 	}
	if (bodyType3 != null) 		{ mySlider4.setValue(bodyType3) 	}
	if (hips != null)	 		{ mySlider3.setValue(hips) 			}
	if (genitalSize != null) 	{ mySlider2.setValue(genitalSize) 	}
	if (fluffiness != null) 	{ mySlider.setValue(fluffiness)		}
	if (libido != null) 		{ mySlider7.setValue(libido)		}
	if (domsub != null) 		{ mySlider10.setValue(domsub)		}
	if (sensitivity != null) 	{ mySlider11.setValue(sensitivity)	}
	if (assertiveShy != null) 	{ mySlider12.setValue(assertiveShy)	}
	if (buttSize != null) 		{ mySlider13.setValue(buttSize) 	}
	if (bellySize != null) 		{ mySlider14.setValue(bellySize)	}
	if (bellyShape != null) 	{ mySlider15.setValue(bellyShape)	}
	if (intelligence != null) 	{ mySlider16.setValue(intelligence)	}
	if (hairLenght != null) 	{ mySlider20.setValue(hairLenght)	}
	if (fertility != null) 		{ mySlider23.setValue(fertility)	}
	if (breastSizeM != null) 	{ mySlider9.setValue(breastSizeM)	}
	if (breastSizeF != null)	{ mySlider8.setValue(breastSizeF)	}

	// Other options
	var cockType = localStorage.getItem("Slot0_Cock_Type");	
	if (cockType == null) { cockType = "Default" }
	document.getElementById('cockTypeCurrent').innerHTML = cockType;
	 
	var batteryDrainDisabled = localStorage.getItem("Battery_Disabled");
	if (batteryDrainDisabled == "No") {
		batteryDrain(0);
	}
	else {
		document.getElementById("disableBatteryCheckbox").checked = true;
	}
	
	var userProvidedAdminPassword = localStorage.getItem("Admin_passwd_entered");
	if (userProvidedAdminPassword == "Yes") {
		document.getElementById("adminbutton").style.display='none'; 
		document.getElementById("adminbuttontoggle").style.padding='10px';
		document.getElementById("adminbuttontoggle").style.border="2px solid #b30003";
		document.getElementById("adminbuttontoggle").style.fontSize='26px';
		document.getElementById("adminbuttontoggle").style.marginTop='5px';
	}
	
	var isAdminModeOn = localStorage.getItem("Admin_mode_on");
	if (isAdminModeOn == "Yes") {
		document.getElementById('defaultcss').href='css/admindhtmlxslider.css';
		document.getElementById("adminPermsText").style.display='block';
	}
	
	var isUsernameButtonHidden = localStorage.getItem("Username_Button_Hidden");
	if (isUsernameButtonHidden == "Yes") {
		document.getElementById("usernameButton").style.padding='0px';
		document.getElementById("usernameButton").style.border='0';
		document.getElementById("usernameButton").style.fontSize='0px';
		document.getElementById("usernameButton").style.marginTop='0px';
		document.getElementById("hideUsernameCheckbox").checked = true;
	}
	
	var alwaysShow = localStorage.getItem("Always_Show_Processing_Animation");
	if (alwaysShow == "Yes") {
		document.getElementById('processingText').innerHTML = "Processing...";
		document.getElementById("processingAnim").style.display='block';
		document.getElementById("alwaysShowCheckbox").checked = true;
	}
	
	var PL_Box_Ticked = localStorage.getItem("Slot0_Pregnancy_Lock_Box_Ticked");
	if (PL_Box_Ticked == "Yes") {
		document.getElementById("pregnancyLockCheckbox").checked = true;
	}
	
	var GP_Box_Ticked = localStorage.getItem("Slot0_Genitals_Menu_Penis_Box_Ticked");
	if (GP_Box_Ticked == "Yes") {
		document.getElementById("genitalsPenisCheckbox").checked = true;
	}
	
	var GV_Box_Ticked = localStorage.getItem("Slot0_Genitals_Menu_Vagina_Box_Ticked");
	if (GV_Box_Ticked == "Yes") {
		document.getElementById("genitalsVaginaCheckbox").checked = true;
	}
	
	if (Sex == "Male") {
		document.getElementById("showAdvancedSettings4a").style.maxHeight = '60px';
		document.getElementById("showAdvancedSettings4a").style.borderBottom = '2px solid #807F97';
		document.getElementById("showAdvancedSettings4a").style.paddingBottom = '15px';
		document.getElementById("showAdvancedSettings4b").style.maxHeight = '0';
		document.getElementById("showAdvancedSettings4b").style.borderBottom = '0';
		document.getElementById("showAdvancedSettings4b").style.paddingBottom = '0';
	}
	else {
		document.getElementById("showAdvancedSettings4b").style.maxHeight = '60px';
		document.getElementById("showAdvancedSettings4b").style.borderBottom = '2px solid #807F97';
		document.getElementById("showAdvancedSettings4b").style.paddingBottom = '15px';
		document.getElementById("showAdvancedSettings4a").style.maxHeight = '0';
		document.getElementById("showAdvancedSettings4a").style.borderBottom = '0';
		document.getElementById("showAdvancedSettings4a").style.paddingBottom = '0';
	}
}

function saveCockType() {
		var cockType = document.getElementById('cockType').value 
		localStorage.setItem("Slot0_Cock_Type", cockType);
	}
	
function isChecked(x) {
	if (x.checked) {x = "Yes"}
	else {x = "No"}
	return x
}

function toggleSlider(x,sliderID) {
	if (x === "Yes") {
		document.getElementById(sliderID).style.maxHeight = '60px';
		document.getElementById(sliderID).style.borderBottom = '2px solid #807F97';
		document.getElementById(sliderID).style.paddingBottom = '15px';
	}
	else {
		document.getElementById(sliderID).style.maxHeight = '0';
		document.getElementById(sliderID).style.borderBottom = '0';
		document.getElementById(sliderID).style.paddingBottom = '0';
	}
}

// TODO // The following functions could be refactored further by deleting this bit - x = isChecked(x); - but variables would need to be converted from "Yes" to "true" and "No" to "false" or else people who used app before would lose their saved slider visibility settings.

function toggleButtSizeSlider() {
	var x = document.getElementById("buttSizeSliderCheckbox");
	x = isChecked(x);
	localStorage.setItem("Butt_Size_Slider_Enabled", x);
	//localStorage.setItem("Butt_Size_Slider_Enabled_Test", x.checked);
	toggleSlider(x,"buttSizeSlider");
}

function toggleBellySizeSlider() {
	var x = document.getElementById("bellySizeSliderCheckbox");
	x = isChecked(x);
	localStorage.setItem("Belly_Size_Slider_Enabled", x);
	toggleSlider(x,"bellySizeSlider");
}

function toggleBellyShapeSlider() {
	var x = document.getElementById("bellyShapeSliderCheckbox");
	x = isChecked(x);
	localStorage.setItem("Belly_Shape_Slider_Enabled", x);
	toggleSlider(x,"bellyShapeSlider");
}

function toggleHipsSlider() {
	var x = document.getElementById("hipsSliderCheckbox");
	x = isChecked(x);
	localStorage.setItem("Hips_Slider_Enabled", x);
	toggleSlider(x,"hipsSlider");
}

function toggleGenitalSizeSlider() {
	var x = document.getElementById("genitalSizeSliderCheckbox");
	x = isChecked(x);
	localStorage.setItem("Genital_Size_Slider_Enabled", x);
	toggleSlider(x,"genitalSizeSlider");
}

function toggleLibidoSlider() {
	var x = document.getElementById("libidoSliderCheckbox");
	x = isChecked(x);
	localStorage.setItem("Libido_Slider_Enabled", x);
	toggleSlider(x,"libidoSlider");
}

function toggleSensitivitySlider() {
	var x = document.getElementById("sensitivitySliderCheckbox");
	x = isChecked(x);
	localStorage.setItem("Sensitivity_Slider_Enabled", x);
	toggleSlider(x,"sensitivitySlider");
}

function toggleDemeanorSlider() {
	var x = document.getElementById("demeanorSliderCheckbox");
	x = isChecked(x);
	localStorage.setItem("Demeanor_Slider_Enabled", x);
	toggleSlider(x,"demeanorSlider");
}

function togglePositionPreferenceSlider() {
	var x = document.getElementById("positionPreferenceSliderCheckbox");
	x = isChecked(x);
	localStorage.setItem("Postion_Pref_Slider_Enabled", x);
	toggleSlider(x,"positionPrefSlider");
}

function toggleIntelligenceSlider() {
	var x = document.getElementById("intelligenceSliderCheckbox");
	x = isChecked(x);
	localStorage.setItem("Intelligence_Slider_Enabled", x);
	toggleSlider(x,"intelligenceSlider");
}

function toggleFluffinessSlider() {
	var x = document.getElementById("fluffinessSliderCheckbox");
	x = isChecked(x);
	localStorage.setItem("Fluffiness_Slider_Enabled", x);
	toggleSlider(x,"fluffinessSlider");
}

function toggleHairLenghtSlider() {
	var x = document.getElementById("hairLenghtSliderCheckbox");
	x = isChecked(x);
	localStorage.setItem("Hair_Lenght_Slider_Enabled", x);
	toggleSlider(x,"hairLenghtSlider");
}

// That's a special case with different maxHeight and no paddingBottom so I'll leave it for now
function toggleFertilitySlider() { 
var tickbox = document.getElementById("fertilitySliderCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("fertilitySlider").style.maxHeight = '98px';
		document.getElementById("fertilitySlider").style.borderBottom = '2px solid #807F97';
	}
	else {
		var tickbox = "No"
		document.getElementById("fertilitySlider").style.maxHeight = '0';
		document.getElementById("fertilitySlider").style.borderBottom = '0';
	}
	localStorage.setItem("Fertility_Slider_Enabled", tickbox);
}

function toggleMascFemSlider() {
	var x = document.getElementById("mascFemCheckbox");
	x = isChecked(x);
	localStorage.setItem("MascFem_Slider_Enabled", x);
	toggleSlider(x,"bodyType1Slider");
}

function toggleThinThiccSlider() {
	var x = document.getElementById("thinThiccCheckbox");
	x = isChecked(x);
	localStorage.setItem("ThinThicc_Slider_Enabled", x);
	toggleSlider(x,"bodyType2Slider");
}

function toggleSmolTallSlider() {
	var x = document.getElementById("smolTallCheckbox");
	x = isChecked(x);
	localStorage.setItem("SmolTall_Slider_Enabled", x);
	toggleSlider(x,"bodyType3Slider");
}

function toggleCockTypeMenu() {
var tickbox = document.getElementById("cockTypeMenuCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("cockTypeMenu").style.display= 'block';
	}
	else {
		var tickbox = "No"
		document.getElementById("cockTypeMenu").style.display= 'none';
	}
	localStorage.setItem("Cock_Type_Menu_Enabled", tickbox);
}

function toggleGenitalsMenu() {
var tickbox = document.getElementById("genitalsCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("genitalsMenu").style.display = 'block';
	}
	else {
		var tickbox = "No"
		document.getElementById("genitalsMenu").style.display = 'none';
	}
	localStorage.setItem("Genitals_Menu_Enabled", tickbox);
}

function toggleSpeciesMenu() {
var tickbox = document.getElementById("speciesCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("speciesMenu").style.display = 'block';
	}
	else {
		var tickbox = "No"
		document.getElementById("speciesMenu").style.display = 'none';
	}
	localStorage.setItem("Species_Menu_Enabled", tickbox);
}

function toggleSexMenu() {
var tickbox = document.getElementById("sexCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("sexMenu").style.display = 'block';
	}
	else {
		var tickbox = "No"
		document.getElementById("sexMenu").style.display = 'none';
	}
	localStorage.setItem("Sex_Menu_Enabled", tickbox);
}

function toggleAdaptClothingCheckbox() {
var tickbox = document.getElementById("toggleAdaptClothingCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("adaptClothing").style.display = 'block';
	}
	else {
		var tickbox = "No"
		document.getElementById("adaptClothing").style.display = 'none';
	}
	localStorage.setItem("AC_Menu_Enabled", tickbox);
}

function loadSliderSettings() { // This function determines if all the options/sliders should be visible or hidden
	var buttSizeSliderEnabled = localStorage.getItem("Butt_Size_Slider_Enabled");
	var bellySizeSliderEnabled = localStorage.getItem("Belly_Size_Slider_Enabled");
	var bellyShapeSliderEnabled = localStorage.getItem("Belly_Shape_Slider_Enabled");
	var hipsSliderEnabled = localStorage.getItem("Hips_Slider_Enabled");
	var genitalSizeSliderEnabled = localStorage.getItem("Genital_Size_Slider_Enabled");
	var cockTypeMenuEnabled = localStorage.getItem("Cock_Type_Menu_Enabled");
	var libidoSliderEnabled = localStorage.getItem("Libido_Slider_Enabled");
	var sensitivitySliderEnabled = localStorage.getItem("Sensitivity_Slider_Enabled");
	var demeanorSliderEnabled = localStorage.getItem("Demeanor_Slider_Enabled");
	var positionPrefSliderEnabled = localStorage.getItem("Postion_Pref_Slider_Enabled");
	var intelligenceSliderEnabled = localStorage.getItem("Intelligence_Slider_Enabled");
	var fluffinessSliderEnabled = localStorage.getItem("Fluffiness_Slider_Enabled");
	var hairLenghtSliderEnabled = localStorage.getItem("Hair_Lenght_Slider_Enabled");
	var fertilitySliderEnabled = localStorage.getItem("Fertility_Slider_Enabled");
	var genitalsMenuEnabled = localStorage.getItem("Genitals_Menu_Enabled");
	var speciesMenuEnabled = localStorage.getItem("Species_Menu_Enabled");
	var sexMenuEnabled = localStorage.getItem("Sex_Menu_Enabled");
	var acMenuEnabled = localStorage.getItem("AC_Menu_Enabled");
	var mascFemSliderEnabled = localStorage.getItem("MascFem_Slider_Enabled");
	var thinThiccSliderEnabled = localStorage.getItem("ThinThicc_Slider_Enabled");
	var smolTallSliderEnabled = localStorage.getItem("SmolTall_Slider_Enabled");
	var inanimateObjectsMenuEnabled = localStorage.getItem("Inanimate_Objects_Enabled");
	
	if (buttSizeSliderEnabled != "No") {// = Null or yes. Enabled on default.
		document.getElementById("buttSizeSliderCheckbox").checked = true;
		document.getElementById("buttSizeSlider").style.maxHeight = '60px';
		document.getElementById("buttSizeSlider").style.borderBottom = '2px solid #807F97';
		document.getElementById("buttSizeSlider").style.paddingBottom = '15px';
	}
	else {
		document.getElementById("buttSizeSliderCheckbox").checked = false;
		document.getElementById("buttSizeSlider").style.maxHeight = '0';
		document.getElementById("buttSizeSlider").style.borderBottom = '0';
		document.getElementById("buttSizeSlider").style.paddingBottom = '0';
	}

	if (bellySizeSliderEnabled != "No") {
		document.getElementById("bellySizeSliderCheckbox").checked = true;
		document.getElementById("bellySizeSlider").style.maxHeight = '60px';
		document.getElementById("bellySizeSlider").style.borderBottom = '2px solid #807F97';
		document.getElementById("bellySizeSlider").style.paddingBottom = '15px';
	}
	else {
		document.getElementById("bellySizeSliderCheckbox").checked = false;
		document.getElementById("bellySizeSlider").style.maxHeight = '0';
		document.getElementById("bellySizeSlider").style.borderBottom = '0';
		document.getElementById("bellySizeSlider").style.paddingBottom = '0';
	}
	
	if (bellyShapeSliderEnabled === "Yes") {// Disabled on default.
		document.getElementById("bellyShapeSliderCheckbox").checked = true;
		document.getElementById("bellyShapeSlider").style.maxHeight = '60px';
		document.getElementById("bellyShapeSlider").style.borderBottom = '2px solid #807F97';
		document.getElementById("bellyShapeSlider").style.paddingBottom = '15px';
	} 
	else {
		document.getElementById("bellyShapeSliderCheckbox").checked = false;
		document.getElementById("bellyShapeSlider").style.maxHeight = '0';
		document.getElementById("bellyShapeSlider").style.borderBottom = '0';
		document.getElementById("bellyShapeSlider").style.paddingBottom = '0';
	}
	
	if (hipsSliderEnabled != "No") {
		document.getElementById("hipsSliderCheckbox").checked = true;
		document.getElementById("hipsSlider").style.maxHeight = '60px';
		document.getElementById("hipsSlider").style.borderBottom = '2px solid #807F97';
		document.getElementById("hipsSlider").style.paddingBottom = '15px';
	}
	else {
		document.getElementById("hipsSliderCheckbox").checked = false;
		document.getElementById("hipsSlider").style.maxHeight = '0';
		document.getElementById("hipsSlider").style.borderBottom = '0';
		document.getElementById("hipsSlider").style.paddingBottom = '0';
	}
	
	if (genitalSizeSliderEnabled != "No") {
		document.getElementById("genitalSizeSliderCheckbox").checked = true;
		document.getElementById("genitalSizeSlider").style.maxHeight = '60px';
		document.getElementById("genitalSizeSlider").style.borderBottom = '2px solid #807F97';
		document.getElementById("genitalSizeSlider").style.paddingBottom = '15px';
	}
	else {
		document.getElementById("genitalSizeSliderCheckbox").checked = false;
		document.getElementById("genitalSizeSlider").style.maxHeight = '0';
		document.getElementById("genitalSizeSlider").style.borderBottom = '0';
		document.getElementById("genitalSizeSlider").style.paddingBottom = '0';
	}
	
	if (cockTypeMenuEnabled === "Yes") {
		document.getElementById("cockTypeMenuCheckbox").checked = true;
		document.getElementById("cockTypeMenu").style.display = 'block';
	}
	else {
		document.getElementById("cockTypeMenuCheckbox").checked = false;
		document.getElementById("cockTypeMenu").style.display = 'none';
	}
	
	if (libidoSliderEnabled === "Yes") {
		document.getElementById("libidoSliderCheckbox").checked = true;
		document.getElementById("libidoSlider").style.maxHeight = '60px';
		document.getElementById("libidoSlider").style.borderBottom = '2px solid #807F97';
		document.getElementById("libidoSlider").style.paddingBottom = '15px';
	}
	else {
		document.getElementById("libidoSliderCheckbox").checked = false;
		document.getElementById("libidoSlider").style.maxHeight = '0';
		document.getElementById("libidoSlider").style.borderBottom = '0';
		document.getElementById("libidoSlider").style.paddingBottom = '0';
	}
	
	if (sensitivitySliderEnabled === "Yes") {
		document.getElementById("sensitivitySliderCheckbox").checked = true;
		document.getElementById("sensitivitySlider").style.maxHeight = '60px';
		document.getElementById("sensitivitySlider").style.borderBottom = '2px solid #807F97';
		document.getElementById("sensitivitySlider").style.paddingBottom = '15px';
	}
	else {
		document.getElementById("sensitivitySliderCheckbox").checked = false;
		document.getElementById("sensitivitySlider").style.maxHeight = '0';
		document.getElementById("sensitivitySlider").style.borderBottom = '0';
		document.getElementById("sensitivitySlider").style.paddingBottom = '0';
	}
	
	if (demeanorSliderEnabled != "No") {
		document.getElementById("demeanorSliderCheckbox").checked = true;
		document.getElementById("demeanorSlider").style.maxHeight = '60px';
		document.getElementById("demeanorSlider").style.borderBottom = '2px solid #807F97';
		document.getElementById("demeanorSlider").style.paddingBottom = '15px';
	}
	else {
		document.getElementById("demeanorSliderCheckbox").checked = false;
		document.getElementById("demeanorSlider").style.maxHeight = '0';
		document.getElementById("demeanorSlider").style.borderBottom = '0';
		document.getElementById("demeanorSlider").style.paddingBottom = '0';
	}
	
	if (positionPrefSliderEnabled != "No") {
		document.getElementById("positionPreferenceSliderCheckbox").checked = true;
		document.getElementById("positionPrefSlider").style.maxHeight = '60px';
		document.getElementById("positionPrefSlider").style.borderBottom = '2px solid #807F97';
		document.getElementById("positionPrefSlider").style.paddingBottom = '15px';
	}
	else {
		document.getElementById("positionPreferenceSliderCheckbox").checked = false;
		document.getElementById("positionPrefSlider").style.maxHeight = '0';
		document.getElementById("positionPrefSlider").style.borderBottom = '0';
		document.getElementById("positionPrefSlider").style.paddingBottom = '0';
	}
	
	if (intelligenceSliderEnabled === "Yes") {
		document.getElementById("intelligenceSliderCheckbox").checked = true;
		document.getElementById("intelligenceSlider").style.maxHeight = '60px';
		document.getElementById("intelligenceSlider").style.borderBottom = '2px solid #807F97';
		document.getElementById("intelligenceSlider").style.paddingBottom = '15px';
	}
	else {
		document.getElementById("intelligenceSliderCheckbox").checked = false;
		document.getElementById("intelligenceSlider").style.maxHeight = '0';
		document.getElementById("intelligenceSlider").style.borderBottom = '0';
		document.getElementById("intelligenceSlider").style.paddingBottom = '0';
	}
	
	if (fluffinessSliderEnabled != "No") {
		document.getElementById("fluffinessSliderCheckbox").checked = true;
		document.getElementById("fluffinessSlider").style.maxHeight = '60px';
		document.getElementById("fluffinessSlider").style.borderBottom = '2px solid #807F97';
		document.getElementById("fluffinessSlider").style.paddingBottom = '15px';
	}
	else {
		document.getElementById("fluffinessSliderCheckbox").checked = false;
		document.getElementById("fluffinessSlider").style.maxHeight = '0';
		document.getElementById("fluffinessSlider").style.borderBottom = '0';
		document.getElementById("fluffinessSlider").style.paddingBottom = '0';
	}
	
	if (hairLenghtSliderEnabled != "No") {
		document.getElementById("hairLenghtSliderCheckbox").checked = true;
		document.getElementById("hairLenghtSlider").style.maxHeight = '60px';
		document.getElementById("hairLenghtSlider").style.borderBottom = '2px solid #807F97';
		document.getElementById("hairLenghtSlider").style.paddingBottom = '15px';
	}
	else {
		document.getElementById("hairLenghtSliderCheckbox").checked = false;
		document.getElementById("hairLenghtSlider").style.maxHeight = '0';
		document.getElementById("hairLenghtSlider").style.borderBottom = '0';
		document.getElementById("hairLenghtSlider").style.paddingBottom = '0';
	}
		
	if (fertilitySliderEnabled === "Yes") {
		document.getElementById("fertilitySliderCheckbox").checked = true;
		document.getElementById("fertilitySlider").style.maxHeight = '98px';
		document.getElementById("fertilitySlider").style.borderBottom = '2px solid #807F97';
	}
	else {
		document.getElementById("fertilitySliderCheckbox").checked = false;
		document.getElementById("fertilitySlider").style.maxHeight = '0';
		document.getElementById("fertilitySlider").style.borderBottom = '0';
	}
	
	if (genitalsMenuEnabled === "Yes") {
		document.getElementById("genitalsCheckbox").checked = true;
		document.getElementById("genitalsMenu").style.display = 'block';
	}
	else {
		document.getElementById("genitalsCheckbox").checked = false;
		document.getElementById("genitalsMenu").style.display = 'none';
	}
	
	if (speciesMenuEnabled === "No") {
		document.getElementById("speciesCheckbox").checked = false;
		document.getElementById("speciesMenu").style.display = 'none';
	}
	else {
		document.getElementById("speciesCheckbox").checked = true;
		document.getElementById("speciesMenu").style.display = 'block';
	}
	
	if (sexMenuEnabled === "No") {
		document.getElementById("sexCheckbox").checked = false;
		document.getElementById("sexMenu").style.display = 'none';
	}
	else {
		document.getElementById("sexCheckbox").checked = true;
		document.getElementById("sexMenu").style.display = 'block';
	}
	
	if (acMenuEnabled === "No") {
		document.getElementById("toggleAdaptClothingCheckbox").checked = false;
		document.getElementById("adaptClothing").style.display = 'none';		
	}
	else {
		document.getElementById("toggleAdaptClothingCheckbox").checked = true;
		document.getElementById("adaptClothing").style.display = 'block';	
	}
	
	if (mascFemSliderEnabled === "No") {
		document.getElementById("mascFemCheckbox").checked = false;
		document.getElementById("bodyType1Slider").style.maxHeight = '0';
		document.getElementById("bodyType1Slider").style.borderBottom = '0';
		document.getElementById("bodyType1Slider").style.paddingBottom = '0';		
	}
	else {
		document.getElementById("mascFemCheckbox").checked = true;
		document.getElementById("bodyType1Slider").style.maxHeight = '60px';
		document.getElementById("bodyType1Slider").style.borderBottom = '2px solid #807F97';
		document.getElementById("bodyType1Slider").style.paddingBottom = '15px';
	}
	
	if (thinThiccSliderEnabled === "No") {
		document.getElementById("thinThiccCheckbox").checked = false;
		document.getElementById("bodyType2Slider").style.maxHeight = '0';
		document.getElementById("bodyType2Slider").style.borderBottom = '0';
		document.getElementById("bodyType2Slider").style.paddingBottom = '0';		
	}
	else {
		document.getElementById("thinThiccCheckbox").checked = true;
		document.getElementById("bodyType2Slider").style.maxHeight = '60px';
		document.getElementById("bodyType2Slider").style.borderBottom = '2px solid #807F97';
		document.getElementById("bodyType2Slider").style.paddingBottom = '15px';
	}
	
	if (smolTallSliderEnabled === "No") {
		document.getElementById("smolTallCheckbox").checked = false;
		document.getElementById("bodyType3Slider").style.maxHeight = '0';
		document.getElementById("bodyType3Slider").style.borderBottom = '0';
		document.getElementById("bodyType3Slider").style.paddingBottom = '0';
	}
	else {
		document.getElementById("smolTallCheckbox").checked = true;
		document.getElementById("bodyType3Slider").style.maxHeight = '60px';
		document.getElementById("bodyType3Slider").style.borderBottom = '2px solid #807F97';
		document.getElementById("bodyType3Slider").style.paddingBottom = '15px';
	}
	
	if (inanimateObjectsMenuEnabled === "Yes") {
		document.getElementById("inanimateObjectsCheckbox").checked = true;	
		document.getElementById("inanimateObjectsMenu").style.display = 'block';
	} 
	else {
		document.getElementById("inanimateObjectsCheckbox").checked = false;
		document.getElementById("inanimateObjectsMenu").style.display = 'none';
	}
}

function visitCounter() {	
	var visitNumber = localStorage.getItem("Visit_Counter");	
	if (visitNumber == null) {		
		var visitNumber = 1;		
		localStorage.setItem("Visit_Counter", visitNumber);
	}
	else {
		visitNumber = parseInt(visitNumber);	
		var visitNumber = visitNumber + 1;	
		localStorage.setItem("Visit_Counter", visitNumber);
	}
}

function visitAdmin() {
	var visitNumber = localStorage.getItem("Visit_Counter");
	visitNumber = parseInt(visitNumber);
	if (visitNumber >= 15) {
		document.getElementById("adminbutton").style.display='none';  
		document.getElementById("adminbuttontoggle").style.padding='10px';
		document.getElementById("adminbuttontoggle").style.border="2px solid #b30003";
		document.getElementById("adminbuttontoggle").style.fontSize='26px';
		document.getElementById("adminbuttontoggle").style.marginTop='5px';
	}
	else {
		return;
	}
}

function lockPresetName(x) {
	var tickbox = document.getElementById("lockPresetName" + x + "Checkbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		localStorage.setItem("Slot" + x + "_Preset_Name_Locked", tickbox);
		document.getElementById("setPresetName" + x + "Button").style.backgroundColor='#424242';
		document.getElementById("setPresetName" + x + "Button").style.border='2px solid #b0b0b0';
		document.getElementById("setPresetName" + x + "Button").style.cursor='not-allowed';
	}
	else {
		var tickbox = "No"
		localStorage.setItem("Slot" + x + "_Preset_Name_Locked", tickbox);
		document.getElementById("setPresetName" + x + "Button").style.backgroundColor='#282640';
		document.getElementById("setPresetName" + x + "Button").style.border='2px solid #59568f';
		document.getElementById("setPresetName" + x + "Button").style.cursor='pointer';
	}
}

function checkLockPresetNameStatus() {
	for (x = 1; x < 6; x++) {
		var presetNameLocked = localStorage.getItem("Slot" + x + "_Preset_Name_Locked");
		if (presetNameLocked === "Yes") {
			document.getElementById("lockPresetName" + x + "Checkbox").checked = true;
			document.getElementById("setPresetName" + x + "Button").style.backgroundColor='#424242';
			document.getElementById("setPresetName" + x + "Button").style.border='2px solid #b0b0b0';
			document.getElementById("setPresetName" + x + "Button").style.cursor='not-allowed';
		}
		else {
			document.getElementById("lockPresetName" + x + "Checkbox").checked = false;
		}
	}
}

function setPresetName(x) {
	if (document.getElementById("lockPresetName" + x + "Checkbox").checked) {
		return;
	}
	else {
		var presetName = document.getElementById("presetName" + x + "TextField").value;
		if (presetName === "") {
			presetNameRedTextField(x);
		}
		else {
			localStorage.setItem("Slot" + x + "_Preset_Name", presetName);
			checkSlots();
		}
	}
}

function presetNameRedTextField(x) {
	document.getElementById("presetName" + x + "TextField").style.background='#b30003';
	document.getElementById("presetName" + x + "TextField").style.border='2px solid #660002';
	document.getElementById("presetName" + x + "TextField").style.transitionDuration='0.2s';
	setTimeout(presetNameRedTextFieldReturnToNormal, 420, x);
}

function presetNameRedTextFieldReturnToNormal(x) {
	document.getElementById("presetName" + x + "TextField").style.background='#59568f';
	document.getElementById("presetName" + x + "TextField").style.border='2px solid #282640';
	document.getElementById("presetName" + x + "TextField").style.transitionDuration='0.75s';
}

function checkSlots() {
	var x;
	for (x = 1; x < 6; x++) {
		var presetName = localStorage.getItem("Slot" + x + "_Preset_Name");
		if (presetName == null) {
			var Species = localStorage.getItem("Slot" + x + "_Species");
			var Sex = localStorage.getItem("Slot" + x + "_Sex");
			if (Species == null) {
				document.getElementById('saveSlot' + x).innerHTML = "Empty Slot";
				document.getElementById('loadSlot' + x).innerHTML = "Empty Slot";
			}
			else {
				document.getElementById('saveSlot' + x).innerHTML = Sex + " " + Species;
				document.getElementById('loadSlot' + x).innerHTML = Sex + " " + Species;
			}
		}
		else {
			document.getElementById('saveSlot' + x).innerHTML = presetName;
			document.getElementById('loadSlot' + x).innerHTML = presetName;
			document.getElementById("renamePresetsSlot" + x + "Message").innerHTML = "Slot " + x + " - " + presetName;
		}
	}
}

function changeUsernameEasterEgg1() {
	document.getElementById("usernameTextField").value = "You're";
	setTimeout(changeUsernameEasterEgg2, 400);
}

function changeUsernameEasterEgg2() {
	document.getElementById("usernameTextField").value = "cute :3";
	setTimeout(changeUsernameEasterEgg3, 200);
}

function changeUsernameEasterEgg3() {
	document.getElementById("usernameTextField").value = "";
	localStorage.setItem("Change_Username_Easter_Egg_Executed", "Yes");
}

function changeUsernameBegin() {
	var x = localStorage.getItem("Change_Username_Easter_Egg_Executed");	
	if (x != "Yes") {
		changeUsernameEasterEgg1();
	}
	document.getElementById("usernameButton").style.padding='0px';
	document.getElementById("usernameButton").style.border='0';
	document.getElementById("usernameButton").style.fontSize='0px';
	document.getElementById("usernameButton").style.marginTop='0px';
	document.getElementById("enterUsernameContainer").style.maxHeight='200px';
	document.getElementById("enterUsernameContainer").style.marginTop='5px';
}

function changeUsername() {
	var username = document.getElementById("usernameTextField").value;
	if (username == "") {
		return;
	}
	else {
		localStorage.setItem("Username", username);
		checkUsername();
	}
}

function clearUsername() {
	localStorage.removeItem('Username');
	checkUsername();
}

function cancelChangeUsername() {
	document.getElementById("usernameButton").style.padding='10px';
	document.getElementById("usernameButton").style.border="2px solid #59568f";
	document.getElementById("usernameButton").style.fontSize='26px';
	document.getElementById("usernameButton").style.marginTop='5px';
	document.getElementById("enterUsernameContainer").style.maxHeight='0px';
	document.getElementById("enterUsernameContainer").style.marginTop='0px';
}

function hideUsernameFuntion() {
	var tickbox = document.getElementById("hideUsernameCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		localStorage.setItem("Username_Button_Hidden", tickbox);
		document.getElementById("usernameButton").style.padding='0px';
		document.getElementById("usernameButton").style.border='0';
		document.getElementById("usernameButton").style.fontSize='0px';
		document.getElementById("usernameButton").style.marginTop='0px';
		document.getElementById("enterUsernameContainer").style.maxHeight='0px';
		document.getElementById("enterUsernameContainer").style.marginTop='0px';
	}
	else {
		var tickbox = "No"
		localStorage.setItem("Username_Button_Hidden", tickbox);
		document.getElementById("usernameButton").style.padding='10px';
		document.getElementById("usernameButton").style.border="2px solid #59568f";
		document.getElementById("usernameButton").style.fontSize='26px';
		document.getElementById("usernameButton").style.marginTop='5px';
	}
}

function hideFeedbackButton() {
	var tickbox = document.getElementById("hideFeedbackCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		localStorage.setItem("Feedback_Button_Hidden", tickbox);
		document.getElementById("toggleFeedbackButton").style.padding='0px';
		document.getElementById("toggleFeedbackButton").style.border='0';
		document.getElementById("toggleFeedbackButton").style.fontSize='0px';
		document.getElementById("toggleFeedbackButton").style.marginTop='0px';
	}
	else {
		var tickbox = "No"
		localStorage.setItem("Feedback_Button_Hidden", tickbox);
		document.getElementById("toggleFeedbackButton").style.padding='10px';
		document.getElementById("toggleFeedbackButton").style.border="2px solid #59568f";
		document.getElementById("toggleFeedbackButton").style.fontSize='26px';
		document.getElementById("toggleFeedbackButton").style.marginTop='5px';
	}
}

function showOrHideFeedbackButton() {
	var yesorno = localStorage.getItem("Feedback_Button_Hidden");
	if (yesorno === "Yes") {
		document.getElementById("toggleFeedbackButton").style.padding='0px';
		document.getElementById("toggleFeedbackButton").style.border='0';
		document.getElementById("toggleFeedbackButton").style.fontSize='0px';
		document.getElementById("toggleFeedbackButton").style.marginTop='0px';
		document.getElementById("hideFeedbackCheckbox").checked = true;		
	}
	else {
		document.getElementById("toggleFeedbackButton").style.padding='10px';
		document.getElementById("toggleFeedbackButton").style.border="2px solid #59568f";
		document.getElementById("toggleFeedbackButton").style.fontSize='26px';
		document.getElementById("toggleFeedbackButton").style.marginTop='5px';
	}
}

function hideLockPasswordButton() {
	var tickbox = document.getElementById("lockPasswordCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		localStorage.setItem("Lock_Password_Button_Hidden", tickbox);
		document.getElementById("lockSettingsPasswordButton").style.padding='0px';
		document.getElementById("lockSettingsPasswordButton").style.border='0';
		document.getElementById("lockSettingsPasswordButton").style.fontSize='0px';
		document.getElementById("lockSettingsPasswordButton").style.marginTop='0px';
	}
	else {
		var tickbox = "No"
		localStorage.setItem("Lock_Password_Button_Hidden", tickbox);
		document.getElementById("lockSettingsPasswordButton").style.padding='10px';
		document.getElementById("lockSettingsPasswordButton").style.border="2px solid #59568f";
		document.getElementById("lockSettingsPasswordButton").style.fontSize='26px';
		document.getElementById("lockSettingsPasswordButton").style.marginTop='5px';
	}
}

function showOrHideLockPasswordButton() {
	var yesorno = localStorage.getItem("Lock_Password_Button_Hidden");
	if (yesorno === "Yes") {
		document.getElementById("lockSettingsPasswordButton").style.padding='0px';
		document.getElementById("lockSettingsPasswordButton").style.border='0';
		document.getElementById("lockSettingsPasswordButton").style.fontSize='0px';
		document.getElementById("lockSettingsPasswordButton").style.marginTop='0px';
		document.getElementById("lockPasswordCheckbox").checked = true;		
	}
	else {
		document.getElementById("lockSettingsPasswordButton").style.padding='10px';
		document.getElementById("lockSettingsPasswordButton").style.border="2px solid #59568f";
		document.getElementById("lockSettingsPasswordButton").style.fontSize='26px';
		document.getElementById("lockSettingsPasswordButton").style.marginTop='5px';
	}
}

function goToChangeAppBGColorOptions() {
	document.getElementById("appBGButton").style.padding='0px';
	document.getElementById("appBGButton").style.border='0';
	document.getElementById("appBGButton").style.fontSize='0px';
	document.getElementById("appBGButton").style.marginTop='0px';
	document.getElementById("changeAppBGColorContainer").style.maxHeight='212px';
	document.getElementById("changeAppBGColorContainer").style.marginTop='5px';
}

function goBackFromChangeAppBGColorOptions() {
	document.getElementById("appBGButton").style.padding='10px';
	document.getElementById("appBGButton").style.border="2px solid #59568f";
	document.getElementById("appBGButton").style.fontSize='26px';
	document.getElementById("appBGButton").style.marginTop='5px';
	document.getElementById("changeAppBGColorContainer").style.maxHeight='0px';
	document.getElementById("changeAppBGColorContainer").style.marginTop='0px';
}

function toggleAppBackgroundButton() {
	var tickbox = document.getElementById("appBackgroundCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		localStorage.setItem("App_Background_Change_Enabled", tickbox);
		document.getElementById("appBGButton").style.padding='10px';
		document.getElementById("appBGButton").style.border="2px solid #59568f";
		document.getElementById("appBGButton").style.fontSize='26px';
		document.getElementById("appBGButton").style.marginTop='5px';

	}
	else {
		var tickbox = "No"
		localStorage.setItem("App_Background_Change_Enabled", tickbox);
		document.getElementById("appBGButton").style.padding='0px';
		document.getElementById("appBGButton").style.border='0';
		document.getElementById("appBGButton").style.fontSize='0px';
		document.getElementById("appBGButton").style.marginTop='0px';
	}
}

function showOrHideAppBackgroundButton() {
	var yesorno = localStorage.getItem("App_Background_Change_Enabled");
	if (yesorno === "Yes") {
		document.getElementById("appBGButton").style.padding='10px';
		document.getElementById("appBGButton").style.border="2px solid #59568f";
		document.getElementById("appBGButton").style.fontSize='26px';
		document.getElementById("appBGButton").style.marginTop='5px';
		document.getElementById("appBackgroundCheckbox").checked = true;		
	}
	else {
		document.getElementById("appBGButton").style.padding='0px';
		document.getElementById("appBGButton").style.border='0';
		document.getElementById("appBGButton").style.fontSize='0px';
		document.getElementById("appBGButton").style.marginTop='0px';
	}
}

function toggleUserGreetings() {
	var tickbox = document.getElementById("hideUGCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		localStorage.setItem("User_Greetings_Disabled", tickbox);
	}
	else {
		var tickbox = "No"
		localStorage.setItem("User_Greetings_Disabled", tickbox);
	}
}

function checkUsername() {
	var username = localStorage.getItem("Username");
	if (username == null) {		
		username = "Empty";
	}
	document.getElementById('currentUsername').innerHTML = "Your username is " + username;
	var swapUsername = localStorage.getItem("Show_Username_Instead_Of_Logout_Text");
	if (swapUsername === "Yes") {
		document.getElementById('logOut').innerHTML = username;
		document.getElementById('logOut').style.cursor = "default";
	}
	else {
		document.getElementById('logOut').innerHTML = "Log out";
		document.getElementById('logOut').style.cursor = "not-allowed";
	}
}

function welcomeUser() {
	var username = localStorage.getItem("Username");
	if (username == null) {		
		return;
	}
	else {
		var userGreetingsDisabled = localStorage.getItem("User_Greetings_Disabled");
		if (userGreetingsDisabled != "Yes") {

			var phrase = Math.floor(Math.random() * 8) + 1;
			if (phrase == 1) {
				document.getElementById('welcomeUserMessage').innerHTML = "Hi," + " " + username;
			}
			if (phrase == 2) {
				document.getElementById('welcomeUserMessage').innerHTML = "Hello," + " " + username;
			}
			if (phrase == 3) {
				document.getElementById('welcomeUserMessage').innerHTML = "Hewwo," + " " + username;
			}
			if (phrase == 4) {
				document.getElementById('welcomeUserMessage').innerHTML = "Good morning," + " " + username;
			}
			if (phrase == 5) {
				document.getElementById('welcomeUserMessage').innerHTML = "Good to see you," + " " + username;
			}
			if (phrase == 6) {
				document.getElementById('welcomeUserMessage').innerHTML = "Nice to see you," + " " + username;
			}
			if (phrase == 7) {
				document.getElementById('welcomeUserMessage').innerHTML = "Have a nice day," + " " + username;
			}
			if (phrase == 8) {
				document.getElementById('welcomeUserMessage').innerHTML = "Hey," + " " + username;
			}
			showWelcomeUserMessage();
		}
		else {
			return;
		}
	}
}

function showWelcomeUserMessage() {
	document.getElementById("currentTime").style.display='none';
	document.getElementById("welcomeUserMessage").style.display='block';
	setTimeout(hideWelcomeUserMessage, 10000);
}

function hideWelcomeUserMessage() {
	document.getElementById("currentTime").style.display='block';
	document.getElementById("welcomeUserMessage").style.display='none';
}

function toggleBreastSizeMaleOption() {
	var tickbox = document.getElementById("showBreastSizeMaleCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		localStorage.setItem("Show_BS_Slider_Male", tickbox);
		showOrHideBreastSizeMaleSlider();
	}
	else {
		var tickbox = "No"
		localStorage.setItem("Show_BS_Slider_Male", tickbox);	
		showOrHideBreastSizeMaleSlider();
	}	
}

function toggleGenitalSizeFemaleOption() {
	var tickbox = document.getElementById("showGenitalSizeFemaleCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		localStorage.setItem("Show_GS_Slider_Female", tickbox);
		showOrHideGenitalSizeFemaleSlider();
	}
	else {
		var tickbox = "No"
		localStorage.setItem("Show_GS_Slider_Female", tickbox);	
		showOrHideGenitalSizeFemaleSlider();
	}	
}

function showOrHideBreastSizeMaleSlider() {
	var show = localStorage.getItem("Show_BS_Slider_Male");
	if (show != "Yes") { // null(default) or "No"
		var Sex = localStorage.getItem("Slot0_Sex");
		if (Sex == "Male") {
			document.getElementById("showAdvancedSettings4a").style.maxHeight= '0';
			document.getElementById("showAdvancedSettings4a").style.borderBottom= '0';
			document.getElementById("showAdvancedSettings4a").style.paddingBottom= '0';
			document.getElementById("showAdvancedSettings4b").style.maxHeight= '0';
			document.getElementById("showAdvancedSettings4b").style.borderBottom= '0';
			document.getElementById("showAdvancedSettings4b").style.paddingBottom= '0';
		}
		else {
			document.getElementById("showAdvancedSettings4a").style.maxHeight= '0';
			document.getElementById("showAdvancedSettings4a").style.borderBottom= '0';
			document.getElementById("showAdvancedSettings4a").style.paddingBottom= '0';
			document.getElementById("showAdvancedSettings4b").style.maxHeight= '60px';
			document.getElementById("showAdvancedSettings4b").style.borderBottom= '2px solid #807F97';
			document.getElementById("showAdvancedSettings4b").style.paddingBottom= '15px';
		}
		document.getElementById("showBreastSizeMaleCheckbox").checked = false;
	}
	else {		
		document.getElementById("showBreastSizeMaleCheckbox").checked = true;
		// show that slider only if male sex is selected
		var isFemaleSelected = document.getElementById("radiobuttonFemale");
		if (isFemaleSelected.checked) {
			return;
		}
		else {
			document.getElementById("showAdvancedSettings4a").style.maxHeight= '60px';
			document.getElementById("showAdvancedSettings4a").style.borderBottom= '2px solid #807F97';
			document.getElementById("showAdvancedSettings4a").style.paddingBottom= '15px';
		}
	}
}

function showOrHideGenitalSizeFemaleSlider() {
	var show = localStorage.getItem("Show_GS_Slider_Female");
	if (show != "Yes") { // null(default) or "No"
		var isFemaleSelected = document.getElementById("radiobuttonFemale");
		if (isFemaleSelected.checked) {
			document.getElementById("genitalSizeSlider").style.maxHeight= '0';
			document.getElementById("genitalSizeSlider").style.borderBottom= '0';
			document.getElementById("genitalSizeSlider").style.paddingBottom= '0';
			document.getElementById("showGenitalSizeFemaleCheckbox").checked = false;
		}
		else {
			var isGenitalSizeSliderEnabled = localStorage.getItem("Genital_Size_Slider_Enabled");
			if (isGenitalSizeSliderEnabled === "Yes")
			{
				document.getElementById("genitalSizeSlider").style.maxHeight= '60px';
				document.getElementById("genitalSizeSlider").style.borderBottom= '2px solid #807F97';
				document.getElementById("genitalSizeSlider").style.paddingBottom= '15px';
			}
			else if (isGenitalSizeSliderEnabled === "No")
			{				
				document.getElementById("genitalSizeSlider").style.maxHeight= '0';
				document.getElementById("genitalSizeSlider").style.borderBottom= '0';
				document.getElementById("genitalSizeSlider").style.paddingBottom= '0';
			}
			else {
				document.getElementById("genitalSizeSlider").style.maxHeight= '60px';
				document.getElementById("genitalSizeSlider").style.borderBottom= '2px solid #807F97';
				document.getElementById("genitalSizeSlider").style.paddingBottom= '15px';
			}
		}
	}
	else {		
		document.getElementById("showGenitalSizeFemaleCheckbox").checked = true;
		document.getElementById("genitalSizeSlider").style.maxHeight= '60px';
		document.getElementById("genitalSizeSlider").style.borderBottom= '2px solid #807F97';
		document.getElementById("genitalSizeSlider").style.paddingBottom= '15px';
	}
}

function goToChangeBGColorOptions() {
	document.getElementById("devMenuOptions").style.maxHeight='0px';
	document.getElementById("changeBGColorOptions").style.maxHeight='500px';
}

function goBackFromChangeBGColorOptions() {
	document.getElementById("changeBGColorOptions").style.maxHeight='0px';
	document.getElementById("devMenuOptions").style.maxHeight='590px';
}

function changeBGDefault() {
	document.body.style.background = '#3b395e';
	localStorage.setItem("Background_Color", '#3b395e');
}

function changeBGWhite() {
	document.body.style.background = '#fff';
	localStorage.setItem("Background_Color", '#fff');
}

function changeBGGray() {
	document.body.style.background = '#222';
	localStorage.setItem("Background_Color", '#222');
}

function changeBGBlack() {
	document.body.style.background = '#000';
	localStorage.setItem("Background_Color", '#000');
}

function changeBGCustom() {
	var bgcolor = document.getElementById("bgColorTextField").value;	
	if (bgcolor == "") {		
		return;
	}
	else {
		localStorage.setItem("Background_Color", bgcolor);
		document.body.style.background = bgcolor;	
	}
}

function setBGColorOnInit() {
	var bgcolor = localStorage.getItem("Background_Color");
	if (bgcolor == null) {		
		return;
	}
	else {
		document.body.style.background = bgcolor;
	}
}

function changeAppBGDefault() {
	document.getElementById("appWidthContainer").style.backgroundColor = '#3b395e';
	localStorage.setItem("App_Background_Color", '#3b395e');
}

function changeAppBGGray() {
	document.getElementById("appWidthContainer").style.backgroundColor = '#222';
	localStorage.setItem("App_Background_Color", '#222');
}

function changeAppBGCustom() {
	var bgcolor = document.getElementById("appBGColorTextField").value;	
	if (bgcolor == "") {		
		return;
	}
	else {
		localStorage.setItem("App_Background_Color", bgcolor);
		document.getElementById("appWidthContainer").style.backgroundColor = bgcolor;
	}
}

function setAppBGColorOnInit() {
	var bgcolor = localStorage.getItem("App_Background_Color");
	if (bgcolor == null) {		
		return;
	}
	else {
		document.getElementById("appWidthContainer").style.backgroundColor = bgcolor;
	}
}

function determineBodyType(Sex, bodyType1) {
	if (Sex == "Male" && bodyType1 >= 85) {
		var Sex = "Femboy";
		return Sex;
	}
	else if (Sex == "Female" && bodyType1 <= 15) {
		var Sex = "Tomboy";
		return Sex;
	}
	else if (Sex == "Male" && bodyType1 <= 84) {
		var Sex = "Male";
		return Sex;
	}
	else if (Sex == "Female" && bodyType1 >= 16) {
		var Sex = "Female";
		return Sex;
	}
	else {
		return Sex;
	}
}

function makeCustomCheckbox(x) {
	var label = document.getElementById("customCheckbox" + x + "Label").value;
	var value1 = document.getElementById("customCheckbox" + x + "Value1").value;
	var value2 = document.getElementById("customCheckbox" + x + "Value2").value;
	
	if (value1 === "") { makeCustomCheckboxError(x); return }
	
	document.getElementById("customCheckbox" + x + "LabelMenu").innerHTML = label;
	document.getElementById("CC" + x + "value1").innerHTML = value1;
	document.getElementById("CC" + x + "value2").innerHTML = value2;
	document.getElementById("customCheckbox" + x + "Menu").style.display= 'block';	
	document.getElementById("customCheckbox" + x + "Checkbox").checked = true;	
	localStorage.setItem("Slot0_Custom_Checkbox" + x + "_Label", label);	
	localStorage.setItem("Slot0_Custom_Checkbox" + x + "_Value1", value1);	
	localStorage.setItem("Slot0_Custom_Checkbox" + x + "_Value2", value2);
	localStorage.setItem("Slot0_Custom_Checkbox" + x + "_Enabled", "Yes");
	
	if (controlsessionactive === "Yes") {
			conn.send({firstParam: "changeCustomCheckbox", secondParam: "Custom" + x + "Label", thirdParam: label});
			conn.send({firstParam: "changeCustomCheckbox", secondParam: "Custom" + x + "Value1", thirdParam: value1});
			conn.send({firstParam: "changeCustomCheckbox", secondParam: "Custom" + x + "Value2", thirdParam: value2});
			conn.send({firstParam: "customCheckboxEnabled", secondParam: x, thirdParam: "Yes"});
			conn.send({firstParam: "customCheckboxEnabled", secondParam: "loadCustomCheckboxes"});
		}
		
	if (value2 === "") {
		document.getElementById("secondCheckboxCC" + x).style.display = "none";
	}
	else if (value2 != "") {
		document.getElementById("secondCheckboxCC" + x).style.display = "block";
	}
		
	if (label === "") {
		document.getElementById("customCheckbox" + x + "Menu").style.height = "40px";
		document.getElementById("customCheckbox" + x + "Menu").style.paddingTop = "8px";
	}
	else {
		document.getElementById("customCheckbox" + x + "Menu").style.height = "60px";
		document.getElementById("customCheckbox" + x + "Menu").style.paddingTop = "0";
	}
	labelLengthCheck("Checkbox")
}

async function makeCustomCheckboxError(x) {
	document.getElementById("customCheckbox" + x + "Value1").style.background='#b30003';
	document.getElementById("customCheckbox" + x + "Value1").style.border='1px solid #660002';
	document.getElementById("customCheckbox" + x + "Value1").style.transitionDuration='0.2s';
	await sleep(1000);
	document.getElementById("customCheckbox" + x + "Value1").style.background='#59568f';
	document.getElementById("customCheckbox" + x + "Value1").style.border='1px solid #282640';
	document.getElementById("customCheckbox" + x + "Value1").style.transitionDuration='0.75s';
}

function toggleCustomCheckbox(x) {
var tickbox = document.getElementById("customCheckbox" + x + "Checkbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("customCheckbox" + x + "Menu").style.display= 'block';
	}
	else {
		var tickbox = "No"
		document.getElementById("customCheckbox" + x + "Menu").style.display= 'none';
	}
	localStorage.setItem("Slot0_Custom_Checkbox" + x + "_Enabled", tickbox);
}

function loadCustomCheckboxes() {
	var x;
	for (x = 1; x < 4; x++) {
		var enabled = localStorage.getItem("Slot0_Custom_Checkbox" + x + "_Enabled");
	
		if (enabled === "Yes") {
			document.getElementById("customCheckbox" + x + "Checkbox").checked = true;
			document.getElementById("customCheckbox" + x + "Menu").style.display= 'block'; 	
		}
		else {	
			document.getElementById("customCheckbox" + x + "Checkbox").checked = false;
			document.getElementById("customCheckbox" + x + "Menu").style.display= 'none';	
		}
		
		var label = localStorage.getItem("Slot0_Custom_Checkbox" + x + "_Label");
		var value1 = localStorage.getItem("Slot0_Custom_Checkbox" + x + "_Value1");
		var value2 = localStorage.getItem("Slot0_Custom_Checkbox" + x + "_Value2");
		var ticked1 = localStorage.getItem("Slot0_Custom_Checkbox" + x + "_Value1_Ticked");
		var ticked2 = localStorage.getItem("Slot0_Custom_Checkbox" + x + "_Value2_Ticked");
		
		document.getElementById("customCheckbox" + x + "LabelMenu").innerHTML = label;
		document.getElementById("CC" + x + "value1").innerHTML = value1;
		document.getElementById("CC" + x + "value2").innerHTML = value2;
		
		if (value2 === "") {
			document.getElementById("secondCheckboxCC" + x).style.display = "none";
		}
		else if (value2 != "") {
			document.getElementById("secondCheckboxCC" + x).style.display = "block";
		}
		
		if (ticked1 === "Yes") {
			document.getElementById("CC" + x + "value1Checkbox").checked = true;
		}
		if (ticked1 === "No" || ticked1 == null) {
			document.getElementById("CC" + x + "value1Checkbox").checked = false;
		}
		if (ticked2 === "Yes") {
			document.getElementById("CC" + x + "value2Checkbox").checked = true;
		}
		if (ticked2 === "No" || ticked2 == null) {
			document.getElementById("CC" + x + "value2Checkbox").checked = false;
		}
		
		if (label === "") {
			document.getElementById("customCheckbox" + x + "Menu").style.height = "40px";
			document.getElementById("customCheckbox" + x + "Menu").style.paddingTop = "8px";
		}
		else {
			document.getElementById("customCheckbox" + x + "Menu").style.height = "60px";
			document.getElementById("customCheckbox" + x + "Menu").style.paddingTop = "0";
		}
	}
	labelLengthCheck("Checkbox")
}

function makeCustomRadioInput(x) {
	var label = document.getElementById("customRadioInput" + x + "LabelTextField").value;
	var value1 = document.getElementById("customRadioInput" + x + "Value1").value;
	var value2 = document.getElementById("customRadioInput" + x + "Value2").value;
	
	if (value1 === "") { makeCustomRadioInputError(x,1); return }
	if (value2 === "") { makeCustomRadioInputError(x,2); return }
	
	document.getElementById("customRadioInput" + x + "Label").innerHTML = label;
	document.getElementById("CRI" + x + "value1").innerText = value1;
	document.getElementById("CRI" + x + "value2").innerText = value2;
	document.getElementById("customRadioInput" + x + "Menu").style.display= 'block';	
	document.getElementById("customRadioInput" + x + "Checkbox").checked = true;	
	localStorage.setItem("Slot0_Custom_Radio_Input" + x + "_Label", label);	
	localStorage.setItem("Slot0_Custom_Radio_Input" + x + "_Value1", value1);	
	localStorage.setItem("Slot0_Custom_Radio_Input" + x + "_Value2", value2);
	localStorage.setItem("Slot0_Custom_Radio_Input" + x + "_Enabled", "Yes");
	
	if (controlsessionactive === "Yes") {
			conn.send({firstParam: "changeCustomRadioInput", secondParam: "Custom" + x + "Label", thirdParam: label});
			conn.send({firstParam: "changeCustomRadioInput", secondParam: "Custom" + x + "Value1", thirdParam: value1});
			conn.send({firstParam: "changeCustomRadioInput", secondParam: "Custom" + x + "Value2", thirdParam: value2});
			conn.send({firstParam: "customRadioInputEnabled", secondParam: x, thirdParam: "Yes"});
			conn.send({firstParam: "customRadioInputEnabled", secondParam: "loadCustomRadioInputs"});
		}
			
	if (label === "") {
		document.getElementById("customRadioInput" + x + "Menu").style.height = "40px";
		document.getElementById("customRadioInput" + x + "Menu").style.paddingTop = "8px";
		document.getElementById("CRI" + x + "Container1").style.marginTop = "8px";
		document.getElementById("CRI" + x + "Container2").style.marginTop = "8px";
	}
	else {
		document.getElementById("customRadioInput" + x + "Menu").style.height = "60px";
		document.getElementById("customRadioInput" + x + "Menu").style.paddingTop = "0";
		document.getElementById("CRI" + x + "Container1").style.marginTop = "11px";
		document.getElementById("CRI" + x + "Container2").style.marginTop = "11px";
	}
}

async function makeCustomRadioInputError(x,y) {
	document.getElementById("customRadioInput" + x + "Value" + y).style.background='#b30003';
	document.getElementById("customRadioInput" + x + "Value" + y).style.border='1px solid #660002';
	document.getElementById("customRadioInput" + x + "Value" + y).style.transitionDuration='0.2s';
	await sleep(1000);
	document.getElementById("customRadioInput" + x + "Value" + y).style.background='#59568f';
	document.getElementById("customRadioInput" + x + "Value" + y).style.border='1px solid #282640';
	document.getElementById("customRadioInput" + x + "Value" + y).style.transitionDuration='0.75s';
}

function toggleCustomRadioInput(x) {
var tickbox = document.getElementById("customRadioInput" + x + "Checkbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("customRadioInput" + x + "Menu").style.display= 'block';
	}
	else {
		var tickbox = "No"
		document.getElementById("customRadioInput" + x + "Menu").style.display= 'none';
	}
	localStorage.setItem("Slot0_Custom_Radio_Input" + x + "_Enabled", tickbox);
}

function loadCustomRadioInputs() {
	var x;
	for (x = 1; x < 4; x++) {
		var enabled = localStorage.getItem("Slot0_Custom_Radio_Input" + x + "_Enabled");
	
		if (enabled === "Yes") {
			document.getElementById("customRadioInput" + x + "Checkbox").checked = true;
			document.getElementById("customRadioInput" + x + "Menu").style.display= 'block'; 	
		}
		else {	
			document.getElementById("customRadioInput" + x + "Checkbox").checked = false;
			document.getElementById("customRadioInput" + x + "Menu").style.display= 'none';	
		}
		
		var label = localStorage.getItem("Slot0_Custom_Radio_Input" + x + "_Label");
		var value1 = localStorage.getItem("Slot0_Custom_Radio_Input" + x + "_Value1");
		var value2 = localStorage.getItem("Slot0_Custom_Radio_Input" + x + "_Value2");
		var tickedvalue = localStorage.getItem("Slot0_Custom_Radio_Input" + x + "_Ticked_Value");
		
		document.getElementById("customRadioInput" + x + "Label").innerHTML = label;
		document.getElementById("CRI" + x + "value1").innerHTML = value1;
		document.getElementById("CRI" + x + "value2").innerHTML = value2;
		if (tickedvalue == 1) {
			document.getElementById("radiobuttonCustom" + x + "Value1").checked = true;
		}
		else {
			document.getElementById("radiobuttonCustom" + x + "Value2").checked = true;
		}
		
		if (label === "") {
			document.getElementById("customRadioInput" + x + "Menu").style.height = "40px";
			document.getElementById("customRadioInput" + x + "Menu").style.paddingTop = "8px";
			document.getElementById("CRI" + x + "Container1").style.marginTop = "8px";
			document.getElementById("CRI" + x + "Container2").style.marginTop = "8px";
		}
		else {
			document.getElementById("customRadioInput" + x + "Menu").style.height = "60px";
			document.getElementById("customRadioInput" + x + "Menu").style.paddingTop = "0";
			document.getElementById("CRI" + x + "Container1").style.marginTop = "11px";
			document.getElementById("CRI" + x + "Container2").style.marginTop = "11px";
		}
	}
}

function saveCustomRadioInput(x,y) {
	localStorage.setItem("Slot0_Custom_Radio_Input" + x + "_Ticked_Value", y);
	showProcessingAnimation()
}

function switchToCustomSlidersSet(x) {
	if (x == 1) {
		document.getElementById("customSlidersSet1Container").style.display = "block";
		document.getElementById("customSlidersSet2Container").style.display = "none";
	}
	else {
		document.getElementById("customSlidersSet1Container").style.display = "none";
		document.getElementById("customSlidersSet2Container").style.display = "block";
	}
}

function makeCustomSlider(x) {
		var leftText = document.getElementById("slider" + x + "LeftText").value;
		var centerText = document.getElementById("slider" + x + "CenterText").value;
		var rightText = document.getElementById("slider" + x + "RightText").value;	
		if (leftText === "") { leftText = "&nbsp;"; }
		if (centerText === "") { centerText = "&nbsp;"; }
		if (rightText === "") {	rightText = "&nbsp;";}
		document.getElementById("textinmenuLeftCS" + x).innerHTML = leftText;	
		document.getElementById("textinmenuCenterCS" + x).innerHTML = centerText;	
		document.getElementById("textinmenuRightCS" + x).innerHTML = rightText;	
		localStorage.setItem("Custom_Slider" + x + "_LeftText", leftText);	
		localStorage.setItem("Custom_Slider" + x + "_CenterText", centerText);	
		localStorage.setItem("Custom_Slider" + x + "_RightText", rightText);
		localStorage.setItem("Custom_Slider" + x + "_Enabled", "Yes");
		document.getElementById("customSlider" + x + "Checkbox").checked = true;
		document.getElementById("custom" + x + "SliderMenu").style.maxHeight= '60px';
		document.getElementById("custom" + x + "SliderMenu").style.borderBottom= '2px solid #807F97';
		document.getElementById("custom" + x + "SliderMenu").style.paddingBottom= '15px';
		if (controlsessionactive === "Yes") {
			conn.send({firstParam: "changeCustomSliderLabel", secondParam: x, thirdParam: leftText, fourthParam: centerText, fifthParam: rightText});
			conn.send({firstParam: "customSliderEnabled", secondParam: x, thirdParam: "Yes"});
			conn.send({firstParam: "customSliderEnabled", secondParam: "loadCustomSliders"});
		}
	}
	
function toggleCustomSlider(x) {
	var tickbox = document.getElementById("customSlider" + x + "Checkbox");
		if (tickbox.checked) {
			var tickbox = "Yes"
			document.getElementById("custom" + x + "SliderMenu").style.maxHeight= '60px';
			document.getElementById("custom" + x + "SliderMenu").style.borderBottom= '2px solid #807F97';
			document.getElementById("custom" + x + "SliderMenu").style.paddingBottom= '15px';
		}
		else {
			var tickbox = "No"
			document.getElementById("custom" + x + "SliderMenu").style.maxHeight= '0';
			document.getElementById("custom" + x + "SliderMenu").style.borderBottom= '0';
			document.getElementById("custom" + x + "SliderMenu").style.paddingBottom= '0';
		}
		localStorage.setItem("Custom_Slider" + x + "_Enabled", tickbox);
	}

function loadCustomSliders() {
	loadCustomSliderVisibilityStatus();
	loadCustomSliderValues();
	loadCustomSliderLabels();
}

function loadCustomSliderVisibilityStatus() {
	var x;
	for (x = 1; x < 11; x++) {
		var isSliderEnabled = localStorage.getItem("Custom_Slider" + x + "_Enabled");
		if (isSliderEnabled === "Yes") {
			document.getElementById("customSlider" + x + "Checkbox").checked = true;
			document.getElementById("custom" + x + "SliderMenu").style.maxHeight= '60px';
			document.getElementById("custom" + x + "SliderMenu").style.borderBottom= '2px solid #807F97';
			document.getElementById("custom" + x + "SliderMenu").style.paddingBottom= '15px';
		}
		else {
			document.getElementById("customSlider" + x + "Checkbox").checked = false;
			document.getElementById("custom" + x + "SliderMenu").style.maxHeight= '0';
			document.getElementById("custom" + x + "SliderMenu").style.borderBottom= '0';
			document.getElementById("custom" + x + "SliderMenu").style.paddingBottom= '0';
		}
	}
}

function loadCustomSliderValues() {
	var x;
	for (x = 1; x < 11; x++) {
		var value = localStorage.getItem("Slot0_Custom_Slider" + x + "_Value");
		if (value != null) {
			if (x == 1) 		{ CustomSliderNo1.setValue(value); 	}
			else if (x == 2)	{ CustomSliderNo2.setValue(value); 	}
			else if (x == 3)	{ CustomSliderNo3.setValue(value); 	}
			else if (x == 4)	{ CustomSliderNo4.setValue(value); 	}
			else if (x == 5)	{ CustomSliderNo5.setValue(value);	}
			else if (x == 6)	{ CustomSliderNo6.setValue(value); 	}
			else if (x == 7)	{ CustomSliderNo7.setValue(value); 	}
			else if (x == 8)	{ CustomSliderNo8.setValue(value); 	}
			else if (x == 9)	{ CustomSliderNo9.setValue(value); 	}
			else if (x == 10)	{ CustomSliderNo10.setValue(value); }
		}
	}
}

function loadCustomSliderLabels() {
	var x;
	for (x = 1; x < 11; x++) {
		var leftText = localStorage.getItem("Custom_Slider" + x + "_LeftText");
		var centerText = localStorage.getItem("Custom_Slider" + x + "_CenterText");
		var rightText = localStorage.getItem("Custom_Slider" + x + "_RightText");
		document.getElementById("textinmenuLeftCS" + x).innerHTML = leftText;
		document.getElementById("textinmenuCenterCS" + x).innerHTML = centerText;
		document.getElementById("textinmenuRightCS" + x).innerHTML = rightText;
	}
}

function openLockSettingsPasswordMenu() {
	document.getElementById("lockSettingsPasswordButton").style.padding='0px';
	document.getElementById("lockSettingsPasswordButton").style.border='0';
	document.getElementById("lockSettingsPasswordButton").style.fontSize='0px';
	document.getElementById("lockSettingsPasswordButton").style.marginTop='0px';
	var password = localStorage.getItem("Current_Password");
	if (password == null) {
		document.getElementById("setupPasswordFirstTimeContainer").style.maxHeight='139px';
	}
	else {
		document.getElementById("lockPasswordChooseOptionContainer").style.maxHeight='190px';
	}
}

function goBackSetupPasswordFirstTime() {
	document.getElementById("lockSettingsPasswordButton").style.padding='10px';
	document.getElementById("lockSettingsPasswordButton").style.border="2px solid #59568f";
	document.getElementById("lockSettingsPasswordButton").style.fontSize='26px';
	document.getElementById("lockSettingsPasswordButton").style.marginTop='5px';
	document.getElementById("setupPasswordFirstTimeContainer").style.maxHeight='0px';
}

function checkLockPasswordStatus() {
	var enabled = localStorage.getItem("Lock_Settings_Password_Enabled");
	if (enabled === "Yes") {
		document.getElementById('lockPasswordOptionsMessage').innerHTML = "Lock password is enabled";
		document.getElementById("lockPasswordEnableButton").style.padding='0px';
		document.getElementById("lockPasswordEnableButton").style.border="0";
		document.getElementById("lockPasswordEnableButton").style.fontSize='0px';
		document.getElementById("lockPasswordEnableButton").style.marginBottom='0px';
		document.getElementById("lockPasswordEnableButton").style.marginLeft='0px';
		document.getElementById("lockPasswordDisableButton").style.padding='8px';
		document.getElementById("lockPasswordDisableButton").style.border="2px solid #59568f";
		document.getElementById("lockPasswordDisableButton").style.fontSize='20px';
		document.getElementById("lockPasswordDisableButton").style.marginBottom='5px';
		document.getElementById("lockPasswordDisableButton").style.marginLeft='16px';
	}
	else {
		document.getElementById('lockPasswordOptionsMessage').innerHTML = "Lock password is disabled";
		document.getElementById("lockPasswordDisableButton").style.padding='0px';
		document.getElementById("lockPasswordDisableButton").style.border="0";
		document.getElementById("lockPasswordDisableButton").style.fontSize='0px';
		document.getElementById("lockPasswordDisableButton").style.marginBottom='0px';
		document.getElementById("lockPasswordDisableButton").style.marginLeft='0px';
		document.getElementById("lockPasswordEnableButton").style.padding='8px';
		document.getElementById("lockPasswordEnableButton").style.border="2px solid #59568f";
		document.getElementById("lockPasswordEnableButton").style.fontSize='20px';
		document.getElementById("lockPasswordEnableButton").style.marginBottom='5px';
		document.getElementById("lockPasswordEnableButton").style.marginLeft='16px';
	}
}

function setupPasswordFirstTime() {
	var password = document.getElementById("passwordFirstTimeTextField").value;
	if (password === "") {
		pleaseProvidePassword();
	}
	else {
		localStorage.setItem("Current_Password", password);
		localStorage.setItem("Lock_Settings_Password_Enabled", "Yes");
		document.getElementById("setupPasswordFirstTimeContainer").style.maxHeight='0px';
		document.getElementById("lockPasswordChooseOptionContainer").style.maxHeight='190px';
		checkLockPasswordStatus();
	}
}

function pleaseProvidePassword() {
	document.getElementById('setupPasswordFirstTimeMessage').innerHTML = ">Error: Please provide password!";
	document.getElementById('setupPasswordFirstTimeMessage').style.color = "#FF4550";
	setTimeout (pleaseProvidePasswordStage2, 2500);
}

function pleaseProvidePasswordStage2() {
	document.getElementById('setupPasswordFirstTimeMessage').innerHTML = "Set up a lock password:";
	document.getElementById('setupPasswordFirstTimeMessage').style.color = "#FFFFFF";
}

function lockPasswordChangeStage1() {
	document.getElementById("lockPasswordChooseOptionContainer").style.maxHeight='0px';
	document.getElementById("lockPasswordChangeContainer").style.maxHeight='228px';
}

function lockPasswordChangeGoBack() {
	document.getElementById("lockPasswordChooseOptionContainer").style.maxHeight='190px';
	document.getElementById("lockPasswordChangeContainer").style.maxHeight='0px';
}

function lockPasswordChangeStage2() {
	var providedCurrentPassword = document.getElementById("passwordChangeCurrentPasswordTextField").value;
	if (providedCurrentPassword === "") {
		return;
	}
	else {
		var currentPassword = localStorage.getItem("Current_Password");
		if (currentPassword === providedCurrentPassword) {
			var providedNewPassword = document.getElementById("passwordChangeNewPasswordTextField").value;
			localStorage.setItem("Current_Password", providedNewPassword);
			lockPasswordChangeGoBack();
			newPasswordSavedMessage();
		}
		else {
			lockPasswordChangeInvalid();
		}
	}
}

function newPasswordSavedMessage() {
	document.getElementById('lockPasswordOptionsMessage').innerHTML = ">New password saved!";
	document.getElementById('lockPasswordOptionsMessage').style.color = "#29a329";
	setTimeout (newPasswordSavedMessageStage2, 2500);
}

function newPasswordSavedMessageStage2() {
	document.getElementById('lockPasswordOptionsMessage').innerHTML = "uwu";
	document.getElementById('lockPasswordOptionsMessage').style.color = "#FFFFFF";
	checkLockPasswordStatus();
}
	
function lockPasswordChangeInvalid() {
	document.getElementById('changePasswordMessage').innerHTML = ">Error: Provided password invalid!";
	document.getElementById('changePasswordMessage').style.color = "#FF4550";
	setTimeout (lockPasswordChangeInvalidStage2, 2500);
}

function lockPasswordChangeInvalidStage2() {
	document.getElementById('changePasswordMessage').innerHTML = "Current password:";
	document.getElementById('changePasswordMessage').style.color = "#FFFFFF";
}

function lockPasswordDeleteStage1() {
	document.getElementById("lockPasswordChooseOptionContainer").style.maxHeight='0px';
	document.getElementById("lockPasswordDeleteContainer").style.maxHeight='139px';
}

function lockPasswordDeleteGoBack() {
	document.getElementById("lockPasswordChooseOptionContainer").style.maxHeight='190px';
	document.getElementById("lockPasswordDeleteContainer").style.maxHeight='0px';
}

function lockPasswordDeleteStage2() {
	var providedPassword = document.getElementById("passwordDeleteTextField").value;
	if (providedPassword === "") {
		return;
	}
	else {
		var currentPassword = localStorage.getItem("Current_Password");
		if (currentPassword === providedPassword) {
			localStorage.removeItem("Current_Password");
			localStorage.setItem("Lock_Settings_Password_Enabled", "No");
			document.getElementById("lockPasswordDeleteContainer").style.maxHeight='0px';
			document.getElementById("lockSettingsPasswordButton").style.padding='10px';
			document.getElementById("lockSettingsPasswordButton").style.border="2px solid #59568f";
			document.getElementById("lockSettingsPasswordButton").style.fontSize='26px';
			document.getElementById("lockSettingsPasswordButton").style.marginTop='5px';
			checkLockPasswordStatus();
		}
		else {
			lockPasswordDeleteInvalid();
		}
	}
}

function lockPasswordDeleteInvalid() {
	document.getElementById('deletePasswordMessage').innerHTML = ">Error: Provided password invalid!";
	document.getElementById('deletePasswordMessage').style.color = "#FF4550";
	setTimeout (lockPasswordDeleteInvalidStage2, 2500);
}

function lockPasswordDeleteInvalidStage2() {
	document.getElementById('deletePasswordMessage').innerHTML = "Current password:";
	document.getElementById('deletePasswordMessage').style.color = "#FFFFFF";
}

function lockPasswordGoBack() {
	document.getElementById("lockSettingsPasswordButton").style.padding='10px';
	document.getElementById("lockSettingsPasswordButton").style.border="2px solid #59568f";
	document.getElementById("lockSettingsPasswordButton").style.fontSize='26px';
	document.getElementById("lockSettingsPasswordButton").style.marginTop='5px';
	document.getElementById("lockPasswordChooseOptionContainer").style.maxHeight='0px';
}

function lockPasswordForgotPasswd() {
	document.getElementById("lockPasswordChooseOptionContainer").style.maxHeight='0px';
	document.getElementById("setupPasswordFirstTimeContainer").style.maxHeight='139px';
}

function lockPasswordEnable() {
	localStorage.setItem("Lock_Settings_Password_Enabled", "Yes");
	checkLockPasswordStatus();
}

function lockPasswordDisableStage1() {
	document.getElementById("lockPasswordChooseOptionContainer").style.maxHeight='0px';
	document.getElementById("lockPasswordDisableContainer").style.maxHeight='139px';
}

function lockPasswordDisableGoBack() {
	document.getElementById("lockPasswordChooseOptionContainer").style.maxHeight='190px';
	document.getElementById("lockPasswordDisableContainer").style.maxHeight='0px';
}

function lockPasswordDisableStage2() {
	var providedPassword = document.getElementById("passwordDisableTextField").value;
	if (providedPassword === "") {
		return;
	}
	else {
		var currentPassword = localStorage.getItem("Current_Password");
		if (currentPassword === providedPassword) {
			localStorage.setItem("Lock_Settings_Password_Enabled", "No");
			lockPasswordDisableGoBack();
			checkLockPasswordStatus();
		}
		else {
			lockPasswordDisableInvalid();
		}
	}
}

function lockPasswordDisableInvalid() {
	document.getElementById('disableLockPasswordMessage').innerHTML = ">Error: Provided password invalid!";
	document.getElementById('disableLockPasswordMessage').style.color = "#FF4550";
	setTimeout (lockPasswordDisableInvalidStage2, 2500);
}

function lockPasswordDisableInvalidStage2() {
	document.getElementById('disableLockPasswordMessage').innerHTML = "Current password:";
	document.getElementById('disableLockPasswordMessage').style.color = "#FFFFFF";
}

function toggleInanimateObjectsMenu() {
	var tickbox = document.getElementById("inanimateObjectsCheckbox");
		if (tickbox.checked) {
			var tickbox = "Yes"			
			document.getElementById("inanimateObjectsMenu").style.display='block';
		}
		else {
			var tickbox = "No"
			document.getElementById("inanimateObjectsMenu").style.display='none';
		}
		localStorage.setItem("Inanimate_Objects_Enabled", tickbox);
}

function loadInanimateObjectStatus() {
	var object = localStorage.getItem("Slot0_Inanimate_Object");
		if (object == null) {
			return;
		}
		else {
			document.getElementById('inanimateObjectsCurrent').innerHTML = object;
		}	
}

function showOrHideRandomizerButton() {
	var yesorno = localStorage.getItem("Randomizer_Enabled");
	if (yesorno === "No") {
		document.getElementById("randomizeButton").style.padding='0px';
		document.getElementById("randomizeButton").style.border='0';
		document.getElementById("randomizeButton").style.fontSize='0px';
		document.getElementById("randomizeButton").style.marginTop='0px';
			
	}
	else {
		document.getElementById("randomizeButton").style.padding='10px';
		document.getElementById("randomizeButton").style.border="2px solid #59568f";
		document.getElementById("randomizeButton").style.fontSize='26px';
		document.getElementById("randomizeButton").style.marginTop='5px';
		document.getElementById("randomizerCheckbox").checked = true;	
	}
}

function toggleRandomizer() {
	var tickbox = document.getElementById("randomizerCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		localStorage.setItem("Randomizer_Enabled", tickbox);
		document.getElementById("randomizeButton").style.padding='10px';
		document.getElementById("randomizeButton").style.border="2px solid #59568f";
		document.getElementById("randomizeButton").style.fontSize='26px';
		document.getElementById("randomizeButton").style.marginTop='5px';
	}
	else {
		var tickbox = "No"
		localStorage.setItem("Randomizer_Enabled", tickbox);
		document.getElementById("randomizeButton").style.padding='0px';
		document.getElementById("randomizeButton").style.border='0';
		document.getElementById("randomizeButton").style.fontSize='0px';
		document.getElementById("randomizeButton").style.marginTop='0px';
	}
}

function showOrHideDevMenuButton() {
	var yesorno = localStorage.getItem("DevMenu_Enabled");
	if (yesorno === "Yes") {
		document.getElementById("devMenuButton").style.padding='10px';
		document.getElementById("devMenuButton").style.border="2px solid #59568f";
		document.getElementById("devMenuButton").style.fontSize='26px';
		document.getElementById("devMenuButton").style.marginTop='5px';
		document.getElementById("devMenuCheckbox").checked = true;		
	}
	else {
		document.getElementById("devMenuButton").style.padding='0px';
		document.getElementById("devMenuButton").style.border='0';
		document.getElementById("devMenuButton").style.fontSize='0px';
		document.getElementById("devMenuButton").style.marginTop='0px';
	}
}

function toggleDevMenu() {
	var tickbox = document.getElementById("devMenuCheckbox");
		if (tickbox.checked) {
			var tickbox = "Yes"
			localStorage.setItem("DevMenu_Enabled", tickbox);
			document.getElementById("devMenuButton").style.padding='10px';
			document.getElementById("devMenuButton").style.border="2px solid #59568f";
			document.getElementById("devMenuButton").style.fontSize='26px';
			document.getElementById("devMenuButton").style.marginTop='5px';
		}
		else {
			var tickbox = "No"
			localStorage.setItem("DevMenu_Enabled", tickbox);
			document.getElementById("devMenuButton").style.padding='0px';
			document.getElementById("devMenuButton").style.border='0';
			document.getElementById("devMenuButton").style.fontSize='0px';
			document.getElementById("devMenuButton").style.marginTop='0px';
		}
}

function showDevMenu() {
		document.getElementById("devMenuButton").style.padding='0px';
		document.getElementById("devMenuButton").style.border='0';
		document.getElementById("devMenuButton").style.fontSize='0px';
		document.getElementById("devMenuButton").style.marginTop='0px';
		document.getElementById("devMenuOptions").style.maxHeight='710px';
	}
	
function goBackFromDevMenuFunction() {
		document.getElementById("devMenuButton").style.padding='10px';
		document.getElementById("devMenuButton").style.border="2px solid #59568f";
		document.getElementById("devMenuButton").style.fontSize='26px';
		document.getElementById("devMenuButton").style.marginTop='5px';
		document.getElementById("devMenuOptions").style.maxHeight='0px'; 
	}
	
function devMenuDeleteLockPassword() {
	localStorage.removeItem("Current_Password");
	localStorage.removeItem("Lock_Settings_Password_Enabled");
	document.getElementById('devMenuDeleteLockPasswordButton').innerHTML = "Password deleted!";
	setTimeout(devMenuDeleteLockPasswordHideButton, 2500)
}

function devMenuDeleteLockPasswordHideButton() {
	document.getElementById('devMenuDeleteLockPasswordButton').innerHTML = "Delete Lock password";
}

function toggleApplySettingsButton() {
	var tickbox = document.getElementById("applySettingsCheckbox");
		if (tickbox.checked) {
			var tickbox = "Yes"
			localStorage.setItem("Apply_Settings_Button_Enabled", tickbox);
			document.getElementById("applySettingsButton").style.padding='10px';
			document.getElementById("applySettingsButton").style.border="2px solid #59568f";
			document.getElementById("applySettingsButton").style.fontSize='26px';
			document.getElementById("applySettingsButton").style.marginTop='5px';
		}
		else {
			var tickbox = "No"
			localStorage.setItem("Apply_Settings_Button_Enabled", tickbox);
			document.getElementById("applySettingsButton").style.padding='0px';
			document.getElementById("applySettingsButton").style.border='0';
			document.getElementById("applySettingsButton").style.fontSize='0px';
			document.getElementById("applySettingsButton").style.marginTop='0px';
		}
}

function showOrHideApplySettingsButton() {
	var yesorno = localStorage.getItem("Apply_Settings_Button_Enabled");
	if (yesorno === "Yes") {
		document.getElementById("applySettingsButton").style.padding='10px';
		document.getElementById("applySettingsButton").style.border="2px solid #59568f";
		document.getElementById("applySettingsButton").style.fontSize='26px';
		document.getElementById("applySettingsButton").style.marginTop='5px';
		document.getElementById("applySettingsCheckbox").checked = true;		
	}
	else {
		document.getElementById("applySettingsButton").style.padding='0px';
		document.getElementById("applySettingsButton").style.border='0';
		document.getElementById("applySettingsButton").style.fontSize='0px';
		document.getElementById("applySettingsButton").style.marginTop='0px';
	}
}

function toggleCONTROLButton() {
	var tickbox = document.getElementById("CONTROLbuttonCheckbox");
		if (tickbox.checked) {
			var tickbox = "Yes"
			localStorage.setItem("CONTROL_Button_Enabled", tickbox);
			document.getElementById("CONTROLButton").style.padding='10px';
			document.getElementById("CONTROLButton").style.border="2px solid #59568f";
			document.getElementById("CONTROLButton").style.fontSize='26px';
			document.getElementById("CONTROLButton").style.marginTop='5px';
		}
		else {
			var tickbox = "No"
			localStorage.setItem("CONTROL_Button_Enabled", tickbox);
			document.getElementById("CONTROLButton").style.padding='0px';
			document.getElementById("CONTROLButton").style.border='0';
			document.getElementById("CONTROLButton").style.fontSize='0px';
			document.getElementById("CONTROLButton").style.marginTop='0px';
		}
}

function showOrHideCONTROLButton() {
	var yesorno = localStorage.getItem("CONTROL_Button_Enabled");
	if (yesorno === "No") {
		document.getElementById("CONTROLButton").style.padding='0px';
		document.getElementById("CONTROLButton").style.border='0';
		document.getElementById("CONTROLButton").style.fontSize='0px';
		document.getElementById("CONTROLButton").style.marginTop='0px';				
	}
	else {
		document.getElementById("CONTROLButton").style.padding='10px';
		document.getElementById("CONTROLButton").style.border="2px solid #59568f";
		document.getElementById("CONTROLButton").style.fontSize='26px';
		document.getElementById("CONTROLButton").style.marginTop='5px';
		document.getElementById("CONTROLbuttonCheckbox").checked = true;
	}
}

function toggleAppStatus() {
	var tickbox = document.getElementById("appStatusCheckbox");
		if (tickbox.checked) {
			var tickbox = "Yes"
			localStorage.setItem("App_Status_Sharing_Enabled", tickbox);
			document.getElementById("appStatusButton").style.padding='10px';
			document.getElementById("appStatusButton").style.border="2px solid #59568f";
			document.getElementById("appStatusButton").style.fontSize='26px';
			document.getElementById("appStatusButton").style.marginTop='5px';
		}
		else {
			var tickbox = "No"
			localStorage.setItem("App_Status_Sharing_Enabled", tickbox);
			document.getElementById("appStatusButton").style.padding='0px';
			document.getElementById("appStatusButton").style.border='0';
			document.getElementById("appStatusButton").style.fontSize='0px';
			document.getElementById("appStatusButton").style.marginTop='0px';
		}
}

function showOrHideAppStatusButton() {
	var yesorno = localStorage.getItem("App_Status_Sharing_Enabled");
	if (yesorno === "Yes") {
		document.getElementById("appStatusButton").style.padding='10px';
		document.getElementById("appStatusButton").style.border="2px solid #59568f";
		document.getElementById("appStatusButton").style.fontSize='26px';
		document.getElementById("appStatusButton").style.marginTop='5px';
		document.getElementById("appStatusCheckbox").checked = true;		
	}
	else {
		document.getElementById("appStatusButton").style.padding='0px';
		document.getElementById("appStatusButton").style.border='0';
		document.getElementById("appStatusButton").style.fontSize='0px';
		document.getElementById("appStatusButton").style.marginTop='0px';
	}
}

function showAppStatusOptions() {
	document.getElementById("appStatusButton").style.padding='0px';
	document.getElementById("appStatusButton").style.border='0';
	document.getElementById("appStatusButton").style.fontSize='0px';
	document.getElementById("appStatusButton").style.marginTop='0px';
	document.getElementById("appStatusChoiceContainer").style.maxHeight='115px';
}

function appStatusGoBack() {
	document.getElementById("appStatusButton").style.padding='10px';
	document.getElementById("appStatusButton").style.border="2px solid #59568f";
	document.getElementById("appStatusButton").style.fontSize='26px';
	document.getElementById("appStatusButton").style.marginTop='5px';
	document.getElementById("appStatusChoiceContainer").style.maxHeight='0px';
}

function appStatusShowImportOptions() {
	document.getElementById("appStatusChoiceContainer").style.maxHeight='0px';
	document.getElementById("appStatusImportOptionsContainer").style.maxHeight='185px';
}

function appStatusGoBackFromImportOptions() {
	document.getElementById("appStatusImportOptionsContainer").style.maxHeight='0px';
	document.getElementById("appStatusChoiceContainer").style.maxHeight='115px';
}

function appStatusShowExportOptions() {
	document.getElementById("appStatusChoiceContainer").style.maxHeight='0px';
	document.getElementById("appStatusExportOptionsContainer").style.maxHeight='225px';
}

function appStatusGoBackFromExportOptions() {
	document.getElementById("appStatusExportOptionsContainer").style.maxHeight='0px';
	document.getElementById("appStatusChoiceContainer").style.maxHeight='115px';
}

function appStatusCopy (containerid) {
	// Create a new textarea element and give it id='temp_element'
	var textarea = document.createElement('textarea')
	textarea.id = 'temp_element'
	// Optional step to make less noise on the page, if any!
	textarea.style.height = 0
	// Now append it to your page somewhere, I chose <body>
	document.body.appendChild(textarea)
	// Give our textarea a value of whatever inside the div of id=containerid
	textarea.value = document.getElementById(containerid).innerHTML
	// Now copy whatever inside the textarea to clipboard
	var selector = document.querySelector('#temp_element')
	selector.select()
	document.execCommand('copy')
	// Remove the textarea
	document.body.removeChild(textarea)	
	document.getElementById("appStatusCopyMessage").innerHTML = "Copied!";
	document.getElementById("appStatusCopyMessage").style.color = "#29a329";
	setTimeout(hideAppStatusCopyMessage, 1500);
}

function hideAppStatusCopyMessage() {
	document.getElementById("appStatusCopyMessage").innerHTML = "App settings: (click to copy)";
	document.getElementById("appStatusCopyMessage").style.color = "#fff";
}

function hideFooter() {
	var tickbox = document.getElementById("hideFooterCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		localStorage.setItem("Footer_Hidden", tickbox);
		document.getElementById("footerContainer").style.paddingBottom='0px';
		document.getElementById("footerContainer").style.borderTop='0';
		document.getElementById("footerContainer").style.marginTop='5px';
		document.getElementById("footerContainer").style.maxHeight='0px';
	}
	else {
		var tickbox = "No"
		localStorage.setItem("Footer_Hidden", tickbox);
		document.getElementById("footerContainer").style.paddingBottom='10px';
		document.getElementById("footerContainer").style.borderTop="2px solid #807F97";
		document.getElementById("footerContainer").style.marginTop='10px';
		document.getElementById("footerContainer").style.maxHeight='250px';
	}
}

function showOrHideFooter() {
	var yesorno = localStorage.getItem("Footer_Hidden");
	if (yesorno === "Yes") {
		document.getElementById("footerContainer").style.paddingBottom='0px';
		document.getElementById("footerContainer").style.borderTop='0';
		document.getElementById("footerContainer").style.marginTop='5px';
		document.getElementById("footerContainer").style.maxHeight='0px';
		document.getElementById("hideFooterCheckbox").checked = true;		
	}
	else {
		document.getElementById("footerContainer").style.paddingBottom='10px';
		document.getElementById("footerContainer").style.borderTop="2px solid #807F97";
		document.getElementById("footerContainer").style.marginTop='10px';
		document.getElementById("footerContainer").style.maxHeight='250px';
	}
}

		
function showOrHideThirdSexMenu() {
	var yesorno = localStorage.getItem("Third_Sex_Enabled");
	if (yesorno === "Yes") {
		document.getElementById("containerRBOther").style.display='block';
		document.getElementById("containerRBMale").style.width='22%';
		document.getElementById("containerRBFemale").style.width='27%';
		document.getElementById("containerRBOther").style.width='40%';
		document.getElementById("thirdSexButton").style.backgroundColor='#282640';
		document.getElementById("thirdSexButton").style.border='2px solid #59568f';
		document.getElementById("thirdSexButton").style.cursor='pointer';
		document.getElementById("thirdSexCheckbox").checked = true;
	}
	else {
		document.getElementById("containerRBOther").style.display='none';
		document.getElementById("containerRBOther").style.display='none';
		document.getElementById("containerRBMale").style.width='40%';
		document.getElementById("containerRBFemale").style.width='30%';
		document.getElementById("thirdSexButton").style.backgroundColor='#424242';
		document.getElementById("thirdSexButton").style.border='2px solid #b0b0b0';
		document.getElementById("thirdSexButton").style.cursor='not-allowed';
		document.getElementById("thirdSexCheckbox").checked = false;
	}
}

function toggleThirdSex() {
	var tickbox = document.getElementById("thirdSexCheckbox");
	if (tickbox.checked) {
		tickbox = "Yes"
		document.getElementById("containerRBOther").style.display='block';
		document.getElementById("containerRBMale").style.width='22%';
		document.getElementById("containerRBFemale").style.width='27%';
		document.getElementById("containerRBOther").style.width='40%';
		document.getElementById("thirdSexButton").style.backgroundColor='#282640';
		document.getElementById("thirdSexButton").style.border='2px solid #59568f';
		document.getElementById("thirdSexButton").style.cursor='pointer';
	}
	else {
		tickbox = "No"
		document.getElementById("containerRBOther").style.display='none';
		document.getElementById("containerRBMale").style.width='40%';
		document.getElementById("containerRBFemale").style.width='30%';
		document.getElementById("thirdSexButton").style.backgroundColor='#424242';
		document.getElementById("thirdSexButton").style.border='2px solid #b0b0b0';
		document.getElementById("thirdSexButton").style.cursor='not-allowed';
	}
	localStorage.setItem("Third_Sex_Enabled", tickbox);
}

function checkThirdSexStatus() {
	var x = localStorage.getItem("Slot0_Third_Sex");
		if (x == null) {
			document.getElementById('thirdSexValueMessage').innerHTML = "Third sex is set to Other";
		}
		else {
			document.getElementById('thirdSexValue').innerHTML = x;
			document.getElementById('thirdSexValueMessage').innerHTML = "Third sex is set to " + x;
		}	
}

function setThirdSex() {
	var sex = document.getElementById("thirdSexTextField").value;
	if (sex === "") {
		return;
	}
	else {
		localStorage.setItem("Slot0_Third_Sex", sex);
		checkThirdSexStatus();
	}
}

function oldOrNewStyle() {
	newStyle = localStorage.getItem("New_Style_Enabled");
	if (newStyle === "Yes") {
		document.getElementById('switcherLogo').src='images/logoNew.png'
		document.getElementById("switcherLogo").style.height = "54px";
		document.getElementById("switcherLogo").style.width = "330px";
		document.getElementById("switcherLogo").style.marginTop = "-5px";
		document.getElementById("oldProcessingAnimation").style.display = "none";
		document.getElementById("newProcessingAnimation").style.display = "block";
		document.getElementById("newStyleCheckbox").checked = true;
	}
	else {
		return;
	}		
}

function toggleNewStyle() {
	var tickbox = document.getElementById("newStyleCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		localStorage.setItem("New_Style_Enabled", tickbox);
		document.getElementById('switcherLogo').src='images/logoNew.png'
		document.getElementById("switcherLogo").style.height = "54px";
		document.getElementById("switcherLogo").style.width = "330px";
		document.getElementById("switcherLogo").style.marginTop = "-5px";
		document.getElementById("oldProcessingAnimation").style.display = "none";
		document.getElementById("newProcessingAnimation").style.display = "block";
	}
	else {
		var tickbox = "No"
		localStorage.setItem("New_Style_Enabled", tickbox);
		document.getElementById('switcherLogo').src='images/logo.png'
		document.getElementById("switcherLogo").style.height = "41px";
		document.getElementById("switcherLogo").style.width = "250px";
		document.getElementById("switcherLogo").style.marginTop = "0";
		document.getElementById("newProcessingAnimation").style.display = "none";
		document.getElementById("oldProcessingAnimation").style.display = "block";
	}
}

function showOrHideCreativeModeMenu() {
	var x = localStorage.getItem("Creative_Mode_Enabled");
	if (x === "Yes") {
		document.getElementById("creativeModeButton").style.backgroundColor='#282640';
		document.getElementById("creativeModeButton").style.border='2px solid #59568f';
		document.getElementById("creativeModeButton").style.cursor='pointer';
		document.getElementById("creativeModeCheckbox").checked = true;		
	}
	else {
		document.getElementById("creativeModeButton").style.backgroundColor='#424242';
		document.getElementById("creativeModeButton").style.border='2px solid #b0b0b0';
		document.getElementById("creativeModeButton").style.cursor='not-allowed';
		document.getElementById("creativeModeCheckbox").checked = false;	
	}
}

function toggleCreativeMode() {
var tickbox = document.getElementById("creativeModeCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("creativeModeButton").style.backgroundColor='#282640';
		document.getElementById("creativeModeButton").style.border='2px solid #59568f';
		document.getElementById("creativeModeButton").style.cursor='pointer';
	}
	else {
		var tickbox = "No"
		document.getElementById("creativeModeButton").style.backgroundColor='#424242';
		document.getElementById("creativeModeButton").style.border='2px solid #b0b0b0';
		document.getElementById("creativeModeButton").style.cursor='not-allowed';
	}
	localStorage.setItem("Creative_Mode_Enabled", tickbox);
}

function showOrHideBorder() {
	var x = localStorage.getItem("Border_Disabled");
	if (x === "Yes") {
		document.getElementById("appWidthContainer").style.border='0';
		document.getElementById("disableBorderCheckbox").checked = true;		
	}
	else {
		document.getElementById("appWidthContainer").style.border='2px solid #000000';
		document.getElementById("disableBorderCheckbox").checked = false;	
	}
}

function toggleBorder() {
var tickbox = document.getElementById("disableBorderCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("appWidthContainer").style.border='0';
	}
	else {
		var tickbox = "No"
		document.getElementById("appWidthContainer").style.border='2px solid #000000';
	}
	localStorage.setItem("Border_Disabled", tickbox);
}

function tickOrUntickCheckboxes() {
	// A single function for ticking or unticking the checkboxes in "Options" menu. WIP, currently only for option swapping "Log out" text for username.
	var x = localStorage.getItem("Show_Username_Instead_Of_Logout_Text");
	if (x === "Yes") {
		document.getElementById("swapUsernameLogoutCheckbox").checked = true;
	}
	else {
		document.getElementById("swapUsernameLogoutCheckbox").checked = false;
	}
}

function toggleSwapUsername() {
var tickbox = document.getElementById("swapUsernameLogoutCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
	}
	else {
		var tickbox = "No"
	}
	localStorage.setItem("Show_Username_Instead_Of_Logout_Text", tickbox);
	checkUsername();
}

function toggleCharVizNextGen() {
var tickbox = document.getElementById("charVizNextGenCheckbox");
	if (tickbox.checked) {
		tickbox = "Yes";
		document.getElementById("menuCharVizNextGen").style.display='block';
	}
	else {
		tickbox = "No";
		document.getElementById("menuCharVizNextGen").style.display='none';
	}
	localStorage.setItem("CharViz_Nextgen_Enabled", tickbox);
}

function loadCharVizNextGen() {
	var x = localStorage.getItem("CharViz_Nextgen_Enabled");
	if (x === "Yes") {
		document.getElementById("charVizNextGenCheckbox").checked = true;
		document.getElementById("menuCharVizNextGen").style.display='block';
	}
	else {
		document.getElementById("charVizNextGenCheckbox").checked = false;
	}
	loadResolution();
}

function resetAppAll() {
	var x = document.getElementById("resetAppAllButton").innerHTML;
	if (x === "Are you sure?") {
		localStorage.clear();
		document.getElementById('resetAppAllButton').innerHTML = "Please restart app!";
		buttonFlash1(0);
	}
	else {
		document.getElementById('resetAppAllButton').innerHTML = "Are you sure?";
	}
}

function buttonFlash1(x) {
	if (x == 0) {
		document.getElementById('resetAppAllButton').style.backgroundColor = "#b30003";
		setTimeout(buttonFlash1, 500, 69);
	}
	else {
		document.getElementById('resetAppAllButton').style.backgroundColor = "#660002";
		setTimeout(buttonFlash1, 500, 0);
	}
}

function resetAppCurrent() {
	var x = document.getElementById("resetAppCurrentButton").innerHTML;
	if (x === "Are you sure?") {
		wipeCurrentAppState();
		document.getElementById('resetAppCurrentButton').innerHTML = "Please restart app!";
		buttonFlash2(0);
	}
	else {
		document.getElementById('resetAppCurrentButton').innerHTML = "Are you sure?";
	}
}

function buttonFlash2(x) {
	if (x == 0) {
		document.getElementById('resetAppCurrentButton').style.backgroundColor = "#b30003";
		setTimeout(buttonFlash2, 500, 69);
	}
	else {
		document.getElementById('resetAppCurrentButton').style.backgroundColor = "#660002";
		setTimeout(buttonFlash2, 500, 0);
	}
}

function wipeCurrentAppState() {	
	localStorage.removeItem("Slot0_Species");
	localStorage.removeItem("Slot0_Inanimate_Object");
	localStorage.removeItem("Slot0_Sex");
	localStorage.removeItem("Slot0_Third_Sex");
	localStorage.removeItem("Slot0_AC_Box_Ticked");
	localStorage.removeItem("Slot0_Body_Type1");
	localStorage.removeItem("Slot0_Body_Type2");
	localStorage.removeItem("Slot0_Body_Type3");
	localStorage.removeItem("Slot0_Hips");
	localStorage.removeItem("Slot0_Genital_Size");
	localStorage.removeItem("Slot0_Fluffiness");
	localStorage.removeItem("Slot0_Libido");
	localStorage.removeItem("Slot0_Position_Preference");
	localStorage.removeItem("Slot0_Sensitivity");
	localStorage.removeItem("Slot0_Demeanor");
	localStorage.removeItem("Slot0_Breast_Size_Male");
	localStorage.removeItem("Slot0_Breast_Size_Female");
	localStorage.removeItem("Slot0_Butt_Size");
	localStorage.removeItem("Slot0_Belly_Size");
	localStorage.removeItem("Slot0_Belly_Shape");
	localStorage.removeItem("Slot0_Intelligence");
	localStorage.removeItem("Slot0_Cock_Type");
	localStorage.removeItem("Slot0_Hair_Lenght");
	localStorage.removeItem("Slot0_Pregnancy_Lock_Box_Ticked");
	localStorage.removeItem("Slot0_Fertility");
	localStorage.removeItem("Slot0_Genitals_Menu_Penis_Box_Ticked");
	localStorage.removeItem("Slot0_Genitals_Menu_Vagina_Box_Ticked");
	
	localStorage.removeItem("Butt_Size_Slider_Enabled");
	localStorage.removeItem("Belly_Size_Slider_Enabled");
	localStorage.removeItem("Belly_Shape_Slider_Enabled");
	localStorage.removeItem("Hips_Slider_Enabled");
	localStorage.removeItem("Genital_Size_Slider_Enabled");
	localStorage.removeItem("Cock_Type_Menu_Enabled");
	localStorage.removeItem("Libido_Slider_Enabled");
	localStorage.removeItem("Sensitivity_Slider_Enabled");
	localStorage.removeItem("Demeanor_Slider_Enabled");
	localStorage.removeItem("Postion_Pref_Slider_Enabled");
	localStorage.removeItem("Intelligence_Slider_Enabled");
	localStorage.removeItem("Fluffiness_Slider_Enabled");
	localStorage.removeItem("Hair_Lenght_Slider_Enabled");
	localStorage.removeItem("Fertility_Slider_Enabled");
	localStorage.removeItem("Genitals_Menu_Enabled");
	localStorage.removeItem("Species_Menu_Enabled");
	localStorage.removeItem("Sex_Menu_Enabled");
	localStorage.removeItem("AC_Menu_Enabled");
	localStorage.removeItem("MascFem_Slider_Enabled");
	localStorage.removeItem("ThinThicc_Slider_Enabled");
	localStorage.removeItem("SmolTall_Slider_Enabled");
	localStorage.removeItem("Inanimate_Objects_Enabled");
	
	var x;
	for (x = 1; x < 11; x++) {
		localStorage.removeItem("Slot0_Custom_Slider" + x + "_Value");
		localStorage.removeItem("Custom_Slider" + x + "_LeftText");
		localStorage.removeItem("Custom_Slider" + x + "_CenterText");
		localStorage.removeItem("Custom_Slider" + x + "_RightText");
		localStorage.removeItem("Custom_Slider" + x + "_Enabled");
	}
	
	var x;
	for (x = 1; x < 4; x++) {
		// Checkboxes
		localStorage.removeItem("Slot0_Custom_Checkbox" + x + "_Label");
		localStorage.removeItem("Slot0_Custom_Checkbox" + x + "_Value1");
		localStorage.removeItem("Slot0_Custom_Checkbox" + x + "_Value2");
		localStorage.removeItem("Slot0_Custom_Checkbox" + x + "_Value1_Ticked");
		localStorage.removeItem("Slot0_Custom_Checkbox" + x + "_Value2_Ticked");
		localStorage.removeItem("Slot0_Custom_Checkbox" + x + "_Enabled");
		// Radio inputs
		localStorage.removeItem("Slot0_Custom_Radio_Input" + x + "_Label");
		localStorage.removeItem("Slot0_Custom_Radio_Input" + x + "_Value1");
		localStorage.removeItem("Slot0_Custom_Radio_Input" + x + "_Value2");
		localStorage.removeItem("Slot0_Custom_Radio_Input" + x + "_Ticked_Value");
		localStorage.removeItem("Slot0_Custom_Radio_Input" + x + "_Enabled");
	}
	
}

function displayNotification(x, presetName) {
	var notification;
	// 0 - Remote Login Error
	// 1 - Multi Sex Select Error
	// 2 - Error69
	// 3 - Unblock Settings Error (when user tries to load/import preset when settings are locked)
	// 4 - Low Battery Notification
	// 5 - Preset Loaded Notification
	// 55 - Preset Saved Notification
	// 6 - Empty Slot Error
	// 7 - Custom Error/Notification
	
	// Clear notification log when error occurs
	if (x == 0 || x == 1 || x == 2 || x == 7) {
		document.getElementById('notificationContent').innerHTML = "&nbsp;";
	}
	
	if (x == 0) {
		notification = ">Remote login enabled... <br> >Setting sex = female <br> >Setting shy = 100 <br> >Setting tall = 0 <br>	>Setting submissive = 100 <br> 	>Setting fluffiness = 100 <br> 	>Lock settings enabled <br> 	>Default profile settings saved <br> >New password saved..."
	}
	if (x == 1) {
		notification = "<center>UwU <br> >Error//multi_sex_select <br> >processing...<br> <br> Please contact Switcher-Roo support</center>"
	}
	if (x == 2) {
		notification = "<center>UwU</center> <br> >Error69//lock_settings <br> >lock_setting1 initialized"
	}
	if (x == 3) {
		notification = ">Error: Please unblock the app to load/import preset"
	}
	if (x == 4) {
		var chance = localStorage.getItem("Battery_Drain_Error_Chance");
		var interval = localStorage.getItem("Battery_Drain_Error_Interval");
		if (chance == null) { chance = 100; }
		if (interval != null) { interval = interval / 1000; }
		if (interval == null) { interval = 20; }
		notification = ">Your battery is low. Click Switcher-Roo logo or there will be 3 in " + chance + " chance every " + interval + " seconds that error will occur."
	}
	if (x == 5) {
		notification = ">Preset loaded:" + " " + presetName;
	}
	if (x == 55) {
		notification = ">Preset saved:" + " " + presetName;
	}
	if (x == 6) {
		notification = ">Error: This slot is empty"
	}
	if (x == 7) {
		notification = document.getElementById("customNotificationTextField").value;
	}
	
	var notificationHistory = document.getElementById('notificationContent').innerHTML;
	if (notificationHistory === "&nbsp;") { 
		document.getElementById('notificationContent').innerHTML = notification;
		}
	else {
		document.getElementById('notificationContent').innerHTML = notificationHistory + "<br>" + notification;
	}
	
	
	document.getElementById('notificationContainer').style.display = "block";
}

function closeNotification() {
	document.getElementById('notificationContent').innerHTML = "&nbsp;";
	document.getElementById('notificationContainer').style.display = "none";
}

function toggleDesktopMode() {
	var tickbox = document.getElementById("desktopModeCheckbox");
	if (tickbox.checked) {
		document.getElementById('appWidthContainer').style.width = "1110px";
		document.getElementById('appWidthContainer').style.border = "0";
		document.getElementById('ButtonsContainer').style.marginTop = "0";
		var x = document.getElementsByClassName("desktop-mode-container");		
		var i;
		for (i = 0; i < x.length; i++) {
			x[i].style.border = "2px solid #000000";
			x[i].style.marginLeft = "5px";
			x[i].style.marginRight = "5px";
		}
		localStorage.setItem("Desktop_Mode_Enabled", "True");
	}	
	else {
		document.getElementById('appWidthContainer').style.width = "354px";
		document.getElementById('appWidthContainer').style.border = "2px solid #000000";
		document.getElementById('ButtonsContainer').style.marginTop = "10px";
		var x = document.getElementsByClassName("desktop-mode-container");
		var i;
		for (i = 0; i < x.length; i++) {
			x[i].style.border = "";
			x[i].style.marginLeft = "";
			x[i].style.marginRight = "";
		}
		localStorage.setItem("Desktop_Mode_Enabled", "False");
	}
}

function loadDesktopMode() {
	// Turns Desktop Mode on app startup if user enabled it
	var desktopModeEnabled = localStorage.getItem("Desktop_Mode_Enabled");
	if (desktopModeEnabled === "True") {
		document.getElementById('appWidthContainer').style.width = "1110px";
		document.getElementById('appWidthContainer').style.border = "0";
		document.getElementById('ButtonsContainer').style.marginTop = "0";
		var x = document.getElementsByClassName("desktop-mode-container");		
		var i;
		for (i = 0; i < x.length; i++) {
			x[i].style.border = "2px solid #000000";
			x[i].style.marginLeft = "5px";
			x[i].style.marginRight = "5px";
		}
		document.getElementById("desktopModeCheckbox").checked = true;
	}
	else {
		return;
	}
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Function that fires up event listeners for text fields. When user clicks enter key it executes the specified function without need to tap "Set"/"Proceed" etc. buttons.
function textFieldsEventListeners() {
// Lock password
document.getElementById("passwordTextFieldOpenLock").addEventListener("keyup", function(event) {
	if (event.keyCode === 13) {
		openLockStage2();
	}
});

// Setting up a username
document.getElementById("usernameTextField").addEventListener("keyup", function(event) {
	if (event.keyCode === 13) {
		changeUsername();
	}
});

// Sending a message in CONTROL Chat
document.getElementById("CONTROLchatWriteMessage").addEventListener("keyup", function(event) {
	if (event.keyCode === 13) {
		CONTROLsendChatMessage();
	}
});

// Lock password menu
// Set up
document.getElementById("passwordFirstTimeTextField").addEventListener("keyup", function(event) {
	if (event.keyCode === 13) {
		setupPasswordFirstTime();
	}
});

// Change
document.getElementById("passwordChangeNewPasswordTextField").addEventListener("keyup", function(event) {
	if (event.keyCode === 13) {
		lockPasswordChangeStage2();
	}
});

// Delete
document.getElementById("passwordDeleteTextField").addEventListener("keyup", function(event) {
	if (event.keyCode === 13) {
		lockPasswordDeleteStage2();
	}
});

// Disable
document.getElementById("passwordDisableTextField").addEventListener("keyup", function(event) {
	if (event.keyCode === 13) {
		lockPasswordDisableStage2();
	}
});

// Importing app preset
document.getElementById("importAppStatusTextField").addEventListener("keyup", function(event) {
	if (event.keyCode === 13) {
		importAppStatus();
	}
});

// Providing admin password
document.getElementById("password").addEventListener("keyup", function(event) {
	if (event.keyCode === 13) {
		processingPasswordFunction();
	}
});

// Defining third sex
document.getElementById("thirdSexTextField").addEventListener("keyup", function(event) {
	if (event.keyCode === 13) {
		setThirdSex();
	}
});
}

function labelLengthCheck(x) {
	var lengthCheck;
	if (x === "Checkbox" || x === "All")
	{
		for (i = 1; i < 4; i++) {
			lengthCheck = document.getElementById("CC" + i + "value1").innerHTML;
			if (lengthCheck.length >= 16) {
				document.getElementById("CC" + i + "value1").style.fontSize = "13px";
				document.getElementById("CC" + i + "value2").style.fontSize = "13px";
				document.getElementById("secondCheckboxCC" + i).style.marginLeft = "10px";
			}
			else if (lengthCheck.length >= 10) {
				document.getElementById("CC" + i + "value1").style.fontSize = "15px";
				document.getElementById("CC" + i + "value2").style.fontSize = "15px";
				document.getElementById("secondCheckboxCC" + i).style.marginLeft = "40px";
			}
			else {
				document.getElementById("CC" + i + "value1").style.fontSize = "18px";
				document.getElementById("CC" + i + "value2").style.fontSize = "18px";
				document.getElementById("secondCheckboxCC" + i).style.marginLeft = "78px";
			}
		}
	}
}

// Thanks ChatGPT
function getLastUpdatedTimestamp(lastUpdatedDate) {
  const currentDate = new Date();
  const updatedDate = new Date(lastUpdatedDate);

  const timeDifference = currentDate - updatedDate;
  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  const millisecondsPerMonth = 30 * millisecondsPerDay;
  const millisecondsPerYear = 365 * millisecondsPerDay;
  const millisecondsPerDecade = 10 * millisecondsPerYear;
  const millisecondsPerCentury = 100 * millisecondsPerYear;
  const millisecondsPerMillennium = 1000 * millisecondsPerYear;

  if (timeDifference < millisecondsPerDay) {
    return "Last updated today";
  } else if (timeDifference < millisecondsPerMonth) {
    const daysAgo = Math.floor(timeDifference / millisecondsPerDay);
    return `Last updated ${daysAgo} ${daysAgo === 1 ? "day" : "days"} ago`;
  } else if (timeDifference < millisecondsPerYear) {
    const monthsAgo = Math.floor(timeDifference / millisecondsPerMonth);
    return `Last updated ${monthsAgo} ${monthsAgo === 1 ? "month" : "months"} ago`;
  } else if (timeDifference < millisecondsPerDecade) {
    const yearsAgo = Math.floor(timeDifference / millisecondsPerYear);
    return `Last updated ${yearsAgo} ${yearsAgo === 1 ? "year" : "years"} ago`;
  } else if (timeDifference < millisecondsPerCentury) {
    const decadesAgo = Math.floor(timeDifference / millisecondsPerDecade);
    return `Last updated ${decadesAgo} ${decadesAgo === 1 ? "decade" : "decades"} ago`;
  } else if (timeDifference < millisecondsPerMillennium) {
    const centuriesAgo = Math.floor(timeDifference / millisecondsPerCentury);
    return `Last updated ${centuriesAgo} ${centuriesAgo === 1 ? "century" : "centuries"} ago`;
  } else {
    const millenniaAgo = Math.floor(timeDifference / millisecondsPerMillennium);
    return `Last updated ${millenniaAgo} ${millenniaAgo === 1 ? "millennium" : "millennia"} ago`;
  }
}

// Example usage
const lastUpdatedDate = "2024-04-01"; // Replace this with your last updated date

function appUpdateTime() {
	const output = getLastUpdatedTimestamp(lastUpdatedDate);
	var info = document.getElementById('minorUpdateInfo').innerHTML;
	document.getElementById('minorUpdateInfo').innerHTML = info + output;
}