// Inicializa la navegación
function initNavegacion() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuNav = document.querySelector('.menu-navegacion');
  
    if (!menuToggle || !menuNav) {
      console.error('No se encontraron elementos de navegación necesarios');
      return;
    }
  
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      menuNav.classList.toggle('active');
      const isExpanded = menuNav.classList.contains('active');
      menuToggle.setAttribute('aria-expanded', isExpanded);
    });
  
    document.addEventListener('click', (e) => {
      if (menuNav.classList.contains('active') &&
          !menuToggle.contains(e.target) &&
          !menuNav.contains(e.target)) {
        menuNav.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', false);
      }
    });
  
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (window.innerWidth > 500) {
          menuNav.classList.remove('active');
          menuToggle.setAttribute('aria-expanded', false);
        }
      }, 250);
    });
  
    menuNav.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        menuNav.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', false);
      }
    });
  }
  
  // --- Temporizador y simulación de pérdida de corazones ---
  
  // Configuración del temporizador (5 minutos)
  let timeLeft = 5 * 60; // 5 minutos en segundos
  const timerElement = document.getElementById("timer");
  
  function updateTimer() {
    if (!timerElement) return;
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    if (timeLeft > 0) {
      timeLeft--;
    } else {
      clearInterval(timerInterval);
      // Puedes agregar aquí alguna acción cuando el tiempo se acabe.
    }
  }
  
  const timerInterval = setInterval(updateTimer, 1000);
  
  // Función para simular la pérdida de un corazón
  function loseHeart() {
    const heartsContainer = document.getElementById("hearts");
    if (heartsContainer && heartsContainer.children.length > 0) {
      heartsContainer.removeChild(heartsContainer.lastElementChild);
    }
  }
  
  // Simula la pérdida de un corazón cada 10 segundos
  const loseHeartInterval = setInterval(loseHeart, 10000);
  
  export { initNavegacion };
  