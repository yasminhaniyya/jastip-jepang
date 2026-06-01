# 📖 Tutorial: Cara Tambah Foto & Produk
## JASTIP JEPANG by hilyasmin

---

## Struktur Folder

Pastikan folder kamu terlihat seperti ini:

```
jastip-jepang/
├── index.html        ← jangan diubah
├── style.css         ← jangan diubah
├── products.js       ← FILE INI yang kamu edit
└── foto/             ← semua foto produk taruh di sini
    ├── gu-denim-skirt.jpg
    ├── tokyo-banana.jpg
    └── ... (foto lainnya)
```

---

## Cara Tambah Foto Produk

### Langkah 1 — Siapkan foto
- Format yang didukung: **JPG, JPEG, PNG, WEBP**
- Ukuran ideal: **800×800 px** (persegi/square)
- Ukuran file: usahakan di bawah 500KB agar loading cepat
- Kalau foto dari HP belum square, crop dulu pakai aplikasi foto

### Langkah 2 — Beri nama file yang mudah
Nama file **tidak boleh pakai spasi**. Gunakan tanda hubung (-).

✅ Benar: `gu-denim-skirt.jpg`
❌ Salah: `GU Denim Skirt.jpg`
❌ Salah: `foto produk 1.jpg`

Contoh nama yang bagus:
- `uniqlo-knitwear-cream.jpg`
- `canmake-blush-06.jpg`
- `tokyo-banana-original.jpg`

### Langkah 3 — Pindahkan ke folder /foto/
Seret (drag) file foto ke dalam folder `foto/` yang ada di dalam folder `jastip-jepang`.

---

## Cara Tambah Produk Baru

Buka file `products.js` dengan VS Code atau Notepad.

### Contoh satu produk:
```javascript
{
  id: 10,
  name: 'Nama Produk di Sini',
  category: 'GU',
  price: 299000,
  dp: 150000,
  image: 'foto/nama-file-foto.jpg',
  status: 'open',
  badge: null
},
```

### Penjelasan setiap kolom:

| Kolom | Penjelasan | Contoh |
|-------|-----------|--------|
| `id` | Nomor unik, lanjutkan dari nomor terakhir | `10` |
| `name` | Nama produk yang tampil di web | `'GU Ribbed Cardigan'` |
| `category` | Kategori produk | lihat pilihan di bawah |
| `price` | Harga full dalam rupiah, tanpa titik | `299000` |
| `dp` | Nominal DP dalam rupiah | `150000` |
| `image` | Path foto di folder /foto/ | `'foto/gu-cardigan.jpg'` |
| `status` | Status PO sekarang | `'open'` atau `'closed'` |
| `badge` | Label kecil di pojok foto | lihat pilihan di bawah |

### Pilihan category:
```
'Snacks'
'Make Up'
'Cloth'
'Uniqlo'
'GU'
```

### Pilihan badge:
```javascript
badge: 'Best Seller'   // latar kuning
badge: 'New'           // latar biru
badge: 'Limited'       // latar pink
badge: null            // tidak pakai badge
```

---

## Cara Tambah Produk Step-by-Step

1. Buka `products.js`
2. Scroll ke paling bawah, cari tanda `];`
3. Sebelum `];`, tambahkan koma setelah produk terakhir
4. Paste blok produk baru:

```javascript
  // Contoh: produk terakhir sebelumnya
  {
    id: 9,
    name: 'Zara Linen Tote',
    ...
  },          ← ← ← pastikan ada koma di sini
              
  // Produk baru kamu:
  {
    id: 10,
    name: 'GU Ribbed Cardigan',
    category: 'GU',
    price: 329000,
    dp: 165000,
    image: 'foto/gu-ribbed-cardigan.jpg',
    status: 'open',
    badge: 'New'
  }            ← ← ← produk TERAKHIR tidak perlu koma

];
```

5. Simpan file (Ctrl+S)
6. Refresh browser → produk langsung muncul! ✨

---

## Cara Ubah Status Open/Closed

Cukup ganti nilai `status` di produk yang dimaksud:

```javascript
status: 'open'    // ← produk bisa dipesan
status: 'closed'  // ← tombol WA hilang, muncul "Stok habis"
```

---

## Cara Hapus Produk

Hapus seluruh blok `{ ... },` dari produk yang mau dihapus.
Pastikan tidak ada koma gantung di produk sebelumnya.

---

## Upload ke GitHub Pages

1. Buka [github.com](https://github.com) → login
2. Klik tombol **+** → **New repository**
3. Nama repo: `jastip` → klik **Create repository**
4. Klik **uploading an existing file**
5. Drag seluruh isi folder `jastip-jepang/` ke halaman itu
   (termasuk folder `foto/` beserta isinya)
6. Klik **Commit changes**
7. Pergi ke **Settings** → **Pages**
8. Di bagian Source, pilih branch **main** → klik **Save**
9. Tunggu 1–2 menit → website live di:
   `https://usernamekamu.github.io/jastip`

---

## Tips Tambahan

- **Foto belum ada?** Tenang, web akan otomatis tampilkan ikon 🛍️ sebagai placeholder
- **Tambah kategori baru?** Cukup tulis nama kategori baru di kolom `category`, tombol kategorinya akan muncul otomatis
- **Ubah nomor WA?** Ganti di baris paling atas `products.js`: `const WHATSAPP_NUMBER = '...'`
- **Pesan WA otomatis** sudah menyertakan nama produk, harga, dan nominal DP

---

*Semoga lancar jualan kak hilyasmin! 🇯🇵✨*
