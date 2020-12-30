function exportAppStatus() {
	// Slider values
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
	
	// Custom slider values
	var custom1 = mySlider17.getValue();
	var custom2 = mySlider18.getValue();
	var custom3 = mySlider19.getValue();
	var custom4 = mySlider24.getValue();
	var custom5 = mySlider25.getValue();
	
	// Options
	var species = document.getElementById("speciesCurrent").innerHTML;
	var inanimateObject = document.getElementById("inanimateObjectsCurrent").innerHTML;
	var cockType = document.getElementById("cockTypeCurrent").innerHTML;
	var hairColor = localStorage.getItem("Slot0_Hair_Color");
	var swatchColor = localStorage.getItem("Slot0_Swatch_Color");
	var sex = localStorage.getItem("Slot0_Sex");
	var thirdSex = localStorage.getItem("Slot0_Third_Sex");
	
	// Checkboxes
	var tickbox1 = document.getElementById("adaptClothingCheckbox");
	if (tickbox1.checked)	{	var tickbox1 = "Yes"	}
	else 					{	var tickbox1 = "No"		}
		
	var tickbox2 = document.getElementById("genitalsPenisCheckbox");
	if (tickbox2.checked)	{	var tickbox2 = "Yes"	}
	else 					{	var tickbox2 = "No"		}
		
	var tickbox3 = document.getElementById("genitalsVaginaCheckbox");
	if (tickbox3.checked)	{	var tickbox3 = "Yes"	}
	else 					{	var tickbox3 = "No"		}
		
	var tickbox4 = document.getElementById("pregnancyLockCheckbox");
	if (tickbox4.checked)	{	var tickbox4 = "Yes"	}
	else 					{	var tickbox4 = "No"		}
	
	// Custom sliders names
	var leftTextCustom1 = document.getElementById("textinmenuLeftCS1").innerText;
	var centerTextCustom1 = document.getElementById("textinmenuCenterCS1").innerText;
	var rightTextCustom1 = document.getElementById("textinmenuRightCS1").innerText;
	
	var leftTextCustom2 = document.getElementById("textinmenuLeftCS2").innerText;
	var centerTextCustom2 = document.getElementById("textinmenuCenterCS2").innerText;
	var rightTextCustom2 = document.getElementById("textinmenuRightCS2").innerText;
	
	var leftTextCustom3 = document.getElementById("textinmenuLeftCS3").innerText;
	var centerTextCustom3 = document.getElementById("textinmenuCenterCS3").innerText;
	var rightTextCustom3 = document.getElementById("textinmenuRightCS3").innerText;
	
	var leftTextCustom4 = document.getElementById("textinmenuLeftCS4").innerText;
	var centerTextCustom4 = document.getElementById("textinmenuCenterCS4").innerText;
	var rightTextCustom4 = document.getElementById("textinmenuRightCS4").innerText;
	
	var leftTextCustom5 = document.getElementById("textinmenuLeftCS5").innerText;
	var centerTextCustom5 = document.getElementById("textinmenuCenterCS5").innerText;
	var rightTextCustom5 = document.getElementById("textinmenuRightCS5").innerText;
	
	// Custom Checkboxes
	
	var CC1label = localStorage.getItem("Slot0_Custom_Checkbox1_Label");
	var CC1value1 = localStorage.getItem("Slot0_Custom_Checkbox1_Value1");
	var CC1value2 = localStorage.getItem("Slot0_Custom_Checkbox1_Value2");
	var CC1ticked1 = localStorage.getItem("Slot0_Custom_Checkbox1_Value1_Ticked");
	var CC1ticked2 = localStorage.getItem("Slot0_Custom_Checkbox1_Value2_Ticked");
	
	var CC2label = localStorage.getItem("Slot0_Custom_Checkbox2_Label");
	var CC2value1 = localStorage.getItem("Slot0_Custom_Checkbox2_Value1");
	var CC2value2 = localStorage.getItem("Slot0_Custom_Checkbox2_Value2");
	var CC2ticked1 = localStorage.getItem("Slot0_Custom_Checkbox2_Value1_Ticked");
	var CC2ticked2 = localStorage.getItem("Slot0_Custom_Checkbox2_Value2_Ticked");
	
	var CC3label = localStorage.getItem("Slot0_Custom_Checkbox3_Label");
	var CC3value1 = localStorage.getItem("Slot0_Custom_Checkbox3_Value1");
	var CC3value2 = localStorage.getItem("Slot0_Custom_Checkbox3_Value2");
	var CC3ticked1 = localStorage.getItem("Slot0_Custom_Checkbox3_Value1_Ticked");
	var CC3ticked2 = localStorage.getItem("Slot0_Custom_Checkbox3_Value2_Ticked");
	
	// Options/sliders visibility
	
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
	var isCS1Enabled = localStorage.getItem("Custom_Slider1_Enabled");
	var isCS2Enabled = localStorage.getItem("Custom_Slider2_Enabled");
	var isCS3Enabled = localStorage.getItem("Custom_Slider3_Enabled");
	var isCS4Enabled = localStorage.getItem("Custom_Slider4_Enabled");
	var isCS5Enabled = localStorage.getItem("Custom_Slider5_Enabled");
	var isCC1Enabled = localStorage.getItem("Slot0_Custom_Checkbox1_Enabled");
	var isCC2Enabled = localStorage.getItem("Slot0_Custom_Checkbox2_Enabled");
	var isCC3Enabled = localStorage.getItem("Slot0_Custom_Checkbox3_Enabled");
	
	// CharViz stuff
	// Clothes
	
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

	// Character colors
		
	var primaryCharColor = localStorage.getItem("Slot0_Primary_Character_Color");
	var secondaryCharColor = localStorage.getItem("Slot0_Secondary_Character_Color");
	var tertiaryCharColor = localStorage.getItem("Slot0_Tertiary_Character_Color");
	var markingsCharColor = localStorage.getItem("Slot0_Markings_Character_Color");
	var leftEyeCharColor = localStorage.getItem("Slot0_LeftEye_Character_Color");
	var rightEyeCharColor = localStorage.getItem("Slot0_RightEye_Character_Color");
	var hairCharColor = localStorage.getItem("Slot0_Hair_Character_Color");

	// Outfit colors
	
	var primaryTopwearColor = localStorage.getItem("Slot0_Topwear_Primary_Clothing_Color");
	var secondaryTopwearColor = localStorage.getItem("Slot0_Topwear_Secondary_Clothing_Color");
	var primaryBottomwearColor = localStorage.getItem("Slot0_Bottomwear_Primary_Clothing_Color");
	var secondaryBottomwearColor = localStorage.getItem("Slot0_Bottomwear_Secondary_Clothing_Color");
	var primaryArmearColor = localStorage.getItem("Slot0_Armwear_Primary_Clothing_Color");
	var secondaryArmwearColor = localStorage.getItem("Slot0_Armwear_Secondary_Clothing_Color");
	var primaryLegwearColor = localStorage.getItem("Slot0_Legwear_Primary_Clothing_Color");
	var secondaryLegwearColor = localStorage.getItem("Slot0_Legwear_Secondary_Clothing_Color");
	var primaryUnderwearColor = localStorage.getItem("Slot0_Underwear_Primary_Clothing_Color");
	var secondaryUnderwearColor = localStorage.getItem("Slot0_Underwear_Secondary_Clothing_Color");

	// Blush
			
	var isBlushing = localStorage.getItem("Slot0_Character_Blushing");
		
	var obj = {
    bodyType1: bodyType1,
	bodyType2: bodyType2,
	bodyType3: bodyType3,
	hips: hips,
	genitalSize: genitalSize,
	fluffiness: fluffiness,
	libido: libido,
	domsub: domsub,
	sensitivity: sensitivity,
	assertiveShy: assertiveShy,
	breastSizeMale: breastSizeMale,
	breastSizeFemale: breastSizeFemale,
    buttSize: buttSize,
	bellySize: bellySize,
	bellyShape: bellyShape,
	intelligence: intelligence,
	hairLenght: hairLenght,
	feralAnthro: feralAnthro,
	fertility: fertility,
	custom1: custom1,
	custom2: custom2,
	custom3: custom3,
	custom4: custom4,
	custom5: custom5,
	species: species,
	inanimateObject: inanimateObject,
	cockType: cockType,
	hairColor: hairColor,
	swatchColor: swatchColor,
	sex: sex,
	thirdSex: thirdSex,
	tickbox1: tickbox1,
	tickbox2: tickbox2,
	tickbox3: tickbox3,
	tickbox4: tickbox4,
	leftTextCustom1: leftTextCustom1,
	leftTextCustom2: leftTextCustom2,
	leftTextCustom3: leftTextCustom3,
	leftTextCustom4: leftTextCustom4,
	leftTextCustom5: leftTextCustom5,
	centerTextCustom1: centerTextCustom1,
	centerTextCustom2: centerTextCustom2,
	centerTextCustom3: centerTextCustom3,
	centerTextCustom4: centerTextCustom4,
	centerTextCustom5: centerTextCustom5,
	rightTextCustom1: rightTextCustom1,
	rightTextCustom2: rightTextCustom2,
	rightTextCustom3: rightTextCustom3,
	rightTextCustom4: rightTextCustom4,
	rightTextCustom5: rightTextCustom5,
	CC1label: CC1label,
	CC2label: CC2label,
	CC3label: CC3label,
	CC1value1: CC1value1,
	CC2value1: CC2value1,
	CC3value1: CC3value1,
	CC1value2: CC1value2,
	CC2value2: CC2value2,
	CC3value2: CC3value2,
	CC1ticked1: CC1ticked1,
	CC2ticked1: CC2ticked1,
	CC3ticked1: CC3ticked1,
	CC1ticked2: CC1ticked2,
	CC2ticked2: CC2ticked2,
	CC3ticked2: CC3ticked2,	
	buttSizeSliderEnabled: buttSizeSliderEnabled,
	bellySizeSliderEnabled: bellySizeSliderEnabled,
	bellyShapeSliderEnabled: bellyShapeSliderEnabled,
	hipsSliderEnabled: hipsSliderEnabled,
	genitalSizeSliderEnabled: genitalSizeSliderEnabled,
	cockTypeMenuEnabled: cockTypeMenuEnabled,
	libidoSliderEnabled: libidoSliderEnabled,
	sensitivitySliderEnabled: sensitivitySliderEnabled,
	demeanorSliderEnabled: demeanorSliderEnabled,
	positionPrefSliderEnabled: positionPrefSliderEnabled,
	intelligenceSliderEnabled: intelligenceSliderEnabled,
	fluffinessSliderEnabled: fluffinessSliderEnabled,
	hairLenghtSliderEnabled: hairLenghtSliderEnabled,
	feralAnthroSliderEnabled: feralAnthroSliderEnabled,
	hairColorMenuEnabled: hairColorMenuEnabled,
	fertilitySliderEnabled: fertilitySliderEnabled,
	genitalsMenuEnabled: genitalsMenuEnabled,
	speciesMenuEnabled: speciesMenuEnabled,
	sexMenuEnabled: sexMenuEnabled,
	acMenuEnabled: acMenuEnabled,
	mascFemSliderEnabled: mascFemSliderEnabled,
	thinThiccSliderEnabled: thinThiccSliderEnabled,
	smolTallSliderEnabled: smolTallSliderEnabled,
	inanimateObjectsMenuEnabled: inanimateObjectsMenuEnabled,
	isCS1Enabled: isCS1Enabled,
	isCS2Enabled: isCS2Enabled,
	isCS3Enabled: isCS3Enabled,
	isCS4Enabled: isCS4Enabled,
	isCS5Enabled: isCS5Enabled,
	isCC1Enabled: isCC1Enabled,
	isCC2Enabled: isCC2Enabled,
	isCC3Enabled: isCC3Enabled,
	topwear: topwear,
	bottomwear: bottomwear,
	armwear: armwear,
	legwear: legwear,
	underwear: underwear,
	accessories: accessories,
	primaryCharColor: primaryCharColor,
	secondaryCharColor: secondaryCharColor,
	tertiaryCharColor: tertiaryCharColor,
	markingsCharColor: markingsCharColor,
	leftEyeCharColor: leftEyeCharColor,
	rightEyeCharColor: rightEyeCharColor,
	hairCharColor: hairCharColor,	
	primaryTopwearColor: primaryTopwearColor,
	secondaryTopwearColor: secondaryTopwearColor,
	primaryBottomwearColor: primaryBottomwearColor,
	secondaryBottomwearColor: secondaryBottomwearColor,
	primaryArmearColor: primaryArmearColor,
	secondaryArmwearColor: secondaryArmwearColor,
	primaryLegwearColor: primaryLegwearColor,
	secondaryLegwearColor: secondaryLegwearColor,
	primaryUnderwearColor: primaryUnderwearColor,
	secondaryUnderwearColor: secondaryUnderwearColor,
	isBlushing: isBlushing,
	};
	
	var json = JSON.stringify(obj);
	
	document.getElementById('appStatus').innerHTML = json;
}

