const cockTypes = ['None', 'Canine', 'Equine', 'Feline', 'Humanoid'];

function randomizeCharacter() {
	var areSettingsLocked = localStorage.getItem("Settings_Locked");
	if (areSettingsLocked === "Yes") {
		return;
	}
	else {
	// Species
	var Species;
	var charVizEnabled = localStorage.getItem("CharViz_Enabled");
	var generateSupportedSpecies = localStorage.getItem("Randomizer_Generates_Supported_Species");
	if (charVizEnabled === "Yes" && generateSupportedSpecies === "Yes") {
		Species = supportedSpecies[Math.floor(Math.random() * supportedSpecies.length)];
		document.getElementById('speciesCurrent').innerHTML = Species;
	}
	else {
		var rng = Math.floor(Math.random() * 100) + 1;
		if (rng <= 90) {
			// Most Popular Species
			var array = ["Arctic Fox", "Bat", "Bear", "Cat", "Cheetah", "Coyote", "Deer",
			"Dog", "Dragon", "Fennec", "Fox", "Horse", "Hyena", "Kangaroo", "Lion", "Lynx",
			"Otter","Panther", "Protogen", "Rabbit", "Raccoon", "Red Panda", "Sergal", "Shark",
			"Skunk", "Snake", "Snow Leopard", "Synth", "Tiger", "Wolf"];
			Species = array[Math.floor(Math.random() * array.length)];
			document.getElementById('speciesCurrent').innerHTML = Species;
		}
		else {
			// Other Species
			var array = ["Avian", "Bird", "Crow", "Eagle", "Gryphon", "Owl", "Penguin"
			, "Phoenix", "Raven", "Hawk", "Bison", "Buffalo", "Bull", "Cow", "African Wild Dog"
			, "Ethiopian Wolf", "Fennec Fox", "Folf", "Husky", "Maned Wolf", "Werewolf", "Reindeer", "Elk"
			, "Moose", "Donkey", "Pegasus", "Pony", "Unicorn", "Zebra", "Caracal", "Cougar"
			, "Jaguar", "Khajiit", "Leopard", "Liger", "Serval", "Argonian", "Jackalope", "Jex"
			, "Kitsune", "Kobold", "Tanuki", "Chimera", "Foxcoon", "Manokit", "Wox", "Wusky"
			, "Pika", "Hare", "Koala", "Opossum", "Possum", "Badger", "Ferret", "Marten"
			, "Weasel", "Alligator", "Crocodile", "Dinosaur", "Iguana", "Raptor", "Turtle"
			, "Beaver", "Hamster", "Mouse", "Porcupine", "Rat", "Squirrel", "Gazelle", "Giraffe"
			, "Goat", "Llama", "Pig", "Sheep"];
			Species = array[Math.floor(Math.random() * array.length)];
			document.getElementById('speciesCurrent').innerHTML = Species;
		}
	}
	// Sex
	var isThirdSexEnabled = localStorage.getItem("Third_Sex_Enabled");
	if (isThirdSexEnabled === "Yes") {
		var rng = Math.floor(Math.random() * 100) + 1; // 45% chance for both female/male and 10% for other if third sex is enabled
		if (rng >=0 && rng <=45) {
			document.getElementById("radiobuttonFemale").checked = true;
			saveSex('Female');
		}
		else if (rng >=46 && rng <=90) {
			document.getElementById("radiobuttonMale").checked = true;
			saveSex('Male');
		}
		else {
			document.getElementById("radiobuttonOther").checked = true;
			saveSex('Other');
		}
	}
	else {
		var rng = Math.floor(Math.random() * 2) + 1;
		if (rng == 1) {
			document.getElementById("radiobuttonFemale").checked = true;
			saveSex('Female');
		}
		else {
			document.getElementById("radiobuttonMale").checked = true;
			saveSex('Male');
		}
	}
	
	// Genitals
	var generatedSex = localStorage.getItem("Slot0_Sex");
	if (generatedSex === "Male") {
		var rng = Math.floor(Math.random() * 100) + 1;
		if (rng >=0 && rng <=95) { // 95% chance for Male character to have dick and 5% to have vagina (Pre/Non-op Trans Male)
			document.getElementById("genitalsPenisCheckbox").checked = true;
			document.getElementById("genitalsVaginaCheckbox").checked = false;
		}
		else {
			document.getElementById("genitalsVaginaCheckbox").checked = true;
			document.getElementById("genitalsPenisCheckbox").checked = false;			
		}
	}
	else if (generatedSex === "Female") {
		var rng = Math.floor(Math.random() * 100) + 1;
		if (rng >=0 && rng <=95) { // 95% chance for Female character to have vagina and 5% to have dick (Pre/Non-op Trans Female)
			document.getElementById("genitalsVaginaCheckbox").checked = true;
			document.getElementById("genitalsPenisCheckbox").checked = false;
		}
		else {
			document.getElementById("genitalsPenisCheckbox").checked = true;
			document.getElementById("genitalsVaginaCheckbox").checked = false;			
		}
	}
	else {
		var rng = Math.floor(Math.random() * 2) + 1; // 50% chance for one or other reproductive organ
		if (rng == 1) {
			document.getElementById("genitalsPenisCheckbox").checked = true;
			document.getElementById("genitalsVaginaCheckbox").checked = false;
			var rng = Math.floor(Math.random() * 100) + 1;
			if (rng >=0 && rng <=30) { // 30% chance for character to have both sex organs
				document.getElementById("genitalsVaginaCheckbox").checked = true;
			}
		}
		else {
			document.getElementById("genitalsVaginaCheckbox").checked = true;
			document.getElementById("genitalsPenisCheckbox").checked = false;
			var rng = Math.floor(Math.random() * 100) + 1;
			if (rng >=0 && rng <=30) { // 30% chance for character to have both sex organs
				document.getElementById("genitalsPenisCheckbox").checked = true;
			}
		}
	}
	
	// Cock Type	
	var cockType;
	var Sex = localStorage.getItem("Slot0_Sex");
	cockType = cockTypes[Math.floor(Math.random() * cockTypes.length)];
	if (charVizEnabled === "Yes" && generateSupportedSpecies === "Yes") {
		// Set humanoid cock type if user ticked "Randomizer generates only species supported by CharViz" checkbox
		cockType = "Humanoid";
	}
	if (Sex === "Female") {
		var rng = Math.floor(Math.random() * 100) + 1;
		// 10% chance to generate a Female with dick, 90% without
		if (rng <= 10) {
			cockType = "Humanoid";
		}
		else {
			cockType = "None";
		}
	}
	document.getElementById('cockTypeCurrent').innerHTML = cockType;
	localStorage.setItem("Slot0_Cock_Type", cockType);
	
	// Adapt Clothing Checkbox
	var tickbox = document.getElementById("adaptClothingCheckbox");
	var rng = Math.floor(Math.random() * 2) + 1;
	if (rng == 1) {
		tickbox.checked = false;
	}
	else {
		tickbox.checked = true;
	}
	
	// Determine femininity/masculinity of a character
	var bodytype = Math.floor(Math.random() * 100) + 1;
	mySlider6.setValue(bodytype); // Masculine/Feminine
	
	// Set sliders with feminine/masculine traits from -20 to -2 or 2 to 20 around that value
	var range = 18;
	var threshold = 2;
		
	// Breast Size Female
	var value = Math.floor(Math.random() * range) + threshold;
	var addOrSubstract = Math.floor(Math.random() * 2) + 1;
	if (addOrSubstract == 1) {
		// Add value
		var sliderValue = bodytype + value;		
	}
	else {
		// Substract value
		var sliderValue = bodytype - value;	
	}
	// Sliders have range of 0 to 100 so if value is under or over this range it needs to be normalized
	if (sliderValue > 100) {
		sliderValue = 100;
	}
	else if (sliderValue < 0) {
		sliderValue = 0;
	}
	mySlider8.setValue(sliderValue);
	
	// Butt Size
	var value = Math.floor(Math.random() * range) + threshold;
	var addOrSubstract = Math.floor(Math.random() * 2) + 1;
	if (addOrSubstract == 1) {
		var sliderValue = bodytype + value;		
	}
	else {
		var sliderValue = bodytype - value;	
	}
	if (sliderValue > 100) {
		sliderValue = 100;
	}
	else if (sliderValue < 0) {
		sliderValue = 0;
	}
	mySlider13.setValue(sliderValue);
	
	// Hips
	var value = Math.floor(Math.random() * range) + threshold;
	var addOrSubstract = Math.floor(Math.random() * 2) + 1;
	if (addOrSubstract == 1) {
		var sliderValue = bodytype + value;		
	}
	else {
		var sliderValue = bodytype - value;	
	}
	if (sliderValue > 100) {
		sliderValue = 100;
	}
	else if (sliderValue < 0) {
		sliderValue = 0;
	}
	mySlider3.setValue(sliderValue);
	
	// Hair Lenght
	var value = Math.floor(Math.random() * range) + threshold;
	var addOrSubstract = Math.floor(Math.random() * 2) + 1;
	if (addOrSubstract == 1) {
		var sliderValue = bodytype + value;		
	}
	else {
		var sliderValue = bodytype - value;	
	}
	if (sliderValue > 100) {
		sliderValue = 100;
	}
	else if (sliderValue < 0) {
		sliderValue = 0;
	}
	mySlider20.setValue(sliderValue);
	
	// Thin/Thicc
	var rng = Math.floor(Math.random() * 100) + 1;
	mySlider5.setValue(rng);
	
	// Smol/Tall
	var rng = Math.floor(Math.random() * 100) + 1;
	mySlider4.setValue(rng);
	
	// Custom sliders	
	var i;
	for (i = 1; i < 11; i++) {
		var rng = Math.floor(Math.random() * 100) + 1;
		localStorage.setItem("Slot0_Custom_Slider" + i + "_Value", rng);
	}
	
	// Custom checkboxes
	var i;
	for (i = 1; i < 4; i++) {
		var x;
		for (x = 1; x < 3; x++) {
			var rng = Math.floor(Math.random() * 2) + 1;
			if (rng == 1) {
				localStorage.setItem("Slot0_Custom_Checkbox" + i + "_Value" + x + "_Ticked", "Yes")
			}
			else {
				localStorage.setItem("Slot0_Custom_Checkbox" + i + "_Value" + x + "_Ticked", "No")
			}
		}
	}
	
	// Custom radio inputs
	var i;
	for (i = 1; i < 4; i++) {
		var rng = Math.floor(Math.random() * 2) + 1;
		localStorage.setItem("Slot0_Custom_Radio_Input" + i + "_Ticked_Value", rng);
	}
	
	// Breast Size Male
	//var rng = Math.floor(Math.random() * 100) + 1;
	mySlider9.setValue(0);
		
	// Belly Size
	var rng = Math.floor(Math.random() * 100) + 1;
	mySlider14.setValue(rng);
	
	// Belly Shape
	var rng = Math.floor(Math.random() * 100) + 1;
	mySlider15.setValue(rng);
	
	// Genital Size
	var rng = Math.floor(Math.random() * 100) + 1;
	mySlider2.setValue(rng);
	
	// Libido
	var rng = Math.floor(Math.random() * 100) + 1;
	mySlider7.setValue(rng);
	
	// Sensitivity
	var rng = Math.floor(Math.random() * 100) + 1;
	mySlider11.setValue(rng);
	
	// Demeanor
	var rng = Math.floor(Math.random() * 100) + 1;
	mySlider12.setValue(rng);
	
	// Position Preference
	var rng = Math.floor(Math.random() * 100) + 1;
	mySlider10.setValue(rng);
	
	// Intelligence
	var rng = Math.floor(Math.random() * 100) + 1;
	mySlider16.setValue(rng);
	
	// Fluffiness
	var rng = Math.floor(Math.random() * 100) + 1;
	mySlider.setValue(rng);
	
	// Fertility
	var rng = Math.floor(Math.random() * 100) + 1;
	mySlider23.setValue(rng);
	
	// Sexuality
	var rng = Math.floor(Math.random() * 100) + 1;
	
	if (rng >=0 && rng <=43) { // Bi
	
		var sexuality = Math.floor(Math.random() * 70) + 15; // 15-85 Range
	}
	else if (rng >=44 && rng <=69) { // Gay
	
		var sexuality = Math.floor(Math.random() * 14) + 86; // 86-100 Range
	}
	else if (rng >=70 && rng <=85) { // Mostly Straight
	
		var sexuality = Math.floor(Math.random() * 14) + 1; // 1-14 Range
	}
	else if (rng >=86 && rng <=100) { // 100% Straight 
	
		var sexuality = 0;
	}
	
	var customSliderName1 = document.getElementById("textinmenuCenterCS1").innerText;
	var customSliderName2 = document.getElementById("textinmenuCenterCS2").innerText;
	var customSliderName3 = document.getElementById("textinmenuCenterCS3").innerText;
	var customSliderName4 = document.getElementById("textinmenuCenterCS4").innerText;
	var customSliderName5 = document.getElementById("textinmenuCenterCS5").innerText;
	var customSliderName6 = document.getElementById("textinmenuCenterCS6").innerText;
	var customSliderName7 = document.getElementById("textinmenuCenterCS7").innerText;
	var customSliderName8 = document.getElementById("textinmenuCenterCS8").innerText;
	var customSliderName9 = document.getElementById("textinmenuCenterCS9").innerText;
	var customSliderName10 = document.getElementById("textinmenuCenterCS10").innerText;
		
	if (customSliderName1 === "Sexuality") 		{	CustomSliderNo1.setValue(sexuality);	}
	else if (customSliderName2 === "Sexuality") {	CustomSliderNo2.setValue(sexuality);	}
	else if (customSliderName3 === "Sexuality") {	CustomSliderNo3.setValue(sexuality);	}
	else if (customSliderName4 === "Sexuality") {	CustomSliderNo4.setValue(sexuality);	}
	else if (customSliderName5 === "Sexuality") {	CustomSliderNo5.setValue(sexuality);	}
	else if (customSliderName6 === "Sexuality") {	CustomSliderNo6.setValue(sexuality);	}
	else if (customSliderName7 === "Sexuality") {	CustomSliderNo7.setValue(sexuality);	}
	else if (customSliderName8 === "Sexuality") {	CustomSliderNo8.setValue(sexuality);	}
	else if (customSliderName9 === "Sexuality") {	CustomSliderNo9.setValue(sexuality);	}
	else if (customSliderName10 === "Sexuality") {	CustomSliderNo10.setValue(sexuality);	}
		
	saveSettingsSlot0();
	loadCustomSliders();
	loadCustomCheckboxes();
	loadCustomRadioInputs();

	if (charVizEnabled === "Yes") {
		var pickerEnabled = localStorage.getItem("Character_Part_And_Pattern_Picker_Enabled");
		saveCharacterPartPreset(Species);
		var randomizeColors = localStorage.getItem("Randomizer_Affects_Char_Colors");
		if (randomizeColors === "Yes") { randomizeCharacterColors(); }
		var randomizeClothing = localStorage.getItem("Randomizer_Affects_Clothing");
		if (randomizeClothing === "Yes") { randomizeCharacterClothing(); }
		initializeCharViz();
	}
	}
}

