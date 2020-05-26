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
		x.style.maxHeight = "470px";
		x.style.borderBottom = "3px solid #73728C";
	} else {
		x.style.maxHeight = "0px";
		x.style.borderBottom = "0";
	}
}
	
function toggleCustomSlidersMenu() {
	var x = document.getElementById("CustomSlidersContainer");
	if (x.style.maxHeight === "0px") {
		x.style.maxHeight = "190px";
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

function toggleFeedbackMenu() {
	var x = document.getElementById("feedback");
	if (x.style.maxHeight === "0px") {
		x.style.borderTop = "3px solid #73728C";
		x.style.maxHeight = "254px";
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
	c.style.maxHeight = "331px";
	c.style.marginTop = "10px";
	document.getElementById("hideCreditsButton").style.display='block';
	document.getElementById("showCreditsButton").style.display='none';
}

function hideCredits() {
	var c = document.getElementById("credits");
	c.style.borderTop = "0";
	c.style.maxHeight = "0px";
	c.style.marginTop = "0px";
	document.getElementById("hideCreditsButton").style.display='none';
	document.getElementById("showCreditsButton").style.display='block';	
}
	
function setContainersHeightToZero() {
	document.getElementById("AdvancedSettingsContainer").style.maxHeight='0px';
	document.getElementById("addRemoveSlidersContainer").style.maxHeight='0px';
	document.getElementById("addRemoveSlidersContainer").style.borderBottom='0';
	document.getElementById("CustomSlidersContainer").style.maxHeight='0px';
	document.getElementById("CustomSpeciesContainer").style.maxHeight='0px';
	document.getElementById("defineInanimateObjectsContainer").style.maxHeight='0px';
	document.getElementById("defineHairColorsContainer").style.maxHeight='0px';
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

function currentTime() {
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
function batteryDrain() {
	var isBatteryDisabled = localStorage.getItem("Battery_Disabled"); 
	if (isBatteryDisabled == "Yes") {
		return;
	}
	else {
	setTimeout(batteryDrain2, 40000);	
	}	
}

function batteryDrain2() {
	document.getElementById("battery_full").style.display = "none";
	document.getElementById("battery_34").style.display = "block";	
	setTimeout(batteryDrain3, 40000);
}

function batteryDrain3() {
	document.getElementById("battery_34").style.display = "none";
	document.getElementById("battery_half").style.display = "block";
	setTimeout(batteryDrain4, 40000);
}

function batteryDrain4() {
	document.getElementById("battery_half").style.display = "none";
	document.getElementById("battery_14").style.display = "block";
	setTimeout(batteryDrain5, 40000);
}

function batteryDrain5() {
	document.getElementById("battery_14").style.display = "none";
	document.getElementById("battery_low").style.display = "block";
	document.getElementById("chargeBattery").style.display = "block";	
	lowBatteryWait();
}

function batteryCharge() {
	var doesBatteryNeedCharging = document.getElementById("chargeBattery");
	if (doesBatteryNeedCharging.style.display === "none"){
		return;
	}
	else{
	document.getElementById("chargeBattery").style.display = "none";
	document.getElementById("battery_low").style.display = "none";
	document.getElementById("battery_low_charging").style.display = "block";
	setTimeout(batteryCharge2, 20000);
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
	setTimeout(errorLowBattery, 10000);
}

function errorLowBattery() {
	var areAdminPermsOn = document.getElementById("adminPermsText");
	if (areAdminPermsOn.style.display === "none"){
		var isBatteryLow = document.getElementById("battery_low");
		if (isBatteryLow.style.display === "block") {
			var rng = Math.floor(Math.random() * 100) + 1;
				if (rng == 21) {
				remoteLoginError();
				setTimeout(errorLowBattery, 10000);
			}
				else if (rng == 37) {
				error69();
				setTimeout(errorLowBattery, 10000);
			}
				else if (rng == 69) {
				error621();
				setTimeout(errorLowBattery, 10000);
			}
				else {
				setTimeout(errorLowBattery, 10000);
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
		document.getElementById('processingText').innerHTML = "&nbsp;";
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
		mySlider21.enable();
		mySlider22.enable();
		localStorage.setItem("Settings_Locked", "No");
		document.getElementById("speciesCurrentContainer").style.backgroundColor = '#3b395e';
		document.getElementById("inanimateObjectsCurrentContainer").style.backgroundColor = '#3b395e';
		document.getElementById("hairColorCurrentContainer").style.backgroundColor = '#3b395e';
		document.getElementById("speciesCurrentContainer").style.cursor = 'pointer';
		document.getElementById("inanimateObjectsCurrentContainer").style.cursor = 'pointer';
		document.getElementById("hairColorCurrentContainer").style.cursor = 'pointer';
		document.getElementById("adaptClothingContainer").style.cursor = 'pointer';
		document.getElementById("RBMaleContainer").style.cursor = 'pointer';
		document.getElementById("RBFemaleContainer").style.cursor = 'pointer';	
		document.getElementById("speciesSearch").style.cursor = 'pointer';
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
mySlider21.disable();
mySlider22.disable();
localStorage.setItem("Settings_Locked", "Yes");
document.getElementById("speciesCurrentContainer").style.backgroundColor = '#282640';
document.getElementById("inanimateObjectsCurrentContainer").style.backgroundColor = '#282640';
document.getElementById("hairColorCurrentContainer").style.backgroundColor = '#282640';
document.getElementById("speciesCurrentContainer").style.cursor = 'not-allowed';
document.getElementById("inanimateObjectsCurrentContainer").style.cursor = 'not-allowed';
document.getElementById("hairColorCurrentContainer").style.cursor = 'not-allowed';
document.getElementById("adaptClothingContainer").style.cursor = 'not-allowed';
document.getElementById("RBMaleContainer").style.cursor = 'not-allowed';
document.getElementById("RBFemaleContainer").style.cursor = 'not-allowed';
document.getElementById("speciesSearch").style.cursor = 'not-allowed';
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

function breastSizeMaleFunction() {
		document.getElementById("showAdvancedSettings4a").style.display = "block";
		document.getElementById("showAdvancedSettings4b").style.display = "none";  
	}

function breastSizeFemaleFunction() {
		document.getElementById("showAdvancedSettings4b").style.display = "block";
		document.getElementById("showAdvancedSettings4a").style.display = "none";  
	}

function enterPasswordFunction(){
document.getElementById("adminbutton").style.display='none';  
document.getElementById("enterPassword").style.display='block';  
}

function processingPasswordFunction(){
document.getElementById("adminbutton").style.display='none';  
document.getElementById("enterPassword").style.display='none';  
document.getElementById("loading1").style.display='block';  
setTimeout(loadingFunction1, 400);
}

function loadingFunction1(){
document.getElementById("loading1").style.display='none'; 
document.getElementById("loading2").style.display='block'; 
setTimeout(kurwaFunction, 400);
}

function kurwaFunction(){
document.getElementById("loading2").style.display='none'; 
document.getElementById("loading3").style.display='block'; 
setTimeout(loadingFunction3, 400);
}

function loadingFunction3(){
document.getElementById("loading3").style.display='none'; 
document.getElementById("loading4").style.display='block'; 
setTimeout(adminPasswordCheck, 400);
}

function adminPasswordCheck() {
		document.getElementById("loading4").style.display='none'; 
		var password = document.getElementById("password").value;
			if (password == "OwO") {
				document.getElementById("accessGranted").style.display='block';
				setTimeout(adminPermsOn, 1500);
			} else {
				document.getElementById("accessDenied").style.display='block';
				setTimeout(reTry, 2000);
			}
	}

function adminPermsOn() {
		document.getElementById("accessGranted").style.display='none';
		document.getElementById('defaultcss').href='css/admindhtmlxslider.css';
		document.getElementById("adminPermsText").style.display='block';  
		localStorage.setItem("Admin_passwd_entered", "Yes");
		localStorage.setItem("Admin_mode_on", "Yes");
		document.getElementById("adminbuttontoggle").style.display='block';
	}
	
function toggleAdminModeFunction() {
		var isAdminOn = document.getElementById("adminPermsText");
		if (isAdminOn.style.display === "none") {
			isAdminOn.style.display = "block";
			document.getElementById('defaultcss').href='css/admindhtmlxslider.css';
			localStorage.setItem("Admin_mode_on", "Yes");
		} else {
			isAdminOn.style.display = "none";
			document.getElementById('defaultcss').href='css/dhtmlxslider.css';
			localStorage.setItem("Admin_mode_on", "No");
		}	
	}

function adminPermsTextOff() {
		document.getElementById('defaultcss').href='css/dhtmlxslider.css';
		document.getElementById("adminPermsText").style.display='none';  
	}
 
function reTry() {
		document.getElementById("accessDenied").style.display='none';
		document.getElementById("adminbutton").style.display='block';
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
		document.getElementById("preferences").style.display = "none";
		document.getElementById("goBack").style.display = "block";		
		document.getElementById("optionsList").style.display='block';  
	}
	
function goBackFunction() {
		document.getElementById("preferences").style.display = "block";
		document.getElementById("goBack").style.display = "none";		
		document.getElementById("optionsList").style.display='none';  
	}
	
function triggerErrorsFunction() {
		document.getElementById("triggerRLEButton").style.display = "block";
		document.getElementById("triggerError69Button").style.display = "block";
		document.getElementById("triggerError621Button").style.display = "block";
	}
 
function changeSexToMale() {
	var areSettingsLocked = localStorage.getItem("Settings_Locked");
	if (areSettingsLocked === "Yes") {
		var Sex = localStorage.getItem("Slot0_Sex");
		if (Sex == "Male") {
				rbmale = document.getElementById("radiobuttonMale");
				rbmale.checked = true;
				rbfemale = document.getElementById("radiobuttonFemale");
				rbfemale.checked = false;
			}
			else {
				rbfemale = document.getElementById("radiobuttonFemale");
				rbfemale.checked = true;
				rbmale = document.getElementById("radiobuttonMale");
				rbmale.checked = false;
			}
	}
	else {
	var settingSex = "Male";
	localStorage.setItem("Slot0_Sex", settingSex);
	rbfemale = document.getElementById("radiobuttonFemale");
	if (rbfemale.checked) {
		var error2 = Math.floor(Math.random() * 621) + 1;
		if (error2 == 69) {
			document.getElementById("sexMenu").style.color='#FF4550'; 
			document.getElementById("linesNormal").style.display='none'; 
			document.getElementById("linesError").style.display='block'; 
			document.getElementById("errorMessageContainer").style.display = "block";
			document.getElementById("MSSErrorMessage").style.display = "block";	
			document.getElementById("MSSOkayContainer").style.display = "block";	
			document.getElementById("MSSOkay").style.display = "block";			
			changeRadioButtonAppearance();
			rbfemale = document.getElementById("radiobuttonFemale");
			rbfemale.checked = true;
		}
		else {
			rbmale = document.getElementById("radiobuttonMale");
			rbmale.checked = true;
			rbfemale = document.getElementById("radiobuttonFemale");
			rbfemale.checked = false;
			document.getElementById("showAdvancedSettings4a").style.display='block'; 
			document.getElementById("showAdvancedSettings4b").style.display='none'; 
			showOrHideBreastSizeMaleSlider();
			showOrHideGenitalSizeFemaleSlider();
			showProcessingAnimation();
		}
	}
	else { 
		rbmale = document.getElementById("radiobuttonMale");
		rbmale.checked = true;
		document.getElementById("showAdvancedSettings4a").style.display='block'; 
		document.getElementById("showAdvancedSettings4b").style.display='none'; 
		showOrHideBreastSizeMaleSlider();
		showOrHideGenitalSizeFemaleSlider();
	}
	}
} 
 
function changeSexToFemale() {
	var areSettingsLocked = localStorage.getItem("Settings_Locked");
	if (areSettingsLocked === "Yes") {
		var Sex = localStorage.getItem("Slot0_Sex");
		if (Sex == "Male") {
				rbmale = document.getElementById("radiobuttonMale");
				rbmale.checked = true;
				rbfemale = document.getElementById("radiobuttonFemale");
				rbfemale.checked = false;
			}
			else {
				rbfemale = document.getElementById("radiobuttonFemale");
				rbfemale.checked = true;
				rbmale = document.getElementById("radiobuttonMale");
				rbmale.checked = false;
			}
	}
	else {
	var settingSex = "Female";
	localStorage.setItem("Slot0_Sex", settingSex);
	rbmale = document.getElementById("radiobuttonMale");
	if (rbmale.checked) {  
		var error2 = Math.floor(Math.random() * 621) + 1;
		if (error2 == 69) {
			document.getElementById("sexMenu").style.color='#FF4550'; 
			document.getElementById("linesNormal").style.display='none'; 
			document.getElementById("linesError").style.display='block'; 
			document.getElementById("errorMessageContainer").style.display = "block";
			document.getElementById("MSSErrorMessage").style.display = "block";	
			document.getElementById("MSSOkayContainer").style.display = "block";	
			document.getElementById("MSSOkay").style.display = "block";	
			changeRadioButtonAppearance();
			rbmale = document.getElementById("radiobuttonMale");
			rbmale.checked = true;
		}
		else {
			rbmale = document.getElementById("radiobuttonMale");
			rbmale.checked = false;
			rbfemale = document.getElementById("radiobuttonFemale");
			rbfemale.checked = true;
			document.getElementById("showAdvancedSettings4a").style.display='none'; 
			document.getElementById("showAdvancedSettings4b").style.display='block'; 
			showOrHideGenitalSizeFemaleSlider();
			showProcessingAnimation();
		}
	}  
	else {  
		rbfemale = document.getElementById("radiobuttonFemale");
		rbfemale.checked = true;
		document.getElementById("showAdvancedSettings4a").style.display='none'; 
		document.getElementById("showAdvancedSettings4b").style.display='block'; 
		showOrHideGenitalSizeFemaleSlider();
	}
	}
}
 
function hideMSSError () {
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

function showSaveSlotButtons() {
	 document.getElementById("saveSlotButtons").style.display='block';  
	 document.getElementById("saveSettingsButton").style.display='none';  
}
 
function hideSaveSlotButtons() {
	 document.getElementById("saveSlotButtons").style.display='none';  
	 document.getElementById("saveSettingsButton").style.display='block';  
}
 
function showLoadSlotButtons() {
	 document.getElementById("loadSlotButtons").style.display='block';  
	 document.getElementById("loadSettingsButton").style.display='none';  
}
 
function hideLoadSlotButtons() {
	 document.getElementById("loadSlotButtons").style.display='none';  
	 document.getElementById("loadSettingsButton").style.display='block';  
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
				rbfemale = document.getElementById("radiobuttonFemale");
				rbfemale.checked = false;
				loadPS3();
			}
			else {
				rbfemale = document.getElementById("radiobuttonFemale");
				rbfemale.checked = true;
				rbmale = document.getElementById("radiobuttonMale");
				rbmale.checked = false;
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
			var element2 = document.getElementById("cockType");
			element2.value = cockType; 
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
					document.getElementById("showAdvancedSettings4a").style.display = "block";
					loadPS20();
				}
				else {
					document.getElementById("showAdvancedSettings4a").style.display = "block";
					document.getElementById("showAdvancedSettings4b").style.display = "none";				
					mySlider9.setValue(breastSizeMale);
					loadPS20();
				}
			}
			else {
				var breastSizeFemale = localStorage.getItem("Slot0_Breast_Size_Female");
				if (breastSizeFemale == null) {
					document.getElementById("showAdvancedSettings4b").style.display = "block";
					loadPS20();
				}
				else {
					document.getElementById("showAdvancedSettings4b").style.display = "block";
					document.getElementById("showAdvancedSettings4a").style.display = "none";				
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
				document.getElementById("adminbuttontoggle").style.display='block';
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
				document.getElementById("usernameButton").style.display='none'; 
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
			loadPS26();
		}
		else {
			mySlider20.setValue(hairLenght);
			loadPS26();
		}		
	}
	
function loadPS26() {
		var sexuality = localStorage.getItem("Slot0_Sexuality");
		if (sexuality == null) {
			loadPS27();
		}
		else {
			mySlider21.setValue(sexuality);
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
			loadPSLast();
		}
		else {
			mySlider23.setValue(fertility);
			loadPSLast();
		}		
	}
		
function loadPSLast() { 		
		document.getElementById("AdvancedSettingsContainer").style.display='none'; 	
	}

function saveCockType() {
		var cockType = document.getElementById('cockType').value 
		localStorage.setItem("Slot0_Cock_Type", cockType);
	}

function hideMobileDeviceMessage() {
	document.getElementById("errorMessageContainer").style.display = "none";
	document.getElementById("mobileDeviceMessage").style.display = "none";
	document.getElementById("mobileDeviceOkayContainer").style.display = "none";
	document.getElementById("mobileDeviceOkay").style.display= 'none';  
	localStorage.setItem("Seen_Mobile_Device_Message", "Yes");		
}

function toggleButtSizeSlider() {
var tickbox = document.getElementById("buttSizeSliderCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("buttSizeSlider").style.display= 'block';
	}
	else {
		var tickbox = "No"
		document.getElementById("buttSizeSlider").style.display= 'none';
	}
	localStorage.setItem("Butt_Size_Slider_Enabled", tickbox);
}

function toggleBellySizeSlider() {
var tickbox = document.getElementById("bellySizeSliderCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("bellySizeSlider").style.display= 'block';
	}
	else {
		var tickbox = "No"
		document.getElementById("bellySizeSlider").style.display= 'none';
	}
	localStorage.setItem("Belly_Size_Slider_Enabled", tickbox);
}

function toggleBellyShapeSlider() {
var tickbox = document.getElementById("bellyShapeSliderCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("bellyShapeSlider").style.display= 'block';
	}
	else {
		var tickbox = "No"
		document.getElementById("bellyShapeSlider").style.display= 'none';
	}
	localStorage.setItem("Belly_Shape_Slider_Enabled", tickbox);
}

function toggleHipsSlider() {
var tickbox = document.getElementById("hipsSliderCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("hipsSlider").style.display= 'block';
	}
	else {
		var tickbox = "No"
		document.getElementById("hipsSlider").style.display= 'none';
	}
	localStorage.setItem("Hips_Slider_Enabled", tickbox);
}

function toggleGenitalSizeSlider() {
var tickbox = document.getElementById("genitalSizeSliderCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("genitalSizeSlider").style.display= 'block';
	}
	else {
		var tickbox = "No"
		document.getElementById("genitalSizeSlider").style.display= 'none';
	}
	localStorage.setItem("Genital_Size_Slider_Enabled", tickbox);
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

function toggleLibidoSlider() {
var tickbox = document.getElementById("libidoSliderCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("libidoSlider").style.display= 'block';
	}
	else {
		var tickbox = "No"
		document.getElementById("libidoSlider").style.display= 'none';
	}
	localStorage.setItem("Libido_Slider_Enabled", tickbox);
}

function toggleSensitivitySlider() {
var tickbox = document.getElementById("sensitivitySliderCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("sensitivitySlider").style.display= 'block';
	}
	else {
		var tickbox = "No"
		document.getElementById("sensitivitySlider").style.display= 'none';
	}
	localStorage.setItem("Sensitivity_Slider_Enabled", tickbox);
}

function toggleDemeanorSlider() {
var tickbox = document.getElementById("demeanorSliderCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("demeanorSlider").style.display= 'block';
	}
	else {
		var tickbox = "No"
		document.getElementById("demeanorSlider").style.display= 'none';
	}
	localStorage.setItem("Demeanor_Slider_Enabled", tickbox);
}

function togglePositionPreferenceSlider() {
var tickbox = document.getElementById("positionPreferenceSliderCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("positionPrefSlider").style.display= 'block';
	}
	else {
		var tickbox = "No"
		document.getElementById("positionPrefSlider").style.display= 'none';
	}
	localStorage.setItem("Postion_Pref_Slider_Enabled", tickbox);
}

function toggleIntelligenceSlider() {
var tickbox = document.getElementById("intelligenceSliderCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("intelligenceSlider").style.display= 'block';
	}
	else {
		var tickbox = "No"
		document.getElementById("intelligenceSlider").style.display= 'none';
	}
	localStorage.setItem("Intelligence_Slider_Enabled", tickbox);
}

function toggleFluffinessSlider() {
var tickbox = document.getElementById("fluffinessSliderCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("fluffinessSlider").style.display= 'block';
	}
	else {
		var tickbox = "No"
		document.getElementById("fluffinessSlider").style.display= 'none';
	}
	localStorage.setItem("Fluffiness_Slider_Enabled", tickbox);
}

function toggleHairLenghtSlider() {
var tickbox = document.getElementById("hairLenghtSliderCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("hairLenghtSlider").style.display= 'block';
	}
	else {
		var tickbox = "No"
		document.getElementById("hairLenghtSlider").style.display= 'none';
	}
	localStorage.setItem("Hair_Lenght_Slider_Enabled", tickbox);
}

function toggleSexualitySlider() {
var tickbox = document.getElementById("sexualitySliderCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("sexualitySlider").style.display= 'block';
	}
	else {
		var tickbox = "No"
		document.getElementById("sexualitySlider").style.display= 'none';
	}
	localStorage.setItem("Sexuality_Slider_Enabled", tickbox);
}

function toggleFeralAnthroSlider() {
var tickbox = document.getElementById("feralAnthroSliderCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("feralAnthroSlider").style.display= 'block';
	}
	else {
		var tickbox = "No"
		document.getElementById("feralAnthroSlider").style.display= 'none';
	}
	localStorage.setItem("Feral_Anthro_Slider_Enabled", tickbox);
}

function toggleFertilitySlider() {
var tickbox = document.getElementById("fertilitySliderCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("fertilitySlider").style.display= 'block';
	}
	else {
		var tickbox = "No"
		document.getElementById("fertilitySlider").style.display= 'none';
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

function loadSliderSettings() {
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
	var sexualitySliderEnabled = localStorage.getItem("Sexuality_Slider_Enabled");
	var feralAnthroSliderEnabled = localStorage.getItem("Feral_Anthro_Slider_Enabled");
	var hairColorMenuEnabled = localStorage.getItem("Hair_Color_Menu_Enabled");
	var fertilitySliderEnabled = localStorage.getItem("Fertility_Slider_Enabled");
	
	if (buttSizeSliderEnabled != "No") {// = Null or yes. Enabled on default.
		document.getElementById("buttSizeSliderCheckbox").checked = true;
	}
	else {
		document.getElementById("buttSizeSlider").style.display= 'none';
	}

	if (bellySizeSliderEnabled != "No") {
		document.getElementById("bellySizeSliderCheckbox").checked = true;
	}
	else {
		document.getElementById("bellySizeSlider").style.display= 'none';
	}
	
	if (bellyShapeSliderEnabled != "No") {// Disabled on default.
		if (bellyShapeSliderEnabled == null) {
		document.getElementById("bellyShapeSlider").style.display= 'none';
		document.getElementById("bellyShapeSliderCheckbox").checked = false;
		}
		else {
		document.getElementById("bellyShapeSliderCheckbox").checked = true;
		}
	} 
	else {
		document.getElementById("bellyShapeSlider").style.display= 'none';
	}
	
	if (hipsSliderEnabled != "No") {
		document.getElementById("hipsSliderCheckbox").checked = true;
	}
	else {
		document.getElementById("hipsSlider").style.display= 'none';
	}
	
	if (genitalSizeSliderEnabled != "No") {
		document.getElementById("genitalSizeSliderCheckbox").checked = true;
	}
	else {
		document.getElementById("genitalSizeSlider").style.display= 'none';
	}
	
	if (cockTypeMenuEnabled != "No") {
		if (cockTypeMenuEnabled == null) {
		document.getElementById("cockTypeMenu").style.display= 'none';
		document.getElementById("cockTypeMenuCheckbox").checked = false;
		}
		else {
		document.getElementById("cockTypeMenuCheckbox").checked = true;
		}
	}
	else {
		document.getElementById("cockTypeMenu").style.display= 'none';
	}
	
	if (libidoSliderEnabled != "No") {
		if (libidoSliderEnabled == null) {
		document.getElementById("libidoSlider").style.display= 'none';
		document.getElementById("libidoSliderCheckbox").checked = false;
		}
		else {
		document.getElementById("libidoSliderCheckbox").checked = true;
		}
	}
	else {
		document.getElementById("libidoSlider").style.display= 'none';
	}
	
	if (sensitivitySliderEnabled != "No") {
		if (sensitivitySliderEnabled == null) {
		document.getElementById("sensitivitySlider").style.display= 'none';
		document.getElementById("sensitivitySliderCheckbox").checked = false;
		}
		else {
		document.getElementById("sensitivitySliderCheckbox").checked = true;
		}
	}
	else {
		document.getElementById("sensitivitySlider").style.display= 'none';
	}
	
	if (demeanorSliderEnabled != "No") {
		document.getElementById("demeanorSliderCheckbox").checked = true;
	}
	else {
		document.getElementById("demeanorSlider").style.display= 'none';
	}
	
	if (positionPrefSliderEnabled != "No") {
		document.getElementById("positionPreferenceSliderCheckbox").checked = true;
	}
	else {
		document.getElementById("positionPrefSlider").style.display= 'none';
	}
	
	if (intelligenceSliderEnabled != "No") {
		if (intelligenceSliderEnabled == null) {
		document.getElementById("intelligenceSlider").style.display= 'none';
		document.getElementById("intelligenceSliderCheckbox").checked = false;
		}
		else {
		document.getElementById("intelligenceSliderCheckbox").checked = true;
		}
	}
	else {
		document.getElementById("intelligenceSlider").style.display= 'none';
	}
	
	if (fluffinessSliderEnabled != "No") {
		document.getElementById("fluffinessSliderCheckbox").checked = true;
	}
	else {
		document.getElementById("fluffinessSlider").style.display= 'none';
	}
	
	if (hairLenghtSliderEnabled != "No") {
		document.getElementById("hairLenghtSliderCheckbox").checked = true;
	}
	else {
		document.getElementById("hairLenghtSlider").style.display= 'none';
	}
	
	if (hairColorMenuEnabled != "No") {
		document.getElementById("hairColorMenuCheckbox").checked = true;
	}
	else {
		document.getElementById("hairColorMenu").style.display= 'none';
		document.getElementById("advancedSettings6").style.display= 'none';
	}
	
	if (sexualitySliderEnabled != "No") {
		if (sexualitySliderEnabled == null) {
		document.getElementById("sexualitySlider").style.display= 'none';
		document.getElementById("sexualitySliderCheckbox").checked = false;
		}
		else {
		document.getElementById("sexualitySliderCheckbox").checked = true;
		}
	}
	else {
		document.getElementById("sexualitySlider").style.display= 'none';
	}
	
	if (feralAnthroSliderEnabled != "No") {
		if (feralAnthroSliderEnabled == null) {
		document.getElementById("feralAnthroSlider").style.display= 'none';
		document.getElementById("feralAnthroSliderCheckbox").checked = false;
		}
		else {
		document.getElementById("feralAnthroSliderCheckbox").checked = true;
		}
	}
	else {
		document.getElementById("feralAnthroSlider").style.display= 'none';
	}
	
	if (fertilitySliderEnabled != "No") {
		if (fertilitySliderEnabled == null) {
		document.getElementById("fertilitySlider").style.display= 'none';
		document.getElementById("fertilitySliderCheckbox").checked = false;
		}
		else {
		document.getElementById("fertilitySliderCheckbox").checked = true;
		}
	}
	else {
		document.getElementById("fertilitySlider").style.display= 'none';
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
		document.getElementById("adminbuttontoggle").style.display='block';  
	}
	else {
		return;
	}
}

function checkSlots() {
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

function changeUsernameBegin() {
	document.getElementById("usernameButton").style.display='none';
	document.getElementById("enterUsername").style.display='block';
	document.getElementById("clearUsernameButton").style.display='block';
}

function changeUsername() {
	var username = document.getElementById("usernameTextField").value;
	if (username == "") {
		document.getElementById("usernameButton").style.display='block';
		document.getElementById("enterUsername").style.display='none';
		document.getElementById("clearUsernameButton").style.display='none';
	}
	else {
		localStorage.setItem("Username", username);
		document.getElementById("usernameButton").style.display='block';
		document.getElementById("enterUsername").style.display='none';
		document.getElementById("clearUsernameButton").style.display='none';
	}
}

function clearUsername() {
	localStorage.removeItem('Username');
	document.getElementById("usernameButton").style.display='block';
	document.getElementById("enterUsername").style.display='none';
	document.getElementById("clearUsernameButton").style.display='none';	
}

function hideUsernameFuntion() {
	var tickbox = document.getElementById("hideUsernameCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		localStorage.setItem("Username_Button_Hidden", tickbox);
		document.getElementById("usernameButton").style.display='none'; 
		document.getElementById("enterUsername").style.display='none'; 
	}
	else {
		var tickbox = "No"
		localStorage.setItem("Username_Button_Hidden", tickbox);
		document.getElementById("usernameButton").style.display='block';
	}
}

function hideFeedbackButton() {
	var tickbox = document.getElementById("hideFeedbackCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		localStorage.setItem("Feedback_Button_Hidden", tickbox);
		document.getElementById("toggleFeedbackButton").style.display='none'; 
	}
	else {
		var tickbox = "No"
		localStorage.setItem("Feedback_Button_Hidden", tickbox);
		document.getElementById("toggleFeedbackButton").style.display='block';
	}
}

function showOrHideFeedbackButton() {
	var yesorno = localStorage.getItem("Feedback_Button_Hidden");
	if (yesorno === "Yes") {
		document.getElementById("toggleFeedbackButton").style.display='none';
		document.getElementById("hideFeedbackCheckbox").checked = true;		
	}
	else {
		document.getElementById("toggleFeedbackButton").style.display='block';	
	}
}

function hideLockPasswordButton() {
	var tickbox = document.getElementById("lockPasswordCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		localStorage.setItem("Lock_Password_Button_Hidden", tickbox);
		document.getElementById("lockSettingsPasswordButton").style.display='none'; 
	}
	else {
		var tickbox = "No"
		localStorage.setItem("Lock_Password_Button_Hidden", tickbox);
		document.getElementById("lockSettingsPasswordButton").style.display='block';
	}
}

function showOrHideLockPasswordButton() {
	var yesorno = localStorage.getItem("Lock_Password_Button_Hidden");
	if (yesorno === "Yes") {
		document.getElementById("lockSettingsPasswordButton").style.display='none';
		document.getElementById("lockPasswordCheckbox").checked = true;		
	}
	else {
		document.getElementById("lockSettingsPasswordButton").style.display='block';	
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
		document.getElementById("showAdvancedSettings4a").style.display='none';
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
			document.getElementById("showAdvancedSettings4a").style.display='block';
		}
	}
}

function showOrHideGenitalSizeFemaleSlider() {
	var show = localStorage.getItem("Show_GS_Slider_Female");
	if (show != "Yes") { // null(default) or "No"
		var isFemaleSelected = document.getElementById("radiobuttonFemale");
		if (isFemaleSelected.checked) {
			document.getElementById("genitalSizeSlider").style.display='none';
			document.getElementById("showGenitalSizeFemaleCheckbox").checked = false;
		}
		else {
			var isGenitalSizeSliderEnabled = localStorage.getItem("Genital_Size_Slider_Enabled");
			if (isGenitalSizeSliderEnabled === "Yes")
			{
				document.getElementById("genitalSizeSlider").style.display='block';
			}
			else if (isGenitalSizeSliderEnabled === "No")
			{
				document.getElementById("genitalSizeSlider").style.display='none';
			}
			else {
				document.getElementById("genitalSizeSlider").style.display='block';
			}
		}
	}
	else {		
		document.getElementById("showGenitalSizeFemaleCheckbox").checked = true;
		document.getElementById("genitalSizeSlider").style.display='block';
	}
}

function setSliderRangeToAdminMode() {
	mySlider.setMin(-20);
	mySlider.setMax(120);
	mySlider2.setMin(-20);
	mySlider2.setMax(120);
	mySlider3.setMin(-20);
	mySlider3.setMax(120);
	mySlider4.setMin(-20);
	mySlider4.setMax(120);
	mySlider5.setMin(-20);
	mySlider5.setMax(120);
	mySlider6.setMin(-20);
	mySlider6.setMax(120);
	mySlider7.setMin(-20);
	mySlider7.setMax(120);
	mySlider8.setMin(-20);
	mySlider8.setMax(120);
	mySlider9.setMin(-20);
	mySlider9.setMax(120);
	mySlider10.setMin(-20);
	mySlider10.setMax(120);
	mySlider11.setMin(-20);
	mySlider11.setMax(120);
	mySlider12.setMin(-20);
	mySlider12.setMax(120);
	mySlider13.setMin(-20);
	mySlider13.setMax(120);
	mySlider14.setMin(-20);
	mySlider14.setMax(120);
	mySlider15.setMin(-20);
	mySlider15.setMax(120);
	mySlider16.setMin(-20);
	mySlider16.setMax(120);
}

function setSliderRangeToNormalMode() {
	mySlider.setMin(0);
	mySlider.setMax(100);
	mySlider2.setMin(0);
	mySlider2.setMax(100);
	mySlider3.setMin(0);
	mySlider3.setMax(100);
	mySlider4.setMin(0);
	mySlider4.setMax(100);
	mySlider5.setMin(0);
	mySlider5.setMax(100);
	mySlider6.setMin(0);
	mySlider6.setMax(100);
	mySlider7.setMin(0);
	mySlider7.setMax(100);
	mySlider8.setMin(0);
	mySlider8.setMax(100);
	mySlider9.setMin(0);
	mySlider9.setMax(100);
	mySlider10.setMin(0);
	mySlider10.setMax(100);
	mySlider11.setMin(0);
	mySlider11.setMax(100);
	mySlider12.setMin(0);
	mySlider12.setMax(100);
	mySlider13.setMin(0);
	mySlider13.setMax(100);
	mySlider14.setMin(0);
	mySlider14.setMax(100);
	mySlider15.setMin(0);
	mySlider15.setMax(100);
	mySlider16.setMin(0);
	mySlider16.setMax(100);
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

function changeBGCustomBegin() {
	document.getElementById("buttonBGDefault").style.visibility='hidden';  
	document.getElementById("buttonBGWhite").style.visibility='hidden';  
	document.getElementById("buttonBGGray").style.visibility='hidden';  
	document.getElementById("buttonBGBlack").style.visibility='hidden';  
	document.getElementById("buttonBGCustom").style.visibility='hidden'; 
	document.getElementById("buttonBGCustomSet").style.visibility='visible'; 
	document.getElementById("bgColorTextField").style.visibility='visible';	
}

function changeBGCustom() {
	var bgcolor = document.getElementById("bgColorTextField").value;	
	if (bgcolor == "") {		
		document.getElementById("buttonBGCustomSet").style.visibility='hidden'; 
		document.getElementById("bgColorTextField").style.visibility='hidden';
		document.getElementById("buttonBGDefault").style.visibility='visible';  
		document.getElementById("buttonBGWhite").style.visibility='visible';  
		document.getElementById("buttonBGGray").style.visibility='visible';  
		document.getElementById("buttonBGBlack").style.visibility='visible';  
		document.getElementById("buttonBGCustom").style.visibility='visible'; 
	}
	else {
		localStorage.setItem("Background_Color", bgcolor);
		document.body.style.background = bgcolor;
		document.getElementById("buttonBGCustomSet").style.visibility='hidden'; 
		document.getElementById("bgColorTextField").style.visibility='hidden';
		document.getElementById("buttonBGDefault").style.visibility='visible';  
		document.getElementById("buttonBGWhite").style.visibility='visible';  
		document.getElementById("buttonBGGray").style.visibility='visible';  
		document.getElementById("buttonBGBlack").style.visibility='visible';  
		document.getElementById("buttonBGCustom").style.visibility='visible'; 	
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
		document.getElementById("custom1SliderMenu").style.display= 'block';
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
		document.getElementById("custom2SliderMenu").style.display= 'block';
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
		document.getElementById("custom3SliderMenu").style.display= 'block';
	}

function toggleCustomSlider1() {
var tickbox = document.getElementById("customSlider1Checkbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("custom1SliderMenu").style.display= 'block';
	}
	else {
		var tickbox = "No"
		document.getElementById("custom1SliderMenu").style.display= 'none';
	}
	localStorage.setItem("Custom_Slider1_Enabled", tickbox);
}

function toggleCustomSlider2() {
var tickbox = document.getElementById("customSlider2Checkbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("custom2SliderMenu").style.display= 'block';
	}
	else {
		var tickbox = "No"
		document.getElementById("custom2SliderMenu").style.display= 'none';
	}
	localStorage.setItem("Custom_Slider2_Enabled", tickbox);
}

function toggleCustomSlider3() {
var tickbox = document.getElementById("customSlider3Checkbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("custom3SliderMenu").style.display= 'block';
	}
	else {
		var tickbox = "No"
		document.getElementById("custom3SliderMenu").style.display= 'none';
	}
	localStorage.setItem("Custom_Slider3_Enabled", tickbox);
}

function loadCustomSlidersOnStartup() {
	loadCustomSlidersValuesOnStartup1();
	loadCustomSlidersValuesOnStartup2();
	loadCustomSlidersValuesOnStartup3();
	loadCustomSlidersNamesOnStartup1();
	loadCustomSlidersNamesOnStartup2();
	loadCustomSlidersNamesOnStartup3();
}

function loadCustomSlidersValuesOnStartup1() {
	var isCS1Enabled = localStorage.getItem("Custom_Slider1_Enabled");	
	if (isCS1Enabled == "Yes") {
		document.getElementById("customSlider1Checkbox").checked = true;
		var CS1Value = localStorage.getItem("Slot0_Custom_Slider1_Value");
		mySlider17.setValue(CS1Value);
	}
	else {
		var CS1Value = localStorage.getItem("Slot0_Custom_Slider1_Value");
		if (CS1Value == null) {
			document.getElementById("custom1SliderMenu").style.display= 'none';
		}
		else {
			mySlider17.setValue(CS1Value);
			document.getElementById("custom1SliderMenu").style.display= 'none';
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

function loadCustomSlidersValuesOnStartup2() {
	var isCS2Enabled = localStorage.getItem("Custom_Slider2_Enabled");	
	if (isCS2Enabled == "Yes") {
		document.getElementById("customSlider2Checkbox").checked = true;
		var CS2Value = localStorage.getItem("Slot0_Custom_Slider2_Value");
		mySlider18.setValue(CS2Value);
	}
	else {
		var CS2Value = localStorage.getItem("Slot0_Custom_Slider2_Value");
		if (CS2Value == null) {
			document.getElementById("custom2SliderMenu").style.display= 'none';
		}
		else {
			mySlider18.setValue(CS2Value);
			document.getElementById("custom2SliderMenu").style.display= 'none';
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

function loadCustomSlidersValuesOnStartup3() {
	var isCS3Enabled = localStorage.getItem("Custom_Slider3_Enabled");	
	if (isCS3Enabled == "Yes") {
		document.getElementById("customSlider3Checkbox").checked = true;
		var CS3Value = localStorage.getItem("Slot0_Custom_Slider3_Value");
		mySlider19.setValue(CS3Value);
	}
	else {
		var CS3Value = localStorage.getItem("Slot0_Custom_Slider3_Value");
		if (CS3Value == null) {
			document.getElementById("custom3SliderMenu").style.display= 'none';
		}
		else {
			mySlider19.setValue(CS3Value);
			document.getElementById("custom3SliderMenu").style.display= 'none';
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

function hairColorLoadList() {
	var areSettingsLocked = localStorage.getItem("Settings_Locked");
	if (areSettingsLocked === "Yes") {
		return;
	}
	else {
		document.getElementById("hairColorCurrentContainer").style.display= 'none';
		document.getElementById("hairColorSwatch").style.display= 'none';
		document.getElementById("hairColorSelectorContainer").style.display= 'block';
		document.getElementById('hairColorContainer').style.width = "80%";
		//document.getElementById('speciesContainer').style.border = "2px solid #282640";
		document.getElementById('hairColorMenu').style.height = "440px";
		document.getElementById('AdvancedSettingsContainer').style.maxHeight = "1760px";
	}
}

function inanimateObjectsLoadList() {
	var areSettingsLocked = localStorage.getItem("Settings_Locked");
	if (areSettingsLocked === "Yes") {
		return;
	}
	else {
		document.getElementById("inanimateObjectsCurrentContainer").style.display= 'none';
		document.getElementById("inanimateObjectsSearch").style.display= 'none';
		document.getElementById("inanimateObjectsSelectorContainer").style.display= 'block';
		document.getElementById('inanimateObjectsContainer').style.width = "80%";
		//document.getElementById('speciesContainer').style.border = "2px solid #282640";
		document.getElementById('inanimateObjectsMenu').style.height = "415px";
	}
}

function speciesLoadList() {
	var areSettingsLocked = localStorage.getItem("Settings_Locked");
	if (areSettingsLocked === "Yes") {
		return;
	}
	else {
		document.getElementById("speciesCurrentContainer").style.display= 'none';
		document.getElementById("speciesSearch").style.display= 'none';
		document.getElementById("speciesCategorySelectorContainer").style.display= 'block';
		document.getElementById('speciesContainer').style.width = "80%";
		//document.getElementById('speciesContainer').style.border = "2px solid #282640";
		document.getElementById('speciesMenu').style.height = "610px";
	}
}

function goBackFromhairColorList() {
	document.getElementById("hairColorCurrentContainer").style.display= 'block';
	document.getElementById("hairColorSwatch").style.display= 'block';
	document.getElementById("hairColorSelectorContainer").style.display= 'none';
	document.getElementById('hairColorContainer').style.width = "70%";
	//document.getElementById('speciesContainer').style.border = "2px solid #9D9CAF";
	document.getElementById('hairColorMenu').style.height = "62px";
	document.getElementById('AdvancedSettingsContainer').style.maxHeight = "1330px";
}

function goBackFromInanimateObjectsList() {
	document.getElementById("inanimateObjectsCurrentContainer").style.display= 'block';
	document.getElementById("inanimateObjectsSearch").style.display= 'block';
	document.getElementById("inanimateObjectsSelectorContainer").style.display= 'none';
	document.getElementById('inanimateObjectsContainer').style.width = "70%";
	//document.getElementById('speciesContainer').style.border = "2px solid #9D9CAF";
	document.getElementById('inanimateObjectsMenu').style.height = "62px";
}

function goBackFromCategoryList() {
	document.getElementById("speciesCurrentContainer").style.display= 'block';
	document.getElementById("speciesSearch").style.display= 'block';
	document.getElementById("speciesCategorySelectorContainer").style.display= 'none';
	document.getElementById('speciesContainer').style.width = "70%";
	//document.getElementById('speciesContainer').style.border = "2px solid #9D9CAF";
	document.getElementById('speciesMenu').style.height = "62px";
}

function goToPredefinedHairColorsCategory() {
	document.getElementById("hairColorSelectorContainer").style.display= 'none';
	document.getElementById("hairColorSelectorPredefined").style.display= 'block';
	document.getElementById('hairColorMenu').style.height = "620px";
	document.getElementById('AdvancedSettingsContainer').style.maxHeight = "1940px";
}

function goBackFromPredefinedHairColorsCategory() {
	document.getElementById("hairColorSelectorContainer").style.display= 'block';
	document.getElementById("hairColorSelectorPredefined").style.display= 'none';
	document.getElementById('hairColorMenu').style.height = "440px";
	document.getElementById('AdvancedSettingsContainer').style.maxHeight = "1760px";
}

function goToMostPopularCategory() {
	document.getElementById("speciesCategorySelectorContainer").style.display= 'none';
	document.getElementById("speciesSelectorMostPopular").style.display= 'block';
	document.getElementById('speciesMenu').style.height = "620px";
}

function goBackFromMostPopularCategory() {
	document.getElementById("speciesCategorySelectorContainer").style.display= 'block';
	document.getElementById("speciesSelectorMostPopular").style.display= 'none';
	document.getElementById('speciesMenu').style.height = "610px";
}

function goToCustomCategoryFromMostPopular() {
	document.getElementById("speciesSelectorMostPopular").style.display= 'none';
	document.getElementById("speciesSelectorCustom").style.display= 'block';
	document.getElementById('speciesMenu').style.height = "300px";
}

function goToMostPopularCategoryFromCustom() {
	document.getElementById("speciesSelectorCustom").style.display= 'none';
	document.getElementById("speciesSelectorMostPopular").style.display= 'block';	
	document.getElementById('speciesMenu').style.height = "620px";
}

function goToCustomCategory() {
	document.getElementById("speciesCategorySelectorContainer").style.display= 'none';
	document.getElementById("speciesSelectorCustom").style.display= 'block';
	document.getElementById('speciesMenu').style.height = "300px";
}

function goBackFromCustomCategory() {
	document.getElementById("speciesCategorySelectorContainer").style.display= 'block';
	document.getElementById("speciesSelectorCustom").style.display= 'none';
	document.getElementById('speciesMenu').style.height = "610px";
}

function goToAvianCategoryFromCustom() {
	document.getElementById("speciesSelectorCustom").style.display= 'none';
	document.getElementById("speciesSelectorAvian").style.display= 'block';	
	document.getElementById('speciesMenu').style.height = "300px";
}

function goToCustomCategoryFromAvian() {
	document.getElementById("speciesSelectorCustom").style.display= 'block';
	document.getElementById("speciesSelectorAvian").style.display= 'none';	
	document.getElementById('speciesMenu').style.height = "300px";
}

function goToAvianCategory() {
	document.getElementById("speciesCategorySelectorContainer").style.display= 'none';
	document.getElementById("speciesSelectorAvian").style.display= 'block';
	document.getElementById('speciesMenu').style.height = "300px";
}

function goBackFromAvianCategory() {
	document.getElementById("speciesCategorySelectorContainer").style.display= 'block';
	document.getElementById("speciesSelectorAvian").style.display= 'none';
	document.getElementById('speciesMenu').style.height = "610px";
}

function goToBovineCategoryFromAvian() {
	document.getElementById("speciesSelectorBovine").style.display= 'block';
	document.getElementById("speciesSelectorAvian").style.display= 'none';	
	document.getElementById('speciesMenu').style.height = "190px";
}

function goToAvianCategoryFromBovine() {
	document.getElementById("speciesSelectorBovine").style.display= 'none';
	document.getElementById("speciesSelectorAvian").style.display= 'block';	
	document.getElementById('speciesMenu').style.height = "300px";
}

function goToBovineCategory() {
	document.getElementById("speciesCategorySelectorContainer").style.display= 'none';
	document.getElementById("speciesSelectorBovine").style.display= 'block';
	document.getElementById('speciesMenu').style.height = "190px";
}

function goBackFromBovineCategory() {
	document.getElementById("speciesCategorySelectorContainer").style.display= 'block';
	document.getElementById("speciesSelectorBovine").style.display= 'none';
	document.getElementById('speciesMenu').style.height = "610px";
}

function goToCanineCategoryFromBovine() {
	document.getElementById("speciesSelectorCanine").style.display= 'block';
	document.getElementById("speciesSelectorBovine").style.display= 'none';	
	document.getElementById('speciesMenu').style.height = "330px";
}

function goToBovineCategoryFromCanine() {
	document.getElementById("speciesSelectorCanine").style.display= 'none';
	document.getElementById("speciesSelectorBovine").style.display= 'block';	
	document.getElementById('speciesMenu').style.height = "190px";
}

function goToCanineCategory() {
	document.getElementById("speciesCategorySelectorContainer").style.display= 'none';
	document.getElementById("speciesSelectorCanine").style.display= 'block';
	document.getElementById('speciesMenu').style.height = "330px";
}

function goBackFromCanineCategory() {
	document.getElementById("speciesCategorySelectorContainer").style.display= 'block';
	document.getElementById("speciesSelectorCanine").style.display= 'none';
	document.getElementById('speciesMenu').style.height = "610px";
}

function goToCervineCategoryFromCanine() {
	document.getElementById("speciesSelectorCervine").style.display= 'block';
	document.getElementById("speciesSelectorCanine").style.display= 'none';	
	document.getElementById('speciesMenu').style.height = "190px";
}

function goToCanineCategoryFromCervine() {
	document.getElementById("speciesSelectorCervine").style.display= 'none';
	document.getElementById("speciesSelectorCanine").style.display= 'block';	
	document.getElementById('speciesMenu').style.height = "330px";
}

function goToCervineCategory() {
	document.getElementById("speciesCategorySelectorContainer").style.display= 'none';
	document.getElementById("speciesSelectorCervine").style.display= 'block';
	document.getElementById('speciesMenu').style.height = "190px";
}

function goBackFromCervineCategory() {
	document.getElementById("speciesCategorySelectorContainer").style.display= 'block';
	document.getElementById("speciesSelectorCervine").style.display= 'none';
	document.getElementById('speciesMenu').style.height = "610px";
}

function goToEquineCategoryFromCervine() {
	document.getElementById("speciesSelectorCervine").style.display= 'none';
	document.getElementById("speciesSelectorEquine").style.display= 'block';	
	document.getElementById('speciesMenu').style.height = "220px";
}

function goToCervineCategoryFromEquine() {
	document.getElementById("speciesSelectorCervine").style.display= 'block';
	document.getElementById("speciesSelectorEquine").style.display= 'none';	
	document.getElementById('speciesMenu').style.height = "190px";
}

function goToEquineCategory() {
	document.getElementById("speciesCategorySelectorContainer").style.display= 'none';
	document.getElementById("speciesSelectorEquine").style.display= 'block';
	document.getElementById('speciesMenu').style.height = "220px";
}

function goBackFromEquineCategory() {
	document.getElementById("speciesCategorySelectorContainer").style.display= 'block';
	document.getElementById("speciesSelectorEquine").style.display= 'none';
	document.getElementById('speciesMenu').style.height = "610px";
}

function goToFelineCategoryFromEquine() {
	document.getElementById("speciesSelectorFeline").style.display= 'block';
	document.getElementById("speciesSelectorEquine").style.display= 'none';	
	document.getElementById('speciesMenu').style.height = "370px";
}

function goToEquineCategoryFromFeline() {
	document.getElementById("speciesSelectorFeline").style.display= 'none';
	document.getElementById("speciesSelectorEquine").style.display= 'block';	
	document.getElementById('speciesMenu').style.height = "220px";
}

function goToFelineCategory() {
	document.getElementById("speciesCategorySelectorContainer").style.display= 'none';
	document.getElementById("speciesSelectorFeline").style.display= 'block';
	document.getElementById('speciesMenu').style.height = "370px";
}

function goBackFromFelineCategory() {
	document.getElementById("speciesCategorySelectorContainer").style.display= 'block';
	document.getElementById("speciesSelectorFeline").style.display= 'none';
	document.getElementById('speciesMenu').style.height = "610px";
}

function goToFictionalCategoryFromFeline() {
	document.getElementById("speciesSelectorFeline").style.display= 'none';
	document.getElementById("speciesSelectorFictional").style.display= 'block';	
	document.getElementById('speciesMenu').style.height = "335px";
}

function goToFelineCategoryFromFictional() {
	document.getElementById("speciesSelectorFeline").style.display= 'block';
	document.getElementById("speciesSelectorFictional").style.display= 'none';	
	document.getElementById('speciesMenu').style.height = "370px";
}

function goToFictionalCategory() {
	document.getElementById("speciesCategorySelectorContainer").style.display= 'none';
	document.getElementById("speciesSelectorFictional").style.display= 'block';
	document.getElementById('speciesMenu').style.height = "335px";
}

function goBackFromFictionalCategory() {
	document.getElementById("speciesCategorySelectorContainer").style.display= 'block';
	document.getElementById("speciesSelectorFictional").style.display= 'none';
	document.getElementById('speciesMenu').style.height = "610px";
}

function goToHybridCategoryFromFictional() {
	document.getElementById("speciesSelectorHybrid").style.display= 'block';
	document.getElementById("speciesSelectorFictional").style.display= 'none';	
	document.getElementById('speciesMenu').style.height = "260px";
}

function goToFictionalCategoryFromHybrid() {
	document.getElementById("speciesSelectorHybrid").style.display= 'none';
	document.getElementById("speciesSelectorFictional").style.display= 'block';	
	document.getElementById('speciesMenu').style.height = "335px";
}

function goToHybridCategory() {
	document.getElementById("speciesCategorySelectorContainer").style.display= 'none';
	document.getElementById("speciesSelectorHybrid").style.display= 'block';
	document.getElementById('speciesMenu').style.height = "260px";
}

function goBackFromHybridCategory() {
	document.getElementById("speciesCategorySelectorContainer").style.display= 'block';
	document.getElementById("speciesSelectorHybrid").style.display= 'none';
	document.getElementById('speciesMenu').style.height = "610px";
}

function goToLagomorphCategoryFromHybrid() {
	document.getElementById("speciesSelectorHybrid").style.display= 'none';
	document.getElementById("speciesSelectorLagomorph").style.display= 'block';	
	document.getElementById('speciesMenu').style.height = "190px";
}

function goToHybridCategoryFromLagomorph() {
	document.getElementById("speciesSelectorHybrid").style.display= 'block';
	document.getElementById("speciesSelectorLagomorph").style.display= 'none';	
	document.getElementById('speciesMenu').style.height = "260px";
}

function goToLagomorphCategory() {
	document.getElementById("speciesCategorySelectorContainer").style.display= 'none';
	document.getElementById("speciesSelectorLagomorph").style.display= 'block';
	document.getElementById('speciesMenu').style.height = "190px";
}

function goBackFromLagomorphCategory() {
	document.getElementById("speciesCategorySelectorContainer").style.display= 'block';
	document.getElementById("speciesSelectorLagomorph").style.display= 'none';
	document.getElementById('speciesMenu').style.height = "610px";
}

function goToMarsupialCategoryFromLagomorph() {
	document.getElementById("speciesSelectorMarsupial").style.display= 'block';
	document.getElementById("speciesSelectorLagomorph").style.display= 'none';	
	document.getElementById('speciesMenu').style.height = "190px";
}

function goToLagomorphCategoryFromMarsupial() {
	document.getElementById("speciesSelectorMarsupial").style.display= 'none';
	document.getElementById("speciesSelectorLagomorph").style.display= 'block';	
	document.getElementById('speciesMenu').style.height = "190px";
}

function goToMarsupialCategory() {
	document.getElementById("speciesCategorySelectorContainer").style.display= 'none';
	document.getElementById("speciesSelectorMarsupial").style.display= 'block';
	document.getElementById('speciesMenu').style.height = "190px";
}

function goBackFromMarsupialCategory() {
	document.getElementById("speciesCategorySelectorContainer").style.display= 'block';
	document.getElementById("speciesSelectorMarsupial").style.display= 'none';
	document.getElementById('speciesMenu').style.height = "610px";
}

function goToMustelidCategoryFromMarsupial() {
	document.getElementById("speciesSelectorMarsupial").style.display= 'none';
	document.getElementById("speciesSelectorMustelid").style.display= 'block';	
	document.getElementById('speciesMenu').style.height = "225px";
}

function goToMarsupialCategoryFromMustelid() {
	document.getElementById("speciesSelectorMarsupial").style.display= 'block';
	document.getElementById("speciesSelectorMustelid").style.display= 'none';	
	document.getElementById('speciesMenu').style.height = "190px";
}

function goToMustelidCategory() {
	document.getElementById("speciesCategorySelectorContainer").style.display= 'none';
	document.getElementById("speciesSelectorMustelid").style.display= 'block';
	document.getElementById('speciesMenu').style.height = "225px";
}

function goBackFromMustelidCategory() {
	document.getElementById("speciesCategorySelectorContainer").style.display= 'block';
	document.getElementById("speciesSelectorMustelid").style.display= 'none';
	document.getElementById('speciesMenu').style.height = "610px";
}

function goToReptileCategoryFromMustelid() {
	document.getElementById("speciesSelectorReptile").style.display= 'block';
	document.getElementById("speciesSelectorMustelid").style.display= 'none';	
	document.getElementById('speciesMenu').style.height = "260px";
}

function goToMustelidCategoryFromReptile() {
	document.getElementById("speciesSelectorReptile").style.display= 'none';
	document.getElementById("speciesSelectorMustelid").style.display= 'block';	
	document.getElementById('speciesMenu').style.height = "225px";
}

function goToReptileCategory() {
	document.getElementById("speciesCategorySelectorContainer").style.display= 'none';
	document.getElementById("speciesSelectorReptile").style.display= 'block';
	document.getElementById('speciesMenu').style.height = "260px";
}

function goBackFromReptileCategory() {
	document.getElementById("speciesCategorySelectorContainer").style.display= 'block';
	document.getElementById("speciesSelectorReptile").style.display= 'none';
	document.getElementById('speciesMenu').style.height = "610px";
}

function goToRodentCategoryFromReptile() {
	document.getElementById("speciesSelectorReptile").style.display= 'none';
	document.getElementById("speciesSelectorRodent").style.display= 'block';	
	document.getElementById('speciesMenu').style.height = "225px";
}

function goToReptileCategoryFromRodent() {
	document.getElementById("speciesSelectorReptile").style.display= 'block';
	document.getElementById("speciesSelectorRodent").style.display= 'none';	
	document.getElementById('speciesMenu').style.height = "260px";
}

function goToRodentCategory() {
	document.getElementById("speciesCategorySelectorContainer").style.display= 'none';
	document.getElementById("speciesSelectorRodent").style.display= 'block';
	document.getElementById('speciesMenu').style.height = "225px";
}

function goBackFromRodentCategory() {
	document.getElementById("speciesCategorySelectorContainer").style.display= 'block';
	document.getElementById("speciesSelectorRodent").style.display= 'none';
	document.getElementById('speciesMenu').style.height = "610px";
}

function goToUngulateCategoryFromRodent() {
	document.getElementById("speciesSelectorUngulate").style.display= 'block';
	document.getElementById("speciesSelectorRodent").style.display= 'none';	
	document.getElementById('speciesMenu').style.height = "225px";
}

function goToRodentCategoryFromUngulate() {
	document.getElementById("speciesSelectorUngulate").style.display= 'none';
	document.getElementById("speciesSelectorRodent").style.display= 'block';	
	document.getElementById('speciesMenu').style.height = "225px";
}

function goToUngulateCategory() {
	document.getElementById("speciesCategorySelectorContainer").style.display= 'none';
	document.getElementById("speciesSelectorUngulate").style.display= 'block';
	document.getElementById('speciesMenu').style.height = "225px";
}

function goBackFromUngulateCategory() {
	document.getElementById("speciesCategorySelectorContainer").style.display= 'block';
	document.getElementById("speciesSelectorUngulate").style.display= 'none';
	document.getElementById('speciesMenu').style.height = "610px";
}

function setSpeciesTo(Species) {
	document.getElementById('speciesCurrent').innerHTML = Species;
	localStorage.setItem("Slot0_Species", Species);
	closeCategoryMenu();
	goBackFromCategoryList();
	showProcessingAnimation();
}

function setInanimateObjectTo(Object) {
	document.getElementById('inanimateObjectsCurrent').innerHTML = Object;
	localStorage.setItem("Slot0_Inanimate_Object", Object);
	goBackFromInanimateObjectsList();
	showProcessingAnimation();
}

function closeHairCategoryMenu() {
	document.getElementById("hairColorSelectorContainer").style.display = "none";
	document.getElementById("hairColorSelectorPredefined").style.display = "none";
}

function closeCategoryMenu() {
	document.getElementById("speciesCategorySelectorContainer").style.display = "none";
	document.getElementById("speciesSelectorMostPopular").style.display = "none";
	document.getElementById("speciesSelectorCustom").style.display = "none";
	document.getElementById("speciesSelectorAvian").style.display = "none";
	document.getElementById("speciesSelectorBovine").style.display = "none";
	document.getElementById("speciesSelectorCanine").style.display = "none";
	document.getElementById("speciesSelectorCervine").style.display = "none";
	document.getElementById("speciesSelectorEquine").style.display = "none";
	document.getElementById("speciesSelectorFeline").style.display = "none";
	document.getElementById("speciesSelectorFictional").style.display = "none";
	document.getElementById("speciesSelectorHybrid").style.display = "none";
	document.getElementById("speciesSelectorLagomorph").style.display = "none";
	document.getElementById("speciesSelectorMarsupial").style.display = "none";
	document.getElementById("speciesSelectorMustelid").style.display = "none";
	document.getElementById("speciesSelectorReptile").style.display = "none";
	document.getElementById("speciesSelectorRodent").style.display = "none";
	document.getElementById("speciesSelectorUngulate").style.display = "none";	
}

function changeLockSettingsPassword() {
	var currentPassword = localStorage.getItem("Current_Password");
	if (currentPassword == null) {
		var newPassword = document.getElementById("newPasswordTextField").value;
		localStorage.setItem("Current_Password", newPassword);
		localStorage.setItem("Lock_Settings_Password_Enabled", "Yes");
		passwordCheckbox = document.getElementById("EnableLockSettingsPasswordCheckbox");
		passwordCheckbox.checked = true;
		document.getElementById('passwordMessage').innerHTML = "New password saved!";
		document.getElementById('passwordMessage').style.color = "#4EFF45";
	}
	else {
		var currentPasswordCheck = document.getElementById("currentPasswordTextField").value;		
		if (currentPassword === currentPasswordCheck) {
			var newPassword = document.getElementById("newPasswordTextField").value;
			localStorage.setItem("Current_Password", newPassword);
			localStorage.setItem("Lock_Settings_Password_Enabled", "Yes");
			passwordCheckbox = document.getElementById("EnableLockSettingsPasswordCheckbox");
			passwordCheckbox.checked = true;
			document.getElementById('passwordMessage').innerHTML = "New password saved!";
			document.getElementById('passwordMessage').style.color = "#4EFF45";
		}
		else {
			document.getElementById('passwordMessage').innerHTML = "Current password invalid!";
			document.getElementById('passwordMessage').style.color = "#FF4550";			
		}
	}
}

function checkPasswordOnStartup() {
	var enabled = localStorage.getItem("Lock_Settings_Password_Enabled");
	if (enabled === "Yes") {
		passwordCheckbox = document.getElementById("EnableLockSettingsPasswordCheckbox");
		passwordCheckbox.checked = true;		
	}
	else {
		return;
	}
}

function toggleLockSettingsPassword() {
	var tickbox = document.getElementById("EnableLockSettingsPasswordCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		localStorage.setItem("Lock_Settings_Password_Enabled", tickbox);
	}
	else {
		var currentPassword = localStorage.getItem("Current_Password");
		if (currentPassword == null) {
			var tickbox = "No"
			localStorage.setItem("Lock_Settings_Password_Enabled", tickbox);
		}
		else {
			var currentPasswordCheck = document.getElementById("currentPasswordTextField").value;		
			if (currentPassword === currentPasswordCheck) {
				var tickbox = "No"
				localStorage.setItem("Lock_Settings_Password_Enabled", tickbox);	
				document.getElementById('passwordMessage').innerHTML = "Password OK!";
				document.getElementById('passwordMessage').style.color = "#4EFF45";				
			}
			else {
				tickbox.checked = true;
				document.getElementById('passwordMessage').innerHTML = "Password invalid!";
				document.getElementById('passwordMessage').style.color = "#FF4550";
			}
		} 
	}
}

function openLockSettingsPasswordMenu() {
	document.getElementById("lockSettingsPasswordButton").style.display = "none";
	document.getElementById("lockSettingsPasswordMenu").style.display = "block";
}

function GoBackLockSettingsPassword() {
	document.getElementById("lockSettingsPasswordButton").style.display = "block";
	document.getElementById("lockSettingsPasswordMenu").style.display = "none";
}

function changeCSSlot1() {
	document.getElementById("CSContainerSlot11").style.display='none'; 
	document.getElementById("CSContainerSlot12").style.display='block'; 
}

function goBackCSSlot1() {
	document.getElementById("CSContainerSlot11").style.display='block'; 
	document.getElementById("CSContainerSlot12").style.display='none'; 
}

function changeCSSlot2() {
	document.getElementById("CSContainerSlot21").style.display='none'; 
	document.getElementById("CSContainerSlot22").style.display='block'; 
}

function goBackCSSlot2() {
	document.getElementById("CSContainerSlot21").style.display='block'; 
	document.getElementById("CSContainerSlot22").style.display='none'; 
}

function changeCSSlot3() {
	document.getElementById("CSContainerSlot31").style.display='none'; 
	document.getElementById("CSContainerSlot32").style.display='block'; 
}

function goBackCSSlot3() {
	document.getElementById("CSContainerSlot31").style.display='block'; 
	document.getElementById("CSContainerSlot32").style.display='none'; 
}

function changeCSSlot4() {
	document.getElementById("CSContainerSlot41").style.display='none'; 
	document.getElementById("CSContainerSlot42").style.display='block'; 
}

function goBackCSSlot4() {
	document.getElementById("CSContainerSlot41").style.display='block'; 
	document.getElementById("CSContainerSlot42").style.display='none'; 
}

function changeCSSlot5() {
	document.getElementById("CSContainerSlot51").style.display='none'; 
	document.getElementById("CSContainerSlot52").style.display='block'; 
}

function goBackCSSlot5() {
	document.getElementById("CSContainerSlot51").style.display='block'; 
	document.getElementById("CSContainerSlot52").style.display='none'; 
}

function changeCSSlot6() {
	document.getElementById("CSContainerSlot61").style.display='none'; 
	document.getElementById("CSContainerSlot62").style.display='block'; 
}

function goBackCSSlot6() {
	document.getElementById("CSContainerSlot61").style.display='block'; 
	document.getElementById("CSContainerSlot62").style.display='none'; 
}

function changeCSSlot7() {
	document.getElementById("CSContainerSlot71").style.display='none'; 
	document.getElementById("CSContainerSlot72").style.display='block'; 
}

function goBackCSSlot7() {
	document.getElementById("CSContainerSlot71").style.display='block'; 
	document.getElementById("CSContainerSlot72").style.display='none'; 
}

function changeCSSlot8() {
	document.getElementById("CSContainerSlot81").style.display='none'; 
	document.getElementById("CSContainerSlot82").style.display='block'; 
}

function goBackCSSlot8() {
	document.getElementById("CSContainerSlot81").style.display='block'; 
	document.getElementById("CSContainerSlot82").style.display='none'; 
}

function changeCSSlot9() {
	document.getElementById("CSContainerSlot91").style.display='none'; 
	document.getElementById("CSContainerSlot92").style.display='block'; 
}

function goBackCSSlot9() {
	document.getElementById("CSContainerSlot91").style.display='block'; 
	document.getElementById("CSContainerSlot92").style.display='none'; 
}

function changeCSSlot10() {
	document.getElementById("CSContainerSlot101").style.display='none'; 
	document.getElementById("CSContainerSlot102").style.display='block'; 
}

function goBackCSSlot10() {
	document.getElementById("CSContainerSlot101").style.display='block'; 
	document.getElementById("CSContainerSlot102").style.display='none'; 
}

function setCSSlot1() {
	var species = document.getElementById("customSpeciesSlot1TextField").value;
	localStorage.setItem("Custom_Species_Slot1", species);
	document.getElementById('customSpeciesName1').innerHTML = species;
	document.getElementById('speciesEntryCustom1').innerHTML = species;
	goBackCSSlot1();
}

function setCSSlot2() {
	var species = document.getElementById("customSpeciesSlot2TextField").value;
	localStorage.setItem("Custom_Species_Slot2", species);
	document.getElementById('customSpeciesName2').innerHTML = species;
	document.getElementById('speciesEntryCustom2').innerHTML = species;
	goBackCSSlot2();
}

function setCSSlot3() {
	var species = document.getElementById("customSpeciesSlot3TextField").value;
	localStorage.setItem("Custom_Species_Slot3", species);
	document.getElementById('customSpeciesName3').innerHTML = species;
	document.getElementById('speciesEntryCustom3').innerHTML = species;
	goBackCSSlot3();
}

function setCSSlot4() {
	var species = document.getElementById("customSpeciesSlot4TextField").value;
	localStorage.setItem("Custom_Species_Slot4", species);
	document.getElementById('customSpeciesName4').innerHTML = species;
	document.getElementById('speciesEntryCustom4').innerHTML = species;
	goBackCSSlot4();
}

function setCSSlot5() {
	var species = document.getElementById("customSpeciesSlot5TextField").value;
	localStorage.setItem("Custom_Species_Slot5", species);
	document.getElementById('customSpeciesName5').innerHTML = species;
	document.getElementById('speciesEntryCustom5').innerHTML = species;
	goBackCSSlot5();
}

function setCSSlot6() {
	var species = document.getElementById("customSpeciesSlot6TextField").value;
	localStorage.setItem("Custom_Species_Slot6", species);
	document.getElementById('customSpeciesName6').innerHTML = species;
	document.getElementById('speciesEntryCustom6').innerHTML = species;
	goBackCSSlot6();
}

function setCSSlot7() {
	var species = document.getElementById("customSpeciesSlot7TextField").value;
	localStorage.setItem("Custom_Species_Slot7", species);
	document.getElementById('customSpeciesName7').innerHTML = species;
	document.getElementById('speciesEntryCustom7').innerHTML = species;
	goBackCSSlot7();
}

function setCSSlot8() {
	var species = document.getElementById("customSpeciesSlot8TextField").value;
	localStorage.setItem("Custom_Species_Slot8", species);
	document.getElementById('customSpeciesName8').innerHTML = species;
	document.getElementById('speciesEntryCustom8').innerHTML = species;
	goBackCSSlot8();
}

function setCSSlot9() {
	var species = document.getElementById("customSpeciesSlot9TextField").value;
	localStorage.setItem("Custom_Species_Slot9", species);
	document.getElementById('customSpeciesName9').innerHTML = species;
	document.getElementById('speciesEntryCustom9').innerHTML = species;
	goBackCSSlot9();
}

function setCSSlot10() {
	var species = document.getElementById("customSpeciesSlot10TextField").value;
	localStorage.setItem("Custom_Species_Slot10", species);
	document.getElementById('customSpeciesName10').innerHTML = species;
	document.getElementById('speciesEntryCustom10').innerHTML = species;
	goBackCSSlot10();
}

function loadCustomSpeciesOnStartup() {
	var species1 = localStorage.getItem("Custom_Species_Slot1");
	var species2 = localStorage.getItem("Custom_Species_Slot2");
	var species3 = localStorage.getItem("Custom_Species_Slot3");
	var species4 = localStorage.getItem("Custom_Species_Slot4");
	var species5 = localStorage.getItem("Custom_Species_Slot5");
	var species6 = localStorage.getItem("Custom_Species_Slot6");
	var species7 = localStorage.getItem("Custom_Species_Slot7");
	var species8 = localStorage.getItem("Custom_Species_Slot8");
	var species9 = localStorage.getItem("Custom_Species_Slot9");
	var species10 = localStorage.getItem("Custom_Species_Slot10");
	
	if (species1 === null) {
		species1 = "Empty";
	}
	if (species2 === null) {
		species2 = "Empty";
	}
	if (species3 === null) {
		species3 = "Empty";
	}
	if (species4 === null) {
		species4 = "Empty";
	}
	if (species5 === null) {
		species5 = "Empty";
	}
	if (species6 === null) {
		species6 = "Empty";
	}
	if (species7 === null) {
		species7 = "Empty";
	}
	if (species8 === null) {
		species8 = "Empty";
	}
	if (species9 === null) {
		species9 = "Empty";
	}
	if (species10 === null) {
		species10 = "Empty";
	}
	
	document.getElementById('customSpeciesName1').innerHTML = species1;
	document.getElementById('speciesEntryCustom1').innerHTML = species1;
	
	document.getElementById('customSpeciesName2').innerHTML = species2;
	document.getElementById('speciesEntryCustom2').innerHTML = species2;
	
	document.getElementById('customSpeciesName3').innerHTML = species3;
	document.getElementById('speciesEntryCustom3').innerHTML = species3;
	
	document.getElementById('customSpeciesName4').innerHTML = species4;
	document.getElementById('speciesEntryCustom4').innerHTML = species4;
	
	document.getElementById('customSpeciesName5').innerHTML = species5;
	document.getElementById('speciesEntryCustom5').innerHTML = species5;
	
	document.getElementById('customSpeciesName6').innerHTML = species6;
	document.getElementById('speciesEntryCustom6').innerHTML = species6;
	
	document.getElementById('customSpeciesName7').innerHTML = species7;
	document.getElementById('speciesEntryCustom7').innerHTML = species7;
	
	document.getElementById('customSpeciesName8').innerHTML = species8;
	document.getElementById('speciesEntryCustom8').innerHTML = species8;
	
	document.getElementById('customSpeciesName9').innerHTML = species9;
	document.getElementById('speciesEntryCustom9').innerHTML = species9;
	
	document.getElementById('customSpeciesName10').innerHTML = species10;
	document.getElementById('speciesEntryCustom10').innerHTML = species10;
}

function setSpeciesToCustom(slotNumber) {
	if (slotNumber === "Slot_One") {
		var Species = document.getElementById('speciesEntryCustom1').innerHTML;		
	}
	if (slotNumber === "Slot_Two") {
		var Species = document.getElementById('speciesEntryCustom2').innerHTML;		
	}
	if (slotNumber === "Slot_Three") {
		var Species = document.getElementById('speciesEntryCustom3').innerHTML;		
	}
	if (slotNumber === "Slot_Four") {
		var Species = document.getElementById('speciesEntryCustom4').innerHTML;		
	}
	if (slotNumber === "Slot_Five") {
		var Species = document.getElementById('speciesEntryCustom5').innerHTML;		
	}
	if (slotNumber === "Slot_Six") {
		var Species = document.getElementById('speciesEntryCustom6').innerHTML;		
	}
	if (slotNumber === "Slot_Seven") {
		var Species = document.getElementById('speciesEntryCustom7').innerHTML;		
	}
	if (slotNumber === "Slot_Eight") {
		var Species = document.getElementById('speciesEntryCustom8').innerHTML;		
	}
	if (slotNumber === "Slot_Nine") {
		var Species = document.getElementById('speciesEntryCustom9').innerHTML;		
	}
	if (slotNumber === "Slot_Ten") {
		var Species = document.getElementById('speciesEntryCustom10').innerHTML;		
	}
	setSpeciesTo(Species);
}

function changeCOSlot1() {
	document.getElementById("COContainerSlot11").style.display='none'; 
	document.getElementById("COContainerSlot12").style.display='block'; 
}

function goBackCOSlot1() {
	document.getElementById("COContainerSlot11").style.display='block'; 
	document.getElementById("COContainerSlot12").style.display='none'; 
}

function changeCOSlot2() {
	document.getElementById("COContainerSlot21").style.display='none'; 
	document.getElementById("COContainerSlot22").style.display='block'; 
}

function goBackCOSlot2() {
	document.getElementById("COContainerSlot21").style.display='block'; 
	document.getElementById("COContainerSlot22").style.display='none'; 
}

function changeCOSlot3() {
	document.getElementById("COContainerSlot31").style.display='none'; 
	document.getElementById("COContainerSlot32").style.display='block'; 
}

function goBackCOSlot3() {
	document.getElementById("COContainerSlot31").style.display='block'; 
	document.getElementById("COContainerSlot32").style.display='none'; 
}

function changeCOSlot4() {
	document.getElementById("COContainerSlot41").style.display='none'; 
	document.getElementById("COContainerSlot42").style.display='block'; 
}

function goBackCOSlot4() {
	document.getElementById("COContainerSlot41").style.display='block'; 
	document.getElementById("COContainerSlot42").style.display='none'; 
}

function changeCOSlot5() {
	document.getElementById("COContainerSlot51").style.display='none'; 
	document.getElementById("COContainerSlot52").style.display='block'; 
}

function goBackCOSlot5() {
	document.getElementById("COContainerSlot51").style.display='block'; 
	document.getElementById("COContainerSlot52").style.display='none'; 
}

function changeCOSlot6() {
	document.getElementById("COContainerSlot61").style.display='none'; 
	document.getElementById("COContainerSlot62").style.display='block'; 
}

function goBackCOSlot6() {
	document.getElementById("COContainerSlot61").style.display='block'; 
	document.getElementById("COContainerSlot62").style.display='none'; 
}

function changeCOSlot7() {
	document.getElementById("COContainerSlot71").style.display='none'; 
	document.getElementById("COContainerSlot72").style.display='block'; 
}

function goBackCOSlot7() {
	document.getElementById("COContainerSlot71").style.display='block'; 
	document.getElementById("COContainerSlot72").style.display='none'; 
}

function changeCOSlot8() {
	document.getElementById("COContainerSlot81").style.display='none'; 
	document.getElementById("COContainerSlot82").style.display='block'; 
}

function goBackCOSlot8() {
	document.getElementById("COContainerSlot81").style.display='block'; 
	document.getElementById("COContainerSlot82").style.display='none'; 
}

function changeCOSlot9() {
	document.getElementById("COContainerSlot91").style.display='none'; 
	document.getElementById("COContainerSlot92").style.display='block'; 
}

function goBackCOSlot9() {
	document.getElementById("COContainerSlot91").style.display='block'; 
	document.getElementById("COContainerSlot92").style.display='none'; 
}

function changeCOSlot10() {
	document.getElementById("COContainerSlot101").style.display='none'; 
	document.getElementById("COContainerSlot102").style.display='block'; 
}

function goBackCOSlot10() {
	document.getElementById("COContainerSlot101").style.display='block'; 
	document.getElementById("COContainerSlot102").style.display='none'; 
}

function setCOSlot1() {
	var object = document.getElementById("inanimateObjectSlot1TextField").value;
	localStorage.setItem("Inanimate_Object_Slot1", object);
	document.getElementById('inanimateObjectName1').innerHTML = object;
	document.getElementById('inanimateObjectEntry1').innerHTML = object;
	goBackCOSlot1();
}

function setCOSlot2() {
	var object = document.getElementById("inanimateObjectSlot2TextField").value;
	localStorage.setItem("Inanimate_Object_Slot2", object);
	document.getElementById('inanimateObjectName2').innerHTML = object;
	document.getElementById('inanimateObjectEntry2').innerHTML = object;
	goBackCOSlot2();
}

function setCOSlot3() {
	var object = document.getElementById("inanimateObjectSlot3TextField").value;
	localStorage.setItem("Inanimate_Object_Slot3", object);
	document.getElementById('inanimateObjectName3').innerHTML = object;
	document.getElementById('inanimateObjectEntry3').innerHTML = object;
	goBackCOSlot3();
}

function setCOSlot4() {
	var object = document.getElementById("inanimateObjectSlot4TextField").value;
	localStorage.setItem("Inanimate_Object_Slot4", object);
	document.getElementById('inanimateObjectName4').innerHTML = object;
	document.getElementById('inanimateObjectEntry4').innerHTML = object;
	goBackCOSlot4();
}

function setCOSlot5() {
	var object = document.getElementById("inanimateObjectSlot5TextField").value;
	localStorage.setItem("Inanimate_Object_Slot5", object);
	document.getElementById('inanimateObjectName5').innerHTML = object;
	document.getElementById('inanimateObjectEntry5').innerHTML = object;
	goBackCOSlot5();
}

function setCOSlot6() {
	var object = document.getElementById("inanimateObjectSlot6TextField").value;
	localStorage.setItem("Inanimate_Object_Slot6", object);
	document.getElementById('inanimateObjectName6').innerHTML = object;
	document.getElementById('inanimateObjectEntry6').innerHTML = object;
	goBackCOSlot6();
}

function setCOSlot7() {
	var object = document.getElementById("inanimateObjectSlot7TextField").value;
	localStorage.setItem("Inanimate_Object_Slot7", object);
	document.getElementById('inanimateObjectName7').innerHTML = object;
	document.getElementById('inanimateObjectEntry7').innerHTML = object;
	goBackCOSlot7();
}

function setCOSlot8() {
	var object = document.getElementById("inanimateObjectSlot8TextField").value;
	localStorage.setItem("Inanimate_Object_Slot8", object);
	document.getElementById('inanimateObjectName8').innerHTML = object;
	document.getElementById('inanimateObjectEntry8').innerHTML = object;
	goBackCOSlot8();
}

function setCOSlot9() {
	var object = document.getElementById("inanimateObjectSlot9TextField").value;
	localStorage.setItem("Inanimate_Object_Slot9", object);
	document.getElementById('inanimateObjectName9').innerHTML = object;
	document.getElementById('inanimateObjectEntry9').innerHTML = object;
	goBackCOSlot9();
}

function setCOSlot10() {
	var object = document.getElementById("inanimateObjectSlot10TextField").value;
	localStorage.setItem("Inanimate_Object_Slot10", object);
	document.getElementById('inanimateObjectName10').innerHTML = object;
	document.getElementById('inanimateObjectEntry10').innerHTML = object;
	goBackCOSlot10();
}

function loadInanimateObjectsOnStartup() {
	var object1 = localStorage.getItem("Inanimate_Object_Slot1");
	var object2 = localStorage.getItem("Inanimate_Object_Slot2");
	var object3 = localStorage.getItem("Inanimate_Object_Slot3");
	var object4 = localStorage.getItem("Inanimate_Object_Slot4");
	var object5 = localStorage.getItem("Inanimate_Object_Slot5");
	var object6 = localStorage.getItem("Inanimate_Object_Slot6");
	var object7 = localStorage.getItem("Inanimate_Object_Slot7");
	var object8 = localStorage.getItem("Inanimate_Object_Slot8");
	var object9 = localStorage.getItem("Inanimate_Object_Slot9");
	var object10 = localStorage.getItem("Inanimate_Object_Slot10");
	
	if (object1 === null) {
		object1 = "Empty";
	}
	if (object2 === null) {
		object2 = "Empty";
	}
	if (object3 === null) {
		object3 = "Empty";
	}
	if (object4 === null) {
		object4 = "Empty";
	}
	if (object5 === null) {
		object5 = "Empty";
	}
	if (object6 === null) {
		object6 = "Empty";
	}
	if (object7 === null) {
		object7 = "Empty";
	}
	if (object8 === null) {
		object8 = "Empty";
	}
	if (object9 === null) {
		object9 = "Empty";
	}
	if (object10 === null) {
		object10 = "Empty";
	}
	
	document.getElementById('inanimateObjectName1').innerHTML = object1;
	document.getElementById('inanimateObjectEntry1').innerHTML = object1;
	
	document.getElementById('inanimateObjectName2').innerHTML = object2;
	document.getElementById('inanimateObjectEntry2').innerHTML = object2;
	
	document.getElementById('inanimateObjectName3').innerHTML = object3;
	document.getElementById('inanimateObjectEntry3').innerHTML = object3;
	
	document.getElementById('inanimateObjectName4').innerHTML = object4;
	document.getElementById('inanimateObjectEntry4').innerHTML = object4;
	
	document.getElementById('inanimateObjectName5').innerHTML = object5;
	document.getElementById('inanimateObjectEntry5').innerHTML = object5;
	
	document.getElementById('inanimateObjectName6').innerHTML = object6;
	document.getElementById('inanimateObjectEntry6').innerHTML = object6;
	
	document.getElementById('inanimateObjectName7').innerHTML = object7;
	document.getElementById('inanimateObjectEntry7').innerHTML = object7;
	
	document.getElementById('inanimateObjectName8').innerHTML = object8;
	document.getElementById('inanimateObjectEntry8').innerHTML = object8;
	
	document.getElementById('inanimateObjectName9').innerHTML = object9;
	document.getElementById('inanimateObjectEntry9').innerHTML = object9;
	
	document.getElementById('inanimateObjectName10').innerHTML = object10;
	document.getElementById('inanimateObjectEntry10').innerHTML = object10;
}

function setInanimateObjectToCustom(slotNumber) {
	if (slotNumber === "Slot_One") {
		var Object = document.getElementById('inanimateObjectEntry1').innerHTML;		
	}
	if (slotNumber === "Slot_Two") {
		var Object = document.getElementById('inanimateObjectEntry2').innerHTML;		
	}
	if (slotNumber === "Slot_Three") {
		var Object = document.getElementById('inanimateObjectEntry3').innerHTML;		
	}
	if (slotNumber === "Slot_Four") {
		var Object = document.getElementById('inanimateObjectEntry4').innerHTML;		
	}
	if (slotNumber === "Slot_Five") {
		var Object = document.getElementById('inanimateObjectEntry5').innerHTML;		
	}
	if (slotNumber === "Slot_Six") {
		var Object = document.getElementById('inanimateObjectEntry6').innerHTML;		
	}
	if (slotNumber === "Slot_Seven") {
		var Object = document.getElementById('inanimateObjectEntry7').innerHTML;		
	}
	if (slotNumber === "Slot_Eight") {
		var Object = document.getElementById('inanimateObjectEntry8').innerHTML;		
	}
	if (slotNumber === "Slot_Nine") {
		var Object = document.getElementById('inanimateObjectEntry9').innerHTML;		
	}
	if (slotNumber === "Slot_Ten") {
		var Object = document.getElementById('inanimateObjectEntry10').innerHTML;		
	}
	setInanimateObjectTo(Object);
}

function showOrHideInanimateObjectsMenu() {
	var yesorno = localStorage.getItem("Inanimate_Objects_Enabled");
	if (yesorno === "Yes") {
		document.getElementById("inanimateObjectsMenu").style.display='block';
		document.getElementById("advancedSettings5").style.display='block';	
		document.getElementById("inanimateObjectsCheckbox").checked = true;		
	}
	else {
		document.getElementById("inanimateObjectsMenu").style.display='none';
		document.getElementById("advancedSettings5").style.display='none';		
	}
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
	var rng = Math.floor(Math.random() * 2) + 1;
	if (rng == 1) {
		changeSexToFemale();
	}
	else {
		changeSexToMale();
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
	
	mySlider21.setValue(sexuality);
	
	// Hair Color
	// Special thanks to StackOverflow for this one
	var hairColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);}); 
	
	document.getElementById('hairColorCurrent').innerHTML = hairColor;
	document.getElementById('hairColorSwatch').style.backgroundColor = hairColor;
	
	saveSettingsSlot0();
}

function showOrHideRandomizerButton() {
	var yesorno = localStorage.getItem("Randomizer_Enabled");
	if (yesorno === "Yes") {
		document.getElementById("randomizeButton").style.display='block';
		document.getElementById("randomizerCheckbox").checked = true;		
	}
	else {
		document.getElementById("randomizeButton").style.display='none';	
	}
}

function toggleRandomizer() {
	var tickbox = document.getElementById("randomizerCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		localStorage.setItem("Randomizer_Enabled", tickbox);
		document.getElementById("randomizeButton").style.display='block';
	}
	else {
		var tickbox = "No"
		localStorage.setItem("Randomizer_Enabled", tickbox);
		document.getElementById("randomizeButton").style.display='none';
	}
}

function showOrHideDevMenu() {
	var yesorno = localStorage.getItem("DevMenu_Enabled");
	if (yesorno === "Yes") {
		document.getElementById("devMenuButton").style.display='block';
		document.getElementById("devMenuCheckbox").checked = true;		
	}
	else {
		document.getElementById("devMenuButton").style.display='none';	
	}
}

function toggleDevMenu() {
	var tickbox = document.getElementById("devMenuCheckbox");
		if (tickbox.checked) {
			var tickbox = "Yes"
			localStorage.setItem("DevMenu_Enabled", tickbox);
			document.getElementById("devMenuButton").style.display='block';
		}
		else {
			var tickbox = "No"
			localStorage.setItem("DevMenu_Enabled", tickbox);
			document.getElementById("devMenuButton").style.display='none';
		}
}

function showDevMenu() {
		document.getElementById("devMenuButton").style.display = "none";
		document.getElementById("goBackFromDevMenu").style.display = "block";		
		document.getElementById("devMenuOptions").style.display='block';  
	}
	
function goBackFromDevMenuFunction() {
		document.getElementById("devMenuButton").style.display = "block";
		document.getElementById("goBackFromDevMenu").style.display = "none";		
		document.getElementById("devMenuOptions").style.display='none';  
	}
	
function deleteLockPassword() {
	localStorage.removeItem("Current_Password");	
}

function changeCHSlot1() {
	document.getElementById("CHContainerSlot11").style.display='none'; 
	document.getElementById("CHContainerSlot12").style.display='block'; 
}

function goBackCHSlot1() {
	document.getElementById("CHContainerSlot11").style.display='block'; 
	document.getElementById("CHContainerSlot12").style.display='none'; 
}

function changeCHSlot2() {
	document.getElementById("CHContainerSlot21").style.display='none'; 
	document.getElementById("CHContainerSlot22").style.display='block'; 
}

function goBackCHSlot2() {
	document.getElementById("CHContainerSlot21").style.display='block'; 
	document.getElementById("CHContainerSlot22").style.display='none'; 
}

function changeCHSlot3() {
	document.getElementById("CHContainerSlot31").style.display='none'; 
	document.getElementById("CHContainerSlot32").style.display='block'; 
}

function goBackCHSlot3() {
	document.getElementById("CHContainerSlot31").style.display='block'; 
	document.getElementById("CHContainerSlot32").style.display='none'; 
}

function changeCHSlot4() {
	document.getElementById("CHContainerSlot41").style.display='none'; 
	document.getElementById("CHContainerSlot42").style.display='block'; 
}

function goBackCHSlot4() {
	document.getElementById("CHContainerSlot41").style.display='block'; 
	document.getElementById("CHContainerSlot42").style.display='none'; 
}

function changeCHSlot5() {
	document.getElementById("CHContainerSlot51").style.display='none'; 
	document.getElementById("CHContainerSlot52").style.display='block'; 
}

function goBackCHSlot5() {
	document.getElementById("CHContainerSlot51").style.display='block'; 
	document.getElementById("CHContainerSlot52").style.display='none'; 
}

function changeCHSlot6() {
	document.getElementById("CHContainerSlot61").style.display='none'; 
	document.getElementById("CHContainerSlot62").style.display='block'; 
}

function goBackCHSlot6() {
	document.getElementById("CHContainerSlot61").style.display='block'; 
	document.getElementById("CHContainerSlot62").style.display='none'; 
}

function changeCHSlot7() {
	document.getElementById("CHContainerSlot71").style.display='none'; 
	document.getElementById("CHContainerSlot72").style.display='block'; 
}

function goBackCHSlot7() {
	document.getElementById("CHContainerSlot71").style.display='block'; 
	document.getElementById("CHContainerSlot72").style.display='none'; 
}

function changeCHSlot8() {
	document.getElementById("CHContainerSlot81").style.display='none'; 
	document.getElementById("CHContainerSlot82").style.display='block'; 
}

function goBackCHSlot8() {
	document.getElementById("CHContainerSlot81").style.display='block'; 
	document.getElementById("CHContainerSlot82").style.display='none'; 
}

function changeCHSlot9() {
	document.getElementById("CHContainerSlot91").style.display='none'; 
	document.getElementById("CHContainerSlot92").style.display='block'; 
}

function goBackCHSlot9() {
	document.getElementById("CHContainerSlot91").style.display='block'; 
	document.getElementById("CHContainerSlot92").style.display='none'; 
}

function changeCHSlot10() {
	document.getElementById("CHContainerSlot101").style.display='none'; 
	document.getElementById("CHContainerSlot102").style.display='block'; 
}

function goBackCHSlot10() {
	document.getElementById("CHContainerSlot101").style.display='block'; 
	document.getElementById("CHContainerSlot102").style.display='none'; 
}

function sethairColorToCustom(slotNumber) {
	if (slotNumber === "Slot_One") {
		var hairColor = document.getElementById('hairColorEntry1').innerHTML;
		var swatchColor = localStorage.getItem("Hair_Color_Value_Slot1");	
	}
	if (slotNumber === "Slot_Two") {
		var hairColor = document.getElementById('hairColorEntry2').innerHTML;
		var swatchColor = localStorage.getItem("Hair_Color_Value_Slot2");	
	}
	if (slotNumber === "Slot_Three") {
		var hairColor = document.getElementById('hairColorEntry3').innerHTML;
		var swatchColor = localStorage.getItem("Hair_Color_Value_Slot3");	
	}
	if (slotNumber === "Slot_Four") {
		var hairColor = document.getElementById('hairColorEntry4').innerHTML;
		var swatchColor = localStorage.getItem("Hair_Color_Value_Slot4");	
	}
	if (slotNumber === "Slot_Five") {
		var hairColor = document.getElementById('hairColorEntry5').innerHTML;
		var swatchColor = localStorage.getItem("Hair_Color_Value_Slot5");	
	}
	if (slotNumber === "Slot_Six") {
		var hairColor = document.getElementById('hairColorEntry6').innerHTML;
		var swatchColor = localStorage.getItem("Hair_Color_Value_Slot6");	
	}
	if (slotNumber === "Slot_Seven") {
		var hairColor = document.getElementById('hairColorEntry7').innerHTML;
		var swatchColor = localStorage.getItem("Hair_Color_Value_Slot7");	
	}
	if (slotNumber === "Slot_Eight") {
		var hairColor = document.getElementById('hairColorEntry8').innerHTML;
		var swatchColor = localStorage.getItem("Hair_Color_Value_Slot8");
	}
	if (slotNumber === "Slot_Nine") {
		var hairColor = document.getElementById('hairColorEntry9').innerHTML;
		var swatchColor = localStorage.getItem("Hair_Color_Value_Slot9");	
	}
	if (slotNumber === "Slot_Ten") {
		var hairColor = document.getElementById('hairColorEntry10').innerHTML;
		var swatchColor = localStorage.getItem("Hair_Color_Value_Slot10");	
	}
	setHairColorTo(hairColor, swatchColor);
}

function setHairColorTo(hairColor, swatchColor) {
	document.getElementById('hairColorCurrent').innerHTML = hairColor;
	document.getElementById('hairColorSwatch').style.backgroundColor = swatchColor;
	localStorage.setItem("Slot0_Hair_Color", hairColor);
	localStorage.setItem("Slot0_Swatch_Color", swatchColor);
	closeHairCategoryMenu();
	goBackFromhairColorList();
	showProcessingAnimation();
}

function setCHSlot1() {
	var hairValue = document.getElementById("hairColorValueSlot1TextField").value;
	var hairName = document.getElementById("hairColorNameSlot1TextField").value;
	if (hairName == "") {
		hairName = hairValue;
	}
	localStorage.setItem("Hair_Color_Value_Slot1", hairValue);
	localStorage.setItem("Hair_Color_Name_Slot1", hairName);
	document.getElementById('hairColorName1').innerHTML = hairName;
	document.getElementById('hairColorEntry1').innerHTML = hairName;
	document.getElementById('customHairColorSwatch1').style.backgroundColor = hairValue;	
	goBackCHSlot1();
}

function setCHSlot2() {
	var hairValue = document.getElementById("hairColorValueSlot2TextField").value;
	var hairName = document.getElementById("hairColorNameSlot2TextField").value;
	if (hairName == "") {
		hairName = hairValue;
	}
	localStorage.setItem("Hair_Color_Value_Slot2", hairValue);
	localStorage.setItem("Hair_Color_Name_Slot2", hairName);
	document.getElementById('hairColorName2').innerHTML = hairName;
	document.getElementById('hairColorEntry2').innerHTML = hairName;
	document.getElementById('customHairColorSwatch2').style.backgroundColor = hairValue;	
	goBackCHSlot2();
}

function setCHSlot3() {
	var hairValue = document.getElementById("hairColorValueSlot3TextField").value;
	var hairName = document.getElementById("hairColorNameSlot3TextField").value;
	if (hairName == "") {
		hairName = hairValue;
	}
	localStorage.setItem("Hair_Color_Value_Slot3", hairValue);
	localStorage.setItem("Hair_Color_Name_Slot3", hairName);
	document.getElementById('hairColorName3').innerHTML = hairName;
	document.getElementById('hairColorEntry3').innerHTML = hairName;
	document.getElementById('customHairColorSwatch3').style.backgroundColor = hairValue;	
	goBackCHSlot3();
}

function setCHSlot4() {
	var hairValue = document.getElementById("hairColorValueSlot4TextField").value;
	var hairName = document.getElementById("hairColorNameSlot4TextField").value;
	if (hairName == "") {
		hairName = hairValue;
	}
	localStorage.setItem("Hair_Color_Value_Slot4", hairValue);
	localStorage.setItem("Hair_Color_Name_Slot4", hairName);
	document.getElementById('hairColorName4').innerHTML = hairName;
	document.getElementById('hairColorEntry4').innerHTML = hairName;
	document.getElementById('customHairColorSwatch4').style.backgroundColor = hairValue;	
	goBackCHSlot4();
}

function setCHSlot5() {
	var hairValue = document.getElementById("hairColorValueSlot5TextField").value;
	var hairName = document.getElementById("hairColorNameSlot5TextField").value;
	if (hairName == "") {
		hairName = hairValue;
	}
	localStorage.setItem("Hair_Color_Value_Slot5", hairValue);
	localStorage.setItem("Hair_Color_Name_Slot5", hairName);
	document.getElementById('hairColorName5').innerHTML = hairName;
	document.getElementById('hairColorEntry5').innerHTML = hairName;
	document.getElementById('customHairColorSwatch5').style.backgroundColor = hairValue;	
	goBackCHSlot5();
}

function setCHSlot6() {
	var hairValue = document.getElementById("hairColorValueSlot6TextField").value;
	var hairName = document.getElementById("hairColorNameSlot6TextField").value;
	if (hairName == "") {
		hairName = hairValue;
	}
	localStorage.setItem("Hair_Color_Value_Slot6", hairValue);
	localStorage.setItem("Hair_Color_Name_Slot6", hairName);
	document.getElementById('hairColorName6').innerHTML = hairName;
	document.getElementById('hairColorEntry6').innerHTML = hairName;
	document.getElementById('customHairColorSwatch6').style.backgroundColor = hairValue;	
	goBackCHSlot6();
}

function setCHSlot7() {
	var hairValue = document.getElementById("hairColorValueSlot7TextField").value;
	var hairName = document.getElementById("hairColorNameSlot7TextField").value;
	if (hairName == "") {
		hairName = hairValue;
	}
	localStorage.setItem("Hair_Color_Value_Slot7", hairValue);
	localStorage.setItem("Hair_Color_Name_Slot7", hairName);
	document.getElementById('hairColorName7').innerHTML = hairName;
	document.getElementById('hairColorEntry7').innerHTML = hairName;
	document.getElementById('customHairColorSwatch7').style.backgroundColor = hairValue;	
	goBackCHSlot7();
}

function setCHSlot8() {
	var hairValue = document.getElementById("hairColorValueSlot8TextField").value;
	var hairName = document.getElementById("hairColorNameSlot8TextField").value;
	if (hairName == "") {
		hairName = hairValue;
	}
	localStorage.setItem("Hair_Color_Value_Slot8", hairValue);
	localStorage.setItem("Hair_Color_Name_Slot8", hairName);
	document.getElementById('hairColorName8').innerHTML = hairName;
	document.getElementById('hairColorEntry8').innerHTML = hairName;
	document.getElementById('customHairColorSwatch8').style.backgroundColor = hairValue;	
	goBackCHSlot8();
}

function setCHSlot9() {
	var hairValue = document.getElementById("hairColorValueSlot9TextField").value;
	var hairName = document.getElementById("hairColorNameSlot9TextField").value;
	if (hairName == "") {
		hairName = hairValue;
	}
	localStorage.setItem("Hair_Color_Value_Slot9", hairValue);
	localStorage.setItem("Hair_Color_Name_Slot9", hairName);
	document.getElementById('hairColorName9').innerHTML = hairName;
	document.getElementById('hairColorEntry9').innerHTML = hairName;
	document.getElementById('customHairColorSwatch9').style.backgroundColor = hairValue;	
	goBackCHSlot9();
}

function setCHSlot10() {
	var hairValue = document.getElementById("hairColorValueSlot10TextField").value;
	var hairName = document.getElementById("hairColorNameSlot10TextField").value;
	if (hairName == "") {
		hairName = hairValue;
	}
	localStorage.setItem("Hair_Color_Value_Slot10", hairValue);
	localStorage.setItem("Hair_Color_Name_Slot10", hairName);
	document.getElementById('hairColorName10').innerHTML = hairName;
	document.getElementById('hairColorEntry10').innerHTML = hairName;
	document.getElementById('customHairColorSwatch10').style.backgroundColor = hairValue;	
	goBackCHSlot10();
}

function loadHairColorsOnStartup() {
	var hairValue1 = localStorage.getItem("Hair_Color_Value_Slot1");
	var hairName1 = localStorage.getItem("Hair_Color_Name_Slot1");
	var hairValue2 = localStorage.getItem("Hair_Color_Value_Slot2");
	var hairName2 = localStorage.getItem("Hair_Color_Name_Slot2");
	var hairValue3 = localStorage.getItem("Hair_Color_Value_Slot3");
	var hairName3 = localStorage.getItem("Hair_Color_Name_Slot3");
	var hairValue4 = localStorage.getItem("Hair_Color_Value_Slot4");
	var hairName4 = localStorage.getItem("Hair_Color_Name_Slot4");
	var hairValue5 = localStorage.getItem("Hair_Color_Value_Slot5");
	var hairName5 = localStorage.getItem("Hair_Color_Name_Slot5");
	var hairValue6 = localStorage.getItem("Hair_Color_Value_Slot6");
	var hairName6 = localStorage.getItem("Hair_Color_Name_Slot6");
	var hairValue7 = localStorage.getItem("Hair_Color_Value_Slot7");
	var hairName7 = localStorage.getItem("Hair_Color_Name_Slot7");
	var hairValue8 = localStorage.getItem("Hair_Color_Value_Slot8");
	var hairName8 = localStorage.getItem("Hair_Color_Name_Slot8");
	var hairValue9 = localStorage.getItem("Hair_Color_Value_Slot9");
	var hairName9 = localStorage.getItem("Hair_Color_Name_Slot9");
	var hairValue10 = localStorage.getItem("Hair_Color_Value_Slot10");
	var hairName10 = localStorage.getItem("Hair_Color_Name_Slot10");
	
	if (hairValue1 === null) {
		hairName1 = "Empty";
	}
	if (hairValue2 === null) {
		hairName2 = "Empty";
	}
	if (hairValue3 === null) {
		hairName3 = "Empty";
	}
	if (hairValue4 === null) {
		hairName4 = "Empty";
	}
	if (hairValue5 === null) {
		hairName5 = "Empty";
	}
	if (hairValue6 === null) {
		hairName6 = "Empty";
	}
	if (hairValue7 === null) {
		hairName7 = "Empty";
	}
	if (hairValue8 === null) {
		hairName8 = "Empty";
	}
	if (hairValue9 === null) {
		hairName9 = "Empty";
	}
	if (hairValue10 === null) {
		hairName10 = "Empty";
	}
	
	document.getElementById('hairColorName1').innerHTML = hairName1;
	document.getElementById('hairColorEntry1').innerHTML = hairName1;
	document.getElementById('customHairColorSwatch1').style.backgroundColor = hairValue1;
	
	document.getElementById('hairColorName2').innerHTML = hairName2;
	document.getElementById('hairColorEntry2').innerHTML = hairName2;
	document.getElementById('customHairColorSwatch2').style.backgroundColor = hairValue2;
	
	document.getElementById('hairColorName3').innerHTML = hairName3;
	document.getElementById('hairColorEntry3').innerHTML = hairName3;
	document.getElementById('customHairColorSwatch3').style.backgroundColor = hairValue3;
	
	document.getElementById('hairColorName4').innerHTML = hairName4;
	document.getElementById('hairColorEntry4').innerHTML = hairName4;
	document.getElementById('customHairColorSwatch4').style.backgroundColor = hairValue4;
	
	document.getElementById('hairColorName5').innerHTML = hairName5;
	document.getElementById('hairColorEntry5').innerHTML = hairName5;
	document.getElementById('customHairColorSwatch5').style.backgroundColor = hairValue5;
	
	document.getElementById('hairColorName6').innerHTML = hairName6;
	document.getElementById('hairColorEntry6').innerHTML = hairName6;
	document.getElementById('customHairColorSwatch6').style.backgroundColor = hairValue6;
	
	document.getElementById('hairColorName7').innerHTML = hairName7;
	document.getElementById('hairColorEntry7').innerHTML = hairName7;
	document.getElementById('customHairColorSwatch7').style.backgroundColor = hairValue7;
	
	document.getElementById('hairColorName8').innerHTML = hairName8;
	document.getElementById('hairColorEntry8').innerHTML = hairName8;
	document.getElementById('customHairColorSwatch8').style.backgroundColor = hairValue8;
	
	document.getElementById('hairColorName9').innerHTML = hairName9;
	document.getElementById('hairColorEntry9').innerHTML = hairName9;
	document.getElementById('customHairColorSwatch9').style.backgroundColor = hairValue9;
	
	document.getElementById('hairColorName10').innerHTML = hairName10;
	document.getElementById('hairColorEntry10').innerHTML = hairName10;
	document.getElementById('customHairColorSwatch10').style.backgroundColor = hairValue10;
}

function loadHairColorStatus() {
	var hairColor = localStorage.getItem("Slot0_Hair_Color");
	var swatchColor = localStorage.getItem("Slot0_Swatch_Color");
	if (hairColor == null) {
		return;
	}
	else {
		document.getElementById('hairColorCurrent').innerHTML = hairColor;
		document.getElementById('hairColorSwatch').style.backgroundColor = swatchColor;
	}	
}