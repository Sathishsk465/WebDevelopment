const youHand = document.getElementById("youhand");
const pcHand = document.getElementById("pchand");
const gestureOptions = document.querySelectorAll("#choice .col img");
const playBtn = document.querySelectorAll(".btn.btn-danger")[0];
const retryBtn = document.querySelectorAll(".btn.btn-danger")[1];

const gestures = ["rock", "paper", "scissor"];
const gestureImages = {
  rock: "imgs/rock.png",
  paper: "imgs/paper.png",
  scissor: "imgs/scissor.png"
};

let userChoice = null;
let score = { win: 0, lose: 0, draw: 0 };

// ✋ Track user selection
gestureOptions.forEach(img => {
  img.addEventListener("click", () => {
    const alt = img.getAttribute("alt");
    userChoice = alt?.toLowerCase() ?? null;
    console.log("User clicked gesture:", userChoice); // 🧪 Debug log
    gestureOptions.forEach(i => i.style.border = "none");
    img.style.border = "3px solid red";
  });
});

// 🧠 Determine winner
function getResult(user, cpu) {
  if (user === cpu) return "draw";
  if (
    (user === "rock" && cpu === "scissor") ||
    (user === "paper" && cpu === "rock") ||
    (user === "scissor" && cpu === "paper")
  ) return "win";
  return "lose";
}

// 🕹️ Play button functionality
playBtn.addEventListener("click", () => {
  if (!userChoice) {
    alert("Please select a gesture first!");
    return; // 🚫 Stops further code if no selection
  }

  // Shake animation
  youHand.style.animation = "youbounce 1s ease";
  pcHand.style.animation = "pcbounce 1s ease";

  setTimeout(() => {
    const computerChoice = gestures[Math.floor(Math.random() * gestures.length)];

    // 🧪 Log paths before setting
    console.log("User image path:", gestureImages[userChoice]);
    console.log("Computer image path:", gestureImages[computerChoice]);

    // 🛡️ Fallbacks in case mapping fails
    youHand.src = gestureImages[userChoice] || "imgs/start you emoji.png";
    pcHand.src = gestureImages[computerChoice] || "imgs/start battle emoji.png";

    const outcome = getResult(userChoice, computerChoice);
    score[outcome]++;

    document.querySelector(".card1 h1").textContent = score.win;
    document.querySelector(".card2 h1").textContent = score.draw;
    document.querySelector(".card3 h1").textContent = score.lose;

    youHand.style.animation = "youbounce 2s infinite";
    pcHand.style.animation = "pcbounce 2s infinite";
  }, 1000);
});

// 🔁 Retry button resets state
retryBtn.addEventListener("click", () => {
  youHand.src = "imgs/start you emoji.png";
  pcHand.src = "imgs/start battle emoji.png";
  userChoice = null;
  gestureOptions.forEach(i => i.style.border = "none");
});
