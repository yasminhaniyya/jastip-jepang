// ============================================================
//  PRODUCTS.JS — Data produk JASTIP JEPANG by hilyasmin
//  Edit file ini setiap kali mau tambah/ubah/hapus produk
// ============================================================

const WHATSAPP_NUMBER = '6282329191645';
const STORE_NAME      = 'JASTIP JEPANG';
const STORE_SUBTITLE  = 'by hilyasmin 🇯🇵';

// ------------------------------------------------------------
//  CARA TAMBAH PRODUK BARU:
//  1. Copy salah satu blok { ... } di bawah
//  2. Paste setelah blok terakhir (sebelum tanda ];)
//  3. Tambahkan koma setelah blok sebelumnya
//  4. Ganti semua datanya
//  5. Simpan file → refresh browser
//
//  KOLOM YANG WAJIB DIISI:
//    id       → angka unik, lanjutkan dari nomor terakhir
//    name     → nama produk
//    category → pilih salah satu: 'Snacks' | 'Make Up' | 'Cloth' | 'Uniqlo' | 'GU'
//    price    → harga dalam rupiah (tanpa titik/koma)
//    dp       → nominal DP dalam rupiah
//    image    → path foto, taruh file foto di folder /foto/
//    status   → 'open' = masih bisa pesan | 'closed' = sudah tutup
//
//  KOLOM OPSIONAL:
//    badge    → label kecil di foto, contoh: 'Best Seller' | 'New' | 'Limited'
//               isi null kalau tidak mau pakai badge
// ------------------------------------------------------------

