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