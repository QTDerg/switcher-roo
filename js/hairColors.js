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
		document.getElementById('hairColorMenu').style.height = "440px";
		document.getElementById('AdvancedSettingsContainer').style.maxHeight = "1760px";
	}
}

function goBackFromhairColorList() {
	document.getElementById("hairColorCurrentContainer").style.display= 'block';
	document.getElementById("hairColorSwatch").style.display= 'block';
	document.getElementById("hairColorSelectorContainer").style.display= 'none';
	document.getElementById('hairColorContainer').style.width = "70%";
	document.getElementById('hairColorMenu').style.height = "62px";
	document.getElementById('AdvancedSettingsContainer').style.maxHeight = "1330px";
}

function closeHairCategoryMenu() {
	document.getElementById("hairColorSelectorContainer").style.display = "none";
	document.getElementById("hairColorSelectorPredefined").style.display = "none";
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