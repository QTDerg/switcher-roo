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
}

function setcockTypeTo(cockType) {
	document.getElementById('cockTypeCurrent').innerHTML = cockType;
	localStorage.setItem("Slot0_Cock_Type", cockType);
	closeCockTypeCategoryMenu();
	goBackFromcockTypeList();
	if (controlsessionactive === "Yes") {
		conn.send({firstParam: "manipulateOption", secondParam: "Cock_Type", thirdParam: cockType});
		conn.send({firstParam: "loadCharacterGenitals"});
	}
	
	var charVizEnabled = localStorage.getItem("CharViz_Enabled");
	if (charVizEnabled === "Yes") { loadCharacterGenitals(); }	
	showProcessingAnimation();
}