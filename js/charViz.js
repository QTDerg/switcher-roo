function toggleCharViz() {
var tickbox = document.getElementById("charVizCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("menuCharViz").style.display = 'block';
		document.getElementById("charVizCharacterColorsToggler").style.display = 'block';
		document.getElementById("charVizClothToggler").style.display = 'block';
		document.getElementById("charVizClothColorsToggler").style.display = 'block';
		document.getElementById("charVizOptionToggler").style.display = 'block';
		document.getElementById("charVizCreditsToggler").style.display = 'block';
		initializeCharViz();
	}
	else {
		var tickbox = "No"
		document.getElementById("menuCharViz").style.display = 'none';
		document.getElementById("charVizCharacterColorsToggler").style.display = 'none';
		document.getElementById("charVizClothToggler").style.display = 'none';
		document.getElementById("charVizClothColorsToggler").style.display = 'none';
		document.getElementById("charVizOptionToggler").style.display = 'none';
		document.getElementById("charVizCreditsToggler").style.display = 'none';
	}
	localStorage.setItem("CharViz_Enabled", tickbox);
}

function charVizStartup() {
	var x = localStorage.getItem("CharViz_Enabled");
	if (x === "Yes") {
		document.getElementById("menuCharViz").style.display = 'block';
		document.getElementById("charVizCharacterColorsToggler").style.display = 'block';
		document.getElementById("charVizClothToggler").style.display = 'block';
		document.getElementById("charVizClothColorsToggler").style.display = 'block';
		document.getElementById("charVizOptionToggler").style.display = 'block';
		document.getElementById("charVizCreditsToggler").style.display = 'block';
		document.getElementById("charVizCheckbox").checked = true;
		initializeCharViz();
	}
	else {
		document.getElementById("menuCharViz").style.display = 'none';
		document.getElementById("charVizCharacterColorsToggler").style.display = 'none';
		document.getElementById("charVizClothToggler").style.display = 'none';
		document.getElementById("charVizClothColorsToggler").style.display = 'none';
		document.getElementById("charVizOptionToggler").style.display = 'none';
		document.getElementById("charVizCreditsToggler").style.display = 'none';
	}
}

var charVizEventsInitialized;

