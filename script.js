let euroToYenRate = 157.50; // Inserisci il tasso di cambio attuale Euro -> Yen
let yenToEuroRate = 0.00635; // Inserisci il tasso di cambio attuale Yen -> Euro

function convertCurrency() {
    let euroValue = document.getElementById('euro').value;
    let yenValue = document.getElementById('yen').value;
    let message = document.getElementById('message');

    if (euroValue !== '' && yenValue === '') {
        let yenResult = (euroValue * euroToYenRate).toFixed(2);
        document.getElementById('yen').value = yenResult;
        message.textContent = `${euroValue} Euro corrispondono a ${yenResult} Yen.`;
    } else if (yenValue !== '' && euroValue === '') {
        let euroResult = (yenValue * yenToEuroRate).toFixed(2);
        document.getElementById('euro').value = euroResult;
        message.textContent = `${yenValue} Yen corrispondono a ${euroResult} Euro.`;
    } else {
        message.textContent = "Inserisci un valore in una delle due valute.";
    }
}
