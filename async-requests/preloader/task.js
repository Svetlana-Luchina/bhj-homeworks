const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();

xhr.onload = function() {
    const loader = document.getElementById('loader');
    loader.classList.remove('loader_active');
    
    const data = JSON.parse(xhr.responseText);
    const valutes = data.response.Valute;
    
    const itemsContainer = document.getElementById('items');
    
    itemsContainer.innerHTML = '';
    
    let itemsHTML = '';
    
    for (let key in valutes) {
        const valute = valutes[key];
        
        itemsHTML += `
            <div class="item">
                <div class="item__code">
                    ${valute.CharCode}
                </div>
                <div class="item__value">
                    ${valute.Value}
                </div>
                <div class="item__currency">
                    руб.
                </div>
            </div>
        `;
    }
    
    itemsContainer.innerHTML = itemsHTML;
};