function initializeCharViz() {
	// Species
	var species = localStorage.getItem("Slot0_Species");
	// Currently only canine species are supported
	if (species === 'African Wild Dog' || species === 'Arctic Fox' || species === 'Coyote' || species === 'Dog' || species === 'Ethiopian Wolf' || species === 'Fennec Fox' || species === 'Folf' || species === 'Fox' || species === 'Husky' || species === 'Maned Wolf' || species === 'Werewolf' || species === 'Wolf' || species === 'Wox' || species === 'Wusky') {
		document.getElementById("charVizDisplayMessage").style.display = 'none';
		// Set a base masks
		document.getElementById("charVizDisplayBasePrimary").style.webkitMaskImage = 'url("./images/charViz/bases/feminine/fluffy/primary.png")';
		document.getElementById("charVizDisplayBaseSecondary").style.webkitMaskImage = 'url("./images/charViz/bases/feminine/fluffy/secondary.png")';
		document.getElementById("charVizDisplayBaseTertiary").style.webkitMaskImage = 'url("./images/charViz/bases/feminine/fluffy/tertiary.png")';
		document.getElementById("charVizDisplayBaseMarkings").style.webkitMaskImage = 'url("./images/charViz/bases/feminine/fluffy/markings.png")';		
		document.getElementById("charVizDisplayBaseLines").style.backgroundImage = 'url("./images/charViz/bases/feminine/fluffy/lines.png")';
		
		// Set tail
		document.getElementById("charVizDisplayTailPrimary").style.webkitMaskImage = 'url("./images/charViz/tails/fluffy01/primary.png")';
		document.getElementById("charVizDisplayTailSecondary").style.webkitMaskImage = 'url("./images/charViz/tails/fluffy01/secondary.png")';
		document.getElementById("charVizDisplayTailTertiary").style.webkitMaskImage = 'url("./images/charViz/tails/fluffy01/tertiary.png")';
		//document.getElementById("charVizDisplayTailMarkings").style.webkitMaskImage = 'url("./images/charViz/tails/fluffy01/markings.png")';
		document.getElementById("charVizDisplayTailLines").style.backgroundImage = 'url("./images/charViz/tails/fluffy01/lines.png")';
		
		// Set body morphs
		// Breast size
		document.getElementById("charVizDisplayBreastSizePrimary").style.webkitMaskImage = 'url(./images/charViz/bases/feminine/fluffy/breastSize/primary.png)';
		document.getElementById("charVizDisplayBreastSizeSecondary").style.webkitMaskImage = 'url("./images/charViz/bases/feminine/fluffy/breastSize/secondary.png")';
		document.getElementById("charVizDisplayBreastSizeMarkings").style.webkitMaskImage = 'url("./images/charViz/bases/feminine/fluffy/breastSize/markings.png")';
		document.getElementById("charVizDisplayBreastSizeLines").style.backgroundImage = 'url(./images/charViz/bases/feminine/fluffy/breastSize/lines.png)';
		
		var Sex = localStorage.getItem("Slot0_Sex");
		
		if (Sex == "Male" || Sex == "Femboy") {
			var breastSize = mySlider9.getValue();
		}
		else {
			var breastSize = mySlider8.getValue();
		}
		
		setBreastSizeBodyMorph(breastSize);
				
		// Hips size
		
		document.getElementById("charVizDisplayHipsSizePrimary").style.webkitMaskImage = 'url(./images/charViz/bases/feminine/fluffy/hipsSize/primary.png)';
		document.getElementById("charVizDisplayHipsSizeSecondary").style.webkitMaskImage = 'url("./images/charViz/bases/feminine/fluffy/hipsSize/secondary.png")';
		document.getElementById("charVizDisplayHipsSizeMarkings").style.webkitMaskImage = 'url("./images/charViz/bases/feminine/fluffy/hipsSize/markings.png")';
		document.getElementById("charVizDisplayHipsSizeLines").style.backgroundImage = 'url(./images/charViz/bases/feminine/fluffy/hipsSize/lines.png)';

		var hipsSize = mySlider3.getValue();
		setHipsSizeBodyMorph(hipsSize);
		
		// Head
		
		document.getElementById("charVizDisplayHeadPrimary").style.webkitMaskImage = 'url(./images/charViz/heads/canine/primary.png)';
		document.getElementById("charVizDisplayHeadSecondary").style.webkitMaskImage = 'url(./images/charViz/heads/canine/secondary.png)';
		document.getElementById("charVizDisplayHeadTertiary").style.webkitMaskImage = 'url(./images/charViz/heads/canine/tertiary.png)';
		document.getElementById("charVizDisplayHeadHair").style.webkitMaskImage = 'url(./images/charViz/heads/canine/hair.png)';
		document.getElementById("charVizDisplayHeadScleras").style.backgroundImage = 'url(./images/charViz/heads/canine/scleras.png)';
		document.getElementById("charVizDisplayHeadIrisLeft").style.webkitMaskImage = 'url(./images/charViz/heads/canine/irisLeft.png)';
		document.getElementById("charVizDisplayHeadIrisRight").style.webkitMaskImage = 'url(./images/charViz/heads/canine/irisRight.png)';
		document.getElementById("charVizDisplayHeadIrisShading").style.backgroundImage = 'url(./images/charViz/heads/canine/irisShading.png)';
		document.getElementById("charVizDisplayHeadLines").style.backgroundImage = 'url(./images/charViz/heads/canine/lines.png)';
		
		// Background Color
		
		var bgcolor = localStorage.getItem("CharViz_Background_Color");
		if (bgcolor != null) {
			charVizSetBGColor(bgcolor);
		}
		
		// Default cloths color setting
		
		var dontSetClothColors = localStorage.getItem("Dont_Set_Default_Clothing_Colors");
		if (dontSetClothColors === "Yes") {	document.getElementById("clothColoringOnDefaultCheckbox").checked = true;	}
		
		// Blush
		
		var blushing = localStorage.getItem("CharViz_Character_Blushing");
		if (blushing === "Yes") {	document.getElementById("charVizDisplayHeadBlush").style.backgroundImage = 'url(./images/charViz/heads/canine/blush.png)'; }
	}
	else {
		flushCharViz();
		document.getElementById("charVizDisplayMessage").style.display = 'block';
		return;
	}
	// Check if character is wearing clothes, if yes then setup cloth masks
	
	var topwear = localStorage.getItem("Slot0_CharViz_Topwear");
	var bottomwear = localStorage.getItem("Slot0_CharViz_Bottomwear");
	var armwear = localStorage.getItem("Slot0_CharViz_Armwear");
	var legwear = localStorage.getItem("Slot0_CharViz_Legwear");	
	var underwear = localStorage.getItem("Slot0_CharViz_Underwear");
	var accessories = localStorage.getItem("Slot0_CharViz_Accessories");
	
	if (topwear == null) 		{	topwear = "None"; 		}
	if (bottomwear == null) 	{	bottomwear = "None"; 	}
	if (armwear == null) 		{	armwear = "None"; 		}
	if (legwear == null) 		{	legwear = "None"; 		}
	if (underwear == null) 		{	underwear = "None"; 	}
	if (accessories == null) 	{	accessories = "None"; 	}
	
	charVizPutClothingOn("Topwear", topwear);
	charVizPutClothingOn("Bottomwear", bottomwear);
	charVizPutClothingOn("Armwear", armwear);
	charVizPutClothingOn("Legwear", legwear);
	charVizPutClothingOn("Underwear", underwear);
	charVizPutClothingOn("Accessories", accessories);
	
	// Check character colors. If none is set then set to it's species natural colors
	var primaryCharColor = localStorage.getItem("Slot0_Primary_Character_Color");
	var secondaryCharColor = localStorage.getItem("Slot0_Secondary_Character_Color");
	var tertiaryCharColor = localStorage.getItem("Slot0_Tertiary_Character_Color");
	var markingsCharColor = localStorage.getItem("Slot0_Markings_Character_Color");
	var leftEyeCharColor = localStorage.getItem("Slot0_LeftEye_Character_Color");
	var rightEyeCharColor = localStorage.getItem("Slot0_RightEye_Character_Color");
	var hairCharColor = localStorage.getItem("Slot0_Hair_Character_Color");
	
	if (primaryCharColor == null) {		
		setNaturalColorScheme(species, 0);
	}
	if (secondaryCharColor == null) {		
		setNaturalColorScheme(species, 1);
	}
	if (tertiaryCharColor == null) {		
		setNaturalColorScheme(species, 2);
	}
	if (markingsCharColor == null) {
		setNaturalColorScheme(species, 3);
	}
	if (leftEyeCharColor == null) {
		setNaturalColorScheme(species, 4);
	}
	if (rightEyeCharColor == null) {
		setNaturalColorScheme(species, 5);
	}
	if (hairCharColor == null) {
		setNaturalColorScheme(species, 6);
	}
	
	if (primaryCharColor != null) {
		document.getElementById("charVizDisplayBasePrimary").style.backgroundColor = primaryCharColor;
		document.getElementById("charVizDisplayBreastSizePrimary").style.backgroundColor = primaryCharColor;
		document.getElementById("charVizDisplayHipsSizePrimary").style.backgroundColor = primaryCharColor;
		document.getElementById("charVizDisplayTailPrimary").style.backgroundColor = primaryCharColor;
		document.getElementById("charVizDisplayHeadPrimary").style.backgroundColor = primaryCharColor;
		document.getElementById("charVizPrimaryCharacterColorSwatch").style.backgroundColor = primaryCharColor;
	}
	
	if (secondaryCharColor != null) {	
		document.getElementById("charVizDisplayBaseSecondary").style.backgroundColor = secondaryCharColor;
		document.getElementById("charVizDisplayBreastSizeSecondary").style.backgroundColor = secondaryCharColor;
		document.getElementById("charVizDisplayHipsSizeSecondary").style.backgroundColor = secondaryCharColor;
		document.getElementById("charVizDisplayTailSecondary").style.backgroundColor = secondaryCharColor;
		document.getElementById("charVizDisplayHeadSecondary").style.backgroundColor = secondaryCharColor;
		document.getElementById("charVizSecondaryCharacterColorSwatch").style.backgroundColor = secondaryCharColor;
	}
	
	if (tertiaryCharColor != null) {
		document.getElementById("charVizDisplayBaseTertiary").style.backgroundColor = tertiaryCharColor;
		document.getElementById("charVizDisplayTailTertiary").style.backgroundColor = tertiaryCharColor;
		document.getElementById("charVizDisplayHeadTertiary").style.backgroundColor = tertiaryCharColor;
		document.getElementById("charVizTertiaryCharacterColorSwatch").style.backgroundColor = tertiaryCharColor;
	}
	
	if (markingsCharColor != null) {
		document.getElementById("charVizDisplayBaseMarkings").style.backgroundColor = markingsCharColor;		
		document.getElementById("charVizDisplayBreastSizeMarkings").style.backgroundColor = markingsCharColor;		
		document.getElementById("charVizDisplayHipsSizeMarkings").style.backgroundColor = markingsCharColor;		
		//document.getElementById("charVizDisplayTailMarkings").style.backgroundColor = markingsCharColor;
		document.getElementById("charVizMarkingsCharacterColorSwatch").style.backgroundColor = markingsCharColor;
	}
	if (leftEyeCharColor != null) {
		document.getElementById("charVizLeftEyeCharacterColorSwatch").style.backgroundColor = leftEyeCharColor;
		document.getElementById("charVizDisplayHeadIrisLeft").style.backgroundColor = leftEyeCharColor;
	}
	
	if (rightEyeCharColor != null) {
		document.getElementById("charVizRightEyeCharacterColorSwatch").style.backgroundColor = rightEyeCharColor;
		document.getElementById("charVizDisplayHeadIrisRight").style.backgroundColor = rightEyeCharColor;
	}
	
	if (hairCharColor != null) {
		document.getElementById("charVizHairCharacterColorSwatch").style.backgroundColor = hairCharColor;
		document.getElementById("charVizDisplayHeadHair").style.backgroundColor = hairCharColor;
	}
		
	// Check for cloth colors
	
	var primaryTopwearColor = localStorage.getItem("Slot0_Primary_Topwear_Color");
	var secondaryTopwearColor = localStorage.getItem("Slot0_Secondary_Topwear_Color");
	
	var primaryBottomwearColor = localStorage.getItem("Slot0_Primary_Bottomwear_Color");
	var secondaryBottomwearColor = localStorage.getItem("Slot0_Secondary_Bottomwear_Color");
	
	var primaryArmearColor = localStorage.getItem("Slot0_Primary_Armwear_Color");
	var secondaryArmwearColor = localStorage.getItem("Slot0_Secondary_Armwear_Color");
	
	var primaryLegwearColor = localStorage.getItem("Slot0_Primary_Legwear_Color");
	var secondaryLegwearColor = localStorage.getItem("Slot0_Secondary_Legwear_Color");
	
	var primaryUnderwearColor = localStorage.getItem("Slot0_Primary_Underwear_Color");
	var secondaryUnderwearColor = localStorage.getItem("Slot0_Secondary_Underwear_Color");
	
	if (charVizEventsInitialized === "Yes") {
		return;
	}
	else {
		charVizInitializeEvents(); // Events for hips and breast size sliders
		charVizEventsInitialized = "Yes";
	}
}

