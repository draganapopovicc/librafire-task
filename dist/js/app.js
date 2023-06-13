/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saWJyYWZpcmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbGlicmFmaXJlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbGlicmFmaXJlLy4vc3JjL2pzL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy9Ub2dnbGUgbW9iaWxlIG1lbnVcclxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX21lbnUnKSkge1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX21lbnUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbmVkJyk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2JykuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbmVkJyk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJykuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbmVkJyk7XHJcblxyXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYnKS5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW5lZCcpKSB7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnYXV0byc7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qIEFkZCBhbmltYXRpb24gd2hlbiBob3ZlcmluZyBidXR0b24gKi9cclxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iLWJ0bicpKSB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmItYnRuJykuZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIChlKSA9PiB7XHJcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ21vdXNlLW91dCcpO1xyXG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdtb3VzZS1pbicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoZSkgPT4ge1xyXG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdtb3VzZS1pbicpO1xyXG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdtb3VzZS1vdXQnKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG4vL1BsYXkvcGF1c2UgdmlkZW8gYW5kIGF1ZGlvXHJcbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXlVUS12aWRlbycpKSB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm15VVFfX2NvbnRyb2xzLXZpZGVvJykuZm9yRWFjaCgodmlkZW9Db250cm9sKSA9PiB7XHJcbiAgICB2aWRlb0NvbnRyb2wuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICBsZXQgYnV0dG9uc1dyYXAgPSBlLnRhcmdldC5jbG9zZXN0KCcubXlVUV9fY29udHJvbHMnKTtcclxuICAgICAgbGV0IHZpZGVvV3JhcCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5teVVRX192aWRlbycpO1xyXG5cclxuICAgICAgaWYgKGJ1dHRvbnNXcmFwLmNsYXNzTGlzdC5jb250YWlucygncGxheS12aWRlbycpKSB7XHJcbiAgICAgICAgdmlkZW9XcmFwLnF1ZXJ5U2VsZWN0b3IoJy5teVVRLXZpZGVvJykucGF1c2UoKTtcclxuICAgICAgICB2aWRlb1dyYXAucXVlcnlTZWxlY3RvcignLm15VVEtYXVkaW8nKS5wYXVzZSgpO1xyXG4gICAgICAgIGJ1dHRvbnNXcmFwLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYXktdmlkZW8nKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB2aWRlb1dyYXAucXVlcnlTZWxlY3RvcignLm15VVEtdmlkZW8nKS5wbGF5KCk7XHJcbiAgICAgICAgdmlkZW9XcmFwLnF1ZXJ5U2VsZWN0b3IoJy5teVVRLWF1ZGlvJykucGxheSgpO1xyXG4gICAgICAgIGJ1dHRvbnNXcmFwLmNsYXNzTGlzdC5hZGQoJ3BsYXktdmlkZW8nKTtcclxuICAgICAgICBidXR0b25zV3JhcC5xdWVyeVNlbGVjdG9yKCcubXlVUV9fY29udHJvbHMtc291bmQnKS5jbGFzc0xpc3QucmVtb3ZlKCduby1zb3VuZCcpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm15VVFfX2NvbnRyb2xzLXNvdW5kJykuZm9yRWFjaCgoc291bmRDb250cm9sKSA9PiB7XHJcbiAgICBzb3VuZENvbnRyb2wuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICBsZXQgcGxheVNvdW5kID0gZS50YXJnZXQuY2xvc2VzdCgnLm15VVFfX2NvbnRyb2xzLXNvdW5kJyk7XHJcbiAgICAgIGxldCB2aWRlb1dyYXAgPSBlLnRhcmdldC5jbG9zZXN0KCcubXlVUV9fdmlkZW8nKTtcclxuXHJcbiAgICAgIGlmICh2aWRlb1dyYXAucXVlcnlTZWxlY3RvcignLm15VVFfX2NvbnRyb2xzJykuY2xhc3NMaXN0LmNvbnRhaW5zKCdwbGF5LXZpZGVvJykpIHtcclxuICAgICAgICBpZiAoIXBsYXlTb3VuZC5jbGFzc0xpc3QuY29udGFpbnMoJ25vLXNvdW5kJykpIHtcclxuICAgICAgICAgIHZpZGVvV3JhcC5xdWVyeVNlbGVjdG9yKCcubXlVUS1hdWRpbycpLnBhdXNlKCk7XHJcbiAgICAgICAgICBwbGF5U291bmQuY2xhc3NMaXN0LmFkZCgnbm8tc291bmQnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdmlkZW9XcmFwLnF1ZXJ5U2VsZWN0b3IoJy5teVVRLWF1ZGlvJykucGxheSgpO1xyXG4gICAgICAgICAgcGxheVNvdW5kLmNsYXNzTGlzdC5yZW1vdmUoJ25vLXNvdW5kJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hfX3NlbGVjdCcpKSB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaF9fc2VsZWN0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgZS50YXJnZXQuY2xvc2VzdCgnLnNlYXJjaF9fc2VsZWN0JykuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcub3B0aW9ucyBsaScpKSB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm9wdGlvbnMgbGknKS5mb3JFYWNoKChvcHRpb24pID0+IHtcclxuICAgIG9wdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5vcHRpb25zIGxpJykuZm9yRWFjaCgob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgb3B0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxuICAgICAgbGV0IHNlbGVjdGVkSXRlbSA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoX19zZWxlY3QtLXNlbGVjdGVkJykuaW5uZXJIVE1MID0gc2VsZWN0ZWRJdGVtO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vU2xpZGVyXHJcbmxldCBwcmV2aW91c0J0biA9IDA7XHJcbmxldCBjdXJyZW50SW5kZXggPSAwO1xyXG5sZXQgbGFzdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXJfX2RvdHMgc3BhbjpsYXN0LW9mLXR5cGUnKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXR0cicpO1xyXG5sZXQgc2xpZGVyV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXJfX3dyYXAnKTtcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbGlkZXJfX2RvdHMgc3BhbicpLmZvckVhY2goKGJ1bGxldCkgPT4ge1xyXG4gIGJ1bGxldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBsZXQgZmlndXJlV2lkdGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyX193cmFwIC5iLWNhcmQnKS5vZmZzZXRXaWR0aDtcclxuICAgIGxldCBjdXJyZW50QnRuID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWF0dHInKTtcclxuICAgIGxldCBnYXAgPSAzMDtcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2xpZGVyX19kb3RzIHNwYW4nKS5mb3JFYWNoKChidWxsZXQpID0+IHtcclxuICAgICAgYnVsbGV0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS0tcmlnaHQnLCAnYWN0aXZlLS1sZWZ0Jyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoY3VycmVudEJ0biA9PSAwKSB7XHJcbiAgICAgIGN1cnJlbnRJbmRleC0tO1xyXG4gICAgICBzbGlkZXJXcmFwLnNjcm9sbExlZnQgLT0gZmlndXJlV2lkdGggKyBnYXA7XHJcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS0tbGVmdCcpO1xyXG4gICAgfSBlbHNlIGlmIChjdXJyZW50QnRuID09IGxhc3RCdG4pIHtcclxuICAgICAgY3VycmVudEluZGV4Kys7XHJcbiAgICAgIHNsaWRlcldyYXAuc2Nyb2xsTGVmdCArPSBmaWd1cmVXaWR0aCArIGdhcDtcclxuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLS1yaWdodCcpO1xyXG4gICAgfSBlbHNlIGlmIChjdXJyZW50QnRuID4gcHJldmlvdXNCdG4pIHtcclxuICAgICAgY3VycmVudEluZGV4Kys7XHJcbiAgICAgIHNsaWRlcldyYXAuc2Nyb2xsTGVmdCArPSBmaWd1cmVXaWR0aCArIGdhcDtcclxuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLS1yaWdodCcpO1xyXG4gICAgfSBlbHNlIGlmIChjdXJyZW50QnRuIDwgcHJldmlvdXNCdG4pIHtcclxuICAgICAgY3VycmVudEluZGV4LS07XHJcbiAgICAgIHNsaWRlcldyYXAuc2Nyb2xsTGVmdCAtPSBmaWd1cmVXaWR0aCArIGdhcDtcclxuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLS1sZWZ0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJldmlvdXNCdG4gPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXR0cicpO1xyXG4gIH0pO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9