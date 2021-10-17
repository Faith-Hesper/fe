$("#login-button").click(function (event) {
  var userName = document.getElementById("userName").value;
  var pwd = document.getElementById("pwd").value;
  if (userName == "xuqin" && pwd == "1018") {
    event.preventDefault();
    $("input-box").fadeOut(500);
    //   requestFullScreen();
    location.href = "./main/happy.html";
    }
  else {
      alert("error");
    }
});
