(function(){
  'use strict';
  function AudioBank(base){
    this.base=base||'assets/audio/';
    this.enabled=true;
    this.volume=0.28;
    this.current=null;
    this.items={
      tap:new Audio(this.base+'tap.mp3'),
      open:new Audio(this.base+'open.mp3'),
      close:new Audio(this.base+'close.mp3')
    };
    var k,a;for(k in this.items){if(this.items.hasOwnProperty(k)){a=this.items[k];a.preload='auto';a.volume=this.volume;}}
  }
  AudioBank.prototype.play=function(name){
    if(!this.enabled||!this.items[name])return;
    if(this.current&&!this.current.paused){try{this.current.pause();this.current.currentTime=0;}catch(e){}}
    var audio=this.items[name];try{audio.currentTime=0;}catch(e){}
    this.current=audio;var p;try{p=audio.play();if(p&&typeof p.catch==='function')p.catch(function(){});}catch(e){}
  };
  AudioBank.prototype.preload=function(){var k;for(k in this.items){if(this.items.hasOwnProperty(k)){try{this.items[k].load();}catch(e){}}}};
  window.AudioBank=AudioBank;
})();