var peer;
var conn;
var master;
var controlsessionactive;
var isHosting;
var isConnected;
var synchronizationComplete;

function connectToServer() {
	if (peer == null) {
		var chosenPeerJSServer = 2;
		// 0 = PeerJS server hosted on localhost.
		// 1 = Official PeerJS server. Very unstable, often giving "Server has reached its concurrent user limit" error.
		// 2 = PeerJS server hosted on Heroku. https://www.heroku.com/
		
		// Command to launch PeerJS server // peerjs --port 9000 --key peerjs --path /myapp
		
		if (chosenPeerJSServer == 0) {
			peer = new Peer({	
				host: 'localhost',	
				port: 9000,	
				path: '/myapp'
			});
		}
		else if (chosenPeerJSServer == 1) {
			peer = new Peer({
				config: {
					iceServers: [
						{ url: 'stun:stun.l.google.com:19302' },
						{ url: 'turn:numb.viagenie.ca', username: 'webrtc@live.com', credential: 'muazkh'},
					]
				},	
			});
		}
		else if (chosenPeerJSServer == 2) {
			peer = new Peer({
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
		}
		
		document.getElementById('CONTROLconnectToServerStatus').innerHTML = "Status: Connecting...";
		document.getElementById("CONTROLconnectToServerStatus").style.color = "#fff";
	
		peer.on('open', function(id) {
			document.getElementById('peerID').innerHTML = id;
			document.getElementById('CONTROLconnectToServerStatus').innerHTML = "Status: Connected to server! You shall pass.";
			document.getElementById("CONTROLconnectToServerStatus").style.color = "#29a329";
			document.getElementById('CONTROLconnectToPeerStatus').innerHTML = "Status: Connected to server! You shall pass.";
			document.getElementById("CONTROLconnectToPeerStatus").style.color = "#29a329";
			document.getElementById("CONTROLproceedButton").style.backgroundColor='#282640';
			document.getElementById("CONTROLproceedButton").style.border='2px solid #59568f';
			document.getElementById("CONTROLproceedButton").style.cursor='pointer';
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
		var fertility = mySlider23.getValue();
		
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
		conn.send({firstParam: "manipulateSlider", secondParam: "fertility", thirdParam: fertility});
		
		// Options
		var species = document.getElementById("speciesCurrent").innerHTML;
		var inanimateObject = document.getElementById("inanimateObjectsCurrent").innerHTML;
		var cockType = document.getElementById("cockTypeCurrent").innerHTML;
		var sex = localStorage.getItem("Slot0_Sex");
		var thirdSex = localStorage.getItem("Slot0_Third_Sex");
		
		conn.send({firstParam: "manipulateOption", secondParam: "Species", thirdParam: species});		
		conn.send({firstParam: "manipulateOption", secondParam: "Inanimate_Object", thirdParam: inanimateObject});
		conn.send({firstParam: "manipulateOption", secondParam: "Cock_Type", thirdParam: cockType});
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
		
		// Custom stuff
		// Custom sliders
		// Values
		var custom1 = CustomSliderNo1.getValue();
		var custom2 = CustomSliderNo2.getValue();
		var custom3 = CustomSliderNo3.getValue();
		var custom4 = CustomSliderNo4.getValue();
		var custom5 = CustomSliderNo5.getValue();
		var custom6 = CustomSliderNo6.getValue();
		var custom7 = CustomSliderNo7.getValue();
		var custom8 = CustomSliderNo8.getValue();
		var custom9 = CustomSliderNo9.getValue();
		var custom10 = CustomSliderNo10.getValue();
		
		conn.send({firstParam: "manipulateCustomSlider", secondParam: "1", thirdParam: custom1});
		conn.send({firstParam: "manipulateCustomSlider", secondParam: "2", thirdParam: custom2});
		conn.send({firstParam: "manipulateCustomSlider", secondParam: "3", thirdParam: custom3});
		conn.send({firstParam: "manipulateCustomSlider", secondParam: "4", thirdParam: custom4});
		conn.send({firstParam: "manipulateCustomSlider", secondParam: "5", thirdParam: custom5});
		conn.send({firstParam: "manipulateCustomSlider", secondParam: "6", thirdParam: custom6});
		conn.send({firstParam: "manipulateCustomSlider", secondParam: "7", thirdParam: custom7});
		conn.send({firstParam: "manipulateCustomSlider", secondParam: "8", thirdParam: custom8});
		conn.send({firstParam: "manipulateCustomSlider", secondParam: "9", thirdParam: custom9});
		conn.send({firstParam: "manipulateCustomSlider", secondParam: "10", thirdParam: custom10});
		
		// Labels
		var x;
		for (x = 1; x < 11; x++) {
			var leftText = document.getElementById("textinmenuLeftCS" + x).innerText;
			var centerText = document.getElementById("textinmenuCenterCS" + x).innerText;
			var rightText = document.getElementById("textinmenuRightCS" + x).innerText;
			
			conn.send({firstParam: "changeCustomSliderLabel", secondParam: x, thirdParam: leftText, fourthParam: centerText, fifthParam: rightText});
		}
		
		// Visibility
		var x;
		for (x = 1; x < 11; x++) {
			var isSliderEnabled = localStorage.getItem("Custom_Slider" + x + "_Enabled");
			conn.send({firstParam: "customSliderEnabled", secondParam: x, thirdParam: isSliderEnabled});
		}
		
		// Custom checkboxes 
		// State		
		var tickbox = document.getElementById("CC1value1Checkbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "manipulateCustomTickbox", secondParam: "Custom_Checkbox1_Value1", thirdParam: tickbox});
				
		var tickbox = document.getElementById("CC1value2Checkbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "manipulateCustomTickbox", secondParam: "Custom_Checkbox1_Value2", thirdParam: tickbox});

		var tickbox = document.getElementById("CC2value1Checkbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "manipulateCustomTickbox", secondParam: "Custom_Checkbox2_Value1", thirdParam: tickbox});

		var tickbox = document.getElementById("CC2value2Checkbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "manipulateCustomTickbox", secondParam: "Custom_Checkbox2_Value2", thirdParam: tickbox});

		var tickbox = document.getElementById("CC3value1Checkbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "manipulateCustomTickbox", secondParam: "Custom_Checkbox3_Value1", thirdParam: tickbox});

		var tickbox = document.getElementById("CC3value2Checkbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "manipulateCustomTickbox", secondParam: "Custom_Checkbox3_Value2", thirdParam: tickbox});
		
		// Labels and value names
		var CC1label = localStorage.getItem("Slot0_Custom_Checkbox1_Label");
		var CC1value1 = localStorage.getItem("Slot0_Custom_Checkbox1_Value1");
		var CC1value2 = localStorage.getItem("Slot0_Custom_Checkbox1_Value2");
		
		var CC2label = localStorage.getItem("Slot0_Custom_Checkbox2_Label");
		var CC2value1 = localStorage.getItem("Slot0_Custom_Checkbox2_Value1");
		var CC2value2 = localStorage.getItem("Slot0_Custom_Checkbox2_Value2");
		
		var CC3label = localStorage.getItem("Slot0_Custom_Checkbox3_Label");
		var CC3value1 = localStorage.getItem("Slot0_Custom_Checkbox3_Value1");
		var CC3value2 = localStorage.getItem("Slot0_Custom_Checkbox3_Value2");
		
		conn.send({firstParam: "changeCustomCheckbox", secondParam: "Custom1Label", thirdParam: CC1label});
		conn.send({firstParam: "changeCustomCheckbox", secondParam: "Custom1Value1", thirdParam: CC1value1});
		conn.send({firstParam: "changeCustomCheckbox", secondParam: "Custom1Value2", thirdParam: CC1value2});
		
		conn.send({firstParam: "changeCustomCheckbox", secondParam: "Custom2Label", thirdParam: CC2label});
		conn.send({firstParam: "changeCustomCheckbox", secondParam: "Custom2Value1", thirdParam: CC2value1});
		conn.send({firstParam: "changeCustomCheckbox", secondParam: "Custom2Value2", thirdParam: CC2value2});
		
		conn.send({firstParam: "changeCustomCheckbox", secondParam: "Custom3Label", thirdParam: CC3label});
		conn.send({firstParam: "changeCustomCheckbox", secondParam: "Custom3Value1", thirdParam: CC3value1});
		conn.send({firstParam: "changeCustomCheckbox", secondParam: "Custom3Value2", thirdParam: CC3value2});
		
		// Visibility
		var x;
		for (x = 1; x < 4; x++) {
			var isCheckboxEnabled = localStorage.getItem("Slot0_Custom_Checkbox" + x + "_Enabled");
			conn.send({firstParam: "customCheckboxEnabled", secondParam: x, thirdParam: isCheckboxEnabled});
		}
		
		// Custom radio inputs 
		// State
		var input = document.getElementById("radiobuttonCustom1Value1");
		if (input.checked)	{	conn.send({firstParam: "manipulateCustomRadioInput", secondParam: 1, thirdParam: 1}) }
		
		var input = document.getElementById("radiobuttonCustom1Value2");
		if (input.checked)	{	conn.send({firstParam: "manipulateCustomRadioInput", secondParam: 1, thirdParam: 2}) }
		
		var input = document.getElementById("radiobuttonCustom2Value1");
		if (input.checked)	{	conn.send({firstParam: "manipulateCustomRadioInput", secondParam: 2, thirdParam: 1}) }
		
		var input = document.getElementById("radiobuttonCustom2Value2");
		if (input.checked)	{	conn.send({firstParam: "manipulateCustomRadioInput", secondParam: 2, thirdParam: 2}) }
		
		var input = document.getElementById("radiobuttonCustom3Value1");
		if (input.checked)	{	conn.send({firstParam: "manipulateCustomRadioInput", secondParam: 3, thirdParam: 1}) }
		
		var input = document.getElementById("radiobuttonCustom3Value2");
		if (input.checked)	{	conn.send({firstParam: "manipulateCustomRadioInput", secondParam: 3, thirdParam: 2}) }
		
		// Labels and value names
		var CRI1label = localStorage.getItem("Slot0_Custom_Radio_Input1_Label");
		var CRI1value1 = localStorage.getItem("Slot0_Custom_Radio_Input1_Value1");
		var CRI1value2 = localStorage.getItem("Slot0_Custom_Radio_Input1_Value2");
		
		var CRI2label = localStorage.getItem("Slot0_Custom_Radio_Input2_Label");
		var CRI2value1 = localStorage.getItem("Slot0_Custom_Radio_Input2_Value1");
		var CRI2value2 = localStorage.getItem("Slot0_Custom_Radio_Input2_Value2");
		
		var CRI3label = localStorage.getItem("Slot0_Custom_Radio_Input3_Label");
		var CRI3value1 = localStorage.getItem("Slot0_Custom_Radio_Input3_Value1");
		var CRI3value2 = localStorage.getItem("Slot0_Custom_Radio_Input3_Value2");
		
		conn.send({firstParam: "changeCustomRadioInput", secondParam: "Custom1Label", thirdParam: CRI1label});
		conn.send({firstParam: "changeCustomRadioInput", secondParam: "Custom1Value1", thirdParam: CRI1value1});
		conn.send({firstParam: "changeCustomRadioInput", secondParam: "Custom1Value2", thirdParam: CRI1value2});
		
		conn.send({firstParam: "changeCustomRadioInput", secondParam: "Custom2Label", thirdParam: CRI2label});
		conn.send({firstParam: "changeCustomRadioInput", secondParam: "Custom2Value1", thirdParam: CRI2value1});
		conn.send({firstParam: "changeCustomRadioInput", secondParam: "Custom2Value2", thirdParam: CRI2value2});
		
		conn.send({firstParam: "changeCustomRadioInput", secondParam: "Custom3Label", thirdParam: CRI3label});
		conn.send({firstParam: "changeCustomRadioInput", secondParam: "Custom3Value1", thirdParam: CRI3value1});
		conn.send({firstParam: "changeCustomRadioInput", secondParam: "Custom3Value2", thirdParam: CRI3value2});
		
		// Visibility
		var x;
		for (x = 1; x < 4; x++) {
			var isRadioInputEnabled = localStorage.getItem("Slot0_Custom_Radio_Input" + x + "_Enabled");
			conn.send({firstParam: "customRadioInputEnabled", secondParam: x, thirdParam: isRadioInputEnabled});
		}
		
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
		var fertilitySliderEnabled = localStorage.getItem("Fertility_Slider_Enabled");
		var genitalsMenuEnabled = localStorage.getItem("Genitals_Menu_Enabled");
		var speciesMenuEnabled = localStorage.getItem("Species_Menu_Enabled");
		var sexMenuEnabled = localStorage.getItem("Sex_Menu_Enabled");
		var acMenuEnabled = localStorage.getItem("AC_Menu_Enabled");
		var mascFemSliderEnabled = localStorage.getItem("MascFem_Slider_Enabled");
		var thinThiccSliderEnabled = localStorage.getItem("ThinThicc_Slider_Enabled");
		var smolTallSliderEnabled = localStorage.getItem("SmolTall_Slider_Enabled");
		var inanimateObjectsMenuEnabled = localStorage.getItem("Inanimate_Objects_Enabled");
		
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
		conn.send({firstParam: "optionEnabled", secondParam: "fertility", thirdParam: fertilitySliderEnabled});
		conn.send({firstParam: "optionEnabled", secondParam: "genitalsMenu", thirdParam: genitalsMenuEnabled});
		conn.send({firstParam: "optionEnabled", secondParam: "speciesMenu", thirdParam: speciesMenuEnabled});
		conn.send({firstParam: "optionEnabled", secondParam: "sexMenu", thirdParam: sexMenuEnabled});
		conn.send({firstParam: "optionEnabled", secondParam: "acMenu", thirdParam: acMenuEnabled});
		conn.send({firstParam: "optionEnabled", secondParam: "mascFem", thirdParam: mascFemSliderEnabled});
		conn.send({firstParam: "optionEnabled", secondParam: "thinThicc", thirdParam: thinThiccSliderEnabled});
		conn.send({firstParam: "optionEnabled", secondParam: "smolTall", thirdParam: smolTallSliderEnabled});
		conn.send({firstParam: "optionEnabled", secondParam: "inanimateObjectsMenu", thirdParam: inanimateObjectsMenuEnabled});
		
		conn.send({firstParam: "optionEnabled", secondParam: "loadSliderSettings"});
		conn.send({firstParam: "customSliderEnabled", secondParam: "loadCustomSliders"});		
		conn.send({firstParam: "customCheckboxEnabled", secondParam: "loadCustomCheckboxes"});
		conn.send({firstParam: "customRadioInputEnabled", secondParam: "loadCustomRadioInputs"});
		
		// Admin mode status sync		
		var isAdminModeOn = localStorage.getItem("Admin_mode_on");
		conn.send({firstParam: "Admin_Mode_Status", secondParam: isAdminModeOn});
		
		// Sync Advanced Settings menu (opened/closed)
		var advSettings = document.getElementById("AdvancedSettingsContainer").style.maxHeight;
		conn.send({firstParam: "advSettings", secondParam: advSettings});
		
		// CharViz sync		
		var charVizEnabled = localStorage.getItem("CharViz_Enabled");
		if (charVizEnabled === "Yes") {
			
			// Character parts
			var body = localStorage.getItem("Slot0_CharViz_Body");
			var head = localStorage.getItem("Slot0_CharViz_Head");
			var tail = localStorage.getItem("Slot0_CharViz_Tail");
			var wings = localStorage.getItem("Slot0_CharViz_Wings");
			var pupils = localStorage.getItem("Slot0_CharViz_Pupils");
			
			conn.send({firstParam: "changeCharacterPart", secondParam: "Body", thirdParam: body});
			conn.send({firstParam: "changeCharacterPart", secondParam: "Head", thirdParam: head});
			conn.send({firstParam: "changeCharacterPart", secondParam: "Tail", thirdParam: tail});
			conn.send({firstParam: "changeCharacterPart", secondParam: "Wings", thirdParam: wings});
			conn.send({firstParam: "changeCharacterPart", secondParam: "Pupils", thirdParam: pupils});
			
			// Character patterns
			var secondary = localStorage.getItem("Slot0_CharViz_Secondary");
			var tertiary = localStorage.getItem("Slot0_CharViz_Tertiary");
			var markings = localStorage.getItem("Slot0_CharViz_Markings");
			
			conn.send({firstParam: "changeCharacterPattern", secondParam: "Secondary", thirdParam: secondary});
			conn.send({firstParam: "changeCharacterPattern", secondParam: "Tertiary", thirdParam: tertiary});
			conn.send({firstParam: "changeCharacterPattern", secondParam: "Markings", thirdParam: markings});
			
			// Clothing		
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
			
			conn.send({firstParam: "putClothingOn", secondParam: "Topwear", thirdParam: topwear});
			conn.send({firstParam: "putClothingOn", secondParam: "Bottomwear", thirdParam: bottomwear});
			conn.send({firstParam: "putClothingOn", secondParam: "Armwear", thirdParam: armwear});
			conn.send({firstParam: "putClothingOn", secondParam: "Legwear", thirdParam: legwear});
			conn.send({firstParam: "putClothingOn", secondParam: "Underwear", thirdParam: underwear});
			conn.send({firstParam: "putClothingOn", secondParam: "Accessories", thirdParam: accessories});
			
			// Character colors			
			var primaryCharColor = localStorage.getItem("Slot0_Primary_Character_Color");
			var secondaryCharColor = localStorage.getItem("Slot0_Secondary_Character_Color");
			var tertiaryCharColor = localStorage.getItem("Slot0_Tertiary_Character_Color");
			var markingsCharColor = localStorage.getItem("Slot0_Markings_Character_Color");
			var leftEyeCharColor = localStorage.getItem("Slot0_LeftEye_Character_Color");
			var rightEyeCharColor = localStorage.getItem("Slot0_RightEye_Character_Color");
			var hairCharColor = localStorage.getItem("Slot0_Hair_Character_Color");
			var leftScleraCharColor = localStorage.getItem("Slot0_LeftSclera_Character_Color");
			var rightScleraCharColor = localStorage.getItem("Slot0_RightSclera_Character_Color");
			
			conn.send({firstParam: "setCharacterColor", secondParam: "Primary", thirdParam: primaryCharColor});
			conn.send({firstParam: "setCharacterColor", secondParam: "Secondary", thirdParam: secondaryCharColor});
			conn.send({firstParam: "setCharacterColor", secondParam: "Tertiary", thirdParam: tertiaryCharColor});
			conn.send({firstParam: "setCharacterColor", secondParam: "Markings", thirdParam: markingsCharColor});
			conn.send({firstParam: "setCharacterColor", secondParam: "Left Eye", thirdParam: leftEyeCharColor});
			conn.send({firstParam: "setCharacterColor", secondParam: "Right Eye", thirdParam: rightEyeCharColor});
			conn.send({firstParam: "setCharacterColor", secondParam: "Hair", thirdParam: hairCharColor});
			conn.send({firstParam: "setCharacterColor", secondParam: "Left Sclera", thirdParam: leftScleraCharColor});
			conn.send({firstParam: "setCharacterColor", secondParam: "Right Sclera", thirdParam: rightScleraCharColor});
			
			// Outfit colors			
			var primaryTopwearColor = document.getElementById("charVizDisplayTopwearPrimary").style.backgroundColor;
			var secondaryTopwearColor = document.getElementById("charVizDisplayTopwearSecondary").style.backgroundColor;
			var primaryBottomwearColor = document.getElementById("charVizDisplayBottomwearPrimary").style.backgroundColor;
			var secondaryBottomwearColor = document.getElementById("charVizDisplayBottomwearSecondary").style.backgroundColor;
			var primaryArmearColor = document.getElementById("charVizDisplayArmwearPrimary").style.backgroundColor;
			var secondaryArmwearColor = document.getElementById("charVizDisplayArmwearSecondary").style.backgroundColor;
			var primaryLegwearColor = document.getElementById("charVizDisplayLegwearPrimary").style.backgroundColor;
			var secondaryLegwearColor = document.getElementById("charVizDisplayLegwearSecondary").style.backgroundColor;
			var primaryUnderwearColor = document.getElementById("charVizDisplayUnderwearPrimary").style.backgroundColor;
			var secondaryUnderwearColor = document.getElementById("charVizDisplayUnderwearSecondary").style.backgroundColor;			
			
			conn.send({firstParam: "setOutfitColor", secondParam: "Topwear Primary", thirdParam: primaryTopwearColor});
			conn.send({firstParam: "setOutfitColor", secondParam: "Topwear Secondary", thirdParam: secondaryTopwearColor});
			conn.send({firstParam: "setOutfitColor", secondParam: "Bottomwear Primary", thirdParam: primaryBottomwearColor});
			conn.send({firstParam: "setOutfitColor", secondParam: "Bottomwear Secondary", thirdParam: secondaryBottomwearColor});
			conn.send({firstParam: "setOutfitColor", secondParam: "Armwear Primary", thirdParam: primaryArmearColor});
			conn.send({firstParam: "setOutfitColor", secondParam: "Armwear Secondary", thirdParam: secondaryArmwearColor});
			conn.send({firstParam: "setOutfitColor", secondParam: "Legwear Primary", thirdParam: primaryLegwearColor});
			conn.send({firstParam: "setOutfitColor", secondParam: "Legwear Secondary", thirdParam: secondaryLegwearColor});
			conn.send({firstParam: "setOutfitColor", secondParam: "Underwear Primary", thirdParam: primaryUnderwearColor});
			conn.send({firstParam: "setOutfitColor", secondParam: "Underwear Secondary", thirdParam: secondaryUnderwearColor});
						
			// Breast Size body morph			
			if (sex == "Male" || sex == "Femboy") {
				conn.send({firstParam: "manipulateSlider", secondParam: "breastSizeMale", thirdParam: breastSizeMale});
			}
			else {
				conn.send({firstParam: "manipulateSlider", secondParam: "breastSizeFemale", thirdParam: breastSizeFemale});
			}
			
			conn.send({firstParam: "initializeCharviz"});
		}
		conn.send({firstParam: "Synchronization_Complete"});
	}

function receiveData() {	
	conn.on('data', function(data) {
		if (master != "true") { CONTROLchangelog(data) }
		if (data.firstParam === "manipulateSlider") {
			if (data.secondParam === "mascFem") 				{	mySlider6.setValue(data.thirdParam);localStorage.setItem("Slot0_Body_Type1", data.thirdParam);				}
			else if (data.secondParam === "thinThicc") 			{	mySlider5.setValue(data.thirdParam);localStorage.setItem("Slot0_Body_Type2", data.thirdParam);				
																	var x = localStorage.getItem("CharViz_Enabled");if (x === "Yes"){setThinThiccBodyMorph(data.thirdParam);  }	}
			else if (data.secondParam === "smolTall") 			{	mySlider4.setValue(data.thirdParam);localStorage.setItem("Slot0_Body_Type3", data.thirdParam);				}
			else if (data.secondParam === "hips") 				{	mySlider3.setValue(data.thirdParam);localStorage.setItem("Slot0_Hips", data.thirdParam);					}	
			else if (data.secondParam === "genitalSize") 		{	mySlider2.setValue(data.thirdParam);localStorage.setItem("Slot0_Genital_Size", data.thirdParam);
																	var x = localStorage.getItem("CharViz_Enabled");if (x === "Yes"){setGenitalSize(data.thirdParam); }			}
			else if (data.secondParam === "fluffiness")			{	mySlider.setValue(data.thirdParam);localStorage.setItem("Slot0_Fluffiness", data.thirdParam);				}
			else if (data.secondParam === "libido") 			{	mySlider7.setValue(data.thirdParam);localStorage.setItem("Slot0_Libido", data.thirdParam);					}
			else if (data.secondParam === "domsub") 			{	mySlider10.setValue(data.thirdParam);localStorage.setItem("Slot0_Position_Preference", data.thirdParam);	}
			else if (data.secondParam === "sensitivity") 		{	mySlider11.setValue(data.thirdParam);localStorage.setItem("Slot0_Sensitivity", data.thirdParam);			}
			else if (data.secondParam === "assertiveShy") 		{	mySlider12.setValue(data.thirdParam);localStorage.setItem("Slot0_Demeanor", data.thirdParam);				}
			else if (data.secondParam === "breastSizeMale") 	{	mySlider9.setValue(data.thirdParam);localStorage.setItem("Slot0_Breast_Size_Male", data.thirdParam);	
																	var x = localStorage.getItem("CharViz_Enabled");if (x === "Yes"){setBreastSizeBodyMorph(data.thirdParam); }	}
			else if (data.secondParam === "breastSizeFemale")	{	mySlider8.setValue(data.thirdParam);localStorage.setItem("Slot0_Breast_Size_Female", data.thirdParam);		
																	var x = localStorage.getItem("CharViz_Enabled");if (x === "Yes"){setBreastSizeBodyMorph(data.thirdParam); }	}
			else if (data.secondParam === "buttSize") 			{	mySlider13.setValue(data.thirdParam);localStorage.setItem("Slot0_Butt_Size", data.thirdParam);				}
			else if (data.secondParam === "bellySize") 			{	mySlider14.setValue(data.thirdParam);localStorage.setItem("Slot0_Belly_Size", data.thirdParam);				}
			else if (data.secondParam === "bellyShape")			{	mySlider15.setValue(data.thirdParam);localStorage.setItem("Slot0_Belly_Shape", data.thirdParam);			}
			else if (data.secondParam === "intelligence")		{	mySlider16.setValue(data.thirdParam);localStorage.setItem("Slot0_Intelligence", data.thirdParam);			}
			else if (data.secondParam === "hairLenght") 		{	mySlider20.setValue(data.thirdParam);localStorage.setItem("Slot0_Hair_Lenght", data.thirdParam);			
																	var x = localStorage.getItem("CharViz_Enabled");if (x === "Yes"){setHairLenght(data.thirdParam); }			}
			else if (data.secondParam === "fertility") 			{	mySlider23.setValue(data.thirdParam);localStorage.setItem("Slot0_Fertility", data.thirdParam);				}
		}
		else if (data.firstParam === "manipulateCustomSlider") {
			if (data.secondParam === "1") 		{	CustomSliderNo1.setValue(data.thirdParam)	}
			else if (data.secondParam === "2") 	{	CustomSliderNo2.setValue(data.thirdParam)	}
			else if (data.secondParam === "3") 	{	CustomSliderNo3.setValue(data.thirdParam)	}
			else if (data.secondParam === "4") 	{	CustomSliderNo4.setValue(data.thirdParam)	}
			else if (data.secondParam === "5") 	{	CustomSliderNo5.setValue(data.thirdParam)	}
			else if (data.secondParam === "6") 	{	CustomSliderNo6.setValue(data.thirdParam)	}
			else if (data.secondParam === "7") 	{	CustomSliderNo7.setValue(data.thirdParam)	}
			else if (data.secondParam === "8") 	{	CustomSliderNo8.setValue(data.thirdParam)	}
			else if (data.secondParam === "9") 	{	CustomSliderNo9.setValue(data.thirdParam)	}
			else if (data.secondParam === "10") {	CustomSliderNo10.setValue(data.thirdParam)	}
			localStorage.setItem("Slot0_Custom_Slider" + data.secondParam + "_Value", data.thirdParam)
		}
		else if (data.firstParam === "manipulateOption") {
			if (data.secondParam === "Species") 				{	
				document.getElementById('speciesCurrent').innerHTML = data.thirdParam;
				localStorage.setItem("Slot0_Species", data.thirdParam);
				var charVizEnabled = localStorage.getItem("CharViz_Enabled");
				if (charVizEnabled === "Yes") {
					var x = document.getElementById("charVizDisplayMessage")
					if (x.style.display === "block") { initializeCharViz(); }
				}
			}
			else if (data.secondParam === "Inanimate_Object")	{	document.getElementById('inanimateObjectsCurrent').innerHTML = data.thirdParam;localStorage.setItem("Slot0_Inanimate_Object", data.thirdParam);	}
			else if (data.secondParam === "Cock_Type")			{	document.getElementById('cockTypeCurrent').innerHTML = data.thirdParam;localStorage.setItem("Slot0_Cock_Type", data.thirdParam); 				}
			else if (data.secondParam === "Sex") 				{
				var uwu;
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
					uwu = mySlider9.getValue();
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
					uwu = mySlider8.getValue();
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
					uwu = mySlider8.getValue();
				}
				setBreastSizeBodyMorph(uwu);
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
		else if (data.firstParam === "manipulateCustomTickbox") {
			if (data.secondParam === "Custom_Checkbox1_Value1") {
				localStorage.setItem("Slot0_Custom_Checkbox1_Value1_Ticked", data.thirdParam);
				if (data.thirdParam === "Yes") 	{	document.getElementById("CC1value1Checkbox").checked = true;	}
				else							{	document.getElementById("CC1value1Checkbox").checked = false;	}
			}
			else if (data.secondParam === "Custom_Checkbox1_Value2") {
				localStorage.setItem("Slot0_Custom_Checkbox1_Value2_Ticked", data.thirdParam);
				if (data.thirdParam === "Yes") 	{	document.getElementById("CC1value2Checkbox").checked = true;	}
				else							{	document.getElementById("CC1value2Checkbox").checked = false;	}
			}
			else if (data.secondParam === "Custom_Checkbox2_Value1") {
				localStorage.setItem("Slot0_Custom_Checkbox2_Value1_Ticked", data.thirdParam);
				if (data.thirdParam === "Yes") 	{	document.getElementById("CC2value1Checkbox").checked = true;	}
				else							{	document.getElementById("CC2value1Checkbox").checked = false;	}
			}
			else if (data.secondParam === "Custom_Checkbox2_Value2") {
				localStorage.setItem("Slot0_Custom_Checkbox2_Value2_Ticked", data.thirdParam);
				if (data.thirdParam === "Yes") 	{	document.getElementById("CC2value2Checkbox").checked = true;	}
				else							{	document.getElementById("CC2value2Checkbox").checked = false;	}
			}
			else if (data.secondParam === "Custom_Checkbox3_Value1") {
				localStorage.setItem("Slot0_Custom_Checkbox3_Value1_Ticked", data.thirdParam);
				if (data.thirdParam === "Yes") 	{	document.getElementById("CC3value1Checkbox").checked = true;	}
				else							{	document.getElementById("CC3value1Checkbox").checked = false;	}
			}
			else if (data.secondParam === "Custom_Checkbox3_Value2") {
				localStorage.setItem("Slot0_Custom_Checkbox3_Value2_Ticked", data.thirdParam);
				if (data.thirdParam === "Yes") 	{	document.getElementById("CC3value2Checkbox").checked = true;	}
				else							{	document.getElementById("CC3value2Checkbox").checked = false;	}
			}
		}
		else if (data.firstParam === "manipulateCustomRadioInput") {
			localStorage.setItem("Slot0_Custom_Radio_Input" + data.secondParam + "_Ticked_Value", data.thirdParam);
			document.getElementById("radiobuttonCustom" + data.secondParam + "Value" + data.thirdParam).checked = true;
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
			else if (data.secondParam === "fertility") 						{	localStorage.setItem("Fertility_Slider_Enabled", data.thirdParam);		}
			else if (data.secondParam === "genitalsMenu") 					{	localStorage.setItem("Genitals_Menu_Enabled", data.thirdParam);			}
			else if (data.secondParam === "speciesMenu") 					{	localStorage.setItem("Species_Menu_Enabled", data.thirdParam);			}
			else if (data.secondParam === "sexMenu")						{	localStorage.setItem("Sex_Menu_Enabled", data.thirdParam);				}
			else if (data.secondParam === "acMenu") 						{	localStorage.setItem("AC_Menu_Enabled", data.thirdParam);				}
			else if (data.secondParam === "mascFem") 						{	localStorage.setItem("MascFem_Slider_Enabled", data.thirdParam);		}
			else if (data.secondParam === "thinThicc") 						{	localStorage.setItem("ThinThicc_Slider_Enabled", data.thirdParam);		}
			else if (data.secondParam === "smolTall") 						{	localStorage.setItem("SmolTall_Slider_Enabled", data.thirdParam);		}
			else if (data.secondParam === "inanimateObjectsMenu") 			{	localStorage.setItem("Inanimate_Objects_Enabled", data.thirdParam);		}
			else if (data.secondParam === "loadSliderSettings") 			{	loadSliderSettings()													}																			
		}
		else if (data.firstParam === "customSliderEnabled") {
			if (data.secondParam === "loadCustomSliders") {
				loadCustomSliders()
			}
			else {
				localStorage.setItem("Custom_Slider" + data.secondParam + "_Enabled", data.thirdParam)
			}
		}
		else if (data.firstParam === "customCheckboxEnabled") {
			if (data.secondParam === "loadCustomCheckboxes") {
				loadCustomCheckboxes()
			}
			else {
				localStorage.setItem("Slot0_Custom_Checkbox" + data.secondParam + "_Enabled", data.thirdParam)
			}
		}
		else if (data.firstParam === "customRadioInputEnabled") {
			if (data.secondParam === "loadCustomRadioInputs") {
				loadCustomRadioInputs()
			}
			else {
				localStorage.setItem("Slot0_Custom_Radio_Input" + data.secondParam + "_Enabled", data.thirdParam)
			}
		}
		else if (data.firstParam === "changeCustomSliderLabel") {
			leftLabel = data.thirdParam;
			centerLabel = data.fourthParam;
			rightLabel = data.fifthParam;
						
			document.getElementById("textinmenuLeftCS" + data.secondParam).innerHTML = leftLabel;
			document.getElementById("textinmenuCenterCS" + data.secondParam).innerHTML = centerLabel;
			document.getElementById("textinmenuRightCS" + data.secondParam).innerHTML = rightLabel;
			
			localStorage.setItem("Custom_Slider" + data.secondParam + "_LeftText", leftLabel);
			localStorage.setItem("Custom_Slider" + data.secondParam + "_CenterText", centerLabel);
			localStorage.setItem("Custom_Slider" + data.secondParam + "_RightText", rightLabel);
		}
		else if (data.firstParam === "changeCustomCheckbox") {
			if (data.secondParam === "Custom1Label")			{	localStorage.setItem("Slot0_Custom_Checkbox1_Label", data.thirdParam)		}
			else if (data.secondParam === "Custom1Value1")		{	localStorage.setItem("Slot0_Custom_Checkbox1_Value1", data.thirdParam)		}
			else if (data.secondParam === "Custom1Value2")		{	localStorage.setItem("Slot0_Custom_Checkbox1_Value2", data.thirdParam)		}
			else if (data.secondParam === "Custom2Label")		{	localStorage.setItem("Slot0_Custom_Checkbox2_Label", data.thirdParam)		}
			else if (data.secondParam === "Custom2Value1")		{	localStorage.setItem("Slot0_Custom_Checkbox2_Value1", data.thirdParam)		}
			else if (data.secondParam === "Custom2Value2")		{	localStorage.setItem("Slot0_Custom_Checkbox2_Value2", data.thirdParam)		}
			else if (data.secondParam === "Custom3Label")		{	localStorage.setItem("Slot0_Custom_Checkbox3_Label", data.thirdParam)		}
			else if (data.secondParam === "Custom3Value1")		{	localStorage.setItem("Slot0_Custom_Checkbox3_Value1", data.thirdParam)		}
			else if (data.secondParam === "Custom3Value2")		{	localStorage.setItem("Slot0_Custom_Checkbox3_Value2", data.thirdParam)		}
		}
		else if (data.firstParam === "changeCustomRadioInput") {
			if (data.secondParam === "Custom1Label")			{	localStorage.setItem("Slot0_Custom_Radio_Input1_Label", data.thirdParam)	}
			else if (data.secondParam === "Custom1Value1")		{	localStorage.setItem("Slot0_Custom_Radio_Input1_Value1", data.thirdParam)	}
			else if (data.secondParam === "Custom1Value2")		{	localStorage.setItem("Slot0_Custom_Radio_Input1_Value2", data.thirdParam)	}
			else if (data.secondParam === "Custom2Label")		{	localStorage.setItem("Slot0_Custom_Radio_Input2_Label", data.thirdParam)	}
			else if (data.secondParam === "Custom2Value1")		{	localStorage.setItem("Slot0_Custom_Radio_Input2_Value1", data.thirdParam)	}
			else if (data.secondParam === "Custom2Value2")		{	localStorage.setItem("Slot0_Custom_Radio_Input2_Value2", data.thirdParam)	}
			else if (data.secondParam === "Custom3Label")		{	localStorage.setItem("Slot0_Custom_Radio_Input3_Label", data.thirdParam)	}
			else if (data.secondParam === "Custom3Value1")		{	localStorage.setItem("Slot0_Custom_Radio_Input3_Value1", data.thirdParam)	}
			else if (data.secondParam === "Custom3Value2")		{	localStorage.setItem("Slot0_Custom_Radio_Input3_Value2", data.thirdParam)	}
		}
		// CharViz related stuff
		else if (data.firstParam === "changeCharacterPart") {
			saveCharacterPart(data.secondParam, data.thirdParam);
		}
		else if (data.firstParam === "changeCharacterPattern") {
			saveCharacterPattern(data.secondParam, data.thirdParam);
		}
		else if (data.firstParam === "putClothingOn") {
			charVizPutClothingOn(data.secondParam, data.thirdParam);
		}
		else if (data.firstParam === "setCharacterColor") {
			if (data.secondParam === "Primary") {
				document.getElementById("charVizDisplayBasePrimary").style.backgroundColor = data.thirdParam;
				document.getElementById("charVizDisplayTailPrimary").style.backgroundColor = data.thirdParam;
				document.getElementById("charVizDisplayHeadPrimary").style.backgroundColor = data.thirdParam;
				document.getElementById("charVizDisplayBreastSizePrimary").style.backgroundColor = data.thirdParam;
				document.getElementById("charVizDisplayWingsPrimary").style.backgroundColor = data.thirdParam;
				document.getElementById("charVizDisplayInanimateTFprimary").style.backgroundColor = data.thirdParam;
				document.getElementById("charVizPrimaryCharacterColorSwatch").style.backgroundColor = data.thirdParam;
				localStorage.setItem("Slot0_Primary_Character_Color", data.thirdParam);
			}
			else if (data.secondParam === "Secondary") {
				document.getElementById("charVizDisplayBaseSecondary").style.backgroundColor = data.thirdParam;
				document.getElementById("charVizDisplayBreastSizeSecondary").style.backgroundColor = data.thirdParam;
				document.getElementById("charVizDisplayTailSecondary").style.backgroundColor = data.thirdParam;
				document.getElementById("charVizDisplayHeadSecondary").style.backgroundColor = data.thirdParam;
				document.getElementById("charVizDisplayGenitalsSecondary").style.backgroundColor = data.thirdParam;
				document.getElementById("charVizDisplayInanimateTFsecondary").style.backgroundColor = data.thirdParam;
				document.getElementById("charVizSecondaryCharacterColorSwatch").style.backgroundColor = data.thirdParam;
				localStorage.setItem("Slot0_Secondary_Character_Color", data.thirdParam);
			}
			else if (data.secondParam === "Tertiary") {
				document.getElementById("charVizDisplayBaseTertiary").style.backgroundColor = data.thirdParam;
				document.getElementById("charVizDisplayTailTertiary").style.backgroundColor = data.thirdParam;
				document.getElementById("charVizDisplayHeadTertiary").style.backgroundColor = data.thirdParam;
				document.getElementById("charVizTertiaryCharacterColorSwatch").style.backgroundColor = data.thirdParam;
				localStorage.setItem("Slot0_Tertiary_Character_Color", data.thirdParam);
			}
			else if (data.secondParam === "Markings") {
				document.getElementById("charVizDisplayBaseMarkings").style.backgroundColor = data.thirdParam;	
				document.getElementById("charVizDisplayBreastSizeMarkings").style.backgroundColor = data.thirdParam;
				document.getElementById("charVizDisplayWingsMarkings").style.backgroundColor = data.thirdParam;
				document.getElementById("charVizDisplayGenitalsMarkings").style.backgroundColor = data.thirdParam;
				document.getElementById("charVizMarkingsCharacterColorSwatch").style.backgroundColor = data.thirdParam;
				localStorage.setItem("Slot0_Markings_Character_Color", data.thirdParam);
			}
			else if (data.secondParam === "Left Eye") {
				document.getElementById("charVizLeftEyeCharacterColorSwatch").style.backgroundColor = data.thirdParam;
				document.getElementById("charVizDisplayHeadIrisLeft").style.backgroundColor = data.thirdParam;
				localStorage.setItem("Slot0_LeftEye_Character_Color", data.thirdParam);
			}
			else if (data.secondParam === "Right Eye") {
				document.getElementById("charVizRightEyeCharacterColorSwatch").style.backgroundColor = data.thirdParam;
				document.getElementById("charVizDisplayHeadIrisRight").style.backgroundColor = data.thirdParam;
				localStorage.setItem("Slot0_RightEye_Character_Color", data.thirdParam);
			}
			else if (data.secondParam === "Hair") {
				document.getElementById("charVizHairCharacterColorSwatch").style.backgroundColor = data.thirdParam;
				document.getElementById("charVizDisplayHeadHairPrimary").style.backgroundColor = data.thirdParam;
				document.getElementById("charVizDisplayHairBackPrimary").style.backgroundColor = data.thirdParam;
				localStorage.setItem("Slot0_Hair_Character_Color", data.thirdParam);
			}
			else if (data.secondParam === "Left Sclera") {
				document.getElementById("charVizLeftScleraCharacterColorSwatch").style.backgroundColor = data.thirdParam;
				document.getElementById("charVizDisplayHeadScleraLeft").style.backgroundColor = data.thirdParam;
				localStorage.setItem("Slot0_LeftSclera_Character_Color", data.thirdParam);
			}
			else if (data.secondParam === "Right Sclera") {
				document.getElementById("charVizRightScleraCharacterColorSwatch").style.backgroundColor = data.thirdParam;
				document.getElementById("charVizDisplayHeadScleraRight").style.backgroundColor = data.thirdParam;
				localStorage.setItem("Slot0_RightSclera_Character_Color", data.thirdParam);
			}
		}
		else if (data.firstParam === "setOutfitColor") {
			if (data.secondParam === "Topwear Primary") {
				document.getElementById("charVizTopwearPrimaryColorSwatch").style.backgroundColor = data.thirdParam;
				document.getElementById("charVizDisplayTopwearPrimary").style.backgroundColor = data.thirdParam;
				document.getElementById("charVizDisplayTopwearBreastSizePrimary").style.backgroundColor = data.thirdParam;
				localStorage.setItem("Slot0_Topwear_Primary_Clothing_Color", data.thirdParam);
			}
			else if (data.secondParam === "Topwear Secondary") {
				document.getElementById("charVizTopwearSecondaryColorSwatch").style.backgroundColor = data.thirdParam;
				document.getElementById("charVizDisplayTopwearSecondary").style.backgroundColor = data.thirdParam;
				document.getElementById("charVizDisplayTopwearBreastSizeSecondary").style.backgroundColor = data.thirdParam;
				localStorage.setItem("Slot0_Topwear_Secondary_Clothing_Color", data.thirdParam);
			}
			else if (data.secondParam === "Bottomwear Primary") {
				document.getElementById("charVizBottomwearPrimaryColorSwatch").style.backgroundColor = data.thirdParam;
				document.getElementById("charVizDisplayBottomwearPrimary").style.backgroundColor = data.thirdParam;
				localStorage.setItem("Slot0_Bottomwear_Primary_Clothing_Color", data.thirdParam);
			}
			else if (data.secondParam === "Bottomwear Secondary") {
				document.getElementById("charVizBottomwearSecondaryColorSwatch").style.backgroundColor = data.thirdParam;
				document.getElementById("charVizDisplayBottomwearSecondary").style.backgroundColor = data.thirdParam;
				localStorage.setItem("Slot0_Bottomwear_Secondary_Clothing_Color", data.thirdParam);
			}
			else if (data.secondParam === "Armwear Primary") {
				document.getElementById("charVizArmwearPrimaryColorSwatch").style.backgroundColor = data.thirdParam;
				document.getElementById("charVizDisplayArmwearPrimary").style.backgroundColor = data.thirdParam;
				localStorage.setItem("Slot0_Armwear_Primary_Clothing_Color", data.thirdParam);
			}
			else if (data.secondParam === "Armwear Secondary") {
				document.getElementById("charVizArmwearSecondaryColorSwatch").style.backgroundColor = data.thirdParam;
				document.getElementById("charVizDisplayArmwearSecondary").style.backgroundColor = data.thirdParam;
				localStorage.setItem("Slot0_Armwear_Secondary_Clothing_Color", data.thirdParam);
			}
			else if (data.secondParam === "Legwear Primary") {
				document.getElementById("charVizLegwearPrimaryColorSwatch").style.backgroundColor = data.thirdParam;
				document.getElementById("charVizDisplayLegwearPrimary").style.backgroundColor = data.thirdParam;
				localStorage.setItem("Slot0_Legwear_Primary_Clothing_Color", data.thirdParam);
			}
			else if (data.secondParam === "Legwear Secondary") {
				document.getElementById("charVizLegwearSecondaryColorSwatch").style.backgroundColor = data.thirdParam;
				document.getElementById("charVizDisplayLegwearSecondary").style.backgroundColor = data.thirdParam;
				localStorage.setItem("Slot0_Legwear_Secondary_Clothing_Color", data.thirdParam);
			}
			else if (data.secondParam === "Underwear Primary") {
				document.getElementById("charVizUnderwearPrimaryColorSwatch").style.backgroundColor = data.thirdParam;
				document.getElementById("charVizDisplayUnderwearPrimary").style.backgroundColor = data.thirdParam;
				localStorage.setItem("Slot0_Underwear_Primary_Clothing_Color", data.thirdParam);
			}
			else if (data.secondParam === "Underwear Secondary") {
				document.getElementById("charVizUnderwearSecondaryColorSwatch").style.backgroundColor = data.thirdParam;
				document.getElementById("charVizDisplayUnderwearSecondary").style.backgroundColor = data.thirdParam;
				localStorage.setItem("Slot0_Underwear_Secondary_Clothing_Color", data.thirdParam);
			}
		}
		else if (data.firstParam === "initializeCharviz") {
			initializeCharViz();
		}
		else if (data.firstParam === "loadCharacterParts") {
			loadCharacterParts();
		}
		else if (data.firstParam === "loadCharacterPatterns") {
			loadCharacterPatterns();
		}
		else if (data.firstParam === "loadCharacterGenitals") {
			loadCharacterGenitals();
		}
		// CharViz related stuff end
		else if (data.firstParam === "Username") {
			if (master === "true") {
				document.getElementById('CONTROLmasterMessageSubName').innerHTML = "You're connected to " + data.secondParam + "."
			}
			else {
				document.getElementById('CONTROLsubMessageMasterName').innerHTML = data.secondParam + " is connected to you."
			}
		}
		else if (data.firstParam === "Unlock_Settings") {
			openLockStage3()
		}
		else if (data.firstParam === "Lock_Settings") {
			closeLock();
		}
		else if (data.firstParam === "Toggle_Admin_Mode") {
			toggleAdminMode();
		}
		else if (data.firstParam === "Change_Lock_Password") {
			localStorage.setItem("Current_Password", data.secondParam);
			localStorage.setItem("Lock_Settings_Password_Enabled", "Yes");
		}
		else if (data.firstParam === "toggleAdvSettings") {
			toggleMainMenus(0)
		}
		else if (data.firstParam === "advSettings") {
			document.getElementById("AdvancedSettingsContainer").style.maxHeight = data.secondParam
		}
		else if (data.firstParam === "Admin_Mode_Status") {
			var isAdminOn = document.getElementById("adminPermsText");
			if (data.secondParam === "Yes") {
				isAdminOn.style.display = "block";
				document.getElementById('defaultcss').href='css/admindhtmlxslider.css';
				localStorage.setItem("Admin_mode_on", "Yes");
			}
			else {
				isAdminOn.style.display = "none";
				document.getElementById('defaultcss').href='css/dhtmlxslider.css';
				localStorage.setItem("Admin_mode_on", "No");				
			}
		}
		else if (data.firstParam === "Synchronization_Complete") {
			synchronizationComplete = "Yes"
		}
		else if (data.firstParam === "CONTROLchat") {
			var chatHistory = document.getElementById("CONTROLchatlog").innerHTML;
			document.getElementById("CONTROLchatlog").innerHTML = data.secondParam + ": " + data.thirdParam + "<br>" + chatHistory
		}			
	});
}

function CONTROLchangelog(data) {
	var logEntry;
	if (data.firstParam === "manipulateSlider")	{
		var sliderName;
		var increasedOrDecreased = "decreased";
		var currentValue;
		
		if (data.secondParam === "mascFem") {
			sliderName = "Masc/Fem";
			currentValue = mySlider6.getValue();
			if (currentValue < data.thirdParam) { increasedOrDecreased = "increased" }
		}
		else if (data.secondParam === "thinThicc") {
			sliderName = "Thin/Thicc";
			currentValue = mySlider5.getValue();
			if (currentValue < data.thirdParam) { increasedOrDecreased = "increased" }
		}
		else if (data.secondParam === "smolTall") {
			sliderName = "Smol/Tall";
			currentValue = mySlider4.getValue();
			if (currentValue < data.thirdParam) { increasedOrDecreased = "increased" }
		}
		else if (data.secondParam === "hips") {
			sliderName = "Hips";
			currentValue = mySlider3.getValue();
			if (currentValue < data.thirdParam) { increasedOrDecreased = "increased" }
		}
		else if (data.secondParam === "genitalSize") {
			sliderName = "Genital Size";
			currentValue = mySlider2.getValue();
			if (currentValue < data.thirdParam) { increasedOrDecreased = "increased" }
		}
		else if (data.secondParam === "fluffiness") {
			sliderName = "Fluffiness";
			currentValue = mySlider.getValue();
			if (currentValue < data.thirdParam) { increasedOrDecreased = "increased" }
		}
		else if (data.secondParam === "libido") {
			sliderName = "Libido";
			currentValue = mySlider7.getValue();
			if (currentValue < data.thirdParam) { increasedOrDecreased = "increased" }
		}
		else if (data.secondParam === "domsub") {
			sliderName = "Dom/Sub";
			currentValue = mySlider10.getValue();
			if (currentValue < data.thirdParam) { increasedOrDecreased = "increased" }
		}
		else if (data.secondParam === "sensitivity") {
			sliderName = "Sensitivity";
			currentValue = mySlider11.getValue();
			if (currentValue < data.thirdParam) { increasedOrDecreased = "increased" }
		}
		else if (data.secondParam === "assertiveShy") {
			sliderName = "Demeanor";
			currentValue = mySlider12.getValue();
			if (currentValue < data.thirdParam) { increasedOrDecreased = "increased" }
		}
		else if (data.secondParam === "breastSizeMale") {
			sliderName = "Breast Size";
			currentValue = mySlider9.getValue();
			if (currentValue < data.thirdParam) { increasedOrDecreased = "increased" }
		}
		else if (data.secondParam === "breastSizeFemale") {
			sliderName = "Breast Size";
			currentValue = mySlider8.getValue();
			if (currentValue < data.thirdParam) { increasedOrDecreased = "increased" }
		}
		else if (data.secondParam === "buttSize") {
			sliderName = "Butt Size";
			currentValue = mySlider13.getValue();
			if (currentValue < data.thirdParam) { increasedOrDecreased = "increased" }
		}
		else if (data.secondParam === "bellySize") {
			sliderName = "Belly Size";
			currentValue = mySlider14.getValue();
			if (currentValue < data.thirdParam) { increasedOrDecreased = "increased" }
		}
		else if (data.secondParam === "bellyShape") {
			sliderName = "Belly Shape";
			currentValue = mySlider15.getValue();
			if (currentValue < data.thirdParam) { increasedOrDecreased = "increased" }
		}
		else if (data.secondParam === "intelligence") {
			sliderName = "Intelligence";
			currentValue = mySlider16.getValue();
			if (currentValue < data.thirdParam) { increasedOrDecreased = "increased" }
		}
		else if (data.secondParam === "hairLenght") {
			sliderName = "Hair Lenght";
			currentValue = mySlider20.getValue();
			if (currentValue < data.thirdParam) { increasedOrDecreased = "increased" }
		}
		else if (data.secondParam === "fertility") {
			sliderName = "Fertility";
			currentValue = mySlider20.getValue();
			if (currentValue < data.thirdParam) { increasedOrDecreased = "increased" }
		}
		
		logEntry = sliderName + " slider " + increasedOrDecreased + " to " + data.thirdParam
	}
	else if (data.firstParam === "manipulateCustomSlider")	{
		var sliderName;
		var increasedOrDecreased = "decreased";
		var currentValue;
		
		if (data.secondParam === "1") {
			currentValue = CustomSliderNo1.getValue();			
		}
		else if (data.secondParam === "2") {
			currentValue = CustomSliderNo2.getValue();
		}
		else if (data.secondParam === "3") {
			currentValue = CustomSliderNo3.getValue();
		}
		else if (data.secondParam === "4") {
			currentValue = CustomSliderNo4.getValue();
		}
		else if (data.secondParam === "5") {
			currentValue = CustomSliderNo5.getValue();
		}
		else if (data.secondParam === "6") {
			currentValue = CustomSliderNo6.getValue();
		}
		else if (data.secondParam === "7") {
			currentValue = CustomSliderNo7.getValue();
		}
		else if (data.secondParam === "8") {
			currentValue = CustomSliderNo8.getValue();
		}
		else if (data.secondParam === "9") {
			currentValue = CustomSliderNo9.getValue();
		}
		else if (data.secondParam === "10") {
			currentValue = CustomSliderNo10.getValue();
		}
		
		if (currentValue < data.thirdParam) { increasedOrDecreased = "increased" }
		
		// Get custom slider name
		var leftLabel;
		var rightLabel;
				
		sliderName = localStorage.getItem("Custom_Slider" + data.secondParam + "_CenterText");
		if (sliderName === "&nbsp;") {
			leftLabel = localStorage.getItem("Custom_Slider" + data.secondParam + "_LeftText");
			rightLabel = localStorage.getItem("Custom_Slider" + data.secondParam + "_RightText");
			sliderName = leftLabel + "/" + rightLabel;
		}
				
		logEntry = sliderName + " slider " + increasedOrDecreased + " to " + data.thirdParam
	}
	else if (data.firstParam === "manipulateOption") {
		logEntry = "Changed " + data.secondParam + " to " + data.thirdParam	
	}
	else if (data.firstParam === "manipulateTickbox") {
		var tickedOrUnticked = "unticked";
		if (data.thirdParam === "Yes") {
			tickedOrUnticked = "ticked";
		}
		
		var uwu;
		if (data.secondParam === "Adapt_Clothing") 			{	uwu = "Adapt clothing"	}
		else if (data.secondParam === "Genitals_Penis")		{	uwu = "Penis"			}
		else if (data.secondParam === "Genitals_Vagina") 	{	uwu = "Vagina"			}
		else if (data.secondParam === "Pregnancy_Lock") 	{	uwu = "Pregnancy lock"	}
		
		logEntry = uwu + " checkbox " + tickedOrUnticked
	}
	else if (data.firstParam === "manipulateCustomTickbox") {
		var tickedOrUnticked = "unticked";
		if (data.thirdParam === "Yes") {
			tickedOrUnticked = "ticked";
		}
		
		var uwu;
		if (data.secondParam === "Custom_Checkbox1_Value1") {
			uwu = document.getElementById("CC1value1").innerHTML;
		}
		else if (data.secondParam === "Custom_Checkbox1_Value2") {
			uwu = document.getElementById("CC1value2").innerHTML;
		}
		else if (data.secondParam === "Custom_Checkbox2_Value1") {
			uwu = document.getElementById("CC2value1").innerHTML;
		}
		else if (data.secondParam === "Custom_Checkbox2_Value2") {
			uwu = document.getElementById("CC2value2").innerHTML;
		}
		else if (data.secondParam === "Custom_Checkbox3_Value1") {
			uwu = document.getElementById("CC3value1").innerHTML;
		}
		else if (data.secondParam === "Custom_Checkbox3_Value2") {
			uwu = document.getElementById("CC3value2").innerHTML;
		}
		
		logEntry = uwu + " checkbox " + tickedOrUnticked
	}
	else if (data.firstParam === "manipulateCustomRadioInput") {
		var uwu = document.getElementById("customRadioInput" + data.secondParam + "Label").innerHTML;
		if (uwu === "") { 
			uwu = "Custom " + data.secondParam 
		}
		var value = document.getElementById("CRI" + data.secondParam + "value" + data.thirdParam).innerHTML;
		
		logEntry = uwu + " radio input set to " + value
	}
	else if (data.firstParam === "optionEnabled") {
		if (data.secondParam === "loadSliderSettings") {
			return;
		}
		else {
			var enabledOrDisabled = "disabled";
			if (data.thirdParam === "Yes") { enabledOrDisabled = "enabled" }
		
			var uwu;
			if (data.secondParam === "buttSize") 					{	uwu = "Butt Size slider "			}
			else if (data.secondParam === "bellySize") 				{	uwu = "Belly Size slider "			}
			else if (data.secondParam === "bellyShape") 			{	uwu = "Belly Shape slider "			}
			else if (data.secondParam === "hips") 					{	uwu = "Hips slider "				}
			else if (data.secondParam === "genitalSize") 			{	uwu = "Genital Size slider "		}
			else if (data.secondParam === "cockType") 				{	uwu = "Cock Type menu "				}
			else if (data.secondParam === "libido") 				{	uwu = "Libido slider "				}
			else if (data.secondParam === "sensitivity") 			{	uwu = "Sensitivity slider "			}
			else if (data.secondParam === "demeanor") 				{	uwu = "Demeanor slider "			}
			else if (data.secondParam === "positionPref") 			{	uwu = "Dom/Sub slider "				}
			else if (data.secondParam === "intelligence") 			{	uwu = "Intelligence slider "		}
			else if (data.secondParam === "fluffiness") 			{	uwu = "Fluffiness slider "			}
			else if (data.secondParam === "hairLenght") 			{	uwu = "Hair Lenght slider "			}
			else if (data.secondParam === "fertility") 				{	uwu = "Fertility slider "			}
			else if (data.secondParam === "genitalsMenu") 			{	uwu = "Genitals checkboxes "		}
			else if (data.secondParam === "speciesMenu") 			{	uwu = "Species menu "				}
			else if (data.secondParam === "sexMenu")				{	uwu = "Sex radio buttons "			}
			else if (data.secondParam === "acMenu") 				{	uwu = "Adapt clothing checkbox "	}
			else if (data.secondParam === "mascFem") 				{	uwu = "Masc/Fem slider "			}
			else if (data.secondParam === "thinThicc") 				{	uwu = "Thin/Thicc slider "			}
			else if (data.secondParam === "smolTall") 				{	uwu = "Smol/Tall slider "			}
			else if (data.secondParam === "inanimateObjectsMenu") 	{	uwu = "Inanimate Objects menu "		}
			
			logEntry = uwu + enabledOrDisabled
		}
	}
	else if (data.firstParam === "customSliderEnabled") {
		if (data.secondParam === "loadCustomSliders") {
			return;
		}
		else {
			var enabledOrDisabled = "disabled";
			if (data.thirdParam === "Yes") { enabledOrDisabled = "enabled" }
		
			var uwu;
			var middleLabel;
			var leftLabel;
			var rightLabel;
			middleLabel = localStorage.getItem("Custom_Slider" + data.secondParam + "_CenterText");
			uwu = middleLabel + " slider ";
			if (middleLabel === "&nbsp;") {
				leftLabel = localStorage.getItem("Custom_Slider" + data.secondParam + "_LeftText");
				rightLabel = localStorage.getItem("Custom_Slider" + data.secondParam + "_RightText");
				uwu = leftLabel + "/" + rightLabel + " slider ";
			}
			
			logEntry = uwu + enabledOrDisabled
		}
	}
	else if (data.firstParam === "customCheckboxEnabled") {
		if (data.secondParam === "loadCustomCheckboxes") { 
			return
		}
		else {
			var enabledOrDisabled = "disabled";
			if (data.thirdParam === "Yes") { enabledOrDisabled = "enabled" }
			
			var checkboxName = localStorage.getItem("Slot0_Custom_Checkbox" + data.secondParam + "_Label");
			if (checkboxName === "") {
				checkboxName = localStorage.getItem("Slot0_Custom_Checkbox" + data.secondParam + "_Value1");
			}
			
			logEntry = checkboxName + " checkbox " + enabledOrDisabled
		}
	}
	else if (data.firstParam === "customRadioInputEnabled") {
		if (data.secondParam === "loadCustomRadioInputs") { 
			return
		}
		else {
			var enabledOrDisabled = "disabled";
			if (data.thirdParam === "Yes") { enabledOrDisabled = "enabled" }
			
			var CRIName = localStorage.getItem("Slot0_Custom_Radio_Input" + data.secondParam + "_Label");
			if (CRIName === "") {
				CRIName = "Custom " + data.secondParam
			}
			
			logEntry = CRIName + " radio input " + enabledOrDisabled
		}
	}
	else if (data.firstParam === "changeCustomSliderLabel") {
		var uwu;
		var leftLabel = data.thirdParam;
		var middleLabel = data.fourthParam;
		var rightLabel = data.fifthParam;
		
		if (middleLabel === "&nbsp;") {
			uwu = leftLabel + "/" + rightLabel
		}
		else {
			uwu = middleLabel
		}

		logEntry = "Created " + uwu + " slider"
	}
	else if (data.firstParam === "changeCustomCheckbox") {
		label = data.thirdParam;
		if (label === "") { 
			label = "blank"; 
		}
		var uwu;
		if (data.secondParam === "Custom1Label")			{	uwu = "Label: " + label + "<br> Custom Checkbox 1 created!"		}
		else if (data.secondParam === "Custom1Value1")		{	uwu = "Value 1: " + label	}
		else if (data.secondParam === "Custom1Value2")		{	uwu = "Value 2: " + label	}
		else if (data.secondParam === "Custom2Label")		{	uwu = "Label: " + label + "<br> Custom Checkbox 2 created!"		}
		else if (data.secondParam === "Custom2Value1")		{	uwu = "Value 1: " + label	}
		else if (data.secondParam === "Custom2Value2")		{	uwu = "Value 2: " + label	}
		else if (data.secondParam === "Custom3Label")		{	uwu = "Label: " + label + "<br> Custom Checkbox 3 created!"		}
		else if (data.secondParam === "Custom3Value1")		{	uwu = "Value 1: " + label	}
		else if (data.secondParam === "Custom3Value2")		{	uwu = "Value 2: " + label	}
		logEntry = uwu
	}
	else if (data.firstParam === "changeCustomRadioInput") {
		label = data.thirdParam;
		if (label === "") { 
			label = "blank"; 
		}
		var uwu;
		if (data.secondParam === "Custom1Label")			{	uwu = "Label: " + label + "<br> Custom Radio Input 1 created!"		}
		else if (data.secondParam === "Custom1Value1")		{	uwu = "Value 1: " + label	}
		else if (data.secondParam === "Custom1Value2")		{	uwu = "Value 2: " + label	}
		else if (data.secondParam === "Custom2Label")		{	uwu = "Label: " + label + "<br> Custom Radio Input 2 created!"		}
		else if (data.secondParam === "Custom2Value1")		{	uwu = "Value 1: " + label	}
		else if (data.secondParam === "Custom2Value2")		{	uwu = "Value 2: " + label	}
		else if (data.secondParam === "Custom3Label")		{	uwu = "Label: " + label + "<br> Custom Radio Input 3 created!"		}
		else if (data.secondParam === "Custom3Value1")		{	uwu = "Value 1: " + label	}
		else if (data.secondParam === "Custom3Value2")		{	uwu = "Value 2: " + label	}
		logEntry = uwu
	}
	else if (data.firstParam === "putClothingOn") {
		if (data.thirdParam === "None") { 
			return 
		}
		else {	
			logEntry = "Clothing: " + data.secondParam + " " + data.thirdParam	
		} 
	}
	else if (data.firstParam === "setCharacterColor") 		{	logEntry = data.secondParam + " character color set to " + data.thirdParam	}
	else if (data.firstParam === "setOutfitColor") 			{	logEntry = data.secondParam + " clothing color set to " + data.thirdParam	}
	else if (data.firstParam === "Unlock_Settings") 		{	logEntry = "Settings unlocked"												}
	else if (data.firstParam === "Lock_Settings") 			{	logEntry = "Settings locked"												}
	else if (data.firstParam === "Toggle_Admin_Mode") 		{	logEntry = "Toggled Admin Mode"												}
	else if (data.firstParam === "Change_Lock_Password") 	{	logEntry = "Changed lock password"											}
	else if (data.firstParam === "toggleAdvSettings") 		{	logEntry = "Toggled Advanced Settings"										}
		
	if (logEntry == null) { return }
	var logHistory = document.getElementById("CONTROLchangelog").innerHTML;
	document.getElementById("CONTROLchangelog").innerHTML = logEntry + "<br>" + logHistory;
}

function clearChangelog() {	document.getElementById("CONTROLchangelog").innerHTML = "&nbsp;" }

function toggleChangelog() {
	var showOrHide = document.getElementById("showHideChangelogButton").innerHTML;
	if (showOrHide === "Hide") {
		document.getElementById("showHideChangelogButton").innerHTML = "Show";
		document.getElementById("CONTROLchangelogContainer").style.height = "30px";
	}
	else {
		document.getElementById("showHideChangelogButton").innerHTML = "Hide";
		document.getElementById("CONTROLchangelogContainer").style.height = "150px";
	}
}

function clearChat() {	document.getElementById("CONTROLchatlog").innerHTML = "&nbsp;" }

function toggleCONTROLchat() {
	var showOrHide = document.getElementById("showHideChatButton").innerHTML;
	if (showOrHide === "Hide") {
		document.getElementById("showHideChatButton").innerHTML = "Show";
		document.getElementById("CONTROLchatContainer").style.height = "30px";
	}
	else {
		document.getElementById("showHideChatButton").innerHTML = "Hide";
		document.getElementById("CONTROLchatContainer").style.height = "190px";
	}
}

function attachEvents() {
	if (master === "true") {
		attachEventsToSliders();
		attachEventsToCustomSliders();
		attachEventsToOptions();
		attachEventsToTickboxes();
		attachEventsToCustomTickboxes();
		attachEventsToCustomRadioInputs();
		attachEventsToVisibiltyOptions();
		attachEventsToCustomSlidersVisibiltyOptions();
		attachEventsToCustomCheckboxesVisibiltyOptions();
		attachEventsToCustomRadioInputsVisibiltyOptions();
		attachEventsToColorPickers();
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
		document.getElementById("CONTROLsubContainer").style.maxHeight='220px';
		document.getElementById("COTNROLchatMainContainer").style.maxHeight='200px';
	}
	else {
		document.getElementById("CONTROLconnectContainer").style.maxHeight='0px';
		document.getElementById("CONTROLmasterContainer").style.maxHeight='340px';
		document.getElementById("CONTROLmasterContainer").style.border='3px solid rgb(255, 69, 80)';
		document.getElementById("COTNROLchatMainContainer").style.maxHeight='200px';
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
	mySlider23.attachEvent("onSlideEnd", function() { // Fertility slider
   	var value = mySlider23.getValue();
	conn.send({firstParam: "manipulateSlider", secondParam:"fertility", thirdParam: value});
});

}

function attachEventsToCustomSliders() {
	CustomSliderNo1.attachEvent("onSlideEnd", function() { // Custom 1 slider
	conn.send({firstParam: "manipulateCustomSlider", secondParam:"1", thirdParam: CustomSliderNo1.getValue()});
});
	CustomSliderNo2.attachEvent("onSlideEnd", function() { // Custom 2 slider
	conn.send({firstParam: "manipulateCustomSlider", secondParam:"2", thirdParam: CustomSliderNo2.getValue()});
});
	CustomSliderNo3.attachEvent("onSlideEnd", function() { // Custom 3 slider
	conn.send({firstParam: "manipulateCustomSlider", secondParam:"3", thirdParam: CustomSliderNo3.getValue()});
});
	CustomSliderNo4.attachEvent("onSlideEnd", function() { // Custom 4 slider
	conn.send({firstParam: "manipulateCustomSlider", secondParam:"4", thirdParam: CustomSliderNo4.getValue()});
});
	CustomSliderNo5.attachEvent("onSlideEnd", function() { // Custom 5 slider
	conn.send({firstParam: "manipulateCustomSlider", secondParam:"5", thirdParam: CustomSliderNo5.getValue()});
});
	CustomSliderNo6.attachEvent("onSlideEnd", function() { // Custom 6 slider
	conn.send({firstParam: "manipulateCustomSlider", secondParam:"6", thirdParam: CustomSliderNo6.getValue()});
});
	CustomSliderNo7.attachEvent("onSlideEnd", function() { // Custom 7 slider
	conn.send({firstParam: "manipulateCustomSlider", secondParam:"7", thirdParam: CustomSliderNo7.getValue()});
});
	CustomSliderNo8.attachEvent("onSlideEnd", function() { // Custom 8 slider
	conn.send({firstParam: "manipulateCustomSlider", secondParam:"8", thirdParam: CustomSliderNo8.getValue()});
});
	CustomSliderNo9.attachEvent("onSlideEnd", function() { // Custom 9 slider
	conn.send({firstParam: "manipulateCustomSlider", secondParam:"9", thirdParam: CustomSliderNo9.getValue()});
});
	CustomSliderNo10.attachEvent("onSlideEnd", function() { // Custom 10 slider
	conn.send({firstParam: "manipulateCustomSlider", secondParam:"10", thirdParam: CustomSliderNo10.getValue()});
});

}

function attachEventsToOptions() {
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

function attachEventsToCustomTickboxes() {
	document.getElementById("CC1value1Checkbox").addEventListener("click", function(){
		var tickbox = document.getElementById("CC1value1Checkbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "manipulateCustomTickbox", secondParam: "Custom_Checkbox1_Value1", thirdParam: tickbox});
	});
	document.getElementById("CC1value2Checkbox").addEventListener("click", function(){
		var tickbox = document.getElementById("CC1value2Checkbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "manipulateCustomTickbox", secondParam: "Custom_Checkbox1_Value2", thirdParam: tickbox});
	});
	document.getElementById("CC2value1Checkbox").addEventListener("click", function(){
		var tickbox = document.getElementById("CC2value1Checkbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "manipulateCustomTickbox", secondParam: "Custom_Checkbox2_Value1", thirdParam: tickbox});
	});
	document.getElementById("CC2value2Checkbox").addEventListener("click", function(){
		var tickbox = document.getElementById("CC2value2Checkbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "manipulateCustomTickbox", secondParam: "Custom_Checkbox2_Value2", thirdParam: tickbox});
	});
	document.getElementById("CC3value1Checkbox").addEventListener("click", function(){
		var tickbox = document.getElementById("CC3value1Checkbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "manipulateCustomTickbox", secondParam: "Custom_Checkbox3_Value1", thirdParam: tickbox});
	});
	document.getElementById("CC3value2Checkbox").addEventListener("click", function(){
		var tickbox = document.getElementById("CC3value2Checkbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "manipulateCustomTickbox", secondParam: "Custom_Checkbox3_Value2", thirdParam: tickbox});
	});
}

function attachEventsToCustomRadioInputs() {
	document.getElementById("radiobuttonCustom1Value1").addEventListener("click", function(){
		conn.send({firstParam: "manipulateCustomRadioInput", secondParam: 1, thirdParam: 1});
	});
	document.getElementById("radiobuttonCustom1Value2").addEventListener("click", function(){
		conn.send({firstParam: "manipulateCustomRadioInput", secondParam: 1, thirdParam: 2});
	});
	document.getElementById("radiobuttonCustom2Value1").addEventListener("click", function(){
		conn.send({firstParam: "manipulateCustomRadioInput", secondParam: 2, thirdParam: 1});
	});
	document.getElementById("radiobuttonCustom2Value2").addEventListener("click", function(){
		conn.send({firstParam: "manipulateCustomRadioInput", secondParam: 2, thirdParam: 2});
	});
	document.getElementById("radiobuttonCustom3Value1").addEventListener("click", function(){
		conn.send({firstParam: "manipulateCustomRadioInput", secondParam: 3, thirdParam: 1});
	});
	document.getElementById("radiobuttonCustom3Value2").addEventListener("click", function(){
		conn.send({firstParam: "manipulateCustomRadioInput", secondParam: 3, thirdParam: 2});
	});
}

function attachEventsToVisibiltyOptions() {
	document.getElementById("speciesCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("speciesCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "optionEnabled", secondParam: "speciesMenu", thirdParam: tickbox});
		conn.send({firstParam: "optionEnabled", secondParam: "loadSliderSettings"});
	});
	document.getElementById("sexCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("sexCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "optionEnabled", secondParam: "sexMenu", thirdParam: tickbox});
		conn.send({firstParam: "optionEnabled", secondParam: "loadSliderSettings"});
	});
	document.getElementById("toggleAdaptClothingCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("toggleAdaptClothingCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "optionEnabled", secondParam: "acMenu", thirdParam: tickbox});
		conn.send({firstParam: "optionEnabled", secondParam: "loadSliderSettings"});
	});
	document.getElementById("mascFemCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("mascFemCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "optionEnabled", secondParam: "mascFem", thirdParam: tickbox});
		conn.send({firstParam: "optionEnabled", secondParam: "loadSliderSettings"});
	});
	document.getElementById("thinThiccCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("thinThiccCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "optionEnabled", secondParam: "thinThicc", thirdParam: tickbox});
		conn.send({firstParam: "optionEnabled", secondParam: "loadSliderSettings"});
	});
	document.getElementById("smolTallCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("smolTallCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "optionEnabled", secondParam: "smolTall", thirdParam: tickbox});
		conn.send({firstParam: "optionEnabled", secondParam: "loadSliderSettings"});
	});
	document.getElementById("genitalsCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("genitalsCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "optionEnabled", secondParam: "genitalsMenu", thirdParam: tickbox});
		conn.send({firstParam: "optionEnabled", secondParam: "loadSliderSettings"});
	});
	document.getElementById("inanimateObjectsCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("inanimateObjectsCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "optionEnabled", secondParam: "inanimateObjectsMenu", thirdParam: tickbox});
		conn.send({firstParam: "optionEnabled", secondParam: "loadSliderSettings"});
	});
	document.getElementById("buttSizeSliderCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("buttSizeSliderCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "optionEnabled", secondParam: "buttSize", thirdParam: tickbox});
		conn.send({firstParam: "optionEnabled", secondParam: "loadSliderSettings"});
	});
	document.getElementById("bellySizeSliderCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("bellySizeSliderCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "optionEnabled", secondParam: "bellySize", thirdParam: tickbox});
		conn.send({firstParam: "optionEnabled", secondParam: "loadSliderSettings"});
	});
	document.getElementById("bellyShapeSliderCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("bellyShapeSliderCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "optionEnabled", secondParam: "bellyShape", thirdParam: tickbox});
		conn.send({firstParam: "optionEnabled", secondParam: "loadSliderSettings"});
	});
	document.getElementById("hipsSliderCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("hipsSliderCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "optionEnabled", secondParam: "hips", thirdParam: tickbox});
		conn.send({firstParam: "optionEnabled", secondParam: "loadSliderSettings"});
	});
	document.getElementById("hairLenghtSliderCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("hairLenghtSliderCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "optionEnabled", secondParam: "hairLenght", thirdParam: tickbox});
		conn.send({firstParam: "optionEnabled", secondParam: "loadSliderSettings"});
	});
	document.getElementById("genitalSizeSliderCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("genitalSizeSliderCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "optionEnabled", secondParam: "genitalSize", thirdParam: tickbox});
		conn.send({firstParam: "optionEnabled", secondParam: "loadSliderSettings"});
	});
	document.getElementById("cockTypeMenuCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("cockTypeMenuCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "optionEnabled", secondParam: "cockType", thirdParam: tickbox});
		conn.send({firstParam: "optionEnabled", secondParam: "loadSliderSettings"});
	});
	document.getElementById("libidoSliderCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("libidoSliderCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "optionEnabled", secondParam: "libido", thirdParam: tickbox});
		conn.send({firstParam: "optionEnabled", secondParam: "loadSliderSettings"});
	});
	document.getElementById("sensitivitySliderCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("sensitivitySliderCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "optionEnabled", secondParam: "sensitivity", thirdParam: tickbox});
		conn.send({firstParam: "optionEnabled", secondParam: "loadSliderSettings"});
	});
	document.getElementById("demeanorSliderCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("demeanorSliderCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "optionEnabled", secondParam: "demeanor", thirdParam: tickbox});
		conn.send({firstParam: "optionEnabled", secondParam: "loadSliderSettings"});
	});
	document.getElementById("positionPreferenceSliderCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("positionPreferenceSliderCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "optionEnabled", secondParam: "positionPref", thirdParam: tickbox});
		conn.send({firstParam: "optionEnabled", secondParam: "loadSliderSettings"});
	});
	document.getElementById("intelligenceSliderCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("intelligenceSliderCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "optionEnabled", secondParam: "intelligence", thirdParam: tickbox});
		conn.send({firstParam: "optionEnabled", secondParam: "loadSliderSettings"});
	});
	document.getElementById("fertilitySliderCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("fertilitySliderCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "optionEnabled", secondParam: "fertility", thirdParam: tickbox});
		conn.send({firstParam: "optionEnabled", secondParam: "loadSliderSettings"});
	});
	document.getElementById("fluffinessSliderCheckbox").addEventListener("click", function(){
		var tickbox = document.getElementById("fluffinessSliderCheckbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "optionEnabled", secondParam: "fluffiness", thirdParam: tickbox});
		conn.send({firstParam: "optionEnabled", secondParam: "loadSliderSettings"});
	});
}

