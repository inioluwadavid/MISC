let buybuttons = document.querySelectorAll(".buynow");
let container = document.querySelector(".overlay .col-75 .container");
let closeButton = document.querySelector(".close");
let overlay = document.querySelector(".overlay");
let chosen;
let parentNod;
function doAlert(event) {
  event.preventDefault();
  parentNod = this.parentNode;
  chosen = parentNod.firstElementChild;
  container.prepend(chosen);
  overlay.style.display = "block";
  overlay.style.opacity = 1;
  overlay.style.top = 0;
}

var i;
for (i = 0; i < buybuttons.length; i++) {
  var button = buybuttons[i];
  console.log(button.parentNode.firstElementChild.className + " " + i);
  button.addEventListener("click", doAlert, false);
}

closeButton.addEventListener(
  "click",
  function () {
    let x = container.childNodes[0];
    container.removeChild(x);
    parentNod.prepend(x);
    overlay.style.display = "none";
    overlay.style.opacity = 0;
  },
  false
);
