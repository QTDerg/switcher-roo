const supportedSpecies = ['African Wild Dog', 'Arctic Fox', 'Coyote', 'Dog', 'Ethiopian Wolf', 'Fennec Fox', 'Folf', 'Fox', 'Husky', 'Maned Wolf', 'Red Panda', 'Werewolf', 'Wolf', 'Wox', 'Wusky', 'Alligator', 'Crocodile', 'Dinosaur', 'Raptor', 'Snake', 'Lizard', 'Shark', 'Dragon', 'Argonian', 'Kobold'];
const canineSpecies = ['African Wild Dog', 'Arctic Fox', 'Coyote', 'Dog', 'Ethiopian Wolf', 'Fennec Fox', 'Folf', 'Fox', 'Husky', 'Maned Wolf', 'Red Panda', 'Werewolf', 'Wolf', 'Wox', 'Wusky'];
const scalySpecies = ['Alligator', 'Crocodile', 'Dinosaur', 'Raptor', 'Snake', 'Lizard', 'Argonian', 'Kobold'];

function toggleCharViz() {
var tickbox = document.getElementById("charVizCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("menuCharViz").style.display = 'block';
		document.getElementById("charVizMenusToggler").style.display = 'block';
		localStorage.setItem("CharViz_Enabled", tickbox);
		initializeCharViz();
		var Species = localStorage.getItem("Slot0_Species");
		setSpeciesTo(Species);
	}
	else {
		var tickbox = "No"
		document.getElementById("menuCharViz").style.display = 'none';
		document.getElementById("charVizMenusToggler").style.display = 'none';
		localStorage.setItem("CharViz_Enabled", tickbox);
	}
}

function charVizStartup() {
	var x = localStorage.getItem("CharViz_Enabled");
	if (x === "Yes") {
		document.getElementById("menuCharViz").style.display = 'block';
		document.getElementById("charVizMenusToggler").style.display = 'block';
		document.getElementById("charVizCheckbox").checked = true;
		var autolaunch = localStorage.getItem("Launch_CharViz_Automatically");
		if (startup === "False" || autolaunch === "Yes") {
			document.getElementById("charVizLaunchMessage").style.display = 'none';
			initializeCharViz();
		}
		else {
			document.getElementById("charVizLaunchMessage").style.display = 'block';
		}
	}
	else {
		document.getElementById("menuCharViz").style.display = 'none';
		document.getElementById("charVizMenusToggler").style.display = 'none';
	}
}

var charVizEventsInitialized;

function initializeCharViz() {	
	// Check if species are supported or Character Parts are locked
	var chosenSpecies = document.getElementById("speciesCurrent").innerHTML;
	var charPartsLocked = localStorage.getItem("Lock_Character_Parts");
	if (supportedSpecies.includes(chosenSpecies) || charPartsLocked === "Yes") {
		document.getElementById("charVizDisplayMessage").style.display = 'none';
		loadSharedAssets();
		loadCharacterParts();
		loadCharacterPatterns();
		loadCharacterColors();
		loadCharacterClothing();
		loadCharacterGenitals();
		
		// Breast Size
		var Sex = localStorage.getItem("Slot0_Sex");
			
		if (Sex == "Male" || Sex == "Femboy") {
			var breastSize = mySlider9.getValue();
		}
		else {
			var breastSize = mySlider8.getValue();
		}
		
		setBreastSizeBodyMorph(breastSize);
				
		// Thin/Thicc			
		var thinThicc = mySlider5.getValue();
		setThinThiccBodyMorph(thinThicc);
		
		// Hair Lenght
		var hairLenght = mySlider20.getValue();
		setHairLenght(hairLenght);
		
		// Genital Size
		var genitalSize = mySlider2.getValue();
		setGenitalSize(genitalSize);
		
		document.getElementById("charVizDisplayInanimateTFprimary").style.webkitMaskImage = 'url("./images/charViz/blankMask.png")';
		document.getElementById("charVizDisplayInanimateTFsecondary").style.webkitMaskImage = 'url("./images/charViz/blankMask.png")';
		document.getElementById("charVizDisplayInanimateTFlines").style.backgroundImage = '';

		if (charVizEventsInitialized === "Yes") {
			return;
		}
		else {
			charVizInitializeEvents(); // Events for Thin/Thicc, Breast Size, Hair Lenght and Genital Size sliders
			charVizEventsInitialized = "Yes";
		}
	}
	else {
		flushCharViz();
		document.getElementById("charVizDisplayMessage").style.display = 'block';
	}
	// Background Color			
	var bgcolor = localStorage.getItem("CharViz_Background_Color");
	if (bgcolor != null) {
		charVizSetBGColor(bgcolor);
	}		
}

function loadSharedAssets() {
	// Eyes
	document.getElementById("charVizDisplayHeadScleraLeft").style.webkitMaskImage = 'url(./images/charViz/heads/sharedAssets/eyes/left/scleraColor.png)';
	document.getElementById("charVizDisplayHeadScleraRight").style.webkitMaskImage = 'url(./images/charViz/heads/sharedAssets/eyes/right/scleraColor.png)';
	document.getElementById("charVizDisplayHeadSclerasShading").style.backgroundImage = 'url(./images/charViz/heads/sharedAssets/eyes/sclerasShading.png)';
	document.getElementById("charVizDisplayHeadIrisLeft").style.webkitMaskImage = 'url(./images/charViz/heads/sharedAssets/eyes/left/irisColor.png)';
	document.getElementById("charVizDisplayHeadIrisRight").style.webkitMaskImage = 'url(./images/charViz/heads/sharedAssets/eyes/right/irisColor.png)';
	document.getElementById("charVizDisplayHeadIrisesShading").style.backgroundImage = 'url(./images/charViz/heads/sharedAssets/eyes/irisesShading.png)';
	document.getElementById("charVizDisplayHeadEyelashesAndHighlights").style.backgroundImage = 'url(./images/charViz/heads/sharedAssets/eyes/eyelashesAndHighlights.png)';
	
	// Hair
	document.getElementById("charVizDisplayHairBackPrimary").style.webkitMaskImage = 'url("./images/charViz/hairBack/default/primary.png")';
	document.getElementById("charVizDisplayHairBackLines").style.backgroundImage = 'url(./images/charViz/hairBack/default/lines.png)';
}

function loadCharacterParts() {
	var body = localStorage.getItem("Slot0_CharViz_Body");
	var head = localStorage.getItem("Slot0_CharViz_Head");
	var tail = localStorage.getItem("Slot0_CharViz_Tail");
	var wings = localStorage.getItem("Slot0_CharViz_Wings");
	var pupils = localStorage.getItem("Slot0_CharViz_Pupils");

	// Bodies
	if (body === "Fluffy") {
		document.getElementById("charVizDisplayBasePrimary").style.webkitMaskImage = 'url("./images/charViz/bases/feminine/fluffy/primary.png")';
		document.getElementById("charVizDisplayBaseLines").style.backgroundImage = 'url("./images/charViz/bases/feminine/fluffy/lines.png")';
		document.getElementById("charVizDisplayBreastSizePrimary").style.webkitMaskImage = 'url("./images/charViz/bases/feminine/fluffy/breastSize/primary.png")';
		document.getElementById("charVizDisplayBreastSizeLines").style.backgroundImage = 'url(./images/charViz/bases/feminine/fluffy/breastSize/lines.png)';
	}
	else if (body === "Scaly") {
		document.getElementById("charVizDisplayBasePrimary").style.webkitMaskImage = 'url("./images/charViz/bases/feminine/scaly/primary.png")';
		document.getElementById("charVizDisplayBaseLines").style.backgroundImage = 'url("./images/charViz/bases/feminine/scaly/lines/linesDefault.png")';
		document.getElementById("charVizDisplayBreastSizePrimary").style.webkitMaskImage = 'url("./images/charViz/bases/feminine/scaly/breastSize/primary.png")';
		document.getElementById("charVizDisplayBreastSizeLines").style.backgroundImage = 'url(./images/charViz/bases/feminine/scaly/breastSize/lines.png)';
	}
	else if (body === "Scaly underthigh") {
		document.getElementById("charVizDisplayBasePrimary").style.webkitMaskImage = 'url("./images/charViz/bases/feminine/scaly/primary.png")';
		document.getElementById("charVizDisplayBaseLines").style.backgroundImage = 'url("./images/charViz/bases/feminine/scaly/lines/linesUnderthigh.png")';
		document.getElementById("charVizDisplayBreastSizePrimary").style.webkitMaskImage = 'url("./images/charViz/bases/feminine/scaly/breastSize/primary.png")';
		document.getElementById("charVizDisplayBreastSizeLines").style.backgroundImage = 'url(./images/charViz/bases/feminine/scaly/breastSize/lines.png)';
	}
	
	// Heads
	if (head === "Canine") {
		document.getElementById("charVizDisplayHeadPrimary").style.webkitMaskImage = 'url(./images/charViz/heads/canine/primary.png)';
		document.getElementById("charVizDisplayHeadSecondary").style.webkitMaskImage = 'url(./images/charViz/heads/canine/secondary.png)';
		document.getElementById("charVizDisplayHeadTertiary").style.webkitMaskImage = 'url(./images/charViz/heads/canine/tertiary.png)';
		document.getElementById("charVizDisplayHeadLines").style.backgroundImage = 'url(./images/charViz/heads/canine/lines.png)';
		document.getElementById("charVizDisplayHeadMisc").style.backgroundImage = 'url(./images/charViz/heads/canine/mouthEyebrows.png)';
		// Hair
		document.getElementById("charVizDisplayHeadHairPrimary").style.webkitMaskImage = 'url("./images/charViz/heads/canine/hair/default/primary.png")';
		document.getElementById("charVizDisplayHeadHairLines").style.backgroundImage = 'url(./images/charViz/heads/canine/hair/default/lines.png)';		
	}
	if (head === "Scalie") {
		document.getElementById("charVizDisplayHeadPrimary").style.webkitMaskImage = 'url(./images/charViz/heads/scalie/primary.png)';
		document.getElementById("charVizDisplayHeadSecondary").style.webkitMaskImage = 'url(./images/charViz/heads/scalie/secondary.png)';
		document.getElementById("charVizDisplayHeadTertiary").style.webkitMaskImage = 'url("./images/charViz/blankImage.png")';
		document.getElementById("charVizDisplayHeadLines").style.backgroundImage = 'url(./images/charViz/heads/scalie/lines.png)';
		document.getElementById("charVizDisplayHeadMisc").style.backgroundImage = 'url(./images/charViz/heads/scalie/mouthEyebrowsNose.png)';
		// Hair
		document.getElementById("charVizDisplayHeadHairPrimary").style.webkitMaskImage = 'url("./images/charViz/heads/scalie/hair/default/primary.png")';
		document.getElementById("charVizDisplayHeadHairLines").style.backgroundImage = 'url(./images/charViz/heads/scalie/hair/default/lines.png)';		
	}
	if (head === "Dragon") {
		document.getElementById("charVizDisplayHeadPrimary").style.webkitMaskImage = 'url(./images/charViz/heads/dragon/primary.png)';
		document.getElementById("charVizDisplayHeadSecondary").style.webkitMaskImage = 'url(./images/charViz/heads/dragon/secondary.png)';
		document.getElementById("charVizDisplayHeadTertiary").style.webkitMaskImage = 'url(./images/charViz/heads/dragon/tertiary.png)';
		document.getElementById("charVizDisplayHeadLines").style.backgroundImage = 'url(./images/charViz/heads/dragon/lines.png)';
		document.getElementById("charVizDisplayHeadMisc").style.backgroundImage = 'url(./images/charViz/heads/dragon/mouthEyebrowsNose.png)';
		// Hair
		document.getElementById("charVizDisplayHeadHairPrimary").style.webkitMaskImage = 'url("./images/charViz/heads/dragon/hair/default/primary.png")';
		document.getElementById("charVizDisplayHeadHairLines").style.backgroundImage = 'url(./images/charViz/heads/dragon/hair/default/lines.png)';		
	}
	if (head === "Shark") {
		document.getElementById("charVizDisplayHeadPrimary").style.webkitMaskImage = 'url(./images/charViz/heads/shark/primary.png)';
		document.getElementById("charVizDisplayHeadSecondary").style.webkitMaskImage = 'url(./images/charViz/heads/shark/secondary.png)';
		document.getElementById("charVizDisplayHeadTertiary").style.webkitMaskImage = 'url("./images/charViz/blankImage.png")';
		document.getElementById("charVizDisplayHeadLines").style.backgroundImage = 'url(./images/charViz/heads/shark/lines.png)';
		document.getElementById("charVizDisplayHeadMisc").style.backgroundImage = 'url(./images/charViz/heads/shark/mouthEyebrowsNose.png)';
		// Hair
		document.getElementById("charVizDisplayHeadHairPrimary").style.webkitMaskImage = 'url("./images/charViz/heads/shark/hair/default/primary.png")';
		document.getElementById("charVizDisplayHeadHairLines").style.backgroundImage = 'url(./images/charViz/heads/shark/hair/default/lines.png)';		
	}
	if (head === "Sergal") {
		document.getElementById("charVizDisplayHeadPrimary").style.webkitMaskImage = 'url("./images/charViz/blankImage.png")';
		document.getElementById("charVizDisplayHeadSecondary").style.webkitMaskImage = 'url("./images/charViz/blankImage.png")';
		document.getElementById("charVizDisplayHeadTertiary").style.webkitMaskImage = 'url("./images/charViz/blankImage.png")';
		document.getElementById("charVizDisplayHeadLines").style.backgroundImage = 'url(./images/charViz/heads/sergal/sergal.png)';
		document.getElementById("charVizDisplayHeadMisc").style.backgroundImage = '';
		// Hair
		document.getElementById("charVizDisplayHeadHairPrimary").style.webkitMaskImage = 'url("./images/charViz/heads/scalie/hair/default/primary.png")';
		document.getElementById("charVizDisplayHeadHairLines").style.backgroundImage = 'url(./images/charViz/heads/scalie/hair/default/lines.png)';		
	}
	
	// Tails
	if (tail === "Canine") {
		document.getElementById("charVizDisplayTailPrimary").style.webkitMaskImage = 'url("./images/charViz/tails/canine/primary.png")';
		document.getElementById("charVizDisplayTailSecondary").style.webkitMaskImage = 'url("./images/charViz/tails/canine/secondary.png")';
		document.getElementById("charVizDisplayTailTertiary").style.webkitMaskImage = 'url("./images/charViz/tails/canine/tertiary.png")';
		document.getElementById("charVizDisplayTailLines").style.backgroundImage = 'url("./images/charViz/tails/canine/lines.png")';
	}
	if (tail === "Scaly") {
		document.getElementById("charVizDisplayTailPrimary").style.webkitMaskImage = 'url("./images/charViz/tails/scaly/primary.png")';
		document.getElementById("charVizDisplayTailSecondary").style.webkitMaskImage = 'url("./images/charViz/tails/scaly/secondary.png")';
		document.getElementById("charVizDisplayTailTertiary").style.webkitMaskImage = 'url("./images/charViz/blankImage.png")';
		document.getElementById("charVizDisplayTailLines").style.backgroundImage = 'url("./images/charViz/tails/scaly/lines.png")';
	}
	if (tail === "Shark") {
		document.getElementById("charVizDisplayTailPrimary").style.webkitMaskImage = 'url("./images/charViz/tails/shark/primary.png")';
		document.getElementById("charVizDisplayTailSecondary").style.webkitMaskImage = 'url("./images/charViz/tails/shark/secondary.png")';
		document.getElementById("charVizDisplayTailTertiary").style.webkitMaskImage = 'url("./images/charViz/blankImage.png")';
		document.getElementById("charVizDisplayTailLines").style.backgroundImage = 'url("./images/charViz/tails/shark/lines.png")';
	}
	if (tail === "Feline") {
		document.getElementById("charVizDisplayTailPrimary").style.webkitMaskImage = 'url("./images/charViz/tails/feline/primary.png")';
		document.getElementById("charVizDisplayTailSecondary").style.webkitMaskImage = 'url("./images/charViz/blankImage.png")';
		document.getElementById("charVizDisplayTailTertiary").style.webkitMaskImage = 'url("./images/charViz/blankImage.png")';
		document.getElementById("charVizDisplayTailLines").style.backgroundImage = 'url("./images/charViz/tails/feline/lines.png")';
	}
	
	// Wings
	if (wings === "None") {
		document.getElementById("charVizDisplayWingsPrimary").style.webkitMaskImage = 'url("./images/charViz/blankMask.png")';
		document.getElementById("charVizDisplayWingsMarkings").style.webkitMaskImage = 'url("./images/charViz/blankMask.png")';
		document.getElementById("charVizDisplayWingsLines").style.backgroundImage = '';
	}
	else if (wings === "Dragon") {
		document.getElementById("charVizDisplayWingsPrimary").style.webkitMaskImage = 'url("./images/charViz/wings/dragon/primary.png")';
		document.getElementById("charVizDisplayWingsMarkings").style.webkitMaskImage = 'url("./images/charViz/wings/dragon/markings.png")';
		document.getElementById("charVizDisplayWingsLines").style.backgroundImage = 'url("./images/charViz/wings/dragon/lines.png")';
	}
	
	// Pupils
	if (pupils === "Default") {
		document.getElementById("charVizDisplayHeadPupils").style.backgroundImage = 'url(./images/charViz/heads/sharedAssets/eyes/pupilsDefault.png)';
	}
	else if (pupils === "Reptile") {
		document.getElementById("charVizDisplayHeadPupils").style.backgroundImage = 'url(./images/charViz/heads/sharedAssets/eyes/pupilsReptile.png)';
	}
		
}