function randomizeCharacterColorsAI() {
	// This doesn't work when hosted on github cause colormind API is hosted on non-https server which gives mixed content error
	var url = "http://colormind.io/api/";
	var data = {
		model : "default",
	}

	var http = new XMLHttpRequest();
	var palette;
	
	http.onreadystatechange = function() {
		if(http.readyState == 4 && http.status == 200) {
			palette = JSON.parse(http.responseText).result;
			var color1 = rgbToHex2(palette[0]);
			var color2 = rgbToHex2(palette[1]);
			var color3 = rgbToHex2(palette[2]);
			var color4 = rgbToHex2(palette[3]);
			var color5 = rgbToHex2(palette[4]);
			localStorage.setItem("Slot0_Primary_Character_Color", color2);
			localStorage.setItem("Slot0_Secondary_Character_Color", color1);
			localStorage.setItem("Slot0_Tertiary_Character_Color", color3);
			localStorage.setItem("Slot0_Markings_Character_Color", color4);
			localStorage.setItem("Slot0_LeftEye_Character_Color", color2);
			localStorage.setItem("Slot0_RightEye_Character_Color", color2);
			localStorage.setItem("Slot0_Hair_Character_Color", color5);
			localStorage.setItem("Slot0_LeftSclera_Character_Color", "#ffffff");
			localStorage.setItem("Slot0_RightSclera_Character_Color", "#ffffff");
			loadCharacterColors();
		}
	}
	http.open("POST", url, true);
	http.send(JSON.stringify(data));
}

