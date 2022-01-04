// 名字Cookie
let usrname = $Cookie("姓名");
let stu_id = $Cookie("学号");
const startTime = document.getElementById("startTime"); // 发起时间
const start_times = document.getElementById("start_times");
const starterName = document.getElementById("starterName"); // 发起人
const emergeName = document.getElementById("emergeName");
const start_time = document.querySelectorAll("#start_time");
const leave_time = document.querySelectorAll("#leave_time");
const Usrname = document.querySelectorAll("#name");
const stu_ids = document.getElementById("stu_id");

function showTime(params) {
    let nowtime = new Date();
    let years = nowtime.getFullYear();
    let month = nowtime.getMonth() + 1;
    month = doubleNum(month);
    let day = nowtime.getDate();
    day = doubleNum(day);
    let hours = nowtime.getHours();
    hours = doubleNum(hours);
    let minutes = nowtime.getMinutes();
    minutes = doubleNum(minutes);
    let seconds = nowtime.getSeconds();
    seconds = doubleNum(seconds);
    let start_hours = doubleNum(hours - 1);
    let start_minutes = doubleNum(Math.abs(minutes - Math.floor(Math.random() * 60)));
    let start_seconds = doubleNum(Math.abs(seconds - Math.floor(Math.random() * 60)));
    // alert(`${years}-${month}-${day} ${hours}:${minutes}`)

    nameSet();

    // 开始时间
    start_time.forEach((start_time) => {
        start_time.setAttribute(
            "value",
            `${years}-${month}-${day} ${start_hours}:${start_minutes}:${start_seconds}`
        );
        start_time.textContent = `${years}-${month}-${day} ${hours}:${start_minutes}:${start_seconds}`;
    });

    // 结束时间
    leave_time.forEach((leave_time) => {
        leave_time.setAttribute("value", `${years}-${month}-${day} ${hours}:${minutes}:${seconds}`);
        leave_time.textContent = `${years}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    });

    try {
        stu_ids.textContent = stu_id;
        console.log(startTime);
        if (startTime != null) {
            startTime.setAttribute(
                "value",
                `${usrname} 发起于 ${years}-${month}-${day} ${start_hours}:${start_minutes}`
            );
        } else {
            starterName.textContent = usrname;
        }
    } catch (error) { }
    try {
        start_times.setAttribute("value", `${years}-${month}-${day} ${start_hours}:${start_minutes}`);
        start_times.textContent = `${years}-${month}-${day} ${hours}:${minutes}`;
    } catch (error) { }
}

function doubleNum(num) {
    if (num < 10) return "0" + num;
    return num;
}

function nameSet(params) {
    Usrname.forEach((Usrname) => {
        Usrname.setAttribute("value", `${usrname}`);
    });
    emergeName.setAttribute("value", `${usrname} 18133875274`);
}
window.onload = showTime;
// showTime()
