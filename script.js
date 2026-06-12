const tabs = document.querySelectorAll(".tab");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tab.classList.toggle("active");

    const panel = tab.nextElementSibling;
    panel.classList.toggle("open");
  });
});