const addBtn = document.getElementById("addBtn");
const expenseList = document.getElementById("expenseList");
const totalDisplay = document.getElementById("total");

let total = 0;

addBtn.addEventListener("click", () => {

    const name = document.getElementById("expenseName").value;
    const amount = Number(document.getElementById("expenseAmount").value);

    if(name === "" || amount <= 0){
        alert("Enter valid data");
        return;
    }

    total += amount;
    totalDisplay.textContent = total;

    const li = document.createElement("li");

    li.innerHTML = `
        <span>${name} - ₹${amount}</span>
        <button class="delete">Delete</button>
    `;

    li.querySelector(".delete").addEventListener("click", () => {
        total -= amount;
        totalDisplay.textContent = total;
        li.remove();
    });

    expenseList.appendChild(li);

    document.getElementById("expenseName").value = "";
    document.getElementById("expenseAmount").value = "";
});