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
	initializeCharViz();
	showProcessingAnimation();
}

function setSpeciesToCustom(slotNumber) {
	if (slotNumber === "Slot_One") {
		var Species = document.getElementById('speciesEntryCustom1').innerHTML;		
	}
	if (slotNumber === "Slot_Two") {
		var Species = document.getElementById('speciesEntryCustom2').innerHTML;		
	}
	if (slotNumber === "Slot_Three") {
		var Species = document.getElementById('speciesEntryCustom3').innerHTML;		
	}
	if (slotNumber === "Slot_Four") {
		var Species = document.getElementById('speciesEntryCustom4').innerHTML;		
	}
	if (slotNumber === "Slot_Five") {
		var Species = document.getElementById('speciesEntryCustom5').innerHTML;		
	}
	if (slotNumber === "Slot_Six") {
		var Species = document.getElementById('speciesEntryCustom6').innerHTML;		
	}
	if (slotNumber === "Slot_Seven") {
		var Species = document.getElementById('speciesEntryCustom7').innerHTML;		
	}
	if (slotNumber === "Slot_Eight") {
		var Species = document.getElementById('speciesEntryCustom8').innerHTML;		
	}
	if (slotNumber === "Slot_Nine") {
		var Species = document.getElementById('speciesEntryCustom9').innerHTML;		
	}
	if (slotNumber === "Slot_Ten") {
		var Species = document.getElementById('speciesEntryCustom10').innerHTML;		
	}
	setSpeciesTo(Species);
}

function loadCustomSpeciesOnStartup() {
	var species1 = localStorage.getItem("Custom_Species_Slot1");
	var species2 = localStorage.getItem("Custom_Species_Slot2");
	var species3 = localStorage.getItem("Custom_Species_Slot3");
	var species4 = localStorage.getItem("Custom_Species_Slot4");
	var species5 = localStorage.getItem("Custom_Species_Slot5");
	var species6 = localStorage.getItem("Custom_Species_Slot6");
	var species7 = localStorage.getItem("Custom_Species_Slot7");
	var species8 = localStorage.getItem("Custom_Species_Slot8");
	var species9 = localStorage.getItem("Custom_Species_Slot9");
	var species10 = localStorage.getItem("Custom_Species_Slot10");
	
	if (species1 === null) {
		species1 = "Empty";
	}
	if (species2 === null) {
		species2 = "Empty";
	}
	if (species3 === null) {
		species3 = "Empty";
	}
	if (species4 === null) {
		species4 = "Empty";
	}
	if (species5 === null) {
		species5 = "Empty";
	}
	if (species6 === null) {
		species6 = "Empty";
	}
	if (species7 === null) {
		species7 = "Empty";
	}
	if (species8 === null) {
		species8 = "Empty";
	}
	if (species9 === null) {
		species9 = "Empty";
	}
	if (species10 === null) {
		species10 = "Empty";
	}
	
	document.getElementById('customSpeciesName1').innerHTML = species1;
	document.getElementById('speciesEntryCustom1').innerHTML = species1;
	
	document.getElementById('customSpeciesName2').innerHTML = species2;
	document.getElementById('speciesEntryCustom2').innerHTML = species2;
	
	document.getElementById('customSpeciesName3').innerHTML = species3;
	document.getElementById('speciesEntryCustom3').innerHTML = species3;
	
	document.getElementById('customSpeciesName4').innerHTML = species4;
	document.getElementById('speciesEntryCustom4').innerHTML = species4;
	
	document.getElementById('customSpeciesName5').innerHTML = species5;
	document.getElementById('speciesEntryCustom5').innerHTML = species5;
	
	document.getElementById('customSpeciesName6').innerHTML = species6;
	document.getElementById('speciesEntryCustom6').innerHTML = species6;
	
	document.getElementById('customSpeciesName7').innerHTML = species7;
	document.getElementById('speciesEntryCustom7').innerHTML = species7;
	
	document.getElementById('customSpeciesName8').innerHTML = species8;
	document.getElementById('speciesEntryCustom8').innerHTML = species8;
	
	document.getElementById('customSpeciesName9').innerHTML = species9;
	document.getElementById('speciesEntryCustom9').innerHTML = species9;
	
	document.getElementById('customSpeciesName10').innerHTML = species10;
	document.getElementById('speciesEntryCustom10').innerHTML = species10;
}

function changeCSSlot1() {
	document.getElementById("CSContainerSlot11").style.display='none'; 
	document.getElementById("CSContainerSlot12").style.display='block'; 
}

function goBackCSSlot1() {
	document.getElementById("CSContainerSlot11").style.display='block'; 
	document.getElementById("CSContainerSlot12").style.display='none'; 
}

function changeCSSlot2() {
	document.getElementById("CSContainerSlot21").style.display='none'; 
	document.getElementById("CSContainerSlot22").style.display='block'; 
}

function goBackCSSlot2() {
	document.getElementById("CSContainerSlot21").style.display='block'; 
	document.getElementById("CSContainerSlot22").style.display='none'; 
}

function changeCSSlot3() {
	document.getElementById("CSContainerSlot31").style.display='none'; 
	document.getElementById("CSContainerSlot32").style.display='block'; 
}

function goBackCSSlot3() {
	document.getElementById("CSContainerSlot31").style.display='block'; 
	document.getElementById("CSContainerSlot32").style.display='none'; 
}

function changeCSSlot4() {
	document.getElementById("CSContainerSlot41").style.display='none'; 
	document.getElementById("CSContainerSlot42").style.display='block'; 
}

function goBackCSSlot4() {
	document.getElementById("CSContainerSlot41").style.display='block'; 
	document.getElementById("CSContainerSlot42").style.display='none'; 
}

