var refreshIntervalMs = 10000;
var removeTimeMs = 500;
var patternID = 'triangles';
var content = document.getElementById('content');
var makePattern = function () {
    var config = {
        height: window.innerHeight,
        width: window.innerWidth
    };
    var newPattern = Trianglify(config).canvas();
    newPattern.id = patternID;
    newPattern.style.zIndex = 0;
    var oldPattern = document.getElementById(patternID);
    if (oldPattern) {
        oldPattern.className = 'remove';
        content.appendChild(newPattern);
        setTimeout(function () {
            content.removeChild(oldPattern);
            newPattern.style.zIndex = 1;
        }, removeTimeMs);
    } else {
        newPattern.style.zIndex = 1;
        newPattern.className = 'add';
        content.appendChild(newPattern);
    }
};
makePattern();
window.addEventListener("resize", makePattern);
