document.addEventListener('DOMContentLoaded', function() {
  const dropdowns = document.querySelectorAll('.dropdown');
  
  dropdowns.forEach(dropdown => {
    const dropdownValue = dropdown.querySelector('.dropdown__value');
    const dropdownList = dropdown.querySelector('.dropdown__list');
    const dropdownItems = dropdown.querySelectorAll('.dropdown__item');
    
    dropdownValue.addEventListener('click', function() {
      document.querySelectorAll('.dropdown__list_active').forEach(list => {
        if (list !== dropdownList) {
          list.classList.remove('dropdown__list_active');
        }
      });
      dropdownList.classList.toggle('dropdown__list_active');
    });
    
    dropdownList.addEventListener('click', function(event) {
      const clickedItem = event.target.closest('.dropdown__item');
      
      if (clickedItem) {
        event.preventDefault();
        const dropdownLink = clickedItem.querySelector('.dropdown__link');
        
        dropdownValue.textContent = dropdownLink.textContent.trim();
        dropdownList.classList.remove('dropdown__list_active');
      }
    });
  });
  
  document.addEventListener('click', function(event) {
    if (!event.target.closest('.dropdown')) {
      document.querySelectorAll('.dropdown__list_active').forEach(list => {
        list.classList.remove('dropdown__list_active');
      });
    }
  });
});