var peer;
var conn;
var master;
var appSynchronized = "false"; // Set this to true once app have been synchronized on master side.

// Both peer.on('connection') (on sub side) and conn.on('open') (on master side) events never fire. These events should trigger when connection is established.
function getPeerID() {
	return; // Delete this
	master = "false";
	//peer = new Peer(); // uncomment this if you want to use official PeerJS server (warning: runs on a potato)
	// or 
	//peer = new Peer( {	host: 'localhost',	port: 9000,	path: '/myapp'}); // uncomment this if you want to use your own PeerJS server https://github.com/peers/peerjs-server
	peer.on('open', function(id) {
	document.getElementById('peerID').innerHTML = id;
	});
	
	peer.on('connection', function(conn) { // This event should fire when peer receives connection.
	console.log("someone connected to you");
	test(); // A test function that logs "Hello world!" in console log after other person presses the button. Uncomment <!--<div class="bigButton" onClick="helloWorld()">Send hello world message</div>--> in index.html if you want to test this.
	});
	
	peer.on('error', function (err) {
    console.log(err);
    });
	
}

function connectToSomeone() {
	return; // Delete this
	master = "true";
	//peer = new Peer(); // uncomment this if you want to use official PeerJS server (warning: runs on a potato)
	// or 
	//peer = new Peer( {	host: 'localhost',	port: 9000,	path: '/myapp'}); // uncomment this if you want to use your own PeerJS server https://github.com/peers/peerjs-server
	
	var destinationPeerID = document.getElementById("connectToPeerTextField").value;
	conn = peer.connect(destinationPeerID, {reliable:true});
	
	conn.on('open', function() { // This event should fire when connection is established.
		console.log("connection to someone established");
	});
	
	peer.on('error', function (err) {
    console.log(err);
    });
	test(); // A test function that logs "Hello world!" in console log after other person presses the button. Uncomment <!--<div class="bigButton" onClick="helloWorld()">Send hello world message</div>--> in index.html if you want to test this.
}

function helloWorld() {
	conn.send('Hello world!');
}

function test() {
	conn.on('data', function(data) {
    console.log(data);
  });
}

// Once connection is achieved execute these functions:
// receiveData(), synchronization(), sliderHandleAnimation() and showCONTROLmenus() on sub side.
// receiveData(), attachEvents() and showCONTROLmenus() on master side.

