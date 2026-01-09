  const editor = document.getElementById('editor');
  const clearButton = document.getElementById('clearButton');
  const storageKey = 'editorContent';
  
  const savedText = localStorage.getItem(storageKey);
  if (savedText !== null) {
    editor.value = savedText;
  }
  
  editor.addEventListener('input', function() {
    localStorage.setItem(storageKey, editor.value);
  });
  
  clearButton.addEventListener('click', function() {
    editor.value = '';
    localStorage.removeItem(storageKey);
  });