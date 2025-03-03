// Task 1: Business Dashboard – DOM Element Selection and Creation
document.addEventListener('DOMContentLoaded', () => {
    // Select the dashboard container using both methods
    const dashboard = document.getElementById('dashboard');
    const dashboard2 = document.querySelector('#dashboard');

    // Create metric cards for "Revenue", "Profit", and "Expenses"
    const metrics = [
        { id: 'revenueCard', title: 'Revenue', value: '$0' },
        { id: 'profitCard', title: 'Profit', value: '$0' },
        { id: 'expensesCard', title: 'Expenses', value: '$0' }
    ];

    metrics.forEach(metric => {
        const card = document.createElement('div');
        card.setAttribute('class', 'metric-card');
        card.setAttribute('id', metric.id);

        // Populate the card with title and value
        card.innerHTML = `<h3>${metric.title}</h3><p>${metric.value}</p>`;

        // Append the new metric card to the dashboard container
        dashboard.appendChild(card);
    });
});


// Task 2: Updating Dashboard Metrics – Working with NodeLists and Arrays
document.addEventListener('DOMContentLoaded', () => {
// Select all elements with the class "metric-card"
const metricCards = document.querySelectorAll('.metric-card');
    // Convert the NodeList to an array and update the text of each card
Array.from(metricCards).forEach((card) => {
card.innerHTML += ' - Updated'; // Append " - Updated" to the text
card.style.backgroundColor = '#d3d3d3'; // Change the background color
    });
    });


// Task 3: Dynamic Inventory Management – Adding and Removing Items
document.addEventListener('DOMContentLoaded', () => {
    // Function to add a new product item
    function addInventoryItem(product) {
    const inventoryList = document.getElementById('inventoryList');
    const newProduct = document.createElement('li');
    newProduct.setAttribute('class', 'product-item');
    newProduct.textContent = product;
   
    // Add an event listener to remove the item when clicked
    newProduct.addEventListener('click', () => {
    inventoryList.removeChild(newProduct);
    });
   
   // Append the new product item to the inventory list
   inventoryList.appendChild(newProduct);
    }
   
   // Attach click event listeners to the buttons to add products
   document.querySelector('button[onclick="addInventoryItem(\'Laptop\')"]').addEventListener('click', () => addInventoryItem('Laptop'));
   document.querySelector('button[onclick="addInventoryItem(\'Smartphone\')"]').addEventListener('click', () => addInventoryItem('Smartphone'));
   });


// Task 4: Business Customer Section – Handling Event Bubbling
document.addEventListener('DOMContentLoaded', () => {
    // Create the customer section with nested customer cards
    const customerSection = document.getElementById('customerSection');
    for (let i = 1; i <= 3; i++) {
    const customerCard = document.createElement('div');
    customerCard.setAttribute('class', 'customer-card');
    customerCard.textContent = `Customer ${i}`;
     
    // Add click event listener to the customer card
    customerCard.addEventListener('click', (event) => {
    console.log('Customer card clicked');
    event.stopPropagation(); // Stop event bubbling
    });
    
    // Append the customer card to the customer section
    customerSection.appendChild(customerCard);
    }

    // Add a click event listener to the customer section to demonstrate bubbling
    customerSection.addEventListener('click', () => {
    console.log('Customer section clicked');
    });
    });