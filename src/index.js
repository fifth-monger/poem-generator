function showPoem(event) {
  event.preventDefault();
  new Typewriter("#poem-response", {
    strings: "Generating poem for you... ✍🏼",
    autoStart: true,
    delay: 30,
    cursor: null,
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", showPoem);