function loadCharacterPatterns() {
	var secondary = localStorage.getItem("Slot0_CharViz_Secondary");
	var tertiary = localStorage.getItem("Slot0_CharViz_Tertiary");
	var markings = localStorage.getItem("Slot0_CharViz_Markings");
	
	// Secondary
	if (secondary === "None") {
		document.getElementById("charVizDisplayBreastSizeSecondary").style.webkitMaskImage = 'url("./images/charViz/blankMask.png")';
		document.getElementById("charVizDisplayBaseSecondary").style.webkitMaskImage = 'url("./images/charViz/blankMask.png")';
	}
	else if (secondary === "Belly, underthigh, fingers") {
		document.getElementById("charVizDisplayBreastSizeSecondary").style.webkitMaskImage = 'url("./images/charViz/bases/feminine/fluffy/breastSize/secondary.png")';
		document.getElementById("charVizDisplayBaseSecondary").style.webkitMaskImage = 'url("./images/charViz/bases/feminine/fluffy/secondary/countershadedBellyUnderthigh.png")';
	}
	else if (secondary === "Belly, fingers") {
		document.getElementById("charVizDisplayBreastSizeSecondary").style.webkitMaskImage = 'url("./images/charViz/bases/feminine/fluffy/breastSize/secondary.png")';
		document.getElementById("charVizDisplayBaseSecondary").style.webkitMaskImage = 'url("./images/charViz/bases/feminine/fluffy/secondary/countershadedBelly.png")';
	}
	else if (secondary === "Belly, underthigh") {
		document.getElementById("charVizDisplayBreastSizeSecondary").style.webkitMaskImage = 'url("./images/charViz/bases/feminine/fluffy/breastSize/secondary.png")';
		document.getElementById("charVizDisplayBaseSecondary").style.webkitMaskImage = 'url("./images/charViz/bases/feminine/scaly/secondary/countershadedBellyUnderthigh.png")';
	}
	else if (secondary === "Belly") {
		document.getElementById("charVizDisplayBreastSizeSecondary").style.webkitMaskImage = 'url("./images/charViz/bases/feminine/fluffy/breastSize/secondary.png")';
		document.getElementById("charVizDisplayBaseSecondary").style.webkitMaskImage = 'url("./images/charViz/bases/feminine/scaly/secondary/countershadedBelly.png")';
	}
	
	// Tertiary
	if (tertiary === "None") {
		document.getElementById("charVizDisplayBaseTertiary").style.webkitMaskImage = 'url("./images/charViz/blankMask.png")';
	}
	if (tertiary === "Hands and legs") {
		document.getElementById("charVizDisplayBaseTertiary").style.webkitMaskImage = 'url("./images/charViz/bases/feminine/fluffy/tertiary/handsLegs.png")';
	}
	
	// Markings
	if (markings === "None") {
		document.getElementById("charVizDisplayBreastSizeMarkings").style.webkitMaskImage = 'url("./images/charViz/blankMask.png")';
		document.getElementById("charVizDisplayBaseMarkings").style.webkitMaskImage = 'url("./images/charViz/blankMask.png")';
	}
	else if (markings === "Line") {
		document.getElementById("charVizDisplayBreastSizeMarkings").style.webkitMaskImage = 'url("./images/charViz/bases/feminine/fluffy/breastSize/markings/lineAlongBelly.png")';
		document.getElementById("charVizDisplayBaseMarkings").style.webkitMaskImage = 'url("./images/charViz/bases/feminine/fluffy/markings/lineAlongBelly.png")';
	}
	else if (markings === "Line underthigh") {
		document.getElementById("charVizDisplayBreastSizeMarkings").style.webkitMaskImage = 'url("./images/charViz/bases/feminine/fluffy/breastSize/markings/lineAlongBelly.png")';
		document.getElementById("charVizDisplayBaseMarkings").style.webkitMaskImage = 'url("./images/charViz/bases/feminine/fluffy/markings/lineAlongBellyUnderthigh.png")';
	}
}

function loadCharacterColors() {
	var primaryCharColor = localStorage.getItem("Slot0_Primary_Character_Color");
	var secondaryCharColor = localStorage.getItem("Slot0_Secondary_Character_Color");
	var tertiaryCharColor = localStorage.getItem("Slot0_Tertiary_Character_Color");
	var markingsCharColor = localStorage.getItem("Slot0_Markings_Character_Color");
	var leftEyeCharColor = localStorage.getItem("Slot0_LeftEye_Character_Color");
	var rightEyeCharColor = localStorage.getItem("Slot0_RightEye_Character_Color");
	var hairCharColor = localStorage.getItem("Slot0_Hair_Character_Color");
	var leftScleraCharColor = localStorage.getItem("Slot0_LeftSclera_Character_Color");
	var rightScleraCharColor = localStorage.getItem("Slot0_RightSclera_Character_Color");
		
	// Primary
	document.getElementById("charVizDisplayBasePrimary").style.backgroundColor = primaryCharColor;
	document.getElementById("charVizDisplayTailPrimary").style.backgroundColor = primaryCharColor;
	document.getElementById("charVizDisplayHeadPrimary").style.backgroundColor = primaryCharColor;
	document.getElementById("charVizDisplayBreastSizePrimary").style.backgroundColor = primaryCharColor;
	document.getElementById("charVizDisplayWingsPrimary").style.backgroundColor = primaryCharColor;
	document.getElementById("charVizDisplayInanimateTFprimary").style.backgroundColor = primaryCharColor;
	document.getElementById("charVizPrimaryCharacterColorSwatch").style.backgroundColor = primaryCharColor;
	
	// Secondary
	document.getElementById("charVizDisplayBaseSecondary").style.backgroundColor = secondaryCharColor;
	document.getElementById("charVizDisplayBreastSizeSecondary").style.backgroundColor = secondaryCharColor;
	document.getElementById("charVizDisplayGenitalsSecondary").style.backgroundColor = secondaryCharColor;
	document.getElementById("charVizDisplayTailSecondary").style.backgroundColor = secondaryCharColor;
	document.getElementById("charVizDisplayHeadSecondary").style.backgroundColor = secondaryCharColor;
	document.getElementById("charVizDisplayInanimateTFsecondary").style.backgroundColor = secondaryCharColor;
	document.getElementById("charVizSecondaryCharacterColorSwatch").style.backgroundColor = secondaryCharColor;
	
	// Tertiary
	document.getElementById("charVizDisplayBaseTertiary").style.backgroundColor = tertiaryCharColor;
	document.getElementById("charVizDisplayTailTertiary").style.backgroundColor = tertiaryCharColor;
	document.getElementById("charVizDisplayHeadTertiary").style.backgroundColor = tertiaryCharColor;
	document.getElementById("charVizTertiaryCharacterColorSwatch").style.backgroundColor = tertiaryCharColor;

	// Markings
	document.getElementById("charVizDisplayBaseMarkings").style.backgroundColor = markingsCharColor;		
	document.getElementById("charVizDisplayBreastSizeMarkings").style.backgroundColor = markingsCharColor;
	document.getElementById("charVizDisplayWingsMarkings").style.backgroundColor = markingsCharColor;
	document.getElementById("charVizDisplayGenitalsMarkings").style.backgroundColor = markingsCharColor;
	document.getElementById("charVizMarkingsCharacterColorSwatch").style.backgroundColor = markingsCharColor;

	// Left Eye
	document.getElementById("charVizLeftEyeCharacterColorSwatch").style.backgroundColor = leftEyeCharColor;
	document.getElementById("charVizDisplayHeadIrisLeft").style.backgroundColor = leftEyeCharColor;

	// Right Eye
	document.getElementById("charVizRightEyeCharacterColorSwatch").style.backgroundColor = rightEyeCharColor;
	document.getElementById("charVizDisplayHeadIrisRight").style.backgroundColor = rightEyeCharColor;

	// Hair
	document.getElementById("charVizHairCharacterColorSwatch").style.backgroundColor = hairCharColor;
	document.getElementById("charVizDisplayHeadHairPrimary").style.backgroundColor = hairCharColor;
	document.getElementById("charVizDisplayHairBackPrimary").style.backgroundColor = hairCharColor;

	// Left Sclera
	document.getElementById("charVizLeftScleraCharacterColorSwatch").style.backgroundColor = leftScleraCharColor;
	document.getElementById("charVizDisplayHeadScleraLeft").style.backgroundColor = leftScleraCharColor;

	// Right Sclera
	document.getElementById("charVizRightScleraCharacterColorSwatch").style.backgroundColor = rightScleraCharColor;
	document.getElementById("charVizDisplayHeadScleraRight").style.backgroundColor = rightScleraCharColor;

}

function loadCharacterClothing() {
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
	
	charVizPutClothingOn("Topwear", topwear, "Yes");
	charVizPutClothingOn("Bottomwear", bottomwear, "Yes");
	charVizPutClothingOn("Armwear", armwear, "Yes");
	charVizPutClothingOn("Legwear", legwear, "Yes");
	charVizPutClothingOn("Underwear", underwear, "Yes");
	charVizPutClothingOn("Accessories", accessories, "Yes");
}

function loadCharacterGenitals() {
	var showGenitals = localStorage.getItem("CharViz_Show_Genitals");
	if (showGenitals === "Yes") {
		var cockType = localStorage.getItem("Slot0_Cock_Type");
		if (cockType === "Humanoid") {
			document.getElementById("charVizDisplayGenitalsSecondary").style.webkitMaskImage = 'url("./images/charViz/genitals/pp/humanoid/secondary.png")';
			document.getElementById("charVizDisplayGenitalsMarkings").style.webkitMaskImage = 'url("./images/charViz/genitals/pp/humanoid/markings.png")';
			document.getElementById("charVizDisplayGenitalsLines").style.backgroundImage = 'url(./images/charViz/genitals/pp/humanoid/lines.png)';
		}
		else {
			document.getElementById("charVizDisplayGenitalsSecondary").style.webkitMaskImage = 'url("./images/charViz/blankMask.png")';
			document.getElementById("charVizDisplayGenitalsMarkings").style.webkitMaskImage = 'url("./images/charViz/blankMask.png")';
			document.getElementById("charVizDisplayGenitalsLines").style.backgroundImage = '';
		}
	}
	else {
		document.getElementById("charVizDisplayGenitalsSecondary").style.webkitMaskImage = 'url("./images/charViz/blankMask.png")';
		document.getElementById("charVizDisplayGenitalsMarkings").style.webkitMaskImage = 'url("./images/charViz/blankMask.png")';
		document.getElementById("charVizDisplayGenitalsLines").style.backgroundImage = '';
	}
}