function changeCSSlot5() {
	document.getElementById("CSContainerSlot51").style.display='none'; 
	document.getElementById("CSContainerSlot52").style.display='block'; 
}

function goBackCSSlot5() {
	document.getElementById("CSContainerSlot51").style.display='block'; 
	document.getElementById("CSContainerSlot52").style.display='none'; 
}

function changeCSSlot6() {
	document.getElementById("CSContainerSlot61").style.display='none'; 
	document.getElementById("CSContainerSlot62").style.display='block'; 
}

function goBackCSSlot6() {
	document.getElementById("CSContainerSlot61").style.display='block'; 
	document.getElementById("CSContainerSlot62").style.display='none'; 
}

function changeCSSlot7() {
	document.getElementById("CSContainerSlot71").style.display='none'; 
	document.getElementById("CSContainerSlot72").style.display='block'; 
}

function goBackCSSlot7() {
	document.getElementById("CSContainerSlot71").style.display='block'; 
	document.getElementById("CSContainerSlot72").style.display='none'; 
}

function changeCSSlot8() {
	document.getElementById("CSContainerSlot81").style.display='none'; 
	document.getElementById("CSContainerSlot82").style.display='block'; 
}

function goBackCSSlot8() {
	document.getElementById("CSContainerSlot81").style.display='block'; 
	document.getElementById("CSContainerSlot82").style.display='none'; 
}

function changeCSSlot9() {
	document.getElementById("CSContainerSlot91").style.display='none'; 
	document.getElementById("CSContainerSlot92").style.display='block'; 
}

function goBackCSSlot9() {
	document.getElementById("CSContainerSlot91").style.display='block'; 
	document.getElementById("CSContainerSlot92").style.display='none'; 
}

function changeCSSlot10() {
	document.getElementById("CSContainerSlot101").style.display='none'; 
	document.getElementById("CSContainerSlot102").style.display='block'; 
}

function goBackCSSlot10() {
	document.getElementById("CSContainerSlot101").style.display='block'; 
	document.getElementById("CSContainerSlot102").style.display='none'; 
}

function setCSSlot1() {
	var species = document.getElementById("customSpeciesSlot1TextField").value;
	localStorage.setItem("Custom_Species_Slot1", species);
	document.getElementById('customSpeciesName1').innerHTML = species;
	document.getElementById('speciesEntryCustom1').innerHTML = species;
	goBackCSSlot1();
}

function setCSSlot2() {
	var species = document.getElementById("customSpeciesSlot2TextField").value;
	localStorage.setItem("Custom_Species_Slot2", species);
	document.getElementById('customSpeciesName2').innerHTML = species;
	document.getElementById('speciesEntryCustom2').innerHTML = species;
	goBackCSSlot2();
}

function setCSSlot3() {
	var species = document.getElementById("customSpeciesSlot3TextField").value;
	localStorage.setItem("Custom_Species_Slot3", species);
	document.getElementById('customSpeciesName3').innerHTML = species;
	document.getElementById('speciesEntryCustom3').innerHTML = species;
	goBackCSSlot3();
}

function setCSSlot4() {
	var species = document.getElementById("customSpeciesSlot4TextField").value;
	localStorage.setItem("Custom_Species_Slot4", species);
	document.getElementById('customSpeciesName4').innerHTML = species;
	document.getElementById('speciesEntryCustom4').innerHTML = species;
	goBackCSSlot4();
}

function setCSSlot5() {
	var species = document.getElementById("customSpeciesSlot5TextField").value;
	localStorage.setItem("Custom_Species_Slot5", species);
	document.getElementById('customSpeciesName5').innerHTML = species;
	document.getElementById('speciesEntryCustom5').innerHTML = species;
	goBackCSSlot5();
}

function setCSSlot6() {
	var species = document.getElementById("customSpeciesSlot6TextField").value;
	localStorage.setItem("Custom_Species_Slot6", species);
	document.getElementById('customSpeciesName6').innerHTML = species;
	document.getElementById('speciesEntryCustom6').innerHTML = species;
	goBackCSSlot6();
}

function setCSSlot7() {
	var species = document.getElementById("customSpeciesSlot7TextField").value;
	localStorage.setItem("Custom_Species_Slot7", species);
	document.getElementById('customSpeciesName7').innerHTML = species;
	document.getElementById('speciesEntryCustom7').innerHTML = species;
	goBackCSSlot7();
}

function setCSSlot8() {
	var species = document.getElementById("customSpeciesSlot8TextField").value;
	localStorage.setItem("Custom_Species_Slot8", species);
	document.getElementById('customSpeciesName8').innerHTML = species;
	document.getElementById('speciesEntryCustom8').innerHTML = species;
	goBackCSSlot8();
}

function setCSSlot9() {
	var species = document.getElementById("customSpeciesSlot9TextField").value;
	localStorage.setItem("Custom_Species_Slot9", species);
	document.getElementById('customSpeciesName9').innerHTML = species;
	document.getElementById('speciesEntryCustom9').innerHTML = species;
	goBackCSSlot9();
}

function setCSSlot10() {
	var species = document.getElementById("customSpeciesSlot10TextField").value;
	localStorage.setItem("Custom_Species_Slot10", species);
	document.getElementById('customSpeciesName10').innerHTML = species;
	document.getElementById('speciesEntryCustom10').innerHTML = species;
	goBackCSSlot10();
}

function goToMostPopularCategory() {
	document.getElementById("speciesCategorySelectorContainer").style.display= 'none';
	document.getElementById("speciesSelectorMostPopular").style.display= 'block';
	document.getElementById('speciesMenu').style.height = "620px";
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
	document.getElementById('speciesMenu').style.height = "620px";
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