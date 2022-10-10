
document.getElementById('submit-depost').addEventListener('click', function(){
    //inner text feild
    const depositShow = document.getElementById('deposit-amount');
    const depositValue = depositShow.innerText;
    const intigerdepositValue = parseFloat(depositValue);
    //input feild 
    const depositFeild = document.getElementById('deposit-feild');
    const depositInputValue = depositFeild.value;
    const integerDepositInput = parseFloat(depositInputValue);
    //input and inntext sum
    const depositSum = intigerdepositValue + integerDepositInput;
    //show deposit value
    depositShow.innerText = depositSum;
    //get inner text blance
    const blance = document.getElementById('total-blance');
    const blanceValue = blance.innerText
    const integerBlance = parseFloat(blanceValue);
    //depost and blance sum
    const totalSum = depositSum + integerBlance;
    blance.innerText = totalSum;

    //Input feild clear
    depositFeild.value = '';
})

