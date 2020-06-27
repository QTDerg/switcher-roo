function inanimateObjectsLoadList() {
	var areSettingsLocked = localStorage.getItem("Settings_Locked");
	if (areSettingsLocked === "Yes") {
		return;
	}
	else {
		document.getElementById("inanimateObjectsCurrentContainer").style.display= 'none';
		document.getElementById("inanimateObjectsSearch").style.display= 'none';
		document.getElementById("inanimateObjectsSelectorContainer").style.display= 'block';
		document.getElementById('inanimateObjectsContainer').style.width = "80%";
		document.getElementById('inanimateObjectsMenu').style.height = "415px";
	}
}

function goBackFromInanimateObjectsList() {
	document.getElementById("inanimateObjectsCurrentContainer").style.display= 'block';
	document.getElementById("inanimateObjectsSearch").style.display= 'block';
	document.getElementById("inanimateObjectsSelectorContainer").style.display= 'none';
	document.getElementById('inanimateObjectsContainer').style.width = "70%";
	document.getElementById('inanimateObjectsMenu').style.height = "62px";
}

function setInanimateObjectTo(Object) {
	document.getElementById('inanimateObjectsCurrent').innerHTML = Object;
	localStorage.setItem("Slot0_Inanimate_Object", Object);
	goBackFromInanimateObjectsList();
	showProcessingAnimation();
}

function setInanimateObjectToCustom(slotNumber) {
	if (slotNumber === "Slot_One") {
		var Object = document.getElementById('inanimateObjectEntry1').innerHTML;		
	}
	if (slotNumber === "Slot_Two") {
		var Object = document.getElementById('inanimateObjectEntry2').innerHTML;		
	}
	if (slotNumber === "Slot_Three") {
		var Object = document.getElementById('inanimateObjectEntry3').innerHTML;		
	}
	if (slotNumber === "Slot_Four") {
		var Object = document.getElementById('inanimateObjectEntry4').innerHTML;		
	}
	if (slotNumber === "Slot_Five") {
		var Object = document.getElementById('inanimateObjectEntry5').innerHTML;		
	}
	if (slotNumber === "Slot_Six") {
		var Object = document.getElementById('inanimateObjectEntry6').innerHTML;		
	}
	if (slotNumber === "Slot_Seven") {
		var Object = document.getElementById('inanimateObjectEntry7').innerHTML;		
	}
	if (slotNumber === "Slot_Eight") {
		var Object = document.getElementById('inanimateObjectEntry8').innerHTML;		
	}
	if (slotNumber === "Slot_Nine") {
		var Object = document.getElementById('inanimateObjectEntry9').innerHTML;		
	}
	if (slotNumber === "Slot_Ten") {
		var Object = document.getElementById('inanimateObjectEntry10').innerHTML;		
	}
	setInanimateObjectTo(Object);
}

