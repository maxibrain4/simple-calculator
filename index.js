const allBtn = document.querySelectorAll('.btn--click');
const del = document.querySelector('#del-btn');
const reset = document.querySelector('#reset-btn');
const equals = document.querySelector('#equals-btn');
const plus = document.querySelector('#add');
const minus = document.querySelector('#minus');
const multiply = document.querySelector('#multiply');
const divide = document.querySelector('#divide');
const switchOne = document.querySelector('#on');
const switchTwo = document.querySelector('#off');
const switchThree = document.querySelector('#na');
const btn = document.querySelector('.btncolor');
let screen = document.querySelector('.screen');
const container = document.querySelector('.container');
const btnBody = document.querySelector('.btn-body');

const description = document.querySelector('.description ');
let screenValue = '';
// new Intl.NumberFormat(navigator.language).format(screen.value);
allBtn.forEach(function (el) {
  el.addEventListener('click', function () {
    const id = this.getAttribute('data-num');
    screenValue += id;
    screen.value = screenValue;
  });
});
del.addEventListener('click', function () {
  screenValue = screen.value.slice(0, -1);
  screen.value = screenValue;
});
plus.addEventListener('click', function () {
  const id = this.getAttribute('data-num');
  screenValue += id;
  screen.value = screenValue;
});
equals.addEventListener('click', function () {
  screenValue = eval(screen.value);
  screen.value = screenValue;
});
reset.addEventListener('click', function () {
  screen.value = '';
  screenValue = '';
});

minus.addEventListener('click', function () {
  const id = this.getAttribute('data-num');
  screenValue += id;
  screen.value = screenValue;
});
multiply.addEventListener('click', function () {
  const id = this.getAttribute('data-num');
  screenValue += id;
  screen.value = screenValue;
});
divide.addEventListener('click', function () {
  const id = this.getAttribute('data-num');
  screenValue += id;
  screen.value = screenValue;
});

switchOne.addEventListener('click', function () {
  container.style.backgroundColor = '';
  btnBody.style.backgroundColor = '';
  screen.style.backgroundColor = '';
  screen.style.color = '';
  del.style.backgroundColor = '';
  reset.style.backgroundColor = '';
  equals.style.backgroundColor = '';
  description.style.color = '';
  // allBtn.style.color = '';
});
switchTwo.addEventListener('click', function (e) {
  container.style.backgroundColor = 'hsl(0, 0%, 90%)';
  btnBody.style.backgroundColor = 'hsl(0, 5%, 81%)';
  screen.style.backgroundColor = 'hsl(0, 0%, 93%)';
  screen.style.color = 'hsl(60, 10%, 19%)';
  del.style.backgroundColor = 'hsl(185, 42%, 37%)';
  reset.style.backgroundColor = 'hsl(185, 42%, 37%)';
  equals.style.backgroundColor = 'hsl(25, 98%, 40%)';
  description.style.color = 'hsl(60, 10%, 19%)';
  // allBtn.style.color = 'hsl(60, 10%, 19%)';
  // switchtoggle.backgroundColor = 'green';
  // e.target.firstChild.add('btnColor');
  // btn.style.backgroundColor = 'green';
});
switchThree.addEventListener('click', function () {
  container.style.backgroundColor = 'hsl(268, 75%, 9%)';
  btnBody.style.backgroundColor = 'hsl(268, 71%, 12%)';
  screen.style.backgroundColor = 'hsl(268, 71%, 12%)';
  screen.style.color = 'hsl(52, 100%, 62%)';
  del.style.backgroundColor = 'hsl(281, 89%, 26%)';
  reset.style.backgroundColor = 'hsl(281, 89%, 26%)';
  equals.style.backgroundColor = 'hsl(176, 100%, 44%)';
  description.style.color = 'hsl(52, 100%, 62%)';
  // allBtn.classList.add('.btnColor');
  btn.style.backgroundColor = 'red';
});
