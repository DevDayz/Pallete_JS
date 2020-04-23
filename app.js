//Declaration
const canvas = document.querySelector("#jsCanvas");
const colors = document.querySelectorAll(".controls__colorSet");
const ctx = canvas.getContext("2d");
const range = document.querySelector("#jsRange");
const mode = document.querySelector("#jsMode");
let painting = false;
let filling = false;
//Configuration
ctx.strokeStyle = "#1e2022";
ctx.lineWidth = 2.5;

//Functions
function stopPaint() {
  painting = false;
}
function startPaint() {
  painting = true;
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}
function handleColorClick(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
}
function handleBrushWidth(event) {
  ctx.lineWidth = event.target.value;
}
function handleMode(event) {
  if (!filling) {
    filling = true;
    mode.innerText = "PAINT";
  } else {
    filling = false;
    mode.innerText = "FILL";
  }
}
//Initiate
if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPaint);
  canvas.addEventListener("mouseup", stopPaint);
  canvas.addEventListener("mouseleave", stopPaint);
}
if (range) {
  range.addEventListener("input", handleBrushWidth);
}
if (mode) {
  mode.addEventListener("click", handleMode);
}
Array.from(colors).forEach(colorSet => {
  const colorset = Array.from(colorSet.children);
  colorset.forEach(color => {
    color.addEventListener("click", handleColorClick);
  });
});
