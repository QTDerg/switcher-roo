// Slot 0 is "current" state of the app. This function is triggered after loading settings from slots 1-5.
 function saveSettingsSlot0() {
	var settingSpecies = document.getElementById('speciesChoice').value 
 
	rbchoice = document.getElementById("radiobuttonMale");
	if (rbchoice.checked) {
		var settingSex = "Male"
	}
	else {
		var settingSex = "Female"
	}
 
	var tickbox = document.getElementById("adaptClothingCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
	}
	else {
		var tickbox = "No"
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
	
	var cockType = document.getElementById('cockType').value 
 
	localStorage.setItem("Slot0_Species", settingSpecies);	
    localStorage.setItem("Slot0_Sex", settingSex);	
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
	
	var custom1 = mySlider17.getValue();
	var custom2 = mySlider18.getValue();
	var custom3 = mySlider19.getValue();
 
	localStorage.setItem("Slot0_Custom_Slider1_Value", custom1);	
	localStorage.setItem("Slot0_Custom_Slider2_Value", custom2);	
	localStorage.setItem("Slot0_Custom_Slider3_Value", custom3);

	var leftText = document.getElementById("textinmenuLeftCS1").innerText;
	var centerText = document.getElementById("textinmenuCenterCS1").innerText;
	var rightText = document.getElementById("textinmenuRightCS1").innerText;
	
	localStorage.setItem("Custom_Slider1_LeftText", leftText);	
	localStorage.setItem("Custom_Slider1_CenterText", centerText);	
	localStorage.setItem("Custom_Slider1_RightText", rightText);	
	
	var leftText = document.getElementById("textinmenuLeftCS2").innerText;
	var centerText = document.getElementById("textinmenuCenterCS2").innerText;
	var rightText = document.getElementById("textinmenuRightCS2").innerText;
	
	localStorage.setItem("Custom_Slider2_LeftText", leftText);	
	localStorage.setItem("Custom_Slider2_CenterText", centerText);	
	localStorage.setItem("Custom_Slider2_RightText", rightText);	
	
	var leftText = document.getElementById("textinmenuLeftCS3").innerText;
	var centerText = document.getElementById("textinmenuCenterCS3").innerText;
	var rightText = document.getElementById("textinmenuRightCS3").innerText;
	
	localStorage.setItem("Custom_Slider3_LeftText", leftText);	
	localStorage.setItem("Custom_Slider3_CenterText", centerText);	
	localStorage.setItem("Custom_Slider3_RightText", rightText);	
}   