function setBreastSizeBodyMorph(breastSize) {
	if (breastSize <= 5) {
		document.getElementById("charVizDisplayBreastSizePrimary").style.setProperty("-webkit-mask-position", "0% 50%", "important");
		document.getElementById("charVizDisplayBreastSizeSecondary").style.setProperty("-webkit-mask-position", "0% 50%", "important");
		document.getElementById("charVizDisplayBreastSizeMarkings").style.setProperty("-webkit-mask-position", "0% 50%", "important");
		document.getElementById("charVizDisplayBreastSizeLines").style.setProperty("background-position", "0% 50%", "important");
		
		// Clothing:
		document.getElementById("charVizDisplayTopwearPrimary").style.setProperty("-webkit-mask-position", "0% 50%", "important");
		document.getElementById("charVizDisplayTopwearSecondary").style.setProperty("-webkit-mask-position", "0% 50%", "important");
		document.getElementById("charVizDisplayTopwearLines").style.setProperty("background-position", "0% 50%", "important");
		document.getElementById("charVizDisplayArmwearPrimary").style.setProperty("-webkit-mask-position", "0% 50%", "important");
		document.getElementById("charVizDisplayArmwearSecondary").style.setProperty("-webkit-mask-position", "0% 50%", "important");
		document.getElementById("charVizDisplayArmwearLines").style.setProperty("background-position", "0% 50%", "important");
	}
	else if (breastSize >= 6 && breastSize <=30) {
		document.getElementById("charVizDisplayBreastSizePrimary").style.setProperty("-webkit-mask-position", "25% 50%", "important");
		document.getElementById("charVizDisplayBreastSizeSecondary").style.setProperty("-webkit-mask-position", "25% 50%", "important");
		document.getElementById("charVizDisplayBreastSizeMarkings").style.setProperty("-webkit-mask-position", "25% 50%", "important");
		document.getElementById("charVizDisplayBreastSizeLines").style.setProperty("background-position", "25% 50%", "important");
		
		// Clothing:
		document.getElementById("charVizDisplayTopwearPrimary").style.setProperty("-webkit-mask-position", "25% 50%", "important");
		document.getElementById("charVizDisplayTopwearSecondary").style.setProperty("-webkit-mask-position", "25% 50%", "important");
		document.getElementById("charVizDisplayTopwearLines").style.setProperty("background-position", "25% 50%", "important");
		document.getElementById("charVizDisplayArmwearPrimary").style.setProperty("-webkit-mask-position", "25% 50%", "important");
		document.getElementById("charVizDisplayArmwearSecondary").style.setProperty("-webkit-mask-position", "25% 50%", "important");
		document.getElementById("charVizDisplayArmwearLines").style.setProperty("background-position", "25% 50%", "important");
	}
	else if (breastSize >= 31 && breastSize <=55) {
		document.getElementById("charVizDisplayBreastSizePrimary").style.setProperty("-webkit-mask-position", "50% 50%", "important");
		document.getElementById("charVizDisplayBreastSizeSecondary").style.setProperty("-webkit-mask-position", "50% 50%", "important");
		document.getElementById("charVizDisplayBreastSizeMarkings").style.setProperty("-webkit-mask-position", "50% 50%", "important");
		document.getElementById("charVizDisplayBreastSizeLines").style.setProperty("background-position", "50% 50%", "important");
		
		// Clothing:
		document.getElementById("charVizDisplayTopwearPrimary").style.setProperty("-webkit-mask-position", "50% 50%", "important");
		document.getElementById("charVizDisplayTopwearSecondary").style.setProperty("-webkit-mask-position", "50% 50%", "important");
		document.getElementById("charVizDisplayTopwearLines").style.setProperty("background-position", "50% 50%", "important");
		document.getElementById("charVizDisplayArmwearPrimary").style.setProperty("-webkit-mask-position", "50% 50%", "important");
		document.getElementById("charVizDisplayArmwearSecondary").style.setProperty("-webkit-mask-position", "50% 50%", "important");
		document.getElementById("charVizDisplayArmwearLines").style.setProperty("background-position", "50% 50%", "important");
	}
	else if (breastSize >= 56 && breastSize <=80) {
		document.getElementById("charVizDisplayBreastSizePrimary").style.setProperty("-webkit-mask-position", "75% 50%", "important");
		document.getElementById("charVizDisplayBreastSizeSecondary").style.setProperty("-webkit-mask-position", "75% 50%", "important");
		document.getElementById("charVizDisplayBreastSizeMarkings").style.setProperty("-webkit-mask-position", "75% 50%", "important");
		document.getElementById("charVizDisplayBreastSizeLines").style.setProperty("background-position", "75% 50%", "important");
		
		// Clothing:
		document.getElementById("charVizDisplayTopwearPrimary").style.setProperty("-webkit-mask-position", "75% 50%", "important");
		document.getElementById("charVizDisplayTopwearSecondary").style.setProperty("-webkit-mask-position", "75% 50%", "important");
		document.getElementById("charVizDisplayTopwearLines").style.setProperty("background-position", "75% 50%", "important");
		document.getElementById("charVizDisplayArmwearPrimary").style.setProperty("-webkit-mask-position", "75% 50%", "important");
		document.getElementById("charVizDisplayArmwearSecondary").style.setProperty("-webkit-mask-position", "75% 50%", "important");
		document.getElementById("charVizDisplayArmwearLines").style.setProperty("background-position", "75% 50%", "important");
	}
	else if (breastSize >= 81) {
		document.getElementById("charVizDisplayBreastSizePrimary").style.setProperty("-webkit-mask-position", "100% 50%", "important");
		document.getElementById("charVizDisplayBreastSizeSecondary").style.setProperty("-webkit-mask-position", "100% 50%", "important");
		document.getElementById("charVizDisplayBreastSizeMarkings").style.setProperty("-webkit-mask-position", "100% 50%", "important");
		document.getElementById("charVizDisplayBreastSizeLines").style.setProperty("background-position", "100% 50%", "important");
		
		// Clothing:
		document.getElementById("charVizDisplayTopwearPrimary").style.setProperty("-webkit-mask-position", "100% 50%", "important");
		document.getElementById("charVizDisplayTopwearSecondary").style.setProperty("-webkit-mask-position", "100% 50%", "important");
		document.getElementById("charVizDisplayTopwearLines").style.setProperty("background-position", "100% 50%", "important");
		document.getElementById("charVizDisplayArmwearPrimary").style.setProperty("-webkit-mask-position", "100% 50%", "important");
		document.getElementById("charVizDisplayArmwearSecondary").style.setProperty("-webkit-mask-position", "100% 50%", "important");
		document.getElementById("charVizDisplayArmwearLines").style.setProperty("background-position", "100% 50%", "important");
	}
}

