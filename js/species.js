function speciesLoadList() {
	var areSettingsLocked = localStorage.getItem("Settings_Locked");
	if (areSettingsLocked === "Yes") {
		return;
	}
	else {
		document.getElementById("speciesCurrentContainer").style.display= 'none';
		document.getElementById("speciesSearch").style.display= 'none';
		document.getElementById("speciesCategorySelectorContainer").style.display= 'block';
		document.getElementById('speciesContainer').style.width = "80%";
		document.getElementById('speciesMenu').style.height = "610px";
	}
}

function goBackFromCategoryList() {
	document.getElementById("speciesCurrentContainer").style.display= 'block';
	document.getElementById("speciesSearch").style.display= 'block';
	document.getElementById("speciesCategorySelectorContainer").style.display= 'none';
	document.getElementById('speciesContainer').style.width = "70%";
	document.getElementById('speciesMenu').style.height = "62px";
}

function closeCategoryMenu() {
	document.getElementById("speciesCategorySelectorContainer").style.display = "none";
	document.getElementById("speciesSelectorMostPopular").style.display = "none";
	document.getElementById("speciesSelectorCustom").style.display = "none";
	document.getElementById("speciesSelectorAvian").style.display = "none";
	document.getElementById("speciesSelectorBovine").style.display = "none";
	document.getElementById("speciesSelectorCanine").style.display = "none";
	document.getElementById("speciesSelectorCervine").style.display = "none";
	document.getElementById("speciesSelectorEquine").style.display = "none";
	document.getElementById("speciesSelectorFeline").style.display = "none";
	document.getElementById("speciesSelectorFictional").style.display = "none";
	document.getElementById("speciesSelectorHybrid").style.display = "none";
	document.getElementById("speciesSelectorLagomorph").style.display = "none";
	document.getElementById("speciesSelectorMarsupial").style.display = "none";
	document.getElementById("speciesSelectorMustelid").style.display = "none";
	document.getElementById("speciesSelectorReptile").style.display = "none";
	document.getElementById("speciesSelectorRodent").style.display = "none";
	document.getElementById("speciesSelectorUngulate").style.display = "none";	
}

function setSpeciesTo(Species) {
	document.getElementById('speciesCurrent').innerHTML = Species;
	localStorage.setItem("Slot0_Species", Species);
	closeCategoryMenu();
	goBackFromCategoryList();
	if (controlsessionactive === "Yes") {
		conn.send({firstParam: "manipulateOption", secondParam: "Species", thirdParam: Species});
	}
	
	var charVizEnabled = localStorage.getItem("CharViz_Enabled");	
	if (charVizEnabled === "Yes") {
		var pickerEnabled = localStorage.getItem("Character_Part_And_Pattern_Picker_Enabled");	
		var setNatColorScheme = localStorage.getItem("CharViz_Set_Natural_Color_Scheme");
		var firstTime = localStorage.getItem("First_Time_Setting_Color"); // This is needed, cause when user for the first time launches CharViz would see only blank lineart
		if (setNatColorScheme === "Yes" || firstTime != "No") {
			setNaturalColorScheme(Species);
			localStorage.setItem("First_Time_Setting_Color", "No");
		}
		if (pickerEnabled != "Yes") {
			saveCharacterPartPreset(Species);
			initializeCharViz();
		}		
	}
	showProcessingAnimation();
}

function setSpeciesToCustom(x) {
	var Species = document.getElementById("speciesEntryCustom" + x).innerHTML;
	setSpeciesTo(Species);
}

function loadCustomSpeciesOnStartup() {
	var x;
	for (x = 1; x < 11; x++) {
		var species = localStorage.getItem("Custom_Species_Slot" + x);
		if (species === null) { species = "Empty" }
		document.getElementById("customSpeciesName" + x).innerHTML = "Slot " + x + " - " + species;
		document.getElementById("speciesEntryCustom" + x).innerHTML = species;
	}
}

