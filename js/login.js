$(document).ready(() => {
    $('#login').click(() => {
        var userName = $('#userName').val();
        var passWord = $('#passWord').val();

        // To check if credentials are entered
        if (userName == '' || passWord == '') {
            alert("Please enter all credentials");
        }
        else{
            $.ajax({
                url: "http://localhost:3000/db",
                type: "GET",
                data:{
                    "userName":userName,
                    "password":passWord,
                },
                success:(x)=>{
                    alert("Hello "+userName+", Login Successful");
                    console.log(x);
                    window.location="http://127.0.0.1:5500/html/registration.html"
                }
            })
        }
})
})