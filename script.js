let btn = document.querySelector('button');

let day = document.querySelector('.day');
let month = document.querySelector('.month');
let year = document.querySelector('.year');

let p1 = document.querySelector('.p1');
let p2 = document.querySelector('.p2');
let p3 = document.querySelector('.p3');

let s1 = document.querySelector('.s1');
let s2 = document.querySelector('.s2');
let s3 = document.querySelector('.s3');

let count = 0;

let date = new Date();
btn.addEventListener('click', (e) => {
    if( day.value.length === 0 || day.value > 31){
    p1.innerText = `Must be a valid day`;
    day.style.borderColor = 'red';
    day.previousElementSibling.style.color = 'red'
    } else{
        p1.innerText = '';
        day.style.borderColor = '#716F6F';
        day.previousElementSibling.style.color = '#716F6F';
        count++
    }
    if( month.value.length === 0 || month.value > 12){
        p2.innerText = `Must be a valid month`;
        month.style.borderColor = 'red';
        month.previousElementSibling.style.color = 'red'
    }else{
        p2.innerText = '';
        month.style.borderColor = '#716F6F';
        month.previousElementSibling.style.color = '#716F6F';
        count++
    }
    if( year.value.length === 0 || year.value > 2024){
        p3.innerText = `Must be in the past`;
        year.style.borderColor = 'red';
        year.previousElementSibling.style.color = 'red'
    } else{
        p3.innerText = '';
        year.style.borderColor = '#716F6F';
        year.previousElementSibling.style.color = '#716F6F';
        count++;
    }
    if( count === 3){
        let birthday = `${month.value}/${day.value}/${year.value}`;

        let res = new Date(birthday)
        let result = Date.now() - res;
        let ageDate = new Date(result)
        s1.innerText = ageDate.getUTCFullYear() - 1970;
        s2.innerText =  ageDate.getUTCMonth();
        s3.innerText = ageDate.getUTCDay()-1;
    }
}

)
