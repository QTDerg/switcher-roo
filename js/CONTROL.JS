var peer;
var conn;
var master;
var controlsessionactive;
var isHosting;
var isConnected;

function connectToServer() {
	if (peer == null) {
	document.getElementById('CONTROLconnectToServerStatus').innerHTML = "Status: Connecting...";
	document.getElementById("CONTROLconnectToServerStatus").style.color = "#fff";
	//peer = new Peer(); // Official PeerJS server (offline as of 27-07-2020)
	// 
	//peer = new Peer( {	host: 'localhost',	port: 9000,	path: '/myapp'}); // PeerJS server running on localhost // peerjs --port 9000 --key peerjs --path /myapp
	//
	peer = new Peer({		// PeerJS server hosted by Prior99@Github
		host: 'peerjs.92k.de',
		port: 443,
		secure: true,
		config: {
			iceServers: [
				{ url: 'stun:stun.l.google.com:19302' },
				{ url: 'turn:numb.viagenie.ca', username: 'webrtc@live.com', credential: 'muazkh'},
			]
		},		
	});	
	
	peer.on('open', function(id) {
		document.getElementById('peerID').innerHTML = id;
		document.getElementById('CONTROLconnectToServerStatus').innerHTML = "Status: Connected to PeerJS server!";
		document.getElementById("CONTROLconnectToServerStatus").style.color = "#29a329";
		document.getElementById('CONTROLconnectToPeerStatus').innerHTML = "Status: Connected to PeerJS server!";
		document.getElementById("CONTROLconnectToPeerStatus").style.color = "#29a329";
		isConnected = "yes";
	});
	
	peer.on('error', function (err) {
		console.log(err);
		document.getElementById('CONTROLconnectToServerStatus').innerHTML = "Status: " + err;
		document.getElementById("CONTROLconnectToServerStatus").style.color = "#FF4550";
		document.getElementById('CONTROLconnectToPeerStatus').innerHTML = "Status: " + err;
		document.getElementById("CONTROLconnectToPeerStatus").style.color = "#FF4550";
    });
	}
	else {
		return;
	}
}

function host() { // Sub
	master = "false";
	isHosting = "yes";	
	
	document.getElementById("peerIDCopyMessage").innerHTML = "Waiting for connection...";
	document.getElementById("peerIDCopyMessage").style.color = "#fff";
	document.getElementById("controlSubTutorial").style.display = "none";
	
	document.getElementById("CONTROLhostSessionButton").style.padding='0px';
	document.getElementById("CONTROLhostSessionButton").style.border="0";
	document.getElementById("CONTROLhostSessionButton").style.fontSize='0px';
	document.getElementById("CONTROLhostSessionButton").style.marginBottom='0px';
	document.getElementById("CONTROLhostSessionButton").style.marginLeft='0px';
	document.getElementById("CONTROLgoBackFromHostOptionsButton").style.padding='0px';
	document.getElementById("CONTROLgoBackFromHostOptionsButton").style.border="0";
	document.getElementById("CONTROLgoBackFromHostOptionsButton").style.fontSize='0px';
	document.getElementById("CONTROLgoBackFromHostOptionsButton").style.marginBottom='0px';
	document.getElementById("CONTROLgoBackFromHostOptionsButton").style.marginLeft='0px';
	
	peer.on('connection', function(c) {
		conn = c;
		receiveData();		
		sliderHandleAnimation();
		showCONTROLmenus();
		synchronizationSleep();
		sendUsernameSleep();
		connectionLostSubMessage();
	});
}

function join() { // Master
	master = "true";
	
	var destinationPeerID = document.getElementById("connectToPeerTextField").value;
	conn = peer.connect(destinationPeerID, {reliable:true});
	
	document.getElementById('CONTROLconnectToPeerStatus').innerHTML = "Status: Connecting...";
	document.getElementById("CONTROLconnectToPeerStatus").style.color = "#fff";
	
	conn.on('open', function() {
		receiveData();
		attachEvents();
		showCONTROLmenus();
		sendUsernameSleep();
		controlsessionactive = "Yes";
	});
	
	conn.on('close', function() { 
		document.getElementById('CONTROLmasterMessage').innerHTML = "Connection has been lost. Please restart the app.";
		document.getElementById("CONTROLmasterMessage").style.color = "#FF4550";
	});
}

function connectionLostSubMessage() {
	conn.on('close', function() { 
		document.getElementById('CONTROLsubMessage').innerHTML = "Connection has been lost. Please restart the app.";
		document.getElementById("CONTROLsubMessage").style.color = "#FF4550";
	});
}

function synchronizationSleep() { // Execute it 1s after connection has been achieved. For some reason it doesn't work immediately after connecting.
	setTimeout(synchronization, 1000);
}

