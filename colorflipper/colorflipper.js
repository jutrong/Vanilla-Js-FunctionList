const clickBtn = document.querySelector('.click-btn');
const backGround = document.querySelector('.background');
const color = document.querySelector(".color");
const headerText = document.querySelector('.header-text');

// 헥사 코드 
// a13d42 => 이렇게 랜덤 6자리 뽑아내야됨
const numArr = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

// 0 ~ 15 숫자 랜덤으로 반환
function getRandomNumber() {
  return Math.floor(Math.random() * numArr.length);
}

clickBtn.addEventListener('click', () => {
  let hexColor = '#';
  // 배열 numArr에서 숫자 랜덤으로 6개 추출
  for(let i = 0; i < 6; i++){
    hexColor += numArr[getRandomNumber()];
  }
  color.textContent = hexColor;
  backGround.style.backgroundColor = hexColor;
  headerText.style.color = hexColor;
})



