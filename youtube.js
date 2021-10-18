window.onload = function(){ 
    var outerLayer = document.getElementsByClassName('video-ads ytp-ad-module');
    var videoAd = document.getElementsByClassName('ytp-ad-player-overlay'); // popup ads in video
    var imageAd = document.getElementsByClassName('ytp-ad-image-overlay');
    var button = document.getElementsByClassName('ytp-ad-skip-button ytp-button');
    var firstAd = document.getElementsByClassName('ytp-ad-text');

    function skipFirstInner(callback) {
        if (videoAd[0] && videoAd.length > 0) {
            videoAd[0].style.visibility = 'hidden';
            callback();
        }
        else if (imageAd[0] && imageAd.length > 0) {
            imageAd[0].style.visibility = 'hidden';
            callback();
        }
    }

    function clickSkipBtn() {
        if(button[0] && button.length > 0) {
            button[0].click();
        }
    }

    setInterval(function(){ 
        // remove ads that pops up in the video frame
        if (outerLayer && outerLayer.length > 0) {
            clickSkipBtn();
            skipFirstInner(function() {
                if((firstAd && firstAd[2] && firstAd[2].innerHTML.includes('Ad')) ||
                   (firstAd && firstAd[1] && firstAd[1].innerHTML.includes('Ad')) ||
                   (firstAd && firstAd[0] && firstAd[0].innerHTML.includes('Ad'))) {
                    clickSkipBtn();
                    document.querySelector('video').currentTime = document.querySelector('video').duration;
                }
            });
        }
    }, 0);
};