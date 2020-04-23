//Declaration
const canvas = document.querySelector("#jsCanvas");
const colors = document.querySelectorAll(".controls__colorSet");
let painting = false;
const ctx = canvas.getContext("2d");

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

//Initiate
if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPaint);
  canvas.addEventListener("mouseup", stopPaint);
  canvas.addEventListener("mouseleave", stopPaint);
}

Array.from(colors).forEach(colorSet => {
  const colorset = Array.from(colorSet.children);
  colorset.forEach(color => {
    color.addEventListener("click", handleColorClick);
  });
});
