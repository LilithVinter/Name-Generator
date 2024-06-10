function generator(event) {
  event.preventDefault();

  new Typewriter("#nameList", {
    strings: [`<ul> <li> name 1</li> <li> name 1</li><li> name 1</li></ul>`],
    autoStart: true,
    delay: 5,
    cursor: "",
  });
}

let nameInput = document.querySelector("#name-generator-form");
nameInput.addEventListener("submit", generator);
