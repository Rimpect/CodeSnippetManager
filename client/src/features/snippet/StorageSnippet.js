export const saveSnippet = (snippet) => {
  // Объявляем переменную через let, пока без значения
  let snippets;

  // Получаем данные из localStorage по ключу 'snippets'
  const stored = localStorage.getItem("codeSnippets");

  if (stored === null) {
    // Если ничего нет, создаем пустой массив
    snippets = [];
  } else {
    // Если есть, парсим строку в массив
    snippets = JSON.parse(stored);
  }

  // Дальше работаем с массивом snippets
  console.log(snippets); // посмотрим, что получилось

//   const existingIndex = snippets.findIndex((s) => s.id === snippet.id);
//   console.log(existingIndex);
//   console.log(snippet.id);
  localStorage.setItem("codeSnippets", snippet);
};
