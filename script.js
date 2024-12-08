const container = document.querySelector(".container");

// Function to create and handle a single dropped item
function createDrop() {
  const drop = document.createElement("span");
  drop.classList.add("drop");

  // Random position
  drop.style.top = Math.random() * (window.innerHeight - 100) + "px";
  drop.style.left = Math.random() * (window.innerWidth - 100) + "px";

  // Handle drop click
  const handleClick = () => {
    drop.style.backgroundColor = "white";
    drop.style.transform = "scale(0)";
    drop.removeEventListener("click", handleClick); // Clean up listener
  };

  drop.addEventListener("click", handleClick);

  // Remove after timeout
  setTimeout(() => {
    drop.removeEventListener("click", handleClick);
    drop.remove();
  }, 6500);

  // Add to the DOM
  container.appendChild(drop);
}

// Set interval for creating drops
setInterval(createDrop, 500);
