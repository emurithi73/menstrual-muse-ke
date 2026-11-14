(function(){
  const year = document.querySelectorAll('[data-year]');
  year.forEach(el => el.textContent = new Date().getFullYear());

  const questionForm = document.querySelector('#question-form');
  if(questionForm){
    questionForm.addEventListener('submit', function(e){
      e.preventDefault();
      const name = document.querySelector('#name').value.trim();
      const topic = document.querySelector('#topic').value.trim();
      const question = document.querySelector('#question').value.trim();
      const subject = encodeURIComponent('Menstrual Muse question: ' + (topic || 'Menstrual health'));
      const body = encodeURIComponent('Name: ' + (name || 'Anonymous') + '\n\nQuestion:\n' + question + '\n\nSent through the Menstrual Muse website.');
      window.location.href = `mailto:info@musemenstrual.org?subject=${subject}&body=${body}`;
    });
  }

  document.querySelectorAll('[data-menu-toggle]').forEach(btn=>{
    btn.addEventListener('click',()=>document.querySelector('.nav-links')?.classList.toggle('open'));
  });
})();
