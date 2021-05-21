function cockTypeLoadList() {
	var areSettingsLocked = localStorage.getItem("Settings_Locked");
	if (areSettingsLocked === "Yes") {
		return;
	}
	else {
		document.getElementById("cockTypeCurrentContainer").style.display = 'none';
		document.getElementById("cockTypeSearch").style.display = 'none';
		document.getElementById("cockTypeSelectorContainer").style.display = 'block';
		document.getElementById('cockTypeContainer').style.width = "80%";
		document.getElementById('cockTypeMenu').style.height = "440px";
		document.getElementById('AdvancedSettingsContainer').style.maxHeight = "1760px";
	}
}

function goBackFromCockTypesList() {
	document.getElementById("cockTypeCurrentContainer").style.display = 'block';
	document.getElementById("cockTypeSearch").style.display = 'block';
	document.getElementById("cockTypeSelectorContainer").style.display = 'none';
	document.getElementById("cockTypeCustomSelectorContainer").style.display = 'none';
	document.getElementById('cockTypeContainer').style.width = "70%";
	document.getElementById('cockTypeMenu').style.height = "62px";
	document.getElementById('AdvancedSettingsContainer').style.maxHeight = "1330px";
}

function setCockTypeTo(cockType) {
	document.getElementById('cockTypeCurrent').innerHTML = cockType;
	localStorage.setItem("Slot0_Cock_Type", cockType);
	goBackFromCockTypesList();
	if (controlsessionactive === "Yes") {
		conn.send({firstParam: "manipulateOption", secondParam: "Cock_Type", thirdParam: cockType});
		conn.send({firstParam: "loadCharacterGenitals"});
	}
	
	var charVizEnabled = localStorage.getItem("CharViz_Enabled");
	if (charVizEnabled === "Yes") { loadCharacterGenitals(); }	
	showProcessingAnimation();
}

function setCockTypeToCustom(x) {
	var Cock = document.getElementById("cockTypeEntry" + x).innerHTML;
	setCockTypeTo(Cock);
}

function loadCockTypesOnStartup() {
	var x;
	for (x = 1; x < 11; x++) {
		var cock = localStorage.getItem("Cock_Type_Slot" + x);
		if (cock === null) { cock = "Empty" }
		document.getElementById("customCockName" + x).innerHTML = "Slot " + x + " - " + cock;
		document.getElementById("cockTypeEntry" + x).innerHTML = cock;
	}
}

function setCustomCock(x) {
	var cock = document.getElementById("cockTypeSlot" + x + "TextField").value;
	localStorage.setItem("Cock_Type_Slot" + x, cock);
	document.getElementById("customCockName" + x).innerHTML = "Slot " + x + " - " + cock;
	document.getElementById("cockTypeEntry" + x).innerHTML = cock;
}

function switchToCustomCocksSet(x) {
	if (x == 1) {
		document.getElementById("customCocksSet1Container").style.display = "block";
		document.getElementById("customCocksSet2Container").style.display = "none";
	}
	else {
		document.getElementById("customCocksSet1Container").style.display = "none";
		document.getElementById("customCocksSet2Container").style.display = "block";
	}
}

function goToCustomCockTypesCategory() {
	document.getElementById("cockTypeSelectorContainer").style.display = 'none';
	document.getElementById("cockTypeCustomSelectorContainer").style.display = 'block';
	document.getElementById('cockTypeMenu').style.height = "410px";
}

function goBackFromCustomCockTypesCategory() {
	document.getElementById("cockTypeSelectorContainer").style.display = 'block';
	document.getElementById("cockTypeCustomSelectorContainer").style.display = 'none';
	document.getElementById('cockTypeMenu').style.height = "440px";
}