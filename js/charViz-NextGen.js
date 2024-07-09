// WIP

//"override_settings": {"CLIP_stop_at_last_layers": 1},

async function sendToLocaltxt2img(prompt, negPrompt, seed, ipAdd) {
	if (transformationOngoing == 0) {
		document.getElementById('charVizNextGenDisplayMessage').style.display = "block";
	}
	
	var width = localStorage.getItem("CharViz_NextGen_ResX");
	var height = localStorage.getItem("CharViz_NextGen_ResY");
	if (width == null) { width = 640 }
	if (height == null) { height = 960 }
	
	const response = await fetch('http://' + ipAdd + ':7860/sdapi/v1/txt2img', {
		method: 'POST',
		body: JSON.stringify({
			"enable_hr": false,
			"prompt": prompt,
			"negative_prompt": negPrompt,
			"sampler_index": "Euler a",
			"cfg_scale": 7,
			"seed": seed,
			"height": height,
			"width": width,
			"steps": 24,
			"save_images": true,
			//"alwayson_scripts": {
			//	"CFG Rescale Extension": 	{"args": [0.0]}//,
				//"Plasma Noise": 			{"args": [true, 2.75, 1.0, 1.0, -1, -1, -1, -1, -1, -1, -1, -1]}
			//}
		}),
		headers: {
		'Content-Type': 'application/json'
		}
	});
	const myJson = await response.json();
	document.getElementById('charVizNextGenDisplayMessage').style.display = "none";
	document.getElementById('charVizNextGenDisplayImage').style.display = "block";
	document.getElementById("charVizNextGenDisplayImage").style.backgroundImage = "url(data:image/png;base64," + myJson.images + ")";
	imageCache = myJson.images;
	if (transformationOngoing == 1) {
		transformationStep++;
		if (transformationType == "Breast Expansion") {
			transformationBreastExpansion(transformationStep)
		}
		else if (transformationType == "MTF Simple") {
			transformationMTFSimple(transformationStep)
		}
	}
}

var imageCache;

var transformationOngoing = 0;
var transformationStep = 0;
var transformationType = "";
var transformationOverrideSex = "";

function transformationBreastExpansion(step, debug) {
	var x = step * 5;
	if (x > 100) {
		transformationOngoing = 0;
		transformationStep = 0;
		return;
	}
	mySlider8.setValue(x);
	mySlider9.setValue(x);
	if (debug != 1) {
		generateImage();
	}
	else {
		generateImage(true);
		transformationStep++;
		transformationBreastExpansion(transformationStep, debug);
	}
}

function transformationMTFSimple(step, debug) {
	var x = step * 5;
	if (x > 100) {
		transformationOngoing = 0;
		transformationStep = 0;
		transformationOverrideSex = "";
		return;
	}
	
	var ratio = Math.round((mapRange(x, 0, 100, 0.99, 0) + Number.EPSILON) * 100) / 100;
	transformationOverrideSex = "[male:female:" + ratio + "], ";
	
	if (debug != 1) {
		generateImage();
	}
	else {
		generateImage(true);
		transformationStep++;
		transformationMTFSimple(transformationStep, debug);
	}
}

function transformation(type, debug) {
	transformationOngoing = 1;
	if (type == 0) {
		transformationBreastExpansion(0, debug);
		transformationType = "Breast Expansion";
	}
	else if (type == 1) {
		transformationMTFSimple(0, debug);
		transformationType = "MTF Simple";
	}
}

function abortTF() {
	transformationOngoing = 0;
	transformationStep = 0;
	transformationType = "";
	transformationOverrideSex = "";
}

