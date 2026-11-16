// DATA PRODUK BUKET
const produk = [
    {
        nama: "Flower Bouquet",
        gambar: "WhatsApp Image 2026-11-16 at 19.26.55.jpeg",
        deskripsi: "Buket bunga cantik untuk orang tersayang."
    },
    {
        nama: "pricelist dnana bucket",
        gambar: "WhatsApp Image 2026-11-16 at 19.46.16.jpeg",
        deskripsi: "ingin mengetahui harga bucket? hubungi kami untuk informasi harga dan pemesanan."
    },
    {
        nama: "Custom Bouquet",
        gambar: "WhatsApp Image 2026-11-16 at 19.26.24.jpeg",
        deskripsi: "Buket yang cantik dan sesuai keinginanmu."
    }
];

// MENAMPILKAN PRODUK
const container = document.getElementById("produkContainer");

produk.forEach(item => {
    container.innerHTML += `
        <div class="card">
            <img src="${item.gambar}" alt="${item.nama}">
            <h3>${item.nama}</h3>
            <p>${item.deskripsi}</p>
        </div>
    `;
});

// MENU RESPONSIVE
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", function() {
    menu.classList.toggle("active");

    menuBtn.textContent =
        menu.classList.contains("active") ? "×" : "☰";
});

// TAHUN OTOMATIS
console.log("Selamat datang di dnana bucket, kasih kado terindah untuk kesayanganmu melalui dnana bucket!");
