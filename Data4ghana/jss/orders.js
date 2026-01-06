let orders = [];

function displayOrders(){

let table = document.getElementById("ordersTable");

table.innerHTML = "";

if(orders.length === 0){

table.innerHTML = `
<tr class="empty">
<td colspan="8">No orders found</td>
</tr>
`;

return;
}

orders.forEach(order=>{

let row = document.createElement("tr");

row.innerHTML = `
<td>${order.id}</td>
<td>${order.status}</td>
<td>${order.phone}</td>
<td>${order.volume}</td>
<td>${order.price}</td>
<td>${order.product}</td>
<td>${order.date}</td>
<td><button>View</button></td>
`;

table.appendChild(row);

});

}

displayOrders();
