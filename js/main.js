$(function () {
    $('[data-toggle="popover"]').popover()
})  

$('.popover-dismiss').popover({
    trigger: 'focus'
})

//прогресбар

window.onscroll = function() {myFunction()};

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
}

//Небольшая валидация формы

let btnSubmit = document.querySelector("#formSubmit");

let formSubmit = () => {
    let email = document.querySelector("#inputEmail").value;
    let password = document.querySelector("#inputPassword").value;
    let feedBack = document.querySelector("#feedBack").value;

    let correctEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{1,4}$/i;
    let correctPass = /^[a-z0-9]{8,20}$/

    console.log(correctEmail.test(email));

    if(correctEmail.test(email) && correctPass.test(password)){
        if(feedBack == ""){
            return alert(
                `Поля Email и пароль заполнены верно!\nВаш Email: ${email}\nЖаль, что вы не оставили отзыв`);
        }
        return alert(
            `Поля Email и пароль заполнены верно!\nВаш Email: ${email}\nСпасибо за ваш отзыв!`);
    } else {
        return alert("Проверте правильность заполнения полей Email и пароль(минимум 8 символов)!");
    }
    
}

btnSubmit.addEventListener("click", formSubmit);

//смена темы

let switchMode = document.querySelector("#btnThemeSwitcher");

switchMode.onclick = () => {
    let theme = document.querySelector("#theme");
    let themeIcon = document.querySelector("#theme_icon")

    if(theme.getAttribute("href") == "css/style.css"){
        theme.href = "css/dark_theme.css";
        themeIcon.className = "bi bi-brightness-high-fill"
    } else {
        theme.href = "css/style.css";
        themeIcon.className = "bi bi-mask"
    }
}
// Невозможность копировать
document.onselectstart = noselect;
document.oncontextmenu = noselect;
document.ondragstart = noselect;

function noselect() {return false;}

// 5 мин бездействия

let inactiveUser = function() {
    let timerId;
    
    window.onmousemove = resetTimer;
    document.onkeypress = resetTimer;
    document.onclick = resetTimer;
    document.onscroll = resetTimer;

    function info() {
        let anws = confirm("Вы еще здесь?");
        if(!anws){
            window.open('','_parent', '').close();
        }
    }

    function resetTimer() {
        clearInterval(timerId);
        timerId = setTimeout (info, 120000);
    }
}

inactiveUser();

//проверка браузера

let get_browser = () => {
    let p = document.querySelector("#browser_version");
    let ua=navigator.userAgent,tem,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []; 
    if(/trident/i.test(M[1])){
        tem=/\brv[ :]+(\d+)/g.exec(ua) || []; 
        p.innerHTML = `Вы используете браузер ${'Internet Explorer'}, версии ${tem[1]}`;
        return {name:'IE',version:(tem[1]||'')};
        }   
    if(M[1]==='Chrome'){
        tem=ua.match(/\bOPR|Edge\/(\d+)/)
        if(tem!=null) {
            p.innerHTML = `Вы используете браузер ${'Opera'}, версии ${tem[1]}`;
            return {name:'Opera', version:tem[1]};
        }
    }   
    M=M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem=ua.match(/version\/(\d+)/i))!=null) {M.splice(1,1,tem[1]);}
    p.innerHTML = `Вы используете браузер ${M[0]}, версии ${M[1]}`;
    return {
      name: M[0],
      version: M[1]
    };
}

get_browser();

//плавная прокрутка

let anchors = document.querySelectorAll(".anchor");

for(let anchor of anchors){
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        let blockToScroll = anchor.getAttribute('href');
        
        document.querySelector(blockToScroll).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

