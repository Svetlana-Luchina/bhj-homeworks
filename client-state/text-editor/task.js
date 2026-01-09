// task.js
document.addEventListener('DOMContentLoaded', function() {
  const editor = document.getElementById('editor');
  const clearButton = document.getElementById('clearButton');
  const storageKey = 'editorContent';
  
  // Восстанавливаем текст из localStorage при загрузке
  const savedText = localStorage.getItem(storageKey);
  if (savedText !== null) {
    editor.value = savedText;
  }
  
  // Сохраняем текст в localStorage при каждом изменении
  editor.addEventListener('input', function() {
    localStorage.setItem(storageKey, editor.value);
  });
  
  // Очищаем содержимое при нажатии на кнопку
  clearButton.addEventListener('click', function() {
    editor.value = '';
    localStorage.removeItem(storageKey);
  });
});