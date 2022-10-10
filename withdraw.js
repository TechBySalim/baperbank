//withdraw Process
document.getElementById('submit-withdraw').addEventListener('click', function(){
    //get withdraw text ammount
    const withdrawAmonunt = document.getElementById('withdraw-value');
    const withdrawIntegerAmmount = parseFloat(withdrawAmonunt.innerText);
    //get withdraw feild amount
    const withdrawIput = document.getElementById('withdraw-feild');
    const withdrawInputAmmount = parseFloat(withdrawIput.value);
    const inputToWithdraw = withdrawIntegerAmmount + withdrawInputAmmount;
    withdrawAmonunt.innerText = inputToWithdraw;
    //get total blance text
    const previousBlanceString = document.getElementById('total-blance');
    const previousBlance = parseFloat(previousBlanceString.innerText);
    //total blance to minus
    const totalBlance = previousBlance - inputToWithdraw;
    previousBlanceString.innerText = totalBlance;

    //clear input feild
    withdrawIput.value = '';
})