function loadInanimateObjectsOnStartup() {
	var object1 = localStorage.getItem("Inanimate_Object_Slot1");
	var object2 = localStorage.getItem("Inanimate_Object_Slot2");
	var object3 = localStorage.getItem("Inanimate_Object_Slot3");
	var object4 = localStorage.getItem("Inanimate_Object_Slot4");
	var object5 = localStorage.getItem("Inanimate_Object_Slot5");
	var object6 = localStorage.getItem("Inanimate_Object_Slot6");
	var object7 = localStorage.getItem("Inanimate_Object_Slot7");
	var object8 = localStorage.getItem("Inanimate_Object_Slot8");
	var object9 = localStorage.getItem("Inanimate_Object_Slot9");
	var object10 = localStorage.getItem("Inanimate_Object_Slot10");
	
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
	
	document.getElementById('inanimateObjectName1').innerHTML = object1;
	document.getElementById('inanimateObjectEntry1').innerHTML = object1;
	
	document.getElementById('inanimateObjectName2').innerHTML = object2;
	document.getElementById('inanimateObjectEntry2').innerHTML = object2;
	
	document.getElementById('inanimateObjectName3').innerHTML = object3;
	document.getElementById('inanimateObjectEntry3').innerHTML = object3;
	
	document.getElementById('inanimateObjectName4').innerHTML = object4;
	document.getElementById('inanimateObjectEntry4').innerHTML = object4;
	
	document.getElementById('inanimateObjectName5').innerHTML = object5;
	document.getElementById('inanimateObjectEntry5').innerHTML = object5;
	
	document.getElementById('inanimateObjectName6').innerHTML = object6;
	document.getElementById('inanimateObjectEntry6').innerHTML = object6;
	
	document.getElementById('inanimateObjectName7').innerHTML = object7;
	document.getElementById('inanimateObjectEntry7').innerHTML = object7;
	
	document.getElementById('inanimateObjectName8').innerHTML = object8;
	document.getElementById('inanimateObjectEntry8').innerHTML = object8;
	
	document.getElementById('inanimateObjectName9').innerHTML = object9;
	document.getElementById('inanimateObjectEntry9').innerHTML = object9;
	
	document.getElementById('inanimateObjectName10').innerHTML = object10;
	document.getElementById('inanimateObjectEntry10').innerHTML = object10;
}

function changeCOSlot1() {
	document.getElementById("COContainerSlot11").style.display='none'; 
	document.getElementById("COContainerSlot12").style.display='block'; 
}

function goBackCOSlot1() {
	document.getElementById("COContainerSlot11").style.display='block'; 
	document.getElementById("COContainerSlot12").style.display='none'; 
}

function changeCOSlot2() {
	document.getElementById("COContainerSlot21").style.display='none'; 
	document.getElementById("COContainerSlot22").style.display='block'; 
}

function goBackCOSlot2() {
	document.getElementById("COContainerSlot21").style.display='block'; 
	document.getElementById("COContainerSlot22").style.display='none'; 
}

function changeCOSlot3() {
	document.getElementById("COContainerSlot31").style.display='none'; 
	document.getElementById("COContainerSlot32").style.display='block'; 
}

function goBackCOSlot3() {
	document.getElementById("COContainerSlot31").style.display='block'; 
	document.getElementById("COContainerSlot32").style.display='none'; 
}

function changeCOSlot4() {
	document.getElementById("COContainerSlot41").style.display='none'; 
	document.getElementById("COContainerSlot42").style.display='block'; 
}

function goBackCOSlot4() {
	document.getElementById("COContainerSlot41").style.display='block'; 
	document.getElementById("COContainerSlot42").style.display='none'; 
}

function changeCOSlot5() {
	document.getElementById("COContainerSlot51").style.display='none'; 
	document.getElementById("COContainerSlot52").style.display='block'; 
}

function goBackCOSlot5() {
	document.getElementById("COContainerSlot51").style.display='block'; 
	document.getElementById("COContainerSlot52").style.display='none'; 
}

function changeCOSlot6() {
	document.getElementById("COContainerSlot61").style.display='none'; 
	document.getElementById("COContainerSlot62").style.display='block'; 
}

function goBackCOSlot6() {
	document.getElementById("COContainerSlot61").style.display='block'; 
	document.getElementById("COContainerSlot62").style.display='none'; 
}

function changeCOSlot7() {
	document.getElementById("COContainerSlot71").style.display='none'; 
	document.getElementById("COContainerSlot72").style.display='block'; 
}

function goBackCOSlot7() {
	document.getElementById("COContainerSlot71").style.display='block'; 
	document.getElementById("COContainerSlot72").style.display='none'; 
}

function changeCOSlot8() {
	document.getElementById("COContainerSlot81").style.display='none'; 
	document.getElementById("COContainerSlot82").style.display='block'; 
}

function goBackCOSlot8() {
	document.getElementById("COContainerSlot81").style.display='block'; 
	document.getElementById("COContainerSlot82").style.display='none'; 
}

function changeCOSlot9() {
	document.getElementById("COContainerSlot91").style.display='none'; 
	document.getElementById("COContainerSlot92").style.display='block'; 
}

