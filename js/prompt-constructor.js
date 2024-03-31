function constructPrompt() {
	// WIP
	// Recommended model - Pony Diffusion V6 XL - https://civitai.com/models/257749/pony-diffusion-v6-xl
	
	// Or EasyFluff V11.2 - https://huggingface.co/zatochu/EasyFluff/tree/main
	// Download this LoRA (v3.0) - https://civitai.com/models/127533
	var prompt;
	var negPrompt = "";
	var emphasis;
	
	var species = document.getElementById("speciesCurrent").innerHTML;
	species = species.toLowerCase();
	species = species + ", ";
	
	rbmale = document.getElementById("radiobuttonMale");
	var sex;
	if (rbmale.checked) { sex = "male, " 	}	
	else 				{ sex = "female, "	}
	
	var isClothed = localStorage.getItem("CharViz_NextGen_Outfit");
	if (isClothed == 0 || isClothed == null) {
		isClothed = false
	}
	else {
		isClothed = true
	}
	
	var bodyType1 = mySlider6.getValue(); // Masc/Fem
	
	if (sex == "male, " && bodyType1 >= 60 && bodyType1 <= 100) {
		emphasis = Math.round((mapRange(bodyType1, 60, 100, 0.75, 1.3) + Number.EPSILON) * 100) / 100;
		bodyType1 = "(girly:" + emphasis + "), ";
	}
	else if (sex == "male, " && bodyType1 >= 0 && bodyType1 <= 25) {
		emphasis = Math.round((mapRange(bodyType1, 0, 25, 1.2, 0.75) + Number.EPSILON) * 100) / 100;
		bodyType1 = "(musclegut:" + emphasis + "), ";
	}
	else if (sex == "female, " && bodyType1 <= 19) {
		bodyType1 = "tomboy, ";
	}
	else {
		bodyType1 = "";
	}
	
	var bodyType2 = mySlider5.getValue(); // Thin/Thicc
	var thighs = bodyType2;
	
	if (bodyType2 >= 60 && bodyType2 <= 100) {
		emphasis = Math.round((mapRange(bodyType2, 60, 100, 0.7, 1.3) + Number.EPSILON) * 100) / 100;
		bodyType2 = "(voluptuous:" + emphasis + "), ";
	}
	if (bodyType2 >= 0 && bodyType2 <= 40) {
		emphasis = Math.round((mapRange(bodyType2, 0, 40, 1.3, 0.7) + Number.EPSILON) * 100) / 100;
		bodyType2 = "(slim:" + emphasis + "), ";
	}
	else {
		bodyType2 = "";
	}
	
	if (thighs >= 60 && thighs <= 79) {
		emphasis = Math.round((mapRange(thighs, 60, 79, 0.8, 1.1) + Number.EPSILON) * 100) / 100;
		thighs = "(thick thighs:" + emphasis + "), ";
	}
	else if (thighs >= 80 && thighs <= 94) {
		emphasis = Math.round((mapRange(thighs, 80, 94, 0.95, 1.25) + Number.EPSILON) * 100) / 100;
		thighs = "(huge thighs:" + emphasis + "), ";
	}
	else if (thighs >= 95 && thighs <= 100) {
		emphasis = Math.round((mapRange(thighs, 95, 100, 1.0, 1.2) + Number.EPSILON) * 100) / 100;
		thighs = "(hyper thighs:" + emphasis + "), ";
	}
	else {
		thighs = ""
	}
	
	var hips = mySlider3.getValue();
	var hipsNeg = "";
	if (hips >= 0 && hips <= 19) {
		emphasis = Math.round((mapRange(hips, 0, 19, 1.0, 0.8) + Number.EPSILON) * 100) / 100;
		hipsNeg = "(wide hips:" + emphasis + "), ";
		hips = "";
	}
	else if (hips >= 20 && hips <= 74) {
		emphasis = Math.round((mapRange(hips, 20, 74, 0.5, 1.2) + Number.EPSILON) * 100) / 100;
		hips = "(wide hips:" + emphasis + "), ";
	}
	else if (hips >= 75 && hips <= 89) {
		emphasis = Math.round((mapRange(hips, 75, 89, 0.9, 1.15) + Number.EPSILON) * 100) / 100;
		hips = "(huge hips:" + emphasis + "), ";
	}
	else if (hips >= 90) {
		emphasis = Math.round((mapRange(hips, 90, 100, 0.95, 1.2) + Number.EPSILON) * 100) / 100;
		hips = "(hyper hips:" + emphasis + "), ";
	}
	
	var genitalSize = mySlider2.getValue();
	var fluffiness = mySlider.getValue();
	
	if (fluffiness >= 70 && species == "dragon, ") {
		species = "furred dragon, (fluffy:1.3), ";
	}
	
	var buttSize = mySlider13.getValue();
	
	var muscularity = CustomSliderNo1.getValue();
	var muscularityNeg = "";
	if (muscularity >= 0 && muscularity <= 35) {
		emphasis = Math.round((mapRange(muscularity, 0, 35, 1.2, 0.7) + Number.EPSILON) * 100) / 100;
		muscularityNeg = "(muscular:" + emphasis + "), ";
		muscularity = "";
	}
	else if (muscularity >= 65 && muscularity <= 100) {
		emphasis = Math.round((mapRange(muscularity, 65, 100, 0.7, 1.4) + Number.EPSILON) * 100) / 100;
		muscularity = "(muscular:" + emphasis + "), ";
	}
	else {
		muscularity = "";
	}
	
	var bodyFat = CustomSliderNo2.getValue();
	var bodyFatNeg = "";
	if (bodyFat >= 0 && bodyFat <= 20) {
		emphasis = Math.round((mapRange(bodyFat, 0, 20, 1.2, 0.8) + Number.EPSILON) * 100) / 100;
		bodyFatNeg = "(obese:" + emphasis + "), ";
		bodyFat = "";
	}
	else if (bodyFat >= 21 && bodyFat <= 45) {
		emphasis = Math.round((mapRange(bodyFat, 21, 45, 1.2, 0.7) + Number.EPSILON) * 100) / 100;
		bodyFatNeg = "(slightly chubby:" + emphasis + "), ";
		bodyFat = "";
	}
	else if (bodyFat >= 55 && bodyFat <= 79) {
		emphasis = Math.round((mapRange(bodyFat, 55, 79, 0.7, 1.2) + Number.EPSILON) * 100) / 100;
		bodyFat = "(slightly chubby:" + emphasis + "), ";
	}
	else if (bodyFat >= 80 && bodyFat <= 100) {
		emphasis = Math.round((mapRange(bodyFat, 80, 100, 0.8, 1.2) + Number.EPSILON) * 100) / 100;
		bodyFat = "(obese:" + emphasis + "), ";
	}
	else {
		bodyFat = "";
	}
	
	var bellySize = mySlider14.getValue();
	var hairLenght = mySlider20.getValue();
	
	var breastSizeMale = mySlider9.getValue();
	var breastSizeFemale = mySlider8.getValue();
	var breastSize;
	if (rbmale.checked) { breastSize = breastSizeMale	}
	else 				{ breastSize = breastSizeFemale	}
	
	var breastSizeNeg = "";
	
	var method = 1;
	if (method = 0) {
	if (breastSize == 0) {
		//breastSize = "flat chested, "
		breastSize = "";
		breastSizeNeg = "breasts, ";
	}
	else if (breastSize >= 1 && breastSize <= 20) {
		emphasis = Math.round((mapRange(breastSize, 1, 20, 0.75, 1.2) + Number.EPSILON) * 100) / 100;
		breastSize = "(small breasts:" + emphasis + "), ";
	}
	else if (breastSize >= 21 && breastSize <= 40) {
		emphasis = Math.round((mapRange(breastSize, 21, 40, 0.85, 1.2) + Number.EPSILON) * 100) / 100;
		breastSize = "(breasts:" + emphasis + "), ";
	}
	else if (breastSize >= 41 && breastSize <= 60) {
		emphasis = Math.round((mapRange(breastSize, 41, 60, 0.75, 1.15) + Number.EPSILON) * 100) / 100;
		breastSize = "(big breasts:" + emphasis + "), ";
	}
	else if (breastSize >= 61 && breastSize <= 80) {
		emphasis = Math.round((mapRange(breastSize, 61, 80, 0.8, 1.2) + Number.EPSILON) * 100) / 100;
		breastSize = "(huge breasts:" + emphasis + "), ";
	}
	else if (breastSize >= 81 && breastSize <= 100) {
		emphasis = Math.round((mapRange(breastSize, 81, 100, 0.85, 1.25) + Number.EPSILON) * 100) / 100;
		breastSize = "(hyper breasts:" + emphasis + "), ";
	}
	}
	
	else {
	if (breastSize == 0) {
		breastSize = "";
	}
	else if (breastSize >= 1 && breastSize <= 20) {
		ratio = Math.round((mapRange(breastSize, 0, 20, 0.99, 0) + Number.EPSILON) * 100) / 100;
		breastSize = "[flat chested:small breasts:" + ratio + "], ";
	}
	else if (breastSize >= 21 && breastSize <= 40) {
		ratio = Math.round((mapRange(breastSize, 21, 40, 0.99, 0) + Number.EPSILON) * 100) / 100;
		breastSize = "[small breasts:breasts:" + ratio + "], ";
	}
	else if (breastSize >= 41 && breastSize <= 60) {
		ratio = Math.round((mapRange(breastSize, 41, 60, 0.99, 0) + Number.EPSILON) * 100) / 100;
		breastSize = "[breasts:big breasts:" + ratio + "], ";
	}
	else if (breastSize >= 61 && breastSize <= 80) {
		ratio = Math.round((mapRange(breastSize, 61, 80, 0.99, 0) + Number.EPSILON) * 100) / 100;
		breastSize = "[big breasts:huge breasts:" + ratio + "], ";
	}
	else if (breastSize >= 81 && breastSize <= 100) {
		ratio = Math.round((mapRange(breastSize, 81, 100, 0.99, 0) + Number.EPSILON) * 100) / 100;
		breastSize = "[huge breasts:hyper breasts:" + ratio + "], ";
	}
	
	}
	
	var cockType = document.getElementById("cockTypeCurrent").innerHTML;
	
	var isNakedNeg; // Variables with "Neg" are used in negative prompt
	if (isClothed == true) {
		isClothed = "clothed, ";
		isNakedNeg = "naked, "
	}
	else {
		isClothed = "";
		isNakedNeg = ""
	}
	
	var style = styles[localStorage.getItem("CharViz_NextGen_Style")];
	if (style == null) { style = "" }
	
	var outfit = outfits[localStorage.getItem("CharViz_NextGen_Outfit_Category")].items[localStorage.getItem("CharViz_NextGen_Outfit")].prompt;
	if (outfit == null) { outfit = "" }
	
	var useLora = false;
	var loraActivation = "";
	var loraPos = "";
	var loraNeg = "";	
	
	// Set LoRA version // 0.5 / 1.0 / 2.0 / 3.0 / 4
	var loraV = "4";
	
	// Set LoRA strength
	var loraStr = localStorage.getItem("CharViz_NextGen_LoRA_Strength");
	if (loraStr == null) { loraStr = 1.6 }
	
	var loraPosTags;
	if (loraV == "0.5") {
		loraPosTags = "masterpiece, best quality"
	}
	else if (loraV == "4") {
		loraPosTags = "best quality, good quality"
	}
	else {
		loraPosTags = "best quality, high quality"
	}
	
	var loraNegTags;
	if (loraV == "4") {
		loraNegTags = "worst quality, bad quality"
	}
	else {
		loraNegTags = "worst quality, low quality, normal quality"
	}
	
	if (useLora == true) {
		loraPos = "(" + loraPosTags + ":" + loraStr + ")";
		loraNeg = "(" + loraNegTags + ":" + loraStr + ")";
		if (loraV == "4") {
			loraActivation = " <lora:fluffyrock-quality-tags-v" + loraV + ">";
		}
		else {
			loraActivation = " <lora:fluffyrock-quality-tags-v" + loraV + "-vpred:1>";
		}
		
	}
	
	var extra = document.getElementById("charVizNextGenExtraPrompt").value;
	if (extra != "" && loraPos != "") {
		loraPos = loraPos + ",";
	}
	if (extra != "") {
		extra = " " + extra;
	}
	if (loraNeg != "") {
		loraNeg = loraNeg + ", ";
	}
	
	var debugClearClothingVars = true;
	if (debugClearClothingVars == true) {
		isClothed = "";
		isNakedNeg = ""
	}
	
	// Good seeds: 265423
	var ponyDiff = true;
	if (ponyDiff == true) {
		loraPos = "score_9, score_8_up, score_7_up, score_6_up, score_5_up, score_4_up, source_furry";
		loraActivation = "";
		loraNeg = "(source filmmaker:0.3), ((derpibooru_p_low)), (disfigured), bad, ugly, anime, text, ((bad anatomy))";
		if (extra != "") {
			loraPos = loraPos + " ,";
		}
	}
	
	// Transformation prompt overrides
	if (transformationOverrideSex != "") {
		sex = transformationOverrideSex
	}
	// half-length portrait three-quarter portrait full-length portrait
	prompt = "solo, anthro, " + species + sex + bodyType1 + bodyType2 + thighs + muscularity + bodyFat + hips + breastSize + isClothed + outfit + "standing, pinup, simple background " + "BREAK " + style + loraPos + extra + loraActivation;
	negPrompt = isNakedNeg + muscularityNeg + bodyFatNeg + breastSizeNeg + hipsNeg + loraNeg
	return [prompt, negPrompt];
}