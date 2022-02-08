const userBirthday = document.querySelector("[name=birthday]")
const time = document.querySelector(".time")
let years = document.getElementById("years")
let months = document.getElementById("months")
let days = document.getElementById("days")
let hours = document.getElementById("hours")
let minutes = document.getElementById("minutes")
let seconds = document.getElementById("seconds")

userBirthday.addEventListener("change",zaman);



function zaman(event) {
    if (new Date().getDate() - new Date(userBirthday.value).getDate() < 0) {
        days.innerText = new Date().getDate() - new Date(userBirthday.value).getDate() + 30;
    }else {
        days.innerText = new Date().getDate() - new Date(userBirthday.value).getDate();
    }

    if (new Date().getMonth() - new Date(userBirthday.value).getMonth() < 0) {
        months.innerText = new Date(userBirthday.value).getMonth() - new Date().getMonth() + 1
        years.innerText = new Date().getFullYear() - new Date(userBirthday.value).getFullYear() - 1;
    }else {
        months.innerText = new Date().getMonth() - new Date(userBirthday.value).getMonth();
        years.innerText = new Date().getFullYear() - new Date(userBirthday.value).getFullYear();
    }

    

}





// years.innerText = new Date().getFullYear() - new Date(userBirthday.value).getFullYear();
// months.innerText = new Date().getMonth() - new Date(userBirthday.value).getMonth();
// days.innerText = new Date().getDate() - new Date(userBirthday.value).getDate()