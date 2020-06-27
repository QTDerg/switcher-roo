function cockTypeLoadList() {
	var areSettingsLocked = localStorage.getItem("Settings_Locked");
	if (areSettingsLocked === "Yes") {
		return;
	}
	else {
		document.getElementById("cockTypeCurrentContainer").style.display= 'none';
		document.getElementById("cockTypeSearch").style.display= 'none';
		document.getElementById("cockTypeSelectorContainer").style.display= 'block';
		document.getElementById('cockTypeContainer').style.width = "80%";
		document.getElementById('cockTypeMenu').style.height = "440px";
		document.getElementById('AdvancedSettingsContainer').style.maxHeight = "1760px";
	}
}

function goBackFromcockTypeList() {
	document.getElementById("cockTypeCurrentContainer").style.display= 'block';
	document.getElementById("cockTypeSearch").style.display= 'block';
	document.getElementById("cockTypeSelectorContainer").style.display= 'none';
	document.getElementById('cockTypeContainer').style.width = "70%";
	document.getElementById('cockTypeMenu').style.height = "62px";
	document.getElementById('AdvancedSettingsContainer').style.maxHeight = "1330px";
}

function closeCockTypeCategoryMenu() {
	document.getElementById("cockTypeSelectorContainer").style.display = "none";
	document.getElementById("cockTypeSelectorPredefined").style.display = "none";
}

function setcockTypeTo(cockType) {
	document.getElementById('cockTypeCurrent').innerHTML = cockType;
	localStorage.setItem("Slot0_Cock_Type", cockType);
	closeCockTypeCategoryMenu();
	goBackFromcockTypeList();
	showProcessingAnimation();
}

function setcockTypeToCustom(slotNumber) {
	if (slotNumber === "Slot_One") {
		var cockType = document.getElementById('cockTypeEntry1').innerHTML;		
	}
	if (slotNumber === "Slot_Two") {
		var cockType = document.getElementById('cockTypeEntry2').innerHTML;		
	}
	if (slotNumber === "Slot_Three") {
		var cockType = document.getElementById('cockTypeEntry3').innerHTML;		
	}
	if (slotNumber === "Slot_Four") {
		var cockType = document.getElementById('cockTypeEntry4').innerHTML;		
	}
	if (slotNumber === "Slot_Five") {
		var cockType = document.getElementById('cockTypeEntry5').innerHTML;		
	}
	if (slotNumber === "Slot_Six") {
		var cockType = document.getElementById('cockTypeEntry6').innerHTML;		
	}
	if (slotNumber === "Slot_Seven") {
		var cockType = document.getElementById('cockTypeEntry7').innerHTML;		
	}
	if (slotNumber === "Slot_Eight") {
		var cockType = document.getElementById('cockTypeEntry8').innerHTML;		
	}
	if (slotNumber === "Slot_Nine") {
		var cockType = document.getElementById('cockTypeEntry9').innerHTML;		
	}
	if (slotNumber === "Slot_Ten") {
		var cockType = document.getElementById('cockTypeEntry10').innerHTML;		
	}
	setcockTypeTo(cockType);
}