function setHipsSizeBodyMorph(hipsSize) {
	if (hipsSize <= 20) {
		document.getElementById("charVizDisplayHipsSizePrimary").style.setProperty("-webkit-mask-position", "0% 50%", "important");
		document.getElementById("charVizDisplayHipsSizeSecondary").style.setProperty("-webkit-mask-position", "0% 50%", "important");
		document.getElementById("charVizDisplayHipsSizeMarkings").style.setProperty("-webkit-mask-position", "0% 50%", "important");
		document.getElementById("charVizDisplayHipsSizeLines").style.setProperty("background-position", "0% 50%", "important");
		
		// Clothing:
		document.getElementById("charVizDisplayBottomwearPrimary").style.setProperty("-webkit-mask-position", "0% 50%", "important");
		document.getElementById("charVizDisplayBottomwearSecondary").style.setProperty("-webkit-mask-position", "0% 50%", "important");
		document.getElementById("charVizDisplayBottomwearLines").style.setProperty("background-position", "0% 50%", "important");
		document.getElementById("charVizDisplayLegwearPrimary").style.setProperty("-webkit-mask-position", "0% 50%", "important");
		document.getElementById("charVizDisplayLegwearSecondary").style.setProperty("-webkit-mask-position", "0% 50%", "important");
		document.getElementById("charVizDisplayLegwearLines").style.setProperty("background-position", "0% 50%", "important");
		document.getElementById("charVizDisplayUnderwearPrimary").style.setProperty("-webkit-mask-position", "0% 50%", "important");
		document.getElementById("charVizDisplayUnderwearSecondary").style.setProperty("-webkit-mask-position", "0% 50%", "important");
		document.getElementById("charVizDisplayUnderwearLines").style.setProperty("background-position", "0% 50%", "important");
	}
	else if (hipsSize >= 21 && hipsSize <=40) {
		document.getElementById("charVizDisplayHipsSizePrimary").style.setProperty("-webkit-mask-position", "25% 50%", "important");
		document.getElementById("charVizDisplayHipsSizeSecondary").style.setProperty("-webkit-mask-position", "25% 50%", "important");
		document.getElementById("charVizDisplayHipsSizeMarkings").style.setProperty("-webkit-mask-position", "25% 50%", "important");
		document.getElementById("charVizDisplayHipsSizeLines").style.setProperty("background-position", "25% 50%", "important");
		
		// Clothing:
		document.getElementById("charVizDisplayBottomwearPrimary").style.setProperty("-webkit-mask-position", "25% 50%", "important");
		document.getElementById("charVizDisplayBottomwearSecondary").style.setProperty("-webkit-mask-position", "25% 50%", "important");
		document.getElementById("charVizDisplayBottomwearLines").style.setProperty("background-position", "25% 50%", "important");
		document.getElementById("charVizDisplayLegwearPrimary").style.setProperty("-webkit-mask-position", "25% 50%", "important");
		document.getElementById("charVizDisplayLegwearSecondary").style.setProperty("-webkit-mask-position", "25% 50%", "important");
		document.getElementById("charVizDisplayLegwearLines").style.setProperty("background-position", "25% 50%", "important");
		document.getElementById("charVizDisplayUnderwearPrimary").style.setProperty("-webkit-mask-position", "25% 50%", "important");
		document.getElementById("charVizDisplayUnderwearSecondary").style.setProperty("-webkit-mask-position", "25% 50%", "important");
		document.getElementById("charVizDisplayUnderwearLines").style.setProperty("background-position", "25% 50%", "important");
	}
	else if (hipsSize >= 41 && hipsSize <=60) {
		document.getElementById("charVizDisplayHipsSizePrimary").style.setProperty("-webkit-mask-position", "50% 50%", "important");
		document.getElementById("charVizDisplayHipsSizeSecondary").style.setProperty("-webkit-mask-position", "50% 50%", "important");
		document.getElementById("charVizDisplayHipsSizeMarkings").style.setProperty("-webkit-mask-position", "50% 50%", "important");
		document.getElementById("charVizDisplayHipsSizeLines").style.setProperty("background-position", "50% 50%", "important");
		
		// Clothing:
		document.getElementById("charVizDisplayBottomwearPrimary").style.setProperty("-webkit-mask-position", "50% 50%", "important");
		document.getElementById("charVizDisplayBottomwearSecondary").style.setProperty("-webkit-mask-position", "50% 50%", "important");
		document.getElementById("charVizDisplayBottomwearLines").style.setProperty("background-position", "50% 50%", "important");
		document.getElementById("charVizDisplayLegwearPrimary").style.setProperty("-webkit-mask-position", "50% 50%", "important");
		document.getElementById("charVizDisplayLegwearSecondary").style.setProperty("-webkit-mask-position", "50% 50%", "important");
		document.getElementById("charVizDisplayLegwearLines").style.setProperty("background-position", "50% 50%", "important");
		document.getElementById("charVizDisplayUnderwearPrimary").style.setProperty("-webkit-mask-position", "50% 50%", "important");
		document.getElementById("charVizDisplayUnderwearSecondary").style.setProperty("-webkit-mask-position", "50% 50%", "important");
		document.getElementById("charVizDisplayUnderwearLines").style.setProperty("background-position", "50% 50%", "important");
	}
	else if (hipsSize >= 61 && hipsSize <=80) {
		document.getElementById("charVizDisplayHipsSizePrimary").style.setProperty("-webkit-mask-position", "75% 50%", "important");
		document.getElementById("charVizDisplayHipsSizeSecondary").style.setProperty("-webkit-mask-position", "75% 50%", "important");
		document.getElementById("charVizDisplayHipsSizeMarkings").style.setProperty("-webkit-mask-position", "75% 50%", "important");
		document.getElementById("charVizDisplayHipsSizeLines").style.setProperty("background-position", "75% 50%", "important");
		
		// Clothing:
		document.getElementById("charVizDisplayBottomwearPrimary").style.setProperty("-webkit-mask-position", "75% 50%", "important");
		document.getElementById("charVizDisplayBottomwearSecondary").style.setProperty("-webkit-mask-position", "75% 50%", "important");
		document.getElementById("charVizDisplayBottomwearLines").style.setProperty("background-position", "75% 50%", "important");
		document.getElementById("charVizDisplayLegwearPrimary").style.setProperty("-webkit-mask-position", "75% 50%", "important");
		document.getElementById("charVizDisplayLegwearSecondary").style.setProperty("-webkit-mask-position", "75% 50%", "important");
		document.getElementById("charVizDisplayLegwearLines").style.setProperty("background-position", "75% 50%", "important");
		document.getElementById("charVizDisplayUnderwearPrimary").style.setProperty("-webkit-mask-position", "75% 50%", "important");
		document.getElementById("charVizDisplayUnderwearSecondary").style.setProperty("-webkit-mask-position", "75% 50%", "important");
		document.getElementById("charVizDisplayUnderwearLines").style.setProperty("background-position", "75% 50%", "important");
	}
	else if (hipsSize >= 81) {
		document.getElementById("charVizDisplayHipsSizePrimary").style.setProperty("-webkit-mask-position", "100% 50%", "important");
		document.getElementById("charVizDisplayHipsSizeSecondary").style.setProperty("-webkit-mask-position", "100% 50%", "important");
		document.getElementById("charVizDisplayHipsSizeMarkings").style.setProperty("-webkit-mask-position", "100% 50%", "important");
		document.getElementById("charVizDisplayHipsSizeLines").style.setProperty("background-position", "100% 50%", "important");
		
		// Clothing:
		document.getElementById("charVizDisplayBottomwearPrimary").style.setProperty("-webkit-mask-position", "100% 50%", "important");
		document.getElementById("charVizDisplayBottomwearSecondary").style.setProperty("-webkit-mask-position", "100% 50%", "important");
		document.getElementById("charVizDisplayBottomwearLines").style.setProperty("background-position", "100% 50%", "important");
		document.getElementById("charVizDisplayLegwearPrimary").style.setProperty("-webkit-mask-position", "100% 50%", "important");
		document.getElementById("charVizDisplayLegwearSecondary").style.setProperty("-webkit-mask-position", "100% 50%", "important");
		document.getElementById("charVizDisplayLegwearLines").style.setProperty("background-position", "100% 50%", "important");
		document.getElementById("charVizDisplayUnderwearPrimary").style.setProperty("-webkit-mask-position", "100% 50%", "important");
		document.getElementById("charVizDisplayUnderwearSecondary").style.setProperty("-webkit-mask-position", "100% 50%", "important");
		document.getElementById("charVizDisplayUnderwearLines").style.setProperty("background-position", "100% 50%", "important");
	}
}

function charVizInitializeEvents() {
	mySlider3.attachEvent("onChange", function() {
   	var x = mySlider3.getValue();
	setHipsSizeBodyMorph(x);
});
	mySlider9.attachEvent("onChange", function() {
   	var x = mySlider9.getValue();
	setBreastSizeBodyMorph(x);
});
	mySlider8.attachEvent("onChange", function() {
   	var x = mySlider8.getValue();
	setBreastSizeBodyMorph(x);
});
}

