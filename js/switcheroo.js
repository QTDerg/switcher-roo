function toggleAdvancedSettingsMenu() {
	var x = document.getElementById("AdvancedSettingsContainer");
	if (x.style.maxHeight === "0px") {
		x.style.maxHeight = "1430px";
	} else {
		x.style.maxHeight = "0px";
	}
}
	
function toggleAddRemoveSlidersMenu() {
	var x = document.getElementById("addRemoveSlidersContainer");
	if (x.style.maxHeight === "0px") {
		x.style.maxHeight = "600px";
		x.style.borderBottom = "3px solid #73728C";
	} else {
		x.style.maxHeight = "0px";
		x.style.borderBottom = "0";
	}
}
	
function toggleCustomSlidersMenu() {
	var x = document.getElementById("CustomSlidersContainer");
	if (x.style.maxHeight === "0px") {
		x.style.maxHeight = "390px";
	} else {
		x.style.maxHeight = "0px";
	}
}

function toggleCustomCheckboxesMenu() {
	var x = document.getElementById("CustomCheckboxesContainer");
	if (x.style.maxHeight === "0px") {
		x.style.maxHeight = "310px";
	} else {
		x.style.maxHeight = "0px";
	}
}

function toggleCustomSpeciesMenu() {
	var x = document.getElementById("CustomSpeciesContainer");
	if (x.style.maxHeight === "0px") {
		x.style.maxHeight = "300px";
	} else {
		x.style.maxHeight = "0px";
	}
}

function toggleCustomObjectsMenu() {
	var x = document.getElementById("defineInanimateObjectsContainer");
	if (x.style.maxHeight === "0px") {
		x.style.maxHeight = "300px";
	} else {
		x.style.maxHeight = "0px";
	}
}

function toggleHairColorsMenu() {
	var x = document.getElementById("defineHairColorsContainer");
	if (x.style.maxHeight === "0px") {
		x.style.maxHeight = "320px";
	} else {
		x.style.maxHeight = "0px";
	}
}

function toggleCockTypesMenu() {
	var x = document.getElementById("defineCockTypesContainer");
	if (x.style.maxHeight === "0px") {
		x.style.maxHeight = "320px";
	} else {
		x.style.maxHeight = "0px";
	}
}

function toggleThirdSexMenu() {
	var x = document.getElementById("ThirdSexContainer");
	if (x.style.maxHeight === "0px") {
		x.style.maxHeight = "80px";
	} else {
		x.style.maxHeight = "0px";
	}
}

function toggleRenamePresetsMenu() {
	var x = document.getElementById("renamePresetsContainer");
	if (x.style.maxHeight === "0px") {
		x.style.maxHeight = "560px";
	} else {
		x.style.maxHeight = "0px";
	}
}

function toggleBatteryDrainOptions() {
	var x = document.getElementById("batteryDrainOptionsContainer");
	if (x.style.maxHeight === "0px") {
		x.style.maxHeight = "330px";
	} else {
		x.style.maxHeight = "0px";
	}
}

function toggleCreativeModeStatusBarMenu() {
	var x = document.getElementById("creativeModeStatusBarContainer");
	if (x.style.maxHeight === "0px") {
		x.style.maxHeight = "490px";
	} else {
		x.style.maxHeight = "0px";
	}
}

function toggleCreativeModeCustomErrorMenu() {
	var x = document.getElementById("creativeModeCustomErrorContainer");
	if (x.style.maxHeight === "0px") {
		x.style.maxHeight = "600px";
	} else {
		x.style.maxHeight = "0px";
	}
}

function toggleCreativeModeCustomDropdownMenu() {
	var x = document.getElementById("creativeModeCustomDropdownContainer");
	if (x.style.maxHeight === "0px") {
		x.style.maxHeight = "220px";
	} else {
		x.style.maxHeight = "0px";
	}
}

function toggleFeedbackMenu() {
	var x = document.getElementById("feedback");
	if (x.style.maxHeight === "0px") {
		x.style.borderTop = "3px solid #73728C";
		x.style.maxHeight = "100px";
		x.style.marginTop = "10px";
	} else {
		x.style.borderTop = "0";
		x.style.maxHeight = "0px";
		x.style.marginTop = "0px";
	}
}

