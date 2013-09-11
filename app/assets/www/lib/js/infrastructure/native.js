function isOnDevice(){
    return navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/);
}

function NativeAccess() {
    this.base_access = isOnDevice() ? cordova : new MockedCordova();
}
function MockedCordova()
{
}

NativeAccess.prototype.send_sms = function (receivers, message_content, success_callback, error_callback, context) {
    this.base_access.exec(function (result) {
        success_callback.call(context, result);
    }, function (err) {
        error_callback.call(context);
    }, "MoodeSMS", "send_sms", [receivers, message_content]);
};

NativeAccess.prototype.play_voice = function (a, b, success_callback, error_callback, c) {
    this.base_access.exec(function (result) {
        success_callback.call(c, result);
    }, function (err) {
        error_callback.call(c);
    }, "MoodeSP", "play_voice", [a, b]);
};



