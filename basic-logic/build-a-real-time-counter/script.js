const textInput = document.getElementById("text-input");
    const charCount = document.getElementById("char-count");

    textInput.addEventListener("input", () => {(charCount.textContent = `Character Count: ${textInput.value.length}/50`)
    if (textInput.value.length >= 50) {
      textInput.className = "forbiden"
      charCount.className = "forbiden"
      return textInput.value = textInput.value.substring(0, 50)

}
return
    })