var mb = document.getElementById("main_button");
var lif = document.getElementById("login");
var suf = document.getElementById("signup");
var b = document.getElementsByTagName("BODY")[0];
var logo = document.getElementById("logo");

function showLI() {
  mb.style.display = "none";
  lif.style.display = "block";
  suf.style.display = "none";
  check();
}
function showSU() {
  mb.style.display = "none";
  lif.style.display = "none";
  suf.style.display = "block";
  check();
}
function hide() {
  mb.style.display = "block";
  lif.style.display = "none";
  suf.style.display = "none";
  b.style.background = "#f2f2f2";
}
window.onclick = function(event) {
  if (event.target == b || event.target == logo) {
    this.hide();
  }
};
function check() {
  var windowSize = window.outerWidth;
  if (windowSize > 480) {
    b.style.background = "#D2D3D3";
  }
}
