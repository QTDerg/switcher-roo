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
	var sexuality = mySlider21.getValue();
	var feralAnthro = mySlider22.getValue();
	var fertility = mySlider23.getValue();
	
	// Custom slider values
	var custom1 = mySlider17.getValue();
	var custom2 = mySlider18.getValue();
	var custom3 = mySlider19.getValue();
	
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
	var isCS1Enabled = localStorage.getItem("Custom_Slider1_Enabled");
	var isCS2Enabled = localStorage.getItem("Custom_Slider2_Enabled");
	var isCS3Enabled = localStorage.getItem("Custom_Slider3_Enabled");
	
	var obj = {
    bodyType1: bodyType1,	bodyType2: bodyType2,	bodyType3: bodyType3,
	hips: hips,	genitalSize: genitalSize,	fluffiness: fluffiness,
	libido: libido,	domsub: domsub,	sensitivity: sensitivity,
	assertiveShy: assertiveShy,	breastSizeMale: breastSizeMale,
	breastSizeFemale: breastSizeFemale,    buttSize: buttSize,
	bellySize: bellySize,	bellyShape: bellyShape,
	intelligence: intelligence,	hairLenght: hairLenght,
	sexuality: sexuality,	feralAnthro: feralAnthro,	fertility: fertility,
	custom1: custom1,	custom2: custom2,	custom3: custom3,
	species: species,	inanimateObject: inanimateObject,	cockType: cockType,
	hairColor: hairColor,	swatchColor: swatchColor,	sex: sex,	thirdSex: thirdSex,
	tickbox1: tickbox1,	tickbox2: tickbox2,	tickbox3: tickbox3,	tickbox4: tickbox4,
	leftTextCustom1: leftTextCustom1, leftTextCustom2: leftTextCustom2, leftTextCustom3: leftTextCustom3,
	centerTextCustom1: centerTextCustom1, centerTextCustom2: centerTextCustom2, centerTextCustom3: centerTextCustom3,
	rightTextCustom1: rightTextCustom1, rightTextCustom2: rightTextCustom2, rightTextCustom3: rightTextCustom3,
	buttSizeSliderEnabled: buttSizeSliderEnabled,	bellySizeSliderEnabled: bellySizeSliderEnabled,	bellyShapeSliderEnabled: bellyShapeSliderEnabled,
	hipsSliderEnabled: hipsSliderEnabled,	genitalSizeSliderEnabled: genitalSizeSliderEnabled,	cockTypeMenuEnabled: cockTypeMenuEnabled,
	libidoSliderEnabled: libidoSliderEnabled,	sensitivitySliderEnabled: sensitivitySliderEnabled,	demeanorSliderEnabled: demeanorSliderEnabled,
	positionPrefSliderEnabled: positionPrefSliderEnabled,	intelligenceSliderEnabled: intelligenceSliderEnabled,	fluffinessSliderEnabled: fluffinessSliderEnabled,
	hairLenghtSliderEnabled: hairLenghtSliderEnabled,	sexualitySliderEnabled: sexualitySliderEnabled,	feralAnthroSliderEnabled: feralAnthroSliderEnabled,
	hairColorMenuEnabled: hairColorMenuEnabled,	fertilitySliderEnabled: fertilitySliderEnabled,	genitalsMenuEnabled: genitalsMenuEnabled,
	speciesMenuEnabled: speciesMenuEnabled,	sexMenuEnabled: sexMenuEnabled,	acMenuEnabled: acMenuEnabled,	mascFemSliderEnabled: mascFemSliderEnabled,
	thinThiccSliderEnabled: thinThiccSliderEnabled,	smolTallSliderEnabled: smolTallSliderEnabled,	inanimateObjectsMenuEnabled: inanimateObjectsMenuEnabled,
	isCS1Enabled: isCS1Enabled,	isCS2Enabled: isCS2Enabled,	isCS3Enabled: isCS3Enabled,
	
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
	mySlider21.setValue(obj.sexuality);
	mySlider22.setValue(obj.feralAnthro);
	mySlider23.setValue(obj.fertility);
	
	mySlider17.setValue(obj.custom1);
	mySlider18.setValue(obj.custom2);
	mySlider19.setValue(obj.custom3);
	
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
	localStorage.setItem("Sexuality_Slider_Enabled", obj.sexualitySliderEnabled);		
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
	
	document.getElementById("appStatusImportMessage").innerHTML = "Imported successfully!";
	document.getElementById("appStatusImportMessage").style.color = "#29a329";
	
	loadSliderSettings();
	loadCustomSlidersValuesOnStartup1("Yes");
	loadCustomSlidersValuesOnStartup2("Yes");
	loadCustomSlidersValuesOnStartup3("Yes");
	
	saveSettingsSlot0();
	
	setTimeout(hideAppStatusImportMessage, 1500);
	}
}

function hideAppStatusImportMessage() {
	document.getElementById("appStatusImportMessage").innerHTML = "Insert app settings and click Import";
	document.getElementById("appStatusImportMessage").style.color = "#fff";
}