function generateImage(dbgPrompt) {
	var seed = localStorage.getItem("CharViz_NextGen_Seed");
	if (seed == null) { seed = 621 }
	var prompts;
	prompts = constructPrompt();
	console.log(prompts[0]);
	if (dbgPrompt == true) {
		document.getElementById('notification').style.display = "block";
		document.getElementById('notification').innerHTML = prompts[0]; 
		return; 
	}
	
	var ipAdd = localStorage.getItem("CharViz_NextGen_IP");
	if (ipAdd == null) { ipAdd = "127.0.0.1" }
	sendToLocaltxt2img(prompts[0], prompts[1], seed, ipAdd)
	//image = getBase64String(function(dataURL){
	//	image = dataURL;
	//	sendToLocalimg2img(prompts[0], prompts[1], seed, image)
	//});
}

function setResolution(x) {
	var resX;
	var resY;
	resX = 512 + 128 * x;
	resY = 768 + 192 * x;
	localStorage.setItem("CharViz_NextGen_ResX", resX)
	localStorage.setItem("CharViz_NextGen_ResY", resY)
	document.getElementById("currentResolution").innerHTML = resX + "x" + resY;
	charVizNextGenCloseMenu("charVizNextGenSelectResolution");
}

function loadResolution() {
	var resX = localStorage.getItem("CharViz_NextGen_ResX");
	var resY = localStorage.getItem("CharViz_NextGen_ResY");
	document.getElementById("currentResolution").innerHTML = resX + "x" + resY;
}

function charVizNotification(tone, message) {
	document.getElementById('notification').style.display = "block";
	if (tone == 0) { // Neutral
		document.getElementById('notification').style.backgroundColor = "rgba(89, 86, 143, 0.75);";
	}
	else if (tone == 1) { // Positive
		document.getElementById('notification').style.backgroundColor = "rgba(41, 163, 41, 0.75)";
	}
	else if (tone == 2) { // Negative
		document.getElementById('notification').style.backgroundColor = "rgba(179, 0, 3, 0.75)";
	}
	document.getElementById('notification').innerHTML = message;
}

function setIP(x) {
	if (x == "local") { 
		localStorage.setItem("CharViz_NextGen_IP", "127.0.0.1")
	}
	else {
		digit = document.getElementById("charVizNextGenIpLanDigit").value;
		if (digit == "") {
			savedLanIp = localStorage.getItem("CharViz_NextGen_IP_LAN");
			if (savedLanIp == null) {
				document.getElementById('notification').style.display = "block";
				document.getElementById('notification').innerHTML = "Error: There is no saved LAN IP. Please provide the last digit of IP address of API server running on your LAN.";
			}
			else {
				localStorage.setItem("CharViz_NextGen_IP", savedLanIp);
			}
		}
		else {
			localStorage.setItem("CharViz_NextGen_IP", "192.168.0." + digit)
			localStorage.setItem("CharViz_NextGen_IP_LAN", "192.168.0." + digit)
		}
	}
}

function downloadBase64File() {
	var contentBase64 = imageCache;
	var fileName = "image";
	
    const linkSource = `data:image/png;base64,${contentBase64}`;
    const downloadLink = document.createElement('a');
    document.body.appendChild(downloadLink);

    downloadLink.href = linkSource;
    downloadLink.target = '_self';
    downloadLink.download = fileName;
    downloadLink.click(); 
}

function charVizNextGenRandSeed() {
	localStorage.setItem("CharViz_NextGen_Seed", Math.floor(Math.random() * 1000000) + 1);
	document.getElementById('notification').style.display = "block";
	document.getElementById('notification').innerHTML = "Seed set to " + localStorage.getItem("CharViz_NextGen_Seed")
}

function charVizNextGenCheckSeed() {
	var x = localStorage.getItem("CharViz_NextGen_Seed");
	if (x == null) { x = 621 }
	charVizNotification(0, "Seed is " + x);
}

function charVizNextGenSetSeed() {
	var x = document.getElementById("charVizNextGenUserSeed").value;
	if (x == "") {
		charVizNotification(0, "Please enter a number");
		return;
	}
	if (isNaN(x)) {
		charVizNotification(2, "Error: You didn't provide a number!");
		return;
	}
	localStorage.setItem("CharViz_NextGen_Seed", x);
	charVizNotification(1, "Seed set to " + x);
}

