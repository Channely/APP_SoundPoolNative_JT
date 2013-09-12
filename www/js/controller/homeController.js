function homeController($scope){
    $scope.voice_out = function(){
        sound_out("bongo","assets/www/voice/bongo.mp3");
    }
}