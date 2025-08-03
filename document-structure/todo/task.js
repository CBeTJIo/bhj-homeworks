document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('tasks__form');
  const input = document.getElementById('task__input');
  const list = document.getElementById('tasks__list');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const text = input.value.trim();
    if (!text) return;

    const task = document.createElement('div');
    task.className = 'task';
    task.innerHTML = `
      <div class="task__title">${text}</div>
      <a href="#" class="task__remove">&times;</a>
    `;

    task.querySelector('.task__remove').addEventListener('click', (e) => {
      e.preventDefault();
      task.remove();
    });

    list.appendChild(task);
    input.value = '';
  });
});