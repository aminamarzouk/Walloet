$('nav .container i').click(function () {
    $('#listed').slideToggle(800);
});

// check sign in start

function checkLogin() {


    let user = document.getElementById('usernameLi').value;
    let pass = document.getElementById('passwordLi').value;

    if (user == 'ahmed' && pass == '1842002') {

        document.getElementById('logInForm').action = "../admin.html";

    } else {

        alert('Username or password incorrect');

    }

};

// check sign in end


// check sign up start


function checkSignup() {

    let user = document.getElementById('usernameSu').value;
    let pass = document.getElementById('passwordSu').value;
    let confirmPass = document.getElementById('confirm').value;

    if (user.includes('.') || user.includes('/') || user.includes(' ')) {
        alert("username can't include (.) or (/) or space");
    } else if (user.length < 5 && user.lenth > 0) {
        alert("username is too short");
    } else if (pass.length < 6 && pass.lenth > 0) {
        alert("password is too short");
    } else if (pass !== confirmPass) {
        alert("confirmation isn't correct");
    } else {
        document.getElementById('signUpForm').action = "../index.html";
    }

};

// check sign up end
