/*
01. add event handler with the withdraw buttton
02. get the withdrwa ammount from the withdraw input field
2.5.  also make sure to convert the input a number by using praseFloat
3. Get previous withdraw total
4. claculate total withdraw ammount
4.5 set total withdraw amount
5. get the previous balannce
6. calculate new balance total
6.1 set the new balance total
7. clear withdraw input value
26-8 Money withdraw and reduce balance for withdraw

*/

// step-01: 
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // step-02: 
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawFieldString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawFieldString);

    //step-03: 
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    console.log(previousWithdrawTotal);

    //step-04: 
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    //step-05:
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    //step-06:
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;
    // step-07:
    withdrawField.value = '';
})
