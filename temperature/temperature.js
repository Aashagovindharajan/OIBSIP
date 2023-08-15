document.getElementById('convertBtn').addEventListener('click', convertTemperature);

function convertTemperature() {
    const temperatureInput = parseFloat(document.getElementById('temperature').value);
    const unitSelect = document.getElementById('unit');
    const selectedUnit = unitSelect.options[unitSelect.selectedIndex].value;
    let result;

    if (isNaN(temperatureInput)) {
        document.getElementById('result').textContent = 'Please enter a valid number.';
        return;
    }

    switch (selectedUnit) {
        case 'celsius':
            result = {
                celsius: temperatureInput,
                fahrenheit: (temperatureInput * 9/5) + 32,
                kelvin: temperatureInput + 273.15
            };
            break;
        case 'fahrenheit':
            result = {
                celsius: (temperatureInput - 32) * 5/9,
                fahrenheit: temperatureInput,
                kelvin: (temperatureInput - 32) * 5/9 + 273.15
            };
            break;
        case 'kelvin':
            result = {
                celsius: temperatureInput - 273.15,
                fahrenheit: (temperatureInput - 273.15) * 9/5 + 32,
                kelvin: temperatureInput
            };
            break;
    }

    document.getElementById('result').textContent = `
        Celsius: ${result.celsius.toFixed(2)}°C
        Fahrenheit: ${result.fahrenheit.toFixed(2)}°F
        Kelvin: ${result.kelvin.toFixed(2)}K
    `;
}