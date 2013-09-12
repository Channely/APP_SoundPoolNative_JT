var PGLowLatencyAudio = {
  
preloadFX: function ( id, assetPath, success, fail) {
    return cordova.exec(success, fail, "PGLowLatencyAudio", "preloadFX", [id, assetPath]);
},    
    
preloadAudio: function ( id, assetPath, voices, success, fail) {
    return cordova.exec(success, fail, "PGLowLatencyAudio", "preloadAudio", [id, assetPath, voices]);
},
    
play: function (id, success, fail) {
    return cordova.exec(success, fail, "PGLowLatencyAudio", "play", [id]);
},
    
stop: function (id, success, fail) {
    return cordova.exec(success, fail, "PGLowLatencyAudio", "stop", [id]);
},
    
loop: function (id, success, fail) {
    return cordova.exec(success, fail, "PGLowLatencyAudio", "loop", [id]);
},
    
unload: function (id, success, fail) {
    return cordova.exec(success, fail, "PGLowLatencyAudio", "unload", [id]);
}
    
    
};



function sound_out(id, assetPath){
    alert('1')
    PGLowLatencyAudio.unload('bongo' ,null ,null);
    alert('12')
    PGLowLatencyAudio.preloadAudio('bongo', 'voice/bongo.mp3', 3,null,null);
    alert('123')
    PGLowLatencyAudio.play('bongo' ,null ,null);

};