function cycleStyle(x) {
	var currentStyle = parseInt(localStorage.getItem("CharViz_NextGen_Style"));
	if (isNaN(currentStyle)) { currentStyle = 0 }
	currentStyle = currentStyle + x;
	if (currentStyle == styles.length) 	{ currentStyle = 0 }
	if (currentStyle == -1) 			{ currentStyle = styles.length - 1 }
	localStorage.setItem("CharViz_NextGen_Style", currentStyle)
	document.getElementById('notification').style.display = "block";
	document.getElementById('notification').innerHTML = "Style set to " + styles[currentStyle];
}

function noStyle() {
	localStorage.setItem("CharViz_NextGen_Style", 0);
	document.getElementById('notification').style.display = "block";
	document.getElementById('notification').innerHTML = "Style set to "
}

function selectStyle(x) {
	localStorage.setItem("CharViz_NextGen_Style", x);
	charVizNextGenCloseMenu("charVizNextGenSelectStyle");
	document.getElementById('notification').style.display = "block";
	document.getElementById('notification').innerHTML = "Style set to " + styles[x];
}

function checkStyle() {
	var x = parseInt(localStorage.getItem("CharViz_NextGen_Style"));
	if (isNaN(x)) { x = 0 }
	charVizNotification(0, "Style is set to " + styles[x]);
}

var styles = [
		"",										//0
		"digital drawing \\(artwork\\), ",		//1
		"digital painting \\(artwork\\), ",		//2
		"pixel \\(artwork\\), ",				//3
		"traditional_media \\(artwork\\), ",	//4
		"watercolor \\(artwork\\), ",			//5
		"graphite \\(artwork\\), ",				//6
		"lineless, ",							//7
		"sketch, ",								//8
		"monochrome, ",							//9
		"greyscale, ",							//10
		"line art, ",							//11
		"kemono, ",								//12
	]

function noOutfit() {
	localStorage.setItem("CharViz_NextGen_Outfit_Category", 0);
	localStorage.setItem("CharViz_NextGen_Outfit", 0);
	document.getElementById('notification').style.display = "block";
	document.getElementById('notification').innerHTML = "Outfit set to Naked";
}

function selectOutfit(x,y) {
	localStorage.setItem("CharViz_NextGen_Outfit_Category", x);
	localStorage.setItem("CharViz_NextGen_Outfit", y);
	charVizNextGenCloseMenu("charVizNextGenSelectOutfit");
	document.getElementById('notification').style.display = "block";
	document.getElementById('notification').innerHTML = "Outfit set to " + outfits[x].items[y].name;
}

function checkOutfit() {
	var x = parseInt(localStorage.getItem("CharViz_NextGen_Outfit_Category"));
	var y = parseInt(localStorage.getItem("CharViz_NextGen_Outfit"));
	if (isNaN(x)) { x = 0 }
	if (isNaN(y)) { y = 0 }
	charVizNotification(0, "Outfit is set to " + outfits[x].items[y].name);
}