function loadCockTypesOnStartup() {
	var object1 = localStorage.getItem("Cock_Type_Slot1");
	var object2 = localStorage.getItem("Cock_Type_Slot2");
	var object3 = localStorage.getItem("Cock_Type_Slot3");
	var object4 = localStorage.getItem("Cock_Type_Slot4");
	var object5 = localStorage.getItem("Cock_Type_Slot5");
	var object6 = localStorage.getItem("Cock_Type_Slot6");
	var object7 = localStorage.getItem("Cock_Type_Slot7");
	var object8 = localStorage.getItem("Cock_Type_Slot8");
	var object9 = localStorage.getItem("Cock_Type_Slot9");
	var object10 = localStorage.getItem("Cock_Type_Slot10");
	
	if (object1 === null) {
		object1 = "Empty";
	}
	if (object2 === null) {
		object2 = "Empty";
	}
	if (object3 === null) {
		object3 = "Empty";
	}
	if (object4 === null) {
		object4 = "Empty";
	}
	if (object5 === null) {
		object5 = "Empty";
	}
	if (object6 === null) {
		object6 = "Empty";
	}
	if (object7 === null) {
		object7 = "Empty";
	}
	if (object8 === null) {
		object8 = "Empty";
	}
	if (object9 === null) {
		object9 = "Empty";
	}
	if (object10 === null) {
		object10 = "Empty";
	}
	
	document.getElementById('cockTypeName1').innerHTML = object1;
	document.getElementById('cockTypeEntry1').innerHTML = object1;
	
	document.getElementById('cockTypeName2').innerHTML = object2;
	document.getElementById('cockTypeEntry2').innerHTML = object2;
	
	document.getElementById('cockTypeName3').innerHTML = object3;
	document.getElementById('cockTypeEntry3').innerHTML = object3;
	
	document.getElementById('cockTypeName4').innerHTML = object4;
	document.getElementById('cockTypeEntry4').innerHTML = object4;
	
	document.getElementById('cockTypeName5').innerHTML = object5;
	document.getElementById('cockTypeEntry5').innerHTML = object5;
	
	document.getElementById('cockTypeName6').innerHTML = object6;
	document.getElementById('cockTypeEntry6').innerHTML = object6;
	
	document.getElementById('cockTypeName7').innerHTML = object7;
	document.getElementById('cockTypeEntry7').innerHTML = object7;
	
	document.getElementById('cockTypeName8').innerHTML = object8;
	document.getElementById('cockTypeEntry8').innerHTML = object8;
	
	document.getElementById('cockTypeName9').innerHTML = object9;
	document.getElementById('cockTypeEntry9').innerHTML = object9;
	
	document.getElementById('cockTypeName10').innerHTML = object10;
	document.getElementById('cockTypeEntry10').innerHTML = object10;
}

function changeCTSlot1() {
	document.getElementById("CTContainerSlot11").style.display='none'; 
	document.getElementById("CTContainerSlot12").style.display='block'; 
}

function goBackCTSlot1() {
	document.getElementById("CTContainerSlot11").style.display='block'; 
	document.getElementById("CTContainerSlot12").style.display='none'; 
}

function changeCTSlot2() {
	document.getElementById("CTContainerSlot21").style.display='none'; 
	document.getElementById("CTContainerSlot22").style.display='block'; 
}

function goBackCTSlot2() {
	document.getElementById("CTContainerSlot21").style.display='block'; 
	document.getElementById("CTContainerSlot22").style.display='none'; 
}

function changeCTSlot3() {
	document.getElementById("CTContainerSlot31").style.display='none'; 
	document.getElementById("CTContainerSlot32").style.display='block'; 
}

function goBackCTSlot3() {
	document.getElementById("CTContainerSlot31").style.display='block'; 
	document.getElementById("CTContainerSlot32").style.display='none'; 
}

function changeCTSlot4() {
	document.getElementById("CTContainerSlot41").style.display='none'; 
	document.getElementById("CTContainerSlot42").style.display='block'; 
}

function goBackCTSlot4() {
	document.getElementById("CTContainerSlot41").style.display='block'; 
	document.getElementById("CTContainerSlot42").style.display='none'; 
}

function changeCTSlot5() {
	document.getElementById("CTContainerSlot51").style.display='none'; 
	document.getElementById("CTContainerSlot52").style.display='block'; 
}

function goBackCTSlot5() {
	document.getElementById("CTContainerSlot51").style.display='block'; 
	document.getElementById("CTContainerSlot52").style.display='none'; 
}

function changeCTSlot6() {
	document.getElementById("CTContainerSlot61").style.display='none'; 
	document.getElementById("CTContainerSlot62").style.display='block'; 
}

function goBackCTSlot6() {
	document.getElementById("CTContainerSlot61").style.display='block'; 
	document.getElementById("CTContainerSlot62").style.display='none'; 
}

function changeCTSlot7() {
	document.getElementById("CTContainerSlot71").style.display='none'; 
	document.getElementById("CTContainerSlot72").style.display='block'; 
}

function goBackCTSlot7() {
	document.getElementById("CTContainerSlot71").style.display='block'; 
	document.getElementById("CTContainerSlot72").style.display='none'; 
}

function changeCTSlot8() {
	document.getElementById("CTContainerSlot81").style.display='none'; 
	document.getElementById("CTContainerSlot82").style.display='block'; 
}

function goBackCTSlot8() {
	document.getElementById("CTContainerSlot81").style.display='block'; 
	document.getElementById("CTContainerSlot82").style.display='none'; 
}

function changeCTSlot9() {
	document.getElementById("CTContainerSlot91").style.display='none'; 
	document.getElementById("CTContainerSlot92").style.display='block'; 
}

