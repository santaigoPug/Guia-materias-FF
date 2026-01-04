document.addEventListener('DOMContentLoaded', function(){
  try{
    const key = 'site_total_visits_v1';
    let total = parseInt(localStorage.getItem(key) || '0', 10);
    total = total + 1;
    localStorage.setItem(key, total);

    const now = new Date();
    const formatted = now.toLocaleString('es-ES', {year:'numeric', month:'short', day:'numeric', hour:'2-digit', minute:'2-digit', second:'2-digit'});

    const nodes = document.querySelectorAll('.visitor-info');
    nodes.forEach(node => {
      node.innerHTML = `<div class="visit-box">Visitas: <strong>${total}</strong><br> <strong>${formatted}</strong></div>`;
    });
  }catch(e){ console.error('visit.js error', e); }
});
