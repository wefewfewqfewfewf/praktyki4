const hour = new Date().getHours(); 
let greeting;

if (hour < 18) {
  greeting = "Dzień dobry Dawid";
} else {
  greeting = "Dobry wieczór Dawid";
}

document.getElementById("hej").innerHTML = greeting;



let balance = 0;

function showInputSection() {
    document.getElementById('inputSection').style.display = 'block';
}

function addNumber() {
    const input = parseInt(document.getElementById('inputNumber').value);
    if (!isNaN(input)) {
        balance += input;
        updateBalance();
        
        resetInput();
    }
}

function subtractNumber() {
    const input = parseInt(document.getElementById('inputNumber').value);
    if (!isNaN(input)) {
        if (input > balance) {
            alert("Brak wystarczających środków");
        } else {
            balance -= input;
            updateBalance();
    
        }
        resetInput();
    }
}

function updateBalance() {
    document.getElementById('balance').innerText = balance;
}

function resetInput() {
    document.getElementById('inputNumber').value = '';
    document.getElementById('inputSection').style.display = 'none';
}

updateBalance()

updateBalance();
function generateRandomNumbers() {
    let numbers = '';
    for (let i = 0; i < 6; i++) {
        numbers += Math.floor(Math.random() * 10); 
    }
    document.getElementById('randomNumbers').innerText = numbers;
}

generateRandomNumbers();


  