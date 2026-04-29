(() => {
  const body = document.body;
  const themeToggle = document.getElementById("themeToggle");
  const themeText = themeToggle?.querySelector(".theme-text");
  const storageKey = "romer-theme";

  const applyTheme = (theme) => {
    body.classList.toggle("light", theme === "light");
    if (themeText) {
      themeText.textContent = theme === "light" ? "Dark" : "Light";
    }
  };

  const initialTheme = localStorage.getItem(storageKey) || "dark";
  applyTheme(initialTheme);

  themeToggle?.addEventListener("click", () => {
    const newTheme = body.classList.contains("light") ? "dark" : "light";
    localStorage.setItem(storageKey, newTheme);
    applyTheme(newTheme);
  });
})();
