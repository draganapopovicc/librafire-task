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

//Play/pause video and audio
if (document.querySelector('.myUQ-video')) {
  document.querySelectorAll('.myUQ__controls-video').forEach((videoControl) => {
    videoControl.addEventListener('click', (e) => {
      let buttonsWrap = e.target.closest('.myUQ__controls');
      let videoWrap = e.target.closest('.myUQ__video');

      if (buttonsWrap.classList.contains('play-video')) {
        videoWrap.querySelector('.myUQ-video').pause();
        videoWrap.querySelector('.myUQ-audio').pause();
        buttonsWrap.classList.remove('play-video');
      } else {
        videoWrap.querySelector('.myUQ-video').play();
        videoWrap.querySelector('.myUQ-audio').play();
        buttonsWrap.classList.add('play-video');
        buttonsWrap.querySelector('.myUQ__controls-sound').classList.remove('no-sound');
      }
    });
  });

  document.querySelectorAll('.myUQ__controls-sound').forEach((soundControl) => {
    soundControl.addEventListener('click', (e) => {
      let playSound = e.target.closest('.myUQ__controls-sound');
      let videoWrap = e.target.closest('.myUQ__video');

      if (videoWrap.querySelector('.myUQ__controls').classList.contains('play-video')) {
        if (!playSound.classList.contains('no-sound')) {
          videoWrap.querySelector('.myUQ-audio').pause();
          playSound.classList.add('no-sound');
        } else {
          videoWrap.querySelector('.myUQ-audio').play();
          playSound.classList.remove('no-sound');
        }
      }
    });
  });
}