function charVizPutClothingOn(x, y) {
	if (x === "Topwear") {
		if (y === "None") {
			document.getElementById("charVizDisplayTopwearPrimary").style.webkitMaskImage = 'url("./images/charViz/blankMask.png")';
			document.getElementById("charVizDisplayTopwearSecondary").style.webkitMaskImage = 'url("./images/charViz/blankMask.png")';
			document.getElementById("charVizDisplayTopwearLines").style.backgroundImage = '';
		}
		else if (y === "Office Shirt") {
			document.getElementById("charVizDisplayTopwearPrimary").style.webkitMaskImage = 'url("./images/charViz/bases/feminine/clothing/topwear/officeShirt/primary.png")';
			document.getElementById("charVizDisplayTopwearSecondary").style.webkitMaskImage = 'url("./images/charViz/blankMask.png")';
			document.getElementById("charVizDisplayTopwearLines").style.backgroundImage = 'url("./images/charViz/bases/feminine/clothing/topwear/officeShirt/lines.png")';
		}		
		else if (y === "T-Shirt") {
			document.getElementById("charVizDisplayTopwearPrimary").style.webkitMaskImage = 'url("./images/charViz/bases/feminine/clothing/topwear/tShirt/primary.png")';
			document.getElementById("charVizDisplayTopwearSecondary").style.webkitMaskImage = 'url("./images/charViz/blankMask.png")';
			document.getElementById("charVizDisplayTopwearLines").style.backgroundImage = 'url("./images/charViz/bases/feminine/clothing/topwear/tShirt/lines.png")';
		}
		else if (y === "Crop Top") {
			document.getElementById("charVizDisplayTopwearPrimary").style.webkitMaskImage = 'url("./images/charViz/bases/feminine/clothing/topwear/cropTop/primary.png")';
			document.getElementById("charVizDisplayTopwearSecondary").style.webkitMaskImage = 'url("./images/charViz/bases/feminine/clothing/topwear/cropTop/secondary.png")';
			document.getElementById("charVizDisplayTopwearLines").style.backgroundImage = 'url("./images/charViz/bases/feminine/clothing/topwear/cropTop/lines.png")';
		}
	}
	else if (x === "Bottomwear") {
		if (y === "None") {
			document.getElementById("charVizDisplayBottomwearPrimary").style.webkitMaskImage = 'url("./images/charViz/blankMask.png")';
			document.getElementById("charVizDisplayBottomwearSecondary").style.webkitMaskImage = 'url("./images/charViz/blankMask.png")';
			document.getElementById("charVizDisplayBottomwearLines").style.backgroundImage = '';
		}
		else if (y === "Pencil Skirt") {
			document.getElementById("charVizDisplayBottomwearPrimary").style.webkitMaskImage = 'url("./images/charViz/bases/feminine/clothing/bottomwear/pencilSkirt/primary.png")';
			document.getElementById("charVizDisplayBottomwearSecondary").style.webkitMaskImage = 'url("./images/charViz/blankMask.png")';
			document.getElementById("charVizDisplayBottomwearLines").style.backgroundImage = 'url("./images/charViz/bases/feminine/clothing/bottomwear/pencilSkirt/lines.png")';
		}
		else if (y === "Shorts") {
			document.getElementById("charVizDisplayBottomwearPrimary").style.webkitMaskImage = 'url("./images/charViz/bases/feminine/clothing/bottomwear/shorts/primary.png")';
			document.getElementById("charVizDisplayBottomwearSecondary").style.webkitMaskImage = 'url("./images/charViz/blankMask.png")';
			document.getElementById("charVizDisplayBottomwearLines").style.backgroundImage = 'url("./images/charViz/bases/feminine/clothing/bottomwear/shorts/lines.png")';
		}
		else if (y === "Leggings") {
			document.getElementById("charVizDisplayBottomwearPrimary").style.webkitMaskImage = 'url("./images/charViz/bases/feminine/clothing/bottomwear/leggings/primary.png")';
			document.getElementById("charVizDisplayBottomwearSecondary").style.webkitMaskImage = 'url("./images/charViz/bases/feminine/clothing/bottomwear/leggings/secondary.png")';
			document.getElementById("charVizDisplayBottomwearLines").style.backgroundImage = 'url("./images/charViz/bases/feminine/clothing/bottomwear/leggings/lines.png")';
		}
	}
	else if (x === "Armwear") {
		if (y === "None") {
			document.getElementById("charVizDisplayArmwearPrimary").style.webkitMaskImage = 'url("./images/charViz/blankMask.png")';
			document.getElementById("charVizDisplayArmwearSecondary").style.webkitMaskImage = 'url("./images/charViz/blankMask.png")';
			document.getElementById("charVizDisplayArmwearLines").style.backgroundImage = '';
		}
		else if (y === "Arm Warmers") {
			document.getElementById("charVizDisplayArmwearPrimary").style.webkitMaskImage = 'url("./images/charViz/bases/feminine/clothing/armwear/armWarmers/primary.png")';
			document.getElementById("charVizDisplayArmwearSecondary").style.webkitMaskImage = 'url("./images/charViz/bases/feminine/clothing/armwear/armWarmers/secondary.png")';
			document.getElementById("charVizDisplayArmwearLines").style.backgroundImage = 'url("./images/charViz/bases/feminine/clothing/armwear/armWarmers/lines.png")';
		}
	}
	else if (x === "Legwear") {
		if (y === "None") {
			document.getElementById("charVizDisplayLegwearPrimary").style.webkitMaskImage = 'url("./images/charViz/blankMask.png")';
			document.getElementById("charVizDisplayLegwearSecondary").style.webkitMaskImage = 'url("./images/charViz/blankMask.png")';
			document.getElementById("charVizDisplayLegwearLines").style.backgroundImage = '';
		}
		else if (y === "Thigh Highs") {
			document.getElementById("charVizDisplayLegwearPrimary").style.webkitMaskImage = 'url("./images/charViz/bases/feminine/clothing/legwear/thighHighs/primary.png")';
			document.getElementById("charVizDisplayLegwearSecondary").style.webkitMaskImage = 'url("./images/charViz/bases/feminine/clothing/legwear/thighHighs/secondary.png")';
			document.getElementById("charVizDisplayLegwearLines").style.backgroundImage = 'url("./images/charViz/bases/feminine/clothing/legwear/thighHighs/lines.png")';
		}
		else if (y === "Pantyhose") {
			document.getElementById("charVizDisplayLegwearPrimary").style.webkitMaskImage = 'url("./images/charViz/blankMask.png")';
			document.getElementById("charVizDisplayLegwearSecondary").style.webkitMaskImage  = 'url("./images/charViz/blankMask.png")';
			document.getElementById("charVizDisplayLegwearLines").style.backgroundImage = 'url("./images/charViz/bases/feminine/clothing/legwear/pantyhose/static.png")';
		}
	}
	else if (x === "Underwear") {
		if (y === "None") {
			document.getElementById("charVizDisplayUnderwearPrimary").style.webkitMaskImage = 'url("./images/charViz/blankMask.png")';
			document.getElementById("charVizDisplayUnderwearSecondary").style.webkitMaskImage = 'url("./images/charViz/blankMask.png")';
			document.getElementById("charVizDisplayUnderwearLines").style.backgroundImage = '';
		}
		else if (y === "Panties") {
			document.getElementById("charVizDisplayUnderwearPrimary").style.webkitMaskImage = 'url("./images/charViz/bases/feminine/clothing/underwear/panties/primary.png")';
			document.getElementById("charVizDisplayUnderwearSecondary").style.webkitMaskImage = 'url("./images/charViz/blankMask.png")';
			document.getElementById("charVizDisplayUnderwearLines").style.backgroundImage = 'url("./images/charViz/bases/feminine/clothing/underwear/panties/lines.png")';
		}		
	}
	else if (x === "Accessories") {
		if (y === "None") {
			document.getElementById("charVizDisplayAccessoriesSlot1").style.backgroundImage = '';
		}
		else if (y === "Glasses") {
			document.getElementById("charVizDisplayAccessoriesSlot1").style.backgroundImage = 'url("./images/charViz/bases/feminine/clothing/accessories/glasses.png")';
		}
	}
	if (controlsessionactive === "Yes") { 
		conn.send({firstParam: "putClothingOn", secondParam: x, thirdParam: y});
	}
	localStorage.setItem("Slot0_CharViz_" + x, y);
	charVizSetClothingColors(x, y);
}

function charVizSetClothingColors(x, y) {
	var dontSetClothColors = localStorage.getItem("Dont_Set_Default_Clothing_Colors");
	if (dontSetClothColors === "Yes") {
		charVizLoadCustomClothingColors(x);
	}
	else {
		if (x === "Topwear") {
			if (y === "Office Shirt") {
				document.getElementById("charVizDisplayTopwearPrimary").style.backgroundColor = '#F5F5F5';
				document.getElementById("charVizTopwearPrimaryColorSwatch").style.backgroundColor = '#F5F5F5';
			}
			else if (y === "T-Shirt") {
				document.getElementById("charVizDisplayTopwearPrimary").style.backgroundColor = '#5FBF5E';
				document.getElementById("charVizTopwearPrimaryColorSwatch").style.backgroundColor = '#5FBF5E';
			}
			else if (y === "Crop Top") {
				document.getElementById("charVizDisplayTopwearPrimary").style.backgroundColor = '#222';
				document.getElementById("charVizDisplayTopwearSecondary").style.backgroundColor = '#F248D6';
				document.getElementById("charVizTopwearPrimaryColorSwatch").style.backgroundColor = '#222';
				document.getElementById("charVizTopwearSecondaryColorSwatch").style.backgroundColor = '#F248D6';
			}
		}
		else if (x === "Bottomwear") {
			if (y === "Pencil Skirt") {
				document.getElementById("charVizDisplayBottomwearPrimary").style.backgroundColor = '#222';
				document.getElementById("charVizBottomwearPrimaryColorSwatch").style.backgroundColor = '#222';
			}
			else if (y === "Shorts") {
				document.getElementById("charVizDisplayBottomwearPrimary").style.backgroundColor = '#8BB2E0';
				document.getElementById("charVizBottomwearPrimaryColorSwatch").style.backgroundColor = '#8BB2E0';
			}
			else if (y === "Leggings") {
				document.getElementById("charVizDisplayBottomwearPrimary").style.backgroundColor = '#222';				
				document.getElementById("charVizDisplayBottomwearSecondary").style.backgroundColor = '#F248D6';
				document.getElementById("charVizBottomwearPrimaryColorSwatch").style.backgroundColor = '#222';
				document.getElementById("charVizBottomwearSecondaryColorSwatch").style.backgroundColor = '#F248D6';
			}
		}
		else if (x === "Armwear") {
			if (y === "Arm Warmers") {
				document.getElementById("charVizDisplayArmwearPrimary").style.backgroundColor = '#78219F';
				document.getElementById("charVizDisplayArmwearSecondary").style.backgroundColor = '#2C2C2C';
				document.getElementById("charVizArmwearPrimaryColorSwatch").style.backgroundColor = '#78219F';
				document.getElementById("charVizArmwearSecondaryColorSwatch").style.backgroundColor = '#2C2C2C';
			}
		}
		else if (x === "Legwear") {
			if (y === "Thigh Highs") {
				document.getElementById("charVizDisplayLegwearPrimary").style.backgroundColor = '#78219F';
				document.getElementById("charVizDisplayLegwearSecondary").style.backgroundColor = '#2C2C2C';
				document.getElementById("charVizLegwearPrimaryColorSwatch").style.backgroundColor = '#78219F';
				document.getElementById("charVizLegwearSecondaryColorSwatch").style.backgroundColor = '#2C2C2C';
			}
		}
		else if (x === "Underwear") {
			if (y === "Panties") {
				document.getElementById("charVizDisplayUnderwearPrimary").style.backgroundColor = '#FF6BEE';
				document.getElementById("charVizUnderwearPrimaryColorSwatch").style.backgroundColor = '#FF6BEE';
			}
		}
	}
}

