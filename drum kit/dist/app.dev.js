"use strict";

function playSound(e) {
  var audio = document.querySelector("audio[data-key=\"".concat(e.keyCode, "\"]"));
  var key = document.querySelector("div[data-key=\"".concat(e.keyCode, "\"]"));
  var word = document.getElementById("word"); // console.log(audio)
  // console.log(e.keyCode)

  if (!audio) return;
  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
  word.innerHTML = "".concat(key.innerHTML);
  word.classList.add('word'); // word.classList.add('playing');
}
/* 清除样式 */


function removeTransition(e) {
  console.log(e);
  if (event.propertyName !== 'transform') return; // 过滤其中一种事件

  event.target.classList.remove('playing'); // 移除高亮的样式
}

var keys = Array.from(document.querySelectorAll('.key')); // 获取页面所有按钮元素

keys.forEach(function (key) {
  return key.addEventListener('transitionend', removeTransition);
}); // 添加 transition 事件监听

window.addEventListener("keydown", playSound);