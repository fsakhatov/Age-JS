let btn = document.querySelector('button');

let day = document.querySelector('.day');
let month = document.querySelector('.month');
let year = document.querySelector('.year');

let p1 = document.querySelector('.p1');
let p2 = document.querySelector('.p2');
let p3 = document.querySelector('.p3');

let count = 0;

btn.addEventListener('click', (e) => {
    if( day.value.length === 0 || day.value > 31){
    p1.innerText = `Must be a valid day`;
    day.style.borderColor = 'red';
    day.previousElementSibling.style.color = 'red'
    }
    if( month.value.length === 0 || month.value > 12){
        p2.innerText = `Must be a valid month`;
        month.style.borderColor = 'red';
        month.previousElementSibling.style.color = 'red'
    }
    if( year.value.length === 0 || year.value > 2024){
        p3.innerText = `Must be in the past`;
        year.style.borderColor = 'red';
        year.previousElementSibling.style.color = 'red'
    }
}

)