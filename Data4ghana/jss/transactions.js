let transactions = [];

function displayTransactions(){

let table = document.getElementById("transactionsTable");

table.innerHTML = "";

if(transactions.length === 0){

table.innerHTML = `
<tr class="empty">
<td colspan="8">No transactions found</td>
</tr>
`;

return;
}

transactions.forEach(tx => {

let row = document.createElement("tr");

row.innerHTML = `
<td>${tx.type}</td>
<td>${tx.amount}</td>
<td>${tx.before}</td>
<td>${tx.after}</td>
<td>${tx.status}</td>
<td>${tx.reference}</td>
<td>${tx.date}</td>
<td><button>View</button></td>
`;

table.appendChild(row);

});

}

function saveTransaction(amount){

let tx = {

type: "AFA Registration",
amount: amount,
date: new Date().toLocaleString()

};

console.log("Transaction saved", tx);

}

displayTransactions();