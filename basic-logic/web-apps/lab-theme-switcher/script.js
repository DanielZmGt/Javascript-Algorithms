const themes = [
  { name: "yoda", message: "Judge me by my size, do you? Hmmm?" },
  { name: "pikachu", message: "Pika Pika!!!" },
  { name: "jedi", message: "I have a bad feeling about this" },
  { name: "sith", message: "I have brought peace, freedom, justice, and security to my new Empire!" },
  { name: "bt-7274", message: "It's your lucky day hero, I'm not going to kill you. I don't work for free." }
];

const statusElement = document.getElementById("status");
const buttonDropdown = document.getElementById("theme-switcher-button");
const dropdown = document.getElementById("theme-dropdown");
const themeButtons = document.querySelectorAll("#theme-dropdown li");
buttonDropdown.addEventListener("click", () => {
  if (dropdown.hasAttribute("hidden")) {
    dropdown.removeAttribute("hidden");
    buttonDropdown.setAttribute("aria-expanded", "true");
  } else {
    dropdown.setAttribute("hidden", "");
    buttonDropdown.setAttribute("aria-expanded", "false");
  }
});

themeButtons.forEach((li) => {
  li.addEventListener("click", () => {
    const themeName = li.id.replace("theme-", "");
    const themeData = themes.find(t => t.name === themeName);
    document.body.className = `theme-${themeName}`;

    if (themeData) {
      statusElement.textContent = themeData.message;
    }


    dropdown.setAttribute("hidden", "");
    buttonDropdown.setAttribute("aria-expanded", "false");
  });
});
