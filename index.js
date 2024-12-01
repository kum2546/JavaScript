function calculateElectricity() {
    const units = parseFloat(document.getElementById('units').value);
    const rate = parseFloat(document.getElementById('rate').value);

    if (isNaN(units) || isNaN(rate)) {
        document.getElementById('result').innerText = 'กรุณากรอกข้อมูลให้ถูกต้อง';
        return;
    }

    const totalCost = units * rate;

    document.getElementById('result').innerText = `ค่าไฟฟ้าทั้งหมด: ${totalCost.toFixed(2)} บาท`;
}
