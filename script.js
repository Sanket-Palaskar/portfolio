const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", function (e) {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

  const trail = document.createElement("div");
  trail.className = "trail";
  trail.style.left = e.clientX + "px";
  trail.style.top = e.clientY + "px";

  document.body.appendChild(trail);

  setTimeout(function () {
    trail.remove();
  }, 500);
});

// Dragon fire on click
document.addEventListener("click", function (e) {
  for (let i = 0; i < 10; i++) {
    const fire = document.createElement("div");
    fire.className = "dragon-fire";
    fire.style.left = e.clientX + Math.random() * 40 - 20 + "px";
    fire.style.top = e.clientY + Math.random() * 40 - 20 + "px";

    document.body.appendChild(fire);

    setTimeout(function () {
      fire.remove();
    }, 1000);
  }
});

// Create sparks
for (let i = 0; i < 45; i++) {
  const spark = document.createElement("div");
  spark.className = "spark";

  spark.style.left = Math.random() * 100 + "vw";
  spark.style.animationDuration = Math.random() * 3 + 3 + "s";
  spark.style.animationDelay = Math.random() * 5 + "s";
  spark.style.opacity = Math.random();

  document.body.appendChild(spark);
}
