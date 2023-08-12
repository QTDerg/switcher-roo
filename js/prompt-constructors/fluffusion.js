function constructPromptFluffusion() {
	// WIP
	var prompt;
	var negPrompt = "";
	
	var species = document.getElementById("speciesCurrent").innerHTML;
	species = species.toLowerCase();
	
	rbmale = document.getElementById("radiobuttonMale");
	var sex;
	if (rbmale.checked) { sex = "Male"	}
	else 				{ sex = "Female"}
	
	var bodyType1 = mySlider6.getValue(); // Masc/Fem
	
	if (sex == "Male" && bodyType1 >= 75 && bodyType1 <= 85) {
		sex = "(girly:1.1), male";
	}
	else if (sex == "Male" && bodyType1 >= 86) {
		sex = "(girly:1.3), male";
	}
	else if (sex == "Female" && bodyType1 <= 19) {
		sex = "tomboy";
	}
	else if (sex == "Male" && bodyType1 <= 74) {
		sex = "male";
	}
	else if (sex == "Female" && bodyType1 >= 20) {
		sex = "female";
	}
	
	var bodyType2 = mySlider5.getValue(); // Thin/Thicc
	if (bodyType2 >= 64 && bodyType2 <= 80) {
		bodyType2 = "thick thighs, "
	}
	else if (bodyType2 >= 81) {
		bodyType2 = "(huge thighs:0.9), slightly chubby, "
	}
	else {
		bodyType2 = ""
	}
	
	var bodyType3 = mySlider4.getValue(); // Smol/Tall
	
	var hips = mySlider3.getValue();
	if (hips >= 65 && hips <= 79) {
		hips = "wide hips, "
	}
	else if (hips >= 80) {
		hips = "huge hips, "
	}
	else {
		hips = ""
	}
	
	var genitalSize = mySlider2.getValue();
	var fluffiness = mySlider.getValue();
	var buttSize = mySlider13.getValue();
	var bellySize = mySlider14.getValue();
	var hairLenght = mySlider20.getValue();
	
	var breastSizeMale = mySlider9.getValue();
	var breastSizeFemale = mySlider8.getValue();
	var breastSize;
	if (rbmale.checked) { breastSize = breastSizeMale	}
	else 				{ breastSize = breastSizeFemale	}
	
	if (breastSize >= 69 && breastSize <= 83) {
		breastSize = "big breasts, "
	}
	else if (breastSize >= 84) {
		breastSize = "huge breasts, "
	}
	else {
		breastSize = ""
	}
	
	var cockType = document.getElementById("cockTypeCurrent").innerHTML;
	
	var style = styles[localStorage.getItem("CharViz_NextGen_Style")];
	if (style == null) { style = styles[0] }
	var extra = "";
	
	prompt = "explicit, solo, anthro, " + species + ", " + sex + ", " + bodyType2 + hips + breastSize + "skirt, thigh highs, arm warmers, crop top, standing, pinup, simple background, full-length portrait " + "BREAK " + style + extra;
	return [prompt, negPrompt];
}

var styles = [
		"digital drawing \(artwork\), ",		//0
		"digital painting \(artwork\), ",		//1
		"pixel \(artwork\), ",					//2
		"traditional_media \(artwork\), ",		//3
		"watercolor \(artwork\), ",				//4
		"graphite \(artwork\), ",				//5
		"lineless, ",							//6
		"sketch, ",								//7
		"monochrome, ",							//8
		"greyscale, ",							//9
		"line art, ",							//10
		"kemono, ",								//11
		"art nouveau, ",						//12
	]