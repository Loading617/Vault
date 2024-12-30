const element = document.getElementById("touchArea");

if (element) {
  element.addEventListener("touchstart", (event: TouchEvent) => {
    console.log("Touch started at", event.touches[0].clientX, event.touches[0].clientY);
  });

  element.addEventListener("touchend", () => {
    console.log("Touch ended");
  });
}
