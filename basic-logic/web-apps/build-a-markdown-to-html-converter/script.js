const markdownInput = document.getElementById("markdown-input");
const rawOutput = document.getElementById("html-output");
const preview = document.getElementById("preview");

const convertMarkdown = () => {
  let text = markdownInput.value;

  text = text.replace(/^#{3}\s+(.+)$/gm, '<h3>$1</h3>');
  text = text.replace(/^##\s+(.+)$/gm, '<h2>$1</h2>');
  text = text.replace(/^#\s+(.+)$/gm, '<h1>$1</h1>');

  text = text.replace(/^>\s+(.+)$/gm, '<blockquote>$1</blockquote>');

  text = text.replace(/(\*\*|__)(.*?)\1/g, '<strong>$2</strong>');

  text = text.replace(/(\*|_)(.*?)\1/g, '<em>$2</em>');

  text = text.replace(/\!\[(.*?)\]\((.*?)\)/g, '<img alt="$1" src="$2">');
  text = text.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');

  return text.replace(/
/g, '');
}

markdownInput.addEventListener("input", () => {
  const htmlResult = convertMarkdown();
  rawOutput.textContent = htmlResult;
  preview.innerHTML = htmlResult;
});
