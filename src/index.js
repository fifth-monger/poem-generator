function showPoem(response) {
  console.log("poem generated");
  new Typewriter("#poem-response", {
    strings: response.data.answer,
    autoStart: true,
    delay: 30,
    cursor: null,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "23ab4btd750623bd6a0096bbc3of4f4f";
  let context =
    "You are an uplifting Poem expert and love to write short common poetic forms such as a haiku, limerick, or other very short poems. Generate small poems in basic HTML format. No poem should be longer than 10 lines. Follow user instructions. Do not include a title or 'html' in the response. Sign the poem with SheCodes AI.";
  let prompt = `User instructions are: Generate an uplifting poem about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem-response");
  poemElement.classList.remove("hidden");

  new Typewriter("#poem-response", {
    strings: `Generating a poem about ${instructionsInput.value} for you ... ✍🏼`,
    autoStart: true,
    delay: 13,
    cursor: null,
  });

  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(showPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
