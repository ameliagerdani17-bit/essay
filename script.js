function generateOutline() {

  const topic = document.getElementById("topic").value;
  const type = document.getElementById("essayType").value;
  const output = document.getElementById("outline");

  if (!topic) {
    output.innerText = "Please enter an essay topic.";
    return;
  }

  let outline = "";

  outline += `Essay Type: ${type}\n\n`;

  outline += `INTRODUCTION\n`;
  outline += `• Introduce the topic: ${topic}\n`;
  outline += `• Give some background information\n`;
  outline += `• Explain why the topic matters\n`;
  outline += `• Create your thesis statement\n\n`;

  outline += `BODY PARAGRAPH 1\n`;
  outline += `• Main argument/idea\n`;
  outline += `• Evidence or example\n`;
  outline += `• Explain the evidence\n\n`;

  outline += `BODY PARAGRAPH 2\n`;
  outline += `• Second main argument/idea\n`;
  outline += `• Evidence or example\n`;
  outline += `• Explain the evidence\n\n`;

  outline += `BODY PARAGRAPH 3\n`;
  outline += `• Third main argument/idea\n`;
  outline += `• Evidence or example\n`;
  outline += `• Explain the evidence\n\n`;

  outline += `CONCLUSION\n`;
  outline += `• Restate your thesis in a new way\n`;
  outline += `• Summarize your strongest points\n`;
  outline += `• End with a final thought`;

  output.innerText = outline;
}


const essayBox = document.getElementById("essay");

essayBox.addEventListener("input", function() {

  const text = essayBox.value.trim();

  const words = text
    ? text.split(/\s+/).length
    : 0;

  document.getElementById("wordCount").innerText = words;

  document.getElementById("charCount").innerText =
    essayBox.value.length;
});


function checkEssay() {

  const text = essayBox.value.trim();
  const feedback = document.getElementById("feedback");

  if (!text) {
    feedback.innerText = "Please paste or write an essay first.";
    return;
  }

  const words = text.split(/\s+/).length;

  let suggestions = [];

  if (words < 150) {
    suggestions.push("• Your essay is quite short. Consider developing your ideas further.");
  }

  if (words > 1500) {
    suggestions.push("• Your essay is long. Check whether every paragraph directly supports your topic.");
  }

  if (!/[.!?]$/.test(text)) {
    suggestions.push("• Check that your final sentence has proper punctuation.");
  }

  if (text.includes("very ")) {
    suggestions.push("• Consider replacing some uses of 'very' with more precise vocabulary.");
  }

  if (text.split(".").length < 4) {
    suggestions.push("• Consider using more sentences to separate different ideas.");
  }

  suggestions.push("• Check that each body paragraph has one clear main idea.");
  suggestions.push("• Make sure your evidence is followed by an explanation.");
  suggestions.push("• Read your essay aloud to catch awkward sentences.");

  feedback.innerText =
    "Writing Feedback\n\n" +
    suggestions.join("\n");
}


function createCitation() {

  const style =
    document.getElementById("citationStyle").value;

  const author =
    document.getElementById("author").value;

  const title =
    document.getElementById("title").value;

  const year =
    document.getElementById("year").value;

  const publisher =
    document.getElementById("publisher").value;

  const output =
    document.getElementById("citation");

  if (!author || !title || !year) {
    output.innerText =
      "Please enter the author, title, and year.";
    return;
  }

  let citation;

  if (style === "MLA") {

    citation =
      `${author}. "${title}." ${publisher}, ${year}.`;

  } else {

    citation =
      `${author}. (${year}). ${title}. ${publisher}.`;
  }

  output.innerText = citation;
}


function saveDraft() {

  const essay = essayBox.value;

  localStorage.setItem("essayDraft", essay);

  document.getElementById("saveMessage").innerText =
    "Draft saved successfully!";
}


function loadDraft() {

  const saved =
    localStorage.getItem("essayDraft");

  if (saved) {

    essayBox.value = saved;

    essayBox.dispatchEvent(
      new Event("input")
    );

    document.getElementById("saveMessage").innerText =
      "Draft loaded!";

  } else {

    document.getElementById("saveMessage").innerText =
      "No saved draft found.";
  }
}
