jwplayer.key = 'XSuP4qMl+9tK17QNb+4+th2Pm9AWgMO/cYH8CI0HGGr7bdjo';

// Patch XHR to inject token into segments
(function() {
    const origOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function(method, url) {
        if (url && !url.includes("__hdnea__")) {
            url += (url.includes('?') ? '&' : '?') + "__hdnea__=st=1758369634~exp=1758456034~acl=/*~hmac=a4c102e78416b45f007f0e41df2c3a5097948e8fe03e0d6c33d618a6569f71d0";
        }
        return origOpen.apply(this, arguments);
    };
})();

jwplayer("player").setup({
    playlist: [{
        file: "https://jiotvmblive.cdn.jio.com/bpk-tv/Star_Sports_HD1_Hindi_BTS/output/index.mpd?__hdnea__=st=1758369634~exp=1758456034~acl=/*~hmac=a4c102e78416b45f007f0e41df2c3a5097948e8fe03e0d6c33d618a6569f71d0",
        drm: {
            clearkey: {
                keyId: "400131994b445d8c8817202248760fda",
                key: "2d56cb6f07a75b9aff165d534ae2bfc4",
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
