const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

fetch('https://students.netoservices.ru/nestjs-backend/poll')
  .then(response => response.json())
  .then(data => {
    const { id, data: pollData } = data;

    pollTitle.textContent = pollData.title;

    pollData.answers.forEach((answer, index) => {
      const btn = document.createElement('button');
      btn.classList.add('poll__answer');
      btn.textContent = answer;

      btn.addEventListener('click', () => {
        alert('Спасибо, ваш голос засчитан!');

        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.send(`vote=${id}&answer=${index}`);

        xhr.onload = function () {
          const result = JSON.parse(xhr.responseText);

          pollAnswers.innerHTML = '';
          const totalVotes = result.stat.reduce((sum, item) => sum + item.votes, 0);

          result.stat.forEach(item => {
            const percent = ((item.votes / totalVotes) * 100).toFixed(2);
            const div = document.createElement('div');
            div.textContent = `${item.answer}: ${percent}%`;
            pollAnswers.appendChild(div);
          });
        };
      });

      pollAnswers.appendChild(btn);
    });
  })
  .catch(error => {
    console.error('Ошибка загрузки опроса:', error);
  });