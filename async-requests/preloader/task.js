const loader = document.getElementById('loader');
const itemsContainer = document.getElementById('items');

fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
  .then(response => response.json())
  .then(data => {
    loader.classList.remove('loader_active');

    const valutes = data.response.Valute;

    for (const code in valutes) {
      const currency = valutes[code];

      const item = document.createElement('div');
      item.classList.add('item');

      item.innerHTML = `
        <div class="item__code">${currency.CharCode}</div>
        <div class="item__value">${currency.Value}</div>
        <div class="item__currency">руб.</div>
      `;

      itemsContainer.appendChild(item);
    }
  })
  .catch(error => {
    loader.classList.remove('loader_active');
    console.error('Ошибка при загрузке данных:', error);
  });