const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const slideContainer = document.querySelector('.slide-container');
// slide 개수
const slideLength = document.querySelectorAll('.slide-box').length;
// slide 넓이
const boxWidth = 1000;
// 현재 보여지는 슬라이드 번호
let currentSlide = 1;

function nextFunc() {
  // 현재 슬라이드가 마지막 슬라이드이면 처음으로 초기화
  if(currentSlide >= slideLength) {
    currentSlide = 0;
  }
  slideContainer.style.transform = `translateX(-${currentSlide * boxWidth}px)`;
  currentSlide += 1;
}

function prevFunc() {
  // 현재 슬라이드가 첫 슬라이드면 마지막 슬라이드로 이동
  if(currentSlide === 1){
    currentSlide = slideLength;
  } else {
    currentSlide -= 1;
  } 
  slideContainer.style.transform = `translateX(-${(currentSlide - 1) * boxWidth}px)`;
}
nextBtn.addEventListener('click', nextFunc);
prevBtn.addEventListener('click', prevFunc);

