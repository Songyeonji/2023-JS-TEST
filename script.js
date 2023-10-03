document.addEventListener('DOMContentLoaded', function() {
    const calculateButton = document.getElementById('calculateButton');
    calculateButton.addEventListener('click', calculateChange);
});

function calculateChange() {
    const itemPrice = parseFloat(document.getElementById('itemPrice').value);
    const amountPaid = parseFloat(document.getElementById('amountPaid').value);

    if (isNaN(itemPrice) || isNaN(amountPaid)) {
        alert("올바른 숫자를 입력하세요.");
        return;
    }

    if (itemPrice > amountPaid) {
        alert("지불한 금액이 부족합니다.");
        return;
    }

    const change = amountPaid - itemPrice;

    const denominations = [10000, 5000, 1000, 500, 100, 50, 10, 1];
    const changeResult = {};

    denominations.forEach(denomination => {
        const count = Math.floor(change / denomination);
        if (count > 0) {
            changeResult[denomination] = count;
            change -= denomination * count;
        }
    });

    displayChangeResult(changeResult);
}

function displayChangeResult(changeResult) {
    const changeResultElement = document.getElementById('changeResult');
    changeResultElement.innerHTML = "거스름돈:<br>";

    for (const denomination in changeResult) {
        const count = changeResult[denomination];
        if (count > 0) {
            changeResultElement.innerHTML += `${denomination}원: ${count}개<br>`;
        }
    }
}
