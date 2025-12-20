class Rotator {
  constructor(element) {
    this.rotator = element;
    this.cases = Array.from(element.querySelectorAll('.rotator__case'));
    this.activeIndex = this.cases.findIndex(caseEl => 
      caseEl.classList.contains('rotator__case_active')
    );
    this.currentTimeout = null;
  }

  next() {
    this.cases[this.activeIndex].classList.remove('rotator__case_active');
    this.activeIndex = (this.activeIndex + 1) % this.cases.length;
    const currentCase = this.cases[this.activeIndex];
    currentCase.classList.add('rotator__case_active');
    const speed = parseInt(currentCase.dataset.speed) || 1000;
    
    if (this.currentTimeout) {
      clearTimeout(this.currentTimeout);
    }
    this.currentTimeout = setTimeout(() => this.next(), speed);
  }

  start() {
    const currentCase = this.cases[this.activeIndex];
    const speed = parseInt(currentCase.dataset.speed) || 1000;
    this.currentTimeout = setTimeout(() => this.next(), speed);
  }

  stop() {
    if (this.currentTimeout) {
      clearTimeout(this.currentTimeout);
      this.currentTimeout = null;
    }
  }
}

function initRotators() {
  const rotators = document.querySelectorAll('.rotator');
  rotators.forEach(rotatorElement => {
    const rotator = new Rotator(rotatorElement);
    rotator.start();
  });
}

document.addEventListener('DOMContentLoaded', initRotators);