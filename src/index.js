function displayName(response) {
  new Typewriter("#nameList", {
    strings: response.data.answer,
    autoStart: true,
    delay: 8,
    cursor: "",
  });
}

function generator(event) {
  event.preventDefault();

  let instructions = document.querySelector("#user-instructions");

  let apiKey = `67160eaaec4o69a29b0ff296te075931`;
  let prompt = `user instructions: generate 5 names related to ${instructions.value}`;
  let context =
    "you are a name generator that only provides response in list format within <ul> with no list style following the user instructions";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let nameListBlock = document.querySelector("#nameList");
  nameListBlock.classList.remove("hidden");
  nameListBlock.innerHTML = `<div class="loader"> </div>`;

  axios.get(apiURL).then(displayName);
}

let nameInput = document.querySelector("#name-generator-form");
nameInput.addEventListener("submit", generator);
