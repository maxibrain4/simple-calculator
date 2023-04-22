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
let screen = document.querySelector('.screen');
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
  screen.value = screen.value.slice(0, -1);
  if (screen.value == '') {
    screenValue = '';
  }
});
plus.addEventListener('click', function () {
  const id = this.getAttribute('data-num');
  screenValue += id;
  screen.value = screenValue;
});
equals.addEventListener('click', function () {
  screen.value = eval(screen.value);
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
const container = document.querySelector('.container');
const btnBody = document.querySelector('.btn-body');
switchTwo.addEventListener('click', function () {
  container.style.backgroundColor = 'hsl(0, 0%, 90%)';
  btnBody.style.backgroundColor = 'hsl(0, 5%, 81%)';
  screen.style.backgroundColor = 'hsl(0, 0%, 93%)';
  screen.style.color = 'hsl(60, 10%, 19%)';
  del.style.backgroundColor = 'hsl(185, 42%, 37%)';
  reset.style.backgroundColor = 'hsl(185, 42%, 37%)';
  equals.style.backgroundColor = 'hsl(25, 98%, 40%)';
  switchTwo.style.backgroundColor = 'hsl(25, 98%, 40%)';
  allBtn.style.color = 'hsl(60, 10%, 19%)';
});
