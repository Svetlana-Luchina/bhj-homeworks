function initTabs() {
    const tabsContainers = document.querySelectorAll('.tabs');

    tabsContainers.forEach(container => {
        const tabs = container.querySelectorAll('.tab');
        const contents = container.querySelectorAll('.tab__content');

        function switchTab(index) {
            tabs.forEach(tab => {
                tab.classList.remove('tab_active');
            });

            contents.forEach(content => {
                content.classList.remove('tab__content_active');
            });

            if (tabs[index]) {
                tabs[index].classList.add('tab_active');
            }

            if (contents[index]) {
                contents[index].classList.add('tab__content_active');
            }
        }

        tabs.forEach((tab, index) => {
            tab.addEventListener('click', () => {
                switchTab(index);
            });
        });
    });
}

document.addEventListener('DOMContentLoaded', initTabs);