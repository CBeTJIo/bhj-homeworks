document.addEventListener('DOMContentLoaded', () => {
  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip';
  document.body.appendChild(tooltip);

  let activeElement = null;

  document.addEventListener('click', (e) => {
    const target = e.target.closest('.has-tooltip');

    if (!target) {
      tooltip.classList.remove('tooltip_active');
      activeElement = null;
      return;
    }

    e.preventDefault();

    if (activeElement === target) {
      tooltip.classList.remove('tooltip_active');
      activeElement = null;
      return;
    }

    tooltip.textContent = target.getAttribute('title');
    const rect = target.getBoundingClientRect();
    tooltip.style.left = `${rect.left}px`;
    tooltip.style.top = `${rect.bottom}px`;
    tooltip.classList.add('tooltip_active');

    activeElement = target;
  });
});