function funniestShitIveEverSeen() {
	flushCharViz();
	var primaryCharColor = localStorage.getItem("Slot0_Primary_Character_Color");
	var secondaryCharColor = localStorage.getItem("Slot0_Secondary_Character_Color");
	document.getElementById("charVizDisplayInanimateTFprimary").style.backgroundColor = primaryCharColor;
	document.getElementById("charVizDisplayInanimateTFsecondary").style.backgroundColor = secondaryCharColor;
	document.getElementById("charVizDisplayInanimateTFprimary").style.webkitMaskImage = 'url("./images/charViz/inanimateTFs/pickle/primary.png")';
	document.getElementById("charVizDisplayInanimateTFsecondary").style.webkitMaskImage = 'url("./images/charViz/inanimateTFs/pickle/secondary.png")';
	document.getElementById("charVizDisplayInanimateTFlines").style.backgroundImage = 'url(./images/charViz/inanimateTFs/pickle/lines.png)';
	document.getElementById('inanimateObjectsCurrent').innerHTML = "Pickle";
	localStorage.setItem("Slot0_Inanimate_Object", "Pickle");
	goBackFromInanimateObjectsList();
	showProcessingAnimation();
}

function saveCharacterPartPreset(x) {
	// Canine species
	if (canineSpecies.includes(x)) {
		saveCharacterPart("Body", "Fluffy");
		saveCharacterPart("Head", "Canine");
		saveCharacterPart("Tail", "Canine");
		saveCharacterPart("Wings", "None");
		saveCharacterPart("Pupils", "Default");
		saveCharacterPattern("Secondary", "Belly, underthigh, fingers");
		saveCharacterPattern("Tertiary", "Hands and legs");
		saveCharacterPattern("Markings", "Line underthigh");
	}
	// Scaly species
	else if (scalySpecies.includes(x)) {
		saveCharacterPart("Body", "Scaly");
		saveCharacterPart("Head", "Scalie");
		saveCharacterPart("Tail", "Scaly");
		saveCharacterPart("Wings", "None");
		saveCharacterPart("Pupils", "Reptile");
		saveCharacterPattern("Secondary", "Belly");
		saveCharacterPattern("Tertiary", "None");
		saveCharacterPattern("Markings", "Line");
	}
	// Dragon
	else if (x === "Dragon") {
		saveCharacterPart("Body", "Scaly");
		saveCharacterPart("Head", "Dragon");
		saveCharacterPart("Tail", "Scaly");
		saveCharacterPart("Wings", "Dragon");
		saveCharacterPart("Pupils", "Reptile");
		saveCharacterPattern("Secondary", "Belly");
		saveCharacterPattern("Tertiary", "None");
		saveCharacterPattern("Markings", "Line");
	}
	// Shark
	else if (x === "Shark") {
		saveCharacterPart("Body", "Fluffy");
		saveCharacterPart("Head", "Shark");
		saveCharacterPart("Tail", "Shark");
		saveCharacterPart("Wings", "None");
		saveCharacterPart("Pupils", "Reptile");
		saveCharacterPattern("Secondary", "Belly, underthigh");
		saveCharacterPattern("Tertiary", "None");
		saveCharacterPattern("Markings", "Line underthigh");
	}
}

// Just save it to local storage and loading function will do the heavy lifting
function saveCharacterPart(x, y) {
	if (y === "PartName") { return }
	localStorage.setItem("Slot0_CharViz_" + x, y);
	if (controlsessionactive === "Yes" && synchronizationComplete === "Yes") {
		conn.send({firstParam: "changeCharacterPart", secondParam: x, thirdParam: y});
		conn.send({firstParam: "loadCharacterParts"});
	}
}

function saveCharacterPattern(x, y) {
	if (y === "PatternName") { return }
	localStorage.setItem("Slot0_CharViz_" + x, y);
	if (controlsessionactive === "Yes" && synchronizationComplete === "Yes") {
		conn.send({firstParam: "changeCharacterPattern", secondParam: x, thirdParam: y});
		conn.send({firstParam: "loadCharacterPatterns"});
	}
}

function setBreastSizeBodyMorph(breastSize) {
	if (breastSize <= 5) {
		document.getElementById("charVizDisplayBreastSizePrimary").style.setProperty("-webkit-mask-position", "0% 50%", "important");
		document.getElementById("charVizDisplayBreastSizeSecondary").style.setProperty("-webkit-mask-position", "0% 50%", "important");
		document.getElementById("charVizDisplayBreastSizeMarkings").style.setProperty("-webkit-mask-position", "0% 50%", "important");
		document.getElementById("charVizDisplayBreastSizeLines").style.setProperty("background-position", "0% 50%", "important");
		
		// Clothing:
		document.getElementById("charVizDisplayTopwearBreastSizePrimary").style.setProperty("-webkit-mask-position", "0% 50%", "important");
		document.getElementById("charVizDisplayTopwearBreastSizeSecondary").style.setProperty("-webkit-mask-position", "0% 50%", "important");
		document.getElementById("charVizDisplayTopwearBreastSizeLines").style.setProperty("background-position", "0% 50%", "important");
	}
	else if (breastSize >= 6 && breastSize <=30) {
		document.getElementById("charVizDisplayBreastSizePrimary").style.setProperty("-webkit-mask-position", "25% 50%", "important");
		document.getElementById("charVizDisplayBreastSizeSecondary").style.setProperty("-webkit-mask-position", "25% 50%", "important");
		document.getElementById("charVizDisplayBreastSizeMarkings").style.setProperty("-webkit-mask-position", "25% 50%", "important");
		document.getElementById("charVizDisplayBreastSizeLines").style.setProperty("background-position", "25% 50%", "important");
		
		// Clothing:
		document.getElementById("charVizDisplayTopwearBreastSizePrimary").style.setProperty("-webkit-mask-position", "25% 50%", "important");
		document.getElementById("charVizDisplayTopwearBreastSizeSecondary").style.setProperty("-webkit-mask-position", "25% 50%", "important");
		document.getElementById("charVizDisplayTopwearBreastSizeLines").style.setProperty("background-position", "25% 50%", "important");
	}
	else if (breastSize >= 31 && breastSize <=55) {
		document.getElementById("charVizDisplayBreastSizePrimary").style.setProperty("-webkit-mask-position", "50% 50%", "important");
		document.getElementById("charVizDisplayBreastSizeSecondary").style.setProperty("-webkit-mask-position", "50% 50%", "important");
		document.getElementById("charVizDisplayBreastSizeMarkings").style.setProperty("-webkit-mask-position", "50% 50%", "important");
		document.getElementById("charVizDisplayBreastSizeLines").style.setProperty("background-position", "50% 50%", "important");
		
		// Clothing:
		document.getElementById("charVizDisplayTopwearBreastSizePrimary").style.setProperty("-webkit-mask-position", "50% 50%", "important");
		document.getElementById("charVizDisplayTopwearBreastSizeSecondary").style.setProperty("-webkit-mask-position", "50% 50%", "important");
		document.getElementById("charVizDisplayTopwearBreastSizeLines").style.setProperty("background-position", "50% 50%", "important");
	}
	else if (breastSize >= 56 && breastSize <=80) {
		document.getElementById("charVizDisplayBreastSizePrimary").style.setProperty("-webkit-mask-position", "75% 50%", "important");
		document.getElementById("charVizDisplayBreastSizeSecondary").style.setProperty("-webkit-mask-position", "75% 50%", "important");
		document.getElementById("charVizDisplayBreastSizeMarkings").style.setProperty("-webkit-mask-position", "75% 50%", "important");
		document.getElementById("charVizDisplayBreastSizeLines").style.setProperty("background-position", "75% 50%", "important");
		
		// Clothing:
		document.getElementById("charVizDisplayTopwearBreastSizePrimary").style.setProperty("-webkit-mask-position", "75% 50%", "important");
		document.getElementById("charVizDisplayTopwearBreastSizeSecondary").style.setProperty("-webkit-mask-position", "75% 50%", "important");
		document.getElementById("charVizDisplayTopwearBreastSizeLines").style.setProperty("background-position", "75% 50%", "important");
	}
	else if (breastSize >= 81) {
		document.getElementById("charVizDisplayBreastSizePrimary").style.setProperty("-webkit-mask-position", "100% 50%", "important");
		document.getElementById("charVizDisplayBreastSizeSecondary").style.setProperty("-webkit-mask-position", "100% 50%", "important");
		document.getElementById("charVizDisplayBreastSizeMarkings").style.setProperty("-webkit-mask-position", "100% 50%", "important");
		document.getElementById("charVizDisplayBreastSizeLines").style.setProperty("background-position", "100% 50%", "important");
		
		// Clothing:
		document.getElementById("charVizDisplayTopwearBreastSizePrimary").style.setProperty("-webkit-mask-position", "100% 50%", "important");
		document.getElementById("charVizDisplayTopwearBreastSizeSecondary").style.setProperty("-webkit-mask-position", "100% 50%", "important");
		document.getElementById("charVizDisplayTopwearBreastSizeLines").style.setProperty("background-position", "100% 50%", "important");
	}
}