var outfits = [
	{
		category: "Everyday wear",
		items: [
			{
				name: "Naked",
				prompt: ""
			},
			{
				name: "Programmer outfit",
				prompt: "pleated skirt, thigh highs, arm warmers, crop top, "
			},
			{
				name: "Sundress",
				prompt: "white sundress, "
			},
			{
				name: "Floral sundress",
				prompt: "floral sundress, "
			},
			{
				name: "Crop top & shorts",
				prompt: "crop top, hotpants, "
			},
			{
				name: "Sports bra & leggings",
				prompt: "sports bra, leggings, "
			},
			{
				name: "Bikini",
				prompt: "bikini, "
			}
		]
	},
	{
		category: "Cosplay",
		items: [
			{
				name: "Maid outfit",
				prompt: "maid uniform, stockings, elbow gloves, "
			},
			{
				name: "Cheerleader outfit",
				prompt: "cheerleader outfit, crop top, skirt, "
			},
			{
				name: "Witch costume",
				prompt: "witch costume, dress, stockings, witch hat, "
			},
			{
				name: "Nurse uniform",
				prompt: "nurse uniform, stockings, "
			},
			{
				name: "Secretary uniform",
				prompt: "secretary, white shirt, black skirt, pantyhose, "
			},
			{
				name: "School uniform",
				prompt: "school uniform, plaid skirt, stockings, "
			},
			{
				name: "Nun outfit",
				prompt: "nun outfit, "
			},
		]
	},
	{
		category: "Bedroom wear",
		items: [
			{
				name: "Black lingerie set",
				prompt: "lingerie, bra, panties, elbow gloves, stockings, garter belt, platform heels, "
			},
			{
				name: "Pink lingerie set",
				prompt: "pink lingerie, bra, panties, pink elbow gloves, pink stockings, garter belt, platform heels, "
			},
			{
				name: "White lingerie set",
				prompt: "white lingerie, bra, panties, white elbow gloves, white stockings, garter belt, platform heels, "
			}
		]
	},
	{
		category: "Formal wear",
		items: [
			{
				name: "Evening gown",
				prompt: "evening gown, elbow gloves, "
			},
			{
				name: "Wedding dress",
				prompt: "wedding dress, white elbow gloves, wedding veil, "
			},
			{
				name: "Ball gown",
				prompt: "ball gown, elbow gloves, tiara, "
			},
			{
				name: "Suit",
				prompt: "suit, business suit, necktie, "
			}
		]
	}
];


function cycleLoraStr(x) {
	var currentLoraStr = parseFloat(localStorage.getItem("CharViz_NextGen_LoRA_Strength"));
	if (isNaN(currentLoraStr))		{ currentLoraStr = 1.9 }
	currentLoraStr = Math.round((currentLoraStr + x) * 10) / 10;
	if (currentLoraStr == -0.1)		{ currentLoraStr = 2.5 }
	if (currentLoraStr == 2.6)		{ currentLoraStr = 0.0 }
	localStorage.setItem("CharViz_NextGen_LoRA_Strength", currentLoraStr)
	document.getElementById('notification').style.display = "block";
	document.getElementById('notification').innerHTML = "LoRA strength set to " + currentLoraStr;
}

function defaultLoraStr() {
	localStorage.setItem("CharViz_NextGen_LoRA_Strength", 1.6);
	document.getElementById('notification').style.display = "block";
	document.getElementById('notification').innerHTML = "LoRA strength set to default (1.6)";
}

function hideCharVizNotification() {
	document.getElementById('notification').style.display = "none";
}

function charVizNextGenOpenMenu(x) {
	if (document.getElementById(x).style.display == "block") {
		charVizNextGenCloseMenu(x)
	}
	else {
		document.getElementById(x).style.display = "block";
	}
}

function charVizNextGenCloseMenu(x) {
	document.getElementById(x).style.display = "none";
}

