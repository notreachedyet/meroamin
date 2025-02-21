document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.faq-toggle').forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;

            // Close all other open content
            document.querySelectorAll('.faq-content').forEach(item => {
                if (item !== content) {
                    item.classList.remove('show');
                }
            });

            // Toggle the clicked content
            content.classList.toggle('show');
        });
    });

    // Conversion logic with updated relationships
    const conversionRates = {
        'Square Feet': { 'Square Feet': 1, 'Square Meter': 0.092903, 'Bigaha': 0.000020, 'Kattha': 0.000547, 'Dhur': 0.005479, 'Ropani': 0.000188, 'Aana': 0.000025, 'Paisa': 0.0001, 'Daam': 0.000046, 'sq. ft': 1 },
        'Square Meter': { 'Square Feet': 10.7639, 'Square Meter': 1, 'Bigaha': 0.000148, 'Kattha': 0.00296, 'Dhur': 0.0594, 'Ropani': 0.001976, 'Aana': 0.0325, 'Paisa': 0.130, 'Daam': 0.25, 'sq. m': 1 },
        'Bigaha': { 'Square Feet': 72000, 'Square Meter': 6772.6, 'Bigaha': 1, 'Kattha': 20, 'Dhur': 400, 'Ropani': 16, 'Aana': 256, 'Paisa': 1024, 'Daam': 4096 },
        'Kattha': { 'Square Feet': 3645, 'Square Meter': 338.6, 'Bigaha': 0.05, 'Kattha': 1, 'Dhur': 20, 'Ropani': 0.8, 'Aana': 16, 'Paisa': 64, 'Daam': 256 },
        'Dhur': { 'Square Feet': 182.25, 'Square Meter': 16.9, 'Bigaha': 0.0025, 'Kattha': 0.05, 'Dhur': 1, 'Ropani': 0.04, 'Aana': 0.8, 'Paisa': 3.2, 'Daam': 12.8 },
        'Ropani': { 'Square Feet': 5476, 'Square Meter': 508.7, 'Bigaha': 0.0625, 'Kattha': 1.25, 'Dhur': 25, 'Ropani': 1, 'Aana': 16, 'Paisa': 64, 'Daam': 256 },
        'Aana': { 'Square Feet': 342.3, 'Square Meter': 31.08, 'Bigaha': 0.00390625, 'Kattha': 0.0625, 'Dhur': 1.25, 'Ropani': 0.0625, 'Aana': 1, 'Paisa': 4, 'Daam': 16 },
        'Paisa': { 'Square Feet': 21.4, 'Square Meter': 7.95, 'Bigaha': 0.00025, 'Kattha': 0.004, 'Dhur': 0.08, 'Ropani': 0.003125, 'Aana': 0.25, 'Paisa': 1, 'Daam': 4 },
        'Daam': { 'Square Feet': 21.39, 'Square Meter': 2, 'Bigaha': 0.000244, 'Kattha': 0.004, 'Dhur': 0.08, 'Ropani': 0.003125, 'Aana': 0.25, 'Paisa': 1, 'Daam': 1 }
    };

    // Add event listeners for Quick Conversion Tags
    document.querySelectorAll('.conversion-tag').forEach(button => {
        button.addEventListener('click', () => {
            const fromUnit = button.getAttribute('data-from');
            const toUnit = button.getAttribute('data-to');

            // Set the selected values in the dropdowns
            document.getElementById('convertFrom').value = fromUnit;
            document.getElementById('convertTo').value = toUnit;
        });
    });

    document.getElementById('convertButton').addEventListener('click', () => {
        const fromUnit = document.getElementById('convertFrom').value;
        const toUnit = document.getElementById('convertTo').value;
        const inputValue = parseFloat(document.getElementById('inputValue').value);
        
        if (!isNaN(inputValue)) {
            const convertedValue = inputValue * conversionRates[fromUnit][toUnit];
            document.getElementById('resultText').innerText = `${inputValue} ${fromUnit} = ${convertedValue.toFixed(2)} ${toUnit}`;
        } else {
            document.getElementById('resultText').innerText = 'Please enter a valid number.';
        }
    });
});

// Add this function to handle the Tools menu toggle
function toggleToolsMenu() {
    const menu = document.getElementById('toolsMenu');
    menu.classList.toggle('hidden');

    // Close menu when clicking outside
    document.addEventListener('click', function closeMenu(e) {
        if (!e.target.closest('.relative.inline-block')) {
            menu.classList.add('hidden');
            document.removeEventListener('click', closeMenu);
        }
    });
}
