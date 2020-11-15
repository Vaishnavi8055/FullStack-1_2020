//Selectors

const time = document.getElementById("time");
const greeting = document.getElementById("greeting");
const name = document.getElementById("name");
const date = document.getElementById("date")

//Event-Listners
name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);

//Functions

function showTime() {
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();

    // Present date
    let todayDate = today.toDateString();

    //AM - PM
    let amPm = hours > 12 ? 'PM' : 'AM';

    //12 hours format
    hours = hours % 12 || 12;

    //output
    time.innerHTML = `${setZero(hours)}<span>:</span>${setZero(minutes)}<span>:</span>${setZero(seconds)}${" "}${amPm}`;

    // Realtime Time set
    setTimeout(showTime, 1000);
}


//set zero
function setZero(n) {
    return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

//dynamic greeting
function setgreeting() {
    let today = new Date()
    let hours = today.getHours();

    if (hours < 12) {
        document.body.style.backgroundImage = 'url("../images/Good-Morning.jpeg")'
        greeting.innerHTML = "Good Morning !";
    } else if (hours < 18) {
        document.body.style.backgroundImage = 'url("../images/Good-Afternoon.jpg")'
        greeting.innerHTML = "Good Afternoon !";
        document.body.style.color = 'yellow'
    } else {
        document.body.style.backgroundImage = 'url("../images/Good Evening.jpg")'
        greeting.innerHTML = 'Good Evening !';
        document.body.style.color = 'white'
    }
}


function getName() {
    if (localStorage.getItem('myData') == null) {
        name.innerHTML = "Enter your Name";
    } else {
        name.innerHTML = localStorage.getItem('myData');
    }
}

//No need to call this function as it is automatically called by eventListner
function setName(e) {
    // keypress call
    if (e.type === "keypress") {
        if (e.keyCode == 13) {
            localStorage.setItem("myData", e.target.innerHTML);
            name.blur();
        }
    } else {
        // blur call
        localStorage.setItem("myData", e.target.innerHTML); //e.target = location of name
    }
}




//Function-calls
showTime();
setgreeting();
getName();
