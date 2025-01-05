let blahajdisplay = document.getElementById("blahajcount");
let blahaj = 0;
let blahajimg = document.getElementById("blahajimg");
let saved = JSON.parse(localStorage.answer);
localStorage.answer = JSON.stringify(blahaj);
blahaj = saved;

blahajdisplay.innerHTML = "you currently have: " + blahaj + " blahaj";

function clicked() {
blahaj++;
if (blahaj == 1) {
blahajdisplay.innerHTML = "you currently have: " + blahaj + " blahaj";
}

else if (blahaj >= 2) {
blahajdisplay.innerHTML = "you currently have: " + blahaj + " blahajs";
}
blahajimg.height = 130;
setTimeout(() => {
    setTimeout(() => blahajimg.height = 150, 0);
}, 100);
document.getElementById('clicksound').play();
localStorage.answer = JSON.stringify(blahaj);
}

blahaj = saved;