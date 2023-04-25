const allBtn = document.querySelectorAll('.btn--click');
const del = document.querySelector('#del-btn');
const reset = document.querySelector('#reset-btn');
const equals = document.querySelector('#equals-btn');
const switchOne = document.querySelector('#on');
const switchTwo = document.querySelector('#off');
const switchThree = document.querySelector('#na');
const btn = document.querySelector('.btncolor');
let screen = document.querySelector('.screen');
const container = document.querySelector('.container');
const btnBody = document.querySelector('.btn-body');
const switchToggle = document.querySelector('.switch-toggle');

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
equals.addEventListener('click', function () {
  if (screenValue !== '') {
    screenValue = eval(screenValue);
  } else {
    screenValue = '';
  }
  screen.value = screenValue;
});
reset.addEventListener('click', function () {
  screen.value = '';
  screenValue = '';
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
  del.style.boxShadow = '';
  reset.style.boxShadow = '';
  equals.style.boxShadow = '';
  // allBtn.style.color = '';
  switchToggle.style.backgroundColor = '';

  document.querySelector('.btnx').style.backgroundColor = '';
});
switchTwo.addEventListener('click', function (e) {
  container.style.backgroundColor = 'hsl(0, 0%, 90%)';
  btnBody.style.backgroundColor = 'hsl(0, 5%, 81%)';
  screen.style.backgroundColor = 'hsl(0, 0%, 93%)';
  screen.style.color = 'hsl(60, 10%, 19%)';
  del.style.backgroundColor = 'hsl(185, 42%, 37%)';
  del.style.boxShadow = 'hsl(185, 58%, 25%) 0px 4px 0px 0px';
  reset.style.backgroundColor = 'hsl(185, 42%, 37%)';
  reset.style.boxShadow = 'hsl(185, 58%, 25%) 0px 4px 0px 0px';
  equals.style.backgroundColor = 'hsl(25, 98%, 40%)';
  equals.style.boxShadow = 'hsl(25, 99%, 27%) 0px 4px 0px 0px';
  description.style.color = 'hsl(60, 10%, 19%)';
  allBtn.forEach(function (el) {
    el.style.backgroundColor = 'hsl(0, 0%, 93%)';
    el.style.color = 'hsl(60, 10%, 19%)';
    el.style.boxShadow = 'hsl(28, 16%, 65%) 0px 4px 0px 0px';
  });
  // switchtoggle.backgroundColor = 'green';
  // e.target.firstChild.add('btnColor');
  // btn.style.backgroundColor = 'green';
  switchToggle.style.backgroundColor = 'hsl(0, 5%, 81%)';
  // let one = e.currentTarget;
  // console.log(one);
  // one.style.backgroundColor = 'hsl(0, 5%, 81%)';
  document.querySelector('.click').style.backgroundColor = '';
  document.querySelector('.btnx').style.backgroundColor = 'hsl(25, 98%, 40%)';
});
switchThree.addEventListener('click', function () {
  container.style.backgroundColor = 'hsl(268, 75%, 9%)';
  btnBody.style.backgroundColor = 'hsl(268, 71%, 12%)';
  screen.style.backgroundColor = 'hsl(268, 71%, 12%)';
  screen.style.color = 'hsl(52, 100%, 62%)';
  del.style.backgroundColor = 'hsl(281, 89%, 26%)';
  reset.style.backgroundColor = 'hsl(281, 89%, 26%)';
  equals.style.backgroundColor = 'hsl(176, 100%, 44%)';
  del.style.boxShadow = 'hsl(285, 91%, 52%) 0px 4px 0px 0px';
  reset.style.boxShadow = 'hsl(285, 91%, 52%) 0px 4px 0px 0px';
  equals.style.boxShadow = 'hsl(177, 92%, 70%) 0px 4px 0px 0px';
  description.style.color = 'hsl(52, 100%, 62%)';
  switchToggle.style.backgroundColor = 'hsl(268, 71%, 12%)';
  allBtn.forEach(function (el) {
    el.style.backgroundColor = 'hsl(268, 47%, 21%)';
    el.style.color = 'hsl(52, 100%, 62%)';
    el.style.boxShadow = ' hsl(290, 70%, 36%) 0px 4px 0px 0px';
    document.querySelector('.click').style.backgroundColor =
      'hsl(176, 100%, 44%)';
    document.querySelector('.btnx').style.backgroundColor = '';
  });
});