function randomizeCharacterColors() {
	var hue = Math.floor(Math.random() * 360) + 1;
	var rng = Math.floor(Math.random() * 2) + 1;
	if (rng == 1) {
		var scheme = "analogic";
	}
	else {
		var scheme = "tetrade";
	}
	var rng = Math.floor(Math.random() * 3) + 1;
	if (rng == 1) {
		var variation = "pastel";
	}
	else if (rng == 2) {
		var variation = "soft";
	}
	else if (rng == 3) {
		var variation = "light";
	}
	
	scm = new ColorScheme;
	scm.from_hue(hue)
   .scheme(scheme)
   .distance(0.75)
   .add_complement(true)
   .variation(variation)
   .web_safe(true);

	var colors = scm.colors();
	
	var primaryColor = colors[Math.floor(Math.random() * colors.length)];
	var secondaryColor = colors[Math.floor(Math.random() * colors.length)];
	var tertiaryColor = colors[Math.floor(Math.random() * colors.length)];
	var markingsColor = colors[Math.floor(Math.random() * colors.length)];
	var eyeColor = colors[Math.floor(Math.random() * colors.length)];
	var hairColor = colors[Math.floor(Math.random() * colors.length)];
	
	primaryColor = "#" + primaryColor;
	secondaryColor = "#" + secondaryColor;
	tertiaryColor = "#" + tertiaryColor;
	markingsColor = "#" + markingsColor;
	eyeColor = "#" + eyeColor;
	hairColor = "#" + hairColor;
	
	localStorage.setItem("Slot0_Primary_Character_Color", primaryColor);
	localStorage.setItem("Slot0_Secondary_Character_Color", secondaryColor);
	localStorage.setItem("Slot0_Tertiary_Character_Color", tertiaryColor);
	localStorage.setItem("Slot0_Markings_Character_Color", markingsColor);
	localStorage.setItem("Slot0_LeftEye_Character_Color", eyeColor);
	localStorage.setItem("Slot0_RightEye_Character_Color", eyeColor);
	localStorage.setItem("Slot0_Hair_Character_Color", hairColor);
	localStorage.setItem("Slot0_LeftSclera_Character_Color", "#ffffff");
	localStorage.setItem("Slot0_RightSclera_Character_Color", "#ffffff");
	loadCharacterColors();
}

function randomizeCharacterClothing() {
	var x = Math.floor(Math.random() * 2) + 1;
	var y;
	if (x == 1) { y = "Programmer" }
	else if (x == 2) { y = "Secretary" }
	charVizPutOutfitOn(y);
}