function importAppStatus() {
	var lock = document.getElementById("lockClosed");
	if (lock.style.display === "block") {
		document.getElementById("unblockSettingsOkayContainer").style.display='block'; 
		document.getElementById("unblockSettingsOkay").style.display='block'; 
		document.getElementById("unblockSettingsMessage").style.display='block'; 
		document.getElementById("errorMessageContainer").style.display='block'; 
	}
	else {
	var data = document.getElementById("importAppStatusTextField").value;	
	var obj = JSON.parse(data);
	
	mySlider6.setValue(obj.bodyType1);
	mySlider5.setValue(obj.bodyType2);
	mySlider4.setValue(obj.bodyType3);
	mySlider3.setValue(obj.hips);
	mySlider2.setValue(obj.genitalSize);
	mySlider.setValue(obj.fluffiness);
	mySlider7.setValue(obj.libido);
	mySlider10.setValue(obj.domsub);
	mySlider11.setValue(obj.sensitivity);
	mySlider12.setValue(obj.assertiveShy);
	mySlider9.setValue(obj.breastSizeMale);
	mySlider8.setValue(obj.breastSizeFemale);
	mySlider13.setValue(obj.buttSize);
	mySlider14.setValue(obj.bellySize);
	mySlider15.setValue(obj.bellyShape);
	mySlider16.setValue(obj.intelligence);
	mySlider20.setValue(obj.hairLenght);
	mySlider22.setValue(obj.feralAnthro);
	mySlider23.setValue(obj.fertility);
	
	mySlider17.setValue(obj.custom1);
	mySlider18.setValue(obj.custom2);
	mySlider19.setValue(obj.custom3);
	mySlider24.setValue(obj.custom4);
	mySlider25.setValue(obj.custom5);
	
	document.getElementById('speciesCurrent').innerHTML = obj.species;
	document.getElementById('inanimateObjectsCurrent').innerHTML = obj.inanimateObject;
	document.getElementById('cockTypeCurrent').innerHTML = obj.cockType;
	document.getElementById('hairColorCurrent').innerHTML = obj.hairColor;
	document.getElementById('hairColorSwatch').style.backgroundColor = obj.swatchColor;
	
	if (obj.thirdSex != null) 	{	document.getElementById('thirdSexValue').innerHTML = obj.thirdSex;
									localStorage.setItem("Slot0_Third_Sex", obj.thirdSex); 				}
	
	if (obj.sex === "Male") 			{	document.getElementById("radiobuttonMale").checked = true;		}
	else if (obj.sex === "Female") 		{	document.getElementById("radiobuttonFemale").checked = true;	}
	else if (obj.sex === "Other") 		{	document.getElementById("radiobuttonOther").checked = true;		}
	
	if (obj.tickbox1 === "Yes") 	{	document.getElementById("adaptClothingCheckbox").checked = true;	}
	else							{	document.getElementById("adaptClothingCheckbox").checked = false;	}

	if (obj.tickbox2 === "Yes") 	{	document.getElementById("genitalsPenisCheckbox").checked = true;	}
	else							{	document.getElementById("genitalsPenisCheckbox").checked = false;	}

	if (obj.tickbox3 === "Yes") 	{	document.getElementById("genitalsVaginaCheckbox").checked = true;	}
	else							{	document.getElementById("genitalsVaginaCheckbox").checked = false;	}

	if (obj.tickbox4 === "Yes") 	{	document.getElementById("pregnancyLockCheckbox").checked = true;	}
	else							{	document.getElementById("pregnancyLockCheckbox").checked = false;	}

	document.getElementById('textinmenuLeftCS1').innerHTML = obj.leftTextCustom1;	
	document.getElementById('textinmenuCenterCS1').innerHTML = obj.centerTextCustom1;	
	document.getElementById('textinmenuRightCS1').innerHTML = obj.rightTextCustom1;	
		
	document.getElementById('textinmenuLeftCS2').innerHTML = obj.leftTextCustom2;	
	document.getElementById('textinmenuCenterCS2').innerHTML = obj.centerTextCustom2;	
	document.getElementById('textinmenuRightCS2').innerHTML = obj.rightTextCustom2;
		
	document.getElementById('textinmenuLeftCS3').innerHTML = obj.leftTextCustom3;
	document.getElementById('textinmenuCenterCS3').innerHTML = obj.centerTextCustom3;
	document.getElementById('textinmenuRightCS3').innerHTML = obj.rightTextCustom3;
	
	document.getElementById('textinmenuLeftCS4').innerHTML = obj.leftTextCustom4;
	document.getElementById('textinmenuCenterCS4').innerHTML = obj.centerTextCustom4;
	document.getElementById('textinmenuRightCS4').innerHTML = obj.rightTextCustom4;
	
	document.getElementById('textinmenuLeftCS5').innerHTML = obj.leftTextCustom5;
	document.getElementById('textinmenuCenterCS5').innerHTML = obj.centerTextCustom5;
	document.getElementById('textinmenuRightCS5').innerHTML = obj.rightTextCustom5;
	
	// Custom Checkboxes
	
	localStorage.setItem("Slot0_Custom_Checkbox1_Label", obj.CC1label);
	localStorage.setItem("Slot0_Custom_Checkbox1_Value1", obj.CC1value1);
	localStorage.setItem("Slot0_Custom_Checkbox1_Value2", obj.CC1value2);
	localStorage.setItem("Slot0_Custom_Checkbox1_Value1_Ticked", obj.CC1ticked1);
	localStorage.setItem("Slot0_Custom_Checkbox1_Value2_Ticked", obj.CC1ticked2);
		
	localStorage.setItem("Slot0_Custom_Checkbox2_Label", obj.CC2label);
	localStorage.setItem("Slot0_Custom_Checkbox2_Value1", obj.CC2value1);
	localStorage.setItem("Slot0_Custom_Checkbox2_Value2", obj.CC2value2);
	localStorage.setItem("Slot0_Custom_Checkbox2_Value1_Ticked", obj.CC2ticked1);
	localStorage.setItem("Slot0_Custom_Checkbox2_Value2_Ticked", obj.CC2ticked2);
		
	localStorage.setItem("Slot0_Custom_Checkbox3_Label", obj.CC3label);
	localStorage.setItem("Slot0_Custom_Checkbox3_Value1", obj.CC3value1);
	localStorage.setItem("Slot0_Custom_Checkbox3_Value2",  obj.CC3value2);
	localStorage.setItem("Slot0_Custom_Checkbox3_Value1_Ticked", obj.CC3ticked1);
	localStorage.setItem("Slot0_Custom_Checkbox3_Value2_Ticked", obj.CC3ticked2);
	
	localStorage.setItem("Butt_Size_Slider_Enabled", obj.buttSizeSliderEnabled);	
	localStorage.setItem("Belly_Size_Slider_Enabled", obj.bellySizeSliderEnabled);		
	localStorage.setItem("Belly_Shape_Slider_Enabled", obj.bellyShapeSliderEnabled);		
	localStorage.setItem("Hips_Slider_Enabled", obj.hipsSliderEnabled);			
	localStorage.setItem("Genital_Size_Slider_Enabled", obj.genitalSizeSliderEnabled);	
	localStorage.setItem("Cock_Type_Menu_Enabled", obj.cockTypeMenuEnabled);			
	localStorage.setItem("Libido_Slider_Enabled", obj.libidoSliderEnabled);			
	localStorage.setItem("Sensitivity_Slider_Enabled", obj.sensitivitySliderEnabled);		
	localStorage.setItem("Demeanor_Slider_Enabled", obj.demeanorSliderEnabled);		
	localStorage.setItem("Postion_Pref_Slider_Enabled", obj.positionPrefSliderEnabled);	
	localStorage.setItem("Intelligence_Slider_Enabled", obj.intelligenceSliderEnabled);	
	localStorage.setItem("Fluffiness_Slider_Enabled", obj.fluffinessSliderEnabled);		
	localStorage.setItem("Hair_Lenght_Slider_Enabled", obj.hairLenghtSliderEnabled);			
	localStorage.setItem("Feral_Anthro_Slider_Enabled", obj.feralAnthroSliderEnabled);	
	localStorage.setItem("Hair_Color_Menu_Enabled", obj.hairColorMenuEnabled);		
	localStorage.setItem("Fertility_Slider_Enabled", obj.fertilitySliderEnabled);		
	localStorage.setItem("Genitals_Menu_Enabled", obj.genitalsMenuEnabled);			
	localStorage.setItem("Species_Menu_Enabled", obj.speciesMenuEnabled);			
	localStorage.setItem("Sex_Menu_Enabled", obj.sexMenuEnabled);				
	localStorage.setItem("AC_Menu_Enabled", obj.acMenuEnabled);				
	localStorage.setItem("MascFem_Slider_Enabled", obj.mascFemSliderEnabled);			
	localStorage.setItem("ThinThicc_Slider_Enabled", obj.thinThiccSliderEnabled);		
	localStorage.setItem("SmolTall_Slider_Enabled", obj.smolTallSliderEnabled);		
	localStorage.setItem("Inanimate_Objects_Enabled", obj.inanimateObjectsMenuEnabled);		
	localStorage.setItem("Custom_Slider1_Enabled", obj.isCS1Enabled);			
	localStorage.setItem("Custom_Slider2_Enabled", obj.isCS2Enabled);		
	localStorage.setItem("Custom_Slider3_Enabled", obj.isCS3Enabled);	
	localStorage.setItem("Custom_Slider4_Enabled", obj.isCS4Enabled);	
	localStorage.setItem("Custom_Slider5_Enabled", obj.isCS5Enabled);
	localStorage.setItem("Slot0_Custom_Checkbox1_Enabled", obj.isCC1Enabled);
	localStorage.setItem("Slot0_Custom_Checkbox2_Enabled", obj.isCC2Enabled);
	localStorage.setItem("Slot0_Custom_Checkbox3_Enabled", obj.isCC3Enabled);
	
	var charVizEnabled = localStorage.getItem("CharViz_Enabled");
	if (charVizEnabled === "Yes") {
		
		localStorage.setItem("Slot0_CharViz_Topwear", obj.topwear);
		localStorage.setItem("Slot0_CharViz_Bottomwear", obj.bottomwear);
		localStorage.setItem("Slot0_CharViz_Armwear", obj.armwear);
		localStorage.setItem("Slot0_CharViz_Legwear", obj.legwear);
		localStorage.setItem("Slot0_CharViz_Underwear", obj.underwear);
		localStorage.setItem("Slot0_CharViz_Accessories", obj.accessories);
		
		// Character colors
		
		localStorage.setItem("Slot0_Primary_Character_Color", obj.primaryCharColor);
		localStorage.setItem("Slot0_Secondary_Character_Color", obj.secondaryCharColor);
		localStorage.setItem("Slot0_Tertiary_Character_Color", obj.tertiaryCharColor);
		localStorage.setItem("Slot0_Markings_Character_Color", obj.markingsCharColor);
		localStorage.setItem("Slot0_LeftEye_Character_Color", obj.leftEyeCharColor);
		localStorage.setItem("Slot0_RightEye_Character_Color", obj.rightEyeCharColor);
		localStorage.setItem("Slot0_Hair_Character_Color", obj.hairCharColor);
		
		// Outfit colors
		
		localStorage.setItem("Slot0_Topwear_Primary_Clothing_Color", obj.primaryTopwearColor);
		localStorage.setItem("Slot0_Topwear_Secondary_Clothing_Color", obj.secondaryTopwearColor);
		localStorage.setItem("Slot0_Bottomwear_Primary_Clothing_Color", obj.primaryTopwearColor);
		localStorage.setItem("Slot0_Bottomwear_Secondary_Clothing_Color", obj.secondaryTopwearColor);
		localStorage.setItem("Slot0_Armwear_Primary_Clothing_Color", obj.primaryTopwearColor);
		localStorage.setItem("Slot0_Armwear_Secondary_Clothing_Color", obj.secondaryTopwearColor);
		localStorage.setItem("Slot0_Legwear_Primary_Clothing_Color", obj.primaryTopwearColor);
		localStorage.setItem("Slot0_Legwear_Secondary_Clothing_Color", obj.secondaryTopwearColor);
		localStorage.setItem("Slot0_Underwear_Primary_Clothing_Color", obj.primaryTopwearColor);
		localStorage.setItem("Slot0_Underwear_Secondary_Clothing_Color", obj.secondaryTopwearColor);
		
		// Blush
		
		localStorage.setItem("CharViz_Character_Blushing", obj.isBlushing);

		initializeCharViz();
	}
	
	document.getElementById("appStatusImportMessage").innerHTML = "Imported successfully!";
	document.getElementById("appStatusImportMessage").style.color = "#29a329";
	
	loadSliderSettings();
	loadCustomSlidersValuesOnStartup1("Yes");
	loadCustomSlidersValuesOnStartup2("Yes");
	loadCustomSlidersValuesOnStartup3("Yes");
	loadCustomSlidersValuesOnStartup4("Yes");
	loadCustomSlidersValuesOnStartup5("Yes");
	loadCustomCheckboxesOnStartup();
	
	saveSettingsSlot0();
	
	setTimeout(hideAppStatusImportMessage, 1500);
	}
}

function hideAppStatusImportMessage() {
	document.getElementById("appStatusImportMessage").innerHTML = "Insert app settings and click Import";
	document.getElementById("appStatusImportMessage").style.color = "#fff";
}