// Slot 0 is "current" state of the app. This function is triggered after loading settings from slots 1-5, using Randomize function and importing App Preset.
 function saveSettingsSlot0() {
	var species = document.getElementById("speciesCurrent").innerHTML;
	var inanimateObject = document.getElementById("inanimateObjectsCurrent").innerHTML;
 
	rbmale = document.getElementById("radiobuttonMale");
	rbfemale = document.getElementById("radiobuttonFemale");
	if (rbmale.checked) {
		var sex = "Male"
	}
	else if (rbfemale.checked) {
		var sex = "Female"
	}
	else {
		var sex = document.getElementById("thirdSexValue").innerHTML;
		localStorage.setItem("Slot0_Third_Sex", sex);
		checkThirdSexStatus();
	}
 
	var tickbox = document.getElementById("adaptClothingCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
	}
	else {
		var tickbox = "No"
	}
	
	var tickbox2 = document.getElementById("pregnancyLockCheckbox");
	if (tickbox2.checked) {
		var tickbox2 = "Yes"
	}
	else {
		var tickbox2 = "No"
	}

	var tickbox3 = document.getElementById("genitalsPenisCheckbox");
	if (tickbox3.checked) {
		var tickbox3 = "Yes"
	}
	else {
		var tickbox3 = "No"
	}
	
	var tickbox4 = document.getElementById("genitalsVaginaCheckbox");
	if (tickbox4.checked) {
		var tickbox4 = "Yes"
	}
	else {
		var tickbox4 = "No"
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
 
	localStorage.setItem("Slot0_Species", species);	
	localStorage.setItem("Slot0_Inanimate_Object", inanimateObject);	
    localStorage.setItem("Slot0_Sex", sex);	
	localStorage.setItem("Slot0_AC_Box_Ticked", tickbox);
	localStorage.setItem("Slot0_Body_Type1", bodyType1);
	localStorage.setItem("Slot0_Body_Type2", bodyType2);
	localStorage.setItem("Slot0_Body_Type3", bodyType3);
	localStorage.setItem("Slot0_Hips", hips);
	localStorage.setItem("Slot0_Genital_Size", genitalSize);
	localStorage.setItem("Slot0_Fluffiness", fluffiness);
	localStorage.setItem("Slot0_Libido", libido);
	localStorage.setItem("Slot0_Position_Preference", domsub);
	localStorage.setItem("Slot0_Sensitivity", sensitivity);
	localStorage.setItem("Slot0_Demeanor", assertiveShy); 
	localStorage.setItem("Slot0_Breast_Size_Male", breastSizeMale); 
	localStorage.setItem("Slot0_Breast_Size_Female", breastSizeFemale); 
	localStorage.setItem("Slot0_Butt_Size", buttSize);
	localStorage.setItem("Slot0_Belly_Size", bellySize);
	localStorage.setItem("Slot0_Belly_Shape", bellyShape);
	localStorage.setItem("Slot0_Intelligence", intelligence);
	localStorage.setItem("Slot0_Cock_Type", cockType);
	localStorage.setItem("Slot0_Hair_Lenght", hairLenght);
	localStorage.setItem("Slot0_Pregnancy_Lock_Box_Ticked", tickbox2);
	localStorage.setItem("Slot0_Fertility", fertility);
	localStorage.setItem("Slot0_Genitals_Menu_Penis_Box_Ticked", tickbox3);
	localStorage.setItem("Slot0_Genitals_Menu_Vagina_Box_Ticked", tickbox4);
}   