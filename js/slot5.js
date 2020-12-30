 function saveSettingsSlot5() {
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
	var feralAnthro = mySlider22.getValue();
	var fertility = mySlider23.getValue();
	
	var cockType = document.getElementById("cockTypeCurrent").innerHTML;
	
	var settingSex = functionBodyType(settingSex, bodyType1);
	
	var custom1 = mySlider17.getValue();
	var custom2 = mySlider18.getValue();
	var custom3 = mySlider19.getValue();
	var custom4 = mySlider24.getValue();
	var custom5 = mySlider25.getValue();
 
	localStorage.setItem("Slot5_Custom_Slider1_Value", custom1);	
	localStorage.setItem("Slot5_Custom_Slider2_Value", custom2);	
	localStorage.setItem("Slot5_Custom_Slider3_Value", custom3);
	localStorage.setItem("Slot5_Custom_Slider4_Value", custom4);
	localStorage.setItem("Slot5_Custom_Slider5_Value", custom5);

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
	
	var leftText = document.getElementById("textinmenuLeftCS4").innerText;
	var centerText = document.getElementById("textinmenuCenterCS4").innerText;
	var rightText = document.getElementById("textinmenuRightCS4").innerText;
	
	localStorage.setItem("Slot5_Custom_Slider4_LeftText", leftText);	
	localStorage.setItem("Slot5_Custom_Slider4_CenterText", centerText);	
	localStorage.setItem("Slot5_Custom_Slider4_RightText", rightText);
	
	var leftText = document.getElementById("textinmenuLeftCS5").innerText;
	var centerText = document.getElementById("textinmenuCenterCS5").innerText;
	var rightText = document.getElementById("textinmenuRightCS5").innerText;
	
	localStorage.setItem("Slot5_Custom_Slider5_LeftText", leftText);	
	localStorage.setItem("Slot5_Custom_Slider5_CenterText", centerText);	
	localStorage.setItem("Slot5_Custom_Slider5_RightText", rightText);
	
	var isCS1Enabled = localStorage.getItem("Custom_Slider1_Enabled");
	var isCS2Enabled = localStorage.getItem("Custom_Slider2_Enabled");
	var isCS3Enabled = localStorage.getItem("Custom_Slider3_Enabled");
	var isCS4Enabled = localStorage.getItem("Custom_Slider4_Enabled");
	var isCS5Enabled = localStorage.getItem("Custom_Slider5_Enabled");

	localStorage.setItem("Slot5_Custom_Slider1_Enabled", isCS1Enabled);	
	localStorage.setItem("Slot5_Custom_Slider2_Enabled", isCS2Enabled);	
	localStorage.setItem("Slot5_Custom_Slider3_Enabled", isCS3Enabled);	
	localStorage.setItem("Slot5_Custom_Slider4_Enabled", isCS4Enabled);
	localStorage.setItem("Slot5_Custom_Slider5_Enabled", isCS5Enabled);
	
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
	
	// Checkboxes
	
	var label = localStorage.getItem("Slot0_Custom_Checkbox1_Label");
	var value1 = localStorage.getItem("Slot0_Custom_Checkbox1_Value1");
	var value2 = localStorage.getItem("Slot0_Custom_Checkbox1_Value2");
	var ticked1 = localStorage.getItem("Slot0_Custom_Checkbox1_Value1_Ticked");
	var ticked2 = localStorage.getItem("Slot0_Custom_Checkbox1_Value2_Ticked");
	
	localStorage.setItem("Slot5_Custom_Checkbox1_Label", label);
	localStorage.setItem("Slot5_Custom_Checkbox1_Value1", value1);
	localStorage.setItem("Slot5_Custom_Checkbox1_Value2", value2);
	localStorage.setItem("Slot5_Custom_Checkbox1_Value1_Ticked", ticked1);
	localStorage.setItem("Slot5_Custom_Checkbox1_Value2_Ticked", ticked2);
	
	var label = localStorage.getItem("Slot0_Custom_Checkbox2_Label");
	var value1 = localStorage.getItem("Slot0_Custom_Checkbox2_Value1");
	var value2 = localStorage.getItem("Slot0_Custom_Checkbox2_Value2");
	var ticked1 = localStorage.getItem("Slot0_Custom_Checkbox2_Value1_Ticked");
	var ticked2 = localStorage.getItem("Slot0_Custom_Checkbox2_Value2_Ticked");
	
	localStorage.setItem("Slot5_Custom_Checkbox2_Label", label);
	localStorage.setItem("Slot5_Custom_Checkbox2_Value1", value1);
	localStorage.setItem("Slot5_Custom_Checkbox2_Value2", value2);
	localStorage.setItem("Slot5_Custom_Checkbox2_Value1_Ticked", ticked1);
	localStorage.setItem("Slot5_Custom_Checkbox2_Value2_Ticked", ticked2);	
	
	var label = localStorage.getItem("Slot0_Custom_Checkbox3_Label");
	var value1 = localStorage.getItem("Slot0_Custom_Checkbox3_Value1");
	var value2 = localStorage.getItem("Slot0_Custom_Checkbox3_Value2");
	var ticked1 = localStorage.getItem("Slot0_Custom_Checkbox3_Value1_Ticked");
	var ticked2 = localStorage.getItem("Slot0_Custom_Checkbox3_Value2_Ticked");
	
	localStorage.setItem("Slot5_Custom_Checkbox3_Label", label);
	localStorage.setItem("Slot5_Custom_Checkbox3_Value1", value1);
	localStorage.setItem("Slot5_Custom_Checkbox3_Value2", value2);
	localStorage.setItem("Slot5_Custom_Checkbox3_Value1_Ticked", ticked1);
	localStorage.setItem("Slot5_Custom_Checkbox3_Value2_Ticked", ticked2);
	
	var CC1Enabled = localStorage.getItem("Slot0_Custom_Checkbox1_Enabled");
	var CC2Enabled = localStorage.getItem("Slot0_Custom_Checkbox2_Enabled");
	var CC3Enabled = localStorage.getItem("Slot0_Custom_Checkbox3_Enabled");
	
	localStorage.setItem("Slot5_Custom_Checkbox1_Enabled", CC1Enabled);
	localStorage.setItem("Slot5_Custom_Checkbox2_Enabled", CC2Enabled);
	localStorage.setItem("Slot5_Custom_Checkbox3_Enabled", CC3Enabled);

	// Checkboxes end
 
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
	localStorage.setItem("Slot5_Hair_Color", hairColor);
	localStorage.setItem("Slot5_Swatch_Color", swatchColor);
	localStorage.setItem("Slot5_Hair_Lenght", hairLenght);
	localStorage.setItem("Slot5_Feral_Anthro", feralAnthro);
	localStorage.setItem("Slot5_Pregnancy_Lock_Box_Ticked", tickbox2);
	localStorage.setItem("Slot5_Fertility", fertility);
	localStorage.setItem("Slot5_Genitals_Menu_Penis_Box_Ticked", tickbox3);
	localStorage.setItem("Slot5_Genitals_Menu_Vagina_Box_Ticked", tickbox4);
	
	localStorage.setItem("Slot5_Butt_Size_Slider_Enabled", buttSizeSliderEnabled);	
	localStorage.setItem("Slot5_Belly_Size_Slider_Enabled", bellySizeSliderEnabled);		
	localStorage.setItem("Slot5_Belly_Shape_Slider_Enabled", bellyShapeSliderEnabled);		
	localStorage.setItem("Slot5_Hips_Slider_Enabled", hipsSliderEnabled);			
	localStorage.setItem("Slot5_Genital_Size_Slider_Enabled", genitalSizeSliderEnabled);	
	localStorage.setItem("Slot5_Cock_Type_Menu_Enabled", cockTypeMenuEnabled);			
	localStorage.setItem("Slot5_Libido_Slider_Enabled", libidoSliderEnabled);			
	localStorage.setItem("Slot5_Sensitivity_Slider_Enabled", sensitivitySliderEnabled);		
	localStorage.setItem("Slot5_Demeanor_Slider_Enabled", demeanorSliderEnabled);		
	localStorage.setItem("Slot5_Postion_Pref_Slider_Enabled", positionPrefSliderEnabled);	
	localStorage.setItem("Slot5_Intelligence_Slider_Enabled", intelligenceSliderEnabled);	
	localStorage.setItem("Slot5_Fluffiness_Slider_Enabled", fluffinessSliderEnabled);		
	localStorage.setItem("Slot5_Hair_Lenght_Slider_Enabled", hairLenghtSliderEnabled);		
	localStorage.setItem("Slot5_Feral_Anthro_Slider_Enabled", feralAnthroSliderEnabled);	
	localStorage.setItem("Slot5_Hair_Color_Menu_Enabled", hairColorMenuEnabled);		
	localStorage.setItem("Slot5_Fertility_Slider_Enabled", fertilitySliderEnabled);		
	localStorage.setItem("Slot5_Genitals_Menu_Enabled", genitalsMenuEnabled);			
	localStorage.setItem("Slot5_Species_Menu_Enabled", speciesMenuEnabled);			
	localStorage.setItem("Slot5_Sex_Menu_Enabled", sexMenuEnabled);				
	localStorage.setItem("Slot5_AC_Menu_Enabled", acMenuEnabled);				
	localStorage.setItem("Slot5_MascFem_Slider_Enabled", mascFemSliderEnabled);			
	localStorage.setItem("Slot5_ThinThicc_Slider_Enabled", thinThiccSliderEnabled);		
	localStorage.setItem("Slot5_SmolTall_Slider_Enabled", smolTallSliderEnabled);		
	localStorage.setItem("Slot5_Inanimate_Objects_Enabled", inanimateObjectsMenuEnabled);
	
	// CharViz Stuff
	var charVizEnabled = localStorage.getItem("CharViz_Enabled");
		if (charVizEnabled === "Yes") {

			var topwear = localStorage.getItem("Slot0_CharViz_Topwear");
			var bottomwear = localStorage.getItem("Slot0_CharViz_Bottomwear");
			var armwear = localStorage.getItem("Slot0_CharViz_Armwear");
			var legwear = localStorage.getItem("Slot0_CharViz_Legwear");	
			var underwear = localStorage.getItem("Slot0_CharViz_Underwear");
			var accessories = localStorage.getItem("Slot0_CharViz_Accessories");
			
			if (topwear == null) 		{	topwear = "None"; 		}
			if (bottomwear == null) 	{	bottomwear = "None"; 	}
			if (armwear == null) 		{	armwear = "None"; 		}
			if (legwear == null) 		{	legwear = "None"; 		}
			if (underwear == null) 		{	underwear = "None"; 	}
			if (accessories == null) 	{	accessories = "None"; 	}
			
			localStorage.setItem("Slot5_CharViz_Topwear", topwear);
			localStorage.setItem("Slot5_CharViz_Bottomwear", bottomwear);
			localStorage.setItem("Slot5_CharViz_Armwear", armwear);
			localStorage.setItem("Slot5_CharViz_Legwear", legwear);
			localStorage.setItem("Slot5_CharViz_Underwear", underwear);
			localStorage.setItem("Slot5_CharViz_Accessories", accessories);
			
			// Character colors
			
			var primaryCharColor = document.getElementById("charVizDisplayBasePrimary").style.backgroundColor;
			var secondaryCharColor = document.getElementById("charVizDisplayBaseSecondary").style.backgroundColor;
			var tertiaryCharColor = document.getElementById("charVizDisplayTailTertiary").style.backgroundColor;
			var markingsCharColor = document.getElementById("charVizDisplayBaseMarkings").style.backgroundColor;
			var leftEyeCharColor = document.getElementById("charVizDisplayHeadIrisLeft").style.backgroundColor;
			var rightEyeCharColor = document.getElementById("charVizDisplayHeadIrisRight").style.backgroundColor;
			var hairCharColor = document.getElementById("charVizDisplayHeadHair").style.backgroundColor;
			
			localStorage.setItem("Slot5_Primary_Character_Color", primaryCharColor);
			localStorage.setItem("Slot5_Secondary_Character_Color", secondaryCharColor);
			localStorage.setItem("Slot5_Tertiary_Character_Color", tertiaryCharColor);
			localStorage.setItem("Slot5_Markings_Character_Color", markingsCharColor);
			localStorage.setItem("Slot5_LeftEye_Character_Color", leftEyeCharColor);
			localStorage.setItem("Slot5_RightEye_Character_Color", rightEyeCharColor);
			localStorage.setItem("Slot5_Hair_Character_Color", hairCharColor);
			
			// Outfit colors
			
			var primaryTopwearColor = document.getElementById("charVizDisplayTopwearPrimary").style.backgroundColor;
			var secondaryTopwearColor = document.getElementById("charVizDisplayTopwearSecondary").style.backgroundColor;
			var primaryBottomwearColor = document.getElementById("charVizDisplayBottomwearPrimary").style.backgroundColor;
			var secondaryBottomwearColor = document.getElementById("charVizDisplayBottomwearSecondary").style.backgroundColor;
			var primaryArmearColor = document.getElementById("charVizDisplayArmwearPrimary").style.backgroundColor;
			var secondaryArmwearColor = document.getElementById("charVizDisplayArmwearSecondary").style.backgroundColor;
			var primaryLegwearColor = document.getElementById("charVizDisplayLegwearPrimary").style.backgroundColor;
			var secondaryLegwearColor = document.getElementById("charVizDisplayLegwearSecondary").style.backgroundColor;
			var primaryUnderwearColor = document.getElementById("charVizDisplayUnderwearPrimary").style.backgroundColor;
			var secondaryUnderwearColor = document.getElementById("charVizDisplayUnderwearSecondary").style.backgroundColor;			
			
			localStorage.setItem("Slot5_Topwear_Primary_Clothing_Color", primaryTopwearColor);
			localStorage.setItem("Slot5_Topwear_Secondary_Clothing_Color", secondaryTopwearColor);
			localStorage.setItem("Slot5_Bottomwear_Primary_Clothing_Color", primaryTopwearColor);
			localStorage.setItem("Slot5_Bottomwear_Secondary_Clothing_Color", secondaryTopwearColor);
			localStorage.setItem("Slot5_Armwear_Primary_Clothing_Color", primaryTopwearColor);
			localStorage.setItem("Slot5_Armwear_Secondary_Clothing_Color", secondaryTopwearColor);
			localStorage.setItem("Slot5_Legwear_Primary_Clothing_Color", primaryTopwearColor);
			localStorage.setItem("Slot5_Legwear_Secondary_Clothing_Color", secondaryTopwearColor);
			localStorage.setItem("Slot5_Underwear_Primary_Clothing_Color", primaryTopwearColor);
			localStorage.setItem("Slot5_Underwear_Secondary_Clothing_Color", secondaryTopwearColor);
			
			// Blush
			
			var isBlushing = localStorage.getItem("CharViz_Character_Blushing");
			localStorage.setItem("Slot5_Character_Blushing", isBlushing);
			
		}
	
	var presetNameLocked = localStorage.getItem("Slot5_Preset_Name_Locked");	
	if (presetNameLocked != "Yes") {
		localStorage.setItem("Slot5_Preset_Name", settingSex + " " + settingSpecies);
	}	
	var presetName = localStorage.getItem("Slot5_Preset_Name");
	
	document.getElementById("settingsLoadedPopup").style.display = "block";	
	document.getElementById('settingsLoadedPopup').innerHTML = ">Preset Saved:" + " " + presetName;
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
 
		var AC_Box_Ticked = localStorage.getItem("Slot5_AC_Box_Ticked");
		var tickbox = document.getElementById("adaptClothingCheckbox");
		if (AC_Box_Ticked == "Yes") {			
			tickbox.checked = true;
		}
		else {
			tickbox.checked = false;
		}
		
		var Fertility_Box_Ticked = localStorage.getItem("Slot5_Pregnancy_Lock_Box_Ticked");
		var tickbox2 = document.getElementById("pregnancyLockCheckbox");
		if (Fertility_Box_Ticked == "Yes") {			
			tickbox2.checked = true;
		}
		else {
			tickbox2.checked = false;
		}
		
		var Genitals_Penis_Box_Ticked = localStorage.getItem("Slot5_Genitals_Menu_Penis_Box_Ticked");
		var tickbox3 = document.getElementById("genitalsPenisCheckbox");
		if (Genitals_Penis_Box_Ticked == "Yes") {			
			tickbox3.checked = true;
		}
		else {
			tickbox3.checked = false;
		}
		
		var Genitals_Vagina_Box_Ticked = localStorage.getItem("Slot5_Genitals_Menu_Vagina_Box_Ticked");
		var tickbox4 = document.getElementById("genitalsVaginaCheckbox");
		if (Genitals_Vagina_Box_Ticked == "Yes") {			
			tickbox4.checked = true;
		}
		else {
			tickbox4.checked = false;
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
		
		var hairLenght = localStorage.getItem("Slot5_Hair_Lenght");
		mySlider20.setValue(hairLenght);
		
		var feralAnthro = localStorage.getItem("Slot5_Feral_Anthro");
		mySlider22.setValue(feralAnthro);
		
		var fertility = localStorage.getItem("Slot5_Fertility");
		mySlider23.setValue(fertility);
		
		var cockType = localStorage.getItem("Slot5_Cock_Type");
		document.getElementById('cockTypeCurrent').innerHTML = cockType;
 
		if (Sex == "Male" || Sex == "Femboy") {
			document.getElementById("showAdvancedSettings4a").style.display = "block";
			document.getElementById("showAdvancedSettings4b").style.display = "none";
			var breastSizeMale = localStorage.getItem("Slot5_Breast_Size_Male");
			mySlider9.setValue(breastSizeMale);
			showOrHideBreastSizeMaleSlider();
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
		
		var leftText = localStorage.getItem("Slot5_Custom_Slider4_LeftText");
		var centerText = localStorage.getItem("Slot5_Custom_Slider4_CenterText");
		var rightText = localStorage.getItem("Slot5_Custom_Slider4_RightText");
		document.getElementById('textinmenuLeftCS4').innerHTML = leftText;
		document.getElementById('textinmenuCenterCS4').innerHTML = centerText;
		document.getElementById('textinmenuRightCS4').innerHTML = rightText;
		
		var leftText = localStorage.getItem("Slot5_Custom_Slider5_LeftText");
		var centerText = localStorage.getItem("Slot5_Custom_Slider5_CenterText");
		var rightText = localStorage.getItem("Slot5_Custom_Slider5_RightText");
		document.getElementById('textinmenuLeftCS5').innerHTML = leftText;
		document.getElementById('textinmenuCenterCS5').innerHTML = centerText;
		document.getElementById('textinmenuRightCS5').innerHTML = rightText;
		
		var isCS1Enabled = localStorage.getItem("Slot5_Custom_Slider1_Enabled");
		var isCS2Enabled = localStorage.getItem("Slot5_Custom_Slider2_Enabled");
		var isCS3Enabled = localStorage.getItem("Slot5_Custom_Slider3_Enabled");
		var isCS4Enabled = localStorage.getItem("Slot5_Custom_Slider4_Enabled");
		var isCS5Enabled = localStorage.getItem("Slot5_Custom_Slider5_Enabled");
				
		var CS1Value = localStorage.getItem("Slot5_Custom_Slider1_Value");
		var CS2Value = localStorage.getItem("Slot5_Custom_Slider2_Value");
		var CS3Value = localStorage.getItem("Slot5_Custom_Slider3_Value");
		var CS4Value = localStorage.getItem("Slot5_Custom_Slider4_Value");
		var CS5Value = localStorage.getItem("Slot5_Custom_Slider5_Value");
		
		mySlider17.setValue(CS1Value);
		mySlider18.setValue(CS2Value);
		mySlider19.setValue(CS3Value);
		mySlider24.setValue(CS4Value);
		mySlider25.setValue(CS5Value);
		
		localStorage.setItem("Custom_Slider1_Enabled", isCS1Enabled);
		localStorage.setItem("Custom_Slider2_Enabled", isCS2Enabled);
		localStorage.setItem("Custom_Slider3_Enabled", isCS3Enabled);
		localStorage.setItem("Custom_Slider4_Enabled", isCS4Enabled);
		localStorage.setItem("Custom_Slider5_Enabled", isCS5Enabled);
		
		var hairColor = localStorage.getItem("Slot5_Hair_Color");
		var swatchColor = localStorage.getItem("Slot5_Swatch_Color");
		
		document.getElementById('hairColorCurrent').innerHTML = hairColor;
		document.getElementById('hairColorSwatch').style.backgroundColor = swatchColor;
		
		var buttSizeSliderEnabled = localStorage.getItem("Slot5_Butt_Size_Slider_Enabled");
		var bellySizeSliderEnabled = localStorage.getItem("Slot5_Belly_Size_Slider_Enabled");
		var bellyShapeSliderEnabled = localStorage.getItem("Slot5_Belly_Shape_Slider_Enabled");
		var hipsSliderEnabled = localStorage.getItem("Slot5_Hips_Slider_Enabled");
		var genitalSizeSliderEnabled = localStorage.getItem("Slot5_Genital_Size_Slider_Enabled");
		var cockTypeMenuEnabled = localStorage.getItem("Slot5_Cock_Type_Menu_Enabled");
		var libidoSliderEnabled = localStorage.getItem("Slot5_Libido_Slider_Enabled");
		var sensitivitySliderEnabled = localStorage.getItem("Slot5_Sensitivity_Slider_Enabled");
		var demeanorSliderEnabled = localStorage.getItem("Slot5_Demeanor_Slider_Enabled");
		var positionPrefSliderEnabled = localStorage.getItem("Slot5_Postion_Pref_Slider_Enabled");
		var intelligenceSliderEnabled = localStorage.getItem("Slot5_Intelligence_Slider_Enabled");
		var fluffinessSliderEnabled = localStorage.getItem("Slot5_Fluffiness_Slider_Enabled");
		var hairLenghtSliderEnabled = localStorage.getItem("Slot5_Hair_Lenght_Slider_Enabled");
		var feralAnthroSliderEnabled = localStorage.getItem("Slot5_Feral_Anthro_Slider_Enabled");
		var hairColorMenuEnabled = localStorage.getItem("Slot5_Hair_Color_Menu_Enabled");
		var fertilitySliderEnabled = localStorage.getItem("Slot5_Fertility_Slider_Enabled");
		var genitalsMenuEnabled = localStorage.getItem("Slot5_Genitals_Menu_Enabled");
		var speciesMenuEnabled = localStorage.getItem("Slot5_Species_Menu_Enabled");
		var sexMenuEnabled = localStorage.getItem("Slot5_Sex_Menu_Enabled");
		var acMenuEnabled = localStorage.getItem("Slot5_AC_Menu_Enabled");
		var mascFemSliderEnabled = localStorage.getItem("Slot5_MascFem_Slider_Enabled");
		var thinThiccSliderEnabled = localStorage.getItem("Slot5_ThinThicc_Slider_Enabled");
		var smolTallSliderEnabled = localStorage.getItem("Slot5_SmolTall_Slider_Enabled");
		var inanimateObjectsMenuEnabled = localStorage.getItem("Slot5_Inanimate_Objects_Enabled");
		
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

		// Checkboxes
		
		var label = localStorage.getItem("Slot5_Custom_Checkbox1_Label");
		var value1 = localStorage.getItem("Slot5_Custom_Checkbox1_Value1");
		var value2 = localStorage.getItem("Slot5_Custom_Checkbox1_Value2");
		var ticked1 = localStorage.getItem("Slot5_Custom_Checkbox1_Value1_Ticked");
		var ticked2 = localStorage.getItem("Slot5_Custom_Checkbox1_Value2_Ticked");
		
		localStorage.setItem("Slot0_Custom_Checkbox1_Label", label);
		localStorage.setItem("Slot0_Custom_Checkbox1_Value1", value1);
		localStorage.setItem("Slot0_Custom_Checkbox1_Value2", value2);
		localStorage.setItem("Slot0_Custom_Checkbox1_Value1_Ticked", ticked1);
		localStorage.setItem("Slot0_Custom_Checkbox1_Value2_Ticked", ticked2);
		
		var label = localStorage.getItem("Slot5_Custom_Checkbox2_Label");
		var value1 = localStorage.getItem("Slot5_Custom_Checkbox2_Value1");
		var value2 = localStorage.getItem("Slot5_Custom_Checkbox2_Value2");
		var ticked1 = localStorage.getItem("Slot5_Custom_Checkbox2_Value1_Ticked");
		var ticked2 = localStorage.getItem("Slot5_Custom_Checkbox2_Value2_Ticked");
		
		localStorage.setItem("Slot0_Custom_Checkbox2_Label", label);
		localStorage.setItem("Slot0_Custom_Checkbox2_Value1", value1);
		localStorage.setItem("Slot0_Custom_Checkbox2_Value2", value2);
		localStorage.setItem("Slot0_Custom_Checkbox2_Value1_Ticked", ticked1);
		localStorage.setItem("Slot0_Custom_Checkbox2_Value2_Ticked", ticked2);
		
		var label = localStorage.getItem("Slot5_Custom_Checkbox3_Label");
		var value1 = localStorage.getItem("Slot5_Custom_Checkbox3_Value1");
		var value2 = localStorage.getItem("Slot5_Custom_Checkbox3_Value2");
		var ticked1 = localStorage.getItem("Slot5_Custom_Checkbox3_Value1_Ticked");
		var ticked2 = localStorage.getItem("Slot5_Custom_Checkbox3_Value2_Ticked");
		
		localStorage.setItem("Slot0_Custom_Checkbox3_Label", label);
		localStorage.setItem("Slot0_Custom_Checkbox3_Value1", value1);
		localStorage.setItem("Slot0_Custom_Checkbox3_Value2", value2);
		localStorage.setItem("Slot0_Custom_Checkbox3_Value1_Ticked", ticked1);
		localStorage.setItem("Slot0_Custom_Checkbox3_Value2_Ticked", ticked2);
		
		var CC1Enabled = localStorage.getItem("Slot5_Custom_Checkbox1_Enabled");
		var CC2Enabled = localStorage.getItem("Slot5_Custom_Checkbox2_Enabled");
		var CC3Enabled = localStorage.getItem("Slot5_Custom_Checkbox3_Enabled");
	
		localStorage.setItem("Slot0_Custom_Checkbox1_Enabled", CC1Enabled);
		localStorage.setItem("Slot0_Custom_Checkbox2_Enabled", CC2Enabled);
		localStorage.setItem("Slot0_Custom_Checkbox3_Enabled", CC3Enabled);
		
		// CharViz Stuff
		var charVizEnabled = localStorage.getItem("CharViz_Enabled");
		if (charVizEnabled === "Yes") {
			
			var topwear = localStorage.getItem("Slot5_CharViz_Topwear");
			var bottomwear = localStorage.getItem("Slot5_CharViz_Bottomwear");
			var armwear = localStorage.getItem("Slot5_CharViz_Armwear");
			var legwear = localStorage.getItem("Slot5_CharViz_Legwear");	
			var underwear = localStorage.getItem("Slot5_CharViz_Underwear");
			var accessories = localStorage.getItem("Slot5_CharViz_Accessories");
			
			if (topwear == null) 		{	topwear = "None"; 		}
			if (bottomwear == null) 	{	bottomwear = "None"; 	}
			if (armwear == null) 		{	armwear = "None"; 		}
			if (legwear == null) 		{	legwear = "None"; 		}
			if (underwear == null) 		{	underwear = "None"; 	}
			if (accessories == null) 	{	accessories = "None"; 	}
			
			localStorage.setItem("Slot0_CharViz_Topwear", topwear);
			localStorage.setItem("Slot0_CharViz_Bottomwear", bottomwear);
			localStorage.setItem("Slot0_CharViz_Armwear", armwear);
			localStorage.setItem("Slot0_CharViz_Legwear", legwear);
			localStorage.setItem("Slot0_CharViz_Underwear", underwear);
			localStorage.setItem("Slot0_CharViz_Accessories", accessories);
			
			// Character colors
			
			var primaryCharColor = localStorage.getItem("Slot5_Primary_Character_Color");
			var secondaryCharColor = localStorage.getItem("Slot5_Secondary_Character_Color");
			var tertiaryCharColor = localStorage.getItem("Slot5_Tertiary_Character_Color");
			var markingsCharColor = localStorage.getItem("Slot5_Markings_Character_Color");
			var leftEyeCharColor = localStorage.getItem("Slot5_LeftEye_Character_Color");
			var rightEyeCharColor = localStorage.getItem("Slot5_RightEye_Character_Color");
			var hairCharColor = localStorage.getItem("Slot5_Hair_Character_Color");
			
			localStorage.setItem("Slot0_Primary_Character_Color", primaryCharColor);
			localStorage.setItem("Slot0_Secondary_Character_Color", secondaryCharColor);
			localStorage.setItem("Slot0_Tertiary_Character_Color", tertiaryCharColor);
			localStorage.setItem("Slot0_Markings_Character_Color", markingsCharColor);
			localStorage.setItem("Slot0_LeftEye_Character_Color", leftEyeCharColor);
			localStorage.setItem("Slot0_RightEye_Character_Color", rightEyeCharColor);
			localStorage.setItem("Slot0_Hair_Character_Color", hairCharColor);
			
			// Outfit colors
			
			var primaryTopwearColor = localStorage.getItem("Slot5_Topwear_Primary_Clothing_Color");
			var secondaryTopwearColor = localStorage.getItem("Slot5_Topwear_Secondary_Clothing_Color");
			var primaryBottomwearColor = localStorage.getItem("Slot5_Bottomwear_Primary_Clothing_Color");
			var secondaryBottomwearColor = localStorage.getItem("Slot5_Bottomwear_Secondary_Clothing_Color");
			var primaryArmearColor = localStorage.getItem("Slot5_Armwear_Primary_Clothing_Color");
			var secondaryArmwearColor = localStorage.getItem("Slot5_Armwear_Secondary_Clothing_Color");
			var primaryLegwearColor = localStorage.getItem("Slot5_Legwear_Primary_Clothing_Color");
			var secondaryLegwearColor = localStorage.getItem("Slot5_Legwear_Secondary_Clothing_Color");
			var primaryUnderwearColor = localStorage.getItem("Slot5_Underwear_Primary_Clothing_Color");
			var secondaryUnderwearColor = localStorage.getItem("Slot5_Underwear_Secondary_Clothing_Color");
			
			localStorage.setItem("Slot0_Topwear_Primary_Clothing_Color", primaryTopwearColor);
			localStorage.setItem("Slot0_Topwear_Secondary_Clothing_Color", secondaryTopwearColor);
			localStorage.setItem("Slot0_Bottomwear_Primary_Clothing_Color", primaryTopwearColor);
			localStorage.setItem("Slot0_Bottomwear_Secondary_Clothing_Color", secondaryTopwearColor);
			localStorage.setItem("Slot0_Armwear_Primary_Clothing_Color", primaryTopwearColor);
			localStorage.setItem("Slot0_Armwear_Secondary_Clothing_Color", secondaryTopwearColor);
			localStorage.setItem("Slot0_Legwear_Primary_Clothing_Color", primaryTopwearColor);
			localStorage.setItem("Slot0_Legwear_Secondary_Clothing_Color", secondaryTopwearColor);
			localStorage.setItem("Slot0_Underwear_Primary_Clothing_Color", primaryTopwearColor);
			localStorage.setItem("Slot0_Underwear_Secondary_Clothing_Color", secondaryTopwearColor);
			
			// Blush
			
			var isBlushing = localStorage.getItem("Slot5_Character_Blushing");
			localStorage.setItem("CharViz_Character_Blushing", isBlushing);
			
			initializeCharViz();
			
		}
		
		loadSliderSettings();
		loadCustomSlidersValuesOnStartup1("Yes");
		loadCustomSlidersValuesOnStartup2("Yes");
		loadCustomSlidersValuesOnStartup3("Yes");
		loadCustomSlidersValuesOnStartup4("Yes");
		loadCustomSlidersValuesOnStartup5("Yes");
		loadCustomCheckboxesOnStartup();
		
		var presetName = localStorage.getItem("Slot5_Preset_Name");
		document.getElementById("settingsLoadedPopup").style.display = "block";	
		document.getElementById('settingsLoadedPopup').innerHTML = ">Preset Loaded:" + " " + presetName;
		saveSettingsSlot0();
		setTimeout(hideLoadedPopup, 4000);	
		}
	}
}