function getNowPlaying() {
    let titleElement = document.querySelector(".playbackSoundBadge__titleLink.sc-truncate.sc-text-h5.sc-link-primary");
    let artistElement = document.querySelector(".playbackSoundBadge__lightLink.sc-link-light.sc-link-secondary.sc-truncate.sc-text-h5");
    let TimeE = document.querySelector(".playbackTimeline__timePassed.sc-text-primary.sc-text-h5");

    if (titleElement && artistElement) {
        let songData = {
            title: titleElement.innerText,
            artist: artistElement.innerText,
            times: TimeE.innerText
        };

        chrome.runtime.sendMessage({ action: "updateRPC", data: songData });
    }
}
setInterval(getNowPlaying, 900);