function synchronization() {

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
		
		conn.send({firstParam: "manipulateSlider", secondParam: "mascFem", thirdParam: bodyType1});
		conn.send({firstParam: "manipulateSlider", secondParam: "thinThicc", thirdParam: bodyType2});
		conn.send({firstParam: "manipulateSlider", secondParam: "smolTall", thirdParam: bodyType3});
		conn.send({firstParam: "manipulateSlider", secondParam: "hips", thirdParam: hips});
		conn.send({firstParam: "manipulateSlider", secondParam: "genitalSize", thirdParam: genitalSize});
		conn.send({firstParam: "manipulateSlider", secondParam: "fluffiness", thirdParam: fluffiness});
		conn.send({firstParam: "manipulateSlider", secondParam: "libido", thirdParam: libido});
		conn.send({firstParam: "manipulateSlider", secondParam: "domsub", thirdParam: domsub});
		conn.send({firstParam: "manipulateSlider", secondParam: "sensitivity", thirdParam: sensitivity});
		conn.send({firstParam: "manipulateSlider", secondParam: "assertiveShy", thirdParam: assertiveShy});
		conn.send({firstParam: "manipulateSlider", secondParam: "breastSizeMale", thirdParam: breastSizeMale});
		conn.send({firstParam: "manipulateSlider", secondParam: "breastSizeFemale", thirdParam: breastSizeFemale});
		conn.send({firstParam: "manipulateSlider", secondParam: "buttSize", thirdParam: buttSize});
		conn.send({firstParam: "manipulateSlider", secondParam: "bellySize", thirdParam: bellySize});
		conn.send({firstParam: "manipulateSlider", secondParam: "bellyShape", thirdParam: bellyShape});
		conn.send({firstParam: "manipulateSlider", secondParam: "intelligence", thirdParam: intelligence});
		conn.send({firstParam: "manipulateSlider", secondParam: "hairLenght", thirdParam: hairLenght});
		conn.send({firstParam: "manipulateSlider", secondParam: "sexuality", thirdParam: sexuality});
		conn.send({firstParam: "manipulateSlider", secondParam: "feralAnthro", thirdParam: feralAnthro});
		conn.send({firstParam: "manipulateSlider", secondParam: "fertility", thirdParam: fertility});
		conn.send({firstParam: "manipulateSlider", secondParam: "custom1", thirdParam: custom1});
		conn.send({firstParam: "manipulateSlider", secondParam: "custom2", thirdParam: custom2});
		conn.send({firstParam: "manipulateSlider", secondParam: "custom3", thirdParam: custom3});
		
		// Options
		var species = document.getElementById("speciesCurrent").innerHTML;
		var inanimateObject = document.getElementById("inanimateObjectsCurrent").innerHTML;
		var cockType = document.getElementById("cockTypeCurrent").innerHTML;
		var hairColor = localStorage.getItem("Slot0_Hair_Color");
		var swatchColor = localStorage.getItem("Slot0_Swatch_Color");
		var sex = localStorage.getItem("Slot0_Sex");
		var thirdSex = localStorage.getItem("Slot0_Third_Sex");
		
		conn.send({firstParam: "manipulateOption", secondParam: "Species", thirdParam: species});		
		conn.send({firstParam: "manipulateOption", secondParam: "Inanimate_Object", thirdParam: inanimateObject});
		conn.send({firstParam: "manipulateOption", secondParam: "Cock_Type", thirdParam: cockType});
		conn.send({firstParam: "manipulateOption", secondParam: "Hair_Color", thirdParam: hairColor, fourthParam: swatchColor});
		conn.send({firstParam: "manipulateOption", secondParam: "Sex", thirdParam: sex});
		conn.send({firstParam: "manipulateOption", secondParam: "Third_Sex", thirdParam: thirdSex});
		
		// Checkboxes		
		var tickbox = document.getElementById("adaptClothingCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "manipulateTickbox", secondParam: "Adapt_Clothing", thirdParam: tickbox});
		
		var tickbox = document.getElementById("genitalsPenisCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "manipulateTickbox", secondParam: "Genitals_Penis", thirdParam: tickbox});
		
		var tickbox = document.getElementById("genitalsVaginaCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "manipulateTickbox", secondParam: "Genitals_Vagina", thirdParam: tickbox});
		
		var tickbox = document.getElementById("pregnancyLockCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "manipulateTickbox", secondParam: "Pregnancy_Lock", thirdParam: tickbox});
		
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
		
		conn.send({firstParam: "changeSliderName", secondParam: "Custom1Left", thirdParam: leftTextCustom1});
		conn.send({firstParam: "changeSliderName", secondParam: "Custom1Middle", thirdParam: centerTextCustom1});
		conn.send({firstParam: "changeSliderName", secondParam: "Custom1Right", thirdParam: rightTextCustom1});
		
		conn.send({firstParam: "changeSliderName", secondParam: "Custom2Left", thirdParam: leftTextCustom2});
		conn.send({firstParam: "changeSliderName", secondParam: "Custom2Middle", thirdParam: centerTextCustom2});
		conn.send({firstParam: "changeSliderName", secondParam: "Custom2Right", thirdParam: rightTextCustom2});
		
		conn.send({firstParam: "changeSliderName", secondParam: "Custom3Left", thirdParam: leftTextCustom3});
		conn.send({firstParam: "changeSliderName", secondParam: "Custom3Middle", thirdParam: centerTextCustom3});
		conn.send({firstParam: "changeSliderName", secondParam: "Custom3Right", thirdParam: rightTextCustom3});
		
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
		
		conn.send({firstParam: "optionEnabled", secondParam: "buttSize", thirdParam: buttSizeSliderEnabled});
		conn.send({firstParam: "optionEnabled", secondParam: "bellySize", thirdParam: bellySizeSliderEnabled});
		conn.send({firstParam: "optionEnabled", secondParam: "bellyShape", thirdParam: bellyShapeSliderEnabled});
		conn.send({firstParam: "optionEnabled", secondParam: "hips", thirdParam: hipsSliderEnabled});
		conn.send({firstParam: "optionEnabled", secondParam: "genitalSize", thirdParam: genitalSizeSliderEnabled});
		conn.send({firstParam: "optionEnabled", secondParam: "cockType", thirdParam: cockTypeMenuEnabled});
		conn.send({firstParam: "optionEnabled", secondParam: "libido", thirdParam: libidoSliderEnabled});
		conn.send({firstParam: "optionEnabled", secondParam: "sensitivity", thirdParam: sensitivitySliderEnabled});
		conn.send({firstParam: "optionEnabled", secondParam: "demeanor", thirdParam: demeanorSliderEnabled});
		conn.send({firstParam: "optionEnabled", secondParam: "positionPref", thirdParam: positionPrefSliderEnabled});
		conn.send({firstParam: "optionEnabled", secondParam: "intelligence", thirdParam: intelligenceSliderEnabled});
		conn.send({firstParam: "optionEnabled", secondParam: "fluffiness", thirdParam: fluffinessSliderEnabled});
		conn.send({firstParam: "optionEnabled", secondParam: "hairLenght", thirdParam: hairLenghtSliderEnabled});
		conn.send({firstParam: "optionEnabled", secondParam: "sexuality", thirdParam: sexualitySliderEnabled});
		conn.send({firstParam: "optionEnabled", secondParam: "feralAnthro", thirdParam: feralAnthroSliderEnabled});
		conn.send({firstParam: "optionEnabled", secondParam: "hairColor", thirdParam: hairColorMenuEnabled});
		conn.send({firstParam: "optionEnabled", secondParam: "fertility", thirdParam: fertilitySliderEnabled});
		conn.send({firstParam: "optionEnabled", secondParam: "genitalsMenu", thirdParam: genitalsMenuEnabled});
		conn.send({firstParam: "optionEnabled", secondParam: "speciesMenu", thirdParam: speciesMenuEnabled});
		conn.send({firstParam: "optionEnabled", secondParam: "sexMenu", thirdParam: sexMenuEnabled});
		conn.send({firstParam: "optionEnabled", secondParam: "acMenu", thirdParam: acMenuEnabled});
		conn.send({firstParam: "optionEnabled", secondParam: "mascFem", thirdParam: mascFemSliderEnabled});
		conn.send({firstParam: "optionEnabled", secondParam: "thinThicc", thirdParam: thinThiccSliderEnabled});
		conn.send({firstParam: "optionEnabled", secondParam: "smolTall", thirdParam: smolTallSliderEnabled});
		conn.send({firstParam: "optionEnabled", secondParam: "inanimateObjectsMenu", thirdParam: inanimateObjectsMenuEnabled});
		conn.send({firstParam: "optionEnabled", secondParam: "custom1", thirdParam: isCS1Enabled});
		conn.send({firstParam: "optionEnabled", secondParam: "custom2", thirdParam: isCS2Enabled});
		conn.send({firstParam: "optionEnabled", secondParam: "custom3", thirdParam: isCS3Enabled});
		conn.send({firstParam: "optionEnabled", secondParam: "fireLoadSliderSettingsFunction"});

	}

function receiveData() {	
	conn.on('data', function(data) {
		if (data.firstParam === "manipulateSlider") {
			if (data.secondParam === "mascFem") 				{	mySlider6.setValue(data.thirdParam);localStorage.setItem("Slot0_Body_Type1", data.thirdParam);				}
			else if (data.secondParam === "thinThicc") 			{	mySlider5.setValue(data.thirdParam);localStorage.setItem("Slot0_Body_Type2", data.thirdParam);				}
			else if (data.secondParam === "smolTall") 			{	mySlider4.setValue(data.thirdParam);localStorage.setItem("Slot0_Body_Type3", data.thirdParam);				}
			else if (data.secondParam === "hips") 				{	mySlider3.setValue(data.thirdParam);localStorage.setItem("Slot0_Hips", data.thirdParam);					}	
			else if (data.secondParam === "genitalSize") 		{	mySlider2.setValue(data.thirdParam);localStorage.setItem("Slot0_Genital_Size", data.thirdParam);			}
			else if (data.secondParam === "fluffiness")			{	mySlider.setValue(data.thirdParam);localStorage.setItem("Slot0_Fluffiness", data.thirdParam);				}
			else if (data.secondParam === "libido") 			{	mySlider7.setValue(data.thirdParam);localStorage.setItem("Slot0_Libido", data.thirdParam);					}
			else if (data.secondParam === "domsub") 			{	mySlider10.setValue(data.thirdParam);localStorage.setItem("Slot0_Position_Preference", data.thirdParam);	}
			else if (data.secondParam === "sensitivity") 		{	mySlider11.setValue(data.thirdParam);localStorage.setItem("Slot0_Sensitivity", data.thirdParam);			}
			else if (data.secondParam === "assertiveShy") 		{	mySlider12.setValue(data.thirdParam);localStorage.setItem("Slot0_Demeanor", data.thirdParam);				}
			else if (data.secondParam === "breastSizeMale") 	{	mySlider9.setValue(data.thirdParam);localStorage.setItem("Slot0_Breast_Size_Male", data.thirdParam);		}
			else if (data.secondParam === "breastSizeFemale")	{	mySlider8.setValue(data.thirdParam);localStorage.setItem("Slot0_Breast_Size_Female", data.thirdParam);		}
			else if (data.secondParam === "buttSize") 			{	mySlider13.setValue(data.thirdParam);localStorage.setItem("Slot0_Butt_Size", data.thirdParam);				}
			else if (data.secondParam === "bellySize") 			{	mySlider14.setValue(data.thirdParam);localStorage.setItem("Slot0_Belly_Size", data.thirdParam);				}
			else if (data.secondParam === "bellyShape")			{	mySlider15.setValue(data.thirdParam);localStorage.setItem("Slot0_Belly_Shape", data.thirdParam);			}
			else if (data.secondParam === "intelligence")		{	mySlider16.setValue(data.thirdParam);localStorage.setItem("Slot0_Intelligence", data.thirdParam);			}
			else if (data.secondParam === "hairLenght") 		{	mySlider20.setValue(data.thirdParam);localStorage.setItem("Slot0_Hair_Lenght", data.thirdParam);			}
			else if (data.secondParam === "sexuality") 			{	mySlider21.setValue(data.thirdParam);localStorage.setItem("Slot0_Sexuality", data.thirdParam);				}
			else if (data.secondParam === "feralAnthro") 		{	mySlider22.setValue(data.thirdParam);localStorage.setItem("Slot0_Feral_Anthro", data.thirdParam);			}
			else if (data.secondParam === "fertility") 			{	mySlider23.setValue(data.thirdParam);localStorage.setItem("Slot0_Fertility", data.thirdParam);				}
			else if (data.secondParam === "custom1") 			{	mySlider17.setValue(data.thirdParam);localStorage.setItem("Slot0_Custom_Slider1_Value", data.thirdParam);	}
			else if (data.secondParam === "custom2") 			{	mySlider18.setValue(data.thirdParam);localStorage.setItem("Slot0_Custom_Slider2_Value", data.thirdParam);	}
			else if (data.secondParam === "custom3") 			{	mySlider19.setValue(data.thirdParam);localStorage.setItem("Slot0_Custom_Slider3_Value", data.thirdParam);	}
		}
		else if (data.firstParam === "manipulateOption") {
			if (data.secondParam === "Species") 				{	document.getElementById('speciesCurrent').innerHTML = data.thirdParam;localStorage.setItem("Slot0_Species", data.thirdParam);					}
			else if (data.secondParam === "Inanimate_Object")	{	document.getElementById('inanimateObjectsCurrent').innerHTML = data.thirdParam;localStorage.setItem("Slot0_Inanimate_Object", data.thirdParam);	}
			else if (data.secondParam === "Cock_Type")			{	document.getElementById('cockTypeCurrent').innerHTML = data.thirdParam;localStorage.setItem("Slot0_Cock_Type", data.thirdParam); 				}
			else if (data.secondParam === "Hair_Color") 		{	document.getElementById('hairColorCurrent').innerHTML = data.thirdParam;localStorage.setItem("Slot0_Hair_Color", data.thirdParam);
																	document.getElementById('hairColorSwatch').style.backgroundColor = data.fourthParam;localStorage.setItem("Slot0_Swatch_Color", data.fourthParam);	}
			else if (data.secondParam === "Sex") 				{
				if (data.thirdParam === "Male") 				{	
					document.getElementById("radiobuttonMale").checked = true;
					localStorage.setItem("Slot0_Sex", data.thirdParam);
					document.getElementById("showAdvancedSettings4a").style.maxHeight= '60px';
					document.getElementById("showAdvancedSettings4a").style.borderBottom= '3px solid #73728C';
					document.getElementById("showAdvancedSettings4a").style.paddingBottom= '15px';
					document.getElementById("showAdvancedSettings4b").style.maxHeight= '0';
					document.getElementById("showAdvancedSettings4b").style.borderBottom= '0';
					document.getElementById("showAdvancedSettings4b").style.paddingBottom= '0';
					showOrHideBreastSizeMaleSlider();
					showOrHideGenitalSizeFemaleSlider();
				}		
				else if (data.thirdParam === "Female") 			{	
					document.getElementById("radiobuttonFemale").checked = true;
					localStorage.setItem("Slot0_Sex", data.thirdParam);
					document.getElementById("showAdvancedSettings4a").style.maxHeight= '0';
					document.getElementById("showAdvancedSettings4a").style.borderBottom= '0';
					document.getElementById("showAdvancedSettings4a").style.paddingBottom= '0';
					document.getElementById("showAdvancedSettings4b").style.maxHeight= '60px';
					document.getElementById("showAdvancedSettings4b").style.borderBottom= '3px solid #73728C';
					document.getElementById("showAdvancedSettings4b").style.paddingBottom= '15px';
					showOrHideGenitalSizeFemaleSlider();
				}				
				else if (data.thirdParam === "Other") 			{	
					document.getElementById("radiobuttonOther").checked = true;
					localStorage.setItem("Slot0_Sex", data.thirdParam);
					document.getElementById("showAdvancedSettings4a").style.maxHeight= '0';
					document.getElementById("showAdvancedSettings4a").style.borderBottom= '0';
					document.getElementById("showAdvancedSettings4a").style.paddingBottom= '0';
					document.getElementById("showAdvancedSettings4b").style.maxHeight= '60px';
					document.getElementById("showAdvancedSettings4b").style.borderBottom= '3px solid #73728C';
					document.getElementById("showAdvancedSettings4b").style.paddingBottom= '15px';
					document.getElementById("genitalSizeSlider").style.maxHeight= '60px';
					document.getElementById("genitalSizeSlider").style.borderBottom= '3px solid #73728C';
					document.getElementById("genitalSizeSlider").style.paddingBottom= '15px';																						
				}
			}
			else if (data.secondParam === "Third_Sex") 			{
				if (data.thirdParam != null) 					{	document.getElementById('thirdSexValue').innerHTML = data.thirdParam;
																	localStorage.setItem("Slot0_Third_Sex", data.thirdParam);checkThirdSexStatus(); 	}
			}
		}
		else if (data.firstParam === "manipulateTickbox") {
			if (data.secondParam === "Adapt_Clothing") {
				localStorage.setItem("Slot0_AC_Box_Ticked", data.thirdParam);
				if (data.thirdParam === "Yes") 	{	document.getElementById("adaptClothingCheckbox").checked = true;	}
				else							{	document.getElementById("adaptClothingCheckbox").checked = false;	}
			}
			else if (data.secondParam === "Genitals_Penis") {
				localStorage.setItem("Slot0_Genitals_Menu_Penis_Box_Ticked", data.thirdParam);
				if (data.thirdParam === "Yes") 	{	document.getElementById("genitalsPenisCheckbox").checked = true;	}
				else							{	document.getElementById("genitalsPenisCheckbox").checked = false;	}
			}
			else if (data.secondParam === "Genitals_Vagina") {
				localStorage.setItem("Slot0_Genitals_Menu_Vagina_Box_Ticked", data.thirdParam);
				if (data.thirdParam === "Yes") 	{	document.getElementById("genitalsVaginaCheckbox").checked = true;	}
				else							{	document.getElementById("genitalsVaginaCheckbox").checked = false;	}
			}
			else if (data.secondParam === "Pregnancy_Lock") {
				localStorage.setItem("Slot0_Pregnancy_Lock_Box_Ticked", data.thirdParam);
				if (data.thirdParam === "Yes") 	{	document.getElementById("pregnancyLockCheckbox").checked = true;	}
				else							{	document.getElementById("pregnancyLockCheckbox").checked = false;	}
			}
		}
		else if (data.firstParam === "optionEnabled") {
			if (data.secondParam === "buttSize") 							{	localStorage.setItem("Butt_Size_Slider_Enabled", data.thirdParam);		}
			else if (data.secondParam === "bellySize") 						{	localStorage.setItem("Belly_Size_Slider_Enabled", data.thirdParam);		}
			else if (data.secondParam === "bellyShape") 					{	localStorage.setItem("Belly_Shape_Slider_Enabled", data.thirdParam);	}
			else if (data.secondParam === "hips") 							{	localStorage.setItem("Hips_Slider_Enabled", data.thirdParam);			}
			else if (data.secondParam === "genitalSize") 					{	localStorage.setItem("Genital_Size_Slider_Enabled", data.thirdParam);	}
			else if (data.secondParam === "cockType") 						{	localStorage.setItem("Cock_Type_Menu_Enabled", data.thirdParam);		}
			else if (data.secondParam === "libido") 						{	localStorage.setItem("Libido_Slider_Enabled", data.thirdParam);			}
			else if (data.secondParam === "sensitivity") 					{	localStorage.setItem("Sensitivity_Slider_Enabled", data.thirdParam);	}
			else if (data.secondParam === "demeanor") 						{	localStorage.setItem("Demeanor_Slider_Enabled", data.thirdParam);		}
			else if (data.secondParam === "positionPref") 					{	localStorage.setItem("Postion_Pref_Slider_Enabled", data.thirdParam);	}
			else if (data.secondParam === "intelligence") 					{	localStorage.setItem("Intelligence_Slider_Enabled", data.thirdParam);	}
			else if (data.secondParam === "fluffiness") 					{	localStorage.setItem("Fluffiness_Slider_Enabled", data.thirdParam);		}
			else if (data.secondParam === "hairLenght") 					{	localStorage.setItem("Hair_Lenght_Slider_Enabled", data.thirdParam);	}
			else if (data.secondParam === "sexuality") 						{	localStorage.setItem("Sexuality_Slider_Enabled", data.thirdParam);		}
			else if (data.secondParam === "feralAnthro") 					{	localStorage.setItem("Feral_Anthro_Slider_Enabled", data.thirdParam);	}
			else if (data.secondParam === "hairColor") 						{	localStorage.setItem("Hair_Color_Menu_Enabled", data.thirdParam);		}
			else if (data.secondParam === "fertility") 						{	localStorage.setItem("Fertility_Slider_Enabled", data.thirdParam);		}
			else if (data.secondParam === "genitalsMenu") 					{	localStorage.setItem("Genitals_Menu_Enabled", data.thirdParam);			}
			else if (data.secondParam === "speciesMenu") 					{	localStorage.setItem("Species_Menu_Enabled", data.thirdParam);			}
			else if (data.secondParam === "sexMenu")						{	localStorage.setItem("Sex_Menu_Enabled", data.thirdParam);				}
			else if (data.secondParam === "acMenu") 						{	localStorage.setItem("AC_Menu_Enabled", data.thirdParam);				}
			else if (data.secondParam === "mascFem") 						{	localStorage.setItem("MascFem_Slider_Enabled", data.thirdParam);		}
			else if (data.secondParam === "thinThicc") 						{	localStorage.setItem("ThinThicc_Slider_Enabled", data.thirdParam);		}
			else if (data.secondParam === "smolTall") 						{	localStorage.setItem("SmolTall_Slider_Enabled", data.thirdParam);		}
			else if (data.secondParam === "inanimateObjectsMenu") 			{	localStorage.setItem("Inanimate_Objects_Enabled", data.thirdParam);		}
			else if (data.secondParam === "custom1") 						{	localStorage.setItem("Custom_Slider1_Enabled", data.thirdParam);		}
			else if (data.secondParam === "custom2") 						{	localStorage.setItem("Custom_Slider2_Enabled", data.thirdParam);		}
			else if (data.secondParam === "custom3") 						{	localStorage.setItem("Custom_Slider3_Enabled", data.thirdParam);		}
			else if (data.secondParam === "fireLoadSliderSettingsFunction") {	loadSliderSettings();
																				loadCustomSlidersValuesOnStartup1("Yes");
																				loadCustomSlidersValuesOnStartup2("Yes");
																				loadCustomSlidersValuesOnStartup3("Yes");								}
		}
		else if (data.firstParam === "changeSliderName") {
			x = data.thirdParam;
			if (x === "") { 
				x = "&nbsp;"; 
				}
			if (data.secondParam === "Custom1Left") {	
				document.getElementById('textinmenuLeftCS1').innerHTML = x;
				localStorage.setItem("Custom_Slider1_LeftText", x);
			}
			else if (data.secondParam === "Custom1Middle") {	
				document.getElementById('textinmenuCenterCS1').innerHTML = x;
				localStorage.setItem("Custom_Slider1_CenterText", x);
			}
			else if (data.secondParam === "Custom1Right") {	
				document.getElementById('textinmenuRightCS1').innerHTML = x;
				localStorage.setItem("Custom_Slider1_RightText", x);
			}
			else if (data.secondParam === "Custom2Left") {	
				document.getElementById('textinmenuLeftCS2').innerHTML = x;
				localStorage.setItem("Custom_Slider2_LeftText", x);
			}
			else if (data.secondParam === "Custom2Middle") {	
				document.getElementById('textinmenuCenterCS2').innerHTML = x;
				localStorage.setItem("Custom_Slider2_CenterText", x);
			}
			else if (data.secondParam === "Custom2Right") {	
				document.getElementById('textinmenuRightCS2').innerHTML = x;
				localStorage.setItem("Custom_Slider2_RightText", x);
			}
			else if (data.secondParam === "Custom3Left") {	
				document.getElementById('textinmenuLeftCS3').innerHTML = x;
				localStorage.setItem("Custom_Slider3_LeftText", x);
			}
			else if (data.secondParam === "Custom3Middle") {	
				document.getElementById('textinmenuCenterCS3').innerHTML = x;
				localStorage.setItem("Custom_Slider3_CenterText", x);
			}
			else if (data.secondParam === "Custom3Right") {	
				document.getElementById('textinmenuRightCS3').innerHTML = x;
				localStorage.setItem("Custom_Slider3_RightText", x);
			}
		}
		else if (data.firstParam === "Username") {
			if (master === "true") {
				document.getElementById('CONTROLmasterMessageSubName').innerHTML = "You're connected to " + data.secondParam + ".";
			}
			else {
				document.getElementById('CONTROLsubMessageMasterName').innerHTML = data.secondParam + " is connected to you.";
			}
		}
		else if (data.firstParam === "Unlock_Settings") {
			openLockStage3();
		}
		else if (data.firstParam === "Lock_Settings") {
			closeLock();
		}
		else if (data.firstParam === "Toggle_Admin_Mode") {
			toggleAdminModeFunction();
		}
		else if (data.firstParam === "Change_Lock_Password") {
			localStorage.setItem("Current_Password", data.secondParam);
			localStorage.setItem("Lock_Settings_Password_Enabled", "Yes");
		}
		else if (data.firstParam === "toggleAdvSettings") {
			toggleAdvancedSettingsMenu();
		}
    });	
}

function attachEvents() {
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

function sliderHandleAnimation() {
	if (master === "false") {
		var x = document.getElementsByClassName("dhxsl_runner");
		var i;
		for (i = 0; i < x.length; i++) {
		x[i].style.transitionDuration = "0.5s";
		}
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
		document.getElementById("CONTROLmasterContainer").style.maxHeight='340px';
		document.getElementById("CONTROLmasterContainer").style.border='3px solid rgb(255, 69, 80)';
	}
}

function attachEventsToSliders() {
	mySlider6.attachEvent("onSlideEnd", function() { // Masc/Fem slider
   	var value = mySlider6.getValue();
	conn.send({firstParam: "manipulateSlider", secondParam:"mascFem", thirdParam: value});
});
	mySlider5.attachEvent("onSlideEnd", function() { // Thin/Thicc slider
   	var value = mySlider5.getValue();
	conn.send({firstParam: "manipulateSlider", secondParam:"thinThicc", thirdParam: value});
});
	mySlider4.attachEvent("onSlideEnd", function() { // Smol/Tall slider
   	var value = mySlider4.getValue();
	conn.send({firstParam: "manipulateSlider", secondParam:"smolTall", thirdParam: value});
});
	mySlider3.attachEvent("onSlideEnd", function() { // Hips slider
   	var value = mySlider3.getValue();
	conn.send({firstParam: "manipulateSlider", secondParam:"hips", thirdParam: value});
});
	mySlider2.attachEvent("onSlideEnd", function() { // Genital Size slider
   	var value = mySlider2.getValue();
	conn.send({firstParam: "manipulateSlider", secondParam:"genitalSize", thirdParam: value});
});
	mySlider.attachEvent("onSlideEnd", function() { // Fluffiness slider
   	var value = mySlider.getValue();
	conn.send({firstParam: "manipulateSlider", secondParam:"fluffiness", thirdParam: value});
});
	mySlider7.attachEvent("onSlideEnd", function() { // Libido slider
   	var value = mySlider7.getValue();
	conn.send({firstParam: "manipulateSlider", secondParam:"libido", thirdParam: value});
});
	mySlider10.attachEvent("onSlideEnd", function() { // Position Preference slider
   	var value = mySlider10.getValue();
	conn.send({firstParam: "manipulateSlider", secondParam:"domsub", thirdParam: value});
});
	mySlider11.attachEvent("onSlideEnd", function() { // Sensitivity slider
   	var value = mySlider11.getValue();
	conn.send({firstParam: "manipulateSlider", secondParam:"sensitivity", thirdParam: value});
});
	mySlider12.attachEvent("onSlideEnd", function() { // Demeanor slider
   	var value = mySlider12.getValue();
	conn.send({firstParam: "manipulateSlider", secondParam:"assertiveShy", thirdParam: value});
});
	mySlider9.attachEvent("onSlideEnd", function() { // Breast Size Male slider
   	var value = mySlider9.getValue();
	conn.send({firstParam: "manipulateSlider", secondParam:"breastSizeMale", thirdParam: value});
});
	mySlider8.attachEvent("onSlideEnd", function() { // Breast Size Female slider
   	var value = mySlider8.getValue();
	conn.send({firstParam: "manipulateSlider", secondParam:"breastSizeFemale", thirdParam: value});
});
	mySlider13.attachEvent("onSlideEnd", function() { // Butt Size slider
   	var value = mySlider13.getValue();
	conn.send({firstParam: "manipulateSlider", secondParam:"buttSize", thirdParam: value});
});
	mySlider14.attachEvent("onSlideEnd", function() { // Belly Size slider
   	var value = mySlider14.getValue();
	conn.send({firstParam: "manipulateSlider", secondParam:"bellySize", thirdParam: value});
});
	mySlider15.attachEvent("onSlideEnd", function() { // Belly Shape slider
   	var value = mySlider15.getValue();
	conn.send({firstParam: "manipulateSlider", secondParam:"bellyShape", thirdParam: value});
});
	mySlider16.attachEvent("onSlideEnd", function() { // Intelligence slider
   	var value = mySlider16.getValue();
	conn.send({firstParam: "manipulateSlider", secondParam:"intelligence", thirdParam: value});
});
	mySlider20.attachEvent("onSlideEnd", function() { // Hair Lenght slider
   	var value = mySlider20.getValue();
	conn.send({firstParam: "manipulateSlider", secondParam:"hairLenght", thirdParam: value});
});
	mySlider21.attachEvent("onSlideEnd", function() { // Sexuality slider
   	var value = mySlider21.getValue();
	conn.send({firstParam: "manipulateSlider", secondParam:"sexuality", thirdParam: value});
});
	mySlider22.attachEvent("onSlideEnd", function() { // Feral/Anthro slider
   	var value = mySlider22.getValue();
	conn.send({firstParam: "manipulateSlider", secondParam:"feralAnthro", thirdParam: value});
});
	mySlider23.attachEvent("onSlideEnd", function() { // Fertility slider
   	var value = mySlider23.getValue();
	conn.send({firstParam: "manipulateSlider", secondParam:"fertility", thirdParam: value});
});
	mySlider17.attachEvent("onSlideEnd", function() { // Custom 1 slider
   	var value = mySlider17.getValue();
	conn.send({firstParam: "manipulateSlider", secondParam:"custom1", thirdParam: value});
});
	mySlider18.attachEvent("onSlideEnd", function() { // Custom 2 slider
   	var value = mySlider18.getValue();
	conn.send({firstParam: "manipulateSlider", secondParam:"custom2", thirdParam: value});
});
	mySlider19.attachEvent("onSlideEnd", function() { // Custom 3 slider
   	var value = mySlider19.getValue();
	conn.send({firstParam: "manipulateSlider", secondParam:"custom3", thirdParam: value});
});

}

function attachEventsToOptions() {
	document.getElementById("speciesCurrent").addEventListener('DOMSubtreeModified', function() {
		var species = document.getElementById("speciesCurrent").innerHTML;
		conn.send({firstParam: "manipulateOption", secondParam: "Species", thirdParam: species});
	});
	document.getElementById("inanimateObjectsCurrent").addEventListener('DOMSubtreeModified', function() {
		var inanimateObject = document.getElementById("inanimateObjectsCurrent").innerHTML;
		conn.send({firstParam: "manipulateOption", secondParam: "Inanimate_Object", thirdParam: inanimateObject});
	});
	document.getElementById("cockTypeCurrent").addEventListener('DOMSubtreeModified', function() {
		var cockType = document.getElementById("cockTypeCurrent").innerHTML;
		conn.send({firstParam: "manipulateOption", secondParam: "Cock_Type", thirdParam: cockType});
	});
	document.getElementById("hairColorCurrent").addEventListener('DOMSubtreeModified', function() {
		var hairColor = localStorage.getItem("Slot0_Hair_Color");
		var swatchColor = localStorage.getItem("Slot0_Swatch_Color");
		conn.send({firstParam: "manipulateOption", secondParam: "Hair_Color", thirdParam: hairColor, fourthParam: swatchColor});
	});
	document.getElementById("radiobuttonMale").addEventListener("click", function(){
		conn.send({firstParam: "manipulateOption", secondParam: "Sex", thirdParam: "Male"});
	});
	document.getElementById("radiobuttonFemale").addEventListener("click", function(){
		conn.send({firstParam: "manipulateOption", secondParam: "Sex", thirdParam: "Female"});
	});
	document.getElementById("radiobuttonOther").addEventListener("click", function(){
		conn.send({firstParam: "manipulateOption", secondParam: "Sex", thirdParam: "Other"});
	});
	document.getElementById("advancedSettings").addEventListener("click", function(){
		conn.send({firstParam: "toggleAdvSettings"});
	});
}

function attachEventsToTickboxes() {
	document.getElementById("adaptClothingCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("adaptClothingCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "manipulateTickbox", secondParam: "Adapt_Clothing", thirdParam: tickbox});
	});
	document.getElementById("genitalsPenisCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("genitalsPenisCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "manipulateTickbox", secondParam: "Genitals_Penis", thirdParam: tickbox});
	});
	document.getElementById("genitalsVaginaCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("genitalsVaginaCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "manipulateTickbox", secondParam: "Genitals_Vagina", thirdParam: tickbox});
	});
	document.getElementById("pregnancyLockCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("pregnancyLockCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "manipulateTickbox", secondParam: "Pregnancy_Lock", thirdParam: tickbox});
	});
}