function charVizLoadCustomClothingColors(x) {
	if (x === "Topwear") {
		var primaryColor = localStorage.getItem("Slot0_Topwear_Primary_Clothing_Color");
		var secondaryColor = localStorage.getItem("Slot0_Topwear_Secondary_Clothing_Color");
		document.getElementById("charVizDisplayTopwearPrimary").style.backgroundColor = primaryColor;
		document.getElementById("charVizDisplayTopwearSecondary").style.backgroundColor = secondaryColor;
		document.getElementById("charVizTopwearPrimaryColorSwatch").style.backgroundColor = primaryColor;
		document.getElementById("charVizTopwearSecondaryColorSwatch").style.backgroundColor = secondaryColor;
	}
	else if (x === "Bottomwear") {
		var primaryColor = localStorage.getItem("Slot0_Bottomwear_Primary_Clothing_Color");
		var secondaryColor = localStorage.getItem("Slot0_Bottomwear_Secondary_Clothing_Color");
		document.getElementById("charVizDisplayBottomwearPrimary").style.backgroundColor = primaryColor;
		document.getElementById("charVizDisplayBottomwearSecondary").style.backgroundColor = secondaryColor;
		document.getElementById("charVizBottomwearPrimaryColorSwatch").style.backgroundColor = primaryColor;
		document.getElementById("charVizBottomwearSecondaryColorSwatch").style.backgroundColor = secondaryColor;
	}
	else if (x === "Armwear") {
		var primaryColor = localStorage.getItem("Slot0_Armwear_Primary_Clothing_Color");
		var secondaryColor = localStorage.getItem("Slot0_Armwear_Secondary_Clothing_Color");
		document.getElementById("charVizDisplayArmwearPrimary").style.backgroundColor = primaryColor;
		document.getElementById("charVizDisplayArmwearSecondary").style.backgroundColor = secondaryColor;
		document.getElementById("charVizArmwearPrimaryColorSwatch").style.backgroundColor = primaryColor;
		document.getElementById("charVizArmwearSecondaryColorSwatch").style.backgroundColor = secondaryColor;
	}
	else if (x === "Legwear") {
		var primaryColor = localStorage.getItem("Slot0_Legwear_Primary_Clothing_Color");
		var secondaryColor = localStorage.getItem("Slot0_Legwear_Secondary_Clothing_Color");
		document.getElementById("charVizDisplayLegwearPrimary").style.backgroundColor = primaryColor;
		document.getElementById("charVizDisplayLegwearSecondary").style.backgroundColor = secondaryColor;
		document.getElementById("charVizLegwearPrimaryColorSwatch").style.backgroundColor = primaryColor;
		document.getElementById("charVizLegwearSecondaryColorSwatch").style.backgroundColor = secondaryColor;
	}
	else if (x === "Underwear") {
		var primaryColor = localStorage.getItem("Slot0_Underwear_Primary_Clothing_Color");
		var secondaryColor = localStorage.getItem("Slot0_Underwear_Secondary_Clothing_Color");
		document.getElementById("charVizDisplayUnderwearPrimary").style.backgroundColor = primaryColor;
		document.getElementById("charVizDisplayUnderwearSecondary").style.backgroundColor = secondaryColor;
		document.getElementById("charVizUnderwearPrimaryColorSwatch").style.backgroundColor = primaryColor;
		document.getElementById("charVizUnderwearSecondaryColorSwatch").style.backgroundColor = secondaryColor;
	}
}

function charVizPutOutfitOn(x) {
	if (x === "Programmer") {
		charVizPutClothingOn("Topwear", "None");
		charVizPutClothingOn("Bottomwear", "None");
		charVizPutClothingOn("Armwear", "Arm Warmers");
		charVizPutClothingOn("Legwear", "Thigh Highs");
		charVizPutClothingOn("Underwear", "Panties");
		charVizPutClothingOn("Accessories", "Glasses");
	}
	else if (x === "Secretary") {
		charVizPutClothingOn("Topwear", "Office Shirt");
		charVizPutClothingOn("Bottomwear", "Pencil Skirt");
		charVizPutClothingOn("Armwear", "None");
		charVizPutClothingOn("Legwear", "Pantyhose");
		charVizPutClothingOn("Underwear", "Panties");
		charVizPutClothingOn("Accessories", "Glasses");
	}
}

function setActiveColor(color) {
	var x = document.getElementsByClassName("charVizColorsEntryContainer");
	var i;
	for (i = 0; i < x.length; i++) {
		x[i].style.backgroundColor = "#282640";
	}

	localStorage.setItem("CharViz_Active_Character_Color", color);
	
	if (color === "Primary") {
		document.getElementById("charColorSwatchContainer1").style.backgroundColor = "#59568f";
		var swatchColor = document.getElementById("charVizPrimaryCharacterColorSwatch").style.backgroundColor;
		colorPicker.color.rgbString = swatchColor;
	}
	else if (color === "Secondary") {
		document.getElementById("charColorSwatchContainer2").style.backgroundColor = "#59568f";
		var swatchColor = document.getElementById("charVizSecondaryCharacterColorSwatch").style.backgroundColor;
		colorPicker.color.rgbString = swatchColor;
	}
	else if (color === "Tertiary") {
		document.getElementById("charColorSwatchContainer3").style.backgroundColor = "#59568f";
		var swatchColor = document.getElementById("charVizTertiaryCharacterColorSwatch").style.backgroundColor;
		colorPicker.color.rgbString = swatchColor;
	}
	else if (color === "Markings") {
		document.getElementById("charColorSwatchContainer4").style.backgroundColor = "#59568f";
		var swatchColor = document.getElementById("charVizMarkingsCharacterColorSwatch").style.backgroundColor;
		colorPicker.color.rgbString = swatchColor;
	}
	else if (color === "Left Eye") {
		document.getElementById("charColorSwatchContainer5").style.backgroundColor = "#59568f";
		var swatchColor = document.getElementById("charVizLeftEyeCharacterColorSwatch").style.backgroundColor;
		colorPicker.color.rgbString = swatchColor;
	}
	else if (color === "Right Eye") {
		document.getElementById("charColorSwatchContainer6").style.backgroundColor = "#59568f";
		var swatchColor = document.getElementById("charVizRightEyeCharacterColorSwatch").style.backgroundColor;
		colorPicker.color.rgbString = swatchColor;
	}
	else if (color === "Hair") {
		document.getElementById("charColorSwatchContainer7").style.backgroundColor = "#59568f";
		var swatchColor = document.getElementById("charVizHairCharacterColorSwatch").style.backgroundColor;
		colorPicker.color.rgbString = swatchColor;
	}
}

