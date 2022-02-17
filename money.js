document.getElementById('total-btn').addEventListener('click', function (){
// Expences calculate--------------
    const foodCost = document.getElementById('food-cost');
    const foodCostInputText = foodCost.value;
    const foodCostAmount = parseFloat(foodCostInputText);
    foodCost.value = '';
    
    const rentCost = document.getElementById('rent-cost');
    const rentCostInputText = rentCost.value;
    const rentCostAmount = parseFloat(rentCostInputText);
    rentCost.value = '';

    const clothCost = document.getElementById('cloth-cost');
    const clothCostInputText = clothCost.value;
    const clothCostAmount = parseFloat(clothCostInputText);
    clothCost.value = '';
    
    const totalCostAmount = foodCostAmount + rentCostAmount + clothCostAmount;

    const totalExpence = document.getElementById('total-expence');
    const totalExpenceText = totalExpence.innerText;
    const previousExpenceAmount = parseFloat(totalExpenceText);
    
   const  totalExpenceAmount = previousExpenceAmount + totalCostAmount;
   totalExpence.innerText = totalExpenceAmount;
    //income input---------------------
    const incomeInput = document.getElementById('income-input');
    const incomeInputText = incomeInput.value;
    const incomeInputAmount = parseFloat(incomeInputText);
    
    //rest balance
    const restBalance = document.getElementById('rest-balance');
    const restBalanceText = restBalance.innerText;
    const restBalanceAmount = parseFloat(restBalanceText);
    console.log(restBalanceAmount);

    restBalance.innerText = incomeInputAmount - totalExpenceAmount;

});