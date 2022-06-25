var video = document.getElementById("video_background");
video.addEventListener("canplay", function() {
    setTimeout(function() {
    video.play();
}, 3000);
});

var videoFeature = document.getElementById("video_feature");
videoFeature.addEventListener("canplay", function() {
    setTimeout(function() {
    videoFeature.play();
}, 3000);
});

