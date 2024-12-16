console.log('expense connected');

const insetButton=document.getElementById('expense-insert-btn');
const expenseField=document.getElementById('expense-field');
const amountField=document.getElementById('amount-field');
// console.log(insetButton, expenseField, amountField);
const rowContainer=document.getElementById('row-container');
const expenseSpan=document.getElementById('expense-amount')

insetButton.addEventListener('click', function(){
    const expense=expenseField.value;
    const amount=Number(amountField.value); //Number(string k number kore same parseInt abong parseFloat er moto)
    
    // js  দিয়ে এইচটিএমএল এর রো ক্রিয়েট করবো।
    const row=`
    <div class="flex justify-between" data-amount='${amount}'>
            <p>${expense}</p>
            <p>${amount}</p>
        </div>
    `

        // function js end
    let expenseAmount=Number(expenseSpan.innerText);
    expenseAmount +=amount;
    expenseSpan.innerText=expenseAmount;
    
       rowContainer.innerHTML +=row;

        // bactric chara o js diye create element kore row add kora jabe
// function js add
    // const rowUsingJs=document.createElement('div');
    // const expenseP=document.createElement('p');
    // const amountP=document.createElement('p');
    // expenseP.append(expense);
    // amountP.append(amount);
    
    // rowUsingJs.classList.add('flex', 'justify-between');
    // rowUsingJs.setAttribute('data-amount', amount);
    // rowUsingJs.append(expenseP);
    // rowUsingJs.append(amountP);
    // rowContainer.appendChild(rowUsingJs)
    
    console.log(expense, amount)
})