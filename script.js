jwplayer.key = 'XSuP4qMl+9tK17QNb+4+th2Pm9AWgMO/cYH8CI0HGGr7bdjo';
 
// Patch XHR to inject token into segments
(function() {
    const origOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function(method, url) {
        if (url && !url.includes("hdnea")) {
            url += (url.includes('?') ? '&' : '?') + "__hdnea=st=1758444629~exp=1758531029~acl=/*~hmac=4f5f6a89949028fe0899602ab0def1ed38b918f21d939661c24f9e949aaf0da4";
        }
        return origOpen.apply(this, arguments);
    };
})();
 
jwplayer("player").setup({
    playlist: [{
        file: "https://jiotvmblive.cdn.jio.com/bpk-tv/Star_Sports_Select_HD1_BTS/output/index.mpd?__hdnea=st=1758444629~exp=1758531029~acl=/*~hmac=4f5f6a89949028fe0899602ab0def1ed38b918f21d939661c24f9e949aaf0da4",
        drm: {
            clearkey: {
                keyId: "c2c048e439d65316beeda6ef64d5d0f8",
                key: "e2fdc132cbdee65501b845ce414fce39",
                robustness: {
                    video: "SW_SECURE_DECODE",
                    audio: "SW_SECURE_DECODE"
                }
            }
        }
    }],
    width: "100%",
    height: "100%",
    autostart: true,
    mute: false,
    primary: "html5",
    hlshtml: true,
    aspectratio: "16:9",
    stretching: "exactfit",
    playbackRateControls: true,
    controls: true,
     skin: { name: "default", active: "red", inactive: "white", background: "black" },
}).on("error", e => {
    console.error("Player error:", e);
    const msg = document.createElement('div');
    msg.id = "message";
    msg.innerText = "Player error: " + (e.message || "Unknown error");
    document.body.appendChild(msg);
});
