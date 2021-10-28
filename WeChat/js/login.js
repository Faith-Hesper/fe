let usrname = $Cookie("姓名");
const startTime = document.getElementById("startTime");
const starterName =document.getElementById('starterName')
const emergeName = document.getElementById("emergeName")
const detailTime = document.querySelector('#detail');
const leavetime = document.querySelectorAll("#leavetime")
const Usrname = document.querySelectorAll("#name")
// let names = ["李鑫", '刘黎', '潘石屹', '吴海安','李雅静',' 韩梦洁','王安晏','赵博超','钟哲圣','李沁','张雨琪','张雨绮','李世民','邓海洋','梦琪','王忆柳','张惜文','李慕青','叶安志']
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
        // 详情页时间
        if (detailTime.getAttribute('data-name') === "detail") {
            detailTime.setAttribute('value',`${years}-${month}-${day} ${hours}:${minutes}`);
            starterName.textContent = usrname;
        }
        // else {
            
        // }
    } catch (error) {
        
    }
    try{startTime.setAttribute('value',`${usrname} 发起于 ${years}-${month}-${day} ${hours}:${minutes}`);}
    catch(error){}
    // 结束时间
    leavetime.forEach(leavetime => {
        leavetime.setAttribute('value',`${years}-${month}-${day}`);
        leavetime.textContent=`${years}-${month}-${day}`;
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
        Usrname.setAttribute('value', `${usrname}`);
    })
    emergeName.setAttribute('value', `${usrname} 18133875274`)
}
window.onload = showTime;
// showTime()