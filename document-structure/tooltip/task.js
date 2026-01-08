  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip';
  document.body.appendChild(tooltip);

  let activeElement = null;

  function showTooltip(element, event) {
    if (activeElement === element) {
      hideTooltip();
      return;
    }

    hideTooltip();

    const title = element.getAttribute('title');
    tooltip.textContent = title;
    tooltip.classList.add('tooltip_active');

    const rect = element.getBoundingClientRect();
    tooltip.style.left = rect.left + 'px';
    tooltip.style.top = (rect.top + rect.height) + 'px';

    element.removeAttribute('title');
    activeElement = element;
    event.preventDefault();
  }

  function hideTooltip() {
    tooltip.classList.remove('tooltip_active');
    
    if (activeElement) {
      const title = tooltip.textContent;
      activeElement.setAttribute('title', title);
      activeElement = null;
    }
  }

  document.addEventListener('click', function(event) {
    const target = event.target;
    
    if (target.classList.contains('has-tooltip')) {
      showTooltip(target, event);
    } else if (activeElement && target !== activeElement) {
      hideTooltip();
    }
  });