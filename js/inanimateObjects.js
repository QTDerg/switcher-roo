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
		document.getElementById('inanimateObjectsMenu').style.height = "440px";
	}
}

function goBackFromInanimateObjectsList() {
	document.getElementById("inanimateObjectsCurrentContainer").style.display= 'block';
	document.getElementById("inanimateObjectsSearch").style.display= 'block';
	document.getElementById("inanimateObjectsSelectorContainer").style.display= 'none';
	document.getElementById("inanimateObjectsPredefinedSelectorContainer").style.display= 'none';
	document.getElementById('inanimateObjectsContainer').style.width = "70%";
	document.getElementById('inanimateObjectsMenu').style.height = "62px";
}

function setInanimateObjectTo(Object) {
	document.getElementById('inanimateObjectsCurrent').innerHTML = Object;
	localStorage.setItem("Slot0_Inanimate_Object", Object);
	goBackFromInanimateObjectsList();
	
	if (controlsessionactive === "Yes") {
		conn.send({firstParam: "manipulateOption", secondParam: "Inanimate_Object", thirdParam: Object});
	}
	showProcessingAnimation();
}

function setInanimateObjectToCustom(x) {
	var Object = document.getElementById("inanimateObjectEntry" + x).innerHTML;
	setInanimateObjectTo(Object);
}

function loadInanimateObjectsOnStartup() {
	var x;
	for (x = 1; x < 11; x++) {
		var object = localStorage.getItem("Inanimate_Object_Slot" + x);
		if (object === null) { object = "Empty" }
		document.getElementById("customObjectName" + x).innerHTML = "Slot " + x + " - " + object;
		document.getElementById("inanimateObjectEntry" + x).innerHTML = object;
	}
}

function setCustomObject(x) {
	var object = document.getElementById("inanimateObjectSlot" + x + "TextField").value;
	localStorage.setItem("Inanimate_Object_Slot" + x, object);
	document.getElementById("customObjectName" + x).innerHTML = "Slot " + x + " - " + object;
	document.getElementById("inanimateObjectEntry" + x).innerHTML = object;
}

function switchToCustomObjectsSet(x) {
	if (x == 1) {
		document.getElementById("customObjectsSet1Container").style.display = "block";
		document.getElementById("customObjectsSet2Container").style.display = "none";
	}
	else {
		document.getElementById("customObjectsSet1Container").style.display = "none";
		document.getElementById("customObjectsSet2Container").style.display = "block";
	}
}

function inanimateObjectsGoToPredefinedCategory() {
	document.getElementById("inanimateObjectsSelectorContainer").style.display = 'none';
	document.getElementById("inanimateObjectsPredefinedSelectorContainer").style.display = 'block';
	document.getElementById('inanimateObjectsMenu').style.height = "410px";
}

function goBackFromPredefinedInanimateObjectsList() {
	document.getElementById("inanimateObjectsSelectorContainer").style.display = 'block';
	document.getElementById("inanimateObjectsPredefinedSelectorContainer").style.display = 'none';
	document.getElementById('inanimateObjectsMenu').style.height = "440px";
}