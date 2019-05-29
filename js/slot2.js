 function saveSettingsSlot2() {
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
 
	localStorage.setItem("Slot2_Species", settingSpecies);	
    localStorage.setItem("Slot2_Sex", settingSex);	
	localStorage.setItem("Slot2_AC_Box_Ticked", tickbox);
	localStorage.setItem("Slot2_Body_Type1", bodyType1);
	localStorage.setItem("Slot2_Body_Type2", bodyType2);
	localStorage.setItem("Slot2_Body_Type3", bodyType3);
	localStorage.setItem("Slot2_Hips", hips);
	localStorage.setItem("Slot2_Genital_Size", genitalSize);
	localStorage.setItem("Slot2_Fluffiness", fluffiness);
	localStorage.setItem("Slot2_Libido", libido);
	localStorage.setItem("Slot2_Position_Preference", domsub);
	localStorage.setItem("Slot2_Sensitivity", sensitivity);
	localStorage.setItem("Slot2_Demeanor", assertiveShy); 
	localStorage.setItem("Slot2_Breast_Size_Male", breastSizeMale); 
	localStorage.setItem("Slot2_Breast_Size_Female", breastSizeFemale); 
	localStorage.setItem("Slot2_Butt_Size", buttSize);
	localStorage.setItem("Slot2_Belly_Size", bellySize);
	localStorage.setItem("Slot2_Belly_Shape", bellyShape);
	localStorage.setItem("Slot2_Intelligence", intelligence);
	localStorage.setItem("Slot2_Cock_Type", cockType);
	
	document.getElementById("settingsLoadedPopup").style.display = "block";	
	document.getElementById('settingsLoadedPopup').innerHTML = ">Settings Saved:" + " " + settingSex + " " + settingSpecies;
	hideSaveSlotButtons();	
	setTimeout(hideLoadedPopup, 4000);
 }
   
 function loadSettingsSlot2() {
	var lock = document.getElementById("lockClosed");
	if (lock.style.display === "block") {
		document.getElementById("unblockSettingsOkayContainer").style.display='block'; 
		document.getElementById("unblockSettingsOkay").style.display='block'; 
		document.getElementById("unblockSettingsMessage").style.display='block'; 
		document.getElementById("errorMessageContainer").style.display='block'; 
	}
	else {
		var Species = localStorage.getItem("Slot2_Species");
		var element = document.getElementById("speciesChoice");
		element.value = Species; 
 
		var Sex = localStorage.getItem("Slot2_Sex");
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
 
		var AC_Box_Ticked = localStorage.getItem("Slot2_AC_Box_Ticked");
		if (AC_Box_Ticked == "Yes") {
			var tickbox = document.getElementById("adaptClothingCheckbox");
			tickbox.checked = true;
		}
 
		var bodyType1 = localStorage.getItem("Slot2_Body_Type1");
		mySlider6.setValue(bodyType1);
 
		var bodyType2 = localStorage.getItem("Slot2_Body_Type2");
		mySlider5.setValue(bodyType2);
 
		var bodyType3 = localStorage.getItem("Slot2_Body_Type3");
		mySlider4.setValue(bodyType3);
		
		var xx = document.getElementById("AdvancedSettingsContainer");
			if (xx.style.display === "none") {
				var open = "no"
			}
			else {
				var open = "yes"		
			}
 
		document.getElementById("AdvancedSettingsContainer").style.display='block'; 
  
		var hips = localStorage.getItem("Slot2_Hips");
		mySlider3.setValue(hips);
 
		var genitalSize = localStorage.getItem("Slot2_Genital_Size");
		mySlider2.setValue(genitalSize);
 
		var fluffiness = localStorage.getItem("Slot2_Fluffiness");
		mySlider.setValue(fluffiness);
 
		var libido = localStorage.getItem("Slot2_Libido");
		mySlider7.setValue(libido);
 
		var domsub = localStorage.getItem("Slot2_Position_Preference");
		mySlider10.setValue(domsub);
 
		var sensitivity = localStorage.getItem("Slot2_Sensitivity");
		mySlider11.setValue(sensitivity);
 
		var assertiveShy = localStorage.getItem("Slot2_Demeanor");
		mySlider12.setValue(assertiveShy);
 
		var buttSize = localStorage.getItem("Slot2_Butt_Size");	
		mySlider13.setValue(buttSize);
 
		var bellySize = localStorage.getItem("Slot2_Belly_Size");
		mySlider14.setValue(bellySize);
 
		var bellyShape = localStorage.getItem("Slot2_Belly_Shape");
		mySlider15.setValue(bellyShape);
 
		var intelligence = localStorage.getItem("Slot2_Intelligence");
		mySlider16.setValue(intelligence);
		
		var cockType = localStorage.getItem("Slot2_Cock_Type");
		var element2 = document.getElementById("cockType");
		element2.value = cockType; 
 
		if (Sex == "Male") {
			document.getElementById("showAdvancedSettings4a").style.display = "block";
			document.getElementById("showAdvancedSettings4b").style.display = "none";
			var breastSizeMale = localStorage.getItem("Slot2_Breast_Size_Male");
			mySlider9.setValue(breastSizeMale);
		}
 		else {
			document.getElementById("showAdvancedSettings4b").style.display = "block";
			document.getElementById("showAdvancedSettings4a").style.display = "none";
			var breastSizeFemale = localStorage.getItem("Slot2_Breast_Size_Female");
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