function advSettFunctionV2() {
		var x = document.getElementById("AdvancedSettingsContainer");
		if (x.style.display === "none") {
			x.style.display = "block";
		} else {
			x.style.display = "none";
		}
	}

function changeCoverageWait() {
	setTimeout(changeCoverage, 20000);
}

function changeCoverage() {
	var coverage = Math.floor(Math.random() * 4) + 1;
	
		if (coverage == 1) {
			document.getElementById("coverage1").style.display = "block";	
			document.getElementById("coverage2").style.display = "none";	
			document.getElementById("coverage3").style.display = "none";	
			document.getElementById("coverage4").style.display = "none";
			setTimeout(changeCoverage, 20000);
		}
		else if (coverage == 2) {
			document.getElementById("coverage1").style.display = "none";	
			document.getElementById("coverage2").style.display = "block";	
			document.getElementById("coverage3").style.display = "none";	
			document.getElementById("coverage4").style.display = "none";
			setTimeout(changeCoverage, 20000);
		}	
		else if (coverage == 3) {
			document.getElementById("coverage1").style.display = "none";	
			document.getElementById("coverage2").style.display = "none";	
			document.getElementById("coverage3").style.display = "block";	
			document.getElementById("coverage4").style.display = "none";
			setTimeout(changeCoverage, 20000);
		}
		else if (coverage == 4) {
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
		var ampm = hours >= 12 ? 'pm' : 'am';
		hours = hours % 12;
		hours = hours ? hours : 12; // the hour '0' should be '12'
		minutes = minutes < 10 ? '0'+minutes : minutes;
		var strTime = hours + ':' + minutes + ' ' + ampm;
		document.getElementById('currentTime').innerHTML = strTime;
		setTimeout(currentTime, 1000);
	}

function batteryDrain() {
	setTimeout(batteryDrain2, 40000);
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
	document.getElementById("chargeBattery").style.display = "none";
	document.getElementById("battery_low").style.display = "none";
	document.getElementById("battery_low_charging").style.display = "block";
	setTimeout(batteryCharge2, 20000);
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
	setTimeout(errorLowBattery, 10000);
}
 function errorLowBattery() {
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

function showSecondSliderHandle() {
document.getElementById("secondSliderHandleContainer").style.display = "block";	
document.getElementById("secondSliderHandle").style.display = "block";	
}
 
function openLock() {
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
}

function processingShowFunction() {
	document.getElementById("processingText").style.display='block';
	document.getElementById("processingAnim").style.display='block';  
	setTimeout(processingHideFunction, 3000)    
}

function processingHideFunction() {
  document.getElementById("processingText").style.display='none';
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

function toggleCreditsFunction(){
var c = document.getElementById("credits");
  if (c.style.display === "none") {
    c.style.display = "block";
  } else {
    c.style.display = "none";
  }
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
		mySlider6.setValue(98);	
		mySlider6.disable();	
		error621ChangeSlider();
		showSecondSliderHandle();
	}	
	
function showOptions() {
		document.getElementById("preferences").style.display = "none";
		document.getElementById("triggerErrors").style.display = "block";
		document.getElementById("goBack").style.display = "block";
	}
	
function goBackFunction() {
		document.getElementById("preferences").style.display = "block";
		document.getElementById("triggerErrors").style.display = "none";
		document.getElementById("goBack").style.display = "none";
	}
	
function triggerErrorsFunction() {
		document.getElementById("triggerRLEButton").style.display = "block";
		document.getElementById("triggerError69Button").style.display = "block";
		document.getElementById("triggerError621Button").style.display = "block";
	}
 
 function changeSexToMale() {
	rbfemale = document.getElementById("radiobuttonFemale");
	if (rbfemale.checked) {
		var error2 = Math.floor(Math.random() * 100) + 1;
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
	}
 }
	else { 
	rbmale = document.getElementById("radiobuttonMale");
	rbmale.checked = true;
	}
 } 
 
 function changeSexToFemale() {
	rbmale = document.getElementById("radiobuttonMale");
	if (rbmale.checked) {  
		var error2 = Math.floor(Math.random() * 100) + 1;
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
	}
 }  
	else {  
		rbfemale = document.getElementById("radiobuttonFemale");
		rbfemale.checked = true;
	}
 }
 
function hideMSSError () {
	document.getElementById("errorMessageContainer").style.display = "none";
	document.getElementById("MSSErrorMessage").style.display = "none";
	document.getElementById("MSSOkayContainer").style.display = "none";	
	document.getElementById("MSSOkay").style.display = "none";	
	}
 
 function realScaliesDontHaveFluff() {
		if(document.getElementById('speciesChoice').value == "Dragon") { 
			var x1 = document.getElementById("AdvancedSettingsContainer");
			if (x1.style.display === "none") {
			x1.style.display = "block";
			mySlider.setValue(0);
			x1.style.display = "none";
			} else {
			mySlider.setValue(0);
			}
		}
		else if(document.getElementById('speciesChoice').value == "Shark") { 
			var x1 = document.getElementById("AdvancedSettingsContainer");
			if (x1.style.display === "none") {
			x1.style.display = "block";
			mySlider.setValue(0);
			x1.style.display = "none";
			} else {
			mySlider.setValue(0);
			}
		}
		else if(document.getElementById('speciesChoice').value == "Kobold") { 
			var x1 = document.getElementById("AdvancedSettingsContainer");
			if (x1.style.display === "none") {
			x1.style.display = "block";
			mySlider.setValue(0);
			x1.style.display = "none";
			} else {
			mySlider.setValue(0);
			}
		}
		else if(document.getElementById('speciesChoice').value == "Discount Dragon") { 
			var x1 = document.getElementById("AdvancedSettingsContainer");
			if (x1.style.display === "none") {
			x1.style.display = "block";
			mySlider.setValue(0);
			x1.style.display = "none";
			} else {
			mySlider.setValue(0);
			}
		}
		else { 
			var x1 = document.getElementById("AdvancedSettingsContainer");
			if (x1.style.display === "none") {
			x1.style.display = "block";
			mySlider.setValue(50);
			x1.style.display = "none";
			} else {
			mySlider.setValue(50);
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
 
 function saveSettingsSlot1() {
	var settingSpecies = document.getElementById('speciesChoice').value 
 
	rbchoice = document.getElementById("radiobuttonMale");
	if (rbchoice.checked) {
		var settingSex = "Male"
	}
	else {
		var settingSex = "Female"
	}
 
	var tickbox = document.getElementById("adaptClothingCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
	}
	else {
		var tickbox = "No"
	}
 
	var bodyType1 = mySlider6.getValue();
	var bodyType2 = mySlider5.getValue();
	var bodyType3 = mySlider4.getValue();
	var hips = mySlider3.getValue();
	var genitalSize = mySlider2.getValue();
	var fluffiness = mySlider.getValue();
	var libido = mySlider7.getValue();
	var domsub = mySlider10.getValue();
	var sensitivity = mySlider11.getValue();
	var assertiveShy = mySlider12.getValue();
	var breastSizeMale = mySlider9.getValue();
	var breastSizeFemale = mySlider8.getValue();
	var buttSize = mySlider13.getValue();
	var bellySize = mySlider14.getValue();
	var bellyShape = mySlider15.getValue();
	var intelligence = mySlider16.getValue();
	
	var cockType = document.getElementById('cockType').value 
 
	localStorage.setItem("Slot1_Species", settingSpecies);	
    localStorage.setItem("Slot1_Sex", settingSex);	
	localStorage.setItem("Slot1_AC_Box_Ticked", tickbox);
	localStorage.setItem("Slot1_Body_Type1", bodyType1);
	localStorage.setItem("Slot1_Body_Type2", bodyType2);
	localStorage.setItem("Slot1_Body_Type3", bodyType3);
	localStorage.setItem("Slot1_Hips", hips);
	localStorage.setItem("Slot1_Genital_Size", genitalSize);
	localStorage.setItem("Slot1_Fluffiness", fluffiness);
	localStorage.setItem("Slot1_Libido", libido);
	localStorage.setItem("Slot1_Position_Preference", domsub);
	localStorage.setItem("Slot1_Sensitivity", sensitivity);
	localStorage.setItem("Slot1_Demeanor", assertiveShy); 
	localStorage.setItem("Slot1_Breast_Size_Male", breastSizeMale); 
	localStorage.setItem("Slot1_Breast_Size_Female", breastSizeFemale); 
	localStorage.setItem("Slot1_Butt_Size", buttSize);
	localStorage.setItem("Slot1_Belly_Size", bellySize);
	localStorage.setItem("Slot1_Belly_Shape", bellyShape);
	localStorage.setItem("Slot1_Intelligence", intelligence);
	localStorage.setItem("Slot1_Cock_Type", cockType);
	
	document.getElementById("settingsLoadedPopup").style.display = "block";	
	document.getElementById('settingsLoadedPopup').innerHTML = ">Settings Saved:" + " " + settingSex + " " + settingSpecies;
	hideSaveSlotButtons();	
	setTimeout(hideLoadedPopup, 4000);
 }
   
 function loadSettingsSlot1() {
	var lock = document.getElementById("lockClosed");
	if (lock.style.display === "block") {
		document.getElementById("unblockSettingsOkayContainer").style.display='block'; 
		document.getElementById("unblockSettingsOkay").style.display='block'; 
		document.getElementById("unblockSettingsMessage").style.display='block'; 
		document.getElementById("errorMessageContainer").style.display='block'; 
	}
	else {
		var Species = localStorage.getItem("Slot1_Species");
		var element = document.getElementById("speciesChoice");
		element.value = Species; 
 
		var Sex = localStorage.getItem("Slot1_Sex");
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
 
		var AC_Box_Ticked = localStorage.getItem("Slot1_AC_Box_Ticked");
		if (AC_Box_Ticked == "Yes") {
			var tickbox = document.getElementById("adaptClothingCheckbox");
			tickbox.checked = true;
		}
 
		var bodyType1 = localStorage.getItem("Slot1_Body_Type1");
		mySlider6.setValue(bodyType1);
 
		var bodyType2 = localStorage.getItem("Slot1_Body_Type2");
		mySlider5.setValue(bodyType2);
 
		var bodyType3 = localStorage.getItem("Slot1_Body_Type3");
		mySlider4.setValue(bodyType3);
		
		var xx = document.getElementById("AdvancedSettingsContainer");
			if (xx.style.display === "none") {
				var open = "no"
			}
			else {
				var open = "yes"		
			}
 
		document.getElementById("AdvancedSettingsContainer").style.display='block'; 
  
		var hips = localStorage.getItem("Slot1_Hips");
		mySlider3.setValue(hips);
 
		var genitalSize = localStorage.getItem("Slot1_Genital_Size");
		mySlider2.setValue(genitalSize);
 
		var fluffiness = localStorage.getItem("Slot1_Fluffiness");
		mySlider.setValue(fluffiness);
 
		var libido = localStorage.getItem("Slot1_Libido");
		mySlider7.setValue(libido);
 
		var domsub = localStorage.getItem("Slot1_Position_Preference");
		mySlider10.setValue(domsub);
 
		var sensitivity = localStorage.getItem("Slot1_Sensitivity");
		mySlider11.setValue(sensitivity);
 
		var assertiveShy = localStorage.getItem("Slot1_Demeanor");
		mySlider12.setValue(assertiveShy);
 
		var buttSize = localStorage.getItem("Slot1_Butt_Size");	
		mySlider13.setValue(buttSize);
 
		var bellySize = localStorage.getItem("Slot1_Belly_Size");
		mySlider14.setValue(bellySize);
 
		var bellyShape = localStorage.getItem("Slot1_Belly_Shape");
		mySlider15.setValue(bellyShape);
 
		var intelligence = localStorage.getItem("Slot1_Intelligence");
		mySlider16.setValue(intelligence);
		
		var cockType = localStorage.getItem("Slot1_Cock_Type");
		var element2 = document.getElementById("cockType");
		element2.value = cockType; 
 
		if (Sex == "Male") {
			document.getElementById("showAdvancedSettings4a").style.display = "block";
			document.getElementById("showAdvancedSettings4b").style.display = "none";
			var breastSizeMale = localStorage.getItem("Slot1_Breast_Size_Male");
			mySlider9.setValue(breastSizeMale);
		}
 		else {
			document.getElementById("showAdvancedSettings4b").style.display = "block";
			document.getElementById("showAdvancedSettings4a").style.display = "none";
			var breastSizeFemale = localStorage.getItem("Slot1_Breast_Size_Female");
			mySlider8.setValue(breastSizeFemale);
		}
		
		if (open =="no") {
			document.getElementById("AdvancedSettingsContainer").style.display='none'; 
			document.getElementById("settingsLoadedPopup").style.display = "block";	
			document.getElementById('settingsLoadedPopup').innerHTML = ">Settings Loaded:" + " " + Sex + " " + Species;
			hideLoadSlotButtons();
			setTimeout(hideLoadedPopup, 4000);
		}
		else { 
			document.getElementById("settingsLoadedPopup").style.display = "block";	
			document.getElementById('settingsLoadedPopup').innerHTML = ">Settings Loaded:" + " " + Sex + " " + Species;
			hideLoadSlotButtons();
			setTimeout(hideLoadedPopup, 4000);
		}
	}
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

function logOut() {
	document.getElementById("bodyType1Slider").style.display = "none";
	document.getElementById("bodyType2Slider").style.display = "none";
	document.getElementById("bodyType3Slider").style.display = "none";
	document.getElementById("advancedSettings").style.display = "none";
	document.getElementById("adaptClothing").style.display = "none";
	document.getElementById("sexMenu").style.display = "none";
	document.getElementById("speciesMenu").style.display = "none";
	document.getElementById("container2").style.display = "none";
	document.getElementById("adminPermsText").style.display = "none";
	document.getElementById("AdvancedSettingsContainer").style.display = "none";
	
	document.getElementById("credits").style.display = "none";
	document.getElementById("creditsButton").style.display = "none";
	document.getElementById("preferences").style.display = "none";
	document.getElementById("triggerErrors").style.display = "none";
	document.getElementById("triggerError621Button").style.display = "none";
	document.getElementById("triggerError69Button").style.display = "none";
	document.getElementById("triggerRLEButton").style.display = "none";
	document.getElementById("loadSettingsButton").style.display = "none";
	document.getElementById("saveSettingsButton").style.display = "none";
	document.getElementById("adminbutton").style.display = "none";
	document.getElementById("applySettingsButton").style.display = "none";
	document.getElementById("logOutMessage").style.display = "block";
	document.getElementById("linktoMobile").style.display = "none";
}