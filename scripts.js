var link = document.querySelector(".login-link"); //кнопка входа
var popup = document.querySelector(".modal-login"); //модальное окно
var close = document.querySelector(".modal-close"); //кнопка закрытия
var login = document.querySelector("[name = login]"); //поле для ввода логина
var password = document.querySelector("[name = password]"); //поле для ввода логина
var form = document.querySelector(".login-form"); //форма
var storage = localStorage.getItem("login"); //добавим логин в хранилище
var mapLink = document.querySelector(".contacts-button-map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = document.querySelector(".modal-close-map");

//открыть модальное окно

link.addEventListener("click", function(m){
    m.preventDefault();
    popup.classList.add("modal-show"); 
    login.focus();
    if(storage){
        login.value = storage;
        password.focus();
    }   else{
        login.focus();
    }
})

//закрыть модальное окно

close.addEventListener("click", function(m){
    m.preventDefault();
    popup.classList.remove("modal-show"); 
})

//проверяем выполнение формы

form.addEventListener("submit", function(m){
    if(!login.value || !password.value){
        m.preventDefault();
        alert("Нужно ввести логин и пароль");
    }
})

//закрываем окно при помощи клавиши esc

window.addEventListener("keydown", function(m){
    if(m.keyCode === 27){
        m.preventDefault();
        if(popup.classList.contains("modal-show")){
            popup.classList.remove("modal-show"); 
        }
    }
})

//открыть карту

mapLink.addEventListener("click", function(m){
    m.preventDefault();
    mapPopup.classList.add("modal-show");
})

mapClose.addEventListener("click", function(m){
    m.preventDefault();
    mapPopup.classList.remove("modal-show"); 
})