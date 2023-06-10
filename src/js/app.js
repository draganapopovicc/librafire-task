//Toggle mobile menu
if (document.querySelector('.header__menu')) {
  document.querySelector('.header__menu').addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('opened');
    document.querySelector('.nav').classList.toggle('opened');

    if (document.querySelector('.nav').classList.contains('opened')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  });
}

/* Add animation when hovering button */
if (document.querySelector('.b-btn')) {
  document.querySelectorAll('.b-btn').forEach((btn) => {
    btn.addEventListener('mouseenter', (e) => {
      e.target.classList.remove('mouse-out');
      e.target.classList.add('mouse-in');
    });

    btn.addEventListener('mouseleave', (e) => {
      e.target.classList.remove('mouse-in');
      e.target.classList.add('mouse-out');
    });
  });
}
