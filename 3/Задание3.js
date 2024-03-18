(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Задание3_atlas_1", frames: [[600,1506,565,500],[1167,1506,565,500],[1200,1004,565,500],[0,1259,598,500],[600,0,598,500],[1200,0,598,500],[600,502,598,500],[1200,502,598,500],[600,1004,598,500],[0,708,598,549],[0,0,598,706]]},
		{name:"Задание3_atlas_2", frames: [[0,0,500,500],[402,502,331,464],[0,502,400,400],[502,0,90,296]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib._1 = function() {
	this.initialize(ss["Задание3_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.initialize(ss["Задание3_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.initialize(ss["Задание3_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._3pngкопия = function() {
	this.initialize(ss["Задание3_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.initialize(ss["Задание3_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._4pngкопия = function() {
	this.initialize(ss["Задание3_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._5 = function() {
	this.initialize(ss["Задание3_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib._5pngкопия = function() {
	this.initialize(ss["Задание3_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib._6 = function() {
	this.initialize(ss["Задание3_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib._7 = function() {
	this.initialize(ss["Задание3_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib._8 = function() {
	this.initialize(ss["Задание3_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib._9pngкопия = function() {
	this.initialize(ss["Задание3_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.крыло300x = function() {
	this.initialize(ss["Задание3_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.мяч = function() {
	this.initialize(ss["Задание3_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.тело300x = function() {
	this.initialize(ss["Задание3_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Фон = function() {
	this.initialize(img.Фон);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,6325,3514);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Символ4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.крыло300x();
	this.instance.setTransform(0,0,0.3132,0.3132);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,103.7,145.4), null);


(lib.мяч2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.мяч();
	this.instance.setTransform(0,0,0.125,0.125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.мяч2, new cjs.Rectangle(0,0,50,50), null);


(lib.Анимация11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib._4pngкопия();
	this.instance.setTransform(-75,-62.7,0.2508,0.2508);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-62.7,150,125.4);


(lib.Анимация10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib._3pngкопия();
	this.instance.setTransform(-75,-66.35,0.2655,0.2655);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-66.3,150,132.7);


(lib.Анимация9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib._4();
	this.instance.setTransform(-75,-62.7,0.2508,0.2508);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-62.7,150,125.4);


(lib.Анимация8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib._3();
	this.instance.setTransform(-75,-66.35,0.2655,0.2655);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-66.3,150,132.7);


(lib.Анимация7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib._2();
	this.instance.setTransform(-70,-61.95,0.2477,0.2477);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70,-61.9,140,123.8);


(lib.мяч_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.мяч2();
	this.instance.setTransform(25,25,1,1,0,0,0,25,25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:36,y:25.05},0).wait(1).to({rotation:72},0).wait(1).to({rotation:108,x:24.95,y:24.95},0).wait(1).to({rotation:144},0).wait(1).to({rotation:180,x:25,y:25},0).wait(1).to({rotation:135,x:24.95},0).wait(1).to({rotation:90,x:25},0).wait(1).to({rotation:45,y:25.05},0).wait(1).to({rotation:0,y:25},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.3,-10.3,70.7,70.7);


(lib.крылол = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Символ4();
	this.instance.setTransform(0,72.7,1,1,0,0,0,0,72.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:51.8,scaleX:0.9011,x:46.7},0).wait(1).to({scaleX:0.8022,x:41.55},0).wait(1).to({scaleX:0.7034,x:36.45},0).wait(1).to({scaleX:0.6045,x:31.3},0).wait(1).to({scaleX:0.5056,x:26.2},0).wait(1).to({scaleX:0.4067,x:21.05},0).wait(1).to({scaleX:0.4991,x:25.85},0).wait(1).to({scaleX:0.5916,x:30.65},0).wait(1).to({scaleX:0.684,x:35.45},0).wait(1).to({scaleX:0.7765,x:40.2},0).wait(1).to({scaleX:0.8689,x:45},0).wait(1).to({scaleX:0.9613,x:49.8},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,103.7,145.4);


(lib.крылоправо = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.крылол();
	this.instance.setTransform(-216.6,55.6,0.4129,0.4129,0,0,0,0,72.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:51.8,regY:72.7,scaleX:0.3768,x:-197.1,y:55.65},0).wait(1).to({scaleX:0.3408,x:-198.95},0).wait(1).to({scaleX:0.3047,x:-200.8},0).wait(1).to({scaleX:0.2687,x:-202.7},0).wait(1).to({scaleX:0.2326,x:-204.55},0).wait(1).to({scaleX:0.1966,x:-206.4},0).wait(1).to({scaleX:0.1605,x:-208.3},0).wait(1).to({scaleX:0.1964,x:-206.45},0).wait(1).to({scaleX:0.2324,x:-204.55},0).wait(1).to({scaleX:0.2683,x:-202.7},0).wait(1).to({scaleX:0.3042,x:-200.85},0).wait(1).to({scaleX:0.3401,x:-199},0).wait(1).to({scaleX:0.376,x:-197.1},0).wait(1).to({scaleX:0.4119,x:-195.25},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-216.6,25.6,42.79999999999998,60.1);


(lib.бабочкалет = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.тело300x();
	this.instance.setTransform(32.8,2.35,0.1845,0.1845);

	this.instance_1 = new lib.крылол();
	this.instance_1.setTransform(20.7,29.35,0.3971,0.394,0,0,180,51.6,72.6);

	this.instance_2 = new lib.крылоправо();
	this.instance_2.setTransform(423.3,206.35,1,1,0,0,0,165.5,232);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.бабочкалет, new cjs.Rectangle(0,0,84,60), null);


// stage content:
(lib.Задание3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_12
	this.instance = new lib.бабочкалет();
	this.instance.setTransform(166.5,30.95,0.4266,0.4266,-59.9989,0,0,41,29.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:42,regY:30,scaleX:0.4213,scaleY:0.4213,rotation:-62.2864,x:159.4,y:28.85},0).wait(1).to({scaleX:0.416,scaleY:0.416,rotation:-64.8914,x:151.9,y:27.45},0).wait(1).to({scaleX:0.4107,scaleY:0.4107,rotation:-67.7799,x:144.4,y:26.4},0).wait(1).to({scaleX:0.4054,scaleY:0.4054,rotation:-70.9893,x:136.9,y:25.7},0).wait(1).to({scaleX:0.4001,scaleY:0.4001,rotation:-74.568,x:129.25,y:25.55},0).wait(1).to({scaleX:0.3947,scaleY:0.3947,rotation:-78.554,x:121.75,y:25.85},0).wait(1).to({scaleX:0.3894,scaleY:0.3894,rotation:-82.988,x:114.2,y:26.7},0).wait(1).to({scaleX:0.3841,scaleY:0.3841,rotation:-87.887,x:106.75,y:28.15},0).wait(1).to({scaleX:0.3788,scaleY:0.3788,rotation:-93.256,x:99.5,y:30.25},0).wait(1).to({scaleX:0.3734,scaleY:0.3734,rotation:-99.054,x:92.45,y:33.1},0).wait(1).to({scaleX:0.3681,scaleY:0.3681,rotation:-105.197,x:85.75,y:36.65},0).wait(1).to({scaleX:0.3628,scaleY:0.3628,rotation:-111.559,x:79.45,y:40.95},0).wait(1).to({scaleX:0.3575,scaleY:0.3575,rotation:-117.983,x:73.65,y:45.85},0).wait(1).to({scaleX:0.3522,scaleY:0.3522,rotation:-124.297,x:68.5,y:51.4},0).wait(1).to({scaleX:0.3468,scaleY:0.3468,rotation:-130.369,x:63.95,y:57.45},0).wait(1).to({scaleX:0.3415,scaleY:0.3415,rotation:-136.099,x:60.05,y:63.95},0).wait(1).to({scaleX:0.3362,scaleY:0.3362,rotation:-141.431,x:56.8,y:70.8},0).wait(1).to({scaleX:0.3309,scaleY:0.3309,rotation:-146.349,x:54.2,y:77.9},0).wait(1).to({scaleX:0.3256,scaleY:0.3256,rotation:-150.867,x:52.1,y:85.2},0).wait(1).to({scaleX:0.3202,scaleY:0.3202,rotation:-170.192,x:52.15,y:96.65},0).wait(1).to({scaleX:0.3149,scaleY:0.3149,rotation:-177.526,x:54.1,y:107.85},0).wait(1).to({scaleX:0.3096,scaleY:0.3096,rotation:-183.727,x:57.3,y:118.75},0).wait(1).to({scaleX:0.3043,scaleY:0.3043,rotation:-190.085,x:61.65,y:129.2},0).wait(1).to({scaleX:0.2989,scaleY:0.2989,rotation:-197.256,x:67.25,y:139.1},0).wait(1).to({scaleX:0.2936,scaleY:0.2936,rotation:-205.744,x:74.15,y:148.15},0).wait(1).to({scaleX:0.2883,scaleY:0.2883,rotation:-215.866,x:82.45,y:156.05},0).wait(1).to({scaleX:0.283,scaleY:0.283,rotation:-227.513,x:92,y:162.15},0).wait(1).to({scaleX:0.2777,scaleY:0.2777,rotation:-239.707,x:102.65,y:166.1},0).wait(1).to({scaleX:0.2723,scaleY:0.2723,rotation:-248.377,x:113.9,y:168.15},0).wait(1).to({scaleX:0.267,scaleY:0.267,rotation:-255.348,x:125.2,y:168.5},0).wait(1).to({scaleX:0.2617,scaleY:0.2617,rotation:-260.9939,x:136.6,y:167.7},0).wait(1).to({scaleX:0.2564,scaleY:0.2564,rotation:-265.6886,x:147.8,y:165.9},0).wait(1).to({scaleX:0.2511,scaleY:0.2511,rotation:-269.7274,x:158.8,y:163.25},0).wait(1).to({scaleX:0.2457,scaleY:0.2457,rotation:-273.3318,x:169.65,y:159.9},0).wait(1).to({scaleX:0.2404,scaleY:0.2404,rotation:-276.7048,x:180.3,y:155.9},0).wait(1).to({scaleX:0.2351,scaleY:0.2351,rotation:-280.0413,x:190.6,y:151.2},0).wait(1).to({scaleX:0.2298,scaleY:0.2298,rotation:-283.5922,x:200.7,y:145.95},0).wait(1).to({scaleX:0.2245,scaleY:0.2245,rotation:-287.8022,x:210.45,y:140.05},0).wait(1).to({scaleX:0.2191,scaleY:0.2191,rotation:-293.7904,x:219.55,y:133.3},0).wait(1).to({scaleX:0.2218,scaleY:0.2218,rotation:-267.8516,x:227.95,y:131.25},0).wait(1).to({scaleX:0.2245,scaleY:0.2245,x:236.45,y:129.2},0).wait(1).to({scaleX:0.2272,scaleY:0.2272,rotation:-279.9024,x:244.7,y:126.9},0).wait(1).to({scaleX:0.2299,scaleY:0.2299,rotation:-282.3513,x:252.7,y:122.85},0).wait(1).to({scaleX:0.2327,scaleY:0.2327,rotation:-283.4343,x:260.35,y:118.6},0).wait(1).to({scaleX:0.2354,scaleY:0.2354,rotation:-284.405,x:268,y:114.25},0).wait(1).to({scaleX:0.2381,scaleY:0.2381,rotation:-285.4493,x:275.5,y:109.85},0).wait(1).to({scaleX:0.2408,scaleY:0.2408,rotation:-286.6963,x:283,y:105.25},0).wait(1).to({scaleX:0.2435,scaleY:0.2435,rotation:-288.3844,x:290.5,y:100.25},0).wait(1).to({scaleX:0.2462,scaleY:0.2462,rotation:-275.7946,x:298.15,y:96.65},0).wait(1).to({scaleX:0.2489,scaleY:0.2489,rotation:-272.5141,x:306.4,y:93.7},0).wait(1).to({scaleX:0.2516,scaleY:0.2516,rotation:-270.2587,x:314.75,y:91.1},0).wait(1).to({scaleX:0.2543,scaleY:0.2543,rotation:-268.2671,x:323.25,y:88.8},0).wait(1).to({scaleX:0.257,scaleY:0.257,rotation:-266.3269,x:331.7,y:86.9},0).wait(1).to({scaleX:0.2597,scaleY:0.2597,rotation:-264.3298,x:340.25,y:85.25},0).wait(1).to({scaleX:0.2624,scaleY:0.2624,rotation:-258.461,x:348.95,y:84.2},0).wait(1).to({scaleX:0.2651,scaleY:0.2651,rotation:-253.213,x:357.7,y:83.9},0).wait(1).to({scaleX:0.2678,scaleY:0.2678,rotation:-248.669,x:366.35,y:84.5},0).wait(1).to({scaleX:0.2705,scaleY:0.2705,rotation:-244.29,x:375.05,y:85.7},0).wait(1).to({scaleX:0.2732,scaleY:0.2732,rotation:-239.081,x:383.55,y:87.55},0).wait(1).to({scaleX:0.2759,scaleY:0.2759,rotation:-225.698,x:391.75,y:90.5},0).wait(1).to({scaleX:0.2786,scaleY:0.2786,rotation:-235.377,x:396.15,y:92},0).wait(1).to({scaleX:0.2813,scaleY:0.2813,rotation:-232.156,x:400.5,y:93.55},0).wait(1).to({scaleX:0.284,scaleY:0.284,rotation:-228.575,x:404.65,y:95.45},0).wait(1).to({scaleX:0.2867,scaleY:0.2867,rotation:-224.6,x:408.75,y:97.6},0).wait(1).to({scaleX:0.2894,scaleY:0.2894,rotation:-220.228,x:412.65,y:100},0).wait(1).to({scaleX:0.2921,scaleY:0.2921,rotation:-215.472,x:416.3,y:102.7},0).wait(1).to({scaleX:0.2948,scaleY:0.2948,rotation:-210.385,x:419.8,y:105.7},0).wait(1).to({scaleX:0.2975,scaleY:0.2975,rotation:-205.057,x:422.9,y:109.1},0).wait(1).to({scaleX:0.3002,scaleY:0.3002,rotation:-199.613,x:425.75,y:112.7},0).wait(1).to({scaleX:0.3029,scaleY:0.3029,rotation:-194.194,x:428.2,y:116.55},0).wait(1).to({scaleX:0.3056,scaleY:0.3056,rotation:-188.937,x:430.3,y:120.65},0).wait(1).to({scaleX:0.3084,scaleY:0.3084,rotation:-183.965,x:432.05,y:124.85},0).wait(1).to({scaleX:0.3111,scaleY:0.3111,rotation:-179.347,x:433.4,y:129.25},0).wait(1).to({scaleX:0.3138,scaleY:0.3138,rotation:-165.692,x:434.2,y:133.75},0).wait(1).to({scaleX:0.3165,scaleY:0.3165,rotation:-163.068,x:434.15,y:138.35},0).wait(1).to({scaleX:0.3192,scaleY:0.3192,rotation:-161.087,x:433.95,y:142.95},0).wait(1).to({scaleX:0.3219,scaleY:0.3219,rotation:-159.177,x:433.65,y:147.5},0).wait(1).to({scaleX:0.3246,scaleY:0.3246,rotation:-156.987,x:433.15,y:152.15},0).wait(1).to({scaleX:0.3273,scaleY:0.3273,rotation:-154.112,x:432.45,y:156.7},0).wait(1).to({scaleX:0.33,scaleY:0.33,rotation:-149.659,x:431.45,y:161.25},0).wait(1).to({scaleX:0.3327,scaleY:0.3327,rotation:-140.528,x:430,y:165.6},0).wait(1).to({scaleX:0.3354,scaleY:0.3354,rotation:-118.703,x:428.2,y:168.5},0).wait(1).to({scaleX:0.3381,scaleY:0.3381,rotation:-120.269,x:424.15,y:172.4},0).wait(1).to({scaleX:0.3408,scaleY:0.3408,rotation:-217.888,x:421.5,y:176.7},0).wait(1).to({scaleX:0.3435,scaleY:0.3435,rotation:-113.654,x:416.25,y:181.65},0).wait(1).to({scaleX:0.3462,scaleY:0.3462,rotation:-107.626,x:410,y:186.2},0).wait(1).to({scaleX:0.3489,scaleY:0.3489,rotation:-103.524,x:403.35,y:190.2},0).wait(1).to({scaleX:0.3516,scaleY:0.3516,rotation:-100.078,x:396.5,y:193.75},0).wait(1).to({scaleX:0.3543,scaleY:0.3543,rotation:-96.893,x:389.4,y:196.95},0).wait(1).to({scaleX:0.357,scaleY:0.357,rotation:-93.791,x:382.2,y:199.75},0).wait(1).to({scaleX:0.3597,scaleY:0.3597,rotation:-90.671,x:374.8,y:202.1},0).wait(1).to({scaleX:0.3624,scaleY:0.3624,rotation:-87.47,x:367.3,y:204.1},0).wait(1).to({scaleX:0.3651,scaleY:0.3651,rotation:-84.146,x:359.7,y:205.6},0).wait(1).to({scaleX:0.3678,scaleY:0.3678,rotation:-80.657,x:352.05,y:206.7},0).wait(1).to({scaleX:0.3705,scaleY:0.3705,rotation:-76.993,x:344.35,y:207.3},0).wait(1).to({scaleX:0.3732,scaleY:0.3732,rotation:-73.1402,x:336.6,y:207.4},0).wait(1).to({scaleX:0.3759,scaleY:0.3759,rotation:-70.6286,x:328.85,y:207.05},0).wait(1).to({scaleX:0.3786,scaleY:0.3786,rotation:-69.5874,x:321.1,y:206.45},0).wait(1).to({scaleX:0.3813,scaleY:0.3813,rotation:-68.456,x:313.4,y:205.75},0).wait(1).to({scaleX:0.384,scaleY:0.384,rotation:-67.199,x:305.65,y:204.85},0).wait(1).to({scaleX:0.3868,scaleY:0.3868,rotation:-65.7668,x:298,y:203.8},0).wait(1).to({scaleX:0.3895,scaleY:0.3895,rotation:-64.0685,x:290.3,y:202.55},0).wait(1).to({scaleX:0.3922,scaleY:0.3922,rotation:-61.9249,x:282.75,y:201},0).wait(1).to({scaleX:0.3949,scaleY:0.3949,rotation:-58.8941,x:275.2,y:199.15},0).wait(1).to({scaleX:0.3976,scaleY:0.3976,rotation:-53.1518,x:267.65,y:196.75},0).wait(1).to({scaleX:0.4003,scaleY:0.4003,rotation:-14.8603,x:261.4,y:193.1},0).wait(1).to({rotation:-44.2386,x:255.3,y:189.4},0).wait(1).to({rotation:-44.1299,x:249.25,y:185.95},0).wait(1).to({rotation:-44.0229,x:243.25,y:182.45},0).wait(1).to({rotation:-43.9087,x:237.25,y:178.95},0).wait(1).to({rotation:-43.781,x:231.25,y:175.35},0).wait(1).to({rotation:-43.6328,x:225.25,y:171.9},0).wait(1).to({rotation:-43.4547,x:219.3,y:168.3},0).wait(1).to({rotation:-43.2309,x:213.3,y:164.75},0).wait(1).to({rotation:-42.9337,x:207.4,y:161.15},0).wait(1).to({rotation:-42.5059,x:201.45,y:157.5},0).wait(1).to({rotation:-41.801,x:195.6,y:153.8},0).wait(1).to({rotation:-40.2539,x:189.8,y:150},0).wait(1).to({rotation:-23.3512,x:184.4,y:145.85},0).wait(1));

	// Слой_11
	this.instance_1 = new lib.бабочкалет();
	this.instance_1.setTransform(849.85,58.5,0.46,0.46,-59.9998,0,0,42,31.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regY:30,rotation:-61.1719,x:842.45,y:54.75},0).wait(1).to({rotation:-62.4395,x:835.65,y:51.5},0).wait(1).to({rotation:-63.7714,x:828.8,y:48.4},0).wait(1).to({rotation:-65.1713,x:821.75,y:45.5},0).wait(1).to({rotation:-66.6414,x:814.7,y:42.75},0).wait(1).to({rotation:-68.1859,x:807.65,y:40.25},0).wait(1).to({rotation:-69.805,x:800.45,y:37.85},0).wait(1).to({rotation:-71.5037,x:793.3,y:35.75},0).wait(1).to({rotation:-73.282,x:785.9,y:33.8},0).wait(1).to({rotation:-75.1425,x:778.6,y:32.15},0).wait(1).to({rotation:-77.083,x:771.15,y:30.65},0).wait(1).to({rotation:-79.1046,x:763.75,y:29.5},0).wait(1).to({rotation:-81.2034,x:756.25,y:28.55},0).wait(1).to({rotation:-83.3765,x:748.75,y:27.95},0).wait(1).to({rotation:-85.6175,x:741.2,y:27.6},0).wait(1).to({rotation:-87.919,x:733.65,y:27.55},0).wait(1).to({rotation:-90.274,x:726.1,y:27.85},0).wait(1).to({rotation:-92.671,x:718.6,y:28.35},0).wait(1).to({rotation:-95.1,x:711.1,y:29.25},0).wait(1).to({rotation:-97.546,x:703.65,y:30.5},0).wait(1).to({rotation:-99.996,x:696.25,y:32},0).wait(1).to({rotation:-102.436,x:688.95,y:33.9},0).wait(1).to({rotation:-104.855,x:681.7,y:36},0).wait(1).to({rotation:-107.24,x:674.55,y:38.45},0).wait(1).to({rotation:-109.581,x:667.55,y:41.25},0).wait(1).to({rotation:-111.864,x:660.6,y:44.2},0).wait(1).to({rotation:-114.085,x:653.8,y:47.5},0).wait(1).to({rotation:-116.235,x:647.15,y:51.05},0).wait(1).to({rotation:-118.309,x:640.65,y:54.85},0).wait(1).to({rotation:-120.307,x:634.2,y:58.9},0).wait(1).to({rotation:-136.441,x:629.7,y:64.25},0).wait(1).to({rotation:-139.153,x:625.3,y:69.6},0).wait(1).to({rotation:-142.55,x:621.15,y:75.3},0).wait(1).to({rotation:-146.929,x:617.4,y:81.2},0).wait(1).to({rotation:-152.774,x:614.2,y:87.5},0).wait(1).to({rotation:-160.732,x:611.85,y:94},0).wait(1).to({rotation:-171.544,x:610.65,y:100.9},0).wait(1).to({rotation:-185.685,x:611,y:107.85},0).wait(1).to({rotation:-201.422,x:613.1,y:114.5},0).wait(1).to({rotation:-215.77,x:616.95,y:120.35},0).wait(1).to({rotation:-226.816,x:621.95,y:125.2},0).wait(1).to({rotation:-234.962,x:627.65,y:129.25},0).wait(1).to({rotation:-240.925,x:633.85,y:132.65},0).wait(1).to({rotation:-245.391,x:640.25,y:135.4},0).wait(1).to({rotation:-248.85,x:646.85,y:137.75},0).wait(1).to({rotation:-251.603,x:653.5,y:139.8},0).wait(1).to({rotation:-253.849,x:660.3,y:141.5},0).wait(1).to({rotation:-255.718,x:667.15,y:143},0).wait(1).to({rotation:-257.299,x:674,y:144.3},0).wait(1).to({rotation:-258.659,x:680.85,y:145.45},0).wait(1).to({rotation:-259.842,x:687.8,y:146.35},0).wait(1).to({rotation:-260.8807,x:694.75,y:147.2},0).wait(1).to({rotation:-261.8032,x:701.7,y:147.95},0).wait(1).to({rotation:-262.6286,x:708.6,y:148.55},0).wait(1).to({rotation:-263.3725,x:715.6,y:149.05},0).wait(1).to({rotation:-264.0467,x:722.6,y:149.45},0).wait(1).to({rotation:-264.661,x:729.55,y:149.85},0).wait(1).to({rotation:-265.2244,x:736.6,y:150.15},0).wait(1).to({rotation:-265.7434,x:743.55,y:150.35},0).wait(1).to({rotation:-387.6278,x:738.5,y:143.85},0).wait(1).to({rotation:-378.355,x:735.3,y:136.8},0).wait(1).to({rotation:-304.4213,x:736.6,y:131.7},0).wait(1).to({rotation:-295.3062,x:742.75,y:128.05},0).wait(1).to({rotation:-291.2374,x:749.25,y:125.05},0).wait(1).to({rotation:-288.3266,x:755.75,y:122.4},0).wait(1).to({rotation:-285.9412,x:762.45,y:120.1},0).wait(1).to({rotation:-283.879,x:769.2,y:117.95},0).wait(1).to({rotation:-282.04,x:776,y:116.1},0).wait(1).to({rotation:-280.3664,x:782.9,y:114.45},0).wait(1).to({rotation:-278.8255,x:789.75,y:112.95},0).wait(1).to({rotation:-277.3946,x:796.7,y:111.7},0).wait(1).to({rotation:-280.7052,x:803.65,y:110.25},0).wait(1).to({rotation:-282.6353,x:810.5,y:108.45},0).wait(1).to({rotation:-284.7326,x:817.2,y:106.45},0).wait(1).to({rotation:-288.3211,x:823.9,y:104.1},0).wait(1).to({rotation:-303.2883,x:830.55,y:100.6},0).wait(1).to({rotation:-413.6095,x:827.55,y:95.75},0).wait(1).to({rotation:-421.5234,x:821.35,y:92.4},0).wait(1).to({rotation:-426.0185,x:814.8,y:89.6},0).wait(1).to({rotation:-429.5147,x:808.15,y:87.35},0).wait(1).to({rotation:-432.4962,x:801.35,y:85.35},0).wait(1).to({rotation:-433.8892,x:794.5,y:83.75},0).wait(1).to({rotation:-432.7482,x:787.7,y:82},0).wait(1).to({rotation:-431.0526,x:780.85,y:80.15},0).wait(1).to({rotation:-428.0404,x:774.1,y:77.9},0).wait(1).to({rotation:-419.6759,x:767.65,y:75.05},0).wait(1).to({rotation:-288.2382,x:767.5,y:70.55},0).wait(1).to({rotation:-265.9458,x:774.75,y:70},0).wait(1).to({rotation:-134.142,x:769.6,y:75.15},0).wait(1).to({rotation:-128.839,x:765.2,y:79.35},0).wait(1).to({rotation:-124.677,x:760.4,y:83.15},0).wait(1).to({rotation:-121.027,x:755.45,y:86.65},0).wait(1).to({rotation:-117.56,x:750.25,y:89.75},0).wait(1).to({rotation:-114.11,x:744.9,y:92.6},0).wait(1).to({rotation:-110.55,x:739.3,y:95.15},0).wait(1).to({rotation:-106.783,x:733.65,y:97.3},0).wait(1).to({rotation:-102.718,x:727.85,y:99.05},0).wait(1).to({rotation:-98.27,x:721.9,y:100.4},0).wait(1).to({rotation:-93.372,x:715.95,y:101.2},0).wait(1).to({rotation:-87.972,x:709.9,y:101.5},0).wait(1).to({rotation:-82.06,x:703.75,y:101.1},0).wait(1).to({rotation:-75.684,x:697.8,y:100.15},0).wait(1).to({rotation:-68.9689,x:692,y:98.45},0).wait(1).to({rotation:-62.1143,x:686.4,y:96.1},0).wait(1).to({rotation:-55.3713,x:681.15,y:93.15},0).wait(1).to({rotation:-48.95,x:676.25,y:89.55},0).wait(1).to({rotation:-43.0216,x:671.7,y:85.45},0).wait(1).to({rotation:-41.8446,x:667.45,y:81.15},0).wait(1).to({rotation:-41.5778,x:663.2,y:76.8},0).wait(1).to({rotation:-41.2842,x:659,y:72.4},0).wait(1).to({rotation:-40.9566,x:654.8,y:68.05},0).wait(1).to({rotation:-40.5849,x:650.65,y:63.65},0).wait(1).to({rotation:-40.1527,x:646.5,y:59.2},0).wait(1).to({rotation:-39.6354,x:642.4,y:54.75},0).wait(1).to({rotation:-38.9874,x:638.35,y:50.2},0).wait(1).to({rotation:-38.1161,x:634.35,y:45.55},0).wait(1).to({rotation:-36.7746,x:630.45,y:40.9},0).wait(1).to({rotation:-33.9891,x:626.6,y:36.05},0).wait(1).to({rotation:89.3099,x:625.3,y:31.55},0).wait(1));

	// тело_300x_png
	this.instance_2 = new lib.бабочкалет();
	this.instance_2.setTransform(60.65,79.3,1,1,119.9992,0,0,43.1,30.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(25).to({_off:false},0).wait(1).to({regX:42,regY:30,scaleX:0.9793,scaleY:0.9793,rotation:119.999,x:80.8,y:89.85},0).wait(1).to({scaleX:0.9585,scaleY:0.9585,x:99.65,y:100.95},0).wait(1).to({scaleX:0.9378,scaleY:0.9378,x:118.55,y:112.15},0).wait(1).to({scaleX:0.9171,scaleY:0.9171,x:137.4,y:123.25},0).wait(1).to({scaleX:0.8963,scaleY:0.8963,x:156.3,y:134.35},0).wait(1).to({scaleX:0.8756,scaleY:0.8756,x:175.15,y:145.5},0).wait(1).to({scaleX:0.8549,scaleY:0.8549,x:194,y:156.65},0).wait(1).to({scaleX:0.8341,scaleY:0.8341,x:212.9,y:167.75},0).wait(1).to({scaleX:0.8134,scaleY:0.8134,x:231.7,y:178.9},0).wait(1).to({scaleX:0.7927,scaleY:0.7927,x:250.6,y:190},0).wait(1).to({scaleX:0.7719,scaleY:0.7719,x:269.5,y:201.1},0).wait(1).to({scaleX:0.7512,scaleY:0.7512,x:288.4,y:212.25},0).wait(1).to({scaleX:0.7304,scaleY:0.7304,x:307.15,y:223.35},0).wait(1).to({scaleX:0.7097,scaleY:0.7097,x:326.05,y:234.45},0).wait(1).to({scaleX:0.689,scaleY:0.689,x:344.95,y:245.6},0).wait(1).to({scaleX:0.6682,scaleY:0.6682,x:363.8,y:256.75},0).wait(1).to({scaleX:0.6475,scaleY:0.6475,x:382.7,y:267.85},0).wait(1).to({scaleX:0.6268,scaleY:0.6268,x:401.55,y:279},0).wait(1).to({scaleX:0.606,scaleY:0.606,x:420.35,y:290.1},0).wait(1).to({scaleX:0.5853,scaleY:0.5853,x:439.25,y:301.2},0).wait(1).to({scaleX:0.5646,scaleY:0.5646,x:458.15,y:312.4},0).wait(1).to({scaleX:0.5438,scaleY:0.5438,x:477,y:323.5},0).wait(1).to({scaleX:0.5231,scaleY:0.5231,x:495.85,y:334.6},0).wait(1).to({scaleX:0.5024,scaleY:0.5024,x:514.75,y:345.7},0).wait(1).to({rotation:108.583,x:537.55,y:356.6},0).wait(1).to({rotation:61.7008,x:561.9,y:356.85},0).wait(1).to({rotation:46.5164,x:564.8,y:354.55},0).wait(1).to({rotation:34.8007,x:567.3,y:351.65},0).wait(1).to({rotation:26.9127,x:569.2,y:348.3},0).wait(1).to({rotation:21.3908,x:570.75,y:344.75},0).wait(1).to({rotation:17.3325,x:572.05,y:341.1},0).wait(1).to({rotation:14.2257,x:573.1,y:337.3},0).wait(1).to({rotation:11.7948,x:573.95,y:333.5},0).wait(1).to({rotation:9.8214,x:574.75,y:329.7},0).wait(1).to({rotation:8.1722,x:575.35,y:325.8},0).wait(1).to({rotation:6.7601,x:575.9,y:321.9},0).wait(1).to({rotation:-16.405,x:573.75,y:304.85},0).wait(1).to({rotation:-46.1665,x:564.95,y:290.3},0).wait(1).to({rotation:-73.7324,x:549.9,y:282.1},0).wait(1).to({rotation:-88.9895,x:532.8,y:279.8},0).wait(1).to({rotation:-97.378,x:515.45,y:280.8},0).wait(1).to({rotation:-102.568,x:498.3,y:283.8},0).wait(1).to({rotation:-106.111,x:481.4,y:288.1},0).wait(1).to({rotation:-108.695,x:464.7,y:293.2},0).wait(1).to({rotation:-106.425,x:452.6,y:295.95},0).wait(1).to({rotation:-110.403,x:440.9,y:299.8},0).wait(1).to({rotation:-112.939,x:429.4,y:304.35},0).wait(1).to({rotation:-114.722,x:418.05,y:309.3},0).wait(1).to({rotation:-116.059,x:406.85,y:314.55},0).wait(1).to({rotation:-109.928,x:393,y:318.15},0).wait(1).to({rotation:-117.89,x:380.15,y:323.9},0).wait(1).to({rotation:-124.478,x:368.05,y:331.15},0).wait(1).to({rotation:-129.864,x:356.75,y:339.7},0).wait(1).to({rotation:-244.631,x:370.2,y:352.6},0).wait(1).to({rotation:-266.1106,x:389.1,y:357.1},0).wait(1).to({rotation:-278.4052,x:408.75,y:356.1},0).wait(1).to({rotation:-285.2699,x:428,y:352.05},0).wait(1).to({rotation:-290.7092,x:446.8,y:346.1},0).wait(1).to({rotation:-301.3595,x:464.7,y:337.9},0).wait(1).to({rotation:-286.762,x:473.75,y:335.4},0).wait(1).to({x:482.65,y:332.8},0).wait(1).to({rotation:-284.4996,x:491.6,y:330.4},0).wait(1).to({rotation:-282.4205,x:500.65,y:328.3},0).wait(1).to({rotation:-276.3457,x:509.8,y:326.75},0).wait(1).to({rotation:-265.0786,x:519.2,y:327.35},0).wait(1).to({rotation:-239.808,x:527.45,y:331.7},0).wait(1).to({rotation:-240.642,x:535.45,y:336.35},0).wait(1).to({rotation:-242.826,x:543.55,y:340.75},0).wait(1).to({rotation:-246.755,x:551.85,y:344.8},0).wait(1).to({rotation:-251.032,x:560.5,y:348.1},0).wait(1).to({rotation:-256.285,x:569.3,y:350.8},0).wait(1).to({rotation:-297.3751,x:578,y:351.9},0).wait(1).to({rotation:-309.6989,x:584.95,y:346.1},0).wait(1).to({rotation:-356.1131,x:590.8,y:340.1},0).wait(1).to({rotation:-355.5255,x:591.5,y:331},0).wait(1).to({rotation:-306.9526,x:593.25,y:321.7},0).wait(1).to({rotation:-416.3885,x:583.1,y:313.4},0).wait(1).to({rotation:-436.4938,x:571.05,y:308.1},0).wait(1).to({rotation:-449.1141,x:557.9,y:307.2},0).wait(1).to({rotation:-515.61,x:545.3,y:307.55},0).wait(1).to({rotation:-415.6169,x:528.65,y:304.05},0).wait(1).to({rotation:-362.5057,x:520.3,y:289.8},0).wait(1).to({rotation:-322.3234,x:522.75,y:276.35},0).wait(1).to({rotation:-269.5166,x:535.9,y:271.65},0).wait(1).to({rotation:-288.4008,x:549.35,y:272.25},0).wait(1).to({rotation:-318.837,x:561.95,y:267.35},0).wait(1).to({rotation:-284.6,x:574,y:260.15},0).wait(1).to({rotation:-273.0104,x:588,y:258.5},0).wait(1).to({rotation:-261.0173,x:602.1,y:259},0).wait(6));

	// Слой_1
	this.instance_3 = new lib.мяч_1();
	this.instance_3.setTransform(-22.95,448,1,1,0,0,0,25,25);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({x:-10.5,y:446.95},0).wait(1).to({x:1.85,y:445.9},0).wait(1).to({x:14.2,y:444.9},0).wait(1).to({x:26.5,y:443.95},0).wait(1).to({x:38.8,y:443},0).wait(1).to({x:51.1,y:442.1},0).wait(1).to({x:63.35,y:441.2},0).wait(1).to({x:75.6,y:440.35},0).wait(1).to({x:87.8,y:439.5},0).wait(1).to({x:99.95,y:438.65},0).wait(1).to({x:112.15,y:437.9},0).wait(1).to({x:124.25,y:437.1},0).wait(1).to({x:136.35,y:436.35},0).wait(1).to({x:148.45,y:435.65},0).wait(1).to({x:160.5,y:434.95},0).wait(1).to({x:172.55,y:434.3},0).wait(1).to({x:184.55,y:433.65},0).wait(1).to({x:196.55,y:433.05},0).wait(1).to({x:208.5,y:432.45},0).wait(1).to({x:220.45,y:431.9},0).wait(1).to({x:232.4,y:431.35},0).wait(1).to({x:244.25,y:430.85},0).wait(1).to({x:256.15,y:430.35},0).wait(1).to({x:268,y:429.9},0).wait(1).to({x:279.8,y:429.45},0).wait(1).to({x:291.6,y:429.05},0).wait(1).to({x:303.35,y:428.65},0).wait(1).to({x:315.1,y:428.25},0).wait(1).to({x:326.85,y:427.95},0).wait(1).to({x:338.55,y:427.6},0).wait(1).to({x:350.2,y:427.35},0).wait(1).to({x:361.85,y:427.05},0).wait(1).to({x:373.5,y:426.85},0).wait(1).to({x:385.1,y:426.6},0).wait(1).to({x:396.65,y:426.45},0).wait(1).to({x:408.2,y:426.25},0).wait(1).to({x:419.75,y:426.15},0).wait(1).to({x:431.25,y:426},0).wait(1).to({x:442.75,y:425.95},0).wait(1).to({x:454.2,y:425.85},0).wait(1).to({x:465.6},0).wait(1).to({x:477.05,y:425.8},0).wait(1).to({x:488.4,y:425.85},0).wait(1).to({x:499.8},0).wait(1).to({x:511.1,y:425.95},0).wait(1).to({x:522.45,y:426},0).wait(1).to({x:533.75,y:426.15},0).wait(1).to({x:545,y:426.25},0).wait(1).to({x:556.25,y:426.45},0).wait(1).to({x:567.45,y:426.6},0).wait(1).to({x:578.65,y:426.85},0).wait(1).to({x:589.85,y:427.05},0).wait(1).to({x:601,y:427.35},0).wait(1).to({x:612.1,y:427.6},0).wait(1).to({x:623.2,y:427.95},0).wait(1).to({x:634.3,y:428.25},0).wait(1).to({x:645.35,y:428.65},0).wait(1).to({x:656.35,y:429.05},0).wait(1).to({x:667.4,y:429.45},0).wait(1).to({x:678.35,y:429.9},0).wait(1).to({x:689.35,y:430.35},0).wait(1).to({x:700.25,y:430.85},0).wait(1).to({x:711.2,y:431.35},0).wait(1).to({x:722.05,y:431.9},0).wait(1).to({x:732.95,y:432.45},0).wait(1).to({x:743.8,y:433.05},0).wait(1).to({x:754.6,y:433.65},0).wait(1).to({x:765.4,y:434.3},0).wait(1).to({x:776.15,y:434.95},0).wait(1).to({x:786.9,y:435.65},0).wait(1).to({x:797.65,y:436.35},0).wait(1).to({x:808.35,y:437.1},0).wait(1).to({x:819.05,y:437.9},0).wait(1).to({x:829.7,y:438.65},0).wait(1).to({x:840.3,y:439.5},0).wait(1).to({x:850.95,y:440.35},0).wait(1).to({x:861.5,y:441.2},0).wait(1).to({x:872.1,y:442.1},0).wait(1).to({x:882.6,y:443},0).wait(1).to({x:893.15,y:443.95},0).wait(1).to({x:903.65,y:444.9},0).wait(1).to({x:914.1,y:445.9},0).wait(1).to({x:924.55,y:446.95},0).wait(1).to({x:935,y:448},0).to({_off:true},1).wait(35));

	// Собака
	this.instance_4 = new lib._5();
	this.instance_4.setTransform(365,337,0.2508,0.2508);

	this.instance_5 = new lib._6();
	this.instance_5.setTransform(357,339,0.2508,0.2508);

	this.instance_6 = new lib._5pngкопия();
	this.instance_6.setTransform(365,337,0.2508,0.2508);

	this.instance_7 = new lib._7();
	this.instance_7.setTransform(365,337,0.2508,0.2508);

	this.instance_8 = new lib._8();
	this.instance_8.setTransform(376,315,0.2508,0.2508);

	this.instance_9 = new lib._9pngкопия();
	this.instance_9.setTransform(396,274,0.2508,0.2508);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},50).to({state:[{t:this.instance_5}]},25).to({state:[{t:this.instance_6}]},17).to({state:[{t:this.instance_7,p:{x:365}}]},7).to({state:[{t:this.instance_7,p:{x:406}}]},1).to({state:[{t:this.instance_8}]},6).to({state:[{t:this.instance_9,p:{x:396}}]},7).to({state:[{t:this.instance_9,p:{x:435}}]},1).wait(6));

	// Собака
	this.instance_10 = new lib._1();
	this.instance_10.setTransform(11,344,0.24,0.24);

	this.instance_11 = new lib.Анимация7("synched",0);
	this.instance_11.setTransform(96,396.95);
	this.instance_11._off = true;

	this.instance_12 = new lib.Анимация8("synched",0);
	this.instance_12.setTransform(157,403.35);
	this.instance_12._off = true;

	this.instance_13 = new lib.Анимация9("synched",0);
	this.instance_13.setTransform(221,396.7);
	this.instance_13._off = true;

	this.instance_14 = new lib.Анимация10("synched",0);
	this.instance_14.setTransform(303,406.35);
	this.instance_14._off = true;

	this.instance_15 = new lib.Анимация11("synched",0);
	this.instance_15.setTransform(375,402.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10}]}).to({state:[{t:this.instance_11}]},25).to({state:[{t:this.instance_12}]},5).to({state:[{t:this.instance_13}]},5).to({state:[{t:this.instance_14}]},5).to({state:[{t:this.instance_15}]},5).to({state:[]},5).wait(70));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(25).to({_off:false},0).to({_off:true,x:157,y:403.35},5).wait(90));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(25).to({_off:false},5).to({_off:true,x:221,y:396.7},5).wait(85));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(30).to({_off:false},5).to({_off:true,x:303,y:406.35},5).wait(80));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(35).to({_off:false},5).to({_off:true,x:375,y:402.7},5).wait(75));

	// Фон
	this.instance_16 = new lib.Фон();
	this.instance_16.setTransform(-5,0,0.1423,0.1423);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(120));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(397.1,250,562.9,250);
// library properties:
lib.properties = {
	id: 'FB5C9135BE7E441CB058AB9851CCDBFA',
	width: 890,
	height: 500,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Фон_.jpg", id:"Фон"},
		{src:"images/Задание3_atlas_1.png", id:"Задание3_atlas_1"},
		{src:"images/Задание3_atlas_2.png", id:"Задание3_atlas_2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['FB5C9135BE7E441CB058AB9851CCDBFA'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;