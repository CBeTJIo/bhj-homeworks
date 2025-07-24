document.addEventListener('DOMContentLoaded', function() {
    const tabsContainers = document.querySelectorAll('.tabs');
    
    tabsContainers.forEach(function(tabsContainer) {
        const tabs = tabsContainer.querySelectorAll('.tab');
        const Contents = tabsContainer.querySelectorAll('.tab__content');
        
        tabs.forEach(function(tab, index) {
            tab.addEventListener('click', function() {
                tabs.forEach(function(t) {
                    t.classList.remove('tab_active');
                });
                
                Contents.forEach(function(content) {
                    content.classList.remove('tab__content_active');
                });
                
                tab.classList.add('tab_active');
                Contents[index].classList.add('tab__content_active');
            });
        });
    });
});

//гит не тупи