//Toggle mobile menu
if (document.querySelector('.header__menu')) {
  document.querySelector('.header__menu').addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('opened');
    document.querySelector('.nav').classList.toggle('opened');
    document.querySelector('.header').classList.toggle('opened');

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

if (document.querySelector('.search__select')) {
  document.querySelector('.search__select').addEventListener('click', (e) => {
    e.target.closest('.search__select').classList.toggle('active');
  });
}

if (document.querySelectorAll('.options li')) {
  document.querySelectorAll('.options li').forEach((option) => {
    option.addEventListener('click', (e) => {
      document.querySelectorAll('.options li').forEach((option) => {
        option.classList.remove('selected');
      });

      e.target.classList.add('selected');
      let selectedItem = e.target.textContent;
      document.querySelector('.search__select--selected').innerHTML = selectedItem;
    });
  });
}

//Slider
let previousBtn = 0;
let currentIndex = 0;
let lastBtn = document.querySelector('.slider__dots span:last-of-type').getAttribute('data-attr');
let sliderWrap = document.querySelector('.slider__wrap');

document.querySelectorAll('.slider__dots span').forEach((bullet) => {
  bullet.addEventListener('click', (e) => {
    let figureWidth = document.querySelector('.slider__wrap .b-card').offsetWidth;
    let currentBtn = e.target.getAttribute('data-attr');
    let gap = 30;

    document.querySelectorAll('.slider__dots span').forEach((bullet) => {
      bullet.classList.remove('active--right', 'active--left');
    });

    if (currentBtn == 0) {
      currentIndex--;
      sliderWrap.scrollLeft -= figureWidth + gap;
      e.target.classList.add('active--left');
    } else if (currentBtn == lastBtn) {
      currentIndex++;
      sliderWrap.scrollLeft += figureWidth + gap;
      e.target.classList.add('active--right');
    } else if (currentBtn > previousBtn) {
      currentIndex++;
      sliderWrap.scrollLeft += figureWidth + gap;
      e.target.classList.add('active--right');
    } else if (currentBtn < previousBtn) {
      currentIndex--;
      sliderWrap.scrollLeft -= figureWidth + gap;
      e.target.classList.add('active--left');
    }

    previousBtn = e.target.getAttribute('data-attr');
  });
});
