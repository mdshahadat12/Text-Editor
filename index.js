document.getElementById("boldbtn").addEventListener("click", function () {
  const txtarea = document.getElementById("txtArea");
  txtarea.classList.toggle("font-bold");
});

document.getElementById("italicbtn").addEventListener("click", function () {
  const txtarea = document.getElementById("txtArea");
  txtarea.classList.toggle("italic");
});
document.getElementById("underlinebtn").addEventListener("click", function () {
  const txtarea = document.getElementById("txtArea");
  txtarea.classList.toggle("underline");
});
document.getElementById("leftbtn").addEventListener("click", function () {
  const txtarea = document.getElementById("txtArea");
  txtarea.classList.remove("text-center");
  txtarea.classList.remove("text-right");
  txtarea.classList.add("text-left");
});
document.getElementById("centerbtn").addEventListener("click", function () {
  const txtarea = document.getElementById("txtArea");
  txtarea.classList.add("text-center");
  txtarea.classList.remove("text-right");
  txtarea.classList.remove("text-left");
});
document.getElementById("rightbtn").addEventListener("click", function () {
  const txtarea = document.getElementById("txtArea");
  txtarea.classList.remove("text-center");
  txtarea.classList.add("text-right");
  txtarea.classList.remove("text-left");
});
document.getElementById("uplow").addEventListener("click", function () {
  const txtarea = document.getElementById("txtArea");
  txtarea.classList.toggle("uppercase");
});
document.getElementById("colorbtn").addEventListener("input", function () {
  const colorbtn = document.getElementById("colorbtn");
  const color = colorbtn.value;
  const txtarea = document.getElementById("txtArea");
  txtarea.style.color = color;
});
document.getElementById("fSize").addEventListener("click", function () {
  const fSizebtn = document.getElementById("fSize");
  const fSize = fSizebtn.value;
  const txtarea = document.getElementById("txtArea");
  txtarea.style.fontSize = fSize + 'px';
});