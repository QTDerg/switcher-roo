function saveSettings(x) {
	var species = document.getElementById("speciesCurrent").innerHTML;
	var inanimateObject = document.getElementById("inanimateObjectsCurrent").innerHTML;
	
	rbmale = document.getElementById("radiobuttonMale");
	rbfemale = document.getElementById("radiobuttonFemale");
	var sex;
	if (rbmale.checked) {
		sex = "Male"
	}
	else if (rbfemale.checked) {
		sex = "Female"
	}
	else {
		sex = document.getElementById("thirdSexValue").innerHTML;
	}
 
	var tickbox = document.getElementById("adaptClothingCheckbox");
	if (tickbox.checked) {
		tickbox = "Yes"
	}
	else {
		tickbox = "No"
	}
	
	var tickbox2 = document.getElementById("pregnancyLockCheckbox");
	if (tickbox2.checked) {
		tickbox2 = "Yes"
	}
	else {
		tickbox2 = "No"
	}
	
	var tickbox3 = document.getElementById("genitalsPenisCheckbox");
	if (tickbox3.checked) {
		tickbox3 = "Yes"
	}
	else {
		tickbox3 = "No"
	}
	
	var tickbox4 = document.getElementById("genitalsVaginaCheckbox");
	if (tickbox4.checked) {
		 tickbox4 = "Yes"
	}
	else {
		tickbox4 = "No"
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
	var fertility = mySlider23.getValue();
	
	var cockType = document.getElementById("cockTypeCurrent").innerHTML;
	
	sex = determineBodyType(sex, bodyType1);
	
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
 
	localStorage.setItem("Slot" + x + "_Custom_Slider1_Value", custom1);
	localStorage.setItem("Slot" + x + "_Custom_Slider2_Value", custom2);
	localStorage.setItem("Slot" + x + "_Custom_Slider3_Value", custom3);
	localStorage.setItem("Slot" + x + "_Custom_Slider4_Value", custom4);
	localStorage.setItem("Slot" + x + "_Custom_Slider5_Value", custom5);
	localStorage.setItem("Slot" + x + "_Custom_Slider6_Value", custom6);
	localStorage.setItem("Slot" + x + "_Custom_Slider7_Value", custom7);
	localStorage.setItem("Slot" + x + "_Custom_Slider8_Value", custom8);
	localStorage.setItem("Slot" + x + "_Custom_Slider9_Value", custom9);
	localStorage.setItem("Slot" + x + "_Custom_Slider10_Value", custom10);
	
	// Labels
	var i;
	for (i = 1; i < 11; i++) {
		var leftText = document.getElementById("textinmenuLeftCS" + i).innerText;
		var centerText = document.getElementById("textinmenuCenterCS" + i).innerText;
		var rightText = document.getElementById("textinmenuRightCS" + i).innerText;
		localStorage.setItem("Slot" + x + "_Custom_Slider" + i + "_LeftText", leftText);
		localStorage.setItem("Slot" + x + "_Custom_Slider" + i + "_CenterText", centerText);
		localStorage.setItem("Slot" + x + "_Custom_Slider" + i + "_RightText", rightText);
	}
	
	// Visibility	
	var i;
	for (i = 1; i < 11; i++) {
		var isSliderEnabled = localStorage.getItem("Custom_Slider" + i + "_Enabled");
		localStorage.setItem("Slot" + x + "_Custom_Slider" + i + "_Enabled", isSliderEnabled);
	}
	
	// Custom checkboxes
	var i;
	for (i = 1; i < 4; i++) {
		var label = localStorage.getItem("Slot0_Custom_Checkbox" + i + "_Label");
		var value1 = localStorage.getItem("Slot0_Custom_Checkbox" + i + "_Value1");
		var value2 = localStorage.getItem("Slot0_Custom_Checkbox" + i + "_Value2");
		var ticked1 = localStorage.getItem("Slot0_Custom_Checkbox" + i + "_Value1_Ticked");
		var ticked2 = localStorage.getItem("Slot0_Custom_Checkbox" + i + "_Value2_Ticked");
		var CCEnabled = localStorage.getItem("Slot0_Custom_Checkbox" + i + "_Enabled");
		
		localStorage.setItem("Slot" + x + "_Custom_Checkbox" + i + "_Label", label);
		localStorage.setItem("Slot" + x + "_Custom_Checkbox" + i + "_Value1", value1);
		localStorage.setItem("Slot" + x + "_Custom_Checkbox" + i + "_Value2", value2);
		localStorage.setItem("Slot" + x + "_Custom_Checkbox" + i + "_Value1_Ticked", ticked1);
		localStorage.setItem("Slot" + x + "_Custom_Checkbox" + i + "_Value2_Ticked", ticked2);
		localStorage.setItem("Slot" + x + "_Custom_Checkbox" + i + "_Enabled", CCEnabled);
	}
	
	// Custom radio inputs
	var i;
	for (i = 1; i < 4; i++) {
		var label = localStorage.getItem("Slot0_Custom_Radio_Input" + i + "_Label");
		var value1 = localStorage.getItem("Slot0_Custom_Radio_Input" + i + "_Value1");
		var value2 = localStorage.getItem("Slot0_Custom_Radio_Input" + i + "_Value2");
		var tickedvalue = localStorage.getItem("Slot0_Custom_Radio_Input" + i + "_Ticked_Value");
		var CRIEnabled = localStorage.getItem("Slot0_Custom_Radio_Input" + i + "_Enabled");
		
		localStorage.setItem("Slot" + x + "_Custom_Radio_Input" + i + "_Label", label);
		localStorage.setItem("Slot" + x + "_Custom_Radio_Input" + i + "_Value1", value1);
		localStorage.setItem("Slot" + x + "_Custom_Radio_Input" + i + "_Value2", value2);
		localStorage.setItem("Slot" + x + "_Custom_Radio_Input" + i + "_Ticked_Value", tickedvalue);
		localStorage.setItem("Slot" + x + "_Custom_Radio_Input" + i + "_Enabled", CRIEnabled);
	}
	
	// Default sliders/options visibility	
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
	
	localStorage.setItem("Slot" + x + "_Species", species);	
	localStorage.setItem("Slot" + x + "_Inanimate_Object", inanimateObject);
    localStorage.setItem("Slot" + x + "_Sex", sex);	
	localStorage.setItem("Slot" + x + "_AC_Box_Ticked", tickbox);
	localStorage.setItem("Slot" + x + "_Body_Type1", bodyType1);
	localStorage.setItem("Slot" + x + "_Body_Type2", bodyType2);
	localStorage.setItem("Slot" + x + "_Body_Type3", bodyType3);
	localStorage.setItem("Slot" + x + "_Hips", hips);
	localStorage.setItem("Slot" + x + "_Genital_Size", genitalSize);
	localStorage.setItem("Slot" + x + "_Fluffiness", fluffiness);
	localStorage.setItem("Slot" + x + "_Libido", libido);
	localStorage.setItem("Slot" + x + "_Position_Preference", domsub);
	localStorage.setItem("Slot" + x + "_Sensitivity", sensitivity);
	localStorage.setItem("Slot" + x + "_Demeanor", assertiveShy); 
	localStorage.setItem("Slot" + x + "_Breast_Size_Male", breastSizeMale); 
	localStorage.setItem("Slot" + x + "_Breast_Size_Female", breastSizeFemale); 
	localStorage.setItem("Slot" + x + "_Butt_Size", buttSize);
	localStorage.setItem("Slot" + x + "_Belly_Size", bellySize);
	localStorage.setItem("Slot" + x + "_Belly_Shape", bellyShape);
	localStorage.setItem("Slot" + x + "_Intelligence", intelligence);
	localStorage.setItem("Slot" + x + "_Cock_Type", cockType);
	localStorage.setItem("Slot" + x + "_Hair_Lenght", hairLenght);
	localStorage.setItem("Slot" + x + "_Pregnancy_Lock_Box_Ticked", tickbox2);
	localStorage.setItem("Slot" + x + "_Fertility", fertility);
	localStorage.setItem("Slot" + x + "_Genitals_Menu_Penis_Box_Ticked", tickbox3);
	localStorage.setItem("Slot" + x + "_Genitals_Menu_Vagina_Box_Ticked", tickbox4);
	
	localStorage.setItem("Slot" + x + "_Butt_Size_Slider_Enabled", buttSizeSliderEnabled);	
	localStorage.setItem("Slot" + x + "_Belly_Size_Slider_Enabled", bellySizeSliderEnabled);		
	localStorage.setItem("Slot" + x + "_Belly_Shape_Slider_Enabled", bellyShapeSliderEnabled);		
	localStorage.setItem("Slot" + x + "_Hips_Slider_Enabled", hipsSliderEnabled);			
	localStorage.setItem("Slot" + x + "_Genital_Size_Slider_Enabled", genitalSizeSliderEnabled);	
	localStorage.setItem("Slot" + x + "_Cock_Type_Menu_Enabled", cockTypeMenuEnabled);			
	localStorage.setItem("Slot" + x + "_Libido_Slider_Enabled", libidoSliderEnabled);			
	localStorage.setItem("Slot" + x + "_Sensitivity_Slider_Enabled", sensitivitySliderEnabled);		
	localStorage.setItem("Slot" + x + "_Demeanor_Slider_Enabled", demeanorSliderEnabled);		
	localStorage.setItem("Slot" + x + "_Postion_Pref_Slider_Enabled", positionPrefSliderEnabled);	
	localStorage.setItem("Slot" + x + "_Intelligence_Slider_Enabled", intelligenceSliderEnabled);	
	localStorage.setItem("Slot" + x + "_Fluffiness_Slider_Enabled", fluffinessSliderEnabled);		
	localStorage.setItem("Slot" + x + "_Hair_Lenght_Slider_Enabled", hairLenghtSliderEnabled);	
	localStorage.setItem("Slot" + x + "_Fertility_Slider_Enabled", fertilitySliderEnabled);		
	localStorage.setItem("Slot" + x + "_Genitals_Menu_Enabled", genitalsMenuEnabled);			
	localStorage.setItem("Slot" + x + "_Species_Menu_Enabled", speciesMenuEnabled);			
	localStorage.setItem("Slot" + x + "_Sex_Menu_Enabled", sexMenuEnabled);				
	localStorage.setItem("Slot" + x + "_AC_Menu_Enabled", acMenuEnabled);				
	localStorage.setItem("Slot" + x + "_MascFem_Slider_Enabled", mascFemSliderEnabled);			
	localStorage.setItem("Slot" + x + "_ThinThicc_Slider_Enabled", thinThiccSliderEnabled);		
	localStorage.setItem("Slot" + x + "_SmolTall_Slider_Enabled", smolTallSliderEnabled);		
	localStorage.setItem("Slot" + x + "_Inanimate_Objects_Enabled", inanimateObjectsMenuEnabled);		
	
	// CharViz Stuff
	var charVizEnabled = localStorage.getItem("CharViz_Enabled");
		if (charVizEnabled === "Yes") {
			
			// Character parts
			var body = localStorage.getItem("Slot0_CharViz_Body");
			var head = localStorage.getItem("Slot0_CharViz_Head");
			var tail = localStorage.getItem("Slot0_CharViz_Tail");
			var wings = localStorage.getItem("Slot0_CharViz_Wings");
			var pupils = localStorage.getItem("Slot0_CharViz_Pupils");
			
			localStorage.setItem("Slot" + x + "_CharViz_Body", body);
			localStorage.setItem("Slot" + x + "_CharViz_Head", head);
			localStorage.setItem("Slot" + x + "_CharViz_Tail", tail);
			localStorage.setItem("Slot" + x + "_CharViz_Wings", wings);
			localStorage.setItem("Slot" + x + "_CharViz_Pupils", pupils);
			
			// Character patterns
			var secondary = localStorage.getItem("Slot0_CharViz_Secondary");
			var tertiary = localStorage.getItem("Slot0_CharViz_Tertiary");
			var markings = localStorage.getItem("Slot0_CharViz_Markings");
			
			localStorage.setItem("Slot" + x + "_CharViz_Secondary", secondary);
			localStorage.setItem("Slot" + x + "_CharViz_Tertiary", tertiary);
			localStorage.setItem("Slot" + x + "_CharViz_Markings", markings);
	
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
			
			localStorage.setItem("Slot" + x + "_CharViz_Topwear", topwear);
			localStorage.setItem("Slot" + x + "_CharViz_Bottomwear", bottomwear);
			localStorage.setItem("Slot" + x + "_CharViz_Armwear", armwear);
			localStorage.setItem("Slot" + x + "_CharViz_Legwear", legwear);
			localStorage.setItem("Slot" + x + "_CharViz_Underwear", underwear);
			localStorage.setItem("Slot" + x + "_CharViz_Accessories", accessories);
			
			// Character colors			
			var primaryCharColor = document.getElementById("charVizDisplayBasePrimary").style.backgroundColor;
			var secondaryCharColor = document.getElementById("charVizDisplayBaseSecondary").style.backgroundColor;
			var tertiaryCharColor = document.getElementById("charVizDisplayTailTertiary").style.backgroundColor;
			var markingsCharColor = document.getElementById("charVizDisplayBaseMarkings").style.backgroundColor;
			var leftEyeCharColor = document.getElementById("charVizDisplayHeadIrisLeft").style.backgroundColor;
			var rightEyeCharColor = document.getElementById("charVizDisplayHeadIrisRight").style.backgroundColor;
			var hairCharColor = document.getElementById("charVizDisplayHeadHairPrimary").style.backgroundColor;
			var leftScleraCharColor = document.getElementById("charVizDisplayHeadScleraLeft").style.backgroundColor;
			var rightScleraCharColor = document.getElementById("charVizDisplayHeadScleraRight").style.backgroundColor;
			
			localStorage.setItem("Slot" + x + "_Primary_Character_Color", primaryCharColor);
			localStorage.setItem("Slot" + x + "_Secondary_Character_Color", secondaryCharColor);
			localStorage.setItem("Slot" + x + "_Tertiary_Character_Color", tertiaryCharColor);
			localStorage.setItem("Slot" + x + "_Markings_Character_Color", markingsCharColor);
			localStorage.setItem("Slot" + x + "_LeftEye_Character_Color", leftEyeCharColor);
			localStorage.setItem("Slot" + x + "_RightEye_Character_Color", rightEyeCharColor);
			localStorage.setItem("Slot" + x + "_Hair_Character_Color", hairCharColor);
			localStorage.setItem("Slot" + x + "_LeftSclera_Character_Color", leftScleraCharColor);
			localStorage.setItem("Slot" + x + "_RightSclera_Character_Color", rightScleraCharColor);
			
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
			
			localStorage.setItem("Slot" + x + "_Topwear_Primary_Clothing_Color", primaryTopwearColor);
			localStorage.setItem("Slot" + x + "_Topwear_Secondary_Clothing_Color", secondaryTopwearColor);
			localStorage.setItem("Slot" + x + "_Bottomwear_Primary_Clothing_Color", primaryTopwearColor);
			localStorage.setItem("Slot" + x + "_Bottomwear_Secondary_Clothing_Color", secondaryTopwearColor);
			localStorage.setItem("Slot" + x + "_Armwear_Primary_Clothing_Color", primaryTopwearColor);
			localStorage.setItem("Slot" + x + "_Armwear_Secondary_Clothing_Color", secondaryTopwearColor);
			localStorage.setItem("Slot" + x + "_Legwear_Primary_Clothing_Color", primaryTopwearColor);
			localStorage.setItem("Slot" + x + "_Legwear_Secondary_Clothing_Color", secondaryTopwearColor);
			localStorage.setItem("Slot" + x + "_Underwear_Primary_Clothing_Color", primaryTopwearColor);
			localStorage.setItem("Slot" + x + "_Underwear_Secondary_Clothing_Color", secondaryTopwearColor);
			
		}
	
	var presetNameLocked = localStorage.getItem("Slot" + x + "_Preset_Name_Locked");	
	if (presetNameLocked != "Yes") {
		localStorage.setItem("Slot" + x + "_Preset_Name", sex + " " + species);
	}	
	var presetName = localStorage.getItem("Slot" + x + "_Preset_Name");
	
	displayNotification(55, presetName);
	checkSlots();
 }
   
function loadSettings(x) {
	var lock = document.getElementById("lockClosed");
	if (lock.style.display === "block") {
		displayNotification(3);
	}
	else {
		var Species = localStorage.getItem("Slot" + x + "_Species");
		if (Species == null) {
			displayNotification(6);		
		}
		else {
		document.getElementById('speciesCurrent').innerHTML = Species;
		var object = localStorage.getItem("Slot" + x + "_Inanimate_Object");
		if (object != null) {
			document.getElementById('inanimateObjectsCurrent').innerHTML = object;
		}
 
		var Sex = localStorage.getItem("Slot" + x + "_Sex");
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
		localStorage.setItem("Slot0_Sex", Sex);
 
		var AC_Box_Ticked = localStorage.getItem("Slot" + x + "_AC_Box_Ticked");
		var tickbox = document.getElementById("adaptClothingCheckbox");
		if (AC_Box_Ticked == "Yes") {			
			tickbox.checked = true;
		}
		else {
			tickbox.checked = false;
		}
		
		var Fertility_Box_Ticked = localStorage.getItem("Slot" + x + "_Pregnancy_Lock_Box_Ticked");
		var tickbox2 = document.getElementById("pregnancyLockCheckbox");
		if (Fertility_Box_Ticked == "Yes") {			
			tickbox2.checked = true;
		}
		else {
			tickbox2.checked = false;
		}
		
		var Genitals_Penis_Box_Ticked = localStorage.getItem("Slot" + x + "_Genitals_Menu_Penis_Box_Ticked");
		var tickbox3 = document.getElementById("genitalsPenisCheckbox");
		if (Genitals_Penis_Box_Ticked == "Yes") {			
			tickbox3.checked = true;
		}
		else {
			tickbox3.checked = false;
		}
		
		var Genitals_Vagina_Box_Ticked = localStorage.getItem("Slot" + x + "_Genitals_Menu_Vagina_Box_Ticked");
		var tickbox4 = document.getElementById("genitalsVaginaCheckbox");
		if (Genitals_Vagina_Box_Ticked == "Yes") {			
			tickbox4.checked = true;
		}
		else {
			tickbox4.checked = false;
		}
 
		var bodyType1 = localStorage.getItem("Slot" + x + "_Body_Type1");
		mySlider6.setValue(bodyType1);
 
		var bodyType2 = localStorage.getItem("Slot" + x + "_Body_Type2");
		mySlider5.setValue(bodyType2);
 
		var bodyType3 = localStorage.getItem("Slot" + x + "_Body_Type3");
		mySlider4.setValue(bodyType3);
		  
		var hips = localStorage.getItem("Slot" + x + "_Hips");
		mySlider3.setValue(hips);
 
		var genitalSize = localStorage.getItem("Slot" + x + "_Genital_Size");
		mySlider2.setValue(genitalSize);
 
		var fluffiness = localStorage.getItem("Slot" + x + "_Fluffiness");
		mySlider.setValue(fluffiness);
 
		var libido = localStorage.getItem("Slot" + x + "_Libido");
		mySlider7.setValue(libido);
 
		var domsub = localStorage.getItem("Slot" + x + "_Position_Preference");
		mySlider10.setValue(domsub);
 
		var sensitivity = localStorage.getItem("Slot" + x + "_Sensitivity");
		mySlider11.setValue(sensitivity);
 
		var assertiveShy = localStorage.getItem("Slot" + x + "_Demeanor");
		mySlider12.setValue(assertiveShy);
 
		var buttSize = localStorage.getItem("Slot" + x + "_Butt_Size");	
		mySlider13.setValue(buttSize);
 
		var bellySize = localStorage.getItem("Slot" + x + "_Belly_Size");
		mySlider14.setValue(bellySize);
 
		var bellyShape = localStorage.getItem("Slot" + x + "_Belly_Shape");
		mySlider15.setValue(bellyShape);
 
		var intelligence = localStorage.getItem("Slot" + x + "_Intelligence");
		mySlider16.setValue(intelligence);
		
		var hairLenght = localStorage.getItem("Slot" + x + "_Hair_Lenght");
		mySlider20.setValue(hairLenght);
						
		var fertility = localStorage.getItem("Slot" + x + "_Fertility");
		mySlider23.setValue(fertility);
		
		var cockType = localStorage.getItem("Slot" + x + "_Cock_Type");
		document.getElementById('cockTypeCurrent').innerHTML = cockType;
 
		if (Sex == "Male" || Sex == "Femboy") {
			document.getElementById("showAdvancedSettings4a").style.display = "block";
			document.getElementById("showAdvancedSettings4b").style.display = "none";
			var breastSizeMale = localStorage.getItem("Slot" + x + "_Breast_Size_Male");
			mySlider9.setValue(breastSizeMale);
			showOrHideBreastSizeMaleSlider();
		}
 		else {
			document.getElementById("showAdvancedSettings4b").style.display = "block";
			document.getElementById("showAdvancedSettings4a").style.display = "none";
			var breastSizeFemale = localStorage.getItem("Slot" + x + "_Breast_Size_Female");
			mySlider8.setValue(breastSizeFemale);
		}
		
		// Custom stuff
		// Custom sliders
		// Values
		var i;
		for (i = 1; i < 11; i++) {
			var value = localStorage.getItem("Slot" + x + "_Custom_Slider" + i + "_Value");
			localStorage.setItem("Slot0_Custom_Slider" + i + "_Value", value);
		}
		
		// Labels
		var i;
		for (i = 1; i < 11; i++) {
			var leftText = localStorage.getItem("Slot" + x + "_Custom_Slider" + i + "_LeftText");
			var centerText = localStorage.getItem("Slot" + x + "_Custom_Slider" + i + "_CenterText");
			var rightText = localStorage.getItem("Slot" + x + "_Custom_Slider" + i + "_RightText");
			localStorage.setItem("Custom_Slider" + i + "_LeftText", leftText);
			localStorage.setItem("Custom_Slider" + i + "_CenterText", centerText);
			localStorage.setItem("Custom_Slider" + i + "_RightText", rightText);
		}
		
		// Visibility
		var i;
		for (i = 1; i < 11; i++) {
			var isSliderEnabled = localStorage.getItem("Slot" + x + "_Custom_Slider" + i + "_Enabled");
			localStorage.setItem("Custom_Slider" + i + "_Enabled", isSliderEnabled);
		}
		
		var buttSizeSliderEnabled = localStorage.getItem("Slot" + x + "_Butt_Size_Slider_Enabled");
		var bellySizeSliderEnabled = localStorage.getItem("Slot" + x + "_Belly_Size_Slider_Enabled");
		var bellyShapeSliderEnabled = localStorage.getItem("Slot" + x + "_Belly_Shape_Slider_Enabled");
		var hipsSliderEnabled = localStorage.getItem("Slot" + x + "_Hips_Slider_Enabled");
		var genitalSizeSliderEnabled = localStorage.getItem("Slot" + x + "_Genital_Size_Slider_Enabled");
		var cockTypeMenuEnabled = localStorage.getItem("Slot" + x + "_Cock_Type_Menu_Enabled");
		var libidoSliderEnabled = localStorage.getItem("Slot" + x + "_Libido_Slider_Enabled");
		var sensitivitySliderEnabled = localStorage.getItem("Slot" + x + "_Sensitivity_Slider_Enabled");
		var demeanorSliderEnabled = localStorage.getItem("Slot" + x + "_Demeanor_Slider_Enabled");
		var positionPrefSliderEnabled = localStorage.getItem("Slot" + x + "_Postion_Pref_Slider_Enabled");
		var intelligenceSliderEnabled = localStorage.getItem("Slot" + x + "_Intelligence_Slider_Enabled");
		var fluffinessSliderEnabled = localStorage.getItem("Slot" + x + "_Fluffiness_Slider_Enabled");
		var hairLenghtSliderEnabled = localStorage.getItem("Slot" + x + "_Hair_Lenght_Slider_Enabled");
		var fertilitySliderEnabled = localStorage.getItem("Slot" + x + "_Fertility_Slider_Enabled");
		var genitalsMenuEnabled = localStorage.getItem("Slot" + x + "_Genitals_Menu_Enabled");
		var speciesMenuEnabled = localStorage.getItem("Slot" + x + "_Species_Menu_Enabled");
		var sexMenuEnabled = localStorage.getItem("Slot" + x + "_Sex_Menu_Enabled");
		var acMenuEnabled = localStorage.getItem("Slot" + x + "_AC_Menu_Enabled");
		var mascFemSliderEnabled = localStorage.getItem("Slot" + x + "_MascFem_Slider_Enabled");
		var thinThiccSliderEnabled = localStorage.getItem("Slot" + x + "_ThinThicc_Slider_Enabled");
		var smolTallSliderEnabled = localStorage.getItem("Slot" + x + "_SmolTall_Slider_Enabled");
		var inanimateObjectsMenuEnabled = localStorage.getItem("Slot" + x + "_Inanimate_Objects_Enabled");
		
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
		localStorage.setItem("Fertility_Slider_Enabled", fertilitySliderEnabled);		
		localStorage.setItem("Genitals_Menu_Enabled", genitalsMenuEnabled);			
		localStorage.setItem("Species_Menu_Enabled", speciesMenuEnabled);			
		localStorage.setItem("Sex_Menu_Enabled", sexMenuEnabled);				
		localStorage.setItem("AC_Menu_Enabled", acMenuEnabled);				
		localStorage.setItem("MascFem_Slider_Enabled", mascFemSliderEnabled);			
		localStorage.setItem("ThinThicc_Slider_Enabled", thinThiccSliderEnabled);		
		localStorage.setItem("SmolTall_Slider_Enabled", smolTallSliderEnabled);		
		localStorage.setItem("Inanimate_Objects_Enabled", inanimateObjectsMenuEnabled);
		
		// Custom checkboxes		
		var i;
		for (i = 1; i < 4; i++) {
			var label = localStorage.getItem("Slot" + x + "_Custom_Checkbox" + i + "_Label");
			var value1 = localStorage.getItem("Slot" + x + "_Custom_Checkbox" + i + "_Value1");
			var value2 = localStorage.getItem("Slot" + x + "_Custom_Checkbox" + i + "_Value2");
			var ticked1 = localStorage.getItem("Slot" + x + "_Custom_Checkbox" + i + "_Value1_Ticked");
			var ticked2 = localStorage.getItem("Slot" + x + "_Custom_Checkbox" + i + "_Value2_Ticked");
			var CCEnabled = localStorage.getItem("Slot" + x + "_Custom_Checkbox" + i + "_Enabled");
			
			localStorage.setItem("Slot0_Custom_Checkbox" + i + "_Label", label);
			localStorage.setItem("Slot0_Custom_Checkbox" + i + "_Value1", value1);
			localStorage.setItem("Slot0_Custom_Checkbox" + i + "_Value2", value2);
			localStorage.setItem("Slot0_Custom_Checkbox" + i + "_Value1_Ticked", ticked1);
			localStorage.setItem("Slot0_Custom_Checkbox" + i + "_Value2_Ticked", ticked2);
			localStorage.setItem("Slot0_Custom_Checkbox" + i + "_Enabled", CCEnabled);
		}
		
		// Custom radio inputs
		var i;
		for (i = 1; i < 4; i++) {
			var label = localStorage.getItem("Slot" + x + "_Custom_Radio_Input" + i + "_Label");
			var value1 = localStorage.getItem("Slot" + x + "_Custom_Radio_Input" + i + "_Value1");
			var value2 = localStorage.getItem("Slot" + x + "_Custom_Radio_Input" + i + "_Value2");
			var tickedvalue = localStorage.getItem("Slot" + x + "_Custom_Radio_Input" + i + "_Ticked_Value");
			var CRIEnabled = localStorage.getItem("Slot" + x + "_Custom_Radio_Input" + i + "_Enabled");
			
			localStorage.setItem("Slot0_Custom_Radio_Input" + i + "_Label", label);
			localStorage.setItem("Slot0_Custom_Radio_Input" + i + "_Value1", value1);
			localStorage.setItem("Slot0_Custom_Radio_Input" + i + "_Value2", value2);
			localStorage.setItem("Slot0_Custom_Radio_Input" + i + "_Ticked_Value", tickedvalue);
			localStorage.setItem("Slot0_Custom_Radio_Input" + i + "_Enabled", CRIEnabled);
		}
		
		// CharViz Stuff
		var charVizEnabled = localStorage.getItem("CharViz_Enabled");
		if (charVizEnabled === "Yes") {
			
			// Character parts
			var body = localStorage.getItem("Slot" + x + "_CharViz_Body");
			var head = localStorage.getItem("Slot" + x + "_CharViz_Head");
			var tail = localStorage.getItem("Slot" + x + "_CharViz_Tail");
			var wings = localStorage.getItem("Slot" + x + "_CharViz_Wings");
			var pupils = localStorage.getItem("Slot" + x + "_CharViz_Pupils");
			
			localStorage.setItem("Slot0_CharViz_Body", body);
			localStorage.setItem("Slot0_CharViz_Head", head);
			localStorage.setItem("Slot0_CharViz_Tail", tail);
			localStorage.setItem("Slot0_CharViz_Wings", wings);
			localStorage.setItem("Slot0_CharViz_Pupils", pupils);
			
			// Character patterns
			var secondary = localStorage.getItem("Slot" + x + "_CharViz_Secondary");
			var tertiary = localStorage.getItem("Slot" + x + "_CharViz_Tertiary");
			var markings = localStorage.getItem("Slot" + x + "_CharViz_Markings");
			
			localStorage.setItem("Slot0_CharViz_Secondary", secondary);
			localStorage.setItem("Slot0_CharViz_Tertiary", tertiary);
			localStorage.setItem("Slot0_CharViz_Markings", markings);
			
			// Clothes			
			var topwear = localStorage.getItem("Slot" + x + "_CharViz_Topwear");
			var bottomwear = localStorage.getItem("Slot" + x + "_CharViz_Bottomwear");
			var armwear = localStorage.getItem("Slot" + x + "_CharViz_Armwear");
			var legwear = localStorage.getItem("Slot" + x + "_CharViz_Legwear");	
			var underwear = localStorage.getItem("Slot" + x + "_CharViz_Underwear");
			var accessories = localStorage.getItem("Slot" + x + "_CharViz_Accessories");
			
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
			var primaryCharColor = localStorage.getItem("Slot" + x + "_Primary_Character_Color");
			var secondaryCharColor = localStorage.getItem("Slot" + x + "_Secondary_Character_Color");
			var tertiaryCharColor = localStorage.getItem("Slot" + x + "_Tertiary_Character_Color");
			var markingsCharColor = localStorage.getItem("Slot" + x + "_Markings_Character_Color");
			var leftEyeCharColor = localStorage.getItem("Slot" + x + "_LeftEye_Character_Color");
			var rightEyeCharColor = localStorage.getItem("Slot" + x + "_RightEye_Character_Color");
			var hairCharColor = localStorage.getItem("Slot" + x + "_Hair_Character_Color");
			var leftScleraCharColor = localStorage.getItem("Slot" + x + "_LeftSclera_Character_Color");
			var rightScleraCharColor = localStorage.getItem("Slot" + x + "_RightSclera_Character_Color");
			
			localStorage.setItem("Slot0_Primary_Character_Color", primaryCharColor);
			localStorage.setItem("Slot0_Secondary_Character_Color", secondaryCharColor);
			localStorage.setItem("Slot0_Tertiary_Character_Color", tertiaryCharColor);
			localStorage.setItem("Slot0_Markings_Character_Color", markingsCharColor);
			localStorage.setItem("Slot0_LeftEye_Character_Color", leftEyeCharColor);
			localStorage.setItem("Slot0_RightEye_Character_Color", rightEyeCharColor);
			localStorage.setItem("Slot0_Hair_Character_Color", hairCharColor);
			localStorage.setItem("Slot0_LeftSclera_Character_Color", leftScleraCharColor);
			localStorage.setItem("Slot0_RightSclera_Character_Color", rightScleraCharColor);
			
			// Outfit colors			
			var primaryTopwearColor = localStorage.getItem("Slot" + x + "_Topwear_Primary_Clothing_Color");
			var secondaryTopwearColor = localStorage.getItem("Slot" + x + "_Topwear_Secondary_Clothing_Color");
			var primaryBottomwearColor = localStorage.getItem("Slot" + x + "_Bottomwear_Primary_Clothing_Color");
			var secondaryBottomwearColor = localStorage.getItem("Slot" + x + "_Bottomwear_Secondary_Clothing_Color");
			var primaryArmearColor = localStorage.getItem("Slot" + x + "_Armwear_Primary_Clothing_Color");
			var secondaryArmwearColor = localStorage.getItem("Slot" + x + "_Armwear_Secondary_Clothing_Color");
			var primaryLegwearColor = localStorage.getItem("Slot" + x + "_Legwear_Primary_Clothing_Color");
			var secondaryLegwearColor = localStorage.getItem("Slot" + x + "_Legwear_Secondary_Clothing_Color");
			var primaryUnderwearColor = localStorage.getItem("Slot" + x + "_Underwear_Primary_Clothing_Color");
			var secondaryUnderwearColor = localStorage.getItem("Slot" + x + "_Underwear_Secondary_Clothing_Color");
			
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
			
			initializeCharViz();
			
		}
		
		loadSliderSettings();
		loadCustomSliders();
		loadCustomCheckboxes();
		loadCustomRadioInputs();
		
		var presetName = localStorage.getItem("Slot" + x + "_Preset_Name");
		displayNotification(5, presetName);
		saveSettingsSlot0();

		if (controlsessionactive === "Yes") {
			synchronization();
			conn.send({firstParam: "loadedSettings", secondParam: x});
		}
		}
	}
}