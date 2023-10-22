function hitungTotal() {
    const harga = parseFloat(document.getElementById("harga").value);
    const jumlahTiket = parseInt(document.getElementById("jumlahTiket").value);
    const isMember = document.getElementById("member").checked;
    const diskon = parseFloat(document.getElementById("diskon").value);

    let total = harga * jumlahTiket;

    if (isMember) {
        total *= 0.9; // Member discount 10%
    }

    if (diskon) {
        total *= (100 - diskon) / 100;
    }

    document.getElementById("totalBayar").value = total.toFixed(2);
}