function setCustomSpecies(x) {
	var species = document.getElementById("customSpeciesSlot" + x + "TextField").value;
	localStorage.setItem("Custom_Species_Slot" + x, species);
	document.getElementById("customSpeciesName" + x).innerHTML = "Slot " + x + " - " + species;
	document.getElementById("speciesEntryCustom" + x).innerHTML = species;
}

function switchToCustomSpeciesSet(x) {
	if (x == 1) {
		document.getElementById("customSpeciesSet1Container").style.display = "block";
		document.getElementById("customSpeciesSet2Container").style.display = "none";
	}
	else {
		document.getElementById("customSpeciesSet1Container").style.display = "none";
		document.getElementById("customSpeciesSet2Container").style.display = "block";
	}
}

function goToMostPopularCategory() {
	document.getElementById("speciesCategorySelectorContainer").style.display= 'none';
	document.getElementById("speciesSelectorMostPopular").style.display= 'block';
	document.getElementById('speciesMenu').style.height = "650px";
}

function goBackFromMostPopularCategory() {
	document.getElementById("speciesCategorySelectorContainer").style.display= 'block';
	document.getElementById("speciesSelectorMostPopular").style.display= 'none';
	document.getElementById('speciesMenu').style.height = "610px";
}

function goToCustomCategoryFromMostPopular() {
	document.getElementById("speciesSelectorMostPopular").style.display= 'none';
	document.getElementById("speciesSelectorCustom").style.display= 'block';
	document.getElementById('speciesMenu').style.height = "300px";
}

function goToMostPopularCategoryFromCustom() {
	document.getElementById("speciesSelectorCustom").style.display= 'none';
	document.getElementById("speciesSelectorMostPopular").style.display= 'block';	
	document.getElementById('speciesMenu').style.height = "650px";
}

function goToCustomCategory() {
	document.getElementById("speciesCategorySelectorContainer").style.display= 'none';
	document.getElementById("speciesSelectorCustom").style.display= 'block';
	document.getElementById('speciesMenu').style.height = "300px";
}

function goBackFromCustomCategory() {
	document.getElementById("speciesCategorySelectorContainer").style.display= 'block';
	document.getElementById("speciesSelectorCustom").style.display= 'none';
	document.getElementById('speciesMenu').style.height = "610px";
}

function goToAvianCategoryFromCustom() {
	document.getElementById("speciesSelectorCustom").style.display= 'none';
	document.getElementById("speciesSelectorAvian").style.display= 'block';	
	document.getElementById('speciesMenu').style.height = "300px";
}

function goToCustomCategoryFromAvian() {
	document.getElementById("speciesSelectorCustom").style.display= 'block';
	document.getElementById("speciesSelectorAvian").style.display= 'none';	
	document.getElementById('speciesMenu').style.height = "300px";
}

function goToAvianCategory() {
	document.getElementById("speciesCategorySelectorContainer").style.display= 'none';
	document.getElementById("speciesSelectorAvian").style.display= 'block';
	document.getElementById('speciesMenu').style.height = "300px";
}

function goBackFromAvianCategory() {
	document.getElementById("speciesCategorySelectorContainer").style.display= 'block';
	document.getElementById("speciesSelectorAvian").style.display= 'none';
	document.getElementById('speciesMenu').style.height = "610px";
}

function goToBovineCategoryFromAvian() {
	document.getElementById("speciesSelectorBovine").style.display= 'block';
	document.getElementById("speciesSelectorAvian").style.display= 'none';	
	document.getElementById('speciesMenu').style.height = "190px";
}

function goToAvianCategoryFromBovine() {
	document.getElementById("speciesSelectorBovine").style.display= 'none';
	document.getElementById("speciesSelectorAvian").style.display= 'block';	
	document.getElementById('speciesMenu').style.height = "300px";
}

function goToBovineCategory() {
	document.getElementById("speciesCategorySelectorContainer").style.display= 'none';
	document.getElementById("speciesSelectorBovine").style.display= 'block';
	document.getElementById('speciesMenu').style.height = "190px";
}

function goBackFromBovineCategory() {
	document.getElementById("speciesCategorySelectorContainer").style.display= 'block';
	document.getElementById("speciesSelectorBovine").style.display= 'none';
	document.getElementById('speciesMenu').style.height = "610px";
}

