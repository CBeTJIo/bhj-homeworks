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
    
    dropdownItems.forEach(item => {
      item.addEventListener('click', function(e) {
        e.preventDefault();
        
        const newValue = this.querySelector('.dropdown__link').textContent.trim();
        dropdownValue.textContent = newValue;
        dropdownList.classList.remove('dropdown__list_active');
      });
    });
  });
  
  // Закрытие dropdown при клике вне его области
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.dropdown')) {
      document.querySelectorAll('.dropdown__list_active').forEach(list => {
        list.classList.remove('dropdown__list_active');
      });
    }
  });
});
//гит не тупи