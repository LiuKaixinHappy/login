function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (usernameIsWrong(username)) {
        alert("用户名错误！");
        clearInputById("password");
    } else if (passwordIsWrong(password)) {
        alert("密码错误！");
        clearInputById("password")
    } else {
        alert("登录成功！")
    }
}

function usernameIsWrong(username) {
    return username !== '123';
}

function passwordIsWrong(password) {
    return password !== '123';
}
function clearInputById(id) {
    document.getElementById(id).value = "";
}