function setThinThiccBodyMorph(thinThicc) {
	if (thinThicc <= 20) {
		document.getElementById("charVizDisplayBasePrimary").style.setProperty("-webkit-mask-position", "0% 50%", "important");
		document.getElementById("charVizDisplayBaseSecondary").style.setProperty("-webkit-mask-position", "0% 50%", "important");
		document.getElementById("charVizDisplayBaseTertiary").style.setProperty("-webkit-mask-position", "0% 50%", "important");
		document.getElementById("charVizDisplayBaseMarkings").style.setProperty("-webkit-mask-position", "0% 50%", "important");
		document.getElementById("charVizDisplayBaseLines").style.setProperty("background-position", "0% 50%", "important");
		
		// Clothing:
		document.getElementById("charVizDisplayTopwearPrimary").style.setProperty("-webkit-mask-position", "0% 50%", "important");
		document.getElementById("charVizDisplayTopwearSecondary").style.setProperty("-webkit-mask-position", "0% 50%", "important");
		document.getElementById("charVizDisplayTopwearLines").style.setProperty("background-position", "0% 50%", "important");
		document.getElementById("charVizDisplayBottomwearPrimary").style.setProperty("-webkit-mask-position", "0% 50%", "important");
		document.getElementById("charVizDisplayBottomwearSecondary").style.setProperty("-webkit-mask-position", "0% 50%", "important");
		document.getElementById("charVizDisplayBottomwearLines").style.setProperty("background-position", "0% 50%", "important");
		document.getElementById("charVizDisplayArmwearPrimary").style.setProperty("-webkit-mask-position", "0% 50%", "important");
		document.getElementById("charVizDisplayArmwearSecondary").style.setProperty("-webkit-mask-position", "0% 50%", "important");
		document.getElementById("charVizDisplayArmwearLines").style.setProperty("background-position", "0% 50%", "important");
		document.getElementById("charVizDisplayLegwearPrimary").style.setProperty("-webkit-mask-position", "0% 50%", "important");
		document.getElementById("charVizDisplayLegwearSecondary").style.setProperty("-webkit-mask-position", "0% 50%", "important");
		document.getElementById("charVizDisplayLegwearLines").style.setProperty("background-position", "0% 50%", "important");
		document.getElementById("charVizDisplayUnderwearPrimary").style.setProperty("-webkit-mask-position", "0% 50%", "important");
		document.getElementById("charVizDisplayUnderwearSecondary").style.setProperty("-webkit-mask-position", "0% 50%", "important");
		document.getElementById("charVizDisplayUnderwearLines").style.setProperty("background-position", "0% 50%", "important");
	}
	else if (thinThicc >= 21 && thinThicc <=40) {
		document.getElementById("charVizDisplayBasePrimary").style.setProperty("-webkit-mask-position", "25% 50%", "important");
		document.getElementById("charVizDisplayBaseSecondary").style.setProperty("-webkit-mask-position", "25% 50%", "important");
		document.getElementById("charVizDisplayBaseTertiary").style.setProperty("-webkit-mask-position", "25% 50%", "important");
		document.getElementById("charVizDisplayBaseMarkings").style.setProperty("-webkit-mask-position", "25% 50%", "important");
		document.getElementById("charVizDisplayBaseLines").style.setProperty("background-position", "25% 50%", "important");
		
		// Clothing:
		document.getElementById("charVizDisplayTopwearPrimary").style.setProperty("-webkit-mask-position", "25% 50%", "important");
		document.getElementById("charVizDisplayTopwearSecondary").style.setProperty("-webkit-mask-position", "25% 50%", "important");
		document.getElementById("charVizDisplayTopwearLines").style.setProperty("background-position", "25% 50%", "important");
		document.getElementById("charVizDisplayBottomwearPrimary").style.setProperty("-webkit-mask-position", "25% 50%", "important");
		document.getElementById("charVizDisplayBottomwearSecondary").style.setProperty("-webkit-mask-position", "25% 50%", "important");
		document.getElementById("charVizDisplayBottomwearLines").style.setProperty("background-position", "25% 50%", "important");
		document.getElementById("charVizDisplayArmwearPrimary").style.setProperty("-webkit-mask-position", "25% 50%", "important");
		document.getElementById("charVizDisplayArmwearSecondary").style.setProperty("-webkit-mask-position", "25% 50%", "important");
		document.getElementById("charVizDisplayArmwearLines").style.setProperty("background-position", "25% 50%", "important");
		document.getElementById("charVizDisplayLegwearPrimary").style.setProperty("-webkit-mask-position", "25% 50%", "important");
		document.getElementById("charVizDisplayLegwearSecondary").style.setProperty("-webkit-mask-position", "25% 50%", "important");
		document.getElementById("charVizDisplayLegwearLines").style.setProperty("background-position", "25% 50%", "important");
		document.getElementById("charVizDisplayUnderwearPrimary").style.setProperty("-webkit-mask-position", "25% 50%", "important");
		document.getElementById("charVizDisplayUnderwearSecondary").style.setProperty("-webkit-mask-position", "25% 50%", "important");
		document.getElementById("charVizDisplayUnderwearLines").style.setProperty("background-position", "25% 50%", "important");
	}
	else if (thinThicc >= 41 && thinThicc <=60) {
		document.getElementById("charVizDisplayBasePrimary").style.setProperty("-webkit-mask-position", "50% 50%", "important");
		document.getElementById("charVizDisplayBaseSecondary").style.setProperty("-webkit-mask-position", "50% 50%", "important");
		document.getElementById("charVizDisplayBaseTertiary").style.setProperty("-webkit-mask-position", "50% 50%", "important");
		document.getElementById("charVizDisplayBaseMarkings").style.setProperty("-webkit-mask-position", "50% 50%", "important");
		document.getElementById("charVizDisplayBaseLines").style.setProperty("background-position", "50% 50%", "important");
		
		// Clothing:
		document.getElementById("charVizDisplayTopwearPrimary").style.setProperty("-webkit-mask-position", "50% 50%", "important");
		document.getElementById("charVizDisplayTopwearSecondary").style.setProperty("-webkit-mask-position", "50% 50%", "important");
		document.getElementById("charVizDisplayTopwearLines").style.setProperty("background-position", "50% 50%", "important");
		document.getElementById("charVizDisplayBottomwearPrimary").style.setProperty("-webkit-mask-position", "50% 50%", "important");
		document.getElementById("charVizDisplayBottomwearSecondary").style.setProperty("-webkit-mask-position", "50% 50%", "important");
		document.getElementById("charVizDisplayBottomwearLines").style.setProperty("background-position", "50% 50%", "important");
		document.getElementById("charVizDisplayArmwearPrimary").style.setProperty("-webkit-mask-position", "50% 50%", "important");
		document.getElementById("charVizDisplayArmwearSecondary").style.setProperty("-webkit-mask-position", "50% 50%", "important");
		document.getElementById("charVizDisplayArmwearLines").style.setProperty("background-position", "50% 50%", "important");
		document.getElementById("charVizDisplayLegwearPrimary").style.setProperty("-webkit-mask-position", "50% 50%", "important");
		document.getElementById("charVizDisplayLegwearSecondary").style.setProperty("-webkit-mask-position", "50% 50%", "important");
		document.getElementById("charVizDisplayLegwearLines").style.setProperty("background-position", "50% 50%", "important");
		document.getElementById("charVizDisplayUnderwearPrimary").style.setProperty("-webkit-mask-position", "50% 50%", "important");
		document.getElementById("charVizDisplayUnderwearSecondary").style.setProperty("-webkit-mask-position", "50% 50%", "important");
		document.getElementById("charVizDisplayUnderwearLines").style.setProperty("background-position", "50% 50%", "important");
	}
	else if (thinThicc >= 61 && thinThicc <=80) {
		document.getElementById("charVizDisplayBasePrimary").style.setProperty("-webkit-mask-position", "75% 50%", "important");
		document.getElementById("charVizDisplayBaseSecondary").style.setProperty("-webkit-mask-position", "75% 50%", "important");
		document.getElementById("charVizDisplayBaseTertiary").style.setProperty("-webkit-mask-position", "75% 50%", "important");
		document.getElementById("charVizDisplayBaseMarkings").style.setProperty("-webkit-mask-position", "75% 50%", "important");
		document.getElementById("charVizDisplayBaseLines").style.setProperty("background-position", "75% 50%", "important");
		
		// Clothing:
		document.getElementById("charVizDisplayTopwearPrimary").style.setProperty("-webkit-mask-position", "75% 50%", "important");
		document.getElementById("charVizDisplayTopwearSecondary").style.setProperty("-webkit-mask-position", "75% 50%", "important");
		document.getElementById("charVizDisplayTopwearLines").style.setProperty("background-position", "75% 50%", "important");
		document.getElementById("charVizDisplayBottomwearPrimary").style.setProperty("-webkit-mask-position", "75% 50%", "important");
		document.getElementById("charVizDisplayBottomwearSecondary").style.setProperty("-webkit-mask-position", "75% 50%", "important");
		document.getElementById("charVizDisplayBottomwearLines").style.setProperty("background-position", "75% 50%", "important");
		document.getElementById("charVizDisplayArmwearPrimary").style.setProperty("-webkit-mask-position", "75% 50%", "important");
		document.getElementById("charVizDisplayArmwearSecondary").style.setProperty("-webkit-mask-position", "75% 50%", "important");
		document.getElementById("charVizDisplayArmwearLines").style.setProperty("background-position", "75% 50%", "important");
		document.getElementById("charVizDisplayLegwearPrimary").style.setProperty("-webkit-mask-position", "75% 50%", "important");
		document.getElementById("charVizDisplayLegwearSecondary").style.setProperty("-webkit-mask-position", "75% 50%", "important");
		document.getElementById("charVizDisplayLegwearLines").style.setProperty("background-position", "75% 50%", "important");
		document.getElementById("charVizDisplayUnderwearPrimary").style.setProperty("-webkit-mask-position", "75% 50%", "important");
		document.getElementById("charVizDisplayUnderwearSecondary").style.setProperty("-webkit-mask-position", "75% 50%", "important");
		document.getElementById("charVizDisplayUnderwearLines").style.setProperty("background-position", "75% 50%", "important");
	}
	else if (thinThicc >= 81) {
		document.getElementById("charVizDisplayBasePrimary").style.setProperty("-webkit-mask-position", "100% 50%", "important");
		document.getElementById("charVizDisplayBaseSecondary").style.setProperty("-webkit-mask-position", "100% 50%", "important");
		document.getElementById("charVizDisplayBaseTertiary").style.setProperty("-webkit-mask-position", "100% 50%", "important");
		document.getElementById("charVizDisplayBaseMarkings").style.setProperty("-webkit-mask-position", "100% 50%", "important");
		document.getElementById("charVizDisplayBaseLines").style.setProperty("background-position", "100% 50%", "important");
		
		// Clothing:
		document.getElementById("charVizDisplayTopwearPrimary").style.setProperty("-webkit-mask-position", "100% 50%", "important");
		document.getElementById("charVizDisplayTopwearSecondary").style.setProperty("-webkit-mask-position", "100% 50%", "important");
		document.getElementById("charVizDisplayTopwearLines").style.setProperty("background-position", "100% 50%", "important");
		document.getElementById("charVizDisplayBottomwearPrimary").style.setProperty("-webkit-mask-position", "100% 50%", "important");
		document.getElementById("charVizDisplayBottomwearSecondary").style.setProperty("-webkit-mask-position", "100% 50%", "important");
		document.getElementById("charVizDisplayBottomwearLines").style.setProperty("background-position", "100% 50%", "important");
		document.getElementById("charVizDisplayArmwearPrimary").style.setProperty("-webkit-mask-position", "100% 50%", "important");
		document.getElementById("charVizDisplayArmwearSecondary").style.setProperty("-webkit-mask-position", "100% 50%", "important");
		document.getElementById("charVizDisplayArmwearLines").style.setProperty("background-position", "100% 50%", "important");
		document.getElementById("charVizDisplayLegwearPrimary").style.setProperty("-webkit-mask-position", "100% 50%", "important");
		document.getElementById("charVizDisplayLegwearSecondary").style.setProperty("-webkit-mask-position", "100% 50%", "important");
		document.getElementById("charVizDisplayLegwearLines").style.setProperty("background-position", "100% 50%", "important");
		document.getElementById("charVizDisplayUnderwearPrimary").style.setProperty("-webkit-mask-position", "100% 50%", "important");
		document.getElementById("charVizDisplayUnderwearSecondary").style.setProperty("-webkit-mask-position", "100% 50%", "important");
		document.getElementById("charVizDisplayUnderwearLines").style.setProperty("background-position", "100% 50%", "important");
	}
}

function setHairLenght(hairLenght) {				
	if (hairLenght <= 29) {	
		document.getElementById("charVizDisplayHeadHairPrimary").style.setProperty("-webkit-mask-position", "0% 50%", "important");
		document.getElementById("charVizDisplayHeadHairLines").style.setProperty("background-position", "0% 50%", "important");
		document.getElementById("charVizDisplayHairBackPrimary").style.setProperty("-webkit-mask-position", "0% 50%", "important");
		document.getElementById("charVizDisplayHairBackLines").style.setProperty("background-position", "0% 50%", "important");
	}
	else if (hairLenght >= 30 && hairLenght <=74) {
		document.getElementById("charVizDisplayHeadHairPrimary").style.setProperty("-webkit-mask-position", "25% 50%", "important");
		document.getElementById("charVizDisplayHeadHairLines").style.setProperty("background-position", "25% 50%", "important");
		document.getElementById("charVizDisplayHairBackPrimary").style.setProperty("-webkit-mask-position", "25% 50%", "important");
		document.getElementById("charVizDisplayHairBackLines").style.setProperty("background-position", "25% 50%", "important");
		}
	else { 
		document.getElementById("charVizDisplayHeadHairPrimary").style.setProperty("-webkit-mask-position", "50% 50%", "important");
		document.getElementById("charVizDisplayHeadHairLines").style.setProperty("background-position", "50% 50%", "important");
		document.getElementById("charVizDisplayHairBackPrimary").style.setProperty("-webkit-mask-position", "50% 50%", "important");
		document.getElementById("charVizDisplayHairBackLines").style.setProperty("background-position", "50% 50%", "important");
	}
}

function setGenitalSize(genitalSize) {
	if (genitalSize <= 5) {
		document.getElementById("charVizDisplayGenitalsSecondary").style.setProperty("-webkit-mask-position", "0% 50%", "important");
		document.getElementById("charVizDisplayGenitalsMarkings").style.setProperty("-webkit-mask-position", "0% 50%", "important");
		document.getElementById("charVizDisplayGenitalsLines").style.setProperty("background-position", "0% 50%", "important");
	}
	else if (genitalSize >= 6 && genitalSize <=30) {
		document.getElementById("charVizDisplayGenitalsSecondary").style.setProperty("-webkit-mask-position", "25% 50%", "important");
		document.getElementById("charVizDisplayGenitalsMarkings").style.setProperty("-webkit-mask-position", "25% 50%", "important");
		document.getElementById("charVizDisplayGenitalsLines").style.setProperty("background-position", "25% 50%", "important");
	}
	else if (genitalSize >= 31 && genitalSize <=55) {
		document.getElementById("charVizDisplayGenitalsSecondary").style.setProperty("-webkit-mask-position", "50% 50%", "important");
		document.getElementById("charVizDisplayGenitalsMarkings").style.setProperty("-webkit-mask-position", "50% 50%", "important");
		document.getElementById("charVizDisplayGenitalsLines").style.setProperty("background-position", "50% 50%", "important");
	}
	else if (genitalSize >= 56 && genitalSize <=80) {
		document.getElementById("charVizDisplayGenitalsSecondary").style.setProperty("-webkit-mask-position", "75% 50%", "important");
		document.getElementById("charVizDisplayGenitalsMarkings").style.setProperty("-webkit-mask-position", "75% 50%", "important");
		document.getElementById("charVizDisplayGenitalsLines").style.setProperty("background-position", "75% 50%", "important");
	}
	else if (genitalSize >= 81) {
		document.getElementById("charVizDisplayGenitalsSecondary").style.setProperty("-webkit-mask-position", "100% 50%", "important");
		document.getElementById("charVizDisplayGenitalsMarkings").style.setProperty("-webkit-mask-position", "100% 50%", "important");
		document.getElementById("charVizDisplayGenitalsLines").style.setProperty("background-position", "100% 50%", "important");
	}
}

function charVizInitializeEvents() {
	mySlider5.attachEvent("onChange", function() {
   	var x = mySlider5.getValue();
	setThinThiccBodyMorph(x);
});
	mySlider9.attachEvent("onChange", function() {
   	var x = mySlider9.getValue();
	setBreastSizeBodyMorph(x);
});
	mySlider8.attachEvent("onChange", function() {
   	var x = mySlider8.getValue();
	setBreastSizeBodyMorph(x);
});
	mySlider20.attachEvent("onChange", function() {
   	var x = mySlider20.getValue();
	setHairLenght(x);
});
	mySlider2.attachEvent("onChange", function() {
   	var x = mySlider2.getValue();
	setGenitalSize(x);
});
}

