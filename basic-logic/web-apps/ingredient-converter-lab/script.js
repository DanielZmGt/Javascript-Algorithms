document.addEventListener('DOMContentLoaded', () => {
    // Basic conversion rates relative to a base unit (e.g., ml for volume, g for weight)
    const volumeRates = {
        ml: 1,
        l: 1000,
        tsp: 4.92892,
        tbsp: 14.7868,
        cup: 236.588,
    };

    const weightRates = {
        g: 1,
        oz: 28.3495,
        lb: 453.592
    };

    // Curried core conversion logic
    // makeConverter(rates) -> (fromUnit) -> (toUnit) -> (amount)
    const makeConverter = (categoryRates) => 
        (fromUnit) => 
        (toUnit) => 
        (amount) => {
            if (!categoryRates[fromUnit] || !categoryRates[toUnit]) {
                throw new Error('Invalid units for this category');
            }
            // Convert to base unit, then to target unit
            const baseAmount = amount * categoryRates[fromUnit];
            return baseAmount / categoryRates[toUnit];
        };

    const volumeConverter = makeConverter(volumeRates);
    const weightConverter = makeConverter(weightRates);

    const convertBtn = document.getElementById('convertBtn');
    const amountInput = document.getElementById('amount');
    const fromUnitSelect = document.getElementById('fromUnit');
    const toUnitSelect = document.getElementById('toUnit');
    const ingredientInput = document.getElementById('ingredient');
    const resultDiv = document.getElementById('result');

    convertBtn.addEventListener('click', () => {
        const amount = parseFloat(amountInput.value);
        const fromUnit = fromUnitSelect.value;
        const toUnit = toUnitSelect.value;
        const ingredient = ingredientInput.value.trim();

        if (isNaN(amount) || amount < 0) {
            resultDiv.innerHTML = '<span style="color: var(--hostile-orange);">> ERROR: Invalid numeric input amount.</span>';
            return;
        }

        const isVolume = (unit) => unit in volumeRates;
        const isWeight = (unit) => unit in weightRates;

        try {
            let convertedAmount;
            
            // Validate conversion category and apply the curried functions
            if (isVolume(fromUnit) && isVolume(toUnit)) {
                const convertVolume = volumeConverter(fromUnit)(toUnit);
                convertedAmount = convertVolume(amount);
            } else if (isWeight(fromUnit) && isWeight(toUnit)) {
                const convertWeight = weightConverter(fromUnit)(toUnit);
                convertedAmount = convertWeight(amount);
            } else {
                resultDiv.innerHTML = '<span style="color: var(--hostile-orange);">> ERROR: System requires ingredient density mapping to translate between Volume and Mass.</span>';
                return;
            }

            const formattedResult = convertedAmount.toFixed(2).replace(/\.00$/, '');
            const ingrText = ingredient ? ` of ${ingredient}` : '';
            
            resultDiv.innerHTML = `> CALC: ${amount} ${fromUnit}${ingrText} = <strong>${formattedResult} ${toUnit}</strong>`;
        } catch (e) {
            resultDiv.innerHTML = `<span style="color: var(--hostile-orange);">> CRITICAL ERROR: ${e.message}</span>`;
        }
    });
});
