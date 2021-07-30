const burger = document.getElementById("burger");
const list = document.getElementById("list");

burger.addEventListener("click", () => {
  list.style.display !== "none"
    ? (list.style.display = "none")
    : (list.style.display = "flex");
});
