let a = ''; //first num
let b = ''; //decond num
let sign = ''; //operation sign
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];

const action = ['+', '-', '/', '*'];

//экран
const out = document.querySelector('p');

//очистка
function clearAll() {
  a = '';
  b = '';
  sign = '';
  finish = false;
  out.textContent = 0;
}

const acBtn = document.querySelector('.ac');
acBtn.addEventListener('click', () => {
  clearAll;
});

// document.querySelector('.ac').onclick = clearAll;

// document.querySelector('.buttons').onclick = (event) => {
//     if (!event.target.classList.contains('btn')) return;

//     if (event.target.classList.contains('ac')) return;

//    out.textContent=''

//     const key = event.target.textContent;

//       if (digit.includes(key)) {
//     a += key;
//       console.log(a, b, sign);

//          out.textContent=a
//   }

// }

const buttons = document.querySelector('.buttons');

buttons.addEventListener('click', evt => {
  if (!evt.target.classList.contains('btn')) {
    return;
  }
  if (evt.target.classList.contains('ac')) {
    return;
  }

  out.textContent = '';
  // получаем нажатую кнопку
  const key = evt.target.textContent;

  //нажата 0-9 или .
  if (digit.includes(key)) {
    if (b === '' && sign === '') {
      a += key;
      // console.log(a, b, sign);
      out.textContent = a;
    } else if (a!== '' && b!== '' && finish) {
      b = key;
      finish = false;
      out.textContent=b

    } else {
      b += key;
      out.textContent = b;
    }
    console.log(a, b, sign);
    return;
  }

  //нажаты знаки
  if (action.includes(key)) {
    sign = key;
    out.textContent = sign;
    console.log(a, b, sign);
    return;
  }


  // =
  if (key === '=') {
    if (b === '') {
      b = a;
    }
    switch (sign) {
      case '+':
        a = (+a) + (+b);
        break;
     case '-':
        a = a-b;
        break;
       case '*':
        a = a*b;
        break;
      case '/':
        if (b === '0') {
          out.textContent = 'error'
          a = ''
          b = ''
          sign = ''
          return
        }
        a =a/b;
        break;
 
    }
    finish = true
    out.textContent = a
    console.log(a,b,sign)
  }
});
