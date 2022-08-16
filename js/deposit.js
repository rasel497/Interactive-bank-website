// step-01: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
    // step-02: get the deposit amount from the deposit input field
    // for input field use  .value to the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    // console.log(typeof newDepositAmount 1223);
    // step-03: get the current deposit total;
    // for non-input(element other than input, textarea) use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // step-04: add number to set total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    console.log(typeof previousDepositTotal);

    depositTotalElement.innerText = currentDepositTotal;

    // step-05: <Balance> get balance ccurrent total
    const balanceTotalElement = document.getElementById('balance-total');
    const newBalanceAmountString = balanceTotalElement.innerText;
    const newBalanceAmountTotal = parseFloat(newBalanceAmountString);

    // step-06: calculate total balance
    const currentBalanceTotal = newBalanceAmountTotal + newDepositAmount;
    // ste the balance total
    balanceTotalElement.innerText = currentBalanceTotal;


    //step-07: clear the deposit field
    depositField.value = ''

})