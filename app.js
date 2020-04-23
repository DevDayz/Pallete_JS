//config
const canvas = document.querySelector("#jsCanvas");
const ctx = canvas.getContext("2d");
ctx.strokeStyle = "#1e2022";
ctx.lineWidth = 2.5;
let painting = false;

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
    // ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}
function onMouseDown() {
  startPaint();
  //somethinghere
}

//Initiate
if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", onMouseDown);
  canvas.addEventListener("mouseup", stopPaint);
  canvas.addEventListener("mouseleave", stopPaint);
}