function setActiveClothingColor(color) {
	var x = document.getElementsByClassName("charVizColorsEntryContainer");
	var i;
	for (i = 0; i < x.length; i++) {
		x[i].style.backgroundColor = "#282640";
	}

	localStorage.setItem("CharViz_Active_Clothing_Color", color);
	
	if (color === "Topwear Primary") {
		document.getElementById("clothingColorSwatchContainer1").style.backgroundColor = "#59568f";
		var swatchColor = document.getElementById("charVizTopwearPrimaryColorSwatch").style.backgroundColor;
		colorPicker2.color.rgbString = swatchColor;
	}
	else if (color === "Topwear Secondary") {
		document.getElementById("clothingColorSwatchContainer2").style.backgroundColor = "#59568f";
		var swatchColor = document.getElementById("charVizTopwearSecondaryColorSwatch").style.backgroundColor;
		colorPicker2.color.rgbString = swatchColor;
	}
	else if (color === "Bottomwear Primary") {
		document.getElementById("clothingColorSwatchContainer3").style.backgroundColor = "#59568f";
		var swatchColor = document.getElementById("charVizBottomwearPrimaryColorSwatch").style.backgroundColor;
		colorPicker2.color.rgbString = swatchColor;
	}
	else if (color === "Bottomwear Secondary") {
		document.getElementById("clothingColorSwatchContainer4").style.backgroundColor = "#59568f";
		var swatchColor = document.getElementById("charVizBottomwearSecondaryColorSwatch").style.backgroundColor;
		colorPicker2.color.rgbString = swatchColor;
	}
	else if (color === "Armwear Primary") {
		document.getElementById("clothingColorSwatchContainer5").style.backgroundColor = "#59568f";
		var swatchColor = document.getElementById("charVizArmwearPrimaryColorSwatch").style.backgroundColor;
		colorPicker2.color.rgbString = swatchColor;
	}
	else if (color === "Armwear Secondary") {
		document.getElementById("clothingColorSwatchContainer6").style.backgroundColor = "#59568f";
		var swatchColor = document.getElementById("charVizArmwearSecondaryColorSwatch").style.backgroundColor;
		colorPicker2.color.rgbString = swatchColor;
	}
	else if (color === "Legwear Primary") {
		document.getElementById("clothingColorSwatchContainer7").style.backgroundColor = "#59568f";
		var swatchColor = document.getElementById("charVizLegwearPrimaryColorSwatch").style.backgroundColor;
		colorPicker2.color.rgbString = swatchColor;
	}
	else if (color === "Legwear Secondary") {
		document.getElementById("clothingColorSwatchContainer8").style.backgroundColor = "#59568f";
		var swatchColor = document.getElementById("charVizLegwearSecondaryColorSwatch").style.backgroundColor;
		colorPicker2.color.rgbString = swatchColor;
	}
	else if (color === "Underwear Primary") {
		document.getElementById("clothingColorSwatchContainer9").style.backgroundColor = "#59568f";
		var swatchColor = document.getElementById("charVizUnderwearPrimaryColorSwatch").style.backgroundColor;
		colorPicker2.color.rgbString = swatchColor;
	}
	else if (color === "Underwear Secondary") {
		document.getElementById("clothingColorSwatchContainer10").style.backgroundColor = "#59568f";
		var swatchColor = document.getElementById("charVizUnderwearSecondaryColorSwatch").style.backgroundColor;
		colorPicker2.color.rgbString = swatchColor;
	}

}

function flushCharViz() {
	var x = document.getElementsByClassName("charVizDisplay");
	var i;
	for (i = 0; i < x.length; i++) {
		x[i].style.maskImage = "";
		x[i].style.webkitMaskImage = "";
		x[i].style.backgroundColor = "";
		x[i].style.backgroundImage = "";
	}
}

function flushAllCharacter() {
	var x = document.getElementsByClassName("charVizDisplayCharacter");
	var i;
	for (i = 0; i < x.length; i++) {
		x[i].style.maskImage = "";
		x[i].style.webkitMaskImage = "";
		x[i].style.backgroundColor = "";
		x[i].style.backgroundImage = "";
	}
}

function flushAllCloth() {
	var x = document.getElementsByClassName("charVizDisplayCloth");
	var i;
	for (i = 0; i < x.length; i++) {
		x[i].style.maskImage = "";
		x[i].style.webkitMaskImage = "";
		x[i].style.backgroundColor = "";
		x[i].style.backgroundImage = "";
	}
}

function flushCharacter(y) {
	// 0 - Hair in the front
	// 1 - Head
	// 2 - Base
	// 3 - Breast Size body morph
	// 4 - Hips Size body morph
	// 5 - Hair in the back
	// 6 - Tail
	if (y == 0) 		{ var x = document.getElementsByClassName("charVizDisplayFrontHair"); 		}
	else if (y == 1) 	{ var x = document.getElementsByClassName("charVizDisplayHead"); 			}
	else if (y == 2) 	{ var x = document.getElementsByClassName("charVizDisplayBase"); 			}
	else if (y == 3) 	{ var x = document.getElementsByClassName("charVizDisplayBreastSize"); 		}
	else if (y == 4) 	{ var x = document.getElementsByClassName("charVizDisplayHipsSize"); 		}
	else if (y == 5) 	{ var x = document.getElementsByClassName("charVizDisplayBackHair"); 		}
	else if (y == 6) 	{ var x = document.getElementsByClassName("charVizDisplayTail"); 			}
	var i;
	for (i = 0; i < x.length; i++) {
		x[i].style.maskImage = "";
		x[i].style.webkitMaskImage = "";
		x[i].style.backgroundColor = "";
		x[i].style.backgroundImage = "";
	}
}

function flushCloth(y) {
	// 0 - Topwear
	// 1 - Bottomwear
	// 2 - Armwear
	// 3 - Legwear
	// 4 - Underwear
	var x
	if (y == 0) 		{ x = document.getElementsByClassName("charVizDisplayTopwear"); 	localStorage.removeItem("Slot0_CharViz_Topwear");		}
	else if (y == 1) 	{ x = document.getElementsByClassName("charVizDisplayBottomwear"); 	localStorage.removeItem("Slot0_CharViz_Bottomwear");	}
	else if (y == 2) 	{ x = document.getElementsByClassName("charVizDisplayArmwear"); 	localStorage.removeItem("Slot0_CharViz_Armwear");		}
	else if (y == 3) 	{ x = document.getElementsByClassName("charVizDisplayLegwear"); 	localStorage.removeItem("Slot0_CharViz_Legwear");		}
	else if (y == 4) 	{ x = document.getElementsByClassName("charVizDisplayUnderwear"); 	localStorage.removeItem("Slot0_CharViz_Underwear");		}
	var i;
	for (i = 0; i < x.length; i++) {
		x[i].style.maskImage = "";
		x[i].style.webkitMaskImage = "";
		x[i].style.backgroundColor = "";
		x[i].style.backgroundImage = "";
	}
}

function setNaturalColorScheme(species, x) {
	var primaryColor;
	var secondaryColor;
	var tertiaryColor;
	var markingsColor;
	
	if (species === "Fox") 				{	primaryColor = "#ffaf1a";secondaryColor = "#FFF0F5";tertiaryColor = "#202120";markingsColor = "#9400D3"; eyeColor = "#00FF7F"; hairColor = "#A52A2A";	}
	else if (species === "Arctic Fox") 	{	primaryColor = "#87CEFA";secondaryColor = "#FFF0F5";tertiaryColor = "#4682B4";markingsColor = "#4169E1"; eyeColor = "#20B2AA"; hairColor = "#6495ED";	}
	else if (species === "Coyote") 		{	primaryColor = "#FFDEAD";secondaryColor = "#FFF8DC";tertiaryColor = "#696969";markingsColor = "#800000"; eyeColor = "#A52A2A"; hairColor = "#A0522D";	}
	else if (species === "Wolf") 		{	primaryColor = "#808080";secondaryColor = "#FFF0F5";tertiaryColor = "#778899";markingsColor = "#708090"; eyeColor = "#00BFFF"; hairColor = "#333333";	}
	else if (species === "Husky") 		{	primaryColor = "#404040";secondaryColor = "#FFF0F5";tertiaryColor = "#A9A9A9";markingsColor = "#C0C0C0"; eyeColor = "#40E0D0"; hairColor = "#00CED1";	}
	else { return; }

	if (x == 0) {
		document.getElementById("charVizDisplayBasePrimary").style.backgroundColor = primaryColor;
		document.getElementById("charVizDisplayBreastSizePrimary").style.backgroundColor = primaryColor;
		document.getElementById("charVizDisplayHipsSizePrimary").style.backgroundColor = primaryColor;
		document.getElementById("charVizDisplayTailPrimary").style.backgroundColor = primaryColor;
		document.getElementById("charVizDisplayHeadPrimary").style.backgroundColor = primaryColor;
		document.getElementById("charVizPrimaryCharacterColorSwatch").style.backgroundColor = primaryColor;
	}
	else if (x == 1) {
		document.getElementById("charVizDisplayBaseSecondary").style.backgroundColor = secondaryColor;
		document.getElementById("charVizDisplayBreastSizeSecondary").style.backgroundColor = secondaryColor;
		document.getElementById("charVizDisplayHipsSizeSecondary").style.backgroundColor = secondaryColor;
		document.getElementById("charVizDisplayTailSecondary").style.backgroundColor = secondaryColor;
		document.getElementById("charVizDisplayHeadSecondary").style.backgroundColor = secondaryColor;
		document.getElementById("charVizSecondaryCharacterColorSwatch").style.backgroundColor = secondaryColor;
	}
	else if (x == 2) {				
		document.getElementById("charVizDisplayBaseTertiary").style.backgroundColor = tertiaryColor;
		document.getElementById("charVizDisplayTailTertiary").style.backgroundColor = tertiaryColor;
		document.getElementById("charVizDisplayHeadTertiary").style.backgroundColor = tertiaryColor;
		document.getElementById("charVizTertiaryCharacterColorSwatch").style.backgroundColor = tertiaryColor;
	}
	else if (x == 3) {
		document.getElementById("charVizDisplayBaseMarkings").style.backgroundColor = markingsColor;
		document.getElementById("charVizDisplayBreastSizeMarkings").style.backgroundColor = markingsColor;
		document.getElementById("charVizDisplayHipsSizeMarkings").style.backgroundColor = markingsColor;
		//document.getElementById("charVizDisplayTailMarkings").style.backgroundColor = x;
		document.getElementById("charVizMarkingsCharacterColorSwatch").style.backgroundColor = markingsColor;
	}
	else if (x == 4) {
		document.getElementById("charVizLeftEyeCharacterColorSwatch").style.backgroundColor = eyeColor;
		document.getElementById("charVizDisplayHeadIrisLeft").style.backgroundColor = eyeColor;
	}
	else if (x == 5) {
		document.getElementById("charVizRightEyeCharacterColorSwatch").style.backgroundColor = eyeColor;
		document.getElementById("charVizDisplayHeadIrisRight").style.backgroundColor = eyeColor;
	}
	else if (x == 6) {
		document.getElementById("charVizHairCharacterColorSwatch").style.backgroundColor = hairColor;
		document.getElementById("charVizDisplayHeadHair").style.backgroundColor = hairColor;
	}
}