function showCredits() {
	var c = document.getElementById("credits");
	c.style.borderTop = "3px solid #73728C";
	c.style.maxHeight = "337px";
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
	document.getElementById("CustomSpeciesContainer").style.maxHeight='0px';
	document.getElementById("defineInanimateObjectsContainer").style.maxHeight='0px';
	document.getElementById("defineHairColorsContainer").style.maxHeight='0px';
	document.getElementById("defineCockTypesContainer").style.maxHeight='0px';
	document.getElementById("ThirdSexContainer").style.maxHeight='0px';
	document.getElementById("renamePresetsContainer").style.maxHeight='0px';
	document.getElementById("batteryDrainOptionsContainer").style.maxHeight='0px';
	document.getElementById("creativeModeStatusBarContainer").style.maxHeight='0px';
	document.getElementById("creativeModeCustomErrorContainer").style.maxHeight='0px';
	document.getElementById("creativeModeCustomDropdownContainer").style.maxHeight='0px';
	document.getElementById("charVizCharacterColorsContainer").style.maxHeight='0px';
	document.getElementById("charVizClothingContainer").style.maxHeight='0px';
	document.getElementById("charVizClothingColorsContainer").style.maxHeight='0px';
	document.getElementById("charVizOptionsContainer").style.maxHeight='0px';
	document.getElementById("charVizCreditsContainer").style.maxHeight='0px';
	document.getElementById("AdvancedSettingsContainer").style.display='block';
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
		
			if (coverage <= 10) {
				document.getElementById("coverage1").style.display = "block";	
				document.getElementById("coverage2").style.display = "none";	
				document.getElementById("coverage3").style.display = "none";	
				document.getElementById("coverage4").style.display = "none";
				setTimeout(changeCoverage, 20000);
			}
			else if (coverage >= 11 && coverage <=24) {
				document.getElementById("coverage1").style.display = "none";	
				document.getElementById("coverage2").style.display = "block";	
				document.getElementById("coverage3").style.display = "none";	
				document.getElementById("coverage4").style.display = "none";
				setTimeout(changeCoverage, 20000);
			}	
			else if (coverage >= 25 && coverage <=44) {
				document.getElementById("coverage1").style.display = "none";	
				document.getElementById("coverage2").style.display = "none";	
				document.getElementById("coverage3").style.display = "block";	
				document.getElementById("coverage4").style.display = "none";
				setTimeout(changeCoverage, 20000);
			}
			else if (coverage >= 45) {
				document.getElementById("coverage1").style.display = "none";	
				document.getElementById("coverage2").style.display = "none";	
				document.getElementById("coverage3").style.display = "none";	
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
		var tickbox = "Yes"
	}
	else {
		var tickbox = "No"
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

function batteryDrain() {
	var isCMon = localStorage.getItem("Creative_Mode_Enabled");
	if (isCMon === "Yes") {
		setTimeout(batteryDrain, 40000);
	}
	else {
		var isBatteryDisabled = localStorage.getItem("Battery_Disabled"); 
		if (isBatteryDisabled == "Yes") {
			return;
		}
		else {
			setTimeout(batteryDrain2, 40000);	
		}	
	}
}

function batteryDrain2() {
	var isCMon = localStorage.getItem("Creative_Mode_Enabled");
	if (isCMon === "Yes") {
		setTimeout(batteryDrain2, 40000);
	}
	else {
		document.getElementById("battery_full").style.display = "none";
		document.getElementById("battery_34").style.display = "block";	
		setTimeout(batteryDrain3, 40000);
	}
}

function batteryDrain3() {
	var isCMon = localStorage.getItem("Creative_Mode_Enabled");
	if (isCMon === "Yes") {
		setTimeout(batteryDrain3, 40000);
	}
	else {
		document.getElementById("battery_34").style.display = "none";
		document.getElementById("battery_half").style.display = "block";
		setTimeout(batteryDrain4, 40000);
	}
}

function batteryDrain4() {
	var isCMon = localStorage.getItem("Creative_Mode_Enabled");
	if (isCMon === "Yes") {
		setTimeout(batteryDrain4, 40000);
	}
	else {
		document.getElementById("battery_half").style.display = "none";
		document.getElementById("battery_14").style.display = "block";
		setTimeout(batteryDrain5, 40000);
	}
}

function batteryDrain5() {
	var isCMon = localStorage.getItem("Creative_Mode_Enabled");
	if (isCMon === "Yes") {
		setTimeout(batteryDrain5, 40000);
	}
	else {
		document.getElementById("battery_14").style.display = "none";
		document.getElementById("battery_low").style.display = "block";
		lowBatteryWait();
	}
}

function batteryCharge() {
	var isCMon = localStorage.getItem("Creative_Mode_Enabled");
	if (isCMon === "Yes") {
		return;
	}
	else {
		var doesBatteryNeedCharging = document.getElementById("battery_low");
		if (doesBatteryNeedCharging.style.display === "none"){
			return;
		}
		else {
			document.getElementById("battery_low").style.display = "none";
			document.getElementById("battery_low_charging").style.display = "block";
			setTimeout(batteryCharge2, 20000);
		}
	}
}

function batteryCharge2() {
	document.getElementById("battery_low_charging").style.display = "none";
	document.getElementById("battery_14_charging").style.display = "block";
	setTimeout(batteryCharge3, 20000);
}

function batteryCharge3() {
	document.getElementById("battery_14_charging").style.display = "none";
	document.getElementById("battery_half_charging").style.display = "block";
	setTimeout(batteryCharge4, 20000);
}

function batteryCharge4() {
	document.getElementById("battery_half_charging").style.display = "none";
	document.getElementById("battery_34_charging").style.display = "block";
	setTimeout(batteryCharge5, 20000);
}

function batteryCharge5() {
	document.getElementById("battery_34_charging").style.display = "none";
	document.getElementById("battery_full").style.display = "block";
	setTimeout(batteryDrain, 20000);
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

function switchLockFunction() {
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
	mySlider17.enable();
	mySlider18.enable();
	mySlider19.enable();
	mySlider20.enable();
	mySlider22.enable();
	mySlider23.enable();
	document.getElementById("radiobuttonMale").disabled = false;
	document.getElementById("radiobuttonFemale").disabled = false;
	document.getElementById("radiobuttonOther").disabled = false;
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
	mySlider17.disable();
	mySlider18.disable();
	mySlider19.disable();
	mySlider20.disable();
	mySlider22.disable();
	mySlider23.disable();
	document.getElementById("radiobuttonMale").disabled = true;
	document.getElementById("radiobuttonFemale").disabled = true;
	document.getElementById("radiobuttonOther").disabled = true;
	localStorage.setItem("Settings_Locked", "Yes");
	changeOptionsAppearanceToLocked();
}

function changeOptionsAppearanceToLocked() {
	var changeAppearance = localStorage.getItem("Change_Options_Appearance_When_App_Locked");
	if (changeAppearance != "No") {
		document.getElementById("speciesCurrentContainer").style.backgroundColor = '#282640';
		document.getElementById("inanimateObjectsCurrentContainer").style.backgroundColor = '#282640';
		document.getElementById("hairColorCurrentContainer").style.backgroundColor = '#282640';
		document.getElementById("cockTypeCurrentContainer").style.backgroundColor = '#282640';
		document.getElementById("speciesCurrentContainer").style.cursor = 'not-allowed';
		document.getElementById("inanimateObjectsCurrentContainer").style.cursor = 'not-allowed';
		document.getElementById("hairColorCurrentContainer").style.cursor = 'not-allowed';
		document.getElementById("cockTypeCurrentContainer").style.cursor = 'not-allowed';
		document.getElementById("adaptClothingContainer").style.cursor = 'not-allowed';
		document.getElementById("genitalsPenisContainer").style.cursor = 'not-allowed';
		document.getElementById("genitalsVaginaContainer").style.cursor = 'not-allowed';
		document.getElementById("RBMaleContainer").style.cursor = 'not-allowed';
		document.getElementById("RBFemaleContainer").style.cursor = 'not-allowed';
		document.getElementById("RBOtherContainer").style.cursor = 'not-allowed';
		document.getElementById("speciesSearch").style.cursor = 'not-allowed';
		document.getElementById("inanimateObjectsSearch").style.cursor = 'not-allowed';
		document.getElementById("hairColorSwatch").style.cursor = 'not-allowed';
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
		document.getElementById("hairColorCurrentContainer").style.backgroundColor = '#3b395e';
		document.getElementById("cockTypeCurrentContainer").style.backgroundColor = '#3b395e';
		document.getElementById("speciesCurrentContainer").style.cursor = 'pointer';
		document.getElementById("inanimateObjectsCurrentContainer").style.cursor = 'pointer';
		document.getElementById("hairColorCurrentContainer").style.cursor = 'pointer';
		document.getElementById("cockTypeCurrentContainer").style.cursor = 'pointer';
		document.getElementById("adaptClothingContainer").style.cursor = 'pointer';
		document.getElementById("genitalsPenisContainer").style.cursor = 'pointer';
		document.getElementById("genitalsVaginaContainer").style.cursor = 'pointer';
		document.getElementById("RBMaleContainer").style.cursor = 'pointer';
		document.getElementById("RBFemaleContainer").style.cursor = 'pointer';
		document.getElementById("RBOtherContainer").style.cursor = 'pointer';
		document.getElementById("speciesSearch").style.cursor = 'pointer';
		document.getElementById("inanimateObjectsSearch").style.cursor = 'pointer';
		document.getElementById("hairColorSwatch").style.cursor = 'pointer';
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
	
function toggleAdminModeFunction() {
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
		document.getElementById("errorMessageContainer").style.display = "block";
		document.getElementById("remoteLoginErrorMessage").style.display = "block";
		document.getElementById("RLEOkayContainer").style.display = "block";
		document.getElementById("RLEOkay").style.display= 'block';   
		document.getElementById("AdvancedSettingsContainer").style.display = "block";
		radiobtn = document.getElementById("radiobuttonFemale");
		radiobtn.checked = true;
		radiobtn2 = document.getElementById("radiobuttonMale");
		radiobtn2.checked = false;
		mySlider12.setValue(100);			// Set shy = 100
		mySlider4.setValue(0);				// Set tall = 0
		mySlider10.setValue(100);			// Set submissive = 100
		mySlider.setValue(100);				// Set fluffiness = 100
		closeLock();
	}
 
function hideRemoteLoginError () {
		document.getElementById("errorMessageContainer").style.display = "none";
		document.getElementById("remoteLoginErrorMessage").style.display = "none";
		document.getElementById("RLEOkayContainer").style.display = "none";
		document.getElementById("RLEOkay").style.display= 'none';  
	}
	
function error69() {
		document.getElementById("errorMessageContainer").style.display = "block";
		document.getElementById("error69Message").style.display = "block";
		document.getElementById("error69OkayContainer").style.display = "block";
		document.getElementById("error69Okay").style.display= 'block';  
		closeLock();
	}
	
function hideError69() {
		document.getElementById("errorMessageContainer").style.display = "none";
		document.getElementById("error69Message").style.display = "none";
		document.getElementById("error69OkayContainer").style.display = "none";
		document.getElementById("error69Okay").style.display= 'none';  
	}

function error621() {
		document.getElementById("container2").style.display = "none";
		document.getElementById("speciesMenu").style.display = "none";
		document.getElementById("sexMenu").style.display = "none";
		document.getElementById("adaptClothing").style.display= 'none';  
		document.getElementById("error621").style.display = "block";	
		document.getElementById("processingText").style.display = "none";
		mySlider6.setValue(99);	
		mySlider6.disable();	
		error621ChangeSlider();
		showSecondSliderHandle();
	}

function lowBatteryMessage() {
		var lowBatteryMessageSeen = localStorage.getItem("Low_Battery_Message_Seen");
		if (lowBatteryMessageSeen === "Yes") {
			return;
		}
		else {
			document.getElementById("errorMessageContainer").style.display = "block";
			document.getElementById("lowBatteryMessage").style.display = "block";
			document.getElementById("lowBatteryOkayContainer").style.display = "block";
			document.getElementById("lowBatteryOkay").style.display= 'block';  
		}
	}

function hideLowBatteryMessage(){
		document.getElementById("errorMessageContainer").style.display = "none";
		document.getElementById("lowBatteryMessage").style.display = "none";
		document.getElementById("lowBatteryOkayContainer").style.display = "none";
		document.getElementById("lowBatteryOkay").style.display= 'none';  
		var lowBatteryMessageSeen = "Yes";
		localStorage.setItem("Low_Battery_Message_Seen", lowBatteryMessageSeen);	
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
	document.getElementById("optionsList").style.maxHeight='800px';
	document.getElementById("optionsList").style.marginTop='15px';	
}
	
function goBackFunction() {
	document.getElementById("preferences").style.padding='10px';
	document.getElementById("preferences").style.border="2px solid #59568f";
	document.getElementById("preferences").style.fontSize='26px';
	document.getElementById("preferences").style.marginTop='5px';
	document.getElementById("goBack").style.padding='0px';
	document.getElementById("goBack").style.border='0';
	document.getElementById("goBack").style.fontSize='0px';
	document.getElementById("goBack").style.marginTop='0px';
	document.getElementById("optionsList").style.maxHeight='0';
	document.getElementById("optionsList").style.marginTop='0';
}

function showHideMenus() {
	document.getElementById("hideMenusButton").style.padding='0px';
	document.getElementById("hideMenusButton").style.border='0';
	document.getElementById("hideMenusButton").style.fontSize='0px';
	document.getElementById("hideMenusButton").style.marginTop='0px';
	document.getElementById("goBackHideMenusButton").style.padding='10px';
	document.getElementById("goBackHideMenusButton").style.border="2px solid #59568f";
	document.getElementById("goBackHideMenusButton").style.fontSize='26px';
	document.getElementById("goBackHideMenusButton").style.marginTop='5px';
	document.getElementById("hideMenusCheckboxesContainer").style.maxHeight='250px';
	document.getElementById("hideMenusCheckboxesContainer").style.marginTop='15px';	
}
	
function goBackFromHideMenus() {
	document.getElementById("hideMenusButton").style.padding='10px';
	document.getElementById("hideMenusButton").style.border="2px solid #59568f";
	document.getElementById("hideMenusButton").style.fontSize='26px';
	document.getElementById("hideMenusButton").style.marginTop='5px';
	document.getElementById("goBackHideMenusButton").style.padding='0px';
	document.getElementById("goBackHideMenusButton").style.border='0';
	document.getElementById("goBackHideMenusButton").style.fontSize='0px';
	document.getElementById("goBackHideMenusButton").style.marginTop='0px';
	document.getElementById("hideMenusCheckboxesContainer").style.maxHeight='0';
	document.getElementById("hideMenusCheckboxesContainer").style.marginTop='0';
}

function saveSex(sex) {
	var x;
	if (sex === "Male") {
		localStorage.setItem("Slot0_Sex", sex);
		showProcessingAnimation();
		document.getElementById("showAdvancedSettings4a").style.maxHeight= '60px';
		document.getElementById("showAdvancedSettings4a").style.borderBottom= '3px solid #73728C';
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
		document.getElementById("showAdvancedSettings4b").style.borderBottom= '3px solid #73728C';
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
		document.getElementById("showAdvancedSettings4b").style.borderBottom= '3px solid #73728C';
		document.getElementById("showAdvancedSettings4b").style.paddingBottom= '15px';
		document.getElementById("genitalSizeSlider").style.maxHeight= '60px';
		document.getElementById("genitalSizeSlider").style.borderBottom= '3px solid #73728C';
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
			if (isThirdSexOn === "No") {
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
	document.getElementById("errorMessageContainer").style.display = "block";
	document.getElementById("MSSErrorMessage").style.display = "block";
	document.getElementById("MSSOkayContainer").style.display = "block";
	document.getElementById("MSSOkay").style.display = "block";
}

function hideMSSError() {
	document.getElementById("errorMessageContainer").style.display = "none";
	document.getElementById("MSSErrorMessage").style.display = "none";
	document.getElementById("MSSOkayContainer").style.display = "none";	
	document.getElementById("MSSOkay").style.display = "none";	
}
 
function saveCurrentSpecies() {
	var settingSpecies = document.getElementById('speciesChoice').value 
	localStorage.setItem("Slot0_Species", settingSpecies);	 
	processingShowFunctionV2();
}
 
function saveCheckbox() {
	var tickbox = document.getElementById("adaptClothingCheckbox");
	var areSettingsLocked = localStorage.getItem("Settings_Locked");
	if (areSettingsLocked === "Yes") {
		if (tickbox.checked) {
			tickbox.checked = false;
		}
		else {
			tickbox.checked = true;
		}
	}
	else {
	if (tickbox.checked) {
		var tickbox = "Yes"
		localStorage.setItem("Slot0_AC_Box_Ticked", tickbox);
		showProcessingAnimation()
	}
	else {
		var tickbox = "No"
		localStorage.setItem("Slot0_AC_Box_Ticked", tickbox);
		showProcessingAnimation()
	} 
	}
}

function savePregnancyLockCheckbox() {
	var tickbox = document.getElementById("pregnancyLockCheckbox");
	var areSettingsLocked = localStorage.getItem("Settings_Locked");
	if (areSettingsLocked === "Yes") {
		if (tickbox.checked) {
			tickbox.checked = false;
		}
		else {
			tickbox.checked = true;
		}
	}
	else {
	if (tickbox.checked) {
		var tickbox = "Yes"
		localStorage.setItem("Slot0_Pregnancy_Lock_Box_Ticked", tickbox);
		showProcessingAnimation()
	}
	else {
		var tickbox = "No"
		localStorage.setItem("Slot0_Pregnancy_Lock_Box_Ticked", tickbox);
		showProcessingAnimation()
	} 
	}
}

function saveCheckboxGenitalsPenis() {
	var tickbox = document.getElementById("genitalsPenisCheckbox");
	var areSettingsLocked = localStorage.getItem("Settings_Locked");
	if (areSettingsLocked === "Yes") {
		if (tickbox.checked) {
			tickbox.checked = false;
		}
		else {
			tickbox.checked = true;
		}
	}
	else {
	if (tickbox.checked) {
		var tickbox = "Yes"
		localStorage.setItem("Slot0_Genitals_Menu_Penis_Box_Ticked", tickbox);
		showProcessingAnimation()
	}
	else {
		var tickbox = "No"
		localStorage.setItem("Slot0_Genitals_Menu_Penis_Box_Ticked", tickbox);
		showProcessingAnimation()
	} 
	}
}

function saveCheckboxGenitalsVagina() {
	var tickbox = document.getElementById("genitalsVaginaCheckbox");
	var areSettingsLocked = localStorage.getItem("Settings_Locked");
	if (areSettingsLocked === "Yes") {
		if (tickbox.checked) {
			tickbox.checked = false;
		}
		else {
			tickbox.checked = true;
		}
	}
	else {
	if (tickbox.checked) {
		var tickbox = "Yes"
		localStorage.setItem("Slot0_Genitals_Menu_Vagina_Box_Ticked", tickbox);
		showProcessingAnimation()
	}
	else {
		var tickbox = "No"
		localStorage.setItem("Slot0_Genitals_Menu_Vagina_Box_Ticked", tickbox);
		showProcessingAnimation()
	} 
	}
}

function saveCheckboxCustom1Value1() {
	var tickbox = document.getElementById("CC1value1Checkbox");
	var areSettingsLocked = localStorage.getItem("Settings_Locked");
	if (areSettingsLocked === "Yes") {
		if (tickbox.checked) {
			tickbox.checked = false;
		}
		else {
			tickbox.checked = true;
		}
	}
	else {
	if (tickbox.checked) {
		var tickbox = "Yes"
		localStorage.setItem("Slot0_Custom_Checkbox1_Value1_Ticked", tickbox);
		showProcessingAnimation()
	}
	else {
		var tickbox = "No"
		localStorage.setItem("Slot0_Custom_Checkbox1_Value1_Ticked", tickbox);
		showProcessingAnimation()
	} 
	}
}

function saveCheckboxCustom1Value2() {
	var tickbox = document.getElementById("CC1value2Checkbox");
	var areSettingsLocked = localStorage.getItem("Settings_Locked");
	if (areSettingsLocked === "Yes") {
		if (tickbox.checked) {
			tickbox.checked = false;
		}
		else {
			tickbox.checked = true;
		}
	}
	else {
	if (tickbox.checked) {
		var tickbox = "Yes"
		localStorage.setItem("Slot0_Custom_Checkbox1_Value2_Ticked", tickbox);
		showProcessingAnimation()
	}
	else {
		var tickbox = "No"
		localStorage.setItem("Slot0_Custom_Checkbox1_Value2_Ticked", tickbox);
		showProcessingAnimation()
	} 
	}
}

function saveCheckboxCustom2Value1() {
	var tickbox = document.getElementById("CC2value1Checkbox");
	var areSettingsLocked = localStorage.getItem("Settings_Locked");
	if (areSettingsLocked === "Yes") {
		if (tickbox.checked) {
			tickbox.checked = false;
		}
		else {
			tickbox.checked = true;
		}
	}
	else {
	if (tickbox.checked) {
		var tickbox = "Yes"
		localStorage.setItem("Slot0_Custom_Checkbox2_Value1_Ticked", tickbox);
		showProcessingAnimation()
	}
	else {
		var tickbox = "No"
		localStorage.setItem("Slot0_Custom_Checkbox2_Value1_Ticked", tickbox);
		showProcessingAnimation()
	} 
	}
}

function saveCheckboxCustom2Value2() {
	var tickbox = document.getElementById("CC2value2Checkbox");
	var areSettingsLocked = localStorage.getItem("Settings_Locked");
	if (areSettingsLocked === "Yes") {
		if (tickbox.checked) {
			tickbox.checked = false;
		}
		else {
			tickbox.checked = true;
		}
	}
	else {
	if (tickbox.checked) {
		var tickbox = "Yes"
		localStorage.setItem("Slot0_Custom_Checkbox2_Value2_Ticked", tickbox);
		showProcessingAnimation()
	}
	else {
		var tickbox = "No"
		localStorage.setItem("Slot0_Custom_Checkbox2_Value2_Ticked", tickbox);
		showProcessingAnimation()
	} 
	}
}

function saveCheckboxCustom3Value1() {
	var tickbox = document.getElementById("CC3value1Checkbox");
	var areSettingsLocked = localStorage.getItem("Settings_Locked");
	if (areSettingsLocked === "Yes") {
		if (tickbox.checked) {
			tickbox.checked = false;
		}
		else {
			tickbox.checked = true;
		}
	}
	else {
	if (tickbox.checked) {
		var tickbox = "Yes"
		localStorage.setItem("Slot0_Custom_Checkbox3_Value1_Ticked", tickbox);
		showProcessingAnimation()
	}
	else {
		var tickbox = "No"
		localStorage.setItem("Slot0_Custom_Checkbox3_Value1_Ticked", tickbox);
		showProcessingAnimation()
	} 
	}
}

function saveCheckboxCustom3Value2() {
	var tickbox = document.getElementById("CC3value2Checkbox");
	var areSettingsLocked = localStorage.getItem("Settings_Locked");
	if (areSettingsLocked === "Yes") {
		if (tickbox.checked) {
			tickbox.checked = false;
		}
		else {
			tickbox.checked = true;
		}
	}
	else {
	if (tickbox.checked) {
		var tickbox = "Yes"
		localStorage.setItem("Slot0_Custom_Checkbox3_Value2_Ticked", tickbox);
		showProcessingAnimation()
	}
	else {
		var tickbox = "No"
		localStorage.setItem("Slot0_Custom_Checkbox3_Value2_Ticked", tickbox);
		showProcessingAnimation()
	} 
	}
}

function showSaveSlotButtons() {
	document.getElementById("saveSlotButtons").style.marginTop='5px';
	document.getElementById("saveSlotButtons").style.border='3px solid #FF4550';
	document.getElementById("saveSlotButtons").style.maxHeight='220px';
	var saveSettingsButton = document.getElementById("saveSettingsButton");
	saveSettingsButton.style.padding = "0px";
	saveSettingsButton.style.border = "0";
	saveSettingsButton.style.fontSize = "0px";
	saveSettingsButton.style.marginTop = "0px";	 
}
 
function hideSaveSlotButtons() {
	document.getElementById("saveSlotButtons").style.marginTop='0';
	document.getElementById("saveSlotButtons").style.border='0';
	document.getElementById("saveSlotButtons").style.maxHeight='0';
	var saveSettingsButton = document.getElementById("saveSettingsButton");
	saveSettingsButton.style.padding = "10px";
	saveSettingsButton.style.border = "2px solid #59568f";
	saveSettingsButton.style.fontSize = "26px";
	saveSettingsButton.style.marginTop = "5px";	
}

function showLoadSlotButtons() {
	document.getElementById("loadSlotButtons").style.marginTop='5px';
	document.getElementById("loadSlotButtons").style.border='3px solid #4845ff';
	document.getElementById("loadSlotButtons").style.maxHeight='220px';
	var loadSettingsButton = document.getElementById("loadSettingsButton");
	loadSettingsButton.style.padding = "0px";
	loadSettingsButton.style.border = "0";
	loadSettingsButton.style.fontSize = "0px";
	loadSettingsButton.style.marginTop = "0px";	 
}
 
function hideLoadSlotButtons() {
	document.getElementById("loadSlotButtons").style.marginTop='0';
	document.getElementById("loadSlotButtons").style.border='0';
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
		document.getElementById("AdvancedSettingsContainer").style.display='block'; 
		var Species = localStorage.getItem("Slot0_Species");
		if (Species == null) {
			loadPS2();
		}
		else {
			document.getElementById('speciesCurrent').innerHTML = Species;
			loadPS2();
		}
	}

function loadPS2() {
		var Sex = localStorage.getItem("Slot0_Sex");
		if (Sex == null) {
			loadPS3();
		}
		else {
			if (Sex == "Male") {
				rbmale = document.getElementById("radiobuttonMale");
				rbmale.checked = true;
				loadPS3();
			}
			else if (Sex == "Female") {
				rbfemale = document.getElementById("radiobuttonFemale");
				rbfemale.checked = true;
				loadPS3();
			}
			else {
				rbother = document.getElementById("radiobuttonOther");
				rbother.checked = true;
				loadPS3();
			}
		}
	}
 
function loadPS3() {
		var AC_Box_Ticked = localStorage.getItem("Slot0_AC_Box_Ticked");
		if (AC_Box_Ticked == null) {
			loadPS4();
		}	
		else {
			if (AC_Box_Ticked == "Yes") {
				var tickbox = document.getElementById("adaptClothingCheckbox");
				tickbox.checked = true;
				loadPS4();
			}
			else {
				loadPS4();
			}	
		}
	}
 
function loadPS4() {
		var bodyType1 = localStorage.getItem("Slot0_Body_Type1");
		if (bodyType1 == null) {
			loadPS5();
		}
		else {
			mySlider6.setValue(bodyType1);	
			loadPS5();
		}		
	}

function loadPS5() {
		var bodyType2 = localStorage.getItem("Slot0_Body_Type2");
		if (bodyType2 == null) {
			loadPS6();
		}
		else {
			mySlider5.setValue(bodyType2);	
			loadPS6();
		}		
	}
 
function loadPS6() {
		var bodyType3 = localStorage.getItem("Slot0_Body_Type3");
		if (bodyType3 == null) {
			loadPS7();
		}
		else {
			mySlider4.setValue(bodyType3);	
			loadPS7();
		}		
	}
 
function loadPS7() {
		var hips = localStorage.getItem("Slot0_Hips");
		if (hips == null) {
			loadPS8();
		}
		else {
			mySlider3.setValue(hips);	
			loadPS8();
		}		
	}
 
function loadPS8() {
		var genitalSize = localStorage.getItem("Slot0_Genital_Size");
		if (genitalSize == null) {
			loadPS9();
		}
		else {
			mySlider2.setValue(genitalSize);
			loadPS9();
		}		
	}
		
function loadPS9() {
		var fluffiness = localStorage.getItem("Slot0_Fluffiness");
		if (fluffiness == null) {
			loadPS10();
		}
		else {
			mySlider.setValue(fluffiness);
			loadPS10();
		}		
	}		
  
function loadPS10() {
		var libido = localStorage.getItem("Slot0_Libido");
		if (libido == null) {
			loadPS11();
		}
		else {
			mySlider7.setValue(libido);
			loadPS11();
		}		
	}				
		
function loadPS11() {
		var domsub = localStorage.getItem("Slot0_Position_Preference");
		if (domsub == null) {
			loadPS12();
		}
		else {
			mySlider10.setValue(domsub);
			loadPS12();
		}		
	}		 
		
function loadPS12() {
		var sensitivity = localStorage.getItem("Slot0_Sensitivity");
		if (sensitivity == null) {
			loadPS13();
		}
		else {
			mySlider11.setValue(sensitivity);
			loadPS13();
		}		
	}		 		
 
function loadPS13() {
		var assertiveShy = localStorage.getItem("Slot0_Demeanor");
		if (assertiveShy == null) {
			loadPS14();
		}
		else {
			mySlider12.setValue(assertiveShy);
			loadPS14();
		}		
	}				
				
function loadPS14() {
		var buttSize = localStorage.getItem("Slot0_Butt_Size");	
		if (buttSize == null) {
			loadPS15();
		}
		else {
			mySlider13.setValue(buttSize);
			loadPS15();
		}		
	}		 
		
function loadPS15() {
		var bellySize = localStorage.getItem("Slot0_Belly_Size");
		if (bellySize == null) {
			loadPS16();
		}
		else {
			mySlider14.setValue(bellySize);
			loadPS16();
		}		
	}				
 
function loadPS16() {
		var bellyShape = localStorage.getItem("Slot0_Belly_Shape");
		if (bellyShape == null) {
			loadPS17();
		}
		else {
			mySlider15.setValue(bellyShape);
			loadPS17();
		}		
	}			
		
function loadPS17() {
		var intelligence = localStorage.getItem("Slot0_Intelligence");
		if (intelligence == null) {
			loadPS18();
		}
		else {
			mySlider16.setValue(intelligence);
			loadPS18();
		}		
	}			 
		
function loadPS18() {
		var cockType = localStorage.getItem("Slot0_Cock_Type");
		if (cockType == null) {
			loadPS19();
		}
		else {
			document.getElementById('cockTypeCurrent').innerHTML = cockType;
			loadPS19();
		}		
	}			
 
function loadPS19() {
		var Sex = localStorage.getItem("Slot0_Sex");
		if (Sex == null) {
			loadPS20();
		}
		else {
			if (Sex == "Male") {
				var breastSizeMale = localStorage.getItem("Slot0_Breast_Size_Male");
				if (breastSizeMale == null) {
					document.getElementById("showAdvancedSettings4a").style.maxHeight= '60px';
					document.getElementById("showAdvancedSettings4a").style.borderBottom= '3px solid #73728C';
					document.getElementById("showAdvancedSettings4a").style.paddingBottom= '15px';
					loadPS20();
				}
				else {
					document.getElementById("showAdvancedSettings4a").style.maxHeight= '60px';
					document.getElementById("showAdvancedSettings4a").style.borderBottom= '3px solid #73728C';
					document.getElementById("showAdvancedSettings4a").style.paddingBottom= '15px';
					document.getElementById("showAdvancedSettings4b").style.maxHeight= '0';
					document.getElementById("showAdvancedSettings4b").style.borderBottom= '0';
					document.getElementById("showAdvancedSettings4b").style.paddingBottom= '0';				
					mySlider9.setValue(breastSizeMale);
					loadPS20();
				}
			}
			else {
				var breastSizeFemale = localStorage.getItem("Slot0_Breast_Size_Female");
				if (breastSizeFemale == null) {
					document.getElementById("showAdvancedSettings4b").style.maxHeight= '60px';
					document.getElementById("showAdvancedSettings4b").style.borderBottom= '3px solid #73728C';
					document.getElementById("showAdvancedSettings4b").style.paddingBottom= '15px';
					loadPS20();
				}
				else {
					document.getElementById("showAdvancedSettings4b").style.maxHeight= '60px';
					document.getElementById("showAdvancedSettings4b").style.borderBottom= '3px solid #73728C';
					document.getElementById("showAdvancedSettings4b").style.paddingBottom= '15px';
					document.getElementById("showAdvancedSettings4a").style.maxHeight= '0';
					document.getElementById("showAdvancedSettings4a").style.borderBottom= '0';
					document.getElementById("showAdvancedSettings4a").style.paddingBottom= '0';				
					mySlider8.setValue(breastSizeFemale);
					loadPS20();
				}
			}
		}
	}

function loadPS20() {
		var disableBatteryCheckboxTicked = localStorage.getItem("Battery_Disabled");
		if (disableBatteryCheckboxTicked == null) {
			var tickbox = document.getElementById("disableBatteryCheckbox");
			tickbox.checked = true;
			loadPS21();
		}	
		else {
			if (disableBatteryCheckboxTicked == "Yes") {
				var tickbox = document.getElementById("disableBatteryCheckbox");
				tickbox.checked = true;
				loadPS21();
			}
			else {
				batteryDrain();
				loadPS21();
			}	
		}
	}

function loadPS21() {
		var hasUserEnteredPassword = localStorage.getItem("Admin_passwd_entered");
		if (hasUserEnteredPassword == null) {
			loadPS22();
		}	
		else {
			if (hasUserEnteredPassword == "Yes") {
				document.getElementById("adminbutton").style.display='none'; 
				document.getElementById("adminbuttontoggle").style.padding='10px';
				document.getElementById("adminbuttontoggle").style.border="2px solid #b30003";
				document.getElementById("adminbuttontoggle").style.fontSize='26px';
				document.getElementById("adminbuttontoggle").style.marginTop='5px';
				loadPS22();
			}
			else {
				loadPS22();
			}	
		}
	}

function loadPS22() {
		var isAdminModeOn = localStorage.getItem("Admin_mode_on");
		if (isAdminModeOn == null) {
			loadPS23();
		}	
		else {
			if (isAdminModeOn == "Yes") {
				document.getElementById('defaultcss').href='css/admindhtmlxslider.css';
				document.getElementById("adminPermsText").style.display='block';  
				loadPS23();
			}
			else {
				loadPS23();
			}	
		}
	}

function loadPS23() {
		var isUsernameButtonDisabled = localStorage.getItem("Username_Button_Hidden");
		if (isUsernameButtonDisabled == null) {
			loadPS24();
		}	
		else {
			if (isUsernameButtonDisabled == "Yes") {
				document.getElementById("usernameButton").style.padding='0px';
				document.getElementById("usernameButton").style.border='0';
				document.getElementById("usernameButton").style.fontSize='0px';
				document.getElementById("usernameButton").style.marginTop='0px';
				var tickbox = document.getElementById("hideUsernameCheckbox");
				tickbox.checked = true;				
				loadPS24();
			}
			else {
				loadPS24();
			}	
		}
	}

function loadPS24() {
		var alwaysShow = localStorage.getItem("Always_Show_Processing_Animation");
		if (alwaysShow == null) {
			loadPS25();
		}	
		else {
			if (alwaysShow == "Yes") {
				document.getElementById('processingText').innerHTML = "Processing...";
				document.getElementById("processingAnim").style.display='block';
				var tickbox = document.getElementById("alwaysShowCheckbox");
				tickbox.checked = true;				
				loadPS25();
			}
			else {
				loadPS25();
			}	
		}
	}
	
function loadPS25() {
		var hairLenght = localStorage.getItem("Slot0_Hair_Lenght");
		if (hairLenght == null) {
			loadPS27();
		}
		else {
			mySlider20.setValue(hairLenght);
			loadPS27();
		}		
	}
	
function loadPS27() {
		var feralAnthro = localStorage.getItem("Slot0_Feral_Anthro");
		if (feralAnthro == null) {
			loadPS28();
		}
		else {
			mySlider22.setValue(feralAnthro);
			loadPS28();
		}		
	}
	
function loadPS28() {
		var Box_Ticked = localStorage.getItem("Slot0_Pregnancy_Lock_Box_Ticked");
		if (Box_Ticked == null) {
			loadPS29();
		}	
		else {
			if (Box_Ticked == "Yes") {
				var tickbox = document.getElementById("pregnancyLockCheckbox");
				tickbox.checked = true;
				loadPS29();
			}
			else {
				loadPS29();
			}	
		}
	}
	
function loadPS29() {
		var fertility = localStorage.getItem("Slot0_Fertility");
		if (fertility == null) {
			loadPS30();
		}
		else {
			mySlider23.setValue(fertility);
			loadPS30();
		}		
	}
	
function loadPS30() {
		var Box_Ticked = localStorage.getItem("Slot0_Genitals_Menu_Penis_Box_Ticked");
		if (Box_Ticked == null) {
			loadPS31();
		}	
		else {
			if (Box_Ticked == "Yes") {
				var tickbox = document.getElementById("genitalsPenisCheckbox");
				tickbox.checked = true;
				loadPS31();
			}
			else {
				loadPS31();
			}	
		}
	}
	
function loadPS31() {
		var Box_Ticked = localStorage.getItem("Slot0_Genitals_Menu_Vagina_Box_Ticked");
		if (Box_Ticked == null) {
			loadPS32();
		}	
		else {
			if (Box_Ticked == "Yes") {
				var tickbox = document.getElementById("genitalsVaginaCheckbox");
				tickbox.checked = true;
				loadPS32();
			}
			else {
				loadPS32();
			}	
		}
	}
		
function loadPS32() { 		
		document.getElementById("AdvancedSettingsContainer").style.display='none'; 	
	}

function saveCockType() {
		var cockType = document.getElementById('cockType').value 
		localStorage.setItem("Slot0_Cock_Type", cockType);
	}

function toggleButtSizeSlider() {
var tickbox = document.getElementById("buttSizeSliderCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("buttSizeSlider").style.maxHeight= '60px';
		document.getElementById("buttSizeSlider").style.borderBottom= '3px solid #73728C';
		document.getElementById("buttSizeSlider").style.paddingBottom= '15px';
	}
	else {
		var tickbox = "No"
		document.getElementById("buttSizeSlider").style.maxHeight= '0';
		document.getElementById("buttSizeSlider").style.borderBottom= '0';
		document.getElementById("buttSizeSlider").style.paddingBottom= '0';
	}
	localStorage.setItem("Butt_Size_Slider_Enabled", tickbox);
}

function toggleBellySizeSlider() {
var tickbox = document.getElementById("bellySizeSliderCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("bellySizeSlider").style.maxHeight= '60px';
		document.getElementById("bellySizeSlider").style.borderBottom= '3px solid #73728C';
		document.getElementById("bellySizeSlider").style.paddingBottom= '15px';
	}
	else {
		var tickbox = "No"
		document.getElementById("bellySizeSlider").style.maxHeight= '0';
		document.getElementById("bellySizeSlider").style.borderBottom= '0';
		document.getElementById("bellySizeSlider").style.paddingBottom= '0';
	}
	localStorage.setItem("Belly_Size_Slider_Enabled", tickbox);
}

function toggleBellyShapeSlider() {
var tickbox = document.getElementById("bellyShapeSliderCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("bellyShapeSlider").style.maxHeight= '60px';
		document.getElementById("bellyShapeSlider").style.borderBottom= '3px solid #73728C';
		document.getElementById("bellyShapeSlider").style.paddingBottom= '15px';
	}
	else {
		var tickbox = "No"
		document.getElementById("bellyShapeSlider").style.maxHeight= '0';
		document.getElementById("bellyShapeSlider").style.borderBottom= '0';
		document.getElementById("bellyShapeSlider").style.paddingBottom= '0';
	}
	localStorage.setItem("Belly_Shape_Slider_Enabled", tickbox);
}

function toggleHipsSlider() {
var tickbox = document.getElementById("hipsSliderCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("hipsSlider").style.maxHeight= '60px';
		document.getElementById("hipsSlider").style.borderBottom= '3px solid #73728C';
		document.getElementById("hipsSlider").style.paddingBottom= '15px';
	}
	else {
		var tickbox = "No"
		document.getElementById("hipsSlider").style.maxHeight= '0';
		document.getElementById("hipsSlider").style.borderBottom= '0';
		document.getElementById("hipsSlider").style.paddingBottom= '0';
	}
	localStorage.setItem("Hips_Slider_Enabled", tickbox);
}

function toggleGenitalSizeSlider() {
var tickbox = document.getElementById("genitalSizeSliderCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("genitalSizeSlider").style.maxHeight= '60px';
		document.getElementById("genitalSizeSlider").style.borderBottom= '3px solid #73728C';
		document.getElementById("genitalSizeSlider").style.paddingBottom= '15px';
	}
	else {
		var tickbox = "No"
		document.getElementById("genitalSizeSlider").style.maxHeight= '0';
		document.getElementById("genitalSizeSlider").style.borderBottom= '0';
		document.getElementById("genitalSizeSlider").style.paddingBottom= '0';
	}
	localStorage.setItem("Genital_Size_Slider_Enabled", tickbox);
}

function toggleCockTypeMenu() {
var tickbox = document.getElementById("cockTypeMenuCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("cockTypeMenu").style.display= 'block';
		document.getElementById("advancedSettings7").style.display= 'block';
	}
	else {
		var tickbox = "No"
		document.getElementById("cockTypeMenu").style.display= 'none';
		document.getElementById("advancedSettings7").style.display= 'none';
	}
	localStorage.setItem("Cock_Type_Menu_Enabled", tickbox);
}

function toggleLibidoSlider() {
var tickbox = document.getElementById("libidoSliderCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("libidoSlider").style.maxHeight= '60px';
		document.getElementById("libidoSlider").style.borderBottom= '3px solid #73728C';
		document.getElementById("libidoSlider").style.paddingBottom= '15px';
	}
	else {
		var tickbox = "No"
		document.getElementById("libidoSlider").style.maxHeight= '0';
		document.getElementById("libidoSlider").style.borderBottom= '0';
		document.getElementById("libidoSlider").style.paddingBottom= '0';
	}
	localStorage.setItem("Libido_Slider_Enabled", tickbox);
}

function toggleSensitivitySlider() {
var tickbox = document.getElementById("sensitivitySliderCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("sensitivitySlider").style.maxHeight= '60px';
		document.getElementById("sensitivitySlider").style.borderBottom= '3px solid #73728C';
		document.getElementById("sensitivitySlider").style.paddingBottom= '15px';
	}
	else {
		var tickbox = "No"
		document.getElementById("sensitivitySlider").style.maxHeight= '0';
		document.getElementById("sensitivitySlider").style.borderBottom= '0';
		document.getElementById("sensitivitySlider").style.paddingBottom= '0';
	}
	localStorage.setItem("Sensitivity_Slider_Enabled", tickbox);
}

function toggleDemeanorSlider() {
var tickbox = document.getElementById("demeanorSliderCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("demeanorSlider").style.maxHeight= '60px';
		document.getElementById("demeanorSlider").style.borderBottom= '3px solid #73728C';
		document.getElementById("demeanorSlider").style.paddingBottom= '15px';
	}
	else {
		var tickbox = "No"
		document.getElementById("demeanorSlider").style.maxHeight= '0';
		document.getElementById("demeanorSlider").style.borderBottom= '0';
		document.getElementById("demeanorSlider").style.paddingBottom= '0';
	}
	localStorage.setItem("Demeanor_Slider_Enabled", tickbox);
}

function togglePositionPreferenceSlider() {
var tickbox = document.getElementById("positionPreferenceSliderCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("positionPrefSlider").style.maxHeight= '60px';
		document.getElementById("positionPrefSlider").style.borderBottom= '3px solid #73728C';
		document.getElementById("positionPrefSlider").style.paddingBottom= '15px';
	}
	else {
		var tickbox = "No"
		document.getElementById("positionPrefSlider").style.maxHeight= '0';
		document.getElementById("positionPrefSlider").style.borderBottom= '0';
		document.getElementById("positionPrefSlider").style.paddingBottom= '0';
	}
	localStorage.setItem("Postion_Pref_Slider_Enabled", tickbox);
}

function toggleIntelligenceSlider() {
var tickbox = document.getElementById("intelligenceSliderCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("intelligenceSlider").style.maxHeight= '60px';
		document.getElementById("intelligenceSlider").style.borderBottom= '3px solid #73728C';
		document.getElementById("intelligenceSlider").style.paddingBottom= '15px';
	}
	else {
		var tickbox = "No"
		document.getElementById("intelligenceSlider").style.maxHeight= '0';
		document.getElementById("intelligenceSlider").style.borderBottom= '0';
		document.getElementById("intelligenceSlider").style.paddingBottom= '0';
	}
	localStorage.setItem("Intelligence_Slider_Enabled", tickbox);
}

function toggleFluffinessSlider() {
var tickbox = document.getElementById("fluffinessSliderCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("fluffinessSlider").style.maxHeight= '60px';
		document.getElementById("fluffinessSlider").style.borderBottom= '3px solid #73728C';
		document.getElementById("fluffinessSlider").style.paddingBottom= '15px';
	}
	else {
		var tickbox = "No"
		document.getElementById("fluffinessSlider").style.maxHeight= '0';
		document.getElementById("fluffinessSlider").style.borderBottom= '0';
		document.getElementById("fluffinessSlider").style.paddingBottom= '0';
	}
	localStorage.setItem("Fluffiness_Slider_Enabled", tickbox);
}

function toggleHairLenghtSlider() {
var tickbox = document.getElementById("hairLenghtSliderCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("hairLenghtSlider").style.maxHeight= '60px';
		document.getElementById("hairLenghtSlider").style.borderBottom= '3px solid #73728C';
		document.getElementById("hairLenghtSlider").style.paddingBottom= '15px';
	}
	else {
		var tickbox = "No"
		document.getElementById("hairLenghtSlider").style.maxHeight= '0';
		document.getElementById("hairLenghtSlider").style.borderBottom= '0';
		document.getElementById("hairLenghtSlider").style.paddingBottom= '0';
	}
	localStorage.setItem("Hair_Lenght_Slider_Enabled", tickbox);
}

function toggleFeralAnthroSlider() {
var tickbox = document.getElementById("feralAnthroSliderCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("feralAnthroSlider").style.maxHeight= '60px';
		document.getElementById("feralAnthroSlider").style.borderBottom= '3px solid #73728C';
		document.getElementById("feralAnthroSlider").style.paddingBottom= '15px';
	}
	else {
		var tickbox = "No"
		document.getElementById("feralAnthroSlider").style.maxHeight= '0';
		document.getElementById("feralAnthroSlider").style.borderBottom= '0';
		document.getElementById("feralAnthroSlider").style.paddingBottom= '0';
	}
	localStorage.setItem("Feral_Anthro_Slider_Enabled", tickbox);
}

function toggleFertilitySlider() {
var tickbox = document.getElementById("fertilitySliderCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("fertilitySlider").style.maxHeight= '98px';
		document.getElementById("fertilitySlider").style.borderBottom= '3px solid #73728C';
	}
	else {
		var tickbox = "No"
		document.getElementById("fertilitySlider").style.maxHeight= '0';
		document.getElementById("fertilitySlider").style.borderBottom= '0';
	}
	localStorage.setItem("Fertility_Slider_Enabled", tickbox);
}

function toggleHairColorMenu() {
var tickbox = document.getElementById("hairColorMenuCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("hairColorMenu").style.display= 'block';
		document.getElementById("advancedSettings6").style.display= 'block';
	}
	else {
		var tickbox = "No"
		document.getElementById("hairColorMenu").style.display= 'none';
		document.getElementById("advancedSettings6").style.display= 'none';
	}
	localStorage.setItem("Hair_Color_Menu_Enabled", tickbox);
}

function toggleGenitalsMenu() {
var tickbox = document.getElementById("genitalsCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("genitalsMenu").style.display= 'block';
	}
	else {
		var tickbox = "No"
		document.getElementById("genitalsMenu").style.display= 'none';
	}
	localStorage.setItem("Genitals_Menu_Enabled", tickbox);
}

function toggleSpeciesMenu() {
var tickbox = document.getElementById("speciesCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("speciesMenu").style.display= 'block';
	}
	else {
		var tickbox = "No"
		document.getElementById("speciesMenu").style.display= 'none';
	}
	localStorage.setItem("Species_Menu_Enabled", tickbox);
}

function toggleSexMenu() {
var tickbox = document.getElementById("sexCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("sexMenu").style.display= 'block';
	}
	else {
		var tickbox = "No"
		document.getElementById("sexMenu").style.display= 'none';
	}
	localStorage.setItem("Sex_Menu_Enabled", tickbox);
}

function toggleAdaptClothingCheckbox() {
var tickbox = document.getElementById("toggleAdaptClothingCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("adaptClothing").style.display= 'block';
	}
	else {
		var tickbox = "No"
		document.getElementById("adaptClothing").style.display= 'none';
	}
	localStorage.setItem("AC_Menu_Enabled", tickbox);
}

function toggleMascFemSlider() {
var tickbox = document.getElementById("mascFemCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("bodyType1Slider").style.maxHeight= '60px';
		document.getElementById("bodyType1Slider").style.borderBottom= '3px solid #73728C';
		document.getElementById("bodyType1Slider").style.paddingBottom= '15px';
	}
	else {
		var tickbox = "No"
		document.getElementById("bodyType1Slider").style.maxHeight= '0';
		document.getElementById("bodyType1Slider").style.borderBottom= '0';
		document.getElementById("bodyType1Slider").style.paddingBottom= '0';
	}
	localStorage.setItem("MascFem_Slider_Enabled", tickbox);
}

function toggleThinThiccSlider() {
var tickbox = document.getElementById("thinThiccCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("bodyType2Slider").style.maxHeight= '60px';
		document.getElementById("bodyType2Slider").style.borderBottom= '3px solid #73728C';
		document.getElementById("bodyType2Slider").style.paddingBottom= '15px';
	}
	else {
		var tickbox = "No"
		document.getElementById("bodyType2Slider").style.maxHeight= '0';
		document.getElementById("bodyType2Slider").style.borderBottom= '0';
		document.getElementById("bodyType2Slider").style.paddingBottom= '0';
	}
	localStorage.setItem("ThinThicc_Slider_Enabled", tickbox);
}

function toggleSmolTallSlider() {
var tickbox = document.getElementById("smolTallCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("bodyType3Slider").style.maxHeight= '60px';
		document.getElementById("bodyType3Slider").style.borderBottom= '3px solid #73728C';
		document.getElementById("bodyType3Slider").style.paddingBottom= '15px';
	}
	else {
		var tickbox = "No"
		document.getElementById("bodyType3Slider").style.maxHeight= '0';
		document.getElementById("bodyType3Slider").style.borderBottom= '0';
		document.getElementById("bodyType3Slider").style.paddingBottom= '0';
	}
	localStorage.setItem("SmolTall_Slider_Enabled", tickbox);
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
	var feralAnthroSliderEnabled = localStorage.getItem("Feral_Anthro_Slider_Enabled");
	var hairColorMenuEnabled = localStorage.getItem("Hair_Color_Menu_Enabled");
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
		document.getElementById("buttSizeSlider").style.maxHeight= '60px';
		document.getElementById("buttSizeSlider").style.borderBottom= '3px solid #73728C';
		document.getElementById("buttSizeSlider").style.paddingBottom= '15px';
	}
	else {
		document.getElementById("buttSizeSliderCheckbox").checked = false;
		document.getElementById("buttSizeSlider").style.maxHeight= '0';
		document.getElementById("buttSizeSlider").style.borderBottom= '0';
		document.getElementById("buttSizeSlider").style.paddingBottom= '0';
	}

	if (bellySizeSliderEnabled != "No") {
		document.getElementById("bellySizeSliderCheckbox").checked = true;
		document.getElementById("bellySizeSlider").style.maxHeight= '60px';
		document.getElementById("bellySizeSlider").style.borderBottom= '3px solid #73728C';
		document.getElementById("bellySizeSlider").style.paddingBottom= '15px';
	}
	else {
		document.getElementById("bellySizeSliderCheckbox").checked = false;
		document.getElementById("bellySizeSlider").style.maxHeight= '0';
		document.getElementById("bellySizeSlider").style.borderBottom= '0';
		document.getElementById("bellySizeSlider").style.paddingBottom= '0';
	}
	
	if (bellyShapeSliderEnabled === "Yes") {// Disabled on default.
		document.getElementById("bellyShapeSliderCheckbox").checked = true;
		document.getElementById("bellyShapeSlider").style.maxHeight= '60px';
		document.getElementById("bellyShapeSlider").style.borderBottom= '3px solid #73728C';
		document.getElementById("bellyShapeSlider").style.paddingBottom= '15px';
	} 
	else {
		document.getElementById("bellyShapeSliderCheckbox").checked = false;
		document.getElementById("bellyShapeSlider").style.maxHeight= '0';
		document.getElementById("bellyShapeSlider").style.borderBottom= '0';
		document.getElementById("bellyShapeSlider").style.paddingBottom= '0';
	}
	
	if (hipsSliderEnabled != "No") {
		document.getElementById("hipsSliderCheckbox").checked = true;
		document.getElementById("hipsSlider").style.maxHeight= '60px';
		document.getElementById("hipsSlider").style.borderBottom= '3px solid #73728C';
		document.getElementById("hipsSlider").style.paddingBottom= '15px';
	}
	else {
		document.getElementById("hipsSliderCheckbox").checked = false;
		document.getElementById("hipsSlider").style.maxHeight= '0';
		document.getElementById("hipsSlider").style.borderBottom= '0';
		document.getElementById("hipsSlider").style.paddingBottom= '0';
	}
	
	if (genitalSizeSliderEnabled != "No") {
		document.getElementById("genitalSizeSliderCheckbox").checked = true;
		document.getElementById("genitalSizeSlider").style.maxHeight= '60px';
		document.getElementById("genitalSizeSlider").style.borderBottom= '3px solid #73728C';
		document.getElementById("genitalSizeSlider").style.paddingBottom= '15px';
	}
	else {
		document.getElementById("genitalSizeSliderCheckbox").checked = false;
		document.getElementById("genitalSizeSlider").style.maxHeight= '0';
		document.getElementById("genitalSizeSlider").style.borderBottom= '0';
		document.getElementById("genitalSizeSlider").style.paddingBottom= '0';
	}
	
	if (cockTypeMenuEnabled === "Yes") {
		document.getElementById("cockTypeMenuCheckbox").checked = true;
		document.getElementById("cockTypeMenu").style.display= 'block';
		document.getElementById("advancedSettings7").style.display= 'block';
	}
	else {
		document.getElementById("cockTypeMenuCheckbox").checked = false;
		document.getElementById("cockTypeMenu").style.display= 'none';
		document.getElementById("advancedSettings7").style.display= 'none';
	}
	
	if (libidoSliderEnabled === "Yes") {
		document.getElementById("libidoSliderCheckbox").checked = true;
		document.getElementById("libidoSlider").style.maxHeight= '60px';
		document.getElementById("libidoSlider").style.borderBottom= '3px solid #73728C';
		document.getElementById("libidoSlider").style.paddingBottom= '15px';
	}
	else {
		document.getElementById("libidoSliderCheckbox").checked = false;
		document.getElementById("libidoSlider").style.maxHeight= '0';
		document.getElementById("libidoSlider").style.borderBottom= '0';
		document.getElementById("libidoSlider").style.paddingBottom= '0';
	}
	
	if (sensitivitySliderEnabled === "Yes") {
		document.getElementById("sensitivitySliderCheckbox").checked = true;
		document.getElementById("sensitivitySlider").style.maxHeight= '60px';
		document.getElementById("sensitivitySlider").style.borderBottom= '3px solid #73728C';
		document.getElementById("sensitivitySlider").style.paddingBottom= '15px';
	}
	else {
		document.getElementById("sensitivitySliderCheckbox").checked = false;
		document.getElementById("sensitivitySlider").style.maxHeight= '0';
		document.getElementById("sensitivitySlider").style.borderBottom= '0';
		document.getElementById("sensitivitySlider").style.paddingBottom= '0';
	}
	
	if (demeanorSliderEnabled != "No") {
		document.getElementById("demeanorSliderCheckbox").checked = true;
		document.getElementById("demeanorSlider").style.maxHeight= '60px';
		document.getElementById("demeanorSlider").style.borderBottom= '3px solid #73728C';
		document.getElementById("demeanorSlider").style.paddingBottom= '15px';
	}
	else {
		document.getElementById("demeanorSliderCheckbox").checked = false;
		document.getElementById("demeanorSlider").style.maxHeight= '0';
		document.getElementById("demeanorSlider").style.borderBottom= '0';
		document.getElementById("demeanorSlider").style.paddingBottom= '0';
	}
	
	if (positionPrefSliderEnabled != "No") {
		document.getElementById("positionPreferenceSliderCheckbox").checked = true;
		document.getElementById("positionPrefSlider").style.maxHeight= '60px';
		document.getElementById("positionPrefSlider").style.borderBottom= '3px solid #73728C';
		document.getElementById("positionPrefSlider").style.paddingBottom= '15px';
	}
	else {
		document.getElementById("positionPreferenceSliderCheckbox").checked = false;
		document.getElementById("positionPrefSlider").style.maxHeight= '0';
		document.getElementById("positionPrefSlider").style.borderBottom= '0';
		document.getElementById("positionPrefSlider").style.paddingBottom= '0';
	}
	
	if (intelligenceSliderEnabled === "Yes") {
		document.getElementById("intelligenceSliderCheckbox").checked = true;
		document.getElementById("intelligenceSlider").style.maxHeight= '60px';
		document.getElementById("intelligenceSlider").style.borderBottom= '3px solid #73728C';
		document.getElementById("intelligenceSlider").style.paddingBottom= '15px';
	}
	else {
		document.getElementById("intelligenceSliderCheckbox").checked = false;
		document.getElementById("intelligenceSlider").style.maxHeight= '0';
		document.getElementById("intelligenceSlider").style.borderBottom= '0';
		document.getElementById("intelligenceSlider").style.paddingBottom= '0';
	}
	
	if (fluffinessSliderEnabled != "No") {
		document.getElementById("fluffinessSliderCheckbox").checked = true;
		document.getElementById("fluffinessSlider").style.maxHeight= '60px';
		document.getElementById("fluffinessSlider").style.borderBottom= '3px solid #73728C';
		document.getElementById("fluffinessSlider").style.paddingBottom= '15px';
	}
	else {
		document.getElementById("fluffinessSliderCheckbox").checked = false;
		document.getElementById("fluffinessSlider").style.maxHeight= '0';
		document.getElementById("fluffinessSlider").style.borderBottom= '0';
		document.getElementById("fluffinessSlider").style.paddingBottom= '0';
	}
	
	if (hairLenghtSliderEnabled != "No") {
		document.getElementById("hairLenghtSliderCheckbox").checked = true;
		document.getElementById("hairLenghtSlider").style.maxHeight= '60px';
		document.getElementById("hairLenghtSlider").style.borderBottom= '3px solid #73728C';
		document.getElementById("hairLenghtSlider").style.paddingBottom= '15px';
	}
	else {
		document.getElementById("hairLenghtSliderCheckbox").checked = false;
		document.getElementById("hairLenghtSlider").style.maxHeight= '0';
		document.getElementById("hairLenghtSlider").style.borderBottom= '0';
		document.getElementById("hairLenghtSlider").style.paddingBottom= '0';
	}
	
	if (hairColorMenuEnabled != "No") {
		document.getElementById("hairColorMenuCheckbox").checked = true;
		document.getElementById("hairColorMenu").style.display= 'block';
		document.getElementById("advancedSettings6").style.display= 'block';
	}
	else {
		document.getElementById("hairColorMenuCheckbox").checked = false;
		document.getElementById("hairColorMenu").style.display= 'none';
		document.getElementById("advancedSettings6").style.display= 'none';
	}
		
	if (feralAnthroSliderEnabled === "Yes") {
		document.getElementById("feralAnthroSliderCheckbox").checked = true;
		document.getElementById("feralAnthroSlider").style.maxHeight= '60px';
		document.getElementById("feralAnthroSlider").style.borderBottom= '3px solid #73728C';
		document.getElementById("feralAnthroSlider").style.paddingBottom= '15px';
	}
	else {
		document.getElementById("feralAnthroSliderCheckbox").checked = false;
		document.getElementById("feralAnthroSlider").style.maxHeight= '0';
		document.getElementById("feralAnthroSlider").style.borderBottom= '0';
		document.getElementById("feralAnthroSlider").style.paddingBottom= '0';
	}
	
	if (fertilitySliderEnabled === "Yes") {
		document.getElementById("fertilitySliderCheckbox").checked = true;
		document.getElementById("fertilitySlider").style.maxHeight= '98px';
		document.getElementById("fertilitySlider").style.borderBottom= '3px solid #73728C';
	}
	else {
		document.getElementById("fertilitySliderCheckbox").checked = false;
		document.getElementById("fertilitySlider").style.maxHeight= '0';
		document.getElementById("fertilitySlider").style.borderBottom= '0';
	}
	
	if (genitalsMenuEnabled === "Yes") {
		document.getElementById("genitalsCheckbox").checked = true;
		document.getElementById("genitalsMenu").style.display= 'block';
	}
	else {
		document.getElementById("genitalsCheckbox").checked = false;
		document.getElementById("genitalsMenu").style.display= 'none';
	}
	
	if (speciesMenuEnabled === "No") {
		document.getElementById("speciesCheckbox").checked = false;
		document.getElementById("speciesMenu").style.display= 'none';
	}
	else {
		document.getElementById("speciesCheckbox").checked = true;
		document.getElementById("speciesMenu").style.display= 'block';
	}
	
	if (sexMenuEnabled === "No") {
		document.getElementById("sexCheckbox").checked = false;
		document.getElementById("sexMenu").style.display= 'none';
	}
	else {
		document.getElementById("sexCheckbox").checked = true;
		document.getElementById("sexMenu").style.display= 'block';
	}
	
	if (acMenuEnabled === "No") {
		document.getElementById("toggleAdaptClothingCheckbox").checked = false;
		document.getElementById("adaptClothing").style.display= 'none';		
	}
	else {
		document.getElementById("toggleAdaptClothingCheckbox").checked = true;
		document.getElementById("adaptClothing").style.display= 'block';	
	}
	
	if (mascFemSliderEnabled === "No") {
		document.getElementById("mascFemCheckbox").checked = false;
		document.getElementById("bodyType1Slider").style.maxHeight= '0';
		document.getElementById("bodyType1Slider").style.borderBottom= '0';
		document.getElementById("bodyType1Slider").style.paddingBottom= '0';		
	}
	else {
		document.getElementById("mascFemCheckbox").checked = true;
		document.getElementById("bodyType1Slider").style.maxHeight= '60px';
		document.getElementById("bodyType1Slider").style.borderBottom= '3px solid #73728C';
		document.getElementById("bodyType1Slider").style.paddingBottom= '15px';
	}
	
	if (thinThiccSliderEnabled === "No") {
		document.getElementById("thinThiccCheckbox").checked = false;
		document.getElementById("bodyType2Slider").style.maxHeight= '0';
		document.getElementById("bodyType2Slider").style.borderBottom= '0';
		document.getElementById("bodyType2Slider").style.paddingBottom= '0';		
	}
	else {
		document.getElementById("thinThiccCheckbox").checked = true;
		document.getElementById("bodyType2Slider").style.maxHeight= '60px';
		document.getElementById("bodyType2Slider").style.borderBottom= '3px solid #73728C';
		document.getElementById("bodyType2Slider").style.paddingBottom= '15px';
	}
	
	if (smolTallSliderEnabled === "No") {
		document.getElementById("smolTallCheckbox").checked = false;
		document.getElementById("bodyType3Slider").style.maxHeight= '0';
		document.getElementById("bodyType3Slider").style.borderBottom= '0';
		document.getElementById("bodyType3Slider").style.paddingBottom= '0';
	}
	else {
		document.getElementById("smolTallCheckbox").checked = true;
		document.getElementById("bodyType3Slider").style.maxHeight= '60px';
		document.getElementById("bodyType3Slider").style.borderBottom= '3px solid #73728C';
		document.getElementById("bodyType3Slider").style.paddingBottom= '15px';
	}
	
	if (inanimateObjectsMenuEnabled === "Yes") {
		document.getElementById("inanimateObjectsCheckbox").checked = true;	
		document.getElementById("inanimateObjectsMenu").style.display='block';
		document.getElementById("advancedSettings5").style.display='block';
	} 
	else {
		document.getElementById("inanimateObjectsCheckbox").checked = false;
		document.getElementById("inanimateObjectsMenu").style.display='none';
		document.getElementById("advancedSettings5").style.display='none';
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

function lockPresetName1() {
	var tickbox = document.getElementById("lockPresetName1Checkbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		localStorage.setItem("Slot1_Preset_Name_Locked", tickbox);
		document.getElementById("setPresetName1Button").style.backgroundColor='#424242';
		document.getElementById("setPresetName1Button").style.border='2px solid #b0b0b0';
		document.getElementById("setPresetName1Button").style.cursor='not-allowed';
	}
	else {
		var tickbox = "No"
		localStorage.setItem("Slot1_Preset_Name_Locked", tickbox);
		document.getElementById("setPresetName1Button").style.backgroundColor='#282640';
		document.getElementById("setPresetName1Button").style.border='2px solid #59568f';
		document.getElementById("setPresetName1Button").style.cursor='pointer';
	}
}

function lockPresetName2() {
	var tickbox = document.getElementById("lockPresetName2Checkbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		localStorage.setItem("Slot2_Preset_Name_Locked", tickbox);
		document.getElementById("setPresetName2Button").style.backgroundColor='#424242';
		document.getElementById("setPresetName2Button").style.border='2px solid #b0b0b0';
		document.getElementById("setPresetName2Button").style.cursor='not-allowed';
	}
	else {
		var tickbox = "No"
		localStorage.setItem("Slot2_Preset_Name_Locked", tickbox);
		document.getElementById("setPresetName2Button").style.backgroundColor='#282640';
		document.getElementById("setPresetName2Button").style.border='2px solid #59568f';
		document.getElementById("setPresetName2Button").style.cursor='pointer';
	}
}

function lockPresetName3() {
	var tickbox = document.getElementById("lockPresetName3Checkbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		localStorage.setItem("Slot3_Preset_Name_Locked", tickbox);
		document.getElementById("setPresetName3Button").style.backgroundColor='#424242';
		document.getElementById("setPresetName3Button").style.border='2px solid #b0b0b0';
		document.getElementById("setPresetName3Button").style.cursor='not-allowed';
	}
	else {
		var tickbox = "No"
		localStorage.setItem("Slot3_Preset_Name_Locked", tickbox);
		document.getElementById("setPresetName3Button").style.backgroundColor='#282640';
		document.getElementById("setPresetName3Button").style.border='2px solid #59568f';
		document.getElementById("setPresetName3Button").style.cursor='pointer';
	}
}

function lockPresetName4() {
	var tickbox = document.getElementById("lockPresetName4Checkbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		localStorage.setItem("Slot4_Preset_Name_Locked", tickbox);
		document.getElementById("setPresetName4Button").style.backgroundColor='#424242';
		document.getElementById("setPresetName4Button").style.border='2px solid #b0b0b0';
		document.getElementById("setPresetName4Button").style.cursor='not-allowed';
	}
	else {
		var tickbox = "No"
		localStorage.setItem("Slot4_Preset_Name_Locked", tickbox);
		document.getElementById("setPresetName4Button").style.backgroundColor='#282640';
		document.getElementById("setPresetName4Button").style.border='2px solid #59568f';
		document.getElementById("setPresetName4Button").style.cursor='pointer';
	}
}

function lockPresetName5() {
	var tickbox = document.getElementById("lockPresetName5Checkbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		localStorage.setItem("Slot5_Preset_Name_Locked", tickbox);
		document.getElementById("setPresetName5Button").style.backgroundColor='#424242';
		document.getElementById("setPresetName5Button").style.border='2px solid #b0b0b0';
		document.getElementById("setPresetName5Button").style.cursor='not-allowed';
	}
	else {
		var tickbox = "No"
		localStorage.setItem("Slot5_Preset_Name_Locked", tickbox);
		document.getElementById("setPresetName5Button").style.backgroundColor='#282640';
		document.getElementById("setPresetName5Button").style.border='2px solid #59568f';
		document.getElementById("setPresetName5Button").style.cursor='pointer';
	}
}

function checkLockPresetNameStatus() {
	var presetNameLocked1 = localStorage.getItem("Slot1_Preset_Name_Locked");
	var presetNameLocked2 = localStorage.getItem("Slot2_Preset_Name_Locked");
	var presetNameLocked3 = localStorage.getItem("Slot3_Preset_Name_Locked");
	var presetNameLocked4 = localStorage.getItem("Slot4_Preset_Name_Locked");
	var presetNameLocked5 = localStorage.getItem("Slot5_Preset_Name_Locked");
	
	if (presetNameLocked1 === "Yes") {
		document.getElementById("lockPresetName1Checkbox").checked = true;
		document.getElementById("setPresetName1Button").style.backgroundColor='#424242';
		document.getElementById("setPresetName1Button").style.border='2px solid #b0b0b0';
		document.getElementById("setPresetName1Button").style.cursor='not-allowed';
	}
	else {
		document.getElementById("lockPresetName1Checkbox").checked = false;
	}
	
	if (presetNameLocked2 === "Yes") {
		document.getElementById("lockPresetName2Checkbox").checked = true;
		document.getElementById("setPresetName2Button").style.backgroundColor='#424242';
		document.getElementById("setPresetName2Button").style.border='2px solid #b0b0b0';
		document.getElementById("setPresetName2Button").style.cursor='not-allowed';
	}
	else {
		document.getElementById("lockPresetName2Checkbox").checked = false;
	}
	
	if (presetNameLocked3 === "Yes") {
		document.getElementById("lockPresetName3Checkbox").checked = true;
		document.getElementById("setPresetName3Button").style.backgroundColor='#424242';
		document.getElementById("setPresetName3Button").style.border='2px solid #b0b0b0';
		document.getElementById("setPresetName3Button").style.cursor='not-allowed';
	}
	else {
		document.getElementById("lockPresetName3Checkbox").checked = false;
	}
	
	if (presetNameLocked4 === "Yes") {
		document.getElementById("lockPresetName4Checkbox").checked = true;
		document.getElementById("setPresetName4Button").style.backgroundColor='#424242';
		document.getElementById("setPresetName4Button").style.border='2px solid #b0b0b0';
		document.getElementById("setPresetName4Button").style.cursor='not-allowed';
	}
	else {
		document.getElementById("lockPresetName4Checkbox").checked = false;
	}
	
	if (presetNameLocked5 === "Yes") {
		document.getElementById("lockPresetName5Checkbox").checked = true;
		document.getElementById("setPresetName5Button").style.backgroundColor='#424242';
		document.getElementById("setPresetName5Button").style.border='2px solid #b0b0b0';
		document.getElementById("setPresetName5Button").style.cursor='not-allowed';
	}
	else {
		document.getElementById("lockPresetName5Checkbox").checked = false;
	}
}

function setPresetName1() {
	if (document.getElementById("lockPresetName1Checkbox").checked) {
		return;
	}
	else {
		var presetName = document.getElementById("presetName1TextField").value;
		if (presetName === "") {
			presetNameRedTextField(1);
		}
		else {
			localStorage.setItem("Slot1_Preset_Name", presetName);
			checkSlots();
		}
	}
}

function setPresetName2() {
	if (document.getElementById("lockPresetName2Checkbox").checked) {
		return;
	}
	else {
		var presetName = document.getElementById("presetName2TextField").value;
		if (presetName === "") {
			presetNameRedTextField(2);
		}
		else {
			localStorage.setItem("Slot2_Preset_Name", presetName);
			checkSlots();
		}
	}
}

function setPresetName3() {
	if (document.getElementById("lockPresetName3Checkbox").checked) {
		return;
	}
	else {
		var presetName = document.getElementById("presetName3TextField").value;
		if (presetName === "") {
			presetNameRedTextField(3);
		}
		else {
			localStorage.setItem("Slot3_Preset_Name", presetName);
			checkSlots();
		}
	}
}

function setPresetName4() {
	if (document.getElementById("lockPresetName4Checkbox").checked) {
		return;
	}
	else {
		var presetName = document.getElementById("presetName4TextField").value;
		if (presetName === "") {
			presetNameRedTextField(4);
		}
		else {
			localStorage.setItem("Slot4_Preset_Name", presetName);
			checkSlots();
		}
	}
}

function setPresetName5() {
	if (document.getElementById("lockPresetName5Checkbox").checked) {
		return;
	}
	else {
		var presetName = document.getElementById("presetName5TextField").value;
		if (presetName === "") {
			presetNameRedTextField(5);
		}
		else {
			localStorage.setItem("Slot5_Preset_Name", presetName);
			checkSlots();
		}
	}
}

function presetNameRedTextField(x) {
	if (x == 1) {
		document.getElementById("presetName1TextField").style.background='#b30003';
		document.getElementById("presetName1TextField").style.border='2px solid #660002';
		document.getElementById("presetName1TextField").style.transitionDuration='0.2s';
	}
	else if (x == 2) {
		document.getElementById("presetName2TextField").style.background='#b30003';
		document.getElementById("presetName2TextField").style.border='2px solid #660002';
		document.getElementById("presetName2TextField").style.transitionDuration='0.2s';
	}
	else if (x == 3) {
		document.getElementById("presetName3TextField").style.background='#b30003';
		document.getElementById("presetName3TextField").style.border='2px solid #660002';
		document.getElementById("presetName3TextField").style.transitionDuration='0.2s';
	}
	else if (x == 4) {
		document.getElementById("presetName4TextField").style.background='#b30003';
		document.getElementById("presetName4TextField").style.border='2px solid #660002';
		document.getElementById("presetName4TextField").style.transitionDuration='0.2s';
	}
	else if (x == 5) {
		document.getElementById("presetName5TextField").style.background='#b30003';
		document.getElementById("presetName5TextField").style.border='2px solid #660002';
		document.getElementById("presetName5TextField").style.transitionDuration='0.2s';
	}
	setTimeout(presetNameRedTextFieldReturnToNormal, 420, x);
}

function presetNameRedTextFieldReturnToNormal(x) {
	if (x == 1) {
		document.getElementById("presetName1TextField").style.background='#59568f';
		document.getElementById("presetName1TextField").style.border='2px solid #282640';
		document.getElementById("presetName1TextField").style.transitionDuration='0.75s';
	}
	else if (x == 2) {
		document.getElementById("presetName2TextField").style.background='#59568f';
		document.getElementById("presetName2TextField").style.border='2px solid #282640';
		document.getElementById("presetName2TextField").style.transitionDuration='0.75s';
	}
	else if (x == 3) {
		document.getElementById("presetName3TextField").style.background='#59568f';
		document.getElementById("presetName3TextField").style.border='2px solid #282640';
		document.getElementById("presetName3TextField").style.transitionDuration='0.75s';
	}
	else if (x == 4) {
		document.getElementById("presetName4TextField").style.background='#59568f';
		document.getElementById("presetName4TextField").style.border='2px solid #282640';
		document.getElementById("presetName4TextField").style.transitionDuration='0.75s';
	}
	else if (x == 5) {
		document.getElementById("presetName5TextField").style.background='#59568f';
		document.getElementById("presetName5TextField").style.border='2px solid #282640';
		document.getElementById("presetName5TextField").style.transitionDuration='0.75s';
	}	
}

function checkSlots() {
	var presetName1 = localStorage.getItem("Slot1_Preset_Name");
	var presetName2 = localStorage.getItem("Slot2_Preset_Name");
	var presetName3 = localStorage.getItem("Slot3_Preset_Name");
	var presetName4 = localStorage.getItem("Slot4_Preset_Name");
	var presetName5 = localStorage.getItem("Slot5_Preset_Name");	
	
	if (presetName1 == null) {
		var Species = localStorage.getItem("Slot1_Species");
		var Sex = localStorage.getItem("Slot1_Sex");
		if (Species == null) {
			document.getElementById('saveSlot1').innerHTML = "Empty Slot";	
			document.getElementById('loadSlot1').innerHTML = "Empty Slot";		
		}
		else {
			document.getElementById('saveSlot1').innerHTML = Sex + " " + Species;
			document.getElementById('loadSlot1').innerHTML = Sex + " " + Species;
		}
	}
	else {
		document.getElementById('saveSlot1').innerHTML = presetName1;
		document.getElementById('loadSlot1').innerHTML = presetName1;
		document.getElementById('renamePresetsSlot1Message').innerHTML = "Slot 1 - " + presetName1;
	}
	
	if (presetName2 == null) {
		var Species = localStorage.getItem("Slot2_Species");
		var Sex = localStorage.getItem("Slot2_Sex");
		if (Species == null) {
			document.getElementById('saveSlot2').innerHTML = "Empty Slot";	
			document.getElementById('loadSlot2').innerHTML = "Empty Slot";		
		}
		else {
			document.getElementById('saveSlot2').innerHTML = Sex + " " + Species;
			document.getElementById('loadSlot2').innerHTML = Sex + " " + Species;
		}
	}
	else {
		document.getElementById('saveSlot2').innerHTML = presetName2;
		document.getElementById('loadSlot2').innerHTML = presetName2;
		document.getElementById('renamePresetsSlot2Message').innerHTML = "Slot 2 - " + presetName2;
	}
	
	if (presetName3 == null) {
		var Species = localStorage.getItem("Slot3_Species");
		var Sex = localStorage.getItem("Slot3_Sex");
		if (Species == null) {
			document.getElementById('saveSlot3').innerHTML = "Empty Slot";	
			document.getElementById('loadSlot3').innerHTML = "Empty Slot";		
		}
		else {
			document.getElementById('saveSlot3').innerHTML = Sex + " " + Species;
			document.getElementById('loadSlot3').innerHTML = Sex + " " + Species;
		}
	}
	else {
		document.getElementById('saveSlot3').innerHTML = presetName3;
		document.getElementById('loadSlot3').innerHTML = presetName3;
		document.getElementById('renamePresetsSlot3Message').innerHTML = "Slot 3 - " + presetName3;
	}
	
	if (presetName4 == null) {
		var Species = localStorage.getItem("Slot4_Species");
		var Sex = localStorage.getItem("Slot4_Sex");
		if (Species == null) {
			document.getElementById('saveSlot4').innerHTML = "Empty Slot";	
			document.getElementById('loadSlot4').innerHTML = "Empty Slot";		
		}
		else {
			document.getElementById('saveSlot4').innerHTML = Sex + " " + Species;
			document.getElementById('loadSlot4').innerHTML = Sex + " " + Species;
		}
	}
	else {
		document.getElementById('saveSlot4').innerHTML = presetName4;
		document.getElementById('loadSlot4').innerHTML = presetName4;
		document.getElementById('renamePresetsSlot4Message').innerHTML = "Slot 4 - " + presetName4;
	}
	
	if (presetName5 == null) {
		var Species = localStorage.getItem("Slot5_Species");
		var Sex = localStorage.getItem("Slot5_Sex");
		if (Species == null) {
			document.getElementById('saveSlot5').innerHTML = "Empty Slot";	
			document.getElementById('loadSlot5').innerHTML = "Empty Slot";		
		}
		else {
			document.getElementById('saveSlot5').innerHTML = Sex + " " + Species;
			document.getElementById('loadSlot5').innerHTML = Sex + " " + Species;
		}
	}
	else {
		document.getElementById('saveSlot5').innerHTML = presetName5;
		document.getElementById('loadSlot5').innerHTML = presetName5;
		document.getElementById('renamePresetsSlot5Message').innerHTML = "Slot 5 - " + presetName5;
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
	document.getElementById("enterUsernameContainer").style.maxHeight='124px';
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
}

function welcomeUser() {
	var username = localStorage.getItem("Username");
	if (username == null) {		
		return;
	}
	else {
		var userGreetingsDisabled = localStorage.getItem("User_Greetings_Disabled");
		if (userGreetingsDisabled != "Yes") {

			var phrase = Math.floor(Math.random() * 7) + 1;
			if (phrase == 1) {
				document.getElementById('welcomeUserMessage').innerHTML = "Hi," + " " + username;
				showWelcomeUserMessage();
			}
			if (phrase == 2) {
				document.getElementById('welcomeUserMessage').innerHTML = "Hello," + " " + username;
				showWelcomeUserMessage();
			}
			if (phrase == 3) {
				document.getElementById('welcomeUserMessage').innerHTML = "Hewwo," + " " + username;
				showWelcomeUserMessage();
			}
			if (phrase == 4) {
				document.getElementById('welcomeUserMessage').innerHTML = "Good morning," + " " + username;
				showWelcomeUserMessage();
			}
			if (phrase == 5) {
				document.getElementById('welcomeUserMessage').innerHTML = "Good to see you," + " " + username;
				showWelcomeUserMessage();
			}
			if (phrase == 6) {
				document.getElementById('welcomeUserMessage').innerHTML = "Nice to see you," + " " + username;
				showWelcomeUserMessage();
			}	
			if (phrase == 7) {
				document.getElementById('welcomeUserMessage').innerHTML = "Have a nice day," + " " + username;
				showWelcomeUserMessage();
			}		
			else {
				return;
			}
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
		document.getElementById("showAdvancedSettings4a").style.maxHeight= '0';
		document.getElementById("showAdvancedSettings4a").style.borderBottom= '0';
		document.getElementById("showAdvancedSettings4a").style.paddingBottom= '0';
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
			document.getElementById("showAdvancedSettings4a").style.borderBottom= '3px solid #73728C';
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
				document.getElementById("genitalSizeSlider").style.borderBottom= '3px solid #73728C';
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
				document.getElementById("genitalSizeSlider").style.borderBottom= '3px solid #73728C';
				document.getElementById("genitalSizeSlider").style.paddingBottom= '15px';
			}
		}
	}
	else {		
		document.getElementById("showGenitalSizeFemaleCheckbox").checked = true;
		document.getElementById("genitalSizeSlider").style.maxHeight= '60px';
		document.getElementById("genitalSizeSlider").style.borderBottom= '3px solid #73728C';
		document.getElementById("genitalSizeSlider").style.paddingBottom= '15px';
	}
}

function goToChangeBGColorOptions() {
	document.getElementById("devMenuOptions").style.maxHeight='0px';
	document.getElementById("changeBGColorOptions").style.maxHeight='500px';
}

function goBackFromChangeBGColorOptions() {
	document.getElementById("changeBGColorOptions").style.maxHeight='0px';
	document.getElementById("devMenuOptions").style.maxHeight='710px';
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

function functionBodyType(Sex, bodyType1) {
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

function makeCustomCheckbox1() {
	var label = document.getElementById("customCheckbox1Label").value;
	var value1 = document.getElementById("customCheckbox1Value1").value;
	var value2 = document.getElementById("customCheckbox1Value2").value;
	
	document.getElementById("customCheckbox1LabelMenu").innerHTML = label;
	document.getElementById("CC1value1").innerHTML = value1;
	document.getElementById("CC1value2").innerHTML = value2;
	document.getElementById("customCheckbox1Menu").style.display= 'block';	
	document.getElementById("customCheckbox1Checkbox").checked = true;	
	localStorage.setItem("Slot0_Custom_Checkbox1_Label", label);	
	localStorage.setItem("Slot0_Custom_Checkbox1_Value1", value1);	
	localStorage.setItem("Slot0_Custom_Checkbox1_Value2", value2);
	localStorage.setItem("Slot0_Custom_Checkbox1_Enabled", "Yes");
	
	if (controlsessionactive === "Yes") {
			conn.send({firstParam: "changeCustomCheckbox", secondParam: "Custom1Label", thirdParam: label});
			conn.send({firstParam: "changeCustomCheckbox", secondParam: "Custom1Value1", thirdParam: value1});
			conn.send({firstParam: "changeCustomCheckbox", secondParam: "Custom1Value2", thirdParam: value2});
			conn.send({firstParam: "customCheckboxEnabled", secondParam: "custom1", thirdParam: "Yes"});
			conn.send({firstParam: "customCheckboxEnabled", secondParam: "fireLoadCustomCheckboxesOnStartupFunction"});
		}
		
	if (value2 === "") {
		document.getElementById("secondCheckboxCC1").style.display = "none";
	}
	else if (value2 != "") {
		document.getElementById("secondCheckboxCC1").style.display = "block";
	}
		
	if (label === "") {
		document.getElementById("customCheckbox1Menu").style.height = "40px";
		document.getElementById("customCheckbox1Menu").style.paddingTop = "8px";
	}
	else {
		document.getElementById("customCheckbox1Menu").style.height = "60px";
		document.getElementById("customCheckbox1Menu").style.paddingTop = "0";
	}
}

function makeCustomCheckbox2() {
	var label = document.getElementById("customCheckbox2Label").value;
	var value1 = document.getElementById("customCheckbox2Value1").value;
	var value2 = document.getElementById("customCheckbox2Value2").value;
	
	document.getElementById("customCheckbox2LabelMenu").innerHTML = label;
	document.getElementById("CC2value1").innerHTML = value1;
	document.getElementById("CC2value2").innerHTML = value2;
	document.getElementById("customCheckbox2Menu").style.display= 'block';	
	document.getElementById("customCheckbox2Checkbox").checked = true;	
	localStorage.setItem("Slot0_Custom_Checkbox2_Label", label);	
	localStorage.setItem("Slot0_Custom_Checkbox2_Value1", value1);	
	localStorage.setItem("Slot0_Custom_Checkbox2_Value2", value2);
	localStorage.setItem("Slot0_Custom_Checkbox2_Enabled", "Yes");
	
	if (controlsessionactive === "Yes") {
			conn.send({firstParam: "changeCustomCheckbox", secondParam: "Custom2Label", thirdParam: label});
			conn.send({firstParam: "changeCustomCheckbox", secondParam: "Custom2Value1", thirdParam: value1});
			conn.send({firstParam: "changeCustomCheckbox", secondParam: "Custom2Value2", thirdParam: value2});
			conn.send({firstParam: "customCheckboxEnabled", secondParam: "custom2", thirdParam: "Yes"});
			conn.send({firstParam: "customCheckboxEnabled", secondParam: "fireLoadCustomCheckboxesOnStartupFunction"});
		}
		
	if (value2 === "") {
		document.getElementById("secondCheckboxCC2").style.display = "none";
	}
	else if (value2 != "") {
		document.getElementById("secondCheckboxCC2").style.display = "block";
	}
		
	if (label === "") {
		document.getElementById("customCheckbox2Menu").style.height = "40px";
		document.getElementById("customCheckbox2Menu").style.paddingTop = "8px";
	}
	else {
		document.getElementById("customCheckbox2Menu").style.height = "60px";
		document.getElementById("customCheckbox2Menu").style.paddingTop = "0";
	}
}

function makeCustomCheckbox3() {
	var label = document.getElementById("customCheckbox3Label").value;
	var value1 = document.getElementById("customCheckbox3Value1").value;
	var value2 = document.getElementById("customCheckbox3Value2").value;
	
	document.getElementById("customCheckbox3LabelMenu").innerHTML = label;
	document.getElementById("CC3value1").innerHTML = value1;
	document.getElementById("CC3value2").innerHTML = value2;
	document.getElementById("customCheckbox3Menu").style.display= 'block';	
	document.getElementById("customCheckbox3Checkbox").checked = true;	
	localStorage.setItem("Slot0_Custom_Checkbox3_Label", label);	
	localStorage.setItem("Slot0_Custom_Checkbox3_Value1", value1);	
	localStorage.setItem("Slot0_Custom_Checkbox3_Value2", value2);
	localStorage.setItem("Slot0_Custom_Checkbox3_Enabled", "Yes");
	
	if (controlsessionactive === "Yes") {
			conn.send({firstParam: "changeCustomCheckbox", secondParam: "Custom3Label", thirdParam: label});
			conn.send({firstParam: "changeCustomCheckbox", secondParam: "Custom3Value1", thirdParam: value1});
			conn.send({firstParam: "changeCustomCheckbox", secondParam: "Custom3Value2", thirdParam: value2});
			conn.send({firstParam: "customCheckboxEnabled", secondParam: "custom3", thirdParam: "Yes"});
			conn.send({firstParam: "customCheckboxEnabled", secondParam: "fireLoadCustomCheckboxesOnStartupFunction"});
	}
		
	if (value2 === "") {
		document.getElementById("secondCheckboxCC3").style.display = "none";
	}
	else if (value2 != "") {
		document.getElementById("secondCheckboxCC3").style.display = "block";
	}
		
	if (label === "") {
		document.getElementById("customCheckbox3Menu").style.height = "40px";
		document.getElementById("customCheckbox3Menu").style.paddingTop = "8px";
	}
	else {
		document.getElementById("customCheckbox3Menu").style.height = "60px";
		document.getElementById("customCheckbox3Menu").style.paddingTop = "0";
	}
}

function toggleCustomCheckbox1() {
var tickbox = document.getElementById("customCheckbox1Checkbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("customCheckbox1Menu").style.display= 'block';
	}
	else {
		var tickbox = "No"
		document.getElementById("customCheckbox1Menu").style.display= 'none';
	}
	localStorage.setItem("Slot0_Custom_Checkbox1_Enabled", tickbox);
}

function toggleCustomCheckbox2() {
var tickbox = document.getElementById("customCheckbox2Checkbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("customCheckbox2Menu").style.display= 'block';
	}
	else {
		var tickbox = "No"
		document.getElementById("customCheckbox2Menu").style.display= 'none';
	}
	localStorage.setItem("Slot0_Custom_Checkbox2_Enabled", tickbox);
}

function toggleCustomCheckbox3() {
var tickbox = document.getElementById("customCheckbox3Checkbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("customCheckbox3Menu").style.display= 'block';
	}
	else {
		var tickbox = "No"
		document.getElementById("customCheckbox3Menu").style.display= 'none';
	}
	localStorage.setItem("Slot0_Custom_Checkbox3_Enabled", tickbox);
}

function loadCustomCheckboxesOnStartup() {
	loadCustomCheckbox1();
	loadCustomCheckbox2();
	loadCustomCheckbox3();
}

function loadCustomCheckbox1() {
	var enabled = localStorage.getItem("Slot0_Custom_Checkbox1_Enabled");
	
	if (enabled === "Yes"){	document.getElementById("customCheckbox1Checkbox").checked = true;
							document.getElementById("customCheckbox1Menu").style.display= 'block'; 	}
	if (enabled === "No"){	document.getElementById("customCheckbox1Checkbox").checked = false;
							document.getElementById("customCheckbox1Menu").style.display= 'none';	}
	
	var label = localStorage.getItem("Slot0_Custom_Checkbox1_Label");
	var value1 = localStorage.getItem("Slot0_Custom_Checkbox1_Value1");
	var value2 = localStorage.getItem("Slot0_Custom_Checkbox1_Value2");
	var ticked1 = localStorage.getItem("Slot0_Custom_Checkbox1_Value1_Ticked");
	var ticked2 = localStorage.getItem("Slot0_Custom_Checkbox1_Value2_Ticked");
	
	document.getElementById("customCheckbox1LabelMenu").innerHTML = label;
	document.getElementById("CC1value1").innerHTML = value1;
	document.getElementById("CC1value2").innerHTML = value2;
	
	
	if (value2 === "") {
		document.getElementById("secondCheckboxCC1").style.display = "none";
	}
	else if (value2 != "") {
		document.getElementById("secondCheckboxCC1").style.display = "block";
	}
	
	if (ticked1 === "Yes") {
		document.getElementById("CC1value1Checkbox").checked = true;
	}
	if (ticked1 === "No" || ticked1 == null) {
		document.getElementById("CC1value1Checkbox").checked = false;
	}
	if (ticked2 === "Yes") {
		document.getElementById("CC1value2Checkbox").checked = true;
	}
	if (ticked2 === "No" || ticked2 == null) {
		document.getElementById("CC1value2Checkbox").checked = false;
	}
	
		
	if (label === "") {
		document.getElementById("customCheckbox1Menu").style.height = "40px";
		document.getElementById("customCheckbox1Menu").style.paddingTop = "8px";
	}
	else {
		document.getElementById("customCheckbox1Menu").style.height = "60px";
		document.getElementById("customCheckbox1Menu").style.paddingTop = "0";
	}
}

function loadCustomCheckbox2() {
	var enabled = localStorage.getItem("Slot0_Custom_Checkbox2_Enabled");
	
	if (enabled === "Yes"){	document.getElementById("customCheckbox2Checkbox").checked = true;
							document.getElementById("customCheckbox2Menu").style.display= 'block'; 	}
	if (enabled === "No"){	document.getElementById("customCheckbox2Checkbox").checked = false;
							document.getElementById("customCheckbox2Menu").style.display= 'none';	}
	
	var label = localStorage.getItem("Slot0_Custom_Checkbox2_Label");
	var value1 = localStorage.getItem("Slot0_Custom_Checkbox2_Value1");
	var value2 = localStorage.getItem("Slot0_Custom_Checkbox2_Value2");
	var ticked1 = localStorage.getItem("Slot0_Custom_Checkbox2_Value1_Ticked");
	var ticked2 = localStorage.getItem("Slot0_Custom_Checkbox2_Value2_Ticked");
	
	document.getElementById("customCheckbox2LabelMenu").innerHTML = label;
	document.getElementById("CC2value1").innerHTML = value1;
	document.getElementById("CC2value2").innerHTML = value2;
	
	if (value2 === "") {
		document.getElementById("secondCheckboxCC2").style.display = "none";
	}
	else if (value2 != "") {
		document.getElementById("secondCheckboxCC2").style.display = "block";
	}
	
	if (ticked1 === "Yes") {
		document.getElementById("CC2value1Checkbox").checked = true;
	}
	if (ticked1 === "No" || ticked1 == null) {
		document.getElementById("CC2value1Checkbox").checked = false;
	}
	if (ticked2 === "Yes") {
		document.getElementById("CC2value2Checkbox").checked = true;
	}
	if (ticked2 === "No" || ticked2 == null) {
		document.getElementById("CC2value2Checkbox").checked = false;
	}
		
	if (label === "") {
		document.getElementById("customCheckbox2Menu").style.height = "40px";
		document.getElementById("customCheckbox2Menu").style.paddingTop = "8px";
	}
	else {
		document.getElementById("customCheckbox2Menu").style.height = "60px";
		document.getElementById("customCheckbox2Menu").style.paddingTop = "0";
	}
}

function loadCustomCheckbox3() {
	var enabled = localStorage.getItem("Slot0_Custom_Checkbox3_Enabled");
	
	if (enabled === "Yes"){	document.getElementById("customCheckbox3Checkbox").checked = true;
							document.getElementById("customCheckbox3Menu").style.display= 'block'; 	}
	if (enabled === "No"){	document.getElementById("customCheckbox3Checkbox").checked = false;
							document.getElementById("customCheckbox3Menu").style.display= 'none';	}
	
	var label = localStorage.getItem("Slot0_Custom_Checkbox3_Label");
	var value1 = localStorage.getItem("Slot0_Custom_Checkbox3_Value1");
	var value2 = localStorage.getItem("Slot0_Custom_Checkbox3_Value2");
	var ticked1 = localStorage.getItem("Slot0_Custom_Checkbox3_Value1_Ticked");
	var ticked2 = localStorage.getItem("Slot0_Custom_Checkbox3_Value2_Ticked");
	
	document.getElementById("customCheckbox3LabelMenu").innerHTML = label;
	document.getElementById("CC3value1").innerHTML = value1;
	document.getElementById("CC3value2").innerHTML = value2;
	
	if (value2 === "") {
		document.getElementById("secondCheckboxCC3").style.display = "none";
	}
	else if (value2 != "") {
		document.getElementById("secondCheckboxCC3").style.display = "block";
	}
	
	if (ticked1 === "Yes") {
		document.getElementById("CC3value1Checkbox").checked = true;
	}
	if (ticked1 === "No" || ticked1 == null) {
		document.getElementById("CC3value1Checkbox").checked = false;
	}
	if (ticked2 === "Yes") {
		document.getElementById("CC3value2Checkbox").checked = true;
	}
	if (ticked2 === "No" || ticked2 == null) {
		document.getElementById("CC3value2Checkbox").checked = false;
	}
		
	if (label === "") {
		document.getElementById("customCheckbox3Menu").style.height = "40px";
		document.getElementById("customCheckbox3Menu").style.paddingTop = "8px";
	}
	else {
		document.getElementById("customCheckbox3Menu").style.height = "60px";
		document.getElementById("customCheckbox3Menu").style.paddingTop = "0";
	}
}

function makeCustomSlider1() {
		var leftText = document.getElementById("slider1LeftText").value;
		var centerText = document.getElementById("slider1CenterText").value;
		var rightText = document.getElementById("slider1RightText").value;	
		if (leftText === "") {
			leftText = "&nbsp;";
		}
		if (centerText === "") {
			centerText = "&nbsp;";
		}
		if (rightText === "") {
			rightText = "&nbsp;";
		}		
		document.getElementById('textinmenuLeftCS1').innerHTML = leftText;	
		document.getElementById('textinmenuCenterCS1').innerHTML = centerText;	
		document.getElementById('textinmenuRightCS1').innerHTML = rightText;	
		localStorage.setItem("Custom_Slider1_LeftText", leftText);	
		localStorage.setItem("Custom_Slider1_CenterText", centerText);	
		localStorage.setItem("Custom_Slider1_RightText", rightText);
		localStorage.setItem("Custom_Slider1_Enabled", "Yes");
		document.getElementById("customSlider1Checkbox").checked = true;
		document.getElementById("custom1SliderMenu").style.maxHeight= '60px';
		document.getElementById("custom1SliderMenu").style.borderBottom= '3px solid #73728C';
		document.getElementById("custom1SliderMenu").style.paddingBottom= '15px';
		if (controlsessionactive === "Yes") {
			conn.send({firstParam: "changeSliderName", secondParam: "Custom1Left", thirdParam: leftText});
			conn.send({firstParam: "changeSliderName", secondParam: "Custom1Middle", thirdParam: centerText});
			conn.send({firstParam: "changeSliderName", secondParam: "Custom1Right", thirdParam: rightText});
			conn.send({firstParam: "optionEnabled", secondParam: "custom1", thirdParam: "Yes"});
			conn.send({firstParam: "optionEnabled", secondParam: "fireLoadSliderSettingsFunction"});
		}
	}

function makeCustomSlider2() {
		var leftText = document.getElementById("slider2LeftText").value;
		var centerText = document.getElementById("slider2CenterText").value;
		var rightText = document.getElementById("slider2RightText").value;	
		if (leftText === "") {
			leftText = "&nbsp;";
		}		
		if (centerText === "") {
			centerText = "&nbsp;";
		}		
		if (rightText === "") {
			rightText = "&nbsp;";
		}		
		document.getElementById('textinmenuLeftCS2').innerHTML = leftText;	
		document.getElementById('textinmenuCenterCS2').innerHTML = centerText;	
		document.getElementById('textinmenuRightCS2').innerHTML = rightText;	
		localStorage.setItem("Custom_Slider2_LeftText", leftText);	
		localStorage.setItem("Custom_Slider2_CenterText", centerText);	
		localStorage.setItem("Custom_Slider2_RightText", rightText);
		localStorage.setItem("Custom_Slider2_Enabled", "Yes");
		document.getElementById("customSlider2Checkbox").checked = true;
		document.getElementById("custom2SliderMenu").style.maxHeight= '60px';
		document.getElementById("custom2SliderMenu").style.borderBottom= '3px solid #73728C';
		document.getElementById("custom2SliderMenu").style.paddingBottom= '15px';
		if (controlsessionactive === "Yes") {
			conn.send({firstParam: "changeSliderName", secondParam: "Custom2Left", thirdParam: leftText});
			conn.send({firstParam: "changeSliderName", secondParam: "Custom2Middle", thirdParam: centerText});
			conn.send({firstParam: "changeSliderName", secondParam: "Custom2Right", thirdParam: rightText});
			conn.send({firstParam: "optionEnabled", secondParam: "custom2", thirdParam: "Yes"});
			conn.send({firstParam: "optionEnabled", secondParam: "fireLoadSliderSettingsFunction"});
		}
	}

function makeCustomSlider3() {
		var leftText = document.getElementById("slider3LeftText").value;
		var centerText = document.getElementById("slider3CenterText").value;
		var rightText = document.getElementById("slider3RightText").value;
		if (leftText === "") {
			leftText = "&nbsp;";
		}		
		if (centerText === "") {
			centerText = "&nbsp;";
		}		
		if (rightText === "") {
			rightText = "&nbsp;";
		}		
		document.getElementById('textinmenuLeftCS3').innerHTML = leftText;	
		document.getElementById('textinmenuCenterCS3').innerHTML = centerText;	
		document.getElementById('textinmenuRightCS3').innerHTML = rightText;	
		localStorage.setItem("Custom_Slider3_LeftText", leftText);	
		localStorage.setItem("Custom_Slider3_CenterText", centerText);	
		localStorage.setItem("Custom_Slider3_RightText", rightText);
		localStorage.setItem("Custom_Slider3_Enabled", "Yes");
		document.getElementById("customSlider3Checkbox").checked = true;
		document.getElementById("custom3SliderMenu").style.maxHeight= '60px';
		document.getElementById("custom3SliderMenu").style.borderBottom= '3px solid #73728C';
		document.getElementById("custom3SliderMenu").style.paddingBottom= '15px';
		if (controlsessionactive === "Yes") {
			conn.send({firstParam: "changeSliderName", secondParam: "Custom3Left", thirdParam: leftText});
			conn.send({firstParam: "changeSliderName", secondParam: "Custom3Middle", thirdParam: centerText});
			conn.send({firstParam: "changeSliderName", secondParam: "Custom3Right", thirdParam: rightText});
			conn.send({firstParam: "optionEnabled", secondParam: "custom3", thirdParam: "Yes"});
			conn.send({firstParam: "optionEnabled", secondParam: "fireLoadSliderSettingsFunction"});
		}
	}
	
function makeCustomSlider4() {
		var leftText = document.getElementById("slider4LeftText").value;
		var centerText = document.getElementById("slider4CenterText").value;
		var rightText = document.getElementById("slider4RightText").value;
		if (leftText === "") {
			leftText = "&nbsp;";
		}		
		if (centerText === "") {
			centerText = "&nbsp;";
		}		
		if (rightText === "") {
			rightText = "&nbsp;";
		}		
		document.getElementById('textinmenuLeftCS4').innerHTML = leftText;	
		document.getElementById('textinmenuCenterCS4').innerHTML = centerText;	
		document.getElementById('textinmenuRightCS4').innerHTML = rightText;	
		localStorage.setItem("Custom_Slider4_LeftText", leftText);	
		localStorage.setItem("Custom_Slider4_CenterText", centerText);	
		localStorage.setItem("Custom_Slider4_RightText", rightText);
		localStorage.setItem("Custom_Slider4_Enabled", "Yes");
		document.getElementById("customSlider4Checkbox").checked = true;
		document.getElementById("custom4SliderMenu").style.maxHeight= '60px';
		document.getElementById("custom4SliderMenu").style.borderBottom= '3px solid #73728C';
		document.getElementById("custom4SliderMenu").style.paddingBottom= '15px';
		if (controlsessionactive === "Yes") {
			conn.send({firstParam: "changeSliderName", secondParam: "Custom4Left", thirdParam: leftText});
			conn.send({firstParam: "changeSliderName", secondParam: "Custom4Middle", thirdParam: centerText});
			conn.send({firstParam: "changeSliderName", secondParam: "Custom4Right", thirdParam: rightText});
			conn.send({firstParam: "optionEnabled", secondParam: "custom4", thirdParam: "Yes"});
			conn.send({firstParam: "optionEnabled", secondParam: "fireLoadSliderSettingsFunction"});
		}
	}
	
function makeCustomSlider5() {
		var leftText = document.getElementById("slider5LeftText").value;
		var centerText = document.getElementById("slider5CenterText").value;
		var rightText = document.getElementById("slider5RightText").value;
		if (leftText === "") {
			leftText = "&nbsp;";
		}		
		if (centerText === "") {
			centerText = "&nbsp;";
		}		
		if (rightText === "") {
			rightText = "&nbsp;";
		}		
		document.getElementById('textinmenuLeftCS5').innerHTML = leftText;	
		document.getElementById('textinmenuCenterCS5').innerHTML = centerText;	
		document.getElementById('textinmenuRightCS5').innerHTML = rightText;	
		localStorage.setItem("Custom_Slider5_LeftText", leftText);	
		localStorage.setItem("Custom_Slider5_CenterText", centerText);	
		localStorage.setItem("Custom_Slider5_RightText", rightText);
		localStorage.setItem("Custom_Slider5_Enabled", "Yes");
		document.getElementById("customSlider5Checkbox").checked = true;
		document.getElementById("custom5SliderMenu").style.maxHeight= '60px';
		document.getElementById("custom5SliderMenu").style.borderBottom= '3px solid #73728C';
		document.getElementById("custom5SliderMenu").style.paddingBottom= '15px';
		if (controlsessionactive === "Yes") {
			conn.send({firstParam: "changeSliderName", secondParam: "Custom5Left", thirdParam: leftText});
			conn.send({firstParam: "changeSliderName", secondParam: "Custom5Middle", thirdParam: centerText});
			conn.send({firstParam: "changeSliderName", secondParam: "Custom5Right", thirdParam: rightText});
			conn.send({firstParam: "optionEnabled", secondParam: "custom5", thirdParam: "Yes"});
			conn.send({firstParam: "optionEnabled", secondParam: "fireLoadSliderSettingsFunction"});
		}
	}

function toggleCustomSlider1() {
var tickbox = document.getElementById("customSlider1Checkbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("custom1SliderMenu").style.maxHeight= '60px';
		document.getElementById("custom1SliderMenu").style.borderBottom= '3px solid #73728C';
		document.getElementById("custom1SliderMenu").style.paddingBottom= '15px';
	}
	else {
		var tickbox = "No"
		document.getElementById("custom1SliderMenu").style.maxHeight= '0';
		document.getElementById("custom1SliderMenu").style.borderBottom= '0';
		document.getElementById("custom1SliderMenu").style.paddingBottom= '0';
	}
	localStorage.setItem("Custom_Slider1_Enabled", tickbox);
}

function toggleCustomSlider2() {
var tickbox = document.getElementById("customSlider2Checkbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("custom2SliderMenu").style.maxHeight= '60px';
		document.getElementById("custom2SliderMenu").style.borderBottom= '3px solid #73728C';
		document.getElementById("custom2SliderMenu").style.paddingBottom= '15px';
	}
	else {
		var tickbox = "No"
		document.getElementById("custom2SliderMenu").style.maxHeight= '0';
		document.getElementById("custom2SliderMenu").style.borderBottom= '0';
		document.getElementById("custom2SliderMenu").style.paddingBottom= '0';
	}
	localStorage.setItem("Custom_Slider2_Enabled", tickbox);
}

function toggleCustomSlider3() {
var tickbox = document.getElementById("customSlider3Checkbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("custom3SliderMenu").style.maxHeight= '60px';
		document.getElementById("custom3SliderMenu").style.borderBottom= '3px solid #73728C';
		document.getElementById("custom3SliderMenu").style.paddingBottom= '15px';
	}
	else {
		var tickbox = "No"
		document.getElementById("custom3SliderMenu").style.maxHeight= '0';
		document.getElementById("custom3SliderMenu").style.borderBottom= '0';
		document.getElementById("custom3SliderMenu").style.paddingBottom= '0';
	}
	localStorage.setItem("Custom_Slider3_Enabled", tickbox);
}

function toggleCustomSlider4() {
var tickbox = document.getElementById("customSlider4Checkbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("custom4SliderMenu").style.maxHeight= '60px';
		document.getElementById("custom4SliderMenu").style.borderBottom= '4px solid #74728C';
		document.getElementById("custom4SliderMenu").style.paddingBottom= '15px';
	}
	else {
		var tickbox = "No"
		document.getElementById("custom4SliderMenu").style.maxHeight= '0';
		document.getElementById("custom4SliderMenu").style.borderBottom= '0';
		document.getElementById("custom4SliderMenu").style.paddingBottom= '0';
	}
	localStorage.setItem("Custom_Slider4_Enabled", tickbox);
}

function toggleCustomSlider5() {
var tickbox = document.getElementById("customSlider5Checkbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("custom5SliderMenu").style.maxHeight= '60px';
		document.getElementById("custom5SliderMenu").style.borderBottom= '5px solid #75728C';
		document.getElementById("custom5SliderMenu").style.paddingBottom= '15px';
	}
	else {
		var tickbox = "No"
		document.getElementById("custom5SliderMenu").style.maxHeight= '0';
		document.getElementById("custom5SliderMenu").style.borderBottom= '0';
		document.getElementById("custom5SliderMenu").style.paddingBottom= '0';
	}
	localStorage.setItem("Custom_Slider5_Enabled", tickbox);
}

function loadCustomSlidersOnStartup() {
	loadCustomSlidersValuesOnStartup1();
	loadCustomSlidersValuesOnStartup2();
	loadCustomSlidersValuesOnStartup3();
	loadCustomSlidersValuesOnStartup4();
	loadCustomSlidersValuesOnStartup5();
	loadCustomSlidersNamesOnStartup1();
	loadCustomSlidersNamesOnStartup2();
	loadCustomSlidersNamesOnStartup3();
	loadCustomSlidersNamesOnStartup4();
	loadCustomSlidersNamesOnStartup5();
}

function loadCustomSlidersValuesOnStartup1(x) {
	var isCS1Enabled = localStorage.getItem("Custom_Slider1_Enabled");	
	if (isCS1Enabled === "Yes") {
		document.getElementById("customSlider1Checkbox").checked = true;
		document.getElementById("custom1SliderMenu").style.maxHeight= '60px';
		document.getElementById("custom1SliderMenu").style.borderBottom= '3px solid #73728C';
		document.getElementById("custom1SliderMenu").style.paddingBottom= '15px';
		if (x === "Yes") {
			document.getElementById("custom1SliderMenu").style.maxHeight= '60px';
			document.getElementById("custom1SliderMenu").style.borderBottom= '3px solid #73728C';
			document.getElementById("custom1SliderMenu").style.paddingBottom= '15px';
		}
		else {
			var CS1Value = localStorage.getItem("Slot0_Custom_Slider1_Value");
			mySlider17.setValue(CS1Value);
		}
	}
	else {
		document.getElementById("customSlider1Checkbox").checked = false;
		var CS1Value = localStorage.getItem("Slot0_Custom_Slider1_Value");
		if (CS1Value == null) {
			document.getElementById("custom1SliderMenu").style.maxHeight= '0';
			document.getElementById("custom1SliderMenu").style.borderBottom= '0';
			document.getElementById("custom1SliderMenu").style.paddingBottom= '0';
		}
		else {
			mySlider17.setValue(CS1Value);
			document.getElementById("custom1SliderMenu").style.maxHeight= '0';
			document.getElementById("custom1SliderMenu").style.borderBottom= '0';
			document.getElementById("custom1SliderMenu").style.paddingBottom= '0';
		}
	}
}

function loadCustomSlidersNamesOnStartup1() {
	var leftText = localStorage.getItem("Custom_Slider1_LeftText");
	var centerText = localStorage.getItem("Custom_Slider1_CenterText");
	var rightText = localStorage.getItem("Custom_Slider1_RightText");
	document.getElementById('textinmenuLeftCS1').innerHTML = leftText;	
	document.getElementById('textinmenuCenterCS1').innerHTML = centerText;	
	document.getElementById('textinmenuRightCS1').innerHTML = rightText;		
}

function loadCustomSlidersValuesOnStartup2(x) {
	var isCS2Enabled = localStorage.getItem("Custom_Slider2_Enabled");	
	if (isCS2Enabled == "Yes") {
		document.getElementById("customSlider2Checkbox").checked = true;
		document.getElementById("custom2SliderMenu").style.maxHeight= '60px';
		document.getElementById("custom2SliderMenu").style.borderBottom= '3px solid #73728C';
		document.getElementById("custom2SliderMenu").style.paddingBottom= '15px';
		if (x === "Yes") {
			document.getElementById("custom2SliderMenu").style.maxHeight= '60px';
			document.getElementById("custom2SliderMenu").style.borderBottom= '3px solid #73728C';
			document.getElementById("custom2SliderMenu").style.paddingBottom= '15px';
		}
		else {		
			var CS2Value = localStorage.getItem("Slot0_Custom_Slider2_Value");
			mySlider18.setValue(CS2Value);
		}
	}
	else {
		document.getElementById("customSlider2Checkbox").checked = false;
		var CS2Value = localStorage.getItem("Slot0_Custom_Slider2_Value");
		if (CS2Value == null) {
			document.getElementById("custom2SliderMenu").style.maxHeight= '0';
			document.getElementById("custom2SliderMenu").style.borderBottom= '0';
			document.getElementById("custom2SliderMenu").style.paddingBottom= '0';
		}
		else {
			mySlider18.setValue(CS2Value);
			document.getElementById("custom2SliderMenu").style.maxHeight= '0';
			document.getElementById("custom2SliderMenu").style.borderBottom= '0';
			document.getElementById("custom2SliderMenu").style.paddingBottom= '0';
		}
	}
}

function loadCustomSlidersNamesOnStartup2() {
	var leftText = localStorage.getItem("Custom_Slider2_LeftText");
	var centerText = localStorage.getItem("Custom_Slider2_CenterText");
	var rightText = localStorage.getItem("Custom_Slider2_RightText");
	document.getElementById('textinmenuLeftCS2').innerHTML = leftText;	
	document.getElementById('textinmenuCenterCS2').innerHTML = centerText;	
	document.getElementById('textinmenuRightCS2').innerHTML = rightText;		
}

function loadCustomSlidersValuesOnStartup3(x) {
	var isCS3Enabled = localStorage.getItem("Custom_Slider3_Enabled");	
	if (isCS3Enabled == "Yes") {
		document.getElementById("customSlider3Checkbox").checked = true;
		document.getElementById("custom3SliderMenu").style.maxHeight= '60px';
		document.getElementById("custom3SliderMenu").style.borderBottom= '3px solid #73728C';
		document.getElementById("custom3SliderMenu").style.paddingBottom= '15px';
		if (x === "Yes") {
			document.getElementById("custom3SliderMenu").style.maxHeight= '60px';
			document.getElementById("custom3SliderMenu").style.borderBottom= '3px solid #73728C';
			document.getElementById("custom3SliderMenu").style.paddingBottom= '15px';
		}
		else {
			var CS3Value = localStorage.getItem("Slot0_Custom_Slider3_Value");
			mySlider19.setValue(CS3Value);
		}
	}
	else {
		document.getElementById("customSlider3Checkbox").checked = false;
		var CS3Value = localStorage.getItem("Slot0_Custom_Slider3_Value");
		if (CS3Value == null) {
			document.getElementById("custom3SliderMenu").style.maxHeight= '0';
			document.getElementById("custom3SliderMenu").style.borderBottom= '0';
			document.getElementById("custom3SliderMenu").style.paddingBottom= '0';
		}
		else {
			mySlider19.setValue(CS3Value);
			document.getElementById("custom3SliderMenu").style.maxHeight= '0';
			document.getElementById("custom3SliderMenu").style.borderBottom= '0';
			document.getElementById("custom3SliderMenu").style.paddingBottom= '0';
		}
	}
}

function loadCustomSlidersNamesOnStartup3() {
	var leftText = localStorage.getItem("Custom_Slider3_LeftText");
	var centerText = localStorage.getItem("Custom_Slider3_CenterText");
	var rightText = localStorage.getItem("Custom_Slider3_RightText");
	document.getElementById('textinmenuLeftCS3').innerHTML = leftText;	
	document.getElementById('textinmenuCenterCS3').innerHTML = centerText;	
	document.getElementById('textinmenuRightCS3').innerHTML = rightText;		
}

function loadCustomSlidersValuesOnStartup4(x) {
	var isCS4Enabled = localStorage.getItem("Custom_Slider4_Enabled");	
	if (isCS4Enabled == "Yes") {
		document.getElementById("customSlider4Checkbox").checked = true;
		document.getElementById("custom4SliderMenu").style.maxHeight= '60px';
		document.getElementById("custom4SliderMenu").style.borderBottom= '3px solid #73728C';
		document.getElementById("custom4SliderMenu").style.paddingBottom= '15px';
		if (x === "Yes") {
			document.getElementById("custom4SliderMenu").style.maxHeight= '60px';
			document.getElementById("custom4SliderMenu").style.borderBottom= '3px solid #73728C';
			document.getElementById("custom4SliderMenu").style.paddingBottom= '15px';
		}
		else {
			var CS4Value = localStorage.getItem("Slot0_Custom_Slider4_Value");
			mySlider24.setValue(CS4Value);
		}
	}
	else {
		document.getElementById("customSlider4Checkbox").checked = false;
		var CS4Value = localStorage.getItem("Slot0_Custom_Slider4_Value");
		if (CS4Value == null) {
			document.getElementById("custom4SliderMenu").style.maxHeight= '0';
			document.getElementById("custom4SliderMenu").style.borderBottom= '0';
			document.getElementById("custom4SliderMenu").style.paddingBottom= '0';
		}
		else {
			mySlider24.setValue(CS4Value);
			document.getElementById("custom4SliderMenu").style.maxHeight= '0';
			document.getElementById("custom4SliderMenu").style.borderBottom= '0';
			document.getElementById("custom4SliderMenu").style.paddingBottom= '0';
		}
	}
}

function loadCustomSlidersNamesOnStartup4() {
	var leftText = localStorage.getItem("Custom_Slider4_LeftText");
	var centerText = localStorage.getItem("Custom_Slider4_CenterText");
	var rightText = localStorage.getItem("Custom_Slider4_RightText");
	document.getElementById('textinmenuLeftCS4').innerHTML = leftText;	
	document.getElementById('textinmenuCenterCS4').innerHTML = centerText;	
	document.getElementById('textinmenuRightCS4').innerHTML = rightText;		
}

function loadCustomSlidersValuesOnStartup5(x) {
	var isCS5Enabled = localStorage.getItem("Custom_Slider5_Enabled");	
	if (isCS5Enabled == "Yes") {
		document.getElementById("customSlider5Checkbox").checked = true;
		document.getElementById("custom5SliderMenu").style.maxHeight= '60px';
		document.getElementById("custom5SliderMenu").style.borderBottom= '3px solid #73728C';
		document.getElementById("custom5SliderMenu").style.paddingBottom= '15px';
		if (x === "Yes") {
			document.getElementById("custom5SliderMenu").style.maxHeight= '60px';
			document.getElementById("custom5SliderMenu").style.borderBottom= '3px solid #73728C';
			document.getElementById("custom5SliderMenu").style.paddingBottom= '15px';
		}
		else {
			var CS5Value = localStorage.getItem("Slot0_Custom_Slider5_Value");
			mySlider25.setValue(CS5Value);
		}
	}
	else {
		document.getElementById("customSlider5Checkbox").checked = false;
		var CS5Value = localStorage.getItem("Slot0_Custom_Slider5_Value");
		if (CS5Value == null) {
			document.getElementById("custom5SliderMenu").style.maxHeight= '0';
			document.getElementById("custom5SliderMenu").style.borderBottom= '0';
			document.getElementById("custom5SliderMenu").style.paddingBottom= '0';
		}
		else {
			mySlider25.setValue(CS5Value);
			document.getElementById("custom5SliderMenu").style.maxHeight= '0';
			document.getElementById("custom5SliderMenu").style.borderBottom= '0';
			document.getElementById("custom5SliderMenu").style.paddingBottom= '0';
		}
	}
}

function loadCustomSlidersNamesOnStartup5() {
	var leftText = localStorage.getItem("Custom_Slider5_LeftText");
	var centerText = localStorage.getItem("Custom_Slider5_CenterText");
	var rightText = localStorage.getItem("Custom_Slider5_RightText");
	document.getElementById('textinmenuLeftCS5').innerHTML = leftText;	
	document.getElementById('textinmenuCenterCS5').innerHTML = centerText;	
	document.getElementById('textinmenuRightCS5').innerHTML = rightText;		
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
		document.getElementById("lockPasswordChooseOptionContainer").style.maxHeight='128px';
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
		document.getElementById("lockPasswordChooseOptionContainer").style.maxHeight='128px';
		checkLockPasswordStatus();
	}
}

function pleaseProvidePassword() {
	document.getElementById('setupPasswordFirstTimeMessage').innerHTML = ">Error: Please provide password!";
	document.getElementById('setupPasswordFirstTimeMessage').style.color = "#FF4550";
	setTimeout (pleaseProvidePasswordStage2, 2500);
}

function pleaseProvidePasswordStage2() {
	document.getElementById('setupPasswordFirstTimeMessage').innerHTML = "Enter password:";
	document.getElementById('setupPasswordFirstTimeMessage').style.color = "#FFFFFF";
}

function lockPasswordChangeStage1() {
	document.getElementById("lockPasswordChooseOptionContainer").style.maxHeight='0px';
	document.getElementById("lockPasswordChangeContainer").style.maxHeight='228px';
}

function lockPasswordChangeGoBack() {
	document.getElementById("lockPasswordChooseOptionContainer").style.maxHeight='128px';
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
	document.getElementById("lockPasswordChooseOptionContainer").style.maxHeight='128px';
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

function lockPasswordEnable() {
	localStorage.setItem("Lock_Settings_Password_Enabled", "Yes");
	checkLockPasswordStatus();
}

function lockPasswordDisableStage1() {
	document.getElementById("lockPasswordChooseOptionContainer").style.maxHeight='0px';
	document.getElementById("lockPasswordDisableContainer").style.maxHeight='139px';
}

function lockPasswordDisableGoBack() {
	document.getElementById("lockPasswordChooseOptionContainer").style.maxHeight='128px';
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
			localStorage.setItem("Inanimate_Objects_Enabled", tickbox);
			document.getElementById("inanimateObjectsMenu").style.display='block';
			document.getElementById("advancedSettings5").style.display='block';
		}
		else {
			var tickbox = "No"
			localStorage.setItem("Inanimate_Objects_Enabled", tickbox);
			document.getElementById("inanimateObjectsMenu").style.display='none';
			document.getElementById("advancedSettings5").style.display='none';
		}
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

function randomizeCharacter() {
	var areSettingsLocked = localStorage.getItem("Settings_Locked");
	if (areSettingsLocked === "Yes") {
		return;
	}
	else {
	// Species
	var rng = Math.floor(Math.random() * 100) + 1;
	if (rng <= 90) {
		// Most Popular Species
		var array = ["Arctic Fox", "Bat", "Bear", "Cat", "Cheetah", "Coyote", "Deer",
		"Dog", "Dragon", "Fennec", "Fox", "Horse", "Hyena", "Kangaroo", "Lion", "Lynx",
		"Otter","Panther", "Protogen", "Rabbit", "Raccoon", "Sergal", "Shark", "Skunk",
		"Snow Leopard",	"Synth", "Tiger", "Wolf"];
		Species = array[Math.floor(Math.random() * array.length)];
		document.getElementById('speciesCurrent').innerHTML = Species;
	}
	else {
		// Other Species
		var array = ["Avian", "Bird", "Crow", "Eagle", "Gryphon", "Owl", "Penguin"
		, "Phoenix", "Raven", "Hawk", "Bison", "Buffalo", "Bull", "Cow", "African Wild Dog"
		, "Ethiopian Wolf", "Fennec Fox", "Folf", "Husky", "Maned Wolf", "Werewolf", "Reindeer", "Elk"
		, "Moose", "Donkey", "Pegasus", "Pony", "Unicorn", "Zebra", "Caracal", "Cougar"
		, "Jaguar", "Khajiit", "Leopard", "Liger", "Serval", "Argonian", "Jackalope", "Jex"
		, "Kitsune", "Kobold", "Tanuki", "Chimera", "Foxcoon", "Manokit", "Wox", "Wusky"
		, "Pika", "Hare", "Koala", "Opossum", "Possum", "Badger", "Ferret", "Marten"
		, "Weasel", "Alligator", "Crocodile", "Dinosaur", "Iguana", "Raptor", "Snake", "Turtle"
		, "Beaver", "Hamster", "Mouse", "Porcupine", "Rat", "Squirrel", "Gazelle", "Giraffe"
		, "Goat", "Llama", "Pig", "Sheep"];
		Species = array[Math.floor(Math.random() * array.length)];
		document.getElementById('speciesCurrent').innerHTML = Species;
	}
	// Sex
	var isThirdSexEnabled = localStorage.getItem("Third_Sex_Enabled");
	if (isThirdSexEnabled === "Yes") {
		var rng = Math.floor(Math.random() * 100) + 1; // 45% chance for both female/male and 10% for other if third sex is enabled
		if (rng >=0 && rng <=45) {
			document.getElementById("radiobuttonFemale").checked = true;
			saveSex('Female');
		}
		else if (rng >=46 && rng <=90) {
			document.getElementById("radiobuttonMale").checked = true;
			saveSex('Male');
		}
		else {
			document.getElementById("radiobuttonOther").checked = true;
			saveSex('Other');
		}
	}
	else {
		var rng = Math.floor(Math.random() * 2) + 1;
		if (rng == 1) {
			document.getElementById("radiobuttonFemale").checked = true;
			saveSex('Female');
		}
		else {
			document.getElementById("radiobuttonMale").checked = true;
			saveSex('Male');
		}
	}
	
	// Genitals
	var generatedSex = localStorage.getItem("Slot0_Sex");
	if (generatedSex === "Male") {
		var rng = Math.floor(Math.random() * 100) + 1;
		if (rng >=0 && rng <=95) { // 95% chance for Male character to have dick and 5% to have vagina (Pre/Non-op Trans Male)
			document.getElementById("genitalsPenisCheckbox").checked = true;
			document.getElementById("genitalsVaginaCheckbox").checked = false;
		}
		else {
			document.getElementById("genitalsVaginaCheckbox").checked = true;
			document.getElementById("genitalsPenisCheckbox").checked = false;			
		}
	}
	else if (generatedSex === "Female") {
		var rng = Math.floor(Math.random() * 100) + 1;
		if (rng >=0 && rng <=95) { // 95% chance for Female character to have vagina and 5% to have dick (Pre/Non-op Trans Female)
			document.getElementById("genitalsVaginaCheckbox").checked = true;
			document.getElementById("genitalsPenisCheckbox").checked = false;
		}
		else {
			document.getElementById("genitalsPenisCheckbox").checked = true;
			document.getElementById("genitalsVaginaCheckbox").checked = false;			
		}
	}
	else {
		var rng = Math.floor(Math.random() * 2) + 1; // 50% chance for one or other reproductive organ
		if (rng == 1) {
			document.getElementById("genitalsPenisCheckbox").checked = true;
			document.getElementById("genitalsVaginaCheckbox").checked = false;
			var rng = Math.floor(Math.random() * 100) + 1;
			if (rng >=0 && rng <=30) { // 30% chance for character to have both sex organs
				document.getElementById("genitalsVaginaCheckbox").checked = true;
			}
		}
		else {
			document.getElementById("genitalsVaginaCheckbox").checked = true;
			document.getElementById("genitalsPenisCheckbox").checked = false;
			var rng = Math.floor(Math.random() * 100) + 1;
			if (rng >=0 && rng <=30) { // 30% chance for character to have both sex organs
				document.getElementById("genitalsPenisCheckbox").checked = true;
			}
		}
	}
	
	// Adapt Clothing Checkbox
	var tickbox = document.getElementById("adaptClothingCheckbox");
	var rng = Math.floor(Math.random() * 2) + 1;
	if (rng == 1) {
		tickbox.checked = false;
	}
	else {
		tickbox.checked = true;
	}
	
	// Determine femininity/masculinity of a character
	var bodytype = Math.floor(Math.random() * 100) + 1;
	mySlider6.setValue(bodytype); // Masculine/Feminine
	
	// Set sliders with feminine/masculine traits from -20 to -2 or 2 to 20 around that value
	var range = 18;
	var threshold = 2;
		
	// Breast Size Female
	var value = Math.floor(Math.random() * range) + threshold;
	var addOrSubstract = Math.floor(Math.random() * 2) + 1;
	if (addOrSubstract == 1) {
		// Add value
		var sliderValue = bodytype + value;		
	}
	else {
		// Substract value
		var sliderValue = bodytype - value;	
	}
	// Sliders have range of 0 to 100 so if value is under or over this range it needs to be normalized
	if (sliderValue > 100) {
		sliderValue = 100;
	}
	else if (sliderValue < 0) {
		sliderValue = 0;
	}
	mySlider8.setValue(sliderValue);
	
	// Butt Size
	var value = Math.floor(Math.random() * range) + threshold;
	var addOrSubstract = Math.floor(Math.random() * 2) + 1;
	if (addOrSubstract == 1) {
		var sliderValue = bodytype + value;		
	}
	else {
		var sliderValue = bodytype - value;	
	}
	if (sliderValue > 100) {
		sliderValue = 100;
	}
	else if (sliderValue < 0) {
		sliderValue = 0;
	}
	mySlider13.setValue(sliderValue);
	
	// Hips
	var value = Math.floor(Math.random() * range) + threshold;
	var addOrSubstract = Math.floor(Math.random() * 2) + 1;
	if (addOrSubstract == 1) {
		var sliderValue = bodytype + value;		
	}
	else {
		var sliderValue = bodytype - value;	
	}
	if (sliderValue > 100) {
		sliderValue = 100;
	}
	else if (sliderValue < 0) {
		sliderValue = 0;
	}
	mySlider3.setValue(sliderValue);
	
	// Hair Lenght
	var value = Math.floor(Math.random() * range) + threshold;
	var addOrSubstract = Math.floor(Math.random() * 2) + 1;
	if (addOrSubstract == 1) {
		var sliderValue = bodytype + value;		
	}
	else {
		var sliderValue = bodytype - value;	
	}
	if (sliderValue > 100) {
		sliderValue = 100;
	}
	else if (sliderValue < 0) {
		sliderValue = 0;
	}
	mySlider20.setValue(sliderValue);
	
	// Thin/Thicc
	var rng = Math.floor(Math.random() * 100) + 1;
	mySlider5.setValue(rng);
	
	// Smol/Tall
	var rng = Math.floor(Math.random() * 100) + 1;
	mySlider4.setValue(rng);
	
	// Custom Slider 1
	var rng = Math.floor(Math.random() * 100) + 1;
	mySlider17.setValue(rng);
	
	// Custom Slider 2
	var rng = Math.floor(Math.random() * 100) + 1;
	mySlider18.setValue(rng);
	
	// Custom Slider 3
	var rng = Math.floor(Math.random() * 100) + 1;
	mySlider19.setValue(rng);
	
	// Custom Slider 4
	var rng = Math.floor(Math.random() * 100) + 1;
	mySlider24.setValue(rng);
	
	// Custom Slider 5
	var rng = Math.floor(Math.random() * 100) + 1;
	mySlider25.setValue(rng);
		
	// Breast Size Male
	var rng = Math.floor(Math.random() * 100) + 1;
	mySlider9.setValue(rng);
		
	// Belly Size
	var rng = Math.floor(Math.random() * 100) + 1;
	mySlider14.setValue(rng);
	
	// Belly Shape
	var rng = Math.floor(Math.random() * 100) + 1;
	mySlider15.setValue(rng);
	
	// Genital Size
	var rng = Math.floor(Math.random() * 100) + 1;
	mySlider2.setValue(rng);
	
	// Libido
	var rng = Math.floor(Math.random() * 100) + 1;
	mySlider7.setValue(rng);
	
	// Sensitivity
	var rng = Math.floor(Math.random() * 100) + 1;
	mySlider11.setValue(rng);
	
	// Demeanor
	var rng = Math.floor(Math.random() * 100) + 1;
	mySlider12.setValue(rng);
	
	// Position Preference
	var rng = Math.floor(Math.random() * 100) + 1;
	mySlider10.setValue(rng);
	
	// Intelligence
	var rng = Math.floor(Math.random() * 100) + 1;
	mySlider16.setValue(rng);
	
	// Fluffiness
	var rng = Math.floor(Math.random() * 100) + 1;
	mySlider.setValue(rng);
	
	// Fertility
	var rng = Math.floor(Math.random() * 100) + 1;
	mySlider23.setValue(rng);
	
	// Feral / Anthro
	mySlider22.setValue(100); // Always generate 100% anthro characters
	
	// Sexuality
	var rng = Math.floor(Math.random() * 100) + 1;
	
	if (rng >=0 && rng <=43) // Bi
	
		var sexuality = Math.floor(Math.random() * 70) + 15; // 15-85 Range

	else if (rng >=44 && rng <=69) // Gay
	
		var sexuality = Math.floor(Math.random() * 14) + 86; // 86-100 Range
	
	else if (rng >=70 && rng <=85) // Mostly Straight
	
		var sexuality = Math.floor(Math.random() * 14) + 1; // 1-14 Range
	
	else if (rng >=86 && rng <=100) // 100% Straight 
	
		var sexuality = 0;
		
	var customSliderName1 = document.getElementById("textinmenuCenterCS1").innerText;
	var customSliderName2 = document.getElementById("textinmenuCenterCS2").innerText;
	var customSliderName3 = document.getElementById("textinmenuCenterCS3").innerText;
	var customSliderName4 = document.getElementById("textinmenuCenterCS4").innerText;
	var customSliderName5 = document.getElementById("textinmenuCenterCS5").innerText;
		
	if (customSliderName1 === "Sexuality") {	mySlider17.setValue(sexuality);	}
	else if (customSliderName2 === "Sexuality") {	mySlider18.setValue(sexuality);	}
	else if (customSliderName3 === "Sexuality") {	mySlider19.setValue(sexuality);	}
	else if (customSliderName4 === "Sexuality") {	mySlider24.setValue(sexuality);	}
	else if (customSliderName5 === "Sexuality") {	mySlider25.setValue(sexuality);	}
		
	// Hair Color
	// Special thanks to StackOverflow for this one
	var hairColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);}); 
	
	document.getElementById('hairColorCurrent').innerHTML = hairColor;
	document.getElementById('hairColorSwatch').style.backgroundColor = hairColor;
	
	saveSettingsSlot0();
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

function toggleBatteryDrainMenu() {
	var tickbox = document.getElementById("batteryDrainCheckbox");
		if (tickbox.checked) {
			var tickbox = "Yes"
			localStorage.setItem("Show_Battery_Drain_Menu", tickbox);
			document.getElementById("advancedSettings10").style.display='block';
		}
		else {
			var tickbox = "No"
			localStorage.setItem("Show_Battery_Drain_Menu", tickbox);
			document.getElementById("advancedSettings10").style.display='none';
		}
}

function showOrHideBatteryDrainMenu() {
	var yesorno = localStorage.getItem("Show_Battery_Drain_Menu");
	if (yesorno === "Yes") {
		document.getElementById("advancedSettings10").style.display='block';
		document.getElementById("batteryDrainCheckbox").checked = true;		
	}
	else {
		document.getElementById("advancedSettings10").style.display='none';		
	}
}

function toggleHideMenusButton() {
	var tickbox = document.getElementById("hideMenusCheckbox");
		if (tickbox.checked) {
			var tickbox = "Yes"
			localStorage.setItem("Hide_Menus_Button_Visible", tickbox);
			document.getElementById("hideMenusButton").style.padding='10px';
			document.getElementById("hideMenusButton").style.border="2px solid #59568f";
			document.getElementById("hideMenusButton").style.fontSize='26px';
			document.getElementById("hideMenusButton").style.marginTop='5px';
		}
		else {
			var tickbox = "No"
			localStorage.setItem("Hide_Menus_Button_Visible", tickbox);
			document.getElementById("hideMenusButton").style.padding='0px';
			document.getElementById("hideMenusButton").style.border='0';
			document.getElementById("hideMenusButton").style.fontSize='0px';
			document.getElementById("hideMenusButton").style.marginTop='0px';
		}
}

function showOrHideHideMenusButton() {
	var yesorno = localStorage.getItem("Hide_Menus_Button_Visible");
	if (yesorno === "Yes") {
		document.getElementById("hideMenusButton").style.padding='10px';
		document.getElementById("hideMenusButton").style.border="2px solid #59568f";
		document.getElementById("hideMenusButton").style.fontSize='26px';
		document.getElementById("hideMenusButton").style.marginTop='5px';
		document.getElementById("hideMenusCheckbox").checked = true;		
	}
	else {
		document.getElementById("hideMenusButton").style.padding='0px';
		document.getElementById("hideMenusButton").style.border='0';
		document.getElementById("hideMenusButton").style.fontSize='0px';
		document.getElementById("hideMenusButton").style.marginTop='0px';
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
		document.getElementById("footerContainer").style.borderTop="3px solid #73728C";
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
		document.getElementById("footerContainer").style.borderTop="3px solid #73728C";
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
		document.getElementById("advancedSettings8").style.display='block';	
		document.getElementById("thirdSexCheckbox").checked = true;		
	}
	else {
		document.getElementById("containerRBOther").style.display='none';
		document.getElementById("advancedSettings8").style.display='none';		
	}
}

function toggleThirdSex() {
	var tickbox = document.getElementById("thirdSexCheckbox");
		if (tickbox.checked) {
			var tickbox = "Yes"
			localStorage.setItem("Third_Sex_Enabled", tickbox);
			document.getElementById("containerRBOther").style.display='block';
			document.getElementById("containerRBMale").style.width='22%';
			document.getElementById("containerRBFemale").style.width='27%';
			document.getElementById("containerRBOther").style.width='40%';
			document.getElementById("advancedSettings8").style.display='block';
		}
		else {
			var tickbox = "No"
			localStorage.setItem("Third_Sex_Enabled", tickbox);
			document.getElementById("containerRBOther").style.display='none';
			document.getElementById("containerRBMale").style.width='40%';
			document.getElementById("containerRBFemale").style.width='30%';
			document.getElementById("advancedSettings8").style.display='none';
		}
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

function randomizeCharacterColors() {
	var hue = Math.floor(Math.random() * 360) + 1;
	var rng = Math.floor(Math.random() * 2) + 1;
	if (rng == 1) {
		var scheme = "analogic";
	}
	else {
		var scheme = "tetrade";
	}
	var rng = Math.floor(Math.random() * 3) + 1;
	if (rng == 1) {
		var variation = "pastel";
	}
	else if (rng == 2) {
		var variation = "soft";
	}
	else if (rng == 3) {
		var variation = "light";
	}
	
	scm = new ColorScheme;
	scm.from_hue(hue)
   .scheme(scheme)
   .distance(0.75)
   .add_complement(true)
   .variation(variation)
   .web_safe(true);

	var colors = scm.colors();
	
	var p1 = Math.floor(Math.random() * 3);			//0-3
	var p2 = Math.floor(Math.random() * 3) + 4;		//4-7
	var p3 = Math.floor(Math.random() * 3) + 8;		//8-11
	var p4 = Math.floor(Math.random() * 3) + 12;	//12-15
	
	console.log(scheme);
	console.log(variation);
	console.log(p1);
	console.log(p2);
	console.log(p3);
	console.log(p4);
	
	var mainColor = colors[p1];
	var secondaryColor = colors[p2];
	var markingsAndEyesColor = colors[p3];
	var pawpadsColor = colors[p4];
	
	var mainColor = "#" + mainColor;
	var secondaryColor = "#" + secondaryColor;
	var markingsAndEyesColor = "#" + markingsAndEyesColor;
	var pawpadsColor = "#" + pawpadsColor;
	
	localStorage.setItem("Slot0_Character_Preview_Main_Color", mainColor);
	localStorage.setItem("Slot0_Character_Preview_Secondary_Color", secondaryColor);
	localStorage.setItem("Slot0_Character_Preview_Markings_Color", markingsAndEyesColor);
	localStorage.setItem("Slot0_Character_Preview_Left_Eye_Color", markingsAndEyesColor);
	localStorage.setItem("Slot0_Character_Preview_Right_Eye_Color", markingsAndEyesColor);
	localStorage.setItem("Slot0_Character_Preview_Pawpads_Color", pawpadsColor);
	
	loadCharacterPreviewColorStatus();
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
		document.getElementById("advancedSettings11").style.display= 'block';
		document.getElementById("creativeModeCheckbox").checked = true;		
	}
	else {
		document.getElementById("advancedSettings11").style.display= 'none';
		document.getElementById("creativeModeCheckbox").checked = false;	
	}
}

function toggleCreativeMode() {
var tickbox = document.getElementById("creativeModeCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("advancedSettings11").style.display= 'block';
	}
	else {
		var tickbox = "No"
		document.getElementById("advancedSettings11").style.display= 'none';
	}
	localStorage.setItem("Creative_Mode_Enabled", tickbox);
}

function showOrHideMenus() {
	var x = localStorage.getItem("Advanced_Settings_Hidden");
	var y = localStorage.getItem("Configure_Options_And_Sliders_Hidden");
	var z = localStorage.getItem("Create_Custom_Sliders_Hidden");
	var a = localStorage.getItem("Create_Custom_Checkboxes_Hidden");
	var b = localStorage.getItem("Create_Custom_Species_Hidden");
	var c = localStorage.getItem("Rename_Presets_Hidden");
	var bigD = localStorage.getItem("Every_Menu_Hidden");
	
	if (x === "Yes") {
		document.getElementById("advancedSettings").style.display= 'none';
		document.getElementById("hideAdvancedSettingsCheckbox").checked = true;		
	}
	if (y === "Yes") {
		document.getElementById("advancedSettings2").style.display= 'none';
		document.getElementById("hideConfigureOptionsAndSlidersCheckbox").checked = true;		
	}
	if (z === "Yes") {
		document.getElementById("advancedSettings3").style.display= 'none';
		document.getElementById("hideCreateCustomSlidersCheckbox").checked = true;		
	}
	if (a === "Yes") {
		document.getElementById("advancedSettings3b").style.display= 'none';
		document.getElementById("hideCreateCustomCheckboxesCheckbox").checked = true;		
	}
	if (b === "Yes") {
		document.getElementById("advancedSettings4").style.display= 'none';
		document.getElementById("hideCreateCustomSpeciesCheckbox").checked = true;		
	}
	if (c === "Yes") {
		document.getElementById("advancedSettings9").style.display= 'none';
		document.getElementById("hideRenamePresetsCheckbox").checked = true;		
	}
	if (x === "No") {
		document.getElementById("advancedSettings").style.display= 'block';
		document.getElementById("hideAdvancedSettingsCheckbox").checked = false;		
	}
	if (y === "No") {
		document.getElementById("advancedSettings2").style.display= 'block';
		document.getElementById("hideConfigureOptionsAndSlidersCheckbox").checked = false;		
	}
	if (z === "No") {
		document.getElementById("advancedSettings3").style.display= 'block';
		document.getElementById("hideCreateCustomSlidersCheckbox").checked = false;		
	}
	if (a === "No") {
		document.getElementById("advancedSettings3b").style.display= 'block';
		document.getElementById("hideCreateCustomCheckboxesCheckbox").checked = false;		
	}
	if (b === "No") {
		document.getElementById("advancedSettings4").style.display= 'block';
		document.getElementById("hideCreateCustomSpeciesCheckbox").checked = false;		
	}
	if (c === "No") {
		document.getElementById("advancedSettings9").style.display= 'block';
		document.getElementById("hideRenamePresetsCheckbox").checked = false;		
	}
	if (bigD === "Yes") {
		document.getElementById("hideEveryMenuCheckbox").checked = true;		
	}
	
}

function hideAdvancedSettings() {
var tickbox = document.getElementById("hideAdvancedSettingsCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("advancedSettings").style.display= 'none';
	}
	else {
		var tickbox = "No"
		document.getElementById("advancedSettings").style.display= 'block';
	}
	localStorage.setItem("Advanced_Settings_Hidden", tickbox);
}

function hideConfigureOptionsAndSliders() {
var tickbox = document.getElementById("hideConfigureOptionsAndSlidersCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("advancedSettings2").style.display= 'none';
	}
	else {
		var tickbox = "No"
		document.getElementById("advancedSettings2").style.display= 'block';
	}
	localStorage.setItem("Configure_Options_And_Sliders_Hidden", tickbox);
}

function hideCreateCustomSliders() {
var tickbox = document.getElementById("hideCreateCustomSlidersCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("advancedSettings3").style.display= 'none';
	}
	else {
		var tickbox = "No"
		document.getElementById("advancedSettings3").style.display= 'block';
	}
	localStorage.setItem("Create_Custom_Sliders_Hidden", tickbox);
}

function hideCreateCustomCheckboxes() {
var tickbox = document.getElementById("hideCreateCustomCheckboxesCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("advancedSettings3b").style.display= 'none';
	}
	else {
		var tickbox = "No"
		document.getElementById("advancedSettings3b").style.display= 'block';
	}
	localStorage.setItem("Create_Custom_Checkboxes_Hidden", tickbox);
}

function hideCreateCustomSpecies() {
var tickbox = document.getElementById("hideCreateCustomSpeciesCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("advancedSettings4").style.display= 'none';
	}
	else {
		var tickbox = "No"
		document.getElementById("advancedSettings4").style.display= 'block';
	}
	localStorage.setItem("Create_Custom_Species_Hidden", tickbox);
}

function hideRenamePresets() {
var tickbox = document.getElementById("hideRenamePresetsCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("advancedSettings9").style.display= 'none';
	}
	else {
		var tickbox = "No"
		document.getElementById("advancedSettings9").style.display= 'block';
	}
	localStorage.setItem("Rename_Presets_Hidden", tickbox);
}

function hideEveryMenu() {
var tickbox = document.getElementById("hideEveryMenuCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
	}
	else {
		var tickbox = "No"
	}
	localStorage.setItem("Every_Menu_Hidden", tickbox);
	localStorage.setItem("Rename_Presets_Hidden", tickbox);
	localStorage.setItem("Create_Custom_Species_Hidden", tickbox);
	localStorage.setItem("Create_Custom_Checkboxes_Hidden", tickbox);
	localStorage.setItem("Create_Custom_Sliders_Hidden", tickbox);
	localStorage.setItem("Configure_Options_And_Sliders_Hidden", tickbox);
	localStorage.setItem("Advanced_Settings_Hidden", tickbox);
	showOrHideMenus();
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
	localStorage.removeItem("Slot0_Feral_Anthro");
	localStorage.removeItem("Slot0_Pregnancy_Lock_Box_Ticked");
	localStorage.removeItem("Slot0_Fertility");
	localStorage.removeItem("Slot0_Genitals_Menu_Penis_Box_Ticked");
	localStorage.removeItem("Slot0_Genitals_Menu_Vagina_Box_Ticked");
	
	localStorage.removeItem("Slot0_Hair_Color");
	localStorage.removeItem("Slot0_Swatch_Color");
	
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
	localStorage.removeItem("Feral_Anthro_Slider_Enabled");
	localStorage.removeItem("Hair_Color_Menu_Enabled");
	localStorage.removeItem("Fertility_Slider_Enabled");
	localStorage.removeItem("Genitals_Menu_Enabled");
	localStorage.removeItem("Species_Menu_Enabled");
	localStorage.removeItem("Sex_Menu_Enabled");
	localStorage.removeItem("AC_Menu_Enabled");
	localStorage.removeItem("MascFem_Slider_Enabled");
	localStorage.removeItem("ThinThicc_Slider_Enabled");
	localStorage.removeItem("SmolTall_Slider_Enabled");
	localStorage.removeItem("Inanimate_Objects_Enabled");
	
	localStorage.removeItem("Slot0_Custom_Slider1_Value");
	localStorage.removeItem("Slot0_Custom_Slider2_Value");
	localStorage.removeItem("Slot0_Custom_Slider3_Value");
	localStorage.removeItem("Slot0_Custom_Slider4_Value");
	localStorage.removeItem("Slot0_Custom_Slider5_Value");
	
	localStorage.removeItem("Custom_Slider1_LeftText");
	localStorage.removeItem("Custom_Slider1_CenterText");
	localStorage.removeItem("Custom_Slider1_RightText");
	
	localStorage.removeItem("Custom_Slider2_LeftText");
	localStorage.removeItem("Custom_Slider2_CenterText");
	localStorage.removeItem("Custom_Slider2_RightText");
	
	localStorage.removeItem("Custom_Slider3_LeftText");
	localStorage.removeItem("Custom_Slider3_CenterText");
	localStorage.removeItem("Custom_Slider3_RightText");
	
	localStorage.removeItem("Custom_Slider4_LeftText");
	localStorage.removeItem("Custom_Slider4_CenterText");
	localStorage.removeItem("Custom_Slider4_RightText");
	
	localStorage.removeItem("Custom_Slider5_LeftText");
	localStorage.removeItem("Custom_Slider5_CenterText");
	localStorage.removeItem("Custom_Slider5_RightText");
	
	localStorage.removeItem("Custom_Slider1_Enabled");
	localStorage.removeItem("Custom_Slider2_Enabled");
	localStorage.removeItem("Custom_Slider3_Enabled");
	localStorage.removeItem("Custom_Slider4_Enabled");
	localStorage.removeItem("Custom_Slider5_Enabled");
	
	localStorage.removeItem("Slot0_Custom_Checkbox1_Label");
	localStorage.removeItem("Slot0_Custom_Checkbox1_Value1");
	localStorage.removeItem("Slot0_Custom_Checkbox1_Value2");
	localStorage.removeItem("Slot0_Custom_Checkbox1_Value1_Ticked");
	localStorage.removeItem("Slot0_Custom_Checkbox1_Value2_Ticked");
	
	localStorage.removeItem("Slot0_Custom_Checkbox2_Label");
	localStorage.removeItem("Slot0_Custom_Checkbox2_Value1");
	localStorage.removeItem("Slot0_Custom_Checkbox2_Value2");
	localStorage.removeItem("Slot0_Custom_Checkbox2_Value1_Ticked");
	localStorage.removeItem("Slot0_Custom_Checkbox2_Value2_Ticked");
	
	localStorage.removeItem("Slot0_Custom_Checkbox3_Label");
	localStorage.removeItem("Slot0_Custom_Checkbox3_Value1");
	localStorage.removeItem("Slot0_Custom_Checkbox3_Value2");
	localStorage.removeItem("Slot0_Custom_Checkbox3_Value1_Ticked");
	localStorage.removeItem("Slot0_Custom_Checkbox3_Value2_Ticked");
	
	localStorage.removeItem("Slot0_Custom_Checkbox1_Enabled");
	localStorage.removeItem("Slot0_Custom_Checkbox2_Enabled");
	localStorage.removeItem("Slot0_Custom_Checkbox3_Enabled");	
}