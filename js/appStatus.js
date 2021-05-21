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
	var fertility = mySlider23.getValue();
	
	// Options
	var species = document.getElementById("speciesCurrent").innerHTML;
	var inanimateObject = document.getElementById("inanimateObjectsCurrent").innerHTML;
	var cockType = document.getElementById("cockTypeCurrent").innerHTML;
	var sex = localStorage.getItem("Slot0_Sex");
	var thirdSex = localStorage.getItem("Slot0_Third_Sex");
	
	// Checkboxes
	var tickbox1 = document.getElementById("adaptClothingCheckbox");
	if (tickbox1.checked)	{	tickbox1 = "Yes"	}
	else 					{	tickbox1 = "No"		}
		
	var tickbox2 = document.getElementById("genitalsPenisCheckbox");
	if (tickbox2.checked)	{	tickbox2 = "Yes"	}
	else 					{	tickbox2 = "No"		}
		
	var tickbox3 = document.getElementById("genitalsVaginaCheckbox");
	if (tickbox3.checked)	{	tickbox3 = "Yes"	}
	else 					{	tickbox3 = "No"		}
		
	var tickbox4 = document.getElementById("pregnancyLockCheckbox");
	if (tickbox4.checked)	{	tickbox4 = "Yes"	}
	else 					{	tickbox4 = "No"		}
	
	// Custom stuff
	// Custom sliders
	// Values
	var custom1 = CustomSliderNo1.getValue();
	var custom2 = CustomSliderNo2.getValue();
	var custom3 = CustomSliderNo3.getValue();
	var custom4 = CustomSliderNo4.getValue();
	var custom5 = CustomSliderNo5.getValue();
	var custom6 = CustomSliderNo6.getValue();
	var custom7 = CustomSliderNo7.getValue();
	var custom8 = CustomSliderNo8.getValue();
	var custom9 = CustomSliderNo9.getValue();
	var custom10 = CustomSliderNo10.getValue();
	
	// Labels
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
	
	var leftTextCustom6 = document.getElementById("textinmenuLeftCS6").innerText;
	var centerTextCustom6 = document.getElementById("textinmenuCenterCS6").innerText;
	var rightTextCustom6 = document.getElementById("textinmenuRightCS6").innerText;
	
	var leftTextCustom7 = document.getElementById("textinmenuLeftCS7").innerText;
	var centerTextCustom7 = document.getElementById("textinmenuCenterCS7").innerText;
	var rightTextCustom7 = document.getElementById("textinmenuRightCS7").innerText;
	
	var leftTextCustom8 = document.getElementById("textinmenuLeftCS8").innerText;
	var centerTextCustom8 = document.getElementById("textinmenuCenterCS8").innerText;
	var rightTextCustom8 = document.getElementById("textinmenuRightCS8").innerText;
	
	var leftTextCustom9 = document.getElementById("textinmenuLeftCS9").innerText;
	var centerTextCustom9 = document.getElementById("textinmenuCenterCS9").innerText;
	var rightTextCustom9 = document.getElementById("textinmenuRightCS9").innerText;
	
	var leftTextCustom10 = document.getElementById("textinmenuLeftCS10").innerText;
	var centerTextCustom10 = document.getElementById("textinmenuCenterCS10").innerText;
	var rightTextCustom10 = document.getElementById("textinmenuRightCS10").innerText;
	
	// Visibility	
	var isCS1Enabled = localStorage.getItem("Custom_Slider1_Enabled");
	var isCS2Enabled = localStorage.getItem("Custom_Slider2_Enabled");
	var isCS3Enabled = localStorage.getItem("Custom_Slider3_Enabled");
	var isCS4Enabled = localStorage.getItem("Custom_Slider4_Enabled");
	var isCS5Enabled = localStorage.getItem("Custom_Slider5_Enabled");
	var isCS6Enabled = localStorage.getItem("Custom_Slider6_Enabled");
	var isCS7Enabled = localStorage.getItem("Custom_Slider7_Enabled");
	var isCS8Enabled = localStorage.getItem("Custom_Slider8_Enabled");
	var isCS9Enabled = localStorage.getItem("Custom_Slider9_Enabled");
	var isCS10Enabled = localStorage.getItem("Custom_Slider10_Enabled");
	
	// Custom checkboxes
	// Labels, value names and state
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
	
	// Visibility
	var isCC1Enabled = localStorage.getItem("Slot0_Custom_Checkbox1_Enabled");
	var isCC2Enabled = localStorage.getItem("Slot0_Custom_Checkbox2_Enabled");
	var isCC3Enabled = localStorage.getItem("Slot0_Custom_Checkbox3_Enabled");
	
	// Custom radio inputs
	// Labels, value names and state
	var CRI1label = localStorage.getItem("Slot0_Custom_Radio_Input1_Label");
	var CRI1value1 = localStorage.getItem("Slot0_Custom_Radio_Input1_Value1");
	var CRI1value2 = localStorage.getItem("Slot0_Custom_Radio_Input1_Value2");
	var CRI1tickedvalue = localStorage.getItem("Slot0_Custom_Radio_Input1_Ticked_Value");
	
	var CRI2label = localStorage.getItem("Slot0_Custom_Radio_Input2_Label");
	var CRI2value1 = localStorage.getItem("Slot0_Custom_Radio_Input2_Value1");
	var CRI2value2 = localStorage.getItem("Slot0_Custom_Radio_Input2_Value2");
	var CRI2tickedvalue = localStorage.getItem("Slot0_Custom_Radio_Input2_Ticked_Value");
	
	var CRI3label = localStorage.getItem("Slot0_Custom_Radio_Input3_Label");
	var CRI3value1 = localStorage.getItem("Slot0_Custom_Radio_Input3_Value1");
	var CRI3value2 = localStorage.getItem("Slot0_Custom_Radio_Input3_Value2");
	var CRI3tickedvalue = localStorage.getItem("Slot0_Custom_Radio_Input3_Ticked_Value");
	
	// Visibility
	var isCRI1Enabled = localStorage.getItem("Slot0_Custom_Radio_Input1_Enabled");
	var isCRI2Enabled = localStorage.getItem("Slot0_Custom_Radio_Input2_Enabled");
	var isCRI3Enabled = localStorage.getItem("Slot0_Custom_Radio_Input3_Enabled");
	
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
	var fertilitySliderEnabled = localStorage.getItem("Fertility_Slider_Enabled");
	var genitalsMenuEnabled = localStorage.getItem("Genitals_Menu_Enabled");
	var speciesMenuEnabled = localStorage.getItem("Species_Menu_Enabled");
	var sexMenuEnabled = localStorage.getItem("Sex_Menu_Enabled");
	var acMenuEnabled = localStorage.getItem("AC_Menu_Enabled");
	var mascFemSliderEnabled = localStorage.getItem("MascFem_Slider_Enabled");
	var thinThiccSliderEnabled = localStorage.getItem("ThinThicc_Slider_Enabled");
	var smolTallSliderEnabled = localStorage.getItem("SmolTall_Slider_Enabled");
	var inanimateObjectsMenuEnabled = localStorage.getItem("Inanimate_Objects_Enabled");
	
	// CharViz stuff
	
	// Character parts
	var body = localStorage.getItem("Slot0_CharViz_Body");
	var head = localStorage.getItem("Slot0_CharViz_Head");
	var tail = localStorage.getItem("Slot0_CharViz_Tail");
	var wings = localStorage.getItem("Slot0_CharViz_Wings");
	var pupils = localStorage.getItem("Slot0_CharViz_Pupils");
	
	// Character patterns
	var secondary = localStorage.getItem("Slot0_CharViz_Secondary");
	var tertiary = localStorage.getItem("Slot0_CharViz_Tertiary");
	var markings = localStorage.getItem("Slot0_CharViz_Markings");
			
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
	var leftScleraCharColor = localStorage.getItem("Slot0_LeftSclera_Character_Color");
	var rightScleraCharColor = localStorage.getItem("Slot0_RightSclera_Character_Color");

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
	fertility: fertility,
	custom1: custom1,
	custom2: custom2,
	custom3: custom3,
	custom4: custom4,
	custom5: custom5,
	custom6: custom6,
	custom7: custom7,
	custom8: custom8,
	custom9: custom9,
	custom10: custom10,
	species: species,
	inanimateObject: inanimateObject,
	cockType: cockType,
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
	leftTextCustom6: leftTextCustom6,
	leftTextCustom7: leftTextCustom7,
	leftTextCustom8: leftTextCustom8,
	leftTextCustom9: leftTextCustom9,
	leftTextCustom10: leftTextCustom10,
	centerTextCustom1: centerTextCustom1,
	centerTextCustom2: centerTextCustom2,
	centerTextCustom3: centerTextCustom3,
	centerTextCustom4: centerTextCustom4,
	centerTextCustom5: centerTextCustom5,
	centerTextCustom6: centerTextCustom6,
	centerTextCustom7: centerTextCustom7,
	centerTextCustom8: centerTextCustom8,
	centerTextCustom9: centerTextCustom9,
	centerTextCustom10: centerTextCustom10,
	rightTextCustom1: rightTextCustom1,
	rightTextCustom2: rightTextCustom2,
	rightTextCustom3: rightTextCustom3,
	rightTextCustom4: rightTextCustom4,
	rightTextCustom5: rightTextCustom5,
	rightTextCustom6: rightTextCustom6,
	rightTextCustom7: rightTextCustom7,
	rightTextCustom8: rightTextCustom8,
	rightTextCustom9: rightTextCustom9,
	rightTextCustom10: rightTextCustom10,
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
	CRI1label: CRI1label,
	CRI2label: CRI2label,
	CRI3label: CRI3label,
	CRI1value1: CRI1value1,
	CRI2value1: CRI2value1,
	CRI3value1: CRI3value1,
	CRI1value2: CRI1value2,
	CRI2value2: CRI2value2,
	CRI3value2: CRI3value2,
	CRI1tickedvalue: CRI1tickedvalue,
	CRI2tickedvalue: CRI2tickedvalue,
	CRI3tickedvalue: CRI3tickedvalue,
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
	isCS6Enabled: isCS6Enabled,
	isCS7Enabled: isCS7Enabled,
	isCS8Enabled: isCS8Enabled,
	isCS9Enabled: isCS9Enabled,
	isCS10Enabled: isCS10Enabled,
	isCC1Enabled: isCC1Enabled,
	isCC2Enabled: isCC2Enabled,
	isCC3Enabled: isCC3Enabled,
	isCRI1Enabled: isCRI1Enabled,
	isCRI2Enabled: isCRI2Enabled,
	isCRI3Enabled: isCRI3Enabled,
	body: body,
	head: head,
	tail: tail,
	wings: wings,
	pupils: pupils,
	secondary: secondary,
	tertiary: tertiary,
	markings: markings,
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
	leftScleraCharColor: leftScleraCharColor,
	rightScleraCharColor: rightScleraCharColor,
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
	
	// Slider values
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
	mySlider23.setValue(obj.fertility);
	
	// Options
	document.getElementById('speciesCurrent').innerHTML = obj.species;
	document.getElementById('inanimateObjectsCurrent').innerHTML = obj.inanimateObject;
	document.getElementById('cockTypeCurrent').innerHTML = obj.cockType;
	
	if (obj.thirdSex != null) 	{	document.getElementById('thirdSexValue').innerHTML = obj.thirdSex;
									localStorage.setItem("Slot0_Third_Sex", obj.thirdSex); 				}
	
	if (obj.sex === "Male") 			{	document.getElementById("radiobuttonMale").checked = true;		}
	else if (obj.sex === "Female") 		{	document.getElementById("radiobuttonFemale").checked = true;	}
	else if (obj.sex === "Other") 		{	document.getElementById("radiobuttonOther").checked = true;		}
	localStorage.setItem("Slot0_Sex", obj.sex);
	
	// Checkboxes
	if (obj.tickbox1 === "Yes") 	{	document.getElementById("adaptClothingCheckbox").checked = true;	}
	else							{	document.getElementById("adaptClothingCheckbox").checked = false;	}

	if (obj.tickbox2 === "Yes") 	{	document.getElementById("genitalsPenisCheckbox").checked = true;	}
	else							{	document.getElementById("genitalsPenisCheckbox").checked = false;	}

	if (obj.tickbox3 === "Yes") 	{	document.getElementById("genitalsVaginaCheckbox").checked = true;	}
	else							{	document.getElementById("genitalsVaginaCheckbox").checked = false;	}

	if (obj.tickbox4 === "Yes") 	{	document.getElementById("pregnancyLockCheckbox").checked = true;	}
	else							{	document.getElementById("pregnancyLockCheckbox").checked = false;	}
	
	// Custom stuff
	// Custom sliders
	// Values
	localStorage.setItem("Slot0_Custom_Slider1_Value", obj.custom1);
	localStorage.setItem("Slot0_Custom_Slider2_Value", obj.custom2);
	localStorage.setItem("Slot0_Custom_Slider3_Value", obj.custom3);
	localStorage.setItem("Slot0_Custom_Slider4_Value", obj.custom4);
	localStorage.setItem("Slot0_Custom_Slider5_Value", obj.custom5);
	localStorage.setItem("Slot0_Custom_Slider6_Value", obj.custom6);
	localStorage.setItem("Slot0_Custom_Slider7_Value", obj.custom7);
	localStorage.setItem("Slot0_Custom_Slider8_Value", obj.custom8);
	localStorage.setItem("Slot0_Custom_Slider9_Value", obj.custom9);
	localStorage.setItem("Slot0_Custom_Slider10_Value", obj.custom10);
	
	// Labels
	localStorage.setItem("Custom_Slider1_LeftText", obj.leftTextCustom1);
	localStorage.setItem("Custom_Slider1_CenterText", obj.centerTextCustom1);
	localStorage.setItem("Custom_Slider1_RightText", obj.rightTextCustom1);
	
	localStorage.setItem("Custom_Slider2_LeftText", obj.leftTextCustom2);
	localStorage.setItem("Custom_Slider2_CenterText", obj.centerTextCustom2);
	localStorage.setItem("Custom_Slider2_RightText", obj.rightTextCustom2);
	
	localStorage.setItem("Custom_Slider3_LeftText", obj.leftTextCustom3);
	localStorage.setItem("Custom_Slider3_CenterText", obj.centerTextCustom3);
	localStorage.setItem("Custom_Slider3_RightText", obj.rightTextCustom3);
	
	localStorage.setItem("Custom_Slider4_LeftText", obj.leftTextCustom4);
	localStorage.setItem("Custom_Slider4_CenterText", obj.centerTextCustom4);
	localStorage.setItem("Custom_Slider4_RightText", obj.rightTextCustom4);
	
	localStorage.setItem("Custom_Slider5_LeftText", obj.leftTextCustom5);
	localStorage.setItem("Custom_Slider5_CenterText", obj.centerTextCustom5);
	localStorage.setItem("Custom_Slider5_RightText", obj.rightTextCustom5);
	
	localStorage.setItem("Custom_Slider6_LeftText", obj.leftTextCustom6);
	localStorage.setItem("Custom_Slider6_CenterText", obj.centerTextCustom6);
	localStorage.setItem("Custom_Slider6_RightText", obj.rightTextCustom6);
	
	localStorage.setItem("Custom_Slider7_LeftText", obj.leftTextCustom7);
	localStorage.setItem("Custom_Slider7_CenterText", obj.centerTextCustom7);
	localStorage.setItem("Custom_Slider7_RightText", obj.rightTextCustom7);
	
	localStorage.setItem("Custom_Slider8_LeftText", obj.leftTextCustom8);
	localStorage.setItem("Custom_Slider8_CenterText", obj.centerTextCustom8);
	localStorage.setItem("Custom_Slider8_RightText", obj.rightTextCustom8);
	
	localStorage.setItem("Custom_Slider9_LeftText", obj.leftTextCustom9);
	localStorage.setItem("Custom_Slider9_CenterText", obj.centerTextCustom9);
	localStorage.setItem("Custom_Slider9_RightText", obj.rightTextCustom9);
	
	localStorage.setItem("Custom_Slider10_LeftText", obj.leftTextCustom10);
	localStorage.setItem("Custom_Slider10_CenterText", obj.centerTextCustom10);
	localStorage.setItem("Custom_Slider10_RightText", obj.rightTextCustom10);
	
	// Visibility
	localStorage.setItem("Custom_Slider1_Enabled", obj.isCS1Enabled);
	localStorage.setItem("Custom_Slider2_Enabled", obj.isCS2Enabled);
	localStorage.setItem("Custom_Slider3_Enabled", obj.isCS3Enabled);
	localStorage.setItem("Custom_Slider4_Enabled", obj.isCS4Enabled);
	localStorage.setItem("Custom_Slider5_Enabled", obj.isCS5Enabled);
	localStorage.setItem("Custom_Slider6_Enabled", obj.isCS6Enabled);
	localStorage.setItem("Custom_Slider7_Enabled", obj.isCS7Enabled);
	localStorage.setItem("Custom_Slider8_Enabled", obj.isCS8Enabled);
	localStorage.setItem("Custom_Slider9_Enabled", obj.isCS9Enabled);
	localStorage.setItem("Custom_Slider10_Enabled", obj.isCS10Enabled);
	
	// Custom checkboxes
	// Labels, value names and state	
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
	
	// Visibility
	localStorage.setItem("Slot0_Custom_Checkbox1_Enabled", obj.isCC1Enabled);
	localStorage.setItem("Slot0_Custom_Checkbox2_Enabled", obj.isCC2Enabled);
	localStorage.setItem("Slot0_Custom_Checkbox3_Enabled", obj.isCC3Enabled);
	
	// Custom radio inputs
	// Labels, value names and state	
	localStorage.setItem("Slot0_Custom_Radio_Input1_Label", obj.CRI1label);
	localStorage.setItem("Slot0_Custom_Radio_Input1_Value1", obj.CRI1value1);
	localStorage.setItem("Slot0_Custom_Radio_Input1_Value2", obj.CRI1value2);
	localStorage.setItem("Slot0_Custom_Radio_Input1_Value1_Ticked", obj.CRI1tickedvalue);
	
	localStorage.setItem("Slot0_Custom_Radio_Input2_Label", obj.CRI2label);
	localStorage.setItem("Slot0_Custom_Radio_Input2_Value1", obj.CRI2value1);
	localStorage.setItem("Slot0_Custom_Radio_Input2_Value2", obj.CRI2value2);
	localStorage.setItem("Slot0_Custom_Radio_Input2_Value1_Ticked", obj.CRI2tickedvalue);
	
	localStorage.setItem("Slot0_Custom_Radio_Input3_Label", obj.CRI3label);
	localStorage.setItem("Slot0_Custom_Radio_Input3_Value1", obj.CRI3value1);
	localStorage.setItem("Slot0_Custom_Radio_Input3_Value2", obj.CRI3value2);
	localStorage.setItem("Slot0_Custom_Radio_Input3_Value1_Ticked", obj.CRI3tickedvalue);
	
	// Visibility
	localStorage.setItem("Slot0_Custom_Radio_Input1_Enabled", obj.isCRI1Enabled);
	localStorage.setItem("Slot0_Custom_Radio_Input2_Enabled", obj.isCRI2Enabled);
	localStorage.setItem("Slot0_Custom_Radio_Input3_Enabled", obj.isCRI3Enabled);
	
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
	localStorage.setItem("Fertility_Slider_Enabled", obj.fertilitySliderEnabled);
	localStorage.setItem("Genitals_Menu_Enabled", obj.genitalsMenuEnabled);
	localStorage.setItem("Species_Menu_Enabled", obj.speciesMenuEnabled);
	localStorage.setItem("Sex_Menu_Enabled", obj.sexMenuEnabled);
	localStorage.setItem("AC_Menu_Enabled", obj.acMenuEnabled);
	localStorage.setItem("MascFem_Slider_Enabled", obj.mascFemSliderEnabled);
	localStorage.setItem("ThinThicc_Slider_Enabled", obj.thinThiccSliderEnabled);
	localStorage.setItem("SmolTall_Slider_Enabled", obj.smolTallSliderEnabled);
	localStorage.setItem("Inanimate_Objects_Enabled", obj.inanimateObjectsMenuEnabled);
	
	var charVizEnabled = localStorage.getItem("CharViz_Enabled");
	if (charVizEnabled === "Yes") {
		
		// Character parts
		localStorage.setItem("Slot0_CharViz_Body", obj.body);
		localStorage.setItem("Slot0_CharViz_Head", obj.head);
		localStorage.setItem("Slot0_CharViz_Tail", obj.tail);
		localStorage.setItem("Slot0_CharViz_Wings", obj.wings);
		localStorage.setItem("Slot0_CharViz_Pupils", obj.pupils);
			
		// Character patterns
		localStorage.setItem("Slot0_CharViz_Secondary", obj.secondary);
		localStorage.setItem("Slot0_CharViz_Tertiary", obj.tertiary);
		localStorage.setItem("Slot0_CharViz_Markings", obj.markings);
			
		// Clothes
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
		localStorage.setItem("Slot0_LeftSclera_Character_Color", obj.leftScleraCharColor);
		localStorage.setItem("Slot0_RightSclera_Character_Color", obj.rightScleraCharColor);
		
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
		
		initializeCharViz();
	}
	
	document.getElementById("appStatusImportMessage").innerHTML = "Imported successfully!";
	document.getElementById("appStatusImportMessage").style.color = "#29a329";
	
	loadSliderSettings();
	loadCustomSliders();
	loadCustomCheckboxes();
	loadCustomRadioInputs();
	
	saveSettingsSlot0();
	
	setTimeout(hideAppStatusImportMessage, 1500);
	}
}

function hideAppStatusImportMessage() {
	document.getElementById("appStatusImportMessage").innerHTML = "Insert app settings and click Import";
	document.getElementById("appStatusImportMessage").style.color = "#fff";
}