function goToCanineCategoryFromBovine() {
	document.getElementById("speciesSelectorCanine").style.display= 'block';
	document.getElementById("speciesSelectorBovine").style.display= 'none';	
	document.getElementById('speciesMenu').style.height = "330px";
}

function goToBovineCategoryFromCanine() {
	document.getElementById("speciesSelectorCanine").style.display= 'none';
	document.getElementById("speciesSelectorBovine").style.display= 'block';	
	document.getElementById('speciesMenu').style.height = "190px";
}

function goToCanineCategory() {
	document.getElementById("speciesCategorySelectorContainer").style.display= 'none';
	document.getElementById("speciesSelectorCanine").style.display= 'block';
	document.getElementById('speciesMenu').style.height = "330px";
}

function goBackFromCanineCategory() {
	document.getElementById("speciesCategorySelectorContainer").style.display= 'block';
	document.getElementById("speciesSelectorCanine").style.display= 'none';
	document.getElementById('speciesMenu').style.height = "610px";
}

function goToCervineCategoryFromCanine() {
	document.getElementById("speciesSelectorCervine").style.display= 'block';
	document.getElementById("speciesSelectorCanine").style.display= 'none';	
	document.getElementById('speciesMenu').style.height = "190px";
}

function goToCanineCategoryFromCervine() {
	document.getElementById("speciesSelectorCervine").style.display= 'none';
	document.getElementById("speciesSelectorCanine").style.display= 'block';	
	document.getElementById('speciesMenu').style.height = "330px";
}

function goToCervineCategory() {
	document.getElementById("speciesCategorySelectorContainer").style.display= 'none';
	document.getElementById("speciesSelectorCervine").style.display= 'block';
	document.getElementById('speciesMenu').style.height = "190px";
}

function goBackFromCervineCategory() {
	document.getElementById("speciesCategorySelectorContainer").style.display= 'block';
	document.getElementById("speciesSelectorCervine").style.display= 'none';
	document.getElementById('speciesMenu').style.height = "610px";
}

function goToEquineCategoryFromCervine() {
	document.getElementById("speciesSelectorCervine").style.display= 'none';
	document.getElementById("speciesSelectorEquine").style.display= 'block';	
	document.getElementById('speciesMenu').style.height = "220px";
}

function goToCervineCategoryFromEquine() {
	document.getElementById("speciesSelectorCervine").style.display= 'block';
	document.getElementById("speciesSelectorEquine").style.display= 'none';	
	document.getElementById('speciesMenu').style.height = "190px";
}

function goToEquineCategory() {
	document.getElementById("speciesCategorySelectorContainer").style.display= 'none';
	document.getElementById("speciesSelectorEquine").style.display= 'block';
	document.getElementById('speciesMenu').style.height = "220px";
}

function goBackFromEquineCategory() {
	document.getElementById("speciesCategorySelectorContainer").style.display= 'block';
	document.getElementById("speciesSelectorEquine").style.display= 'none';
	document.getElementById('speciesMenu').style.height = "610px";
}

function goToFelineCategoryFromEquine() {
	document.getElementById("speciesSelectorFeline").style.display= 'block';
	document.getElementById("speciesSelectorEquine").style.display= 'none';	
	document.getElementById('speciesMenu').style.height = "370px";
}

function goToEquineCategoryFromFeline() {
	document.getElementById("speciesSelectorFeline").style.display= 'none';
	document.getElementById("speciesSelectorEquine").style.display= 'block';	
	document.getElementById('speciesMenu').style.height = "220px";
}

function goToFelineCategory() {
	document.getElementById("speciesCategorySelectorContainer").style.display= 'none';
	document.getElementById("speciesSelectorFeline").style.display= 'block';
	document.getElementById('speciesMenu').style.height = "370px";
}

function goBackFromFelineCategory() {
	document.getElementById("speciesCategorySelectorContainer").style.display= 'block';
	document.getElementById("speciesSelectorFeline").style.display= 'none';
	document.getElementById('speciesMenu').style.height = "610px";
}