function attachEventsToVisibiltyOptions() {
	document.getElementById("speciesCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("speciesCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "optionEnabled", secondParam: "speciesMenu", thirdParam: tickbox});
		conn.send({firstParam: "optionEnabled", secondParam: "fireLoadSliderSettingsFunction"});
	});
	document.getElementById("sexCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("sexCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "optionEnabled", secondParam: "sexMenu", thirdParam: tickbox});
		conn.send({firstParam: "optionEnabled", secondParam: "fireLoadSliderSettingsFunction"});
	});
	document.getElementById("toggleAdaptClothingCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("toggleAdaptClothingCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "optionEnabled", secondParam: "acMenu", thirdParam: tickbox});
		conn.send({firstParam: "optionEnabled", secondParam: "fireLoadSliderSettingsFunction"});
	});
	document.getElementById("mascFemCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("mascFemCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "optionEnabled", secondParam: "mascFem", thirdParam: tickbox});
		conn.send({firstParam: "optionEnabled", secondParam: "fireLoadSliderSettingsFunction"});
	});
	document.getElementById("thinThiccCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("thinThiccCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "optionEnabled", secondParam: "thinThicc", thirdParam: tickbox});
		conn.send({firstParam: "optionEnabled", secondParam: "fireLoadSliderSettingsFunction"});
	});
	document.getElementById("smolTallCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("smolTallCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "optionEnabled", secondParam: "smolTall", thirdParam: tickbox});
		conn.send({firstParam: "optionEnabled", secondParam: "fireLoadSliderSettingsFunction"});
	});
	document.getElementById("genitalsCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("genitalsCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "optionEnabled", secondParam: "genitalsMenu", thirdParam: tickbox});
		conn.send({firstParam: "optionEnabled", secondParam: "fireLoadSliderSettingsFunction"});
	});
	document.getElementById("inanimateObjectsCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("inanimateObjectsCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "optionEnabled", secondParam: "inanimateObjectsMenu", thirdParam: tickbox});
		conn.send({firstParam: "optionEnabled", secondParam: "fireLoadSliderSettingsFunction"});
	});
	document.getElementById("buttSizeSliderCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("buttSizeSliderCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "optionEnabled", secondParam: "buttSize", thirdParam: tickbox});
		conn.send({firstParam: "optionEnabled", secondParam: "fireLoadSliderSettingsFunction"});
	});
	document.getElementById("bellySizeSliderCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("bellySizeSliderCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "optionEnabled", secondParam: "bellySize", thirdParam: tickbox});
		conn.send({firstParam: "optionEnabled", secondParam: "fireLoadSliderSettingsFunction"});
	});
	document.getElementById("bellyShapeSliderCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("bellyShapeSliderCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "optionEnabled", secondParam: "bellyShape", thirdParam: tickbox});
		conn.send({firstParam: "optionEnabled", secondParam: "fireLoadSliderSettingsFunction"});
	});
	document.getElementById("hipsSliderCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("hipsSliderCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "optionEnabled", secondParam: "hips", thirdParam: tickbox});
		conn.send({firstParam: "optionEnabled", secondParam: "fireLoadSliderSettingsFunction"});
	});
	document.getElementById("hairColorMenuCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("hairColorMenuCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "optionEnabled", secondParam: "hairColor", thirdParam: tickbox});
		conn.send({firstParam: "optionEnabled", secondParam: "fireLoadSliderSettingsFunction"});
	});
	document.getElementById("hairLenghtSliderCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("hairLenghtSliderCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "optionEnabled", secondParam: "hairLenght", thirdParam: tickbox});
		conn.send({firstParam: "optionEnabled", secondParam: "fireLoadSliderSettingsFunction"});
	});
	document.getElementById("genitalSizeSliderCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("genitalSizeSliderCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "optionEnabled", secondParam: "genitalSize", thirdParam: tickbox});
		conn.send({firstParam: "optionEnabled", secondParam: "fireLoadSliderSettingsFunction"});
	});
	document.getElementById("cockTypeMenuCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("cockTypeMenuCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "optionEnabled", secondParam: "cockType", thirdParam: tickbox});
		conn.send({firstParam: "optionEnabled", secondParam: "fireLoadSliderSettingsFunction"});
	});
	document.getElementById("libidoSliderCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("libidoSliderCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "optionEnabled", secondParam: "libido", thirdParam: tickbox});
		conn.send({firstParam: "optionEnabled", secondParam: "fireLoadSliderSettingsFunction"});
	});
	document.getElementById("sensitivitySliderCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("sensitivitySliderCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "optionEnabled", secondParam: "sensitivity", thirdParam: tickbox});
		conn.send({firstParam: "optionEnabled", secondParam: "fireLoadSliderSettingsFunction"});
	});
	document.getElementById("demeanorSliderCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("demeanorSliderCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "optionEnabled", secondParam: "demeanor", thirdParam: tickbox});
		conn.send({firstParam: "optionEnabled", secondParam: "fireLoadSliderSettingsFunction"});
	});
	document.getElementById("positionPreferenceSliderCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("positionPreferenceSliderCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "optionEnabled", secondParam: "positionPref", thirdParam: tickbox});
		conn.send({firstParam: "optionEnabled", secondParam: "fireLoadSliderSettingsFunction"});
	});
	document.getElementById("intelligenceSliderCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("intelligenceSliderCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "optionEnabled", secondParam: "intelligence", thirdParam: tickbox});
		conn.send({firstParam: "optionEnabled", secondParam: "fireLoadSliderSettingsFunction"});
	});
	document.getElementById("sexualitySliderCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("sexualitySliderCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "optionEnabled", secondParam: "sexuality", thirdParam: tickbox});
		conn.send({firstParam: "optionEnabled", secondParam: "fireLoadSliderSettingsFunction"});
	});
	document.getElementById("fertilitySliderCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("fertilitySliderCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "optionEnabled", secondParam: "fertility", thirdParam: tickbox});
		conn.send({firstParam: "optionEnabled", secondParam: "fireLoadSliderSettingsFunction"});
	});
	document.getElementById("fluffinessSliderCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("fluffinessSliderCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "optionEnabled", secondParam: "fluffiness", thirdParam: tickbox});
		conn.send({firstParam: "optionEnabled", secondParam: "fireLoadSliderSettingsFunction"});
	});
	document.getElementById("feralAnthroSliderCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("feralAnthroSliderCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "optionEnabled", secondParam: "feralAnthro", thirdParam: tickbox});
		conn.send({firstParam: "optionEnabled", secondParam: "fireLoadSliderSettingsFunction"});
	});
	document.getElementById("customSlider1Checkbox").addEventListener("click", function(){
		var tickbox = document.getElementById("customSlider1Checkbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "optionEnabled", secondParam: "custom1", thirdParam: tickbox});
		conn.send({firstParam: "optionEnabled", secondParam: "fireLoadSliderSettingsFunction"});
	});
	document.getElementById("customSlider2Checkbox").addEventListener("click", function(){
		var tickbox = document.getElementById("customSlider2Checkbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "optionEnabled", secondParam: "custom2", thirdParam: tickbox});
		conn.send({firstParam: "optionEnabled", secondParam: "fireLoadSliderSettingsFunction"});
	});
	document.getElementById("customSlider3Checkbox").addEventListener("click", function(){
		var tickbox = document.getElementById("customSlider3Checkbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "optionEnabled", secondParam: "custom3", thirdParam: tickbox});
		conn.send({firstParam: "optionEnabled", secondParam: "fireLoadSliderSettingsFunction"});
	});
}

function sendUsernameSleep() {
	setTimeout(sendUsername, 400);
}

function sendUsername() {
	var username = localStorage.getItem("Username");
	conn.send({firstParam: "Username", secondParam: username});
}

function CONTROLchangeSubsPassword() {
	var password = document.getElementById("CONTROLchangeSubsPasswordTextField").value;
	if (password === "") {
		CONTROLpleaseProvidePassword();
	}
	else {
		conn.send({firstParam: "Change_Lock_Password", secondParam: password});
		goBackCONTROLchangeSubsPassword();
	}
}

function CONTROLpleaseProvidePassword() {
	document.getElementById('CONTROLchangeSubsPasswordMessage').innerHTML = ">Error: Please provide password!";
	document.getElementById('CONTROLchangeSubsPasswordMessage').style.color = "#FF4550";
	setTimeout (CONTROLpleaseProvidePasswordStage2, 2500);
}

function CONTROLpleaseProvidePasswordStage2() {
	document.getElementById('CONTROLchangeSubsPasswordMessage').innerHTML = "Enter password:";
	document.getElementById('CONTROLchangeSubsPasswordMessage').style.color = "#FFFFFF";
}

function CONTROLunlockSubsSettings() {
	conn.send({firstParam: "Unlock_Settings"});
}

function CONTROLlockSubsSettings() {
	conn.send({firstParam: "Lock_Settings"});
}

function CONTROLturnAdminMode() {
	conn.send({firstParam: "Toggle_Admin_Mode"});
}

function CONTROLshowConnectToServer() {
	document.getElementById("CONTROLButton").style.padding='0px';
	document.getElementById("CONTROLButton").style.border='0';
	document.getElementById("CONTROLButton").style.fontSize='0px';
	document.getElementById("CONTROLButton").style.marginTop='0px';
	document.getElementById("CONTROLconnectToServerContainer").style.maxHeight='230px';
}

function CONTROLgoBack() {
	document.getElementById("CONTROLButton").style.padding='10px';
	document.getElementById("CONTROLButton").style.border="2px solid #59568f";
	document.getElementById("CONTROLButton").style.fontSize='26px';
	document.getElementById("CONTROLButton").style.marginTop='5px';
	document.getElementById("CONTROLconnectToServerContainer").style.maxHeight='0px';
}

function CONTROLshowChoice() {
	if (isConnected == null) {
		document.getElementById("CONTROLconnectToServerStatus").innerHTML = "Click 'Connect to server' button!";
		document.getElementById("CONTROLconnectToServerStatus").style.color = "#FF4550";
		setTimeout(hideConnectToServerMessage, 1500);
	}
	else {
		document.getElementById("CONTROLconnectToServerContainer").style.maxHeight='0px';
		document.getElementById("CONTROLchoiceContainer").style.maxHeight='140px';
	}
}

function hideConnectToServerMessage() {
	if (isConnected == null) {
		document.getElementById("CONTROLconnectToServerStatus").innerHTML = "Status:";
		document.getElementById("CONTROLconnectToServerStatus").style.color = "#fff";
	}
	else {
		return;
	}	
}

function CONTROLgoBackFromChoice() {
	document.getElementById("CONTROLconnectToServerContainer").style.maxHeight='230px';
	document.getElementById("CONTROLchoiceContainer").style.maxHeight='0px';
}

function CONTROLshowConnectOptions() {
	document.getElementById("CONTROLchoiceContainer").style.maxHeight='0px';
	document.getElementById("CONTROLconnectContainer").style.maxHeight='230px';
}

function CONTROLgoBackFromConnectOptions() {
	document.getElementById("CONTROLconnectContainer").style.maxHeight='0px';
	document.getElementById("CONTROLchoiceContainer").style.maxHeight='140px';
}

function CONTROLshowReveiveOptions() {
	document.getElementById("CONTROLchoiceContainer").style.maxHeight='0px';
	document.getElementById("CONTROLreceiveContainer").style.maxHeight='190px';
}

function CONTROLgoBackFromReceiveOptions() {
	document.getElementById("CONTROLreceiveContainer").style.maxHeight='0px';
	document.getElementById("CONTROLchoiceContainer").style.maxHeight='140px';
}

function CONTROLgoToChangeSubLockPassword() {
	document.getElementById("CONTROLmasterContainer").style.maxHeight='0px';
	document.getElementById("CONTROLmasterContainer").style.border='0';
	document.getElementById("CONTROLchangeSubsPasswordContainer").style.maxHeight='139px';
}

function goBackCONTROLchangeSubsPassword() {
	document.getElementById("CONTROLmasterContainer").style.maxHeight='340px';
	document.getElementById("CONTROLmasterContainer").style.border='3px solid rgb(255, 69, 80)';
	document.getElementById("CONTROLchangeSubsPasswordContainer").style.maxHeight='0px';
}

function CONTROLcopyPeerID (containerid) {
	var message = document.getElementById("peerIDCopyMessage").innerHTML;
	if (isHosting == null) {
		document.getElementById("peerIDCopyMessage").innerHTML = "Click 'Host' button!";
		document.getElementById("peerIDCopyMessage").style.color = "#FF4550";
		setTimeout(hideCopyPeerIDMessage, 1500, message);
	}
	else {	
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
	document.getElementById("peerIDCopyMessage").innerHTML = "Copied!";
	document.getElementById("peerIDCopyMessage").style.color = "#29a329";
	setTimeout(hideCopyPeerIDMessage, 1500, message);
	}
}

function hideCopyPeerIDMessage(message) {
	if (isHosting == null) {
		document.getElementById("peerIDCopyMessage").innerHTML = message;
		document.getElementById("peerIDCopyMessage").style.color = "#fff";
	}
	else if (message === "Waiting for connection...") {
		document.getElementById("peerIDCopyMessage").innerHTML = "Waiting for connection...";
		document.getElementById("peerIDCopyMessage").style.color = "#fff";
	}
	else {
		return;
	}
}