function goBackCTSlot9() {
	document.getElementById("CTContainerSlot91").style.display='block'; 
	document.getElementById("CTContainerSlot92").style.display='none'; 
}

function changeCTSlot10() {
	document.getElementById("CTContainerSlot101").style.display='none'; 
	document.getElementById("CTContainerSlot102").style.display='block'; 
}

function goBackCTSlot10() {
	document.getElementById("CTContainerSlot101").style.display='block'; 
	document.getElementById("CTContainerSlot102").style.display='none'; 
}

function setCTSlot1() {
	var object = document.getElementById("cockTypeSlot1TextField").value;
	localStorage.setItem("Cock_Type_Slot1", object);
	document.getElementById('cockTypeName1').innerHTML = object;
	document.getElementById('cockTypeEntry1').innerHTML = object;
	goBackCTSlot1();
}

function setCTSlot2() {
	var object = document.getElementById("cockTypeSlot2TextField").value;
	localStorage.setItem("Cock_Type_Slot2", object);
	document.getElementById('cockTypeName2').innerHTML = object;
	document.getElementById('cockTypeEntry2').innerHTML = object;
	goBackCTSlot2();
}

function setCTSlot3() {
	var object = document.getElementById("cockTypeSlot3TextField").value;
	localStorage.setItem("Cock_Type_Slot3", object);
	document.getElementById('cockTypeName3').innerHTML = object;
	document.getElementById('cockTypeEntry3').innerHTML = object;
	goBackCTSlot3();
}

function setCTSlot4() {
	var object = document.getElementById("cockTypeSlot4TextField").value;
	localStorage.setItem("Cock_Type_Slot4", object);
	document.getElementById('cockTypeName4').innerHTML = object;
	document.getElementById('cockTypeEntry4').innerHTML = object;
	goBackCTSlot4();
}

function setCTSlot5() {
	var object = document.getElementById("cockTypeSlot5TextField").value;
	localStorage.setItem("Cock_Type_Slot5", object);
	document.getElementById('cockTypeName5').innerHTML = object;
	document.getElementById('cockTypeEntry5').innerHTML = object;
	goBackCTSlot5();
}

function setCTSlot6() {
	var object = document.getElementById("cockTypeSlot6TextField").value;
	localStorage.setItem("Cock_Type_Slot6", object);
	document.getElementById('cockTypeName6').innerHTML = object;
	document.getElementById('cockTypeEntry6').innerHTML = object;
	goBackCTSlot6();
}

function setCTSlot7() {
	var object = document.getElementById("cockTypeSlot7TextField").value;
	localStorage.setItem("Cock_Type_Slot7", object);
	document.getElementById('cockTypeName7').innerHTML = object;
	document.getElementById('cockTypeEntry7').innerHTML = object;
	goBackCTSlot7();
}

function setCTSlot8() {
	var object = document.getElementById("cockTypeSlot8TextField").value;
	localStorage.setItem("Cock_Type_Slot8", object);
	document.getElementById('cockTypeName8').innerHTML = object;
	document.getElementById('cockTypeEntry8').innerHTML = object;
	goBackCTSlot8();
}

function setCTSlot9() {
	var object = document.getElementById("cockTypeSlot9TextField").value;
	localStorage.setItem("Cock_Type_Slot9", object);
	document.getElementById('cockTypeName9').innerHTML = object;
	document.getElementById('cockTypeEntry9').innerHTML = object;
	goBackCTSlot9();
}

function setCTSlot10() {
	var object = document.getElementById("cockTypeSlot10TextField").value;
	localStorage.setItem("Cock_Type_Slot10", object);
	document.getElementById('cockTypeName10').innerHTML = object;
	document.getElementById('cockTypeEntry10').innerHTML = object;
	goBackCTSlot10();
}

function goToPredefinedcockTypesCategory() {
	document.getElementById("cockTypeSelectorContainer").style.display= 'none';
	document.getElementById("cockTypeSelectorPredefined").style.display= 'block';
	document.getElementById('cockTypeMenu').style.height = "620px";
	document.getElementById('AdvancedSettingsContainer').style.maxHeight = "1940px";
}

function goBackFromPredefinedCockTypesCategory() {
	document.getElementById("cockTypeSelectorContainer").style.display= 'block';
	document.getElementById("cockTypeSelectorPredefined").style.display= 'none';
	document.getElementById('cockTypeMenu').style.height = "440px";
	document.getElementById('AdvancedSettingsContainer').style.maxHeight = "1760px";
}