function goToFictionalCategoryFromFeline() {
	document.getElementById("speciesSelectorFeline").style.display= 'none';
	document.getElementById("speciesSelectorFictional").style.display= 'block';	
	document.getElementById('speciesMenu').style.height = "335px";
}

function goToFelineCategoryFromFictional() {
	document.getElementById("speciesSelectorFeline").style.display= 'block';
	document.getElementById("speciesSelectorFictional").style.display= 'none';	
	document.getElementById('speciesMenu').style.height = "370px";
}

function goToFictionalCategory() {
	document.getElementById("speciesCategorySelectorContainer").style.display= 'none';
	document.getElementById("speciesSelectorFictional").style.display= 'block';
	document.getElementById('speciesMenu').style.height = "335px";
}

function goBackFromFictionalCategory() {
	document.getElementById("speciesCategorySelectorContainer").style.display= 'block';
	document.getElementById("speciesSelectorFictional").style.display= 'none';
	document.getElementById('speciesMenu').style.height = "610px";
}

function goToHybridCategoryFromFictional() {
	document.getElementById("speciesSelectorHybrid").style.display= 'block';
	document.getElementById("speciesSelectorFictional").style.display= 'none';	
	document.getElementById('speciesMenu').style.height = "260px";
}

function goToFictionalCategoryFromHybrid() {
	document.getElementById("speciesSelectorHybrid").style.display= 'none';
	document.getElementById("speciesSelectorFictional").style.display= 'block';	
	document.getElementById('speciesMenu').style.height = "335px";
}

function goToHybridCategory() {
	document.getElementById("speciesCategorySelectorContainer").style.display= 'none';
	document.getElementById("speciesSelectorHybrid").style.display= 'block';
	document.getElementById('speciesMenu').style.height = "260px";
}

function goBackFromHybridCategory() {
	document.getElementById("speciesCategorySelectorContainer").style.display= 'block';
	document.getElementById("speciesSelectorHybrid").style.display= 'none';
	document.getElementById('speciesMenu').style.height = "610px";
}

function goToLagomorphCategoryFromHybrid() {
	document.getElementById("speciesSelectorHybrid").style.display= 'none';
	document.getElementById("speciesSelectorLagomorph").style.display= 'block';	
	document.getElementById('speciesMenu').style.height = "190px";
}

function goToHybridCategoryFromLagomorph() {
	document.getElementById("speciesSelectorHybrid").style.display= 'block';
	document.getElementById("speciesSelectorLagomorph").style.display= 'none';	
	document.getElementById('speciesMenu').style.height = "260px";
}

function goToLagomorphCategory() {
	document.getElementById("speciesCategorySelectorContainer").style.display= 'none';
	document.getElementById("speciesSelectorLagomorph").style.display= 'block';
	document.getElementById('speciesMenu').style.height = "190px";
}

function goBackFromLagomorphCategory() {
	document.getElementById("speciesCategorySelectorContainer").style.display= 'block';
	document.getElementById("speciesSelectorLagomorph").style.display= 'none';
	document.getElementById('speciesMenu').style.height = "610px";
}

function goToMarsupialCategoryFromLagomorph() {
	document.getElementById("speciesSelectorMarsupial").style.display= 'block';
	document.getElementById("speciesSelectorLagomorph").style.display= 'none';	
	document.getElementById('speciesMenu').style.height = "190px";
}

function goToLagomorphCategoryFromMarsupial() {
	document.getElementById("speciesSelectorMarsupial").style.display= 'none';
	document.getElementById("speciesSelectorLagomorph").style.display= 'block';	
	document.getElementById('speciesMenu').style.height = "190px";
}

function goToMarsupialCategory() {
	document.getElementById("speciesCategorySelectorContainer").style.display= 'none';
	document.getElementById("speciesSelectorMarsupial").style.display= 'block';
	document.getElementById('speciesMenu').style.height = "190px";
}

function goBackFromMarsupialCategory() {
	document.getElementById("speciesCategorySelectorContainer").style.display= 'block';
	document.getElementById("speciesSelectorMarsupial").style.display= 'none';
	document.getElementById('speciesMenu').style.height = "610px";
}

