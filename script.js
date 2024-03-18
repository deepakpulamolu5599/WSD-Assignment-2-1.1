document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('countBtn').addEventListener('click', function () {
        const inputString = document.getElementById("stringInput").value;
        let vowels = "aeiou";
        let vowelCount = 0;
        let consonantCount = 0;

        for (let i = 0; i < inputString.length; i++) {
            if (vowels.includes(inputString[i].toLowerCase())) {
                vowelCount++;
            } else if (inputString[i].match(/[b-df-hj-np-tv-z]/i)) {
                consonantCount++;
            }
        }

        document.getElementById("result").innerHTML = `Vowels: ${vowelCount}, Consonants: ${consonantCount}`;
    });

    document.getElementById('checkPalindromeBtn').addEventListener('click', function () {
        let num1 = document.getElementById("numberInput").value;
        let num2 = 0;
        let num3 = num1

        while (num1 > 0) {
            const x = num1 % 10;
            num2 = num2 * 10 + x;
            num1 = Math.floor(num1 / 10);
        }

        if (num3 == num2) {
            document.getElementById("palindromeResult").innerHTML = "Given number is a palindrome";
        } else {
            document.getElementById("palindromeResult").innerHTML = "Given number is not a palindrome";
        }
    });

    document.getElementById('calculateTotalBtn').addEventListener('click', function () {
        const subtotal = parseFloat(document.getElementById('subtotalInput').value);
        let tipPercentage = parseFloat(document.getElementById('tipInput').value);

        if (subtotal) {
            tipPercentage = tipPercentage ? tipPercentage : 0;
            const tipAmount = (subtotal * tipPercentage) / 100;
            const totalAmount = subtotal + tipAmount;

            document.getElementById('totalResult').textContent = `Total Amount (including ${tipPercentage}% tip): $${totalAmount.toFixed(2)}`;
        } else {
            document.getElementById('totalResult').textContent = `Please Enter valid subtotal amount!`;
        }
    });
});
