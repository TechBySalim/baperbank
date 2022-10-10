document.getElementById('submit-btn').addEventListener('click', function(){
    const emailFeild = document.getElementById('user-email')
    const emailValu = emailFeild.value;
    const passwordFeild = document.getElementById('user-password')
    const passwordValue = passwordFeild.value;
    if (emailValu == 'salim11bd@gmail.com' && passwordValue == '123456') {
        window.location.href = "main.html";
    }
    else{
        alert('Please enter valid Uaser name Or Password');
    }
})