function charVizPutClothingOn(x, y, z) {
	if (x === "Topwear") {
		if (y === "Office Shirt") {			
			document.getElementById("charVizDisplayTopwearPrimary").style.webkitMaskImage = 'url("./images/charViz/bases/feminine/clothing/topwear/officeShirt/thinThicc/default/primary.png")';
			document.getElementById("charVizDisplayTopwearSecondary").style.webkitMaskImage = 'url("./images/charViz/blankMask.png")';
			document.getElementById("charVizDisplayTopwearLines").style.backgroundImage = 'url("./images/charViz/bases/feminine/clothing/topwear/officeShirt/thinThicc/default/lines.png")';
			document.getElementById("charVizDisplayTopwearBreastSizePrimary").style.webkitMaskImage = 'url("./images/charViz/bases/feminine/clothing/topwear/officeShirt/breastSize/primary.png")';
			document.getElementById("charVizDisplayTopwearBreastSizeSecondary").style.webkitMaskImage = 'url("./images/charViz/blankMask.png")';
			document.getElementById("charVizDisplayTopwearBreastSizeLines").style.backgroundImage = 'url("./images/charViz/bases/feminine/clothing/topwear/officeShirt/breastSize/lines.png")';
		}
		else if (y === "Office Shirt (tucked)") {
			document.getElementById("charVizDisplayTopwearPrimary").style.webkitMaskImage = 'url("./images/charViz/bases/feminine/clothing/topwear/officeShirt/thinThicc/tucked/primary.png")';
			document.getElementById("charVizDisplayTopwearSecondary").style.webkitMaskImage = 'url("./images/charViz/blankMask.png")';
			document.getElementById("charVizDisplayTopwearLines").style.backgroundImage = 'url("./images/charViz/bases/feminine/clothing/topwear/officeShirt/thinThicc/tucked/lines.png")';
			document.getElementById("charVizDisplayTopwearBreastSizePrimary").style.webkitMaskImage = 'url("./images/charViz/bases/feminine/clothing/topwear/officeShirt/breastSize/primary.png")';
			document.getElementById("charVizDisplayTopwearBreastSizeSecondary").style.webkitMaskImage = 'url("./images/charViz/blankMask.png")';
			document.getElementById("charVizDisplayTopwearBreastSizeLines").style.backgroundImage = 'url("./images/charViz/bases/feminine/clothing/topwear/officeShirt/breastSize/lines.png")';
		}
		else if (y === "Crop Top") {
			document.getElementById("charVizDisplayTopwearPrimary").style.webkitMaskImage = 'url("./images/charViz/bases/feminine/clothing/topwear/cropTop/thinThicc/primary.png")';
			document.getElementById("charVizDisplayTopwearSecondary").style.webkitMaskImage = 'url("./images/charViz/blankMask.png")';
			document.getElementById("charVizDisplayTopwearLines").style.backgroundImage = 'url("./images/charViz/bases/feminine/clothing/topwear/cropTop/thinThicc/lines.png")';
			document.getElementById("charVizDisplayTopwearBreastSizePrimary").style.webkitMaskImage = 'url("./images/charViz/bases/feminine/clothing/topwear/cropTop/breastSize/primary.png")';
			document.getElementById("charVizDisplayTopwearBreastSizeSecondary").style.webkitMaskImage = 'url("./images/charViz/blankMask.png")';
			document.getElementById("charVizDisplayTopwearBreastSizeLines").style.backgroundImage = 'url("./images/charViz/bases/feminine/clothing/topwear/cropTop/breastSize/lines.png")';
		}
		else {
			document.getElementById("charVizDisplayTopwearPrimary").style.webkitMaskImage = 'url("./images/charViz/blankMask.png")';
			document.getElementById("charVizDisplayTopwearSecondary").style.webkitMaskImage = 'url("./images/charViz/blankMask.png")';
			document.getElementById("charVizDisplayTopwearLines").style.backgroundImage = '';
			document.getElementById("charVizDisplayTopwearBreastSizePrimary").style.webkitMaskImage = 'url("./images/charViz/blankMask.png")';
			document.getElementById("charVizDisplayTopwearBreastSizeSecondary").style.webkitMaskImage = 'url("./images/charViz/blankMask.png")';
			document.getElementById("charVizDisplayTopwearBreastSizeLines").style.backgroundImage = '';
		}
	}
	else if (x === "Bottomwear") {		
		if (y === "Pencil Skirt") {
			document.getElementById("charVizDisplayBottomwearPrimary").style.webkitMaskImage = 'url("./images/charViz/bases/feminine/clothing/bottomwear/pencilSkirt/primary.png")';
			document.getElementById("charVizDisplayBottomwearSecondary").style.webkitMaskImage = 'url("./images/charViz/blankMask.png")';
			document.getElementById("charVizDisplayBottomwearLines").style.backgroundImage = 'url("./images/charViz/bases/feminine/clothing/bottomwear/pencilSkirt/lines.png")';
		}
		else if (y === "Shorts") {
			document.getElementById("charVizDisplayBottomwearPrimary").style.webkitMaskImage = 'url("./images/charViz/bases/feminine/clothing/bottomwear/shorts/primary.png")';
			document.getElementById("charVizDisplayBottomwearSecondary").style.webkitMaskImage = 'url("./images/charViz/bases/feminine/clothing/bottomwear/shorts/secondary.png")';
			document.getElementById("charVizDisplayBottomwearLines").style.backgroundImage = 'url("./images/charViz/bases/feminine/clothing/bottomwear/shorts/lines.png")';
		}
		else if (y === "Leggings") {
			document.getElementById("charVizDisplayBottomwearPrimary").style.webkitMaskImage = 'url("./images/charViz/bases/feminine/clothing/bottomwear/leggings/primary.png")';
			document.getElementById("charVizDisplayBottomwearSecondary").style.webkitMaskImage = 'url("./images/charViz/blankMask.png")';
			document.getElementById("charVizDisplayBottomwearLines").style.backgroundImage = 'url("./images/charViz/bases/feminine/clothing/bottomwear/leggings/lines.png")';
		}
		else {
			document.getElementById("charVizDisplayBottomwearPrimary").style.webkitMaskImage = 'url("./images/charViz/blankMask.png")';
			document.getElementById("charVizDisplayBottomwearSecondary").style.webkitMaskImage = 'url("./images/charViz/blankMask.png")';
			document.getElementById("charVizDisplayBottomwearLines").style.backgroundImage = '';
		}
	}
	else if (x === "Armwear") {		
		if (y === "Arm Warmers") {
			document.getElementById("charVizDisplayArmwearPrimary").style.webkitMaskImage = 'url("./images/charViz/bases/feminine/clothing/armwear/armWarmers/primary.png")';
			document.getElementById("charVizDisplayArmwearSecondary").style.webkitMaskImage = 'url("./images/charViz/bases/feminine/clothing/armwear/armWarmers/secondary.png")';
			document.getElementById("charVizDisplayArmwearLines").style.backgroundImage = 'url("./images/charViz/bases/feminine/clothing/armwear/armWarmers/lines.png")';
		}
		else if (y === "Arm Warmers (no stripes)") {
			document.getElementById("charVizDisplayArmwearPrimary").style.webkitMaskImage = 'url("./images/charViz/bases/feminine/clothing/armwear/armWarmers/primary.png")';
			document.getElementById("charVizDisplayArmwearSecondary").style.webkitMaskImage = 'url("./images/charViz/blankMask.png")';
			document.getElementById("charVizDisplayArmwearLines").style.backgroundImage = 'url("./images/charViz/bases/feminine/clothing/armwear/armWarmers/lines.png")';
		}
		else {
			document.getElementById("charVizDisplayArmwearPrimary").style.webkitMaskImage = 'url("./images/charViz/blankMask.png")';
			document.getElementById("charVizDisplayArmwearSecondary").style.webkitMaskImage = 'url("./images/charViz/blankMask.png")';
			document.getElementById("charVizDisplayArmwearLines").style.backgroundImage = '';
		}
	}
	else if (x === "Legwear") {		
		if (y === "Thigh Highs") {
			document.getElementById("charVizDisplayLegwearPrimary").style.webkitMaskImage = 'url("./images/charViz/bases/feminine/clothing/legwear/thighHighs/primary.png")';
			document.getElementById("charVizDisplayLegwearSecondary").style.webkitMaskImage = 'url("./images/charViz/bases/feminine/clothing/legwear/thighHighs/secondary.png")';
			document.getElementById("charVizDisplayLegwearLines").style.backgroundImage = 'url("./images/charViz/bases/feminine/clothing/legwear/thighHighs/lines.png")';
		}
		else if (y === "Thigh Highs (no stripes)") {
			document.getElementById("charVizDisplayLegwearPrimary").style.webkitMaskImage = 'url("./images/charViz/bases/feminine/clothing/legwear/thighHighs/primary.png")';
			document.getElementById("charVizDisplayLegwearSecondary").style.webkitMaskImage = 'url("./images/charViz/blankMask.png")';
			document.getElementById("charVizDisplayLegwearLines").style.backgroundImage = 'url("./images/charViz/bases/feminine/clothing/legwear/thighHighs/lines.png")';
		}
		else if (y === "Pantyhose") {
			document.getElementById("charVizDisplayLegwearPrimary").style.webkitMaskImage = 'url("./images/charViz/blankMask.png")';
			document.getElementById("charVizDisplayLegwearSecondary").style.webkitMaskImage  = 'url("./images/charViz/blankMask.png")';
			document.getElementById("charVizDisplayLegwearLines").style.backgroundImage = 'url("./images/charViz/bases/feminine/clothing/legwear/pantyhose/static.png")';
		}
		else {
			document.getElementById("charVizDisplayLegwearPrimary").style.webkitMaskImage = 'url("./images/charViz/blankMask.png")';
			document.getElementById("charVizDisplayLegwearSecondary").style.webkitMaskImage = 'url("./images/charViz/blankMask.png")';
			document.getElementById("charVizDisplayLegwearLines").style.backgroundImage = '';
		}
	}
	else if (x === "Underwear") {		
		if (y === "Panties") {
			document.getElementById("charVizDisplayUnderwearPrimary").style.webkitMaskImage = 'url("./images/charViz/bases/feminine/clothing/underwear/panties/primary.png")';
			document.getElementById("charVizDisplayUnderwearSecondary").style.webkitMaskImage = 'url("./images/charViz/blankMask.png")';
			document.getElementById("charVizDisplayUnderwearLines").style.backgroundImage = '';
		}
		else {
			document.getElementById("charVizDisplayUnderwearPrimary").style.webkitMaskImage = 'url("./images/charViz/blankMask.png")';
			document.getElementById("charVizDisplayUnderwearSecondary").style.webkitMaskImage = 'url("./images/charViz/blankMask.png")';
			document.getElementById("charVizDisplayUnderwearLines").style.backgroundImage = '';
		}
	}
	else if (x === "Accessories") {		
		if (y === "Glasses") {
			document.getElementById("charVizDisplayAccessoriesSlot1").style.backgroundImage = 'url("./images/charViz/bases/feminine/clothing/accessories/glasses.png")';
		}
		else {
			document.getElementById("charVizDisplayAccessoriesSlot1").style.backgroundImage = '';
		}
	}
	if (controlsessionactive === "Yes" && synchronizationComplete === "Yes") { 
		conn.send({firstParam: "putClothingOn", secondParam: x, thirdParam: y});
	}
	localStorage.setItem("Slot0_CharViz_" + x, y);
	charVizSetDefaultClothingColors(x, y, z);
}

function charVizSetDefaultClothingColors(x, y, z) {
	if (z === "Yes") { 
		charVizLoadSavedClothingColors(x);
	}
	else {
		// This function should only execute when putting on a new piece of clothing (to set it's default colors)
		if (x === "Topwear") {
			if (y === "Office Shirt" || y === "Office Shirt (tucked)") {
				document.getElementById("charVizDisplayTopwearPrimary").style.backgroundColor = '#F5F5F5';
				document.getElementById("charVizDisplayTopwearBreastSizePrimary").style.backgroundColor = '#F5F5F5';
				document.getElementById("charVizTopwearPrimaryColorSwatch").style.backgroundColor = '#F5F5F5';
				localStorage.setItem("Slot0_Topwear_Primary_Clothing_Color", '#F5F5F5');
			}
			else if (y === "Crop Top") {
				document.getElementById("charVizDisplayTopwearPrimary").style.backgroundColor = '#FF6BEE';
				document.getElementById("charVizDisplayTopwearBreastSizePrimary").style.backgroundColor = '#FF6BEE';
				document.getElementById("charVizTopwearPrimaryColorSwatch").style.backgroundColor = '#FF6BEE';
				localStorage.setItem("Slot0_Topwear_Primary_Clothing_Color", '#FF6BEE');
			}
		}
		else if (x === "Bottomwear") {
			if (y === "Pencil Skirt") {
				document.getElementById("charVizDisplayBottomwearPrimary").style.backgroundColor = '#222';
				document.getElementById("charVizBottomwearPrimaryColorSwatch").style.backgroundColor = '#222';
				localStorage.setItem("Slot0_Bottomwear_Primary_Clothing_Color", '#222');
			}
			else if (y === "Shorts") {
				document.getElementById("charVizDisplayBottomwearPrimary").style.backgroundColor = '#84beeb';
				document.getElementById("charVizDisplayBottomwearSecondary").style.backgroundColor = '#222';
				document.getElementById("charVizBottomwearPrimaryColorSwatch").style.backgroundColor = '#84beeb';
				document.getElementById("charVizBottomwearSecondaryColorSwatch").style.backgroundColor = '#222';
				localStorage.setItem("Slot0_Bottomwear_Primary_Clothing_Color", '#84beeb');
				localStorage.setItem("Slot0_Bottomwear_Secondary_Clothing_Color", '#222');
			}
			else if (y === "Leggings") {
				document.getElementById("charVizDisplayBottomwearPrimary").style.backgroundColor = '#ed5cc5';
				document.getElementById("charVizBottomwearPrimaryColorSwatch").style.backgroundColor = '#ed5cc5';
				localStorage.setItem("Slot0_Bottomwear_Primary_Clothing_Color", '#ed5cc5');
			}
		}
		else if (x === "Armwear") {
			if (y === "Arm Warmers") {
				document.getElementById("charVizDisplayArmwearPrimary").style.backgroundColor = '#78219F';
				document.getElementById("charVizDisplayArmwearSecondary").style.backgroundColor = '#2C2C2C';
				document.getElementById("charVizArmwearPrimaryColorSwatch").style.backgroundColor = '#78219F';
				document.getElementById("charVizArmwearSecondaryColorSwatch").style.backgroundColor = '#2C2C2C';
				localStorage.setItem("Slot0_Armwear_Primary_Clothing_Color", '#78219F');
				localStorage.setItem("Slot0_Armwear_Secondary_Clothing_Color", '#2C2C2C');
			}
			else if (y === "Arm Warmers (no stripes)") {
				document.getElementById("charVizDisplayArmwearPrimary").style.backgroundColor = '#2C2C2C';
				document.getElementById("charVizArmwearPrimaryColorSwatch").style.backgroundColor = '#2C2C2C';
				localStorage.setItem("Slot0_Armwear_Primary_Clothing_Color", '#2C2C2C');
			}
		}
		else if (x === "Legwear") {
			if (y === "Thigh Highs") {
				document.getElementById("charVizDisplayLegwearPrimary").style.backgroundColor = '#78219F';
				document.getElementById("charVizDisplayLegwearSecondary").style.backgroundColor = '#2C2C2C';
				document.getElementById("charVizLegwearPrimaryColorSwatch").style.backgroundColor = '#78219F';
				document.getElementById("charVizLegwearSecondaryColorSwatch").style.backgroundColor = '#2C2C2C';
				localStorage.setItem("Slot0_Legwear_Primary_Clothing_Color", '#78219F');
				localStorage.setItem("Slot0_Legwear_Secondary_Clothing_Color", '#2C2C2C');
			}
			else if (y === "Thigh Highs (no stripes)") {
				document.getElementById("charVizDisplayLegwearPrimary").style.backgroundColor = '#2C2C2C';
				document.getElementById("charVizLegwearPrimaryColorSwatch").style.backgroundColor = '#2C2C2C';
				localStorage.setItem("Slot0_Legwear_Primary_Clothing_Color", '#2C2C2C');
			}
		}
		else if (x === "Underwear") {
			if (y === "Panties") {
				document.getElementById("charVizDisplayUnderwearPrimary").style.backgroundColor = '#FF6BEE';
				document.getElementById("charVizUnderwearPrimaryColorSwatch").style.backgroundColor = '#FF6BEE';
				localStorage.setItem("Slot0_Underwear_Primary_Clothing_Color", '#FF6BEE');
			}
		}
	}
}

