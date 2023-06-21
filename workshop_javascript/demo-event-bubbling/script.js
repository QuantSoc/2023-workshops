document.addEventListener("mouseup", (event) => {
  console.log(event);
});

document.addEventListener("keydown", (event) => {
  console.log(event);
});

document.getElementById("btndiv").addEventListener("click", () => {
  console.log("OUTSIDE");
});

document.getElementById("btn").addEventListener("click", () => {
  console.log("INSIDE");
});