function charVizResetCharacterColors() {
	localStorage.removeItem("Slot0_Primary_Character_Color");
	localStorage.removeItem("Slot0_Secondary_Character_Color");
	localStorage.removeItem("Slot0_Tertiary_Character_Color");
	localStorage.removeItem("Slot0_Markings_Character_Color");
	localStorage.removeItem("Slot0_LeftEye_Character_Color");
	localStorage.removeItem("Slot0_RightEye_Character_Color");
	localStorage.removeItem("Slot0_Hair_Character_Color");
	initializeCharViz();
}

function charVizClothingGoToCategory(x) {
	if (x === "Topwear") {
		document.getElementById("charVizClothingCategorySelectorContainer").style.display= 'none';
		document.getElementById("charVizClothingTopwearSelectorContainer").style.display= 'block';
	}
	else if (x === "Bottomwear") {
		document.getElementById("charVizClothingCategorySelectorContainer").style.display= 'none';
		document.getElementById("charVizClothingBottomwearSelectorContainer").style.display= 'block';
	}
	else if (x === "Armwear") {
		document.getElementById("charVizClothingCategorySelectorContainer").style.display= 'none';
		document.getElementById("charVizClothingArmwearSelectorContainer").style.display= 'block';
	}
	else if (x === "Legwear") {
		document.getElementById("charVizClothingCategorySelectorContainer").style.display= 'none';
		document.getElementById("charVizClothingLegwearSelectorContainer").style.display= 'block';
	}
	else if (x === "Footwear") {
		document.getElementById("charVizClothingCategorySelectorContainer").style.display= 'none';
		document.getElementById("charVizClothingFootwearSelectorContainer").style.display= 'block';
	}
	else if (x === "Underwear") {
		document.getElementById("charVizClothingCategorySelectorContainer").style.display= 'none';
		document.getElementById("charVizClothingUnderwearSelectorContainer").style.display= 'block';
	}
	else if (x === "Outfits") {
		document.getElementById("charVizClothingCategorySelectorContainer").style.display= 'none';
		document.getElementById("charVizClothingOutfitsSelectorContainer").style.display= 'block';
	}
	else if (x === "Accessories") {
		document.getElementById("charVizClothingCategorySelectorContainer").style.display= 'none';
		document.getElementById("charVizClothingAccessoriesSelectorContainer").style.display= 'block';
	}
}

function charVizClothingGoBack(x) {
	if (x === "Topwear") {
		document.getElementById("charVizClothingTopwearSelectorContainer").style.display= 'none';
		document.getElementById("charVizClothingCategorySelectorContainer").style.display= 'block';
	}
	else if (x === "Bottomwear") {
		document.getElementById("charVizClothingBottomwearSelectorContainer").style.display= 'none';
		document.getElementById("charVizClothingCategorySelectorContainer").style.display= 'block';
	}
	else if (x === "Armwear") {
		document.getElementById("charVizClothingArmwearSelectorContainer").style.display= 'none';
		document.getElementById("charVizClothingCategorySelectorContainer").style.display= 'block';
	}
	else if (x === "Legwear") {
		document.getElementById("charVizClothingLegwearSelectorContainer").style.display= 'none';
		document.getElementById("charVizClothingCategorySelectorContainer").style.display= 'block';
	}
	else if (x === "Footwear") {
		document.getElementById("charVizClothingFootwearSelectorContainer").style.display= 'none';
		document.getElementById("charVizClothingCategorySelectorContainer").style.display= 'block';
	}
	else if (x === "Underwear") {
		document.getElementById("charVizClothingUnderwearSelectorContainer").style.display= 'none';
		document.getElementById("charVizClothingCategorySelectorContainer").style.display= 'block';
	}
	else if (x === "Outfits") {
		document.getElementById("charVizClothingOutfitsSelectorContainer").style.display= 'none';
		document.getElementById("charVizClothingCategorySelectorContainer").style.display= 'block';
	}
	else if (x === "Accessories") {
		document.getElementById("charVizClothingAccessoriesSelectorContainer").style.display= 'none';
		document.getElementById("charVizClothingCategorySelectorContainer").style.display= 'block';
	}
}

function toggleCharVizMenus(x) {
	var menu;
	var height;
	if (x == 0) {
		menu = document.getElementById("charVizCharacterColorsContainer");
		height = "280px"
	}
	else if (x == 1) {
		menu = document.getElementById("charVizClothingContainer");
		height = "350px"
	}
	else if (x == 2) {
		menu = document.getElementById("charVizClothingColorsContainer");
		height = "480px"
	}
	else if (x == 3) {
		menu = document.getElementById("charVizOptionsContainer");
		height = "400px"
	}
	else if (x == 4) {
		menu = document.getElementById("charVizCreditsContainer");
		height = "380px"
	}
	if (menu.style.maxHeight === "0px") {
		menu.style.maxHeight = height;
	} else {
		menu.style.maxHeight = "0px";
	}
}

function charVizSetBGColor(x) {
	if (x == 0) {
		document.getElementsByClassName("charVizDisplayContainer")[0].style.backgroundColor = "#282640";
	}
	else if (x == 1) {
		document.getElementsByClassName("charVizDisplayContainer")[0].style.backgroundColor = "#fff";
	}
	else if (x == 2) {
		document.getElementsByClassName("charVizDisplayContainer")[0].style.backgroundColor = "#000";
	}
	else if (x == 3) {
		document.getElementsByClassName("charVizDisplayContainer")[0].style.backgroundColor = "#222";
	}
	localStorage.setItem("CharViz_Background_Color", x);
}

function toggleClothColoringOnDefault() {
	var tickbox = document.getElementById("clothColoringOnDefaultCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
	}
	else {
		var tickbox = "No"
	}
	localStorage.setItem("Dont_Set_Default_Clothing_Colors", tickbox);
}

function charVizToggleBlush() {
	var tickbox = document.getElementById("charVizBlushCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("charVizDisplayHeadBlush").style.backgroundImage = 'url(./images/charViz/heads/canine/blush.png)';
	}
	else {
		var tickbox = "No"
		document.getElementById("charVizDisplayHeadBlush").style.backgroundImage = '';
	}
	localStorage.setItem("CharViz_Character_Blushing", tickbox);
	if (controlsessionactive === "Yes") { 
		conn.send({firstParam: "Character_Blushing", secondParam: tickbox});
	}
}

function accessoryFolder() {
	document.getElementById("charVizDisplayAccessoriesSlot2").style.backgroundImage = 'url("./images/charViz/bases/feminine/clothing/accessories/folder.png")';
	if (controlsessionactive === "Yes") { 
		conn.send({firstParam: "putAccessoryOn", secondParam: "Folder"});
	}
}

function accessoryChoker() {
	document.getElementById("charVizDisplayAccessoriesSlot3").style.backgroundImage = 'url("./images/charViz/bases/feminine/clothing/accessories/choker.png")';
	if (controlsessionactive === "Yes") { 
		conn.send({firstParam: "putAccessoryOn", secondParam: "Choker"});
	}
}