function attachEventsToCustomSlidersVisibiltyOptions() {
	document.getElementById("customSlider1Checkbox").addEventListener("click", function(){
		var tickbox = document.getElementById("customSlider1Checkbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "customSliderEnabled", secondParam: "1", thirdParam: tickbox});
		conn.send({firstParam: "customSliderEnabled", secondParam: "loadCustomSliders"});
	});
	document.getElementById("customSlider2Checkbox").addEventListener("click", function(){
		var tickbox = document.getElementById("customSlider2Checkbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "customSliderEnabled", secondParam: "2", thirdParam: tickbox});
		conn.send({firstParam: "customSliderEnabled", secondParam: "loadCustomSliders"});
	});
	document.getElementById("customSlider3Checkbox").addEventListener("click", function(){
		var tickbox = document.getElementById("customSlider3Checkbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "customSliderEnabled", secondParam: "3", thirdParam: tickbox});
		conn.send({firstParam: "customSliderEnabled", secondParam: "loadCustomSliders"});
	});
	document.getElementById("customSlider4Checkbox").addEventListener("click", function(){
		var tickbox = document.getElementById("customSlider4Checkbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "customSliderEnabled", secondParam: "4", thirdParam: tickbox});
		conn.send({firstParam: "customSliderEnabled", secondParam: "loadCustomSliders"});
	});
	document.getElementById("customSlider5Checkbox").addEventListener("click", function(){
		var tickbox = document.getElementById("customSlider5Checkbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "customSliderEnabled", secondParam: "5", thirdParam: tickbox});
		conn.send({firstParam: "customSliderEnabled", secondParam: "loadCustomSliders"});
	});
	document.getElementById("customSlider6Checkbox").addEventListener("click", function(){
		var tickbox = document.getElementById("customSlider6Checkbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "customSliderEnabled", secondParam: "6", thirdParam: tickbox});
		conn.send({firstParam: "customSliderEnabled", secondParam: "loadCustomSliders"});
	});
	document.getElementById("customSlider7Checkbox").addEventListener("click", function(){
		var tickbox = document.getElementById("customSlider7Checkbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "customSliderEnabled", secondParam: "7", thirdParam: tickbox});
		conn.send({firstParam: "customSliderEnabled", secondParam: "loadCustomSliders"});
	});
	document.getElementById("customSlider8Checkbox").addEventListener("click", function(){
		var tickbox = document.getElementById("customSlider8Checkbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "customSliderEnabled", secondParam: "8", thirdParam: tickbox});
		conn.send({firstParam: "customSliderEnabled", secondParam: "loadCustomSliders"});
	});
	document.getElementById("customSlider9Checkbox").addEventListener("click", function(){
		var tickbox = document.getElementById("customSlider9Checkbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "customSliderEnabled", secondParam: "9", thirdParam: tickbox});
		conn.send({firstParam: "customSliderEnabled", secondParam: "loadCustomSliders"});
	});
	document.getElementById("customSlider10Checkbox").addEventListener("click", function(){
		var tickbox = document.getElementById("customSlider10Checkbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "customSliderEnabled", secondParam: "10", thirdParam: tickbox});
		conn.send({firstParam: "customSliderEnabled", secondParam: "loadCustomSliders"});
	});
}

function attachEventsToCustomCheckboxesVisibiltyOptions() {
	document.getElementById("customCheckbox1Checkbox").addEventListener("click", function(){
		var tickbox = document.getElementById("customCheckbox1Checkbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "customCheckboxEnabled", secondParam: "1", thirdParam: tickbox});
		conn.send({firstParam: "customCheckboxEnabled", secondParam: "loadCustomCheckboxes"});
	});
	document.getElementById("customCheckbox2Checkbox").addEventListener("click", function(){
		var tickbox = document.getElementById("customCheckbox2Checkbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "customCheckboxEnabled", secondParam: "2", thirdParam: tickbox});
		conn.send({firstParam: "customCheckboxEnabled", secondParam: "loadCustomCheckboxes"});
	});
	document.getElementById("customCheckbox3Checkbox").addEventListener("click", function(){
		var tickbox = document.getElementById("customCheckbox3Checkbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "customCheckboxEnabled", secondParam: "3", thirdParam: tickbox});
		conn.send({firstParam: "customCheckboxEnabled", secondParam: "loadCustomCheckboxes"});
	});
}

function attachEventsToCustomRadioInputsVisibiltyOptions() {
	document.getElementById("customRadioInput1Checkbox").addEventListener("click", function(){
		var tickbox = document.getElementById("customRadioInput1Checkbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "customRadioInputEnabled", secondParam: "1", thirdParam: tickbox});
		conn.send({firstParam: "customRadioInputEnabled", secondParam: "loadCustomRadioInputs"});
	});
	document.getElementById("customRadioInput2Checkbox").addEventListener("click", function(){
		var tickbox = document.getElementById("customRadioInput2Checkbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "customRadioInputEnabled", secondParam: "2", thirdParam: tickbox});
		conn.send({firstParam: "customRadioInputEnabled", secondParam: "loadCustomRadioInputs"});
	});
	document.getElementById("customRadioInput3Checkbox").addEventListener("click", function(){
		var tickbox = document.getElementById("customRadioInput3Checkbox");
		if (tickbox.checked){	var tickbox = "Yes"	}
		else 				{	var tickbox = "No"	}
		conn.send({firstParam: "customRadioInputEnabled", secondParam: "3", thirdParam: tickbox});
		conn.send({firstParam: "customRadioInputEnabled", secondParam: "loadCustomRadioInputs"});
	});
}

function attachEventsToColorPickers() {
	// Check if CharViz is on
	var charVizEnabled = localStorage.getItem("CharViz_Enabled");
	if (charVizEnabled === "Yes") {
		// Character color picker
		colorPicker.on('input:end', function(color) {
			var activeColor = localStorage.getItem("CharViz_Active_Character_Color");
			conn.send({firstParam: "setCharacterColor", secondParam: activeColor, thirdParam: color.hexString});
		});
		// Clothing color picker
		colorPicker2.on('input:end', function(color) {
			var activeColor = localStorage.getItem("CharViz_Active_Clothing_Color");
			conn.send({firstParam: "setOutfitColor", secondParam: activeColor, thirdParam: color.hexString});
		});
	}
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

function CONTROLshowConnectToServer() {
	document.getElementById("CONTROLButton").style.padding='0px';
	document.getElementById("CONTROLButton").style.border='0';
	document.getElementById("CONTROLButton").style.fontSize='0px';
	document.getElementById("CONTROLButton").style.marginTop='0px';
	document.getElementById("CONTROLconnectToServerContainer").style.maxHeight='200px';
}

function CONTROLgoBack() {
	document.getElementById("CONTROLButton").style.padding='10px';
	document.getElementById("CONTROLButton").style.border="2px solid #59568f";
	document.getElementById("CONTROLButton").style.fontSize='26px';
	document.getElementById("CONTROLButton").style.marginTop='5px';
	document.getElementById("CONTROLconnectToServerContainer").style.maxHeight='0px';
}

function CONTROLshowTutorial() {
	document.getElementById("CONTROLconnectToServerContainer").style.maxHeight='0px';
	document.getElementById("CONTROLtutorialContainer").style.maxHeight='621px';
	document.getElementById('whatsThisButton').innerHTML = "OwO";
	setTimeout(hideOwO, 50);
}

function hideOwO() {
	document.getElementById('whatsThisButton').innerHTML = "What's this?";
}

function CONTROLgoBackFromTutorial() {
	document.getElementById("CONTROLtutorialContainer").style.maxHeight='0px';
	document.getElementById("CONTROLconnectToServerContainer").style.maxHeight='200px';
}

function CONTROLshowChoice() {
	if (isConnected == null) {
		document.getElementById("CONTROLconnectToServerStatus").innerHTML = "You shall not pass!";
		document.getElementById("CONTROLconnectToServerStatus").style.color = "#FF4550";
		document.getElementById("CONTROLconnectToServerButton").style.background='#b30003';
		document.getElementById("CONTROLconnectToServerButton").style.border='2px solid #660002';
		document.getElementById("CONTROLconnectToServerButton").style.transitionDuration='0.2s';
		setTimeout(hideConnectToServerMessage, 1500);
	}
	else {
		document.getElementById("CONTROLconnectToServerContainer").style.maxHeight='0px';
		document.getElementById("CONTROLchoiceContainer").style.maxHeight='140px';
	}
}

function hideConnectToServerMessage() {
	if (isConnected == null) {
		document.getElementById("CONTROLconnectToServerStatus").innerHTML = "Status: Waiting for user input...";
		document.getElementById("CONTROLconnectToServerStatus").style.color = "#fff";
		document.getElementById("CONTROLconnectToServerButton").style.background='#282640';
		document.getElementById("CONTROLconnectToServerButton").style.border='2px solid #59568f';
		document.getElementById("CONTROLconnectToServerButton").style.transitionDuration='0.75s';
	}
	else {
		return;
	}	
}

function CONTROLgoBackFromChoice() {
	document.getElementById("CONTROLconnectToServerContainer").style.maxHeight='200px';
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
	document.getElementById("CONTROLreceiveContainer").style.maxHeight='200px';
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

function CONTROLsendChatMessage() {
	var message = document.getElementById("CONTROLchatWriteMessage").value;
	if (message === "") {
		document.getElementById("CONTROLchatNoUsernameError").innerHTML = "Type a message!";
		document.getElementById("CONTROLchatNoUsernameError").style.backgroundColor = "#b30003";
		setTimeout(CONTROLchatClearError, 2000);
		return;
	}
	var username = localStorage.getItem("Username");
	if (username == null) {
		document.getElementById("CONTROLchatNoUsernameError").innerHTML = "Set a username!";
		document.getElementById("CONTROLchatNoUsernameError").style.backgroundColor = "#b30003";
		setTimeout(CONTROLchatClearError, 2000);
	}
	else { 
		conn.send({firstParam: "CONTROLchat", secondParam: username, thirdParam: message});
		var chatHistory = document.getElementById("CONTROLchatlog").innerHTML;
		document.getElementById("CONTROLchatlog").innerHTML = username + ": " + message + "<br>" + chatHistory;
		document.getElementById("CONTROLchatWriteMessage").value = "";
	}
}

function CONTROLchatClearError() {
	document.getElementById("CONTROLchatNoUsernameError").innerHTML = "CONTROL Chat";
	document.getElementById("CONTROLchatNoUsernameError").style.backgroundColor = "#59568f";
}