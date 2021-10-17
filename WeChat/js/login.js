import { name } from "./random.js"
const startTime = document.getElementById("startTime")
const starterName =document.getElementById('starterName')
// const detailTime = document.querySelector('#detail');
const leavetime = document.querySelectorAll("#leavetime")
const Usrname = document.querySelectorAll("#name")
// let names = ["李鑫", '刘黎', '潘石屹', '吴海安','李雅静',' 韩梦洁','王安晏','赵博超','钟哲圣']
// let name = names[Math.floor(Math.random() * names.length)];
function showTime(params) {
    let nowtime = new Date()
    let years = nowtime.getFullYear();
    let month = nowtime.getMonth() + 1;
    month = doubleNum(month);
    let day = nowtime.getDate();
    day = doubleNum(day);
    let hours = nowtime.getHours();
    hours = doubleNum(hours);
    let minutes = nowtime.getMinutes();
    minutes = doubleNum(minutes);
    // alert(`${years}-${month}-${day} ${hours}:${minutes}`)
    try {
        if (startTime.getAttribute('data-name') == "detail") {
            startTime.setAttribute('value', `${years}-${month}-${day} ${hours}:${minutes}`);
            starterName.textContent = name;
        }
        else {
            
        }startTime.setAttribute('value',`${name}发起于 ${years}-${month}-${day} ${hours}:${minutes}`);
    } catch (error) {
        
    }

    leavetime.forEach(leavetime => {
        leavetime.setAttribute('value',`${years}-${month}-${day}`);
    });
    nameSet()
}
function doubleNum(num) {
    if (num < 10)
        return "0" + num
    return num
}
function nameSet(params) {
    Usrname.forEach(Usrname => {
        Usrname.setAttribute('value', `${name}`);
    })
}
window.onload = showTime;
// showTime()