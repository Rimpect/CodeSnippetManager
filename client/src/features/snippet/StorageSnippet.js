export const saveSnippet = (snippet) => {
  if (!snippet.id) {
    snippet.id = crypto.randomUUID();
  }

  let snippets;
  const stored = localStorage.getItem("codeSnippets");

  if (stored === null) {
    snippets = [];
  } else {
    snippets = JSON.parse(stored);
  }

  const existingIndex = snippets.findIndex((s) => s.id === snippet.id);
  console.log(existingIndex);
  console.log(snippet.id);
  if (existingIndex === -1) {
    snippets.push(snippet);
  } else {
    snippets[existingIndex] = snippet;
  }
  localStorage.setItem("codeSnippets", JSON.stringify(snippets));

  return snippet;
};