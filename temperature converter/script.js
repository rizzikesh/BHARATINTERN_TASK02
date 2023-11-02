function convertTemperature() {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitOutput = document.getElementById("fahrenheit");
    const kelvinOutput = document.getElementById("kelvin");

    const celsius = parseFloat(celsiusInput.value);
    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9/5) + 32;
        const kelvin = celsius + 273.15;

        fahrenheitOutput.innerText = fahrenheit.toFixed(2);
        kelvinOutput.innerText = kelvin.toFixed(2);
    } else {
        alert("Please enter a valid temperature in Celsius.");
    }
}