function goToMustelidCategoryFromMarsupial() {
	document.getElementById("speciesSelectorMarsupial").style.display= 'none';
	document.getElementById("speciesSelectorMustelid").style.display= 'block';	
	document.getElementById('speciesMenu').style.height = "225px";
}

function goToMarsupialCategoryFromMustelid() {
	document.getElementById("speciesSelectorMarsupial").style.display= 'block';
	document.getElementById("speciesSelectorMustelid").style.display= 'none';	
	document.getElementById('speciesMenu').style.height = "190px";
}

function goToMustelidCategory() {
	document.getElementById("speciesCategorySelectorContainer").style.display= 'none';
	document.getElementById("speciesSelectorMustelid").style.display= 'block';
	document.getElementById('speciesMenu').style.height = "225px";
}

function goBackFromMustelidCategory() {
	document.getElementById("speciesCategorySelectorContainer").style.display= 'block';
	document.getElementById("speciesSelectorMustelid").style.display= 'none';
	document.getElementById('speciesMenu').style.height = "610px";
}

function goToReptileCategoryFromMustelid() {
	document.getElementById("speciesSelectorReptile").style.display= 'block';
	document.getElementById("speciesSelectorMustelid").style.display= 'none';	
	document.getElementById('speciesMenu').style.height = "260px";
}

function goToMustelidCategoryFromReptile() {
	document.getElementById("speciesSelectorReptile").style.display= 'none';
	document.getElementById("speciesSelectorMustelid").style.display= 'block';	
	document.getElementById('speciesMenu').style.height = "225px";
}

function goToReptileCategory() {
	document.getElementById("speciesCategorySelectorContainer").style.display= 'none';
	document.getElementById("speciesSelectorReptile").style.display= 'block';
	document.getElementById('speciesMenu').style.height = "260px";
}

function goBackFromReptileCategory() {
	document.getElementById("speciesCategorySelectorContainer").style.display= 'block';
	document.getElementById("speciesSelectorReptile").style.display= 'none';
	document.getElementById('speciesMenu').style.height = "610px";
}

function goToRodentCategoryFromReptile() {
	document.getElementById("speciesSelectorReptile").style.display= 'none';
	document.getElementById("speciesSelectorRodent").style.display= 'block';	
	document.getElementById('speciesMenu').style.height = "225px";
}

function goToReptileCategoryFromRodent() {
	document.getElementById("speciesSelectorReptile").style.display= 'block';
	document.getElementById("speciesSelectorRodent").style.display= 'none';	
	document.getElementById('speciesMenu').style.height = "260px";
}

function goToRodentCategory() {
	document.getElementById("speciesCategorySelectorContainer").style.display= 'none';
	document.getElementById("speciesSelectorRodent").style.display= 'block';
	document.getElementById('speciesMenu').style.height = "225px";
}

function goBackFromRodentCategory() {
	document.getElementById("speciesCategorySelectorContainer").style.display= 'block';
	document.getElementById("speciesSelectorRodent").style.display= 'none';
	document.getElementById('speciesMenu').style.height = "610px";
}

function goToUngulateCategoryFromRodent() {
	document.getElementById("speciesSelectorUngulate").style.display= 'block';
	document.getElementById("speciesSelectorRodent").style.display= 'none';	
	document.getElementById('speciesMenu').style.height = "225px";
}

function goToRodentCategoryFromUngulate() {
	document.getElementById("speciesSelectorUngulate").style.display= 'none';
	document.getElementById("speciesSelectorRodent").style.display= 'block';	
	document.getElementById('speciesMenu').style.height = "225px";
}

function goToUngulateCategory() {
	document.getElementById("speciesCategorySelectorContainer").style.display= 'none';
	document.getElementById("speciesSelectorUngulate").style.display= 'block';
	document.getElementById('speciesMenu').style.height = "225px";
}

function goBackFromUngulateCategory() {
	document.getElementById("speciesCategorySelectorContainer").style.display= 'block';
	document.getElementById("speciesSelectorUngulate").style.display= 'none';
	document.getElementById('speciesMenu').style.height = "610px";
}