function goBackCOSlot9() {
	document.getElementById("COContainerSlot91").style.display='block'; 
	document.getElementById("COContainerSlot92").style.display='none'; 
}

function changeCOSlot10() {
	document.getElementById("COContainerSlot101").style.display='none'; 
	document.getElementById("COContainerSlot102").style.display='block'; 
}

function goBackCOSlot10() {
	document.getElementById("COContainerSlot101").style.display='block'; 
	document.getElementById("COContainerSlot102").style.display='none'; 
}

function setCOSlot1() {
	var object = document.getElementById("inanimateObjectSlot1TextField").value;
	localStorage.setItem("Inanimate_Object_Slot1", object);
	document.getElementById('inanimateObjectName1').innerHTML = object;
	document.getElementById('inanimateObjectEntry1').innerHTML = object;
	goBackCOSlot1();
}

function setCOSlot2() {
	var object = document.getElementById("inanimateObjectSlot2TextField").value;
	localStorage.setItem("Inanimate_Object_Slot2", object);
	document.getElementById('inanimateObjectName2').innerHTML = object;
	document.getElementById('inanimateObjectEntry2').innerHTML = object;
	goBackCOSlot2();
}

function setCOSlot3() {
	var object = document.getElementById("inanimateObjectSlot3TextField").value;
	localStorage.setItem("Inanimate_Object_Slot3", object);
	document.getElementById('inanimateObjectName3').innerHTML = object;
	document.getElementById('inanimateObjectEntry3').innerHTML = object;
	goBackCOSlot3();
}

function setCOSlot4() {
	var object = document.getElementById("inanimateObjectSlot4TextField").value;
	localStorage.setItem("Inanimate_Object_Slot4", object);
	document.getElementById('inanimateObjectName4').innerHTML = object;
	document.getElementById('inanimateObjectEntry4').innerHTML = object;
	goBackCOSlot4();
}

function setCOSlot5() {
	var object = document.getElementById("inanimateObjectSlot5TextField").value;
	localStorage.setItem("Inanimate_Object_Slot5", object);
	document.getElementById('inanimateObjectName5').innerHTML = object;
	document.getElementById('inanimateObjectEntry5').innerHTML = object;
	goBackCOSlot5();
}

function setCOSlot6() {
	var object = document.getElementById("inanimateObjectSlot6TextField").value;
	localStorage.setItem("Inanimate_Object_Slot6", object);
	document.getElementById('inanimateObjectName6').innerHTML = object;
	document.getElementById('inanimateObjectEntry6').innerHTML = object;
	goBackCOSlot6();
}

function setCOSlot7() {
	var object = document.getElementById("inanimateObjectSlot7TextField").value;
	localStorage.setItem("Inanimate_Object_Slot7", object);
	document.getElementById('inanimateObjectName7').innerHTML = object;
	document.getElementById('inanimateObjectEntry7').innerHTML = object;
	goBackCOSlot7();
}

function setCOSlot8() {
	var object = document.getElementById("inanimateObjectSlot8TextField").value;
	localStorage.setItem("Inanimate_Object_Slot8", object);
	document.getElementById('inanimateObjectName8').innerHTML = object;
	document.getElementById('inanimateObjectEntry8').innerHTML = object;
	goBackCOSlot8();
}

function setCOSlot9() {
	var object = document.getElementById("inanimateObjectSlot9TextField").value;
	localStorage.setItem("Inanimate_Object_Slot9", object);
	document.getElementById('inanimateObjectName9').innerHTML = object;
	document.getElementById('inanimateObjectEntry9').innerHTML = object;
	goBackCOSlot9();
}

function setCOSlot10() {
	var object = document.getElementById("inanimateObjectSlot10TextField").value;
	localStorage.setItem("Inanimate_Object_Slot10", object);
	document.getElementById('inanimateObjectName10').innerHTML = object;
	document.getElementById('inanimateObjectEntry10').innerHTML = object;
	goBackCOSlot10();
}