function charVizLoadSavedClothingColors(x) {
	if (x === "Topwear") {
		var primaryColor = localStorage.getItem("Slot0_Topwear_Primary_Clothing_Color");
		var secondaryColor = localStorage.getItem("Slot0_Topwear_Secondary_Clothing_Color");
		document.getElementById("charVizDisplayTopwearPrimary").style.backgroundColor = primaryColor;
		document.getElementById("charVizDisplayTopwearBreastSizePrimary").style.backgroundColor = primaryColor;
		document.getElementById("charVizDisplayTopwearSecondary").style.backgroundColor = secondaryColor;
		document.getElementById("charVizDisplayTopwearBreastSizeSecondary").style.backgroundColor = secondaryColor;
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
	if (x === "None") {
		charVizPutClothingOn("Topwear", "None");
		charVizPutClothingOn("Bottomwear", "None");
		charVizPutClothingOn("Armwear", "None");
		charVizPutClothingOn("Legwear", "None");
		charVizPutClothingOn("Underwear", "None");
		charVizPutClothingOn("Accessories", "None");
	}
	else if (x === "Programmer") {
		charVizPutClothingOn("Topwear", "Crop Top");
		charVizPutClothingOn("Bottomwear", "None");
		charVizPutClothingOn("Armwear", "Arm Warmers");
		charVizPutClothingOn("Legwear", "Thigh Highs");
		charVizPutClothingOn("Underwear", "Panties");
		charVizPutClothingOn("Accessories", "Glasses");
	}
	else if (x === "Secretary") {
		charVizPutClothingOn("Topwear", "Office Shirt (tucked)");
		charVizPutClothingOn("Bottomwear", "Pencil Skirt");
		charVizPutClothingOn("Armwear", "None");
		charVizPutClothingOn("Legwear", "Pantyhose");
		charVizPutClothingOn("Underwear", "Panties");
		charVizPutClothingOn("Accessories", "Glasses");
	}
}

function componentFromStr(numStr, percent) {
    var num = Math.max(0, parseInt(numStr, 10));
    return percent ?
        Math.floor(255 * Math.min(100, num) / 100) : Math.min(255, num);
}

function rgbToHex(rgb) {
    var rgbRegex = /^rgb\(\s*(-?\d+)(%?)\s*,\s*(-?\d+)(%?)\s*,\s*(-?\d+)(%?)\s*\)$/;
    var result, r, g, b, hex = "";
    if ( (result = rgbRegex.exec(rgb)) ) {
        r = componentFromStr(result[1], result[2]);
        g = componentFromStr(result[3], result[4]);
        b = componentFromStr(result[5], result[6]);

        hex = "#" + (0x1000000 + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    return hex;	
}

function rgbToHex2(rgb) {
	rgb = "rgb("+rgb+")";
	var hex = rgbToHex(rgb);
	return hex;
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
	}
	else if (color === "Secondary") {
		document.getElementById("charColorSwatchContainer2").style.backgroundColor = "#59568f";
		var swatchColor = document.getElementById("charVizSecondaryCharacterColorSwatch").style.backgroundColor;		
	}
	else if (color === "Tertiary") {
		document.getElementById("charColorSwatchContainer3").style.backgroundColor = "#59568f";
		var swatchColor = document.getElementById("charVizTertiaryCharacterColorSwatch").style.backgroundColor;		
	}
	else if (color === "Markings") {
		document.getElementById("charColorSwatchContainer4").style.backgroundColor = "#59568f";
		var swatchColor = document.getElementById("charVizMarkingsCharacterColorSwatch").style.backgroundColor;		
	}
	else if (color === "Left Eye") {
		document.getElementById("charColorSwatchContainer5").style.backgroundColor = "#59568f";
		var swatchColor = document.getElementById("charVizLeftEyeCharacterColorSwatch").style.backgroundColor;		
	}
	else if (color === "Right Eye") {
		document.getElementById("charColorSwatchContainer6").style.backgroundColor = "#59568f";
		var swatchColor = document.getElementById("charVizRightEyeCharacterColorSwatch").style.backgroundColor;		
	}
	else if (color === "Hair") {
		document.getElementById("charColorSwatchContainer7").style.backgroundColor = "#59568f";
		var swatchColor = document.getElementById("charVizHairCharacterColorSwatch").style.backgroundColor;		
	}
	else if (color === "Left Sclera") {
		document.getElementById("charColorSwatchContainer8").style.backgroundColor = "#59568f";
		var swatchColor = document.getElementById("charVizLeftScleraCharacterColorSwatch").style.backgroundColor;		
	}
	else if (color === "Right Sclera") {
		document.getElementById("charColorSwatchContainer9").style.backgroundColor = "#59568f";
		var swatchColor = document.getElementById("charVizRightScleraCharacterColorSwatch").style.backgroundColor;		
	}
	colorPicker.color.rgbString = swatchColor;
	var hexCode = rgbToHex(swatchColor);
	document.getElementById("charVizCurrentCharColorHex").innerHTML = hexCode;
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
	}
	else if (color === "Topwear Secondary") {
		document.getElementById("clothingColorSwatchContainer2").style.backgroundColor = "#59568f";
		var swatchColor = document.getElementById("charVizTopwearSecondaryColorSwatch").style.backgroundColor;
	}
	else if (color === "Bottomwear Primary") {
		document.getElementById("clothingColorSwatchContainer3").style.backgroundColor = "#59568f";
		var swatchColor = document.getElementById("charVizBottomwearPrimaryColorSwatch").style.backgroundColor;
	}
	else if (color === "Bottomwear Secondary") {
		document.getElementById("clothingColorSwatchContainer4").style.backgroundColor = "#59568f";
		var swatchColor = document.getElementById("charVizBottomwearSecondaryColorSwatch").style.backgroundColor;
	}
	else if (color === "Armwear Primary") {
		document.getElementById("clothingColorSwatchContainer5").style.backgroundColor = "#59568f";
		var swatchColor = document.getElementById("charVizArmwearPrimaryColorSwatch").style.backgroundColor;
	}
	else if (color === "Armwear Secondary") {
		document.getElementById("clothingColorSwatchContainer6").style.backgroundColor = "#59568f";
		var swatchColor = document.getElementById("charVizArmwearSecondaryColorSwatch").style.backgroundColor;
	}
	else if (color === "Legwear Primary") {
		document.getElementById("clothingColorSwatchContainer7").style.backgroundColor = "#59568f";
		var swatchColor = document.getElementById("charVizLegwearPrimaryColorSwatch").style.backgroundColor;
	}
	else if (color === "Legwear Secondary") {
		document.getElementById("clothingColorSwatchContainer8").style.backgroundColor = "#59568f";
		var swatchColor = document.getElementById("charVizLegwearSecondaryColorSwatch").style.backgroundColor;
	}
	else if (color === "Underwear Primary") {
		document.getElementById("clothingColorSwatchContainer9").style.backgroundColor = "#59568f";
		var swatchColor = document.getElementById("charVizUnderwearPrimaryColorSwatch").style.backgroundColor;
	}
	else if (color === "Underwear Secondary") {
		document.getElementById("clothingColorSwatchContainer10").style.backgroundColor = "#59568f";
		var swatchColor = document.getElementById("charVizUnderwearSecondaryColorSwatch").style.backgroundColor;
	}
	colorPicker2.color.rgbString = swatchColor;
	var hexCode = rgbToHex(swatchColor);
	document.getElementById("charVizCurrentClothColorHex").innerHTML = hexCode;
}

function charVizCopyColor (containerid) {
	var copiedColor = document.getElementById(containerid).innerHTML;
	document.getElementById("charVizPasteCharColorTextField").value = copiedColor;
	document.getElementById("charVizPasteClothColorTextField").value = copiedColor;
	// Create a new textarea element and give it id='temp_element'
	var textarea = document.createElement('textarea')
	textarea.id = 'temp_element'
	// Optional step to make less noise on the page, if any!
	textarea.style.height = 0
	// Now append it to your page somewhere, I chose <body>
	document.body.appendChild(textarea)
	// Give our textarea a value of whatever inside the div of id=containerid
	textarea.value = document.getElementById(containerid).innerHTML
	// Now copy whatever inside the textarea to clipboard
	var selector = document.querySelector('#temp_element')
	selector.select()
	document.execCommand('copy')
	// Remove the textarea
	document.body.removeChild(textarea)	
}

function charVizPasteColor (x) {
	var colorToPaste;
	if (x === "Character") { colorToPaste = document.getElementById("charVizPasteCharColorTextField").value; }
	else { colorToPaste = document.getElementById("charVizPasteClothColorTextField").value; }
	
	if (x === "Character") {
		colorPicker.color.hexString = colorToPaste;
		var activeColor = localStorage.getItem("CharViz_Active_Character_Color");		
		if (activeColor === "Primary") {
			document.getElementById("charVizPrimaryCharacterColorSwatch").style.backgroundColor = colorToPaste;
			document.getElementById("charVizDisplayBasePrimary").style.backgroundColor = colorToPaste;
			document.getElementById("charVizDisplayTailPrimary").style.backgroundColor = colorToPaste;
			document.getElementById("charVizDisplayHeadPrimary").style.backgroundColor = colorToPaste;
			localStorage.setItem("Slot0_Primary_Character_Color", colorToPaste);
		}
		else if (activeColor === "Secondary") {
			document.getElementById("charVizSecondaryCharacterColorSwatch").style.backgroundColor = colorToPaste;
			document.getElementById("charVizDisplayBaseSecondary").style.backgroundColor = colorToPaste;
			document.getElementById("charVizDisplayBreastSizeSecondary").style.backgroundColor = colorToPaste;
			document.getElementById("charVizDisplayTailSecondary").style.backgroundColor = colorToPaste;
			document.getElementById("charVizDisplayHeadSecondary").style.backgroundColor = colorToPaste;
			localStorage.setItem("Slot0_Secondary_Character_Color", colorToPaste);
		}
		else if (activeColor === "Tertiary") {
			document.getElementById("charVizTertiaryCharacterColorSwatch").style.backgroundColor = colorToPaste;
			document.getElementById("charVizDisplayBaseTertiary").style.backgroundColor = colorToPaste;
			document.getElementById("charVizDisplayTailTertiary").style.backgroundColor = colorToPaste;
			document.getElementById("charVizDisplayHeadTertiary").style.backgroundColor = colorToPaste;
			localStorage.setItem("Slot0_Tertiary_Character_Color", colorToPaste);
		}
		else if (activeColor === "Markings") {
			document.getElementById("charVizMarkingsCharacterColorSwatch").style.backgroundColor = colorToPaste;
			document.getElementById("charVizDisplayBaseMarkings").style.backgroundColor = colorToPaste;
			document.getElementById("charVizDisplayBreastSizeMarkings").style.backgroundColor = colorToPaste;
			localStorage.setItem("Slot0_Markings_Character_Color", colorToPaste);
		}
		else if (activeColor === "Left Eye") {
			document.getElementById("charVizLeftEyeCharacterColorSwatch").style.backgroundColor = colorToPaste;
			document.getElementById("charVizDisplayHeadIrisLeft").style.backgroundColor = colorToPaste;
			localStorage.setItem("Slot0_LeftEye_Character_Color", colorToPaste);
		}
		else if (activeColor === "Right Eye") {
			document.getElementById("charVizRightEyeCharacterColorSwatch").style.backgroundColor = colorToPaste;
			document.getElementById("charVizDisplayHeadIrisRight").style.backgroundColor = colorToPaste;
			localStorage.setItem("Slot0_RightEye_Character_Color", colorToPaste);
		}
		else if (activeColor === "Hair") {
			document.getElementById("charVizHairCharacterColorSwatch").style.backgroundColor = colorToPaste;
			document.getElementById("charVizDisplayHeadHairPrimary").style.backgroundColor = colorToPaste;
			document.getElementById("charVizDisplayHairBackPrimary").style.backgroundColor = colorToPaste;
			localStorage.setItem("Slot0_Hair_Character_Color", colorToPaste);
		}
		else if (activeColor === "Left Sclera") {
			document.getElementById("charVizLeftScleraCharacterColorSwatch").style.backgroundColor = colorToPaste;
			document.getElementById("charVizDisplayHeadScleraLeft").style.backgroundColor = colorToPaste;
			localStorage.setItem("Slot0_LeftSclera_Character_Color", colorToPaste);
		}
		else if (activeColor === "Right Sclera") {
			document.getElementById("charVizRightScleraCharacterColorSwatch").style.backgroundColor = colorToPaste;
			document.getElementById("charVizDisplayHeadScleraRight").style.backgroundColor = colorToPaste;
			localStorage.setItem("Slot0_RightSclera_Character_Color", colorToPaste);
		}
	}
	else {
		colorPicker2.color.hexString = colorToPaste;
		var activeColor = localStorage.getItem("CharViz_Active_Clothing_Color");
		if (activeColor === "Topwear Primary") {
			document.getElementById("charVizTopwearPrimaryColorSwatch").style.backgroundColor = colorToPaste;
			document.getElementById("charVizDisplayTopwearPrimary").style.backgroundColor = colorToPaste;
			localStorage.setItem("Slot0_Topwear_Primary_Clothing_Color", colorToPaste);
		}
		else if (activeColor === "Topwear Secondary") {
			document.getElementById("charVizTopwearSecondaryColorSwatch").style.backgroundColor = colorToPaste;
			document.getElementById("charVizDisplayTopwearSecondary").style.backgroundColor = colorToPaste;
			localStorage.setItem("Slot0_Topwear_Secondary_Clothing_Color", colorToPaste);
		}
		else if (activeColor === "Bottomwear Primary") {
			document.getElementById("charVizBottomwearPrimaryColorSwatch").style.backgroundColor = colorToPaste;
			document.getElementById("charVizDisplayBottomwearPrimary").style.backgroundColor = colorToPaste;
			localStorage.setItem("Slot0_Bottomwear_Primary_Clothing_Color", colorToPaste);
		}
		else if (activeColor === "Bottomwear Secondary") {
			document.getElementById("charVizBottomwearSecondaryColorSwatch").style.backgroundColor = colorToPaste;
			document.getElementById("charVizDisplayBottomwearSecondary").style.backgroundColor = colorToPaste;
			localStorage.setItem("Slot0_Bottomwear_Secondary_Clothing_Color", colorToPaste);
		}
		else if (activeColor === "Armwear Primary") {
			document.getElementById("charVizArmwearPrimaryColorSwatch").style.backgroundColor = colorToPaste;
			document.getElementById("charVizDisplayArmwearPrimary").style.backgroundColor = colorToPaste;
			localStorage.setItem("Slot0_Armwear_Primary_Clothing_Color", colorToPaste);
		}
		else if (activeColor === "Armwear Secondary") {
			document.getElementById("charVizArmwearSecondaryColorSwatch").style.backgroundColor = colorToPaste;
			document.getElementById("charVizDisplayArmwearSecondary").style.backgroundColor = colorToPaste;
			localStorage.setItem("Slot0_Armwear_Secondary_Clothing_Color", colorToPaste);
		}
		else if (activeColor === "Legwear Primary") {
			document.getElementById("charVizLegwearPrimaryColorSwatch").style.backgroundColor = colorToPaste;
			document.getElementById("charVizDisplayLegwearPrimary").style.backgroundColor = colorToPaste;
			localStorage.setItem("Slot0_Legwear_Primary_Clothing_Color", colorToPaste);
		}
		else if (activeColor === "Legwear Secondary") {
			document.getElementById("charVizLegwearSecondaryColorSwatch").style.backgroundColor = colorToPaste;
			document.getElementById("charVizDisplayLegwearSecondary").style.backgroundColor = colorToPaste;
			localStorage.setItem("Slot0_Legwear_Secondary_Clothing_Color", colorToPaste);
		}
		else if (activeColor === "Underwear Primary") {
			document.getElementById("charVizUnderwearPrimaryColorSwatch").style.backgroundColor = colorToPaste;
			document.getElementById("charVizDisplayUnderwearPrimary").style.backgroundColor = colorToPaste;
			localStorage.setItem("Slot0_Underwear_Primary_Clothing_Color", colorToPaste);
		}
		else if (activeColor === "Underwear Secondary") {
			document.getElementById("charVizUnderwearSecondaryColorSwatch").style.backgroundColor = colorToPaste;
			document.getElementById("charVizDisplayUnderwearSecondary").style.backgroundColor = colorToPaste;
			localStorage.setItem("Slot0_Underwear_Secondary_Clothing_Color", colorToPaste);
		}
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

function setNaturalColorScheme(species) {
	var primaryColor;
	var secondaryColor;
	var tertiaryColor;
	var markingsColor;
	var eyeColor;
	var hairColor;
	var scleraColor = "#ffffff";
	
	if (species === "Fox") 					{	primaryColor = "#ffaf1a";secondaryColor = "#FFF0F5";tertiaryColor = "#202120";markingsColor = "#9400D3"; eyeColor = "#00FF7F"; hairColor = "#A52A2A";	}
	else if (species === "African Wild Dog"){	primaryColor = "#f7a762";secondaryColor = "#fee2ca";tertiaryColor = "#FFCB82";markingsColor = "#4A4F26"; eyeColor = "#4A4F26"; hairColor = "#4A4F26";	}
	else if (species === "Arctic Fox") 		{	primaryColor = "#87CEFA";secondaryColor = "#FFF0F5";tertiaryColor = "#4682B4";markingsColor = "#4169E1"; eyeColor = "#20B2AA"; hairColor = "#6495ED";	}
	else if (species === "Coyote") 			{	primaryColor = "#FFDEAD";secondaryColor = "#FFF8DC";tertiaryColor = "#696969";markingsColor = "#800000"; eyeColor = "#A52A2A"; hairColor = "#A0522D";	}
	else if (species === "Dog") 			{	primaryColor = "#8c622a";secondaryColor = "#c4c0b8";tertiaryColor = "#42321e";markingsColor = "#f02828"; eyeColor = "#A52A2A"; hairColor = "#ffcb82";	}
	else if (species === "Ethiopian Wolf")	{	primaryColor = "#ffcb82";secondaryColor = "#f8e9de";tertiaryColor = "#202120";markingsColor = "#f8e9de"; eyeColor = "#f8e9de"; hairColor = "#592aa5";	}
	else if (species === "Fennec Fox")		{	primaryColor = "#BF7840";secondaryColor = "#E9B784";tertiaryColor = "#B46956";markingsColor = "#FFD1CA"; eyeColor = "#4D271A"; hairColor = "#4D271A";	}
	else if (species === "Folf")			{	primaryColor = "#55D2E0";secondaryColor = "#FFF0F5";tertiaryColor = "#5C4AE0";markingsColor = "#E03F8B"; eyeColor = "#E03F8B"; hairColor = "#5C4AE0";	}
	else if (species === "Husky") 			{	primaryColor = "#404040";secondaryColor = "#FFF0F5";tertiaryColor = "#A9A9A9";markingsColor = "#C0C0C0"; eyeColor = "#40E0D0"; hairColor = "#00CED1";	}
	else if (species === "Maned Wolf")		{	primaryColor = "#CD7F5B";secondaryColor = "#E6AD80";tertiaryColor = "#BD7B61";markingsColor = "#905547"; eyeColor = "#905547"; hairColor = "#905547";	}
	else if (species === "Red Panda")		{	primaryColor = "#c24f19";secondaryColor = "#d16f42";tertiaryColor = "#832408";markingsColor = "#c99072"; eyeColor = "#438e22"; hairColor = "#8e2424";	}
	else if (species === "Werewolf")		{	primaryColor = "#424242";secondaryColor = "#FFF0F5";tertiaryColor = "#3d464f";markingsColor = "#3d464f"; eyeColor = "#f12121"; hairColor = "#202020";	}
	else if (species === "Wolf") 			{	primaryColor = "#808080";secondaryColor = "#FFF0F5";tertiaryColor = "#778899";markingsColor = "#708090"; eyeColor = "#00BFFF"; hairColor = "#333333";	}
	else if (species === "Wox")				{	primaryColor = "#DD63F7";secondaryColor = "#FFF0F5";tertiaryColor = "#63A0F7";markingsColor = "#5BF0ED"; eyeColor = "#DD63F7"; hairColor = "#5BF0ED";	}
	else if (species === "Wusky")			{	primaryColor = "#3EE03F";secondaryColor = "#FFF0F5";tertiaryColor = "#1FAD70";markingsColor = "#871FAD"; eyeColor = "#871FAD"; hairColor = "#E479E4";	}
	else if (species === "Alligator")		{	primaryColor = "#3E4B20";secondaryColor = "#F0E7CC";tertiaryColor = "#9BAB73";markingsColor = "#9BAB73"; eyeColor = "#62773A"; hairColor = "#3C3420";	}
	else if (species === "Crocodile")		{	primaryColor = "#3E4B20";secondaryColor = "#F0E7CC";tertiaryColor = "#9BAB73";markingsColor = "#9BAB73"; eyeColor = "#62773A"; hairColor = "#3C3420";	}
	else if (species === "Dinosaur")		{	primaryColor = "#0E4917";secondaryColor = "#248B40";tertiaryColor = "#E1A954";markingsColor = "#E1A954"; eyeColor = "#0E4917"; hairColor = "#62745D";	}
	else if (species === "Raptor")			{	primaryColor = "#A31B66";secondaryColor = "#B0B0B0";tertiaryColor = "#2F1F74";markingsColor = "#2F1F74"; eyeColor = "#401F83"; hairColor = "#851A7B";	}
	else if (species === "Snake")			{	primaryColor = "#698728";secondaryColor = "#C3E96F";tertiaryColor = "#262026";markingsColor = "#262026"; eyeColor = "#698728"; hairColor = "#262026";	}
	else if (species === "Lizard")			{	primaryColor = "#90CC79";secondaryColor = "#4B6743";tertiaryColor = "#40563E";markingsColor = "#40563E"; eyeColor = "#4B6743"; hairColor = "#2D7A61";	}
	else if (species === "Argonian")		{	primaryColor = "#55c02c";secondaryColor = "#327a17";tertiaryColor = "#ce5e1f";markingsColor = "#ce5e1f"; eyeColor = "#55c02c"; hairColor = "#2d2d2d";	}
	else if (species === "Kobold")			{	primaryColor = "#972525";secondaryColor = "#2f2f2f";tertiaryColor = "#e05529";markingsColor = "#e05529"; eyeColor = "#272ec9"; hairColor = "#272ec9";	}
	else if (species === "Shark")			{	primaryColor = "#93a3ac";secondaryColor = "#daeaea";tertiaryColor = "#96b7c0";markingsColor = "#96b7c0"; eyeColor = "#9e2ac7"; hairColor = "#9e2ac7";	}
	else if (species === "Dragon") {
		var rng = Math.floor(Math.random() * 8) + 1;
		// 1 - Fire | 2 - Electricity | 3 - Ice | 4 - Earth | 5 - Shadow | 6 - Wind | 7 - Poison | 8 - Fear
		if (rng == 1) 						{	primaryColor = "#FA372D";secondaryColor = "#FD6E21";tertiaryColor = "#FFB93A";markingsColor = "#EB502B"; eyeColor = "#EB502B"; hairColor = "#E31E61";	}
		else if (rng == 2)					{	primaryColor = "#fabd47";secondaryColor = "#5546FA";tertiaryColor = "#5546FA";markingsColor = "#5546FA"; eyeColor = "#fabd47"; hairColor = "#bd2fe1";	}
		else if (rng == 3)					{	primaryColor = "#6FAAF2";secondaryColor = "#A68DF0";tertiaryColor = "#A68DF0";markingsColor = "#A68DF0"; eyeColor = "#A68DF0"; hairColor = "#6FDBCB";	}
		else if (rng == 4)					{	primaryColor = "#39B33C";secondaryColor = "#BF8634";tertiaryColor = "#BF8634";markingsColor = "#BF8634"; eyeColor = "#39B33C"; hairColor = "#5059C7";	}
		else if (rng == 5)					{	primaryColor = "#0B0049";secondaryColor = "#241596";tertiaryColor = "#33238b";markingsColor = "#33238b"; eyeColor = "#241596"; hairColor = "#2D1D87";	}
		else if (rng == 6)					{	primaryColor = "#8A90A6";secondaryColor = "#C9D2F2";tertiaryColor = "#C9D2F2";markingsColor = "#C9D2F2"; eyeColor = "#949BB3"; hairColor = "#555866";	}
		else if (rng == 7)					{	primaryColor = "#41E632";secondaryColor = "#1B5E15";tertiaryColor = "#1B5E15";markingsColor = "#1B5E15"; eyeColor = "#2FA624"; hairColor = "#24801C";	}
		else if (rng == 8)					{	primaryColor = "#851713";secondaryColor = "#111111";tertiaryColor = "#111111";markingsColor = "#111111"; eyeColor = "#000000"; hairColor = "#161616"; scleraColor="#E62720"	}
		// Purple 
		//primaryColor = "#7e1e9f";secondaryColor = "#f9bf28";tertiaryColor = "#f9bf28";markingsColor = "#f9bf28"; eyeColor = "#7e1e9f"; hairColor = "#b658f0";	
	}
	else { randomizeCharacterColors(); return; }
	
	localStorage.setItem("Slot0_Primary_Character_Color", primaryColor);
	localStorage.setItem("Slot0_Secondary_Character_Color", secondaryColor);
	localStorage.setItem("Slot0_Tertiary_Character_Color", tertiaryColor);
	localStorage.setItem("Slot0_Markings_Character_Color", markingsColor);
	localStorage.setItem("Slot0_LeftEye_Character_Color", eyeColor);
	localStorage.setItem("Slot0_RightEye_Character_Color", eyeColor);
	localStorage.setItem("Slot0_Hair_Character_Color", hairColor);
	localStorage.setItem("Slot0_LeftSclera_Character_Color", scleraColor);
	localStorage.setItem("Slot0_RightSclera_Character_Color", scleraColor);

	document.getElementById("charVizDisplayBasePrimary").style.backgroundColor = primaryColor;
	document.getElementById("charVizDisplayTailPrimary").style.backgroundColor = primaryColor;
	document.getElementById("charVizDisplayHeadPrimary").style.backgroundColor = primaryColor;
	document.getElementById("charVizDisplayWingsPrimary").style.backgroundColor = primaryColor;
	document.getElementById("charVizDisplayBreastSizePrimary").style.backgroundColor = primaryColor;
	document.getElementById("charVizDisplayInanimateTFprimary").style.backgroundColor = primaryColor;
	document.getElementById("charVizPrimaryCharacterColorSwatch").style.backgroundColor = primaryColor;

	document.getElementById("charVizDisplayBaseSecondary").style.backgroundColor = secondaryColor;
	document.getElementById("charVizDisplayBreastSizeSecondary").style.backgroundColor = secondaryColor;
	document.getElementById("charVizDisplayTailSecondary").style.backgroundColor = secondaryColor;
	document.getElementById("charVizDisplayHeadSecondary").style.backgroundColor = secondaryColor;
	document.getElementById("charVizDisplayGenitalsSecondary").style.backgroundColor = secondaryColor;
	document.getElementById("charVizDisplayInanimateTFsecondary").style.backgroundColor = secondaryColor;
	document.getElementById("charVizSecondaryCharacterColorSwatch").style.backgroundColor = secondaryColor;
			
	document.getElementById("charVizDisplayBaseTertiary").style.backgroundColor = tertiaryColor;
	document.getElementById("charVizDisplayTailTertiary").style.backgroundColor = tertiaryColor;
	document.getElementById("charVizDisplayHeadTertiary").style.backgroundColor = tertiaryColor;
	document.getElementById("charVizTertiaryCharacterColorSwatch").style.backgroundColor = tertiaryColor;

	document.getElementById("charVizDisplayBaseMarkings").style.backgroundColor = markingsColor;
	document.getElementById("charVizDisplayBreastSizeMarkings").style.backgroundColor = markingsColor;
	document.getElementById("charVizDisplayWingsMarkings").style.backgroundColor = markingsColor;
	document.getElementById("charVizDisplayGenitalsMarkings").style.backgroundColor = markingsColor;
	document.getElementById("charVizMarkingsCharacterColorSwatch").style.backgroundColor = markingsColor;

	document.getElementById("charVizLeftEyeCharacterColorSwatch").style.backgroundColor = eyeColor;
	document.getElementById("charVizDisplayHeadIrisLeft").style.backgroundColor = eyeColor;

	document.getElementById("charVizRightEyeCharacterColorSwatch").style.backgroundColor = eyeColor;
	document.getElementById("charVizDisplayHeadIrisRight").style.backgroundColor = eyeColor;

	document.getElementById("charVizHairCharacterColorSwatch").style.backgroundColor = hairColor;
	document.getElementById("charVizDisplayHeadHairPrimary").style.backgroundColor = hairColor;
	document.getElementById("charVizDisplayHairBackPrimary").style.backgroundColor = hairColor;
	
	document.getElementById("charVizLeftScleraCharacterColorSwatch").style.backgroundColor = scleraColor;
	document.getElementById("charVizRightScleraCharacterColorSwatch").style.backgroundColor = scleraColor;
	document.getElementById("charVizDisplayHeadScleraLeft").style.backgroundColor = scleraColor;
	document.getElementById("charVizDisplayHeadScleraRight").style.backgroundColor = scleraColor;

}

function charVizResetCharacterColors() {
	var x = document.getElementById("charVizResetCharColorsButton").innerHTML;
	if (x === "Are you sure?") {
		var Species = localStorage.getItem("Slot0_Species");
		setNaturalColorScheme(Species);
		document.getElementById('charVizResetCharColorsButton').innerHTML = "Reset Char Colors";
	}
	else {
		document.getElementById('charVizResetCharColorsButton').innerHTML = "Are you sure?";
	}	
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

function charVizPickerGoToCategory(x) {
	if (x === "Body") {
		document.getElementById("charVizPickerSelectorContainer").style.display= 'none';
		document.getElementById("charVizPickerBodySelectorContainer").style.display= 'block';
	}
	else if (x === "Head") {
		document.getElementById("charVizPickerSelectorContainer").style.display= 'none';
		document.getElementById("charVizPickerHeadSelectorContainer").style.display= 'block';
	}
	else if (x === "Tail") {
		document.getElementById("charVizPickerSelectorContainer").style.display= 'none';
		document.getElementById("charVizPickerTailSelectorContainer").style.display= 'block';
	}
	else if (x === "Wings") {
		document.getElementById("charVizPickerSelectorContainer").style.display= 'none';
		document.getElementById("charVizPickerWingsSelectorContainer").style.display= 'block';
	}
	else if (x === "Pupils") {
		document.getElementById("charVizPickerSelectorContainer").style.display= 'none';
		document.getElementById("charVizPickerPupilsSelectorContainer").style.display= 'block';
	}
	else if (x === "Secondary") {
		document.getElementById("charVizPickerSelectorContainer").style.display= 'none';
		document.getElementById("charVizPickerSecondaryPatternSelectorContainer").style.display= 'block';
	}
	else if (x === "Tertiary") {
		document.getElementById("charVizPickerSelectorContainer").style.display= 'none';
		document.getElementById("charVizPickerTertiaryPatternSelectorContainer").style.display= 'block';
	}
	else if (x === "Markings") {
		document.getElementById("charVizPickerSelectorContainer").style.display= 'none';
		document.getElementById("charVizPickerMarkingsPatternSelectorContainer").style.display= 'block';
	}
}

function charVizPickerGoBack(x) {
	if (x === "Body") {
		document.getElementById("charVizPickerBodySelectorContainer").style.display= 'none';
		document.getElementById("charVizPickerSelectorContainer").style.display= 'block';
	}
	else if (x === "Head") {
		document.getElementById("charVizPickerHeadSelectorContainer").style.display= 'none';
		document.getElementById("charVizPickerSelectorContainer").style.display= 'block';
	}
	else if (x === "Tail") {
		document.getElementById("charVizPickerTailSelectorContainer").style.display= 'none';
		document.getElementById("charVizPickerSelectorContainer").style.display= 'block';
	}
	else if (x === "Wings") {
		document.getElementById("charVizPickerWingsSelectorContainer").style.display= 'none';
		document.getElementById("charVizPickerSelectorContainer").style.display= 'block';
	}
	else if (x === "Pupils") {
		document.getElementById("charVizPickerPupilsSelectorContainer").style.display= 'none';
		document.getElementById("charVizPickerSelectorContainer").style.display= 'block';
	}
	else if (x === "Secondary") {
		document.getElementById("charVizPickerSecondaryPatternSelectorContainer").style.display= 'none';
		document.getElementById("charVizPickerSelectorContainer").style.display= 'block';
	}
	else if (x === "Tertiary") {
		document.getElementById("charVizPickerTertiaryPatternSelectorContainer").style.display= 'none';
		document.getElementById("charVizPickerSelectorContainer").style.display= 'block';
	}
	else if (x === "Markings") {
		document.getElementById("charVizPickerMarkingsPatternSelectorContainer").style.display= 'none';
		document.getElementById("charVizPickerSelectorContainer").style.display= 'block';
	}
}

function toggleCharVizMenus(x) {
	var menu;
	var height;
	if (x == 0) {
		menu = document.getElementById("charVizCharacterColorsContainer");
		height = "400px"
	}
	else if (x == 1) {
		menu = document.getElementById("charVizClothingContainer");
		height = "420px"
	}
	else if (x == 2) {
		menu = document.getElementById("charVizClothingColorsContainer");
		height = "400px"
	}
	else if (x == 3) {
		menu = document.getElementById("charVizOptionsContainer");
		height = "670px"
	}
	else if (x == 4) {
		menu = document.getElementById("charVizCreditsContainer");
		height = "550px"
	}
	else if (x == 5) {
		menu = document.getElementById("charVizReadmeContainer");
		height = "410px"
	}
	else if (x == 6) {
		menu = document.getElementById("charVizPickerContainer");
		height = "450px"
	}
	if (menu.style.maxHeight === "0px") {
		menu.style.maxHeight = height;
		document.getElementById("CharVizMenusContainer").style.maxHeight='0px';
	} else {
		menu.style.maxHeight = "0px";
		document.getElementById("CharVizMenusContainer").style.maxHeight='340px';
	}
}

function closeCharvizContainers() {
	document.getElementById("charVizCharacterColorsContainer").style.maxHeight='0px';
	document.getElementById("charVizClothingContainer").style.maxHeight='0px';
	document.getElementById("charVizClothingColorsContainer").style.maxHeight='0px';
	document.getElementById("charVizOptionsContainer").style.maxHeight='0px';
	document.getElementById("charVizCreditsContainer").style.maxHeight='0px';
	document.getElementById("charVizReadmeContainer").style.maxHeight='0px';
	document.getElementById("charVizPickerContainer").style.maxHeight='0px';
}

function charVizSetBGColor(x) {
	if (x == 0) {
		document.getElementsByClassName("charVizDisplayContainer")[0].style.backgroundColor = "#282640";
		document.getElementById("charVizDisplayMessage").style.backgroundColor = "#282640";
	}
	else if (x == 1) {
		document.getElementsByClassName("charVizDisplayContainer")[0].style.backgroundColor = "#fff";
		document.getElementById("charVizDisplayMessage").style.backgroundColor = "#fff";
	}
	else if (x == 2) {
		document.getElementsByClassName("charVizDisplayContainer")[0].style.backgroundColor = "#000";
		document.getElementById("charVizDisplayMessage").style.backgroundColor = "#000";
	}
	else if (x == 3) {
		document.getElementsByClassName("charVizDisplayContainer")[0].style.backgroundColor = "#222";
		document.getElementById("charVizDisplayMessage").style.backgroundColor = "#222";
	}
	localStorage.setItem("CharViz_Background_Color", x);
}

function loadCharVizOptions() {	// Loads CharViz specific options on startup
	var x0 = localStorage.getItem("Launch_CharViz_Automatically");
	var x1 = localStorage.getItem("Lock_Character_Parts");
	var x2 = localStorage.getItem("CharViz_Set_Natural_Color_Scheme");
	var x3 = localStorage.getItem("Randomizer_Affects_Char_Colors");
	var x4 = localStorage.getItem("Randomizer_Affects_Clothing");
	var x5 = localStorage.getItem("Randomizer_Generates_Supported_Species");
	var x6 = localStorage.getItem("CharViz_Show_Genitals");
	var x7 = localStorage.getItem("CharViz_Display_Randomizers");
	
	// Tick the checkboxes
	if (x0 === "Yes")	{	document.getElementById("autoCharVizLaunchCheckbox").checked = true;					}
	if (x1 === "Yes")	{	document.getElementById("lockCharPartsCheckbox").checked = true;						}
	if (x2 === "Yes")	{	document.getElementById("setNaturalColorsCheckbox").checked = true;						}
	if (x3 === "Yes")	{	document.getElementById("randomizerAffectsCharColorsCheckbox").checked = true;			}
	if (x4 === "Yes")	{	document.getElementById("randomizerAffectsClothingCheckbox").checked = true;			}
	if (x5 === "Yes")	{	document.getElementById("randomizerGeneratesCharVizSpeciesCheckbox").checked = true;	}
	if (x6 === "Yes")	{	document.getElementById("showGenitalsCheckbox").checked = true;							}
	if (x7 === "Yes")	{	document.getElementById("displayRandomizersCheckbox").checked = true;					}
	
	// Show or hide containers with 2 randomize buttons
	if (x7 === "Yes")		{	document.getElementById("randomizeCharacterButtonsContainer").style.display = 'block';	}
	else					{	document.getElementById("randomizeCharacterButtonsContainer").style.display = 'none';	}
}

function toggleCharVizOption(x) {
	// 0 - Launch CharViz automatically on app startup
	// 1 - Lock Character Parts
	// 2 - Set default color scheme when changing species
	// 3 - Randomizer affects character color scheme
	// 4 - Randomizer affects clothing
	// 5 - Randomizer generates only species supported by CharViz
	// 6 - Show Genitals
	// 7 - Show buttons to randomize colors and character under character display
	
	var tickbox
	if (x == 0) 		{ 	tickbox = document.getElementById("autoCharVizLaunchCheckbox"); 				}
	else if (x == 1) 	{ 	tickbox = document.getElementById("lockCharPartsCheckbox"); 					}
	else if (x == 2) 	{ 	tickbox = document.getElementById("setNaturalColorsCheckbox"); 					}
	else if (x == 3) 	{ 	tickbox = document.getElementById("randomizerAffectsCharColorsCheckbox"); 		}
	else if (x == 4) 	{ 	tickbox = document.getElementById("randomizerAffectsClothingCheckbox"); 		}
	else if (x == 5) 	{ 	tickbox = document.getElementById("randomizerGeneratesCharVizSpeciesCheckbox"); }
	else if (x == 6) 	{ 	tickbox = document.getElementById("showGenitalsCheckbox"); 						}
	else if (x == 7) 	{ 	tickbox = document.getElementById("displayRandomizersCheckbox"); 				}
	
	var y;
	if (tickbox.checked){	y = "Yes" 	}
	else				{	y = "No"	}
	
	// Save to localStorage
	if (x == 0) 		{ 	localStorage.setItem("Launch_CharViz_Automatically", y);				}
	else if (x == 1) 	{ 	localStorage.setItem("Lock_Character_Parts", y);	}
	else if (x == 2) 	{ 	localStorage.setItem("CharViz_Set_Natural_Color_Scheme", y); 			}
	else if (x == 3) 	{ 	localStorage.setItem("Randomizer_Affects_Char_Colors", y);				}
	else if (x == 4) 	{ 	localStorage.setItem("Randomizer_Affects_Clothing", y);					}
	else if (x == 5) 	{ 	localStorage.setItem("Randomizer_Generates_Supported_Species", y);		}
	else if (x == 6) 	{ 	localStorage.setItem("CharViz_Show_Genitals", y);						}
	else if (x == 7) 	{ 	localStorage.setItem("CharViz_Display_Randomizers", y);					}
	
	// Show or hide Genitals 		
	if (x == 6)			{	loadCharacterGenitals();	}
	
	// Show or hide containers with 2 randomize buttons
	if (x == 7) {
		if (y === "Yes"){	document.getElementById("randomizeCharacterButtonsContainer").style.display = 'block';	}
		else			{	document.getElementById("randomizeCharacterButtonsContainer").style.display = 'none';	}
	}
}