function saveSettingsSlot1() {
	var settingSpecies = document.getElementById("speciesCurrent").innerHTML;
	var inanimateObject = document.getElementById("inanimateObjectsCurrent").innerHTML;
	
	rbmale = document.getElementById("radiobuttonMale");
	rbfemale = document.getElementById("radiobuttonFemale");
	if (rbmale.checked) {
		var settingSex = "Male"
	}
	else if (rbfemale.checked) {
		var settingSex = "Female"
	}
	else {
		var settingSex = document.getElementById("thirdSexValue").innerHTML;
	}
 
	var tickbox = document.getElementById("adaptClothingCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
	}
	else {
		var tickbox = "No"
	}
	
	var tickbox2 = document.getElementById("pregnancyLockCheckbox");
	if (tickbox2.checked) {
		var tickbox2 = "Yes"
	}
	else {
		var tickbox2 = "No"
	}
	
	var tickbox3 = document.getElementById("genitalsPenisCheckbox");
	if (tickbox3.checked) {
		var tickbox3 = "Yes"
	}
	else {
		var tickbox3 = "No"
	}
	
	var tickbox4 = document.getElementById("genitalsVaginaCheckbox");
	if (tickbox4.checked) {
		var tickbox4 = "Yes"
	}
	else {
		var tickbox4 = "No"
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
	var hairLenght = mySlider20.getValue();
	var sexuality = mySlider21.getValue();
	var feralAnthro = mySlider22.getValue();
	var fertility = mySlider23.getValue();
	
	var cockType = document.getElementById("cockTypeCurrent").innerHTML;
	
	var settingSex = functionBodyType(settingSex, bodyType1);
	
	var custom1 = mySlider17.getValue();
	var custom2 = mySlider18.getValue();
	var custom3 = mySlider19.getValue();
 
	localStorage.setItem("Slot1_Custom_Slider1_Value", custom1);	
	localStorage.setItem("Slot1_Custom_Slider2_Value", custom2);	
	localStorage.setItem("Slot1_Custom_Slider3_Value", custom3);

	var leftText = document.getElementById("textinmenuLeftCS1").innerText;
	var centerText = document.getElementById("textinmenuCenterCS1").innerText;
	var rightText = document.getElementById("textinmenuRightCS1").innerText;
	
	localStorage.setItem("Slot1_Custom_Slider1_LeftText", leftText);	
	localStorage.setItem("Slot1_Custom_Slider1_CenterText", centerText);	
	localStorage.setItem("Slot1_Custom_Slider1_RightText", rightText);	
	
	var leftText = document.getElementById("textinmenuLeftCS2").innerText;
	var centerText = document.getElementById("textinmenuCenterCS2").innerText;
	var rightText = document.getElementById("textinmenuRightCS2").innerText;
	
	localStorage.setItem("Slot1_Custom_Slider2_LeftText", leftText);	
	localStorage.setItem("Slot1_Custom_Slider2_CenterText", centerText);	
	localStorage.setItem("Slot1_Custom_Slider2_RightText", rightText);	
	
	var leftText = document.getElementById("textinmenuLeftCS3").innerText;
	var centerText = document.getElementById("textinmenuCenterCS3").innerText;
	var rightText = document.getElementById("textinmenuRightCS3").innerText;
	
	localStorage.setItem("Slot1_Custom_Slider3_LeftText", leftText);	
	localStorage.setItem("Slot1_Custom_Slider3_CenterText", centerText);	
	localStorage.setItem("Slot1_Custom_Slider3_RightText", rightText);

	var isCS1Enabled = localStorage.getItem("Custom_Slider1_Enabled");
	var isCS2Enabled = localStorage.getItem("Custom_Slider2_Enabled");
	var isCS3Enabled = localStorage.getItem("Custom_Slider3_Enabled");

	localStorage.setItem("Slot1_Custom_Slider1_Enabled", isCS1Enabled);	
	localStorage.setItem("Slot1_Custom_Slider2_Enabled", isCS2Enabled);	
	localStorage.setItem("Slot1_Custom_Slider3_Enabled", isCS3Enabled);	
	
	var hairColor = localStorage.getItem("Slot0_Hair_Color");
	var swatchColor = localStorage.getItem("Slot0_Swatch_Color");
	
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
	var genitalsMenuEnabled = localStorage.getItem("Genitals_Menu_Enabled");
	var speciesMenuEnabled = localStorage.getItem("Species_Menu_Enabled");
	var sexMenuEnabled = localStorage.getItem("Sex_Menu_Enabled");
	var acMenuEnabled = localStorage.getItem("AC_Menu_Enabled");
	var mascFemSliderEnabled = localStorage.getItem("MascFem_Slider_Enabled");
	var thinThiccSliderEnabled = localStorage.getItem("ThinThicc_Slider_Enabled");
	var smolTallSliderEnabled = localStorage.getItem("SmolTall_Slider_Enabled");
	var inanimateObjectsMenuEnabled = localStorage.getItem("Inanimate_Objects_Enabled");
		
	localStorage.setItem("Slot1_Species", settingSpecies);	
	localStorage.setItem("Slot1_Inanimate_Object", inanimateObject);
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
	localStorage.setItem("Slot1_Hair_Color", hairColor);
	localStorage.setItem("Slot1_Swatch_Color", swatchColor);
	localStorage.setItem("Slot1_Hair_Lenght", hairLenght);
	localStorage.setItem("Slot1_Sexuality", sexuality);
	localStorage.setItem("Slot1_Feral_Anthro", feralAnthro);
	localStorage.setItem("Slot1_Pregnancy_Lock_Box_Ticked", tickbox2);
	localStorage.setItem("Slot1_Fertility", fertility);
	localStorage.setItem("Slot1_Genitals_Menu_Penis_Box_Ticked", tickbox3);
	localStorage.setItem("Slot1_Genitals_Menu_Vagina_Box_Ticked", tickbox4);
	
	localStorage.setItem("Slot1_Butt_Size_Slider_Enabled", buttSizeSliderEnabled);	
	localStorage.setItem("Slot1_Belly_Size_Slider_Enabled", bellySizeSliderEnabled);		
	localStorage.setItem("Slot1_Belly_Shape_Slider_Enabled", bellyShapeSliderEnabled);		
	localStorage.setItem("Slot1_Hips_Slider_Enabled", hipsSliderEnabled);			
	localStorage.setItem("Slot1_Genital_Size_Slider_Enabled", genitalSizeSliderEnabled);	
	localStorage.setItem("Slot1_Cock_Type_Menu_Enabled", cockTypeMenuEnabled);			
	localStorage.setItem("Slot1_Libido_Slider_Enabled", libidoSliderEnabled);			
	localStorage.setItem("Slot1_Sensitivity_Slider_Enabled", sensitivitySliderEnabled);		
	localStorage.setItem("Slot1_Demeanor_Slider_Enabled", demeanorSliderEnabled);		
	localStorage.setItem("Slot1_Postion_Pref_Slider_Enabled", positionPrefSliderEnabled);	
	localStorage.setItem("Slot1_Intelligence_Slider_Enabled", intelligenceSliderEnabled);	
	localStorage.setItem("Slot1_Fluffiness_Slider_Enabled", fluffinessSliderEnabled);		
	localStorage.setItem("Slot1_Hair_Lenght_Slider_Enabled", hairLenghtSliderEnabled);		
	localStorage.setItem("Slot1_Sexuality_Slider_Enabled", sexualitySliderEnabled);		
	localStorage.setItem("Slot1_Feral_Anthro_Slider_Enabled", feralAnthroSliderEnabled);	
	localStorage.setItem("Slot1_Hair_Color_Menu_Enabled", hairColorMenuEnabled);		
	localStorage.setItem("Slot1_Fertility_Slider_Enabled", fertilitySliderEnabled);		
	localStorage.setItem("Slot1_Genitals_Menu_Enabled", genitalsMenuEnabled);			
	localStorage.setItem("Slot1_Species_Menu_Enabled", speciesMenuEnabled);			
	localStorage.setItem("Slot1_Sex_Menu_Enabled", sexMenuEnabled);				
	localStorage.setItem("Slot1_AC_Menu_Enabled", acMenuEnabled);				
	localStorage.setItem("Slot1_MascFem_Slider_Enabled", mascFemSliderEnabled);			
	localStorage.setItem("Slot1_ThinThicc_Slider_Enabled", thinThiccSliderEnabled);		
	localStorage.setItem("Slot1_SmolTall_Slider_Enabled", smolTallSliderEnabled);		
	localStorage.setItem("Slot1_Inanimate_Objects_Enabled", inanimateObjectsMenuEnabled);		
	
	document.getElementById("settingsLoadedPopup").style.display = "block";	
	document.getElementById('settingsLoadedPopup').innerHTML = ">Settings Saved:" + " " + settingSex + " " + settingSpecies;
	checkSlots();
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
		if (Species == null) {
			document.getElementById("settingsLoadedPopup").style.display = "block";	
			document.getElementById('settingsLoadedPopup').innerHTML = ">Error: This slot is empty";
			setTimeout(hideLoadedPopup, 4000);			
		}
		else{
		document.getElementById('speciesCurrent').innerHTML = Species;
		var object = localStorage.getItem("Slot1_Inanimate_Object");
		if (object != null) {
			document.getElementById('inanimateObjectsCurrent').innerHTML = object;
		}
 
		var Sex = localStorage.getItem("Slot1_Sex");
		if (Sex == "Male" || Sex == "Femboy") {
			rbmale = document.getElementById("radiobuttonMale");
			rbmale.checked = true;
		}
		else if (Sex == "Female" || Sex == "Tomboy") {
			rbfemale = document.getElementById("radiobuttonFemale");
			rbfemale.checked = true;
		}
		else {
			document.getElementById('thirdSexValue').innerHTML = Sex;
			rbother = document.getElementById("radiobuttonOther");
			rbother.checked = true;
		}
 
		var AC_Box_Ticked = localStorage.getItem("Slot1_AC_Box_Ticked");
		var tickbox = document.getElementById("adaptClothingCheckbox");
		if (AC_Box_Ticked == "Yes") {			
			tickbox.checked = true;
		}
		else {
			tickbox.checked = false;
		}
		
		var Fertility_Box_Ticked = localStorage.getItem("Slot1_Pregnancy_Lock_Box_Ticked");
		var tickbox2 = document.getElementById("pregnancyLockCheckbox");
		if (Fertility_Box_Ticked == "Yes") {			
			tickbox2.checked = true;
		}
		else {
			tickbox2.checked = false;
		}
		
		var Genitals_Penis_Box_Ticked = localStorage.getItem("Slot1_Genitals_Menu_Penis_Box_Ticked");
		var tickbox3 = document.getElementById("genitalsPenisCheckbox");
		if (Genitals_Penis_Box_Ticked == "Yes") {			
			tickbox3.checked = true;
		}
		else {
			tickbox3.checked = false;
		}
		
		var Genitals_Vagina_Box_Ticked = localStorage.getItem("Slot1_Genitals_Menu_Vagina_Box_Ticked");
		var tickbox4 = document.getElementById("genitalsVaginaCheckbox");
		if (Genitals_Vagina_Box_Ticked == "Yes") {			
			tickbox4.checked = true;
		}
		else {
			tickbox4.checked = false;
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
		
		var hairLenght = localStorage.getItem("Slot1_Hair_Lenght");
		mySlider20.setValue(hairLenght);
		
		var sexuality = localStorage.getItem("Slot1_Sexuality");
		mySlider21.setValue(sexuality);
		
		var feralAnthro = localStorage.getItem("Slot1_Feral_Anthro");
		mySlider22.setValue(feralAnthro);
		
		var fertility = localStorage.getItem("Slot1_Fertility");
		mySlider23.setValue(fertility);
		
		var cockType = localStorage.getItem("Slot1_Cock_Type");
		document.getElementById('cockTypeCurrent').innerHTML = cockType;
 
		if (Sex == "Male" || Sex == "Femboy") {
			document.getElementById("showAdvancedSettings4a").style.display = "block";
			document.getElementById("showAdvancedSettings4b").style.display = "none";
			var breastSizeMale = localStorage.getItem("Slot1_Breast_Size_Male");
			mySlider9.setValue(breastSizeMale);
			showOrHideBreastSizeMaleSlider();
		}
 		else {
			document.getElementById("showAdvancedSettings4b").style.display = "block";
			document.getElementById("showAdvancedSettings4a").style.display = "none";
			var breastSizeFemale = localStorage.getItem("Slot1_Breast_Size_Female");
			mySlider8.setValue(breastSizeFemale);
		}
		
		if (open =="no") {
			document.getElementById("AdvancedSettingsContainer").style.display='none'; 
		}
		else {
			document.getElementById("AdvancedSettingsContainer").style.display='block';
		}
		
		var leftText = localStorage.getItem("Slot1_Custom_Slider1_LeftText");
		var centerText = localStorage.getItem("Slot1_Custom_Slider1_CenterText");
		var rightText = localStorage.getItem("Slot1_Custom_Slider1_RightText");
		document.getElementById('textinmenuLeftCS1').innerHTML = leftText;	
		document.getElementById('textinmenuCenterCS1').innerHTML = centerText;	
		document.getElementById('textinmenuRightCS1').innerHTML = rightText;	
		
		var leftText = localStorage.getItem("Slot1_Custom_Slider2_LeftText");
		var centerText = localStorage.getItem("Slot1_Custom_Slider2_CenterText");
		var rightText = localStorage.getItem("Slot1_Custom_Slider2_RightText");
		document.getElementById('textinmenuLeftCS2').innerHTML = leftText;	
		document.getElementById('textinmenuCenterCS2').innerHTML = centerText;	
		document.getElementById('textinmenuRightCS2').innerHTML = rightText;
		
		var leftText = localStorage.getItem("Slot1_Custom_Slider3_LeftText");
		var centerText = localStorage.getItem("Slot1_Custom_Slider3_CenterText");
		var rightText = localStorage.getItem("Slot1_Custom_Slider3_RightText");
		document.getElementById('textinmenuLeftCS3').innerHTML = leftText;	
		document.getElementById('textinmenuCenterCS3').innerHTML = centerText;	
		document.getElementById('textinmenuRightCS3').innerHTML = rightText;
		
		var isCS1Enabled = localStorage.getItem("Slot1_Custom_Slider1_Enabled");
		var isCS2Enabled = localStorage.getItem("Slot1_Custom_Slider2_Enabled");
		var isCS3Enabled = localStorage.getItem("Slot1_Custom_Slider3_Enabled");
		
		var CS1Value = localStorage.getItem("Slot1_Custom_Slider1_Value");
		var CS2Value = localStorage.getItem("Slot1_Custom_Slider2_Value");
		var CS3Value = localStorage.getItem("Slot1_Custom_Slider3_Value");
		
		mySlider17.setValue(CS1Value);
		mySlider18.setValue(CS2Value);
		mySlider19.setValue(CS3Value);
		
		localStorage.setItem("Custom_Slider1_Enabled", isCS1Enabled);
		localStorage.setItem("Custom_Slider2_Enabled", isCS2Enabled);
		localStorage.setItem("Custom_Slider3_Enabled", isCS3Enabled);
		
		var hairColor = localStorage.getItem("Slot1_Hair_Color");
		var swatchColor = localStorage.getItem("Slot1_Swatch_Color");
		
		document.getElementById('hairColorCurrent').innerHTML = hairColor;
		document.getElementById('hairColorSwatch').style.backgroundColor = swatchColor;
		
		var buttSizeSliderEnabled = localStorage.getItem("Slot1_Butt_Size_Slider_Enabled");
		var bellySizeSliderEnabled = localStorage.getItem("Slot1_Belly_Size_Slider_Enabled");
		var bellyShapeSliderEnabled = localStorage.getItem("Slot1_Belly_Shape_Slider_Enabled");
		var hipsSliderEnabled = localStorage.getItem("Slot1_Hips_Slider_Enabled");
		var genitalSizeSliderEnabled = localStorage.getItem("Slot1_Genital_Size_Slider_Enabled");
		var cockTypeMenuEnabled = localStorage.getItem("Slot1_Cock_Type_Menu_Enabled");
		var libidoSliderEnabled = localStorage.getItem("Slot1_Libido_Slider_Enabled");
		var sensitivitySliderEnabled = localStorage.getItem("Slot1_Sensitivity_Slider_Enabled");
		var demeanorSliderEnabled = localStorage.getItem("Slot1_Demeanor_Slider_Enabled");
		var positionPrefSliderEnabled = localStorage.getItem("Slot1_Postion_Pref_Slider_Enabled");
		var intelligenceSliderEnabled = localStorage.getItem("Slot1_Intelligence_Slider_Enabled");
		var fluffinessSliderEnabled = localStorage.getItem("Slot1_Fluffiness_Slider_Enabled");
		var hairLenghtSliderEnabled = localStorage.getItem("Slot1_Hair_Lenght_Slider_Enabled");
		var sexualitySliderEnabled = localStorage.getItem("Slot1_Sexuality_Slider_Enabled");
		var feralAnthroSliderEnabled = localStorage.getItem("Slot1_Feral_Anthro_Slider_Enabled");
		var hairColorMenuEnabled = localStorage.getItem("Slot1_Hair_Color_Menu_Enabled");
		var fertilitySliderEnabled = localStorage.getItem("Slot1_Fertility_Slider_Enabled");
		var genitalsMenuEnabled = localStorage.getItem("Slot1_Genitals_Menu_Enabled");
		var speciesMenuEnabled = localStorage.getItem("Slot1_Species_Menu_Enabled");
		var sexMenuEnabled = localStorage.getItem("Slot1_Sex_Menu_Enabled");
		var acMenuEnabled = localStorage.getItem("Slot1_AC_Menu_Enabled");
		var mascFemSliderEnabled = localStorage.getItem("Slot1_MascFem_Slider_Enabled");
		var thinThiccSliderEnabled = localStorage.getItem("Slot1_ThinThicc_Slider_Enabled");
		var smolTallSliderEnabled = localStorage.getItem("Slot1_SmolTall_Slider_Enabled");
		var inanimateObjectsMenuEnabled = localStorage.getItem("Slot1_Inanimate_Objects_Enabled");
		
		localStorage.setItem("Butt_Size_Slider_Enabled", buttSizeSliderEnabled);	
		localStorage.setItem("Belly_Size_Slider_Enabled", bellySizeSliderEnabled);		
		localStorage.setItem("Belly_Shape_Slider_Enabled", bellyShapeSliderEnabled);		
		localStorage.setItem("Hips_Slider_Enabled", hipsSliderEnabled);			
		localStorage.setItem("Genital_Size_Slider_Enabled", genitalSizeSliderEnabled);	
		localStorage.setItem("Cock_Type_Menu_Enabled", cockTypeMenuEnabled);			
		localStorage.setItem("Libido_Slider_Enabled", libidoSliderEnabled);			
		localStorage.setItem("Sensitivity_Slider_Enabled", sensitivitySliderEnabled);		
		localStorage.setItem("Demeanor_Slider_Enabled", demeanorSliderEnabled);		
		localStorage.setItem("Postion_Pref_Slider_Enabled", positionPrefSliderEnabled);	
		localStorage.setItem("Intelligence_Slider_Enabled", intelligenceSliderEnabled);	
		localStorage.setItem("Fluffiness_Slider_Enabled", fluffinessSliderEnabled);		
		localStorage.setItem("Hair_Lenght_Slider_Enabled", hairLenghtSliderEnabled);		
		localStorage.setItem("Sexuality_Slider_Enabled", sexualitySliderEnabled);		
		localStorage.setItem("Feral_Anthro_Slider_Enabled", feralAnthroSliderEnabled);	
		localStorage.setItem("Hair_Color_Menu_Enabled", hairColorMenuEnabled);		
		localStorage.setItem("Fertility_Slider_Enabled", fertilitySliderEnabled);		
		localStorage.setItem("Genitals_Menu_Enabled", genitalsMenuEnabled);			
		localStorage.setItem("Species_Menu_Enabled", speciesMenuEnabled);			
		localStorage.setItem("Sex_Menu_Enabled", sexMenuEnabled);				
		localStorage.setItem("AC_Menu_Enabled", acMenuEnabled);				
		localStorage.setItem("MascFem_Slider_Enabled", mascFemSliderEnabled);			
		localStorage.setItem("ThinThicc_Slider_Enabled", thinThiccSliderEnabled);		
		localStorage.setItem("SmolTall_Slider_Enabled", smolTallSliderEnabled);		
		localStorage.setItem("Inanimate_Objects_Enabled", inanimateObjectsMenuEnabled);		
		
		loadSliderSettings();
		loadCustomSlidersValuesOnStartup1("Yes");
		loadCustomSlidersValuesOnStartup2("Yes");
		loadCustomSlidersValuesOnStartup3("Yes");
		
		document.getElementById("settingsLoadedPopup").style.display = "block";	
		document.getElementById('settingsLoadedPopup').innerHTML = ">Settings Loaded:" + " " + Sex + " " + Species;
		saveSettingsSlot0();
		setTimeout(hideLoadedPopup, 4000);			
		}
	}
}