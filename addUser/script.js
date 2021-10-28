const inputContainers = document.querySelectorAll(".app-input");

inputContainers.forEach((container) => {
  const input = container.querySelector("input");
  const events = ["focus", "blur"];

  events.forEach((event) => {
    input.addEventListener(event, () => {
      if (!input.value) {
        toggleClass(container, "input-active");
      }
    });
  });
});

function toggleClass(element, className) {
  const isActive = element.classList.contains(className);

  if (isActive) {
    element.classList.remove(className);
  } else {
    element.classList.add(className);
  }
}


function customerPage(page) {
  const currentPath = window.location.pathname;
  const splitUrl = currentPath.split("/");
  const redirectTo = `${page}`;
  window.location.href = splitUrl[0] + redirectTo;
}
