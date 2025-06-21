var robloxbtn = document.getElementById("roblox")
var discordbtn = document.getElementById("discord")
var githubbtn = document.getElementById("github")
var splash = document.getElementById("splash")
robloxbtn.addEventListener("click", (e) => {
window.location.href = "https://www.roblox.com/users/4439210041/profile"
});

discordbtn.addEventListener("click", (e) => {
    window.location.href = "https://discord.com/users/1141011243352731668"
})

githubbtn.addEventListener("click", (e) => {
    window.location.href = "https://github.com/theholysaviour"
})

splash.addEventListener("click", () => {
  splash.classList.add("animate-out");
  

    splash.addEventListener("animationend", () => {
    splash.style.display = "none";
  });
});

document.addEventListener("click", function () {
  const audio = new Audio("INTERNET LOVE.mp3");
  audio.volume = 0.25
  audio.loop = true
  audio.play();
}, { once: true });

const originalTitle = "theholysave";
let index = 0;

setInterval(() => {
  document.title = originalTitle.substring(index) + originalTitle.substring(0, index);
  index = (index + 1) % originalTitle.length;
}, 500);