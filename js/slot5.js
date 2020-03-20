 function saveSettingsSlot5() {
	var settingSpecies = document.getElementById("speciesCurrent").innerHTML;
	var inanimateObject = document.getElementById("inanimateObjectsCurrent").innerHTML;
 
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
	
	var settingSex = functionBodyType(settingSex, bodyType1);
	
	var custom1 = mySlider17.getValue();
	var custom2 = mySlider18.getValue();
	var custom3 = mySlider19.getValue();
 
	localStorage.setItem("Slot5_Custom_Slider1_Value", custom1);	
	localStorage.setItem("Slot5_Custom_Slider2_Value", custom2);	
	localStorage.setItem("Slot5_Custom_Slider3_Value", custom3);

	var leftText = document.getElementById("textinmenuLeftCS1").innerText;
	var centerText = document.getElementById("textinmenuCenterCS1").innerText;
	var rightText = document.getElementById("textinmenuRightCS1").innerText;
	
	localStorage.setItem("Slot5_Custom_Slider1_LeftText", leftText);	
	localStorage.setItem("Slot5_Custom_Slider1_CenterText", centerText);
	localStorage.setItem("Slot5_Custom_Slider1_RightText", rightText);	
	
	var leftText = document.getElementById("textinmenuLeftCS2").innerText;
	var centerText = document.getElementById("textinmenuCenterCS2").innerText;
	var rightText = document.getElementById("textinmenuRightCS2").innerText;
	
	localStorage.setItem("Slot5_Custom_Slider2_LeftText", leftText);	
	localStorage.setItem("Slot5_Custom_Slider2_CenterText", centerText);	
	localStorage.setItem("Slot5_Custom_Slider2_RightText", rightText);	
	
	var leftText = document.getElementById("textinmenuLeftCS3").innerText;
	var centerText = document.getElementById("textinmenuCenterCS3").innerText;
	var rightText = document.getElementById("textinmenuRightCS3").innerText;
	
	localStorage.setItem("Slot5_Custom_Slider3_LeftText", leftText);	
	localStorage.setItem("Slot5_Custom_Slider3_CenterText", centerText);	
	localStorage.setItem("Slot5_Custom_Slider3_RightText", rightText);	
	
	var isCS1Enabled = localStorage.getItem("Custom_Slider1_Enabled");
	var isCS2Enabled = localStorage.getItem("Custom_Slider2_Enabled");
	var isCS3Enabled = localStorage.getItem("Custom_Slider3_Enabled");

	localStorage.setItem("Slot5_Custom_Slider1_Enabled", isCS1Enabled);	
	localStorage.setItem("Slot5_Custom_Slider2_Enabled", isCS2Enabled);	
	localStorage.setItem("Slot5_Custom_Slider3_Enabled", isCS3Enabled);	
 
	localStorage.setItem("Slot5_Species", settingSpecies);	
	localStorage.setItem("Slot5_Inanimate_Object", inanimateObject);
    localStorage.setItem("Slot5_Sex", settingSex);	
	localStorage.setItem("Slot5_AC_Box_Ticked", tickbox);
	localStorage.setItem("Slot5_Body_Type1", bodyType1);
	localStorage.setItem("Slot5_Body_Type2", bodyType2);
	localStorage.setItem("Slot5_Body_Type3", bodyType3);
	localStorage.setItem("Slot5_Hips", hips);
	localStorage.setItem("Slot5_Genital_Size", genitalSize);
	localStorage.setItem("Slot5_Fluffiness", fluffiness);
	localStorage.setItem("Slot5_Libido", libido);
	localStorage.setItem("Slot5_Position_Preference", domsub);
	localStorage.setItem("Slot5_Sensitivity", sensitivity);
	localStorage.setItem("Slot5_Demeanor", assertiveShy); 
	localStorage.setItem("Slot5_Breast_Size_Male", breastSizeMale); 
	localStorage.setItem("Slot5_Breast_Size_Female", breastSizeFemale); 
	localStorage.setItem("Slot5_Butt_Size", buttSize);
	localStorage.setItem("Slot5_Belly_Size", bellySize);
	localStorage.setItem("Slot5_Belly_Shape", bellyShape);
	localStorage.setItem("Slot5_Intelligence", intelligence);
	localStorage.setItem("Slot5_Cock_Type", cockType);
	
	document.getElementById("settingsLoadedPopup").style.display = "block";	
	document.getElementById('settingsLoadedPopup').innerHTML = ">Settings Saved:" + " " + settingSex + " " + settingSpecies;
	//hideSaveSlotButtons();	
	checkSlots();
	setTimeout(hideLoadedPopup, 4000);
 }
   
 function loadSettingsSlot5() {
	var lock = document.getElementById("lockClosed");
	if (lock.style.display === "block") {
		document.getElementById("unblockSettingsOkayContainer").style.display='block'; 
		document.getElementById("unblockSettingsOkay").style.display='block'; 
		document.getElementById("unblockSettingsMessage").style.display='block'; 
		document.getElementById("errorMessageContainer").style.display='block'; 
	}
	else {
		var Species = localStorage.getItem("Slot5_Species");
				if (Species == null) {
			document.getElementById("settingsLoadedPopup").style.display = "block";	
			document.getElementById('settingsLoadedPopup').innerHTML = ">Error: This slot is empty";
			hideLoadSlotButtons();
			setTimeout(hideLoadedPopup, 4000);			
		}
		else{
		document.getElementById('speciesCurrent').innerHTML = Species;
		var object = localStorage.getItem("Slot5_Inanimate_Object");
		if (object != null) {
			document.getElementById('inanimateObjectsCurrent').innerHTML = object;
		}
 
		var Sex = localStorage.getItem("Slot5_Sex");
		if (Sex == "Male" || Sex == "Femboy") {
			rbmale = document.getElementById("radiobuttonMale");
			rbmale.checked = true;
			rbfemale = document.getElementById("radiobuttonFemale");
			rbfemale.checked = false;
		}
		else if (Sex == "Female" || Sex == "Tomboy") {
			rbfemale = document.getElementById("radiobuttonFemale");
			rbfemale.checked = true;
			rbmale = document.getElementById("radiobuttonMale");
			rbmale.checked = false;
		}
 
		var AC_Box_Ticked = localStorage.getItem("Slot5_AC_Box_Ticked");
		if (AC_Box_Ticked == "Yes") {
			var tickbox = document.getElementById("adaptClothingCheckbox");
			tickbox.checked = true;
		}
 
		var bodyType1 = localStorage.getItem("Slot5_Body_Type1");
		mySlider6.setValue(bodyType1);
 
		var bodyType2 = localStorage.getItem("Slot5_Body_Type2");
		mySlider5.setValue(bodyType2);
 
		var bodyType3 = localStorage.getItem("Slot5_Body_Type3");
		mySlider4.setValue(bodyType3);
		
		var xx = document.getElementById("AdvancedSettingsContainer");
			if (xx.style.display === "none") {
				var open = "no"
			}
			else {
				var open = "yes"		
			}
 
		document.getElementById("AdvancedSettingsContainer").style.display='block'; 
  
		var hips = localStorage.getItem("Slot5_Hips");
		mySlider3.setValue(hips);
 
		var genitalSize = localStorage.getItem("Slot5_Genital_Size");
		mySlider2.setValue(genitalSize);
 
		var fluffiness = localStorage.getItem("Slot5_Fluffiness");
		mySlider.setValue(fluffiness);
 
		var libido = localStorage.getItem("Slot5_Libido");
		mySlider7.setValue(libido);
 
		var domsub = localStorage.getItem("Slot5_Position_Preference");
		mySlider10.setValue(domsub);
 
		var sensitivity = localStorage.getItem("Slot5_Sensitivity");
		mySlider11.setValue(sensitivity);
 
		var assertiveShy = localStorage.getItem("Slot5_Demeanor");
		mySlider12.setValue(assertiveShy);
 
		var buttSize = localStorage.getItem("Slot5_Butt_Size");	
		mySlider13.setValue(buttSize);
 
		var bellySize = localStorage.getItem("Slot5_Belly_Size");
		mySlider14.setValue(bellySize);
 
		var bellyShape = localStorage.getItem("Slot5_Belly_Shape");
		mySlider15.setValue(bellyShape);
 
		var intelligence = localStorage.getItem("Slot5_Intelligence");
		mySlider16.setValue(intelligence);
		
		var cockType = localStorage.getItem("Slot5_Cock_Type");
		var element2 = document.getElementById("cockType");
		element2.value = cockType; 
 
		if (Sex == "Male" || Sex == "Femboy") {
			document.getElementById("showAdvancedSettings4a").style.display = "block";
			document.getElementById("showAdvancedSettings4b").style.display = "none";
			var breastSizeMale = localStorage.getItem("Slot5_Breast_Size_Male");
			mySlider9.setValue(breastSizeMale);
		}
 		else {
			document.getElementById("showAdvancedSettings4b").style.display = "block";
			document.getElementById("showAdvancedSettings4a").style.display = "none";
			var breastSizeFemale = localStorage.getItem("Slot5_Breast_Size_Female");
			mySlider8.setValue(breastSizeFemale);
		}
 
		if (open =="no") {
			document.getElementById("AdvancedSettingsContainer").style.display='none'; 
		}
		else {
			document.getElementById("AdvancedSettingsContainer").style.display='block';
		}
		
		var leftText = localStorage.getItem("Slot5_Custom_Slider1_LeftText");
		var centerText = localStorage.getItem("Slot5_Custom_Slider1_CenterText");
		var rightText = localStorage.getItem("Slot5_Custom_Slider1_RightText");
		document.getElementById('textinmenuLeftCS1').innerHTML = leftText;	
		document.getElementById('textinmenuCenterCS1').innerHTML = centerText;	
		document.getElementById('textinmenuRightCS1').innerHTML = rightText;	
		
		var leftText = localStorage.getItem("Slot5_Custom_Slider2_LeftText");
		var centerText = localStorage.getItem("Slot5_Custom_Slider2_CenterText");
		var rightText = localStorage.getItem("Slot5_Custom_Slider2_RightText");
		document.getElementById('textinmenuLeftCS2').innerHTML = leftText;	
		document.getElementById('textinmenuCenterCS2').innerHTML = centerText;	
		document.getElementById('textinmenuRightCS2').innerHTML = rightText;
		
		var leftText = localStorage.getItem("Slot5_Custom_Slider3_LeftText");
		var centerText = localStorage.getItem("Slot5_Custom_Slider3_CenterText");
		var rightText = localStorage.getItem("Slot5_Custom_Slider3_RightText");
		document.getElementById('textinmenuLeftCS3').innerHTML = leftText;	
		document.getElementById('textinmenuCenterCS3').innerHTML = centerText;	
		document.getElementById('textinmenuRightCS3').innerHTML = rightText;
		
		var isCS1Enabled = localStorage.getItem("Slot5_Custom_Slider1_Enabled");
		var isCS2Enabled = localStorage.getItem("Slot5_Custom_Slider2_Enabled");
		var isCS3Enabled = localStorage.getItem("Slot5_Custom_Slider3_Enabled");
		
		document.getElementById("custom1SliderMenu").style.display='block';
		document.getElementById("custom2SliderMenu").style.display='block';
		document.getElementById("custom3SliderMenu").style.display='block';
		
		var CS1Value = localStorage.getItem("Slot5_Custom_Slider1_Value");
		var CS2Value = localStorage.getItem("Slot5_Custom_Slider2_Value");
		var CS3Value = localStorage.getItem("Slot5_Custom_Slider3_Value");
		
		mySlider17.setValue(CS1Value);
		mySlider18.setValue(CS2Value);
		mySlider19.setValue(CS3Value);
		
		if (isCS1Enabled != "Yes") {
			document.getElementById("custom1SliderMenu").style.display='none';
		}
		if (isCS2Enabled != "Yes") {
			document.getElementById("custom2SliderMenu").style.display='none';
		}
		if (isCS3Enabled != "Yes") {
			document.getElementById("custom3SliderMenu").style.display='none';
		}		
		if (isCS1Enabled == "Yes") {
			document.getElementById("customSlider1Checkbox").checked = true;
			localStorage.setItem("Custom_Slider1_Enabled", "Yes");
		}
		if (isCS2Enabled == "Yes") {
			document.getElementById("customSlider2Checkbox").checked = true;
			localStorage.setItem("Custom_Slider2_Enabled", "Yes");
		}
		if (isCS3Enabled == "Yes") {
			document.getElementById("customSlider3Checkbox").checked = true;
			localStorage.setItem("Custom_Slider3_Enabled", "Yes");
		}
		
		document.getElementById("settingsLoadedPopup").style.display = "block";	
		document.getElementById('settingsLoadedPopup').innerHTML = ">Settings Loaded:" + " " + Sex + " " + Species;
		//hideLoadSlotButtons();
		saveSettingsSlot0();
		setTimeout(hideLoadedPopup, 4000);	
		}
	}
}