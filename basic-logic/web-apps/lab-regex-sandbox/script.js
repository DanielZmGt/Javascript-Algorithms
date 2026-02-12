const patternContainer = document.getElementById("pattern-container");
const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");
const caseInsensitiveFlag = document.getElementById("i");
const globalFlag = document.getElementById("g");

const getFlags = () => {
  let reggexFlags = "";
  if (globalFlag.checked) {
    reggexFlags += "g";
  }
  if (caseInsensitiveFlag.checked) {
    reggexFlags += "i";
  }
  return reggexFlags;
};

testButton.addEventListener("click", () => {
  let result = "";
  const regex = new RegExp(regexPattern.value, getFlags());
  const testString = stringToTest.textContent;
  const match = testString.match(regex);

  if (match) {
    stringToTest.innerHTML = testString.replace(regex, `<span class="highlight">$&</span>`);
    result = match.join(", ");
  } else {
    result = "no match";
  }

  testResult.textContent = result;
});
