
const memory = document.getElementById('memory');
const delivery = document.getElementById('delivary');
const memory1 = document.getElementById('unified');
const free = document.getElementById('unified-2');
const storage = document.getElementById('storage')
const express = document.getElementById('storage-2');

const primeDelivery = document.getElementById('prime-delivery');
let memoryField = document.getElementById('extra-memory-cost');
memoryField = document.getElementById('extra-memory-cost');
let chargeField = document.getElementById('extra-storage-charge');
chargeField = document.getElementById('extra-storage-charge');
chargeField = document.getElementById('extra-storage-charge');


let deliveryField = document.getElementById('delivery-charge');
deliveryField = document.getElementById('delivery-charge');

const total = document.getElementById('total')


free.addEventListener('click', function () {
    memoryField.innerText = '180';
    updateTotal();
})
express.addEventListener('click', function () {
    chargeField.innerText = '100';
    updateTotal()
})

memory.addEventListener('click', function () {
    chargeField.innerText = '180';
    updateTotal()
})
delivery.addEventListener('click', function () {
    deliveryField.innerText = '20';
    updateTotal()
})

memory1.addEventListener('click', function () {
    memoryField.innerText = '0';
    updateTotal()
})

storage.addEventListener('click', function () {
    chargeField.innerText = '0';
    updateTotal()
})


primeDelivery.addEventListener('click', function () {
    deliveryField.innerText = '0';
    updateTotal()
})


function updateTotal() {
    const defaultPrice = 1299;
    const memoryF = parseFloat(memoryField.innerText);
    const charge = parseFloat(chargeField.innerText);
    const deliveryF = parseFloat(deliveryField.innerText);
    const grandTotal = (memoryF + charge + deliveryF);
    total.innerText = grandTotal + defaultPrice;

}

document.getElementById('cupon-btn').addEventListener('click', function () {
    const Input = document.getElementById('cupon-id');
    const grand = Input.value;
    const cupon = 'stevekaku';
    const memoryFi = parseFloat(memoryField.innerText);
    const charges = parseFloat(chargeField.innerText);
    const deliveryFi = parseFloat(deliveryField.innerText);

    const grandsT = ((memoryFi + charges + deliveryFi) + 1299);


    const grandsd = ((memoryFi + charges + deliveryFi) + 1299) * 0.20;
    const discount = grandsT - grandsd;
    result.innerText = discount;

    if (cupon == true) {
        return discount;
    }
    else {
        return 'please input the correct value '
    }

})

