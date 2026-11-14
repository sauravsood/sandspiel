import { boot } from "./boot";
import { Universe } from "../crate/pkg/sandtable";

import { startWebGL } from "./render";
import { fps } from "./fps";
import {} from "./paint";
import {} from "./app";
import { startFluid } from "./fluid";
import {} from "./layout";

const isBench = false;

let n = 300;
const universe = isBench ? window.u : Universe.new(n, n);

let width = n;
let height = n;
const canvas = document.getElementById("sand-canvas");
const canvas2 = document.getElementById("fluid-canvas");

canvas.height = n * Math.ceil(window.devicePixelRatio);
canvas.width = n * Math.ceil(window.devicePixelRatio);

document.getElementById("background").addEventListener("touchmove", (e) => {
  if (!window.paused) {
    if (e.cancelable) {
      e.preventDefault();
    }
  }
});

let fluid;
let drawSand;
if (!isBench) {
  fluid = startFluid({ universe });
  drawSand = startWebGL({ canvas, universe });
} else {
  fluid = window.f;
  drawSand = window.r;
}
const renderLoop = () => {
  if (!window.paused) {
    fps.render(); // new
    universe.tick();
    fluid.update();
  }
  drawSand();

  window.animationId = requestAnimationFrame(renderLoop);
};
renderLoop();
window.u = universe;

if (!isBench) {
  boot(width, height);
}

function reset() {
  fluid.reset();
  fluid.update();
  fluid.reset();
  fluid.update();

  universe.reset();
}

document.addEventListener("keydown", function (event) {
  if ((event.ctrlKey || event.metaKey) && event.key === "z") {
    reset();
    universe.pop_undo();
  }
});

document.addEventListener("paste", function (event) {
  const text = event.clipboardData.getData("text/plain");
  if (text.includes("<svg")) {
    event.preventDefault();
    window.UI.loadSVG(text);
  }
});

export { canvas, width, height, universe, reset };
