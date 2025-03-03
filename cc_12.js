//Task 1: Business Dashboard - DOM Element Selection and Creation
// Select the dashboard container using getElementById
const dashboard = document.getElementById("dashboard"); 

// Use querySelector to select the dashboard container
const dashboardSelector = document.querySelector('#dashboard'); 

// Function to create a metric card with a given id, title, and initial value
function createMetricCard(id, title, initvalue) { 
    // Create a div element to represent the metric card
    let card = document.createElement("div"); 
    
    // Set the class for styling the metric card
    card.setAttribute("class","metric-card"); 
    
    // Assign the card a unique id
    card.setAttribute("id",id); 
    
    // Set the content inside the card (title and value)
    card.innerHTML = `<h3>${title}</h3><p>$${initvalue}</p>`; 
    
    // Append the card to the dashboard container
    dashboard.appendChild(card); 
};

// Create a Revenue card with an initial value of 0
createMetricCard("revenueCard", "Revenue", 0); 

//Task 2: Updating Dashboard Metrics - Working with NodeLists and Arrays
// Create additional cards for Profit and Expenses
createMetricCard("profitCard", "Profit", 0); 
createMetricCard("expensesCard", "Expenses", 0); 

// Select all elements that are metric cards
const metricCardList = document.querySelectorAll(".metric-card"); 

// Convert the NodeList into an array for easier manipulation
const metricCardArray = Array.from(metricCardList); 

// Iterate over the metric cards array and modify their content and style
metricCardArray.forEach(card => { 
    // Append a message to indicate that the card has been updated
    card.innerHTML += "<p><i> - Updated</i></p>"; 
    
    // Change the background color to highlight the updated cards
    card.style.backgroundColor = "lightgreen"; 
});

//Task 3: Dynamic Inventory Management - Adding and Removing Items
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

//Task 4: Business Customer Section - Handling Event Bubbling
// Select all customer card elements
const customerCards = document.querySelectorAll(".customer-card"); 

// Select the parent container for the customer cards
const customerSection = document.getElementById("customerSection"); 

// Add a click event listener for each customer card
customerCards.forEach(card => { 
    // Log the clicked customer name
    card.addEventListener("click", (event) => { 
        console.log(`User clicked ${event.target.textContent}`); 
        
        // Prevent event bubbling to the parent section
        event.stopPropagation(); 
    });    
});

// Add a click listener to the customer section to handle clicks on the parent container
customerSection.addEventListener("click", () => { 
    // Log when the parent section is clicked
    console.log(`User clicked customerSection`); 
});