// DATA PRODUK BUKET
const produk = [
    {
        nama: "Flower Bouquet",
        gambar: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600",
        deskripsi: "Buket bunga cantik untuk orang tersayang."
    },
    {
        nama: "Sweet Bouquet",
        gambar: "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?w=600",
        deskripsi: "Buket unik untuk hadiah spesial."
    },
    {
        nama: "Custom Bouquet",
        gambar: "https://images.unsplash.com/photo-1520763185298-1b434c919102?w=600",
        deskripsi: "Buket sesuai warna dan keinginanmu."
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
console.log("Selamat datang di Dnana Bucket!");
