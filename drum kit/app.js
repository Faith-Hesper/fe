let times = 6;
function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  const word = document.getElementById("word");
  // console.log(audio)
  // console.log(e.keyCode)
  if (!audio) return;
  times--;
  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
  word.innerHTML = `${key.innerHTML}`;
  word.classList.add("word");
  setTimeout(() => {
    times = 6;
  }, 800);
  let top = Math.floor(Math.random() * 10);
  // let left=Math.floor(Math.random()*800);
  word.style.top = `${times * 25 + top}px`;
  word.style.left = `${key.offsetLeft}px`;
  // word.classList.add('playing');
}

/* 清除样式 */
function removeTransition(e) {
  // console.log(e);
  // if (e.propertyName !== 'transform') return; // 过滤其中一种事件
  e.target.classList.remove("playing"); // 移除高亮的样式
}
const keys = Array.from(document.querySelectorAll(".key")); // 获取页面所有按钮元素
keys.forEach((key) => key.addEventListener("transitionend", removeTransition)); // 添加 transition 事件监听
window.addEventListener("keydown", playSound);
