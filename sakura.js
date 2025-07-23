const canvas = document.getElementById("sakuraCanvas");
const ctx = canvas.getContext("2d");
let petals = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

class Petal {
  constructor() {
    this.reset();
  }

  reset() {
    const sidebar = document.querySelector("aside");
    const sidebarWidth = sidebar ? sidebar.offsetWidth : 0;

    this.x = sidebarWidth + Math.random() * (canvas.width - sidebarWidth);
    this.y = Math.random() * -canvas.height;
    this.radius = 4 + Math.random() * 3; // smaller size
    this.opacity = 0.6 + Math.random() * 0.4;
    this.speedY = 0.3 + Math.random() * 0.8; // slower falling
    this.speedX = Math.random() * 0.5 - 0.25;
    this.angle = Math.random() * 2 * Math.PI;
    this.spin = (Math.random() - 0.5) * 0.05;
  }

  update() {
    this.y += this.speedY;
    this.x += this.speedX;
    this.angle += this.spin;

    const sidebar = document.querySelector("aside");
    const sidebarWidth = sidebar ? sidebar.offsetWidth : 0;

    // Prevent petals from drifting into the sidebar
    if (this.x < sidebarWidth + this.radius) {
      this.x = sidebarWidth + this.radius;
      this.speedX = Math.abs(this.speedX);
    }

    if (this.y > canvas.height + this.radius) {
      this.reset();
      this.y = -this.radius;
    }
  }

  draw() {
    ctx.save();
    ctx.globalAlpha = this.opacity;
    ctx.fillStyle = "#ffc0cb";
    ctx.beginPath();
    ctx.ellipse(this.x, this.y, this.radius * 0.6, this.radius, this.angle, 0, 2 * Math.PI);
    ctx.fill();
    ctx.restore();
  }
}

function createPetals(count) {
  for (let i = 0; i < count; i++) {
    petals.push(new Petal());
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  petals.forEach(petal => {
    petal.update();
    petal.draw();
  });
  requestAnimationFrame(animate);
}

createPetals(40); // Number of petals
animate();