function synchronization() { // Master (person who connects to someone) gets their app synchronized to sub (person who receives connection).
	if (master === "false") {
		// Sub sends state of their app to master.
		// Slider values	
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
		var sexuality = mySlider21.getValue();
		var feralAnthro = mySlider22.getValue();
		var fertility = mySlider23.getValue();
		
		// Custom slider values
		var custom1 = mySlider17.getValue();
		var custom2 = mySlider18.getValue();
		var custom3 = mySlider19.getValue();
		
		conn.send("manipulateSlider", "mascFem", bodyType1);
		conn.send("manipulateSlider", "thinThicc", bodyType2);
		conn.send("manipulateSlider", "smolTall", bodyType3);
		conn.send("manipulateSlider", "hips", hips);
		conn.send("manipulateSlider", "genitalSize", genitalSize);
		conn.send("manipulateSlider", "fluffiness", fluffiness);
		conn.send("manipulateSlider", "libido", libido);
		conn.send("manipulateSlider", "domsub", domsub);
		conn.send("manipulateSlider", "sensitivity", sensitivity);
		conn.send("manipulateSlider", "assertiveShy", assertiveShy);
		conn.send("manipulateSlider", "breastSizeMale", breastSizeMale);
		conn.send("manipulateSlider", "breastSizeFemale", breastSizeFemale);
		conn.send("manipulateSlider", "buttSize", buttSize);
		conn.send("manipulateSlider", "bellySize", bellySize);
		conn.send("manipulateSlider", "bellyShape", bellyShape);
		conn.send("manipulateSlider", "intelligence", intelligence);
		conn.send("manipulateSlider", "hairLenght", hairLenght);
		conn.send("manipulateSlider", "sexuality", sexuality);
		conn.send("manipulateSlider", "feralAnthro", feralAnthro);
		conn.send("manipulateSlider", "fertility", fertility);
		conn.send("manipulateSlider", "custom1", custom1);
		conn.send("manipulateSlider", "custom2", custom2);
		conn.send("manipulateSlider", "custom3", custom3);
		
		// Options
		var species = document.getElementById("speciesCurrent").innerHTML;
		var inanimateObject = document.getElementById("inanimateObjectsCurrent").innerHTML;
		var cockType = document.getElementById("cockTypeCurrent").innerHTML;
		var hairColor = localStorage.getItem("Slot0_Hair_Color");
		var swatchColor = localStorage.getItem("Slot0_Swatch_Color");
		var sex = localStorage.getItem("Slot0_Sex");
		var thirdSex = localStorage.getItem("Slot0_Third_Sex");
		
		conn.send("manipulateOption", "Species", species);		
		conn.send("manipulateOption", "Inanimate_Object", inanimateObject);
		conn.send("manipulateOption", "Cock_Type", cockType);
		conn.send("manipulateOption", "Hair_Color", hairColor, swatchColor);
		conn.send("manipulateOption", "Sex", sex);
		conn.send("manipulateOption", "Third_Sex", thirdSex);
		
		// Checkboxes		
		var tickbox = document.getElementById("adaptClothingCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send("manipulateTickbox", "Adapt_Clothing", tickbox);
		
		var tickbox = document.getElementById("genitalsPenisCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send("manipulateTickbox", "Genitals_Penis", tickbox);
		
		var tickbox = document.getElementById("genitalsVaginaCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send("manipulateTickbox", "Genitals_Vagina", tickbox);
		
		var tickbox = document.getElementById("pregnancyLockCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send("manipulateTickbox", "Pregnancy_Lock", tickbox);
		
		// Custom sliders names
		var leftTextCustom1 = document.getElementById("textinmenuLeftCS1").innerText;
		var centerTextCustom1 = document.getElementById("textinmenuCenterCS1").innerText;
		var rightTextCustom1 = document.getElementById("textinmenuRightCS1").innerText;
		
		var leftTextCustom2 = document.getElementById("textinmenuLeftCS2").innerText;
		var centerTextCustom2 = document.getElementById("textinmenuCenterCS2").innerText;
		var rightTextCustom2 = document.getElementById("textinmenuRightCS2").innerText;
		
		var leftTextCustom3 = document.getElementById("textinmenuLeftCS3").innerText;
		var centerTextCustom3 = document.getElementById("textinmenuCenterCS3").innerText;
		var rightTextCustom3 = document.getElementById("textinmenuRightCS3").innerText;
		
		conn.send("changeSliderName", "Custom1Left", leftTextCustom1);
		conn.send("changeSliderName", "Custom1Middle", centerTextCustom1);
		conn.send("changeSliderName", "Custom1Right", rightTextCustom1);
		
		conn.send("changeSliderName", "Custom2Left", leftTextCustom2);
		conn.send("changeSliderName", "Custom2Middle", centerTextCustom2);
		conn.send("changeSliderName", "Custom2Right", rightTextCustom2);
		
		conn.send("changeSliderName", "Custom3Left", leftTextCustom3);
		conn.send("changeSliderName", "Custom3Middle", centerTextCustom3);
		conn.send("changeSliderName", "Custom3Right", rightTextCustom3);
		
		// Options/sliders visibility

		var buttSizeSliderEnabled = localStorage.getItem("Butt_Size_Slider_Enabled");
		var bellySizeSliderEnabled = localStorage.getItem("Belly_Size_Slider_Enabled");
		var bellyShapeSliderEnabled = localStorage.getItem("Belly_Shape_Slider_Enabled");
		var hipsSliderEnabled = localStorage.getItem("Hips_Slider_Enabled");
		var genitalSizeSliderEnabled = localStorage.getItem("Genital_Size_Slider_Enabled");
		var cockTypeMenuEnabled = localStorage.getItem("Cock_Type_Menu_Enabled");
		var libidoSliderEnabled = localStorage.getItem("Libido_Slider_Enabled");
		var sensitivitySliderEnabled = localStorage.getItem("Sensitivity_Slider_Enabled");
		var demeanorSliderEnabled = localStorage.getItem("Demeanor_Slider_Enabled");
		var positionPrefSliderEnabled = localStorage.getItem("Postion_Pref_Slider_Enabled");
		var intelligenceSliderEnabled = localStorage.getItem("Intelligence_Slider_Enabled");
		var fluffinessSliderEnabled = localStorage.getItem("Fluffiness_Slider_Enabled");
		var hairLenghtSliderEnabled = localStorage.getItem("Hair_Lenght_Slider_Enabled");
		var sexualitySliderEnabled = localStorage.getItem("Sexuality_Slider_Enabled");
		var feralAnthroSliderEnabled = localStorage.getItem("Feral_Anthro_Slider_Enabled");
		var hairColorMenuEnabled = localStorage.getItem("Hair_Color_Menu_Enabled");
		var fertilitySliderEnabled = localStorage.getItem("Fertility_Slider_Enabled");
		var genitalsMenuEnabled = localStorage.getItem("Genitals_Menu_Enabled");
		var speciesMenuEnabled = localStorage.getItem("Species_Menu_Enabled");
		var sexMenuEnabled = localStorage.getItem("Sex_Menu_Enabled");
		var acMenuEnabled = localStorage.getItem("AC_Menu_Enabled");
		var mascFemSliderEnabled = localStorage.getItem("MascFem_Slider_Enabled");
		var thinThiccSliderEnabled = localStorage.getItem("ThinThicc_Slider_Enabled");
		var smolTallSliderEnabled = localStorage.getItem("SmolTall_Slider_Enabled");
		var inanimateObjectsMenuEnabled = localStorage.getItem("Inanimate_Objects_Enabled");
		var isCS1Enabled = localStorage.getItem("Custom_Slider1_Enabled");
		var isCS2Enabled = localStorage.getItem("Custom_Slider2_Enabled");
		var isCS3Enabled = localStorage.getItem("Custom_Slider3_Enabled");
		
		conn.send("optionEnabled", "buttSize", buttSizeSliderEnabled);
		conn.send("optionEnabled", "bellySize", bellySizeSliderEnabled);
		conn.send("optionEnabled", "bellyShape", bellyShapeSliderEnabled);
		conn.send("optionEnabled", "hips", hipsSliderEnabled);
		conn.send("optionEnabled", "genitalSize", genitalSizeSliderEnabled);
		conn.send("optionEnabled", "cockType", cockTypeMenuEnabled);
		conn.send("optionEnabled", "libido", libidoSliderEnabled);
		conn.send("optionEnabled", "sensitivity", sensitivitySliderEnabled);
		conn.send("optionEnabled", "demeanor", demeanorSliderEnabled);
		conn.send("optionEnabled", "positionPref", positionPrefSliderEnabled);
		conn.send("optionEnabled", "intelligence", intelligenceSliderEnabled);
		conn.send("optionEnabled", "fluffiness", fluffinessSliderEnabled);
		conn.send("optionEnabled", "hairLenght", hairLenghtSliderEnabled);
		conn.send("optionEnabled", "sexuality", sexualitySliderEnabled);
		conn.send("optionEnabled", "feralAnthro", feralAnthroSliderEnabled);
		conn.send("optionEnabled", "hairColor", hairColorMenuEnabled);
		conn.send("optionEnabled", "fertility", fertilitySliderEnabled);
		conn.send("optionEnabled", "genitalsMenu", genitalsMenuEnabled);
		conn.send("optionEnabled", "speciesMenu", speciesMenuEnabled);
		conn.send("optionEnabled", "sexMenu", sexMenuEnabled);
		conn.send("optionEnabled", "acMenu", acMenuEnabled);
		conn.send("optionEnabled", "mascFem", mascFemSliderEnabled);
		conn.send("optionEnabled", "thinThicc", thinThiccSliderEnabled);
		conn.send("optionEnabled", "smolTall", smolTallSliderEnabled);
		conn.send("optionEnabled", "inanimateObjectsMenu", inanimateObjectsMenuEnabled);
		conn.send("optionEnabled", "custom1", isCS1Enabled);
		conn.send("optionEnabled", "custom2", isCS2Enabled);
		conn.send("optionEnabled", "custom3", isCS3Enabled);
		conn.send("optionEnabled", "fireLoadSliderSettingsFunction");
		conn.send("appSynchronized");	
	}
	else {
		return;
	}
}

function receiveData() { // This is function for receiving data from Master.	
	conn.on('data', function(firstParam, secondParam, thirdParam, fourthParam) {
	if (master === "false" || appSynchronized === "false") { // It should execute on Master side till app is synchronized.
		if (firstParam === "manipulateSlider") {
			if (secondParam === "mascFem") 				{	mySlider6.setValue(thirdParam);		}
			else if (secondParam === "thinThicc") 		{	mySlider5.setValue(thirdParam);		}
			else if (secondParam === "smolTall") 		{	mySlider4.setValue(thirdParam);		}
			else if (secondParam === "hips") 			{	mySlider3.setValue(thirdParam);		}	
			else if (secondParam === "genitalSize") 	{	mySlider2.setValue(thirdParam);		}
			else if (secondParam === "fluffiness")		{	mySlider.setValue(thirdParam);		}
			else if (secondParam === "libido") 			{	mySlider7.setValue(thirdParam);		}
			else if (secondParam === "domsub") 			{	mySlider10.setValue(thirdParam);	}
			else if (secondParam === "sensitivity") 	{	mySlider11.setValue(thirdParam);	}
			else if (secondParam === "assertiveShy") 	{	mySlider12.setValue(thirdParam);	}
			else if (secondParam === "breastSizeMale") 	{	mySlider9.setValue(thirdParam);		}
			else if (secondParam === "breastSizeFemale"){	mySlider8.setValue(thirdParam);		}
			else if (secondParam === "buttSize") 		{	mySlider13.setValue(thirdParam);	}
			else if (secondParam === "bellySize") 		{	mySlider14.setValue(thirdParam);	}
			else if (secondParam === "bellyShape")		{	mySlider15.setValue(thirdParam);	}
			else if (secondParam === "intelligence")	{	mySlider16.setValue(thirdParam);	}
			else if (secondParam === "hairLenght") 		{	mySlider20.setValue(thirdParam);	}
			else if (secondParam === "sexuality") 		{	mySlider21.setValue(thirdParam);	}
			else if (secondParam === "feralAnthro") 	{	mySlider22.setValue(thirdParam);	}
			else if (secondParam === "fertility") 		{	mySlider23.setValue(thirdParam);	}
			else if (secondParam === "custom1") 		{	mySlider17.setValue(thirdParam);	}
			else if (secondParam === "custom2") 		{	mySlider18.setValue(thirdParam);	}
			else if (secondParam === "custom3") 		{	mySlider19.setValue(thirdParam);	}
		}
		else if (firstParam === "manipulateOption") {
			if (secondParam === "Species") 				{	document.getElementById('speciesCurrent').innerHTML = thirdParam; 				}
			else if (secondParam === "Inanimate_Object"){	document.getElementById('inanimateObjectsCurrent').innerHTML = thirdParam; 		}
			else if (secondParam === "Cock_Type")		{	document.getElementById('cockTypeCurrent').innerHTML = thirdParam; 				}
			else if (secondParam === "Hair_Color") 		{	document.getElementById('hairColorCurrent').innerHTML = thirdParam;
															document.getElementById('hairColorSwatch').style.backgroundColor = fourthParam;	}
			else if (secondParam === "Sex") 			{
				if (thirdParam === "Male") 				{	document.getElementById("radiobuttonMale").checked = true;		}
				else if (thirdParam === "Female") 		{	document.getElementById("radiobuttonFemale").checked = true;	}
				else if (thirdParam === "Other") 		{	document.getElementById("radiobuttonOther").checked = true;		}
			}
			else if (secondParam === "Third_Sex") 		{
				if (thirdParam != null) 				{	document.getElementById('thirdSexValue').innerHTML = thirdParam;
															localStorage.setItem("Slot0_Third_Sex", thirdParam); 			}
			}
		}
		else if (firstParam === "manipulateTickbox") {
			if (secondParam === "Adapt_Clothing") {
				if (thirdParam === "Yes") 	{	document.getElementById("adaptClothingCheckbox").checked = true;	}
				else						{	document.getElementById("adaptClothingCheckbox").checked = false;	}
			}
			else if (secondParam === "Genitals_Penis") {
				if (thirdParam === "Yes") 	{	document.getElementById("genitalsPenisCheckbox").checked = true;	}
				else						{	document.getElementById("genitalsPenisCheckbox").checked = false;	}
			}
			else if (secondParam === "Genitals_Vagina") {
				if (thirdParam === "Yes") 	{	document.getElementById("genitalsVaginaCheckbox").checked = true;	}
				else						{	document.getElementById("genitalsVaginaCheckbox").checked = false;	}
			}
			else if (secondParam === "Pregnancy_Lock") {
				if (thirdParam === "Yes") 	{	document.getElementById("pregnancyLockCheckbox").checked = true;	}
				else						{	document.getElementById("pregnancyLockCheckbox").checked = false;	}
			}
		}
		else if (firstParam === "optionEnabled") {
			if (secondParam === "buttSize") 							{	localStorage.setItem("Butt_Size_Slider_Enabled", thirdParam);		}
			else if (secondParam === "bellySize") 						{	localStorage.setItem("Belly_Size_Slider_Enabled", thirdParam);		}
			else if (secondParam === "bellyShape") 						{	localStorage.setItem("Belly_Shape_Slider_Enabled", thirdParam);		}
			else if (secondParam === "hips") 							{	localStorage.setItem("Hips_Slider_Enabled", thirdParam);			}
			else if (secondParam === "genitalSize") 					{	localStorage.setItem("Genital_Size_Slider_Enabled", thirdParam);	}
			else if (secondParam === "cockType") 						{	localStorage.setItem("Cock_Type_Menu_Enabled", thirdParam);			}
			else if (secondParam === "libido") 							{	localStorage.setItem("Libido_Slider_Enabled", thirdParam);			}
			else if (secondParam === "sensitivity") 					{	localStorage.setItem("Sensitivity_Slider_Enabled", thirdParam);		}
			else if (secondParam === "demeanor") 						{	localStorage.setItem("Demeanor_Slider_Enabled", thirdParam);		}
			else if (secondParam === "positionPref") 					{	localStorage.setItem("Postion_Pref_Slider_Enabled", thirdParam);	}
			else if (secondParam === "intelligence") 					{	localStorage.setItem("Intelligence_Slider_Enabled", thirdParam);	}
			else if (secondParam === "fluffiness") 						{	localStorage.setItem("Fluffiness_Slider_Enabled", thirdParam);		}
			else if (secondParam === "hairLenght") 						{	localStorage.setItem("Hair_Lenght_Slider_Enabled", thirdParam);		}
			else if (secondParam === "sexuality") 						{	localStorage.setItem("Sexuality_Slider_Enabled", thirdParam);		}
			else if (secondParam === "feralAnthro") 					{	localStorage.setItem("Feral_Anthro_Slider_Enabled", thirdParam);	}
			else if (secondParam === "hairColor") 						{	localStorage.setItem("Hair_Color_Menu_Enabled", thirdParam);		}
			else if (secondParam === "fertility") 						{	localStorage.setItem("Fertility_Slider_Enabled", thirdParam);		}
			else if (secondParam === "genitalsMenu") 					{	localStorage.setItem("Genitals_Menu_Enabled", thirdParam);			}
			else if (secondParam === "speciesMenu") 					{	localStorage.setItem("Species_Menu_Enabled", thirdParam);			}
			else if (secondParam === "sexMenu")							{	localStorage.setItem("Sex_Menu_Enabled", thirdParam);				}
			else if (secondParam === "acMenu") 							{	localStorage.setItem("AC_Menu_Enabled", thirdParam);				}
			else if (secondParam === "mascFem") 						{	localStorage.setItem("MascFem_Slider_Enabled", thirdParam);			}
			else if (secondParam === "thinThicc") 						{	localStorage.setItem("ThinThicc_Slider_Enabled", thirdParam);		}
			else if (secondParam === "smolTall") 						{	localStorage.setItem("SmolTall_Slider_Enabled", thirdParam);		}
			else if (secondParam === "inanimateObjectsMenu") 			{	localStorage.setItem("Inanimate_Objects_Enabled", thirdParam);		}
			else if (secondParam === "custom1") 						{	localStorage.setItem("Custom_Slider1_Enabled", thirdParam);			}
			else if (secondParam === "custom2") 						{	localStorage.setItem("Custom_Slider2_Enabled", thirdParam);			}
			else if (secondParam === "custom3") 						{	localStorage.setItem("Custom_Slider3_Enabled", thirdParam);			}
			else if (secondParam === "fireLoadSliderSettingsFunction") 	{	loadSliderSettings();loadCustomSlidersValuesOnStartup1("Yes");
																			loadCustomSlidersValuesOnStartup2("Yes");loadCustomSlidersValuesOnStartup3("Yes");	}
		}
		else if (firstParam === "appSynchronized") {
			appSynchronized = "true";
		}
	}
		else {
			return;
		}
    });	
}

function attachEvents() { // Attach events to sliders/options/checkboxes. This function should execute only on master side.
	if (master === "true") {
		attachEventsToSliders();
		attachEventsToOptions();
		attachEventsToTickboxes();
		attachEventsToVisibiltyOptions();
	}
	else {
		return;
	}
}

function sliderHandleAnimation() { // Change css for sliders to one with slider handle animation on the sub side.
	if (master === "false") {
		document.getElementById('defaultcss').href='css/dhtmlxsliderAnim.css';
	}
	else {
		return;
	}
}

function showCONTROLmenus() {
	if (master === "false") {
		document.getElementById("CONTROLreceiveContainer").style.maxHeight='0px';
		document.getElementById("CONTROLsubContainer").style.maxHeight='200px';
	}
	else {
		document.getElementById("CONTROLconnectContainer").style.maxHeight='0px';
		document.getElementById("CONTROLmasterContainer").style.maxHeight='200px';
	}
}

function attachEventsToSliders() {
	mySlider6.attachEvent("onSlideEnd", function() { // Masc/Fem slider
   	var value = mySlider6.getValue();
	conn.send("manipulateSlider", "mascFem", value);
});
	mySlider5.attachEvent("onSlideEnd", function() { // Thin/Thicc slider
   	var value = mySlider5.getValue();
	conn.send("manipulateSlider", "thinThicc", value);
});
	mySlider4.attachEvent("onSlideEnd", function() { // Smol/Tall slider
   	var value = mySlider4.getValue();
	conn.send("manipulateSlider", "smolTall", value);
});
	mySlider3.attachEvent("onSlideEnd", function() { // Hips slider
   	var value = mySlider3.getValue();
	conn.send("manipulateSlider", "hips", value);
});
	mySlider2.attachEvent("onSlideEnd", function() { // Genital Size slider
   	var value = mySlider2.getValue();
	conn.send("manipulateSlider", "genitalSize", value);
});
	mySlider.attachEvent("onSlideEnd", function() { // Fluffiness slider
   	var value = mySlider.getValue();
	conn.send("manipulateSlider", "fluffiness", value);
});
	mySlider7.attachEvent("onSlideEnd", function() { // Libido slider
   	var value = mySlider7.getValue();
	conn.send("manipulateSlider", "libido", value);
});
	mySlider10.attachEvent("onSlideEnd", function() { // Position Preference slider
   	var value = mySlider10.getValue();
	conn.send("manipulateSlider", "domsub", value);
});
	mySlider11.attachEvent("onSlideEnd", function() { // Sensitivity slider
   	var value = mySlider11.getValue();
	conn.send("manipulateSlider", "sensitivity", value);
});
	mySlider12.attachEvent("onSlideEnd", function() { // Demeanor slider
   	var value = mySlider12.getValue();
	conn.send("manipulateSlider", "assertiveShy", value);
});
	mySlider9.attachEvent("onSlideEnd", function() { // Breast Size Male slider
   	var value = mySlider9.getValue();
	conn.send("manipulateSlider", "breastSizeMale", value);
});
	mySlider8.attachEvent("onSlideEnd", function() { // Breast Size Female slider
   	var value = mySlider8.getValue();
	conn.send("manipulateSlider", "breastSizeFemale", value);
});
	mySlider13.attachEvent("onSlideEnd", function() { // Butt Size slider
   	var value = mySlider13.getValue();
	conn.send("manipulateSlider", "buttSize", value);
});
	mySlider14.attachEvent("onSlideEnd", function() { // Belly Size slider
   	var value = mySlider14.getValue();
	conn.send("manipulateSlider", "bellySize", value);
});
	mySlider15.attachEvent("onSlideEnd", function() { // Belly Shape slider
   	var value = mySlider15.getValue();
	conn.send("manipulateSlider", "bellyShape", value);
});
	mySlider16.attachEvent("onSlideEnd", function() { // Intelligence slider
   	var value = mySlider16.getValue();
	conn.send("manipulateSlider", "intelligence", value);
});
	mySlider20.attachEvent("onSlideEnd", function() { // Hair Lenght slider
   	var value = mySlider20.getValue();
	conn.send("manipulateSlider", "hairLenght", value);
});
	mySlider21.attachEvent("onSlideEnd", function() { // Sexuality slider
   	var value = mySlider21.getValue();
	conn.send("manipulateSlider", "sexuality", value);
});
	mySlider22.attachEvent("onSlideEnd", function() { // Feral/Anthro slider
   	var value = mySlider22.getValue();
	conn.send("manipulateSlider", "feralAnthro", value);
});
	mySlider23.attachEvent("onSlideEnd", function() { // Fertility slider
   	var value = mySlider23.getValue();
	conn.send("manipulateSlider", "fertility", value);
});

}

function attachEventsToOptions() {
	document.getElementById("speciesCurrent").addEventListener('DOMSubtreeModified', function() {
		var species = document.getElementById("speciesCurrent").innerHTML;
		conn.send("manipulateOption", "Species", species);
	});
	document.getElementById("inanimateObjectsCurrent").addEventListener('DOMSubtreeModified', function() {
		var inanimateObject = document.getElementById("inanimateObjectsCurrent").innerHTML;
		conn.send("manipulateOption", "Inanimate_Object", inanimateObject);
	});
	document.getElementById("cockTypeCurrent").addEventListener('DOMSubtreeModified', function() {
		var inanimateObject = document.getElementById("cockTypeCurrent").innerHTML;
		conn.send("manipulateOption", "Cock_Type", inanimateObject);
	});
	document.getElementById("hairColorCurrent").addEventListener('DOMSubtreeModified', function() {
		var hairColor = localStorage.getItem("Slot0_Hair_Color");
		var swatchColor = localStorage.getItem("Slot0_Swatch_Color");
		conn.send("manipulateOption", "Hair_Color", hairColor, swatchColor);
	});
	document.getElementById("radiobuttonMale").addEventListener("click", function(){
		conn.send("manipulateOption", "Sex", "Male");
	});
	document.getElementById("radiobuttonFemale").addEventListener("click", function(){
		conn.send("manipulateOption", "Sex", "Female");
	});
	document.getElementById("radiobuttonOther").addEventListener("click", function(){
		conn.send("manipulateOption", "Sex", "Other");
	});
}

function attachEventsToTickboxes() {
	document.getElementById("adaptClothingCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("adaptClothingCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send("manipulateTickbox", "Adapt_Clothing", tickbox);
	});
	document.getElementById("genitalsPenisCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("genitalsPenisCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send("manipulateTickbox", "Genitals_Penis", tickbox);
	});
	document.getElementById("genitalsVaginaCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("genitalsVaginaCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send("manipulateTickbox", "Genitals_Vagina", tickbox);
	});
	document.getElementById("pregnancyLockCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("pregnancyLockCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send("manipulateTickbox", "Pregnancy_Lock", tickbox);
	});
}