function mapRange(value, inMin, inMax, outMin, outMax) {
	return (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

function mapRangeExp(value, inMin, inMax, outMin, outMax, exponent) {
	const normalizedValue = (value - inMin) / (inMax - inMin);
	const mappedValue = Math.pow(normalizedValue, exponent);
	return mappedValue * (outMax - outMin) + outMin;
}

// Unused functions

async function sendToStableHorde(prompt, negPrompt, seed) {
	const response = await fetch('https://stablehorde.net/api/v2/generate/async', {
		method: 'POST',
		body: JSON.stringify({
		  "prompt": prompt + " ### " + negPrompt,
		  "params": {
			"sampler_name": "k_euler_a",
			"cfg_scale": 7,
			"seed": seed,
			"height": 704,
			"width": 512,
			"steps": 28
		  },
		  "nsfw": true,
		  "trusted_workers": true,
		  "models": [
			"Yiffy"
		  ],
		  "shared": false
		}),
		headers: {
		'Content-Type': 'application/json',
		'apikey': 0000000000
		}
	});
	const myJson = await response.json();
	console.log(myJson);
	var parsedData = JSON.parse(myJson);
	document.getElementById('charVizNextGenDisplayMessage').style.display = "block";
	if (parsedData.message === "Generation Queued") {
		document.getElementById('charVizNextGenDisplayMessage').innerHTML = "Generating<br>Please wait...";
		setTimeout(checkGenerationStatus, 3000, parsedData.id);
	}
	else {
		document.getElementById('charVizNextGenDisplayMessage').innerHTML = parsedData.message;
		console.log("uwu we made a fucky wucky");
		return;
	}
}

async function checkGenerationStatus(id) {
	const response = await fetch('https://stablehorde.net/api/v2/generate/check/' + id);
	const myJson = await response.json();
	console.log(myJson);
	var parsedData = JSON.parse(myJson);
	if (parsedData.done == true) {
		getImageFromStableHorde(id)
	}
	else {
		setTimeout(checkGenerationStatus, 3000, id)
	}
}

async function getImageFromStableHorde(id) {
	const response = await fetch('https://stablehorde.net/api/v2/generate/status' + id);
	const myJson = await response.json();
	console.log(myJson);
	var parsedData = JSON.parse(myJson);
	document.getElementById('charVizNextGenDisplayMessage').display = "none";
	document.getElementById("charVizNextGenDisplayImage").style.backgroundImage = "url(" + parsedData.generations[0].img + ")"
}

async function sendToLocalimg2img(prompt, negPrompt, seed, image) {
	document.getElementById('charVizNextGenDisplayMessage').style.display = "block";
	document.getElementById('charVizNextGenDisplayMessage').innerHTML = "Generating<br>Please wait...";
	const response = await fetch('http://127.0.0.1:7860/sdapi/v1/img2img', {
		method: 'POST',
		body: JSON.stringify({
			"init_images": [
			image
			],
			"denoising_strength": 0.7,
			"prompt": prompt,
			"negative_prompt": negPrompt,
			"sampler_index": "Euler a",
			"cfg_scale": 7,
			"seed": seed,
			"height": 832,
			"width": 640,
			"steps": 50
		}),
		headers: {
		'Content-Type': 'application/json'
		}
	});
	const myJson = await response.json();
	document.getElementById('charVizNextGenDisplayMessage').style.display = "none";
	document.getElementById('charVizNextGenDisplayImage').style.display = "block";
	document.getElementById("charVizNextGenDisplayImage").style.backgroundImage = "url(data:image/png;base64," + myJson.images + ")";
	imageCache = myJson.images;
}

function getBase64String(callback){
	var image = new Image();
	image.crossOrigin = 'Anonymous';
	image.onload = function(){
		var canvas = document.createElement('canvas');
		var context = canvas.getContext('2d');
		canvas.height = this.naturalHeight;
		canvas.width = this.naturalWidth;
		context.drawImage(this, 0, 0);
		var dataURL = canvas.toDataURL('image/png');
		callback(dataURL);
	};
	image.src = 'images/fursonaCreatorAssets/reference.png';
}

function cycleOutfit(x) {
	var currentOutfit = parseInt(localStorage.getItem("CharViz_NextGen_Outfit"));
	if (isNaN(currentOutfit)) { currentOutfit = 0 }
	currentOutfit = currentOutfit + x;
	if (currentOutfit == outfits.length) 	{ currentOutfit = 0 }
	if (currentOutfit == -1) 				{ currentOutfit = outfits.length - 1 }
	localStorage.setItem("CharViz_NextGen_Outfit", currentOutfit)
	document.getElementById('notification').style.display = "block";
	document.getElementById('notification').innerHTML = "Outfit set to " + outfits[currentOutfit];
}