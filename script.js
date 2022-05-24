console.log("page loaded...");

function changeName() {
    document.querySelector("#editprof").innerText = "Sarah Perez";
}

function removeTopRequest() {
    document.querySelector("#todde").remove();
    document.querySelector("#request-badge").innerText--;
}

function removeBotRequest() {
    document.querySelector("#phille").remove();
    document.querySelector("#request-badge").innerText--;
}