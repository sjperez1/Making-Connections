console.log("page loaded...");

function changeName() {
    document.querySelector("#editprof").innerText = "Sarah Perez";
}

function removeTopRequest(i) {
    document.querySelector("#todde").remove();
    document.querySelector("#request-badge").innerText--;
    if(i == 1) {
        document.querySelector("#your-badge").innerText++;
    }
}

function removeBotRequest(i) {
    document.querySelector("#phille").remove();
    document.querySelector("#request-badge").innerText--;
    if(i == 1) {
        document.querySelector("#your-badge").innerText++;
    }
}