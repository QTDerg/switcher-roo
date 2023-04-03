function constructPromptYiffyE18() {
	var prompt;
	var negPrompt;
	var negPromptMainstay = "deformed, ugly, blurry, bad anatomy, disfigured, extra limb, deformed hands, deformed feet, face out of frame, multiple tails, ((((closeup)))), ((bad anatomy)), disfigured, deformed, malformed, mutant, monstrous, ugly, gross, disgusting, blurry, poorly drawn, extra limbs, extra fingers, missing limbs, amputee, malformed hands, multi balls, multi penis, floating penis, dialogue, text, deformed face, hair, smeared image, (((oil painting)))";
	
	var species = document.getElementById("speciesCurrent").innerHTML;
	
	rbmale = document.getElementById("radiobuttonMale");
	var sex;
	if (rbmale.checked) { sex = "Male"	}
	else 				{ sex = "Female"}
	
	var bodyType1 = mySlider6.getValue();
	
	if (sex == "Male" && bodyType1 >= 75) {
		sex = "girly";
	}
	else if (sex == "Female" && bodyType1 <= 19) {
		sex = "andromorph";
	}
	else if (sex == "Male" && bodyType1 <= 74) {
		sex = "male";
	}
	else if (sex == "Female" && bodyType1 >= 20) {
		sex = "female";
	}
	
	var bodyType2 = mySlider5.getValue();
	var bodyType3 = mySlider4.getValue();
	var hips = mySlider3.getValue();
	var genitalSize = mySlider2.getValue();
	var fluffiness = mySlider.getValue();
	var breastSizeMale = mySlider9.getValue();
	var breastSizeFemale = mySlider8.getValue();
	var buttSize = mySlider13.getValue();
	var bellySize = mySlider14.getValue();
	var hairLenght = mySlider20.getValue();
	
	var cockType = document.getElementById("cockTypeCurrent").innerHTML;
	
	prompt = "e621, explict, " + species + ", " + sex;
	negPrompt = negPromptMainstay;
	return [prompt, negPrompt];
}