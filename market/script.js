

function init() {
    const btn = document.getElementById("cart");
    const overlay = document.getElementById("overlay");
    const close = document.getElementById("close");
    const cancel = document.getElementById("cancel");
    btn.addEventListener("click", function () {
        addOverlay();
    });
    close.addEventListener("click", function () {
        removeOverlay();
    });
    cancel.addEventListener("click", function () {
        removeOverlay();
    });
}
function addOverlay() {
    overlay.style.display = "flex";
}
function removeOverlay() {
    overlay.style.display = "none";
}

window.onload = init;