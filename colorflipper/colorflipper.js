const clickBtn = document.querySelector('.click-btn');
const backGround = document.querySelector('.background');
const color = document.querySelector(".color");
const headerText = document.querySelector('.header-text');
// 헥사 코드 
// #a13d42 6자리
const numArr = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];


clickBtn.addEventListener('click', () => {
  let hexColor = '#';
  for(let i = 0; i < 6; i++){
    hexColor += numArr[getRandomNumber()];
  }
  color.textContent = hexColor;
  backGround.style.backgroundColor = hexColor;
  headerText.style.color = hexColor;
})

let num = Math.floor(Math.random() * numArr.length)
function getRandomNumber() {
  return Math.floor(Math.random() * numArr.length);
}

