function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const inputAmount = parseFloat(inputAmountText);
    inputField.value = '';
     return inputAmount;
}
// Handle click btn total--------------
document.getElementById('total-btn').addEventListener('click', function (){

    const foodCostAmount = getInputValue('food-cost');
    if(foodCostAmount < 0){
        alert('please enter positive number')
    }
    const rentCostAmount = getInputValue('rent-cost');
    if(rentCostAmount < 0){
        alert('please enter positive number')
    }
    const clothCostAmount = getInputValue('cloth-cost');
    if(clothCostAmount < 0){
        alert('please enter positive number')
    }
    
    const totalCostAmount = foodCostAmount + rentCostAmount + clothCostAmount;
// Total Expences calc-----------------
    const totalExpence = document.getElementById('total-expence');
    const totalExpenceText = totalExpence.innerText;
    const previousExpenceAmount = parseFloat(totalExpenceText);
    
   const  totalExpenceAmount = previousExpenceAmount + totalCostAmount;
   
   
   totalExpence.innerText = totalExpenceAmount;
   
    //income input---------------------
    const incomeInput = document.getElementById('income-input');
    const incomeInputText = incomeInput.value;
    const incomeInputAmount = parseFloat(incomeInputText);
    if(incomeInputAmount < 0 || incomeInputAmount < totalExpenceAmount){
        alert('please enter valid amount')
    }
    
    //rest balance
    const restBalance = document.getElementById('rest-balance');
    const restBalanceText = restBalance.innerText;
    const restBalanceAmount = parseFloat(restBalanceText);
    

    restBalance.innerText = incomeInputAmount - totalExpenceAmount;
    
});
// savings section ----------------------
document.getElementById('save-btn').addEventListener('click', function (){
 const saveInput = document.getElementById('save-input');
 const saveAmount = document.getElementById('save-amount');
 const saveAmountText = saveAmount.innerText;
 const saveAmountTotal = parseFloat(saveAmountText);
 const remainBalance = document.getElementById('remain-balance');
 const savingsPercentText = saveInput.value;
 const savingPercentAmout = parseFloat(savingsPercentText);
 if(savingPercentAmout < 0 ){
    alert('please enter positive number')
}
 const currentBalance = document.getElementById('income-input').value;

 const monthlysavings = currentBalance * savingPercentAmout / 100;
 
  saveAmount.innerText = monthlysavings;
  const restBalanceText = document.getElementById('rest-balance').innerText;
  const restBalanceAmount = parseFloat(restBalanceText);
  if(restBalanceAmount <  monthlysavings ){
    alert('you have not enough money to savings')
}

  remainBalance.innerText = restBalanceAmount - monthlysavings;
   // end js file
});