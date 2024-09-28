// Initialize balance
let zcoinBalance = 10; // Starting with 10 Zcoins

// Update button text with the current balance
document.getElementById('tapButton').innerText = `${zcoinBalance.toFixed(2)} Zcoins`;

// Add an event listener to the button
document.getElementById('tapButton').addEventListener('click', function() {
    zcoinBalance += 1; // Increment Zcoin balance by 1 each tap
    document.getElementById('tapButton').innerText = `${zcoinBalance.toFixed(2)} Zcoins`; // Update button text
    alert('Mining Zcoins!'); // Display a message (optional)
});

// Boost button function (for future steps)
document.getElementById('boostBtn').addEventListener('click', function() {
    alert('Boost activated!');
});