const products = [

  // ── GU ─────────────────────────────────────────────────
  {
    id: 1,
    name: 'Ghana Ori',
    category: 'Snacks',
    price: 35000,
    dp: 20000,
    image: 'foto/ghana-ori.jpeg',
    status: 'open',
    badge: 'Best Seller'
  },
  {
    id: 2,
    name: 'Ghana Premium',
    category: 'Snacks',
    price: 58000,
    dp: 40000,
    image: 'foto/ghana-premium.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 10,
    name: 'Coklat Kuromi (non halal)',
    category: 'Snacks',
    price: 42000,
    dp: 30000,
    image: 'foto/kuromi-coklat-nonhalal.jpeg',
    status: 'open',
    badge: null
  },
{
    id: 11,
    name: 'Matcha Coklat Keping (non halal)',
    category: 'Snacks',
    price: 55000,
    dp: 40000,
    image: 'foto/matcha-chocolate-keping-nonhalal.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 12,
    name: 'Alfort Mini Chocolate Ori',
    category: 'Snacks',
    price: 48000,
    dp: 30000,
    image: 'foto/alfort-mini-chocolate-ori.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 13,
    name: 'Dars Chocolate Bar',
    category: 'Snacks',
    price: 38000,
    dp: 20000,
    image: 'foto/dars-chocolate-bar.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 14,
    name: 'Dars Chocolate Bar Strawberry',
    category: 'Snacks',
    price: 38000,
    dp: 20000,
    image: 'foto/dars-strawberry.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 15,
    name: 'Macadamia & Almond Original (meiji) ',
    category: 'Snacks',
    price: 58000,
    dp: 40000,
    image: 'foto/macadamia-almond-ori.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 16,
    name: 'Meiji Matcha & Strawberry',
    category: 'Snacks',
    price: 60000,
    dp: 45000,
    image: 'foto/meiji-matcha-strawberry-better.jpeg',
    status: 'open',
    badge: 'Best Seller'
  },
  {
    id: 17,
    name: 'Zero Butter (Sugar free)',
    category: 'Snacks',
    price: 60000,
    dp: 45000,
    image: 'foto/zero-butter.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 18,
    name: 'Lotte Biscuit',
    category: 'Snacks',
    price: 60000,
    dp: 45000,
    image: 'foto/biskuit-lotte.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 19,
    name: 'Almond Meiji Matcha',
    category: 'Snacks',
    price: 38000,
    dp: 20000,
    image: 'foto/almond-meiji-matcha.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 20,
    name: 'Almond Meiji Original',
    category: 'Snacks',
    price: 73000,
    dp: 55000,
    image: 'foto/almond-meiji-ori.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 22,
    name: 'KitKat (nonhalal)',
    category: 'Snacks',
    price: 68000,
    dp: 50000,
    image: 'foto/kitkat.jpeg',
    status: 'open',
    badge: null
  },
   {
    id: 23,
    name: 'Alfort Big Pack',
    category: 'Snacks',
    price: 62000,
    dp: 50000,
    image: 'foto/alfort-big-pack.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 24,
    name: 'Black Thunder Big Pack',
    category: 'Snacks',
    price: 55000,
    dp: 40000,
    image: 'foto/black-thunder-big-pack.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 25,
    name: 'Meltykiss Big Pack',
    category: 'Snacks',
    price: 72000,
    dp: 60000,
    image: 'foto/meltykiss-big-pack.jpeg',
    status: 'open',
    badge: 'Best Seller'
  },
  {
    id: 27,
    name: 'Matcha Uji Double Rich',
    category: 'Snacks',
    price: 117000,
    dp: 100000,
    image: 'foto/matcha-uji-double-rich.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 28,
    name: 'Matcha Uji Rich',
    category: 'Snacks',
    price: 112000,
    dp: 100000,
    image: 'foto/matcha-uji-rich.jpeg',
    status: 'open',
    badge: null
  },
    {
    id: 29,
    name: 'Ghana Matcha',
    category: 'Snacks',
    price: 45000,
    dp: 30000,
    image: 'foto/Ghana-matcha.jpeg',
    status: 'open',
    badge: null
  },
    {
    id: 30,
    name: 'Ghana Ripple',
    category: 'Snacks',
    price: 41000,
    dp: 30000,
    image: 'foto/ghana-ripple.jpeg',
    status: 'open',
    badge: null
  },
    {
    id: 31,
    name: 'Crunky (nonhalal)',
    category: 'Snacks',
    price: 38000,
    dp: 25000,
    image: 'foto/crunky.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 32,
    name: 'Ghana Keping',
    category: 'Snacks',
    price: 60000,
    dp: 45000,
    image: 'foto/ghana-keping.jpeg',
    status: 'open',
    badge: null
  },
    {
    id: 33,
    name: 'Kinoko no Yama',
    category: 'Snacks',
    price:44000,
    dp: 30000,
    image: 'foto/kinoko-no-yama.jpeg',
    status: 'open',
    badge: null
  },
  
  

  // ── UNIQLO ─────────────────────────────────────────────
  {
    id: 3,
    name: 'tiered maxi skirt',
    category: 'Uniqlo',
    price: 520000,
    dp: 515000,
    image: 'foto/tiered-maxi-skirt.jpeg',
    status: 'open',
    badge: 'New'
  },
  {
    id: 4,
    name: 'AIRism Shirt',
    category: 'Uniqlo',
    price: 220000,
    dp: 205000,
    image: 'foto/airism-shirt.jpeg',
    status: 'open',
    badge: null
  },
 {
    id: 34,
    name: 'Uniqlo Bag (SALE price, harga bisa berubah)',
    category: 'Uniqlo',
    price: 305000,
    dp: 290000,
    image: 'foto/bag-sale-price.jpeg',
    status: 'open',
    badge: 'SALE'
  },
   {
    id: 35,
    name: 'Sweater',
    category: 'Uniqlo',
    price: 305000,
    dp: 290000,
    image: 'foto/sweater.jpeg',
    status: 'open',
    badge: null
  },
   {
    id: 36,
    name: 'Inner AIRism',
    category: 'Uniqlo',
    price: 220000,
    dp: 205000,
    image: 'foto/inner-airism.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 37,
    name: 'Polo Uniqlo',
    category: 'Uniqlo',
    price: 420000,
    dp: 405000,
    image: 'foto/polo-uniqlo.jpeg',
    status: 'open',
    badge: null
  },
    {
    id: 38,
    name: 'Jaket UV',
    category: 'Uniqlo',
    price: 420000,
    dp: 405000,
    image: 'foto/jaket-uv.jpeg',
    status: 'open',
    badge: null
  },
    {
    id: 39,
    name: 'AIRism Cotton Pique Polo Shirt',
    category: 'Uniqlo',
    price: 420000,
    dp: 405000,
    image: 'foto/airism-pique.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 40,
    name: 'Jaket Uniqlo (Sale Price, ini harga diskon 50%, bisa berubah jika sudah tidak diskon)',
    category: 'Uniqlo',
    price: 430000,
    dp: 415000,
    image: 'foto/jaket-denim.jpeg',
    status: 'open',
    badge: 'SALE'
  },
    {
    id: 41,
    name: 'Dry Pique',
    category: 'Uniqlo',
    price: 420000,
    dp: 405000,
    image: 'foto/dry-pique.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 42,
    name: 'Jaket Kids UV Protection',
    category: 'Uniqlo',
    price: 305000,
    dp: 290000,
    image: 'foto/uv-kids.jpeg',
    status: 'open',
    badge: null
  },
    {
    id: 43,
    name: 'Jaket Uniqlo Krem (Sale Price, ini harga diskon 50%, bisa berubah jika sudah tidak diskon)',
    category: 'Uniqlo',
    price: 420000,
    dp: 405000,
    image: 'foto/jaket-krem.jpeg',
    status: 'open',
    badge: 'SALE'
  },
   {
    id: 44,
    name: 'AIRism Jacket Woman Series ',
    category: 'Uniqlo',
    price: 305000,
    dp: 290000,
    image: 'foto/airism-woman.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 45,
    name: 'Shirring Sleeve Tshirt',
    category: 'Uniqlo',
    price: 420000,
    dp: 405000,
    image: 'foto/shirring-sleeve.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 46,
    name: 'Mini Tshirt',
    category: 'Uniqlo',
    price: 245000,
    dp: 230000,
    image: 'foto/mini-tshirt.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 47,
    name: 'Tiered Maxi Skirt',
    category: 'Uniqlo',
    price: 520000,
    dp: 505000,
    image: 'foto/tiered-maxi-skirt-2.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 48,
    name: 'Dry Wide Tshirt (SALE Price, harga bisa berubah)',
    category: 'Uniqlo',
    price: 195000,
    dp: 185000,
    image: 'foto/shirring-sleeve.jpeg',
    status: 'open',
    badge: 'SALE'
  },
  {
    id: 49,
    name: 'Ribbed Frill Cardigan',
    category: 'Uniqlo',
    price: 420000,
    dp: 405000,
    image: 'foto/ribbed-frill.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 50,
    name: 'Methal Button Cardigan',
    category: 'Uniqlo',
    price: 360000,
    dp: 345000,
    image: 'foto/methal-button.jpeg',
    status: 'open',
    badge: null
  },
  
  
  
  
  // ── GU ─────────────────────────────────────────────
  {
    id: 69,
    name: 'Mesh Ballet Sneakers Blue, Pink, White',
    category: 'GU',
    price: 420000,
    dp: 410000,
    image: 'foto/mesh-ballet-2.jpeg',
    status: 'open',
    badge: 'Most Wanted'
  },
  {
    id: 66,
    name: 'Strapt Ballet Sneakers Black & Red',
    category: 'GU',
    price: 420000,
    dp: 410000,
    image: 'foto/strapt-ballet.jpeg',
    status: 'open',
    badge: 'Best Seller'
  },
  {
    id: 66,
    name: 'Strapt Ballet Sneakers Khaki',
    category: 'GU',
    price: 420000,
    dp: 410000,
    image: 'foto/strapt-ballet-2.jpeg',
    status: 'open',
    badge: 'Best Seller'
  },
  {
    id: 67,
    name: 'Ballet Sneakers',
    category: 'GU',
   price: 420000,
    dp: 410000,
    image: 'foto/ballet-sneakers.jpeg',
    status: 'open',
    badge: 'Best Seller'
  },
  {
    id: 5,
    name: 'Camisole isi 3',
    category: 'GU',
    price: 190000,
    dp: 175000,
    image: 'foto/camisole-isi3.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 6,
    name: 'Mesh Ballet Sneakers',
    category: 'GU',
    price: 420000,
    dp: 410000,
    image: 'foto/mesh-ballet-sneakers.jpeg',
    status: 'open',
    badge: 'Best Seller'
  },
  {
    id: 51,
    name: 'Ribbed Boat Neck Cardigan',
    category: 'GU',
    price: 305000,
    dp: 300000,
    image: 'foto/ribbed-boat.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 52,
    name: 'Fromt Button Sweater',
    category: 'GU',
    price: 300000,
    dp: 290000,
    image: 'foto/fromt-button.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 53,
    name: 'Pull Sweat Zip Hoodie',
    category: 'GU',
    price: 420000,
    dp: 410000,
    image: 'foto/pull-sweat.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 54,
    name: 'Shear Ribbed Cardigan',
    category: 'GU',
    price: 360000,
    dp: 345000,
    image: 'foto/sheer-ribbed.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 55,
    name: 'Two Toned Denim Skirt (SALE Price, harga bisa berubah)',
    category: 'GU',
    price: 195000,
    dp: 180000,
    image: 'foto/two-toned.jpeg',
    status: 'open',
    badge: 'SALE'
  },
  {
    id: 56,
    name: 'Circular Midi Skirt (SALE Price, harga bisa berubah)',
    category: 'GU',
    price: 240000,
    dp: 230000,
    image: 'foto/circular-midi.jpeg',
    status: 'open',
    badge: 'SALE'
  },
  {
    id: 57,
    name: 'Dropped flared Shirt',
    category: 'GU',
    price: 250000,
    dp:240000,
    image: 'foto/dropped-flared.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 58,
    name: 'Lace frilled Blouse',
    category: 'GU',
    price: 305000,
    dp: 290000,
    image: 'foto/lace-frilled.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 59,
    name: 'Washable Dolman Sleeve Knitted Tshirt',
    category: 'GU',
    price: 305000,
    dp: 295000,
    image: 'foto/washable.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 60,
    name: 'bubble Sleeve Blouse',
    category: 'GU',
    price: 305000,
    dp: 295000,
    image: 'foto/bubble-blouse.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 61,
    name: 'Collarless Vest',
    category: 'GU',
    price: 300000,
    dp: 295000,
    image: 'foto/collarless.jpeg',
    status: 'open',
    badge: null
  },
   {
    id: 62,
    name: 'Puff Sweat',
    category: 'GU',
    price: 305000,
    dp: 295000,
    image: 'foto/puff-sweat.jpeg',
    status: 'open',
    badge: null
  },
   {
    id: 63,
    name: 'Cotton Colour Longe Set Patterned',
    category: 'GU',
    price: 220000,
    dp: 210000,
    image: 'foto/lounge-set.jpeg',
    status: 'open',
    badge: null
  },
   {
    id: 64,
    name: 'Cotton Blend Pajamas Dot',
    category: 'GU',
    price: 360000,
    dp: 345000,
    image: 'foto/cotton-blend-dor.jpeg',
    status: 'open',
    badge: null
  },
   {
    id: 65,
    name: 'Satin Pjamas',
    category: 'GU',
    price: 360000,
    dp: 34500,
    image: 'foto/satin-pajamas.jpeg',
    status: 'open',
    badge: null
  },
   
{
    id: 68,
    name: 'Lace Blouse',
    category: 'GU',
    price: 305000,
    dp: 295000,
    image: 'foto/lace-blouse.jpeg',
    status: 'open',
    badge: null
  },
  
  {
    id: 70,
    name: 'Washable Knitted polo Shirt ',
    category: 'GU',
    price: 305000,
    dp: 295000,
    image: 'foto/washable-polo.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 71,
    name: 'Pocketable UV Protection Parka ',
    category: 'GU',
    price: 525000,
    dp: 510000,
    image: 'foto/pocketable.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 72,
    name: 'Pocketable UV Protection Parka ',
    category: 'GU',
    price: 525000,
    dp: 510000,
    image: 'foto/pocketable.jpeg',
    status: 'open',
    badge: 'Most Wanted'
  },
  {
    id: 73,
    name: 'Pocketable UV Protection Parka Yellow & Blue',
    category: 'GU',
    price: 525000,
    dp: 515000,
    image: 'foto/pocketable-yellow.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 74,
    name: 'Shoulder Bag',
    category: 'GU',
    price: 245000,
    dp: 230000,
    image: 'foto/shoulder-bag.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 75,
    name: 'Loop Yarn Full ZIP Hoodie',
    category: 'GU',
    price: 360000,
    dp: 350000,
    image: 'foto/loop-yarn.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 76,
    name: 'Pepium Camisole',
    category: 'GU',
    price: 245000,
    dp: 230000,
    image: 'foto/pepium.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 77,
    name: 'Cargi Barrel Ankle Pants',
    category: 'GU',
    price: 305000,
    dp: 290000,
    image: 'foto/cargi.jpeg',
    status: 'open',
    badge: null
  },
{
    id: 78,
    name: 'Ballon Pants',
    category: 'GU',
    price: 420000,
    dp: 410000,
    image: 'foto/ballon-pants.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 79,
    name: 'Shorts',
    category: 'GU',
    price: 145000,
    dp: 130000,
    image: 'foto/shrts.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 80,
    name: 'Tunik',
    category: 'GU',
    price: 420000,
    dp: 410000,
    image: 'foto/tunik.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 81,
    name: 'Balloon Sleeve Tunik',
    category: 'GU',
    price: 420000,
    dp: 410000,
    image: 'foto/ballon-tunik.jpeg',
    status: 'open',
    badge: null
  },
  // ── Things ────────────────────────────────────────────
  {
    id: 7,
    name: 'Sumpit',
    category: 'Things',
    price: 25000,
    dp: 15000,
    image: 'foto/sumpit.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 8,
    name: 'Mini Bag',
    category: 'Things',
    price: 45000,
    dp: 30000,
    image: 'foto/bag-mini.jpeg',
    status: 'open',
    badge: null
  },
{
    id: 82,
    name: 'Sandal',
    category: 'Things',
    price: 55000,
    dp: 40000,
    image: 'foto/sandal.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 83,
    name: 'Box Serbaguna',
    category: 'Things',
    price: 45000,
    dp: 30000,
    image: 'foto/box-serbaguna.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 84,
    name: 'Pillow cover Disney Collab',
    category: 'Things',
    price: 55000,
    dp: 40000,
    image: 'foto/pillow-cover.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 85,
    name: 'Keyring & Bag Charm',
    category: 'Things',
    price: 25000,
    dp: 15000,
    image: 'foto/keyring.jpeg',
    status: 'open',
    badge: 'Best Seller'
  },
  {
    id: 86,
    name: 'Pouch Mini',
    category: 'Things',
    price: 45000,
    dp: 30000,
    image: 'foto/mini-pouch.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 87,
    name: 'Lunch Bag',
    category: 'Things',
    price: 55000,
    dp: 40000,
    image: 'foto/lunch.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 87,
    name: 'Hair Clip',
    category: 'Things',
    price: 25000,
    dp: 15000,
    image: 'foto/hairclip.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 88,
    name: 'Aksesoris Rambut',
    category: 'Things',
    price: 25000,
    dp: 15000,
    image: 'foto/aksesoris-hair.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 89,
    name: 'kaus Kaki',
    category: 'Things',
    price: 25000,
    dp: 15000,
    image: 'foto/kauskaki.jpeg',
    status: 'open',
    badge: null
  },
   {
    id: 90,
    name: 'Oshikatsu Acrylic Key Chain, Key Clip, Magnet Ring',
    category: 'Things',
    price: 25000,
    dp: 15000,
    image: 'foto/oshikatsu.jpeg',
    status: 'open',
    badge: null
  },
   {
    id: 91,
    name: 'Eye Mask (for sleep)',
    category: 'Things',
    price: 25000,
    dp: 15000,
    image: 'foto/eye.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 92,
    name: 'Stamp',
    category: 'Things',
    price: 25000,
    dp: 15000,
    image: 'foto/stamp.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 93,
    name: 'Kipas Tangan',
    category: 'Things',
    price: 25000,
    dp: 15000,
    image: 'foto/kipas.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 94,
    name: 'Pet Clothing',
    category: 'Things',
    price: 55000,
    dp: 45000,
    image: 'foto/pet-clothing.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 95,
    name: 'Topi',
    category: 'Things',
    price: 55000,
    dp: 45000,
    image: 'foto/topi.jpeg',
    status: 'open',
    badge: null
  },
  
  
  
  
];
