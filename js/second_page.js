//Задание 1

let timer;
square.onclick = function() {
    let currentPos;
    timer = setInterval(function() {
        currentPos = square.getBoundingClientRect();
        square.style.left = (currentPos.x+10) + 'px';

        if (currentPos.x > document.documentElement.clientWidth-100) {
            clearInterval(timer);
            square.style.left = 0 + 'px';
        };
    }, 20);
}

let stop = document.querySelector("#stop");

stop.addEventListener('click', () => {
    clearInterval(timer);
})

//Задание 2
document.querySelector("#divText").hidden = true;
let toHide = document.querySelector("#toHide");

toHide.addEventListener('click', function() {
    let hidden = document.querySelector("#divText");
    if(hidden.hidden){
        hidden.hidden = false;
    } else {
        hidden.hidden = true;
    }
})

//Задание 3

let showCurDate = () => {
    let nowDay = new Date().getDay();
    let days = ['Воскресенье', 'Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'];
    let displayDate = document.querySelector(".showDate");

    if(nowDay == 0) {
        nowDay = 7
        displayDate.innerHTML = `Сегодня: ${days[nowDay]}, его порядковый номер - 7`;
    } else {
        displayDate.innerHTML = `Сегодня: ${days[nowDay]}, его порядковый номер - ${nowDay}`;
    }
}

showCurDate();

// Задание 4
let btnText = document.querySelector("#btnText");

btnText.addEventListener("click", () => {
    
    let text = document.querySelector("#text").value.split(' ');
    let differentLetters = document.querySelector("#text").value.split('');
    let showPlace = document.querySelector('.modal-body');
    let includeA = 0;
    let stringA = ['а', 'А', 'a', 'A']; //для русских букв а
    showPlace.innerHTML = '';

    if(text.length <= 1 && text[0] == '') {
        return (showPlace.innerHTML = "Вы ничего не ввели");
    }
    
    let ul = document.createElement('ul');
    showPlace.append(ul);

    for (let key in differentLetters){
        if(stringA[0].includes(differentLetters[key]) || stringA[1].includes(differentLetters[key]) || stringA[2].includes(differentLetters[key]) || stringA[3].includes(differentLetters[key])){
            includeA++;
        }
    }

    let fragment = new DocumentFragment();

    for(let i = 0; i < text.length; i++){
        let li = document.createElement('li');
        li.innerHTML = text[i];
        if(i == 0){
            text[0] = text[0].toUpperCase();
            li.innerHTML = text[0];
        }
        else if((text.length-1 == i) || (text.length-2 == i)){
            li.innerHTML = text[i].toLowerCase();
            console.log(text[i].toLowerCase())
        }
        fragment.append(li);
    }

    ul.append(fragment);
    showPlace.append(`В тексте содержится: ${includeA} букв а`);
})
