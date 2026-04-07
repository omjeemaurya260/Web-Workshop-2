 function reverseNumber() {
        const numberInput = document.getElementById('numberInput').value;
        let reversedNumber = '';
        for (let i = numberInput.length - 1; i >= 0; i--) {
            reversedNumber += numberInput[i];
        }
        document.getElementById('result').innerText = `Reversed Number: ${reversedNumber}`;
    }