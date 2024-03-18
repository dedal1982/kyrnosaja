(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Задание1_atlas_1", frames: [[0,0,900,900],[0,902,900,900],[902,0,900,900],[902,902,900,900]]},
		{name:"Задание1_atlas_2", frames: [[0,0,900,900],[0,902,900,900],[902,0,900,900],[902,902,900,900]]},
		{name:"Задание1_atlas_3", frames: [[0,0,900,900],[0,902,900,900],[902,0,900,900]]}
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
	this.initialize(ss["Задание1_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._10 = function() {
	this.initialize(ss["Задание1_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._11 = function() {
	this.initialize(ss["Задание1_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.initialize(ss["Задание1_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.initialize(ss["Задание1_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.initialize(ss["Задание1_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._5pngкопия = function() {
	this.initialize(ss["Задание1_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._6pngкопия = function() {
	this.initialize(ss["Задание1_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._7pngкопия = function() {
	this.initialize(ss["Задание1_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._8 = function() {
	this.initialize(ss["Задание1_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._9 = function() {
	this.initialize(ss["Задание1_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.бабочка = function() {
	this.initialize(img.бабочка);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1969,2785);


(lib.поле = function() {
	this.initialize(img.поле);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5692,3200);


// stage content:
(lib._1Задание = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.бабочка();
	this.instance.setTransform(240,174,0.0762,0.0762);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},24).wait(9));

	// Слой_11
	this.instance_1 = new lib._11();
	this.instance_1.setTransform(-168,48);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30).to({_off:false},0).wait(3));

	// Слой_10
	this.instance_2 = new lib._10();
	this.instance_2.setTransform(-162,50);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(27).to({_off:false},0).to({_off:true},3).wait(3));

	// Слой_9
	this.instance_3 = new lib._9();
	this.instance_3.setTransform(-116,-109);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(24).to({_off:false},0).to({_off:true},3).wait(6));

	// Слой_8
	this.instance_4 = new lib._8();
	this.instance_4.setTransform(139,-159);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(21).to({_off:false},0).to({_off:true},3).wait(9));

	// Слой_7
	this.instance_5 = new lib._7pngкопия();
	this.instance_5.setTransform(195,62);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(18).to({_off:false},0).to({_off:true},3).wait(12));

	// Слой_6
	this.instance_6 = new lib._6pngкопия();
	this.instance_6.setTransform(195,62);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(15).to({_off:false},0).to({_off:true},3).wait(15));

	// Слой_5
	this.instance_7 = new lib._5pngкопия();
	this.instance_7.setTransform(202,64);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(12).to({_off:false},0).to({_off:true},3).wait(18));

	// Слой_4
	this.instance_8 = new lib._4();
	this.instance_8.setTransform(196,52);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(9).to({_off:false},0).to({_off:true},3).wait(21));

	// Слой_3
	this.instance_9 = new lib._3();
	this.instance_9.setTransform(271,51);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(6).to({_off:false},0).to({_off:true},3).wait(24));

	// Слой_2
	this.instance_10 = new lib._2();
	this.instance_10.setTransform(360,49);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(3).to({_off:false},0).to({_off:true},3).wait(27));

	// Слой_1
	this.instance_11 = new lib._1();
	this.instance_11.setTransform(442,46);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:true},3).wait(30));

	// Слой_13
	this.instance_12 = new lib.поле();
	this.instance_12.setTransform(-706,-166,0.3514,0.3514);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(33));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-69,192.5,1411,771.5);
// library properties:
lib.properties = {
	id: 'AE6A21E71051424D8C196BF041951149',
	width: 1274,
	height: 717,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/бабочка_.png", id:"бабочка"},
		{src:"images/поле_.png", id:"поле"},
		{src:"images/Задание1_atlas_1.png", id:"Задание1_atlas_1"},
		{src:"images/Задание1_atlas_2.png", id:"Задание1_atlas_2"},
		{src:"images/Задание1_atlas_3.png", id:"Задание1_atlas_3"}
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
an.compositions['AE6A21E71051424D8C196BF041951149'] = {
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