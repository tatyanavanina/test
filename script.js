var items = document.querySelectorAll(".circle div");

for (var i = 0, l = items.length; i < l; i++) {
  items[i].style.left = (50 - 35 * Math.cos(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(4) + "%";

  items[i].style.top = (50 + 35 * Math.sin(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(4) + "%";
}

let onClickHandler = function (e) {
  e.preventDefault();
  var a = document.querySelector(".circle");
  document.querySelector(".circle").classList.toggle("open");
  if(a.className == "circle open"){
    $(".menu-button").css("animation-play-state", "paused");
   $(".menu-button").css("box-shadow", "none")
  }
  else{
    $(".menu-button").css("animation-play-state", "running");
     $(".menu-button").css("box-shadow", "0 0 0 0 rgba(0, 129, 238, .5)");
    $(".fa.fa-trash").css("color", "#0081ee");
  $(".fa.fa-plus").css("color", "#0081ee")
  }
};

document.querySelector(".menu-button").onclick = onClickHandler;


let tooltipElem;
document.onmouseover = function (event) {
  let target = event.target;
  let tooltipHtml = target.dataset.tooltip;
  if (!tooltipHtml) return;
  tooltipElem = document.createElement("div");
  tooltipElem.className = "tooltip";
  tooltipElem.innerHTML = tooltipHtml;
  document.body.append(tooltipElem);
  let coords = target.getBoundingClientRect();
  let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
  if (left < 0) left = 0;
  let top = coords.top - tooltipElem.offsetHeight - 5;
  if (top < 0) {
  top = coords.top + target.offsetHeight + 5;
  }
  tooltipElem.style.left = left + "px";
  tooltipElem.style.top = top + "px";
};

document.onmouseout = function (e) {
  if (tooltipElem) {
    tooltipElem.remove();
    tooltipElem = null;
  }
};

function setOnClickHandler() {
document.querySelector(".menu-button").onclick = onClickHandler;
}

$(document).ready(function () {
$("#draggable").draggable({
  start: function (event, ui) {
    document.querySelector(".menu-button").onclick = null;
    },
  stop: function (event, ui) {
    document.querySelector(".menu-button").onclick = setTimeout(setOnClickHandler, 0);
    }
  })
});

function deleteStep() {
  $(".fa.fa-plus").css("color", "#D3D3D3");
  $(".fa.fa-trash").css("color", "#0081ee");
}

function deletePlus() {
 $(".fa.fa-trash").css("color", "#D3D3D3");
   $(".fa.fa-plus").css("color", "#0081ee");
}