function attachEventsToVisibiltyOptions() {
	document.getElementById("speciesCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("speciesCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send("optionEnabled", "speciesMenu", tickbox);
	});
	document.getElementById("sexCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("sexCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send("optionEnabled", "sexMenu", tickbox);
	});
	document.getElementById("toggleAdaptClothingCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("toggleAdaptClothingCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send("optionEnabled", "acMenu", tickbox);
	});
	document.getElementById("mascFemCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("mascFemCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send("optionEnabled", "mascFem", tickbox);
	});
	document.getElementById("thinThiccCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("thinThiccCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send("optionEnabled", "thinThicc", tickbox);
	});
	document.getElementById("smolTallCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("smolTallCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send("optionEnabled", "smolTall", tickbox);
	});
	document.getElementById("genitalsCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("genitalsCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send("optionEnabled", "genitalsMenu", tickbox);
	});
	document.getElementById("inanimateObjectsCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("inanimateObjectsCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send("optionEnabled", "inanimateObjectsMenu", tickbox);
	});
	document.getElementById("buttSizeSliderCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("buttSizeSliderCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send("optionEnabled", "buttSize", tickbox);
	});
	document.getElementById("bellySizeSliderCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("bellySizeSliderCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send("optionEnabled", "bellySize", tickbox);
	});
	document.getElementById("bellyShapeSliderCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("bellyShapeSliderCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send("optionEnabled", "bellyShape", tickbox);
	});
	document.getElementById("hipsSliderCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("hipsSliderCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send("optionEnabled", "hips", tickbox);
	});
	document.getElementById("hairColorMenuCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("hairColorMenuCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send("optionEnabled", "hairColor", tickbox);
	});
	document.getElementById("hairLenghtSliderCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("hairLenghtSliderCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send("optionEnabled", "hairLenght", tickbox);
	});
	document.getElementById("genitalSizeSliderCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("genitalSizeSliderCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send("optionEnabled", "genitalSize", tickbox);
	});
	document.getElementById("cockTypeMenuCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("cockTypeMenuCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send("optionEnabled", "cockType", tickbox);
	});
	document.getElementById("libidoSliderCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("libidoSliderCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send("optionEnabled", "libido", tickbox);
	});
	document.getElementById("sensitivitySliderCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("sensitivitySliderCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send("optionEnabled", "sensitivity", tickbox);
	});
	document.getElementById("demeanorSliderCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("demeanorSliderCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send("optionEnabled", "demeanor", tickbox);
	});
	document.getElementById("positionPreferenceSliderCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("positionPreferenceSliderCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send("optionEnabled", "positionPref", tickbox);
	});
	document.getElementById("intelligenceSliderCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("intelligenceSliderCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send("optionEnabled", "intelligence", tickbox);
	});
	document.getElementById("sexualitySliderCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("sexualitySliderCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send("optionEnabled", "sexuality", tickbox);
	});
	document.getElementById("fertilitySliderCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("fertilitySliderCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send("optionEnabled", "fertility", tickbox);
	});
	document.getElementById("fluffinessSliderCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("fluffinessSliderCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send("optionEnabled", "fluffiness", tickbox);
	});
	document.getElementById("feralAnthroSliderCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("feralAnthroSliderCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send("optionEnabled", "feralAnthro", tickbox);
	});
	document.getElementById("customSlider1Checkbox").addEventListener("click", function(){
		var tickbox = document.getElementById("customSlider1Checkbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send("optionEnabled", "custom1", tickbox);
	});
	document.getElementById("customSlider2Checkbox").addEventListener("click", function(){
		var tickbox = document.getElementById("customSlider2Checkbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send("optionEnabled", "custom2", tickbox);
	});
	document.getElementById("customSlider3Checkbox").addEventListener("click", function(){
		var tickbox = document.getElementById("customSlider3Checkbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send("optionEnabled", "custom3", tickbox);
	});
}