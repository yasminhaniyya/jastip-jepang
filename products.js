
const WHATSAPP_NUMBER = '6282329191645';
const STORE_NAME      = 'JASTIP JEPANG';
const STORE_SUBTITLE  = 'by hilyasmin 🇯🇵';


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
    price: 40000,
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
    id: 141,
    name: 'The Stem Cell Mask',
    category: 'Skincare Diskon Opening Toko (Max Order 11 June)',
    price: 115000,
    dp: 100000,
    image: 'foto/thestem-115.jpeg',
    status: 'closed',
    badge: null
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
    price: 68000,
    dp: 50000,
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
    name: 'Tsujiri Matcha Uji Double Rich 150g',
    category: 'Snacks',
    price: 117000,
    dp: 100000,
    image: 'foto/matcha-uji-double-rich.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 28,
    name: 'Tsujiri Matcha Uji Rich 170g',
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
    status: 'closed',
    badge: 'New'
  },
  {
    id: 4,
    name: 'AIRism Shirt',
    category: 'Uniqlo',
    price: 220000,
    dp: 205000,
    image: 'foto/airism-shirt.jpeg',
    status: 'closed',
    badge: null
  },
 {
    id: 34,
    name: 'Uniqlo Bag (SALE price, harga bisa berubah)',
    category: 'Uniqlo',
    price: 305000,
    dp: 290000,
    image: 'foto/bag-sale-price.jpeg',
    status: 'closed',
    badge: 'SALE'
  },
   {
    id: 35,
    name: 'Sweater',
    category: 'Uniqlo',
    price: 305000,
    dp: 290000,
    image: 'foto/sweater.jpeg',
    status: 'closed',
    badge: null
  },
   {
    id: 36,
    name: 'Inner AIRism',
    category: 'Uniqlo',
    price: 220000,
    dp: 205000,
    image: 'foto/inner-airism.jpeg',
    status: 'closed',
    badge: null
  },
  {
    id: 37,
    name: 'Polo Uniqlo',
    category: 'Uniqlo',
    price: 420000,
    dp: 405000,
    image: 'foto/polo-uniqlo.jpeg',
    status: 'closed',
    badge: null
  },
    {
    id: 38,
    name: 'Jaket UV',
    category: 'Uniqlo',
    price: 420000,
    dp: 405000,
    image: 'foto/jaket-uv.jpeg',
    status: 'closed',
    badge: null
  },
    {
    id: 39,
    name: 'AIRism Cotton Pique Polo Shirt',
    category: 'Uniqlo',
    price: 420000,
    dp: 405000,
    image: 'foto/airism-pique.jpeg',
    status: 'closed',
    badge: null
  },
  {
    id: 40,
    name: 'Jaket Uniqlo (Sale Price, ini harga diskon 50%, bisa berubah jika sudah tidak diskon)',
    category: 'Uniqlo',
    price: 420000,
    dp: 405000,
    image: 'foto/jaket-denim.jpeg',
    status: 'closed',
    badge: 'SALE'
  },
    {
    id: 41,
    name: 'Dry Pique',
    category: 'Uniqlo',
    price: 420000,
    dp: 405000,
    image: 'foto/dry-pique.jpeg',
    status: 'closed',
    badge: null
  },
  {
    id: 42,
    name: 'Jaket Kids UV Protection',
    category: 'Uniqlo',
    price: 305000,
    dp: 290000,
    image: 'foto/uv-kids.jpeg',
    status: 'closed',
    badge: null
  },
    {
    id: 43,
    name: 'Jaket Uniqlo Krem (Sale Price, ini harga diskon 50%, bisa berubah jika sudah tidak diskon)',
    category: 'Uniqlo',
    price: 420000,
    dp: 405000,
    image: 'foto/jaket-krem.jpeg',
    status: 'closed',
    badge: 'SALE'
  },
   {
    id: 44,
    name: 'AIRism Jacket Woman Series ',
    category: 'Uniqlo',
    price: 305000,
    dp: 290000,
    image: 'foto/airism-woman.jpeg',
    status: 'closed',
    badge: null
  },
  {
    id: 45,
    name: 'Shirring Sleeve Tshirt',
    category: 'Uniqlo',
    price: 420000,
    dp: 405000,
    image: 'foto/shirring-sleeve.jpeg',
    status: 'closed',
    badge: null
  },
  {
    id: 46,
    name: 'Mini Tshirt',
    category: 'Uniqlo',
    price: 245000,
    dp: 230000,
    image: 'foto/mini-tshirt.jpeg',
    status: 'closed',
    badge: null
  },
  {
    id: 47,
    name: 'Tiered Maxi Skirt',
    category: 'Uniqlo',
    price: 520000,
    dp: 505000,
    image: 'foto/tiered-maxi-skirt-2.jpeg',
    status: 'closed',
    badge: null
  },
  {
    id: 48,
    name: 'Dry Wide Tshirt (SALE Price, harga bisa berubah)',
    category: 'Uniqlo',
    price: 195000,
    dp: 185000,
    image: 'foto/shirring-sleeve.jpeg',
    status: 'closed',
    badge: 'SALE'
  },
  {
    id: 49,
    name: 'Ribbed Frill Cardigan',
    category: 'Uniqlo',
    price: 420000,
    dp: 405000,
    image: 'foto/ribbed-frill.jpeg',
    status: 'closed',
    badge: null
  },
  {
    id: 50,
    name: 'Methal Button Cardigan',
    category: 'Uniqlo',
    price: 360000,
    dp: 345000,
    image: 'foto/methal-button.jpeg',
    status: 'closed',
    badge: null
  },
  {
    id: 206,
    name: 'Knit Cardigan',
    category: 'Uniqlo',
    price: 420000,
    dp: 405000,
    image: 'foto/cardi-knit-420.jpeg',
    status: 'closed',
    badge: null
  },
  {
    id: 207,
    name: 'Cardigan',
    category: 'Uniqlo',
    price: 420000,
    dp: 405000,
    image: 'foto/cardi-420.jpeg',
    status: 'closed',
    badge: null
  },
  {
    id: 208,
    name: 'Cardigan Pola',
    category: 'Uniqlo',
    price: 420000,
    dp: 405000,
    image: 'foto/cardi-pola-420.jpeg',
    status: 'closed',
    badge: null
  },
  {
    id: 209,
    name: 'Waffle Henley Neck Long',
    category: 'Uniqlo',
    price: 275000,
    dp: 255000,
    image: 'foto/waffle-henley-neck-long-275.jpeg',
    status: 'closed',
    badge: null
  },
  {
    id: 210,
    name: 'Kaus Moncchichi',
    category: 'Uniqlo',
    price: 280000,
    dp: 265000,
    image: 'foto/mocchichicollab280.jpeg',
    status: 'closed',
    badge: null
  },
  {
    id: 211,
    name: 'Knitwear',
    category: 'Uniqlo',
    price: 520000,
    dp: 505000,
    image: 'foto/knitwear-520.jpeg',
    status: 'closed',
    badge: null
  },
  {
    id: 212,
    name: 'Polkadot Skirt',
    category: 'Uniqlo',
    price: 420000,
    dp: 405000,
    image: 'foto/polakdot-skirt-420.jpeg',
    status: 'closed',
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
    status: 'closed',
    badge: 'Most Wanted'
  },
  {
    id: 66,
    name: 'Strapt Ballet Sneakers Black & Red',
    category: 'GU',
    price: 420000,
    dp: 410000,
    image: 'foto/strapt-ballet.jpeg',
    status: 'closed',
    badge: 'Best Seller'
  },
  {
    id: 66,
    name: 'Strapt Ballet Sneakers Khaki',
    category: 'GU',
    price: 420000,
    dp: 410000,
    image: 'foto/strapt-ballet-2.jpeg',
    status: 'closed',
    badge: 'Best Seller'
  },
  {
    id: 67,
    name: 'Ballet Sneakers',
    category: 'GU',
   price: 420000,
    dp: 410000,
    image: 'foto/ballet-sneakers.jpeg',
    status: 'closed',
    badge: 'Best Seller'
  },
  {
    id: 5,
    name: 'Camisole isi 3',
    category: 'GU',
    price: 190000,
    dp: 175000,
    image: 'foto/camisole-isi3.jpeg',
    status: 'closed',
    badge: null
  },
  {
    id: 6,
    name: 'Mesh Ballet Sneakers',
    category: 'GU',
    price: 420000,
    dp: 410000,
    image: 'foto/mesh-ballet-sneakers.jpeg',
    status: 'closed',
    badge: 'Best Seller'
  },
  {
    id: 213,
    name: 'Ballet Lace',
    category: 'GU',
    price: 420000,
    dp: 410000,
    image: 'foto/laceup-ballet-420.jpeg',
    status: 'closed',
    badge: null
  },
  {
    id: 214,
    name: 'Double Strap Ballet Sneaker',
    category: 'GU',
    price: 420000,
    dp: 410000,
    image: 'foto/double-strap-ballet-snealer-420.jpeg',
    status: 'closed',
    badge: null
  },
  {
    id: 220,
    name: 'Nylon Combo Flat',
    category: 'GU',
    price: 420000,
    dp: 405000,
    image: 'foto/bylon-combo-flat-420.jpeg',
    status: 'closed',
    badge: 'SALE'
  },
  {
    id: 51,
    name: 'Ribbed Boat Neck Cardigan',
    category: 'GU',
    price: 305000,
    dp: 300000,
    image: 'foto/ribbed-boat.jpeg',
    status: 'closed',
    badge: null
  },
  {
    id: 52,
    name: 'Fromt Button Sweater',
    category: 'GU',
    price: 300000,
    dp: 290000,
    image: 'foto/fromt-button.jpeg',
    status: 'closed',
    badge: null
  },
  {
    id: 53,
    name: 'Pull Sweat Zip Hoodie',
    category: 'GU',
    price: 420000,
    dp: 410000,
    image: 'foto/pull-sweat.jpeg',
    status: 'closed',
    badge: null
  },
  {
    id: 54,
    name: 'Shear Ribbed Cardigan',
    category: 'GU',
    price: 360000,
    dp: 345000,
    image: 'foto/sheer-ribbed.jpeg',
    status: 'closed',
    badge: null
  },
  {
    id: 55,
    name: 'Two Toned Denim Skirt (SALE Price, harga bisa berubah)',
    category: 'GU',
    price: 195000,
    dp: 180000,
    image: 'foto/two-toned.jpeg',
    status: 'closed',
    badge: 'SALE'
  },
  {
    id: 56,
    name: 'Circular Midi Skirt (SALE Price, harga bisa berubah)',
    category: 'GU',
    price: 240000,
    dp: 230000,
    image: 'foto/circular-midi.jpeg',
    status: 'closed',
    badge: 'SALE'
  },
  {
    id: 57,
    name: 'Dropped flared Shirt',
    category: 'GU',
    price: 250000,
    dp:240000,
    image: 'foto/dropped-flared.jpeg',
    status: 'closed',
    badge: null
  },
  {
    id: 58,
    name: 'Lace frilled Blouse',
    category: 'GU',
    price: 305000,
    dp: 290000,
    image: 'foto/lace-frilled.jpeg',
    status: 'closed',
    badge: null
  },
  {
    id: 59,
    name: 'Washable Dolman Sleeve Knitted Tshirt',
    category: 'GU',
    price: 305000,
    dp: 295000,
    image: 'foto/washable.jpeg',
    status: 'closed',
    badge: null
  },
  {
    id: 60,
    name: 'bubble Sleeve Blouse',
    category: 'GU',
    price: 305000,
    dp: 295000,
    image: 'foto/bubble-blouse.jpeg',
    status: 'closed',
    badge: null
  },
  {
    id: 61,
    name: 'Collarless Vest',
    category: 'GU',
    price: 300000,
    dp: 295000,
    image: 'foto/collarless.jpeg',
    status: 'closed',
    badge: null
  },
   {
    id: 62,
    name: 'Puff Sweat',
    category: 'GU',
    price: 305000,
    dp: 295000,
    image: 'foto/puff-sweat.jpeg',
    status: 'closed',
    badge: null
  },
   {
    id: 63,
    name: 'Cotton Colour Longe Set Patterned',
    category: 'GU',
    price: 220000,
    dp: 210000,
    image: 'foto/lounge-set.jpeg',
    status: 'closed',
    badge: null
  },
   {
    id: 64,
    name: 'Cotton Blend Pajamas Dot',
    category: 'GU',
    price: 360000,
    dp: 345000,
    image: 'foto/cotton-blend-dor.jpeg',
    status: 'closed',
    badge: null
  },
   {
    id: 65,
    name: 'Satin Pjamas',
    category: 'GU',
    price: 360000,
    dp: 34500,
    image: 'foto/satin-pajamas.jpeg',
    status: 'closed',
    badge: null
  },
   
{
    id: 68,
    name: 'Lace Blouse',
    category: 'GU',
    price: 305000,
    dp: 295000,
    image: 'foto/lace-blouse.jpeg',
    status: 'closed',
    badge: null
  },
  
  {
    id: 70,
    name: 'Washable Knitted polo Shirt ',
    category: 'GU',
    price: 305000,
    dp: 295000,
    image: 'foto/washable-polo.jpeg',
    status: 'closed',
    badge: null
  },
  {
    id: 71,
    name: 'Pocketable UV Protection Parka ',
    category: 'GU',
    price: 525000,
    dp: 510000,
    image: 'foto/pocketable.jpeg',
    status: 'closed',
    badge: null
  },
  {
    id: 72,
    name: 'Pocketable UV Protection Parka ',
    category: 'GU',
    price: 525000,
    dp: 510000,
    image: 'foto/pocketable.jpeg',
    status: 'closed',
    badge: 'Most Wanted'
  },
  {
    id: 73,
    name: 'Pocketable UV Protection Parka Yellow & Blue',
    category: 'GU',
    price: 525000,
    dp: 515000,
    image: 'foto/pocketable-yellow.jpeg',
    status: 'closed',
    badge: null
  },
  {
    id: 74,
    name: 'Shoulder Bag',
    category: 'GU',
    price: 245000,
    dp: 230000,
    image: 'foto/shoulder-bag.jpeg',
    status: 'closed',
    badge: null
  },
  {
    id: 75,
    name: 'Loop Yarn Full ZIP Hoodie',
    category: 'GU',
    price: 360000,
    dp: 350000,
    image: 'foto/loop-yarn.jpeg',
    status: 'closed',
    badge: null
  },
  {
    id: 76,
    name: 'Pepium Camisole',
    category: 'GU',
    price: 245000,
    dp: 230000,
    image: 'foto/pepium.jpeg',
    status: 'closed',
    badge: null
  },
  {
    id: 77,
    name: 'Cargi Barrel Ankle Pants',
    category: 'GU',
    price: 305000,
    dp: 290000,
    image: 'foto/cargi.jpeg',
    status: 'closed',
    badge: null
  },
{
    id: 78,
    name: 'Ballon Pants',
    category: 'GU',
    price: 420000,
    dp: 410000,
    image: 'foto/ballon-pants.jpeg',
    status: 'closed',
    badge: null
  },
  {
    id: 79,
    name: 'Shorts',
    category: 'GU',
    price: 145000,
    dp: 130000,
    image: 'foto/shrts.jpeg',
    status: 'closed',
    badge: null
  },
  {
    id: 80,
    name: 'Tunik',
    category: 'GU',
    price: 420000,
    dp: 410000,
    image: 'foto/tunik.jpeg',
    status: 'closed',
    badge: null
  },
  {
    id: 81,
    name: 'Balloon Sleeve Tunik',
    category: 'GU',
    price: 420000,
    dp: 410000,
    image: 'foto/ballon-tunik.jpeg',
    status: 'closed',
    badge: null
  },
  {
    id: 215,
    name: 'Double Belt Mules',
    category: 'GU',
    price: 145000,
    dp: 130000,
    image: 'foto/double-belt-mules-145.jpeg',
    status: 'closed',
    badge: null
  },
  {
    id: 216,
    name: 'SALE silinder bag',
    category: 'GU',
    price: 145000,
    dp: 130000,
    image: 'foto/SALE-tas-145.jpeg',
    status: 'closed',
    badge: 'SALE'
  },
  {
    id: 217,
    name: 'SALE  bag',
    category: 'GU',
    price: 255000,
    dp: 240000,
    image: 'foto/SALE-255.jpeg',
    status: 'closed',
    badge: 'SALE'
  },
  {
    id: 218,
    name: 'SALE  tas',
    category: 'GU',
    price: 280000,
    dp: 265000,
    image: 'foto/sale-tas-280.jpeg',
    status: 'closed',
    badge: 'SALE'
  },
  {
    id: 219,
    name: 'Blouse Kerah Sailor',
    category: 'GU',
    price: 280000,
    dp: 265000,
    image: 'foto/blouse-kerash-sailor-280.jpeg',
    status: 'closed',
    badge: 'SALE'
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
    category: 'Merchandise & Collab',
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
  {
    id: 96,
    name: 'Gantungan Kunci Sanrio',
    category: 'Merchandise & Collab',
    price: 25000,
    dp: 15000,
    image: 'foto/sanrio-ganci.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 97,
    name: 'Sheetmask',
    category: 'Things',
    price: 25000,
    dp: 15000,
    image: 'foto/masker-daiso.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 98,
    name: 'Cica Body Sheets',
    category: 'Things',
    price: 25000,
    dp: 15000,
    image: 'foto/cica-body-sheets.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 99,
    name: 'Lipgloss Kyumee',
    category: 'Makeup',
    price: 58000,
    dp: 40000,
    image: 'foto/lipgloss-kyumee.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 100,
    name: 'Kyumee Pallette',
    category: 'Makeup',
    price: 58000,
    dp: 40000,
    image: 'foto/kyumee-pallette.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 101,
    name: 'Compressed Facial Mask isi 14',
    category: 'Things',
    price: 25000,
    dp: 15000,
    image: 'foto/comp-daiso.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 102,
    name: 'Jedai',
    category: 'Things',
    price: 25000,
    dp: 15000,
    image: 'foto/jedai-daiso-2.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 103,
    name: 'Kyumee Gradation Face Powder',
    category: 'Things',
    price: 45000,
    dp: 30000,
    image: 'foto/kyumee-gradation.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 104,
    name: 'Tatakan Sumpit',
    category: 'Things',
    price: 25000,
    dp: 15000,
    image: 'foto/tatakan-sumpit.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 105,
    name: 'Kotak Wadah',
    category: 'Things',
    price: 55000,
    dp: 40000,
    image: 'foto/wadah-daiso.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 106,
    name: 'Trial Kit Jojoba Oil',
    category: 'Things',
    price: 25000,
    dp: 15000,
    image: 'foto/travel-kit-daiso.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 107,
    name: 'Wadah Mini',
    category: 'Things',
    price: 25000,
    dp: 15000,
    image: 'foto/wadah-dai.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 108,
    name: 'Cermin Mini',
    category: 'Things',
    price: 25000,
    dp: 15000,
    image: 'foto/mirror-daiso.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 109,
    name: 'Wadah Onigiri',
    category: 'Things',
    price: 25000,
    dp: 15000,
    image: 'foto/onigiri-daiso.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 110,
    name: 'Bento Kit (Cetakan Nori, Hiasan Bento)',
    category: 'Things',
    price: 25000,
    dp: 15000,
    image: 'foto/bento-kit.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 111,
    name: 'Alas Makan',
    category: 'Things',
    price: 25000,
    dp: 15000,
    image: 'foto/bento-kain.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 112,
    name: 'Towel Dish',
    category: 'Things',
    price: 25000,
    dp: 15000,
    image: 'foto/towel-dish.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 113,
    name: 'Laundry Net',
    category: 'Things',
    price: 45000,
    dp: 30000,
    image: 'foto/laundry-net.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 114,
    name: 'Laundry Net Collab Disney',
    category: 'Merchandise & Collab',
    price: 60000,
    dp: 45000,
    image: 'foto/laundry-net-hewan.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 115,
    name: 'Curtain Lucu',
    category: 'Things',
    price: 45000,
    dp: 30000,
    image: 'foto/curtain-dai.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 116,
    name: 'Sandal Jepit Alas Rotan',
    category: 'Things',
    price: 57000,
    dp: 40000,
    image: 'foto/sandal-dai-4.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 117,
    name: 'Sandal  Alas Rotan',
    category: 'Things',
    price: 57000,
    dp: 40000,
    image: 'foto/sandal-dai-3.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 118,
    name: 'Sandal Alas Rotan',
    category: 'Things',
    price: 57000,
    dp: 40000,
    image: 'foto/sandal-dai-2.jpeg',
    status: 'open',
    badge: null
  },
   {
    id: 187,
    name: 'Sisir Mion',
    category: 'Things',
    price: 140000,
    dp: 125000,
    image: 'foto/sisir-mion-140.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 119,
    name: 'Sandal Alas Rotan',
    category: 'Things',
    price: 57000,
    dp: 40000,
    image: 'foto/sandal-dai.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 120,
    name: 'Cutting Board',
    category: 'Things',
    price: 25000,
    dp: 15000,
    image: 'foto/cutting-board.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 121,
    name: 'Magic Resin UV Liquid',
    category: 'Things',
    price: 25000,
    dp: 15000,
    image: 'foto/Magic-resin-uv.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 122,
    name: 'TWS',
    category: 'Things',
    price: 130000,
    dp: 115000,
    image: 'foto/tws-daiso.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 122,
    name: 'Bricks',
    category: 'Things',
    price: 25000,
    dp: 15000,
    image: 'foto/bricks-daiso.jpeg',
    status: 'open',
    badge: null
  },
   {
    id: 139,
    name: 'Wet Brush',
    category: 'Things',
    price: 210000,
    dp: 200000,
    image: 'foto/wet-brush-210.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 128,
    name: 'Foot Spray',
    category: 'Things',
    price: 76000,
    dp: 55000,
    image: 'foto/foot-spray-76.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 129,
    name: 'Sneakers Disinfectant',
    category: 'Things',
    price: 82000,
    dp: 70000,
    image: 'foto/sneaker-disin-82.jpeg',
    status: 'open',
    badge: null
  },
  
  // ── Skincare ────────────────────────────────────────────
  
  {
    id: 123,
    name: 'Melano CC Sheet Mask isi 10',
    category: 'Skincare',
    price: 97000,
    dp: 80000,
    image: 'foto/melano-cc-97k.jpeg',
    status: 'open',
    badge: null
  },
    {
    id: 153,
    name: 'Keana Rice Pack',
    category: 'Skincare',
    price: 190000,
    dp: 175000,
    image: 'foto/keana-190.jpeg',
    status: 'open',
    badge: "Most Wanted"
  },
  {
    id: 124,
    name: 'Keana Rice Sheet Mask',
    category: 'Skincare',
    price: 105000,
    dp: 90000,
    image: 'foto/sheet-keana-rice-105.jpeg',
    status: 'open',
    badge: "Best Seller"
  },
  {
    id: 125,
    name: 'Nivea LipBalm (color)',
    category: 'Skincare',
    price: 112000,
    dp: 100000,
    image: 'foto/nivea-lip-112.jpeg',
    status: 'open',
    badge: null
  },
{
    id: 126,
    name: 'Deonatulle Deodorant',
    category: 'Skincare',
    price: 25000,
    dp: 15000,
    image: 'foto/bricks-daiso.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 152,
    name: 'Roihi Tsuboko Koyo isi 156',
    category: 'Skincare',
    price: 120000,
    dp: 105000,
    image: 'foto/roihi-isi78-120.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 157,
    name: 'Fino Hair Mask',
    category: 'Skincare',
    price: 120000,
    dp: 105000,
    image: 'foto/fino-120.jpeg',
    status: 'open',
    badge: "Best Price"
  },
  {
    id: 127,
    name: 'Lacherie Kit Moist&Toner',
    category: 'Skincare',
    price: 135000,
    dp: 120000,
    image: 'foto/lacherie-135.jpeg',
    status: 'open',
    badge: null
  },
   {
    id: 156,
    name: 'Retinol Sheet Mask isi 30',
    category: 'Skincare',
    price: 95000,
    dp: 80000,
    image: 'foto/mask-retinol-95.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 130,
    name: 'Kose Clear Turn Vitamin Bomb face Mask',
    category: 'Skincare',
    price: 97000,
    dp: 80000,
    image: 'foto/kose-vit-c-97.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 131,
    name: 'Kose Clear Turn Sheet Mask',
    category: 'Skincare',
    price: 97000,
    dp: 80000,
    image: 'foto/kose-clear-97.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 132,
    name: 'Dermalaser Sheet Mask',
    category: 'Skincare',
    price: 100000,
    dp: 85000,
    image: 'foto/Dermalaser-100.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 133,
    name: 'Dermalaser Sheet Mask (kiri)',
    category: 'Skincare',
    price: 110000,
    dp: 95000,
    image: 'foto/dermalaser-100-kiri-110.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 134,
    name: 'Tigeraid Cica Mask',
    category: 'Skincare',
    price: 255000,
    dp: 245000,
    image: 'foto/tigeraid-255.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 135,
    name: '&honey Treatment',
    category: 'Skincare',
    price: 150000,
    dp: 135000,
    image: 'foto/&honey-150.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 136,
    name: 'Himawari Bloom d Or',
    category: 'Skincare',
    price: 167000,
    dp: 150000,
    image: 'foto/himawari-bloomdor-167.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 137,
    name: 'Conditioner 350 ml',
    category: 'Skincare',
    price: 55000,
    dp: 40000,
    image: 'foto/conditioner-350ml-55.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 138,
    name: 'Hair Mask Diane',
    category: 'Skincare',
    price: 135000,
    dp: 120000,
    image: 'foto/diane-135.jpeg',
    status: 'open',
    badge: null
  },
   {
    id: 154,
    name: 'Anessa Perfect UV Sunscreen',
    category: 'Skincare',
    price: 375000,
    dp: 360000,
    image: 'foto/aessa-375.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 155,
    name: 'Biore Sunscreen',
    category: 'Skincare',
    price: 120000,
    dp: 105000,
    image: 'foto/biore-sunscreen-120.jpeg',
    status: 'open',
    badge: null
  },
 
  {
    id: 140,
    name: 'Ma&Me Shampoo',
    category: 'Skincare',
    price: 85000,
    dp: 70000,
    image: 'foto/ma&me-85.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 158,
    name: 'Ululis Shampoo Pinkme',
    category: 'Skincare',
    price: 165000,
    dp: 150000,
    image: 'foto/ululis-pinkme-165.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 159,
    name: 'Ululis Hair Oil Black',
    category: 'Skincare',
    price: 242000,
    dp: 230000,
    image: 'foto/ululi-black-230.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 160,
    name: '&honey Package',
    category: 'Skincare',
    price: 170000,
    dp: 155000,
    image: 'foto/&honey-package-170.jpeg',
    status: 'open',
    badge: null
  },
  // ── Skincare Diskon ────────────────────────────────────────────
  
  {
    id: 142,
    name: 'The Stem Cell Mask Black',
    category: 'Skincare Diskon Opening Toko (Max Order 11 June)',
    price: 120000,
    dp: 105000,
    image: 'foto/thestem-120.jpeg',
    status: 'closed',
    badge: null
  },
  
  {
    id: 145,
    name: 'Lip Plumper',
    category: 'Skincare Diskon Opening Toko (Max Order 11 June)',
    price: 90000,
    dp: 75000,
    image: 'foto/lip-plumper-90.jpeg',
    status: 'closed',
    badge: null
  },
  {
    id: 146,
    name: 'VITAme Keana face Mask VC-200',
    category: 'Skincare Diskon Opening Toko (Max Order 11 June)',
    price: 120000,
    dp: 115000,
    image: 'foto/VITAme-keanafacemask-120.jpeg',
    status: 'closed',
    badge: null
  },
  // ── Donki ────────────────────────────────────────────
   {
    id: 147,
    name: 'Number S Shampoo Blonde',
    category: 'Skincare Diskon Opening Toko (Max Order 11 June)',
    price: 85000,
    dp: 70000,
    image: 'foto/numberS-shampooblonde-85.jpeg',
    status: 'closed',
    badge: null
  },
  {
    id: 148,
    name: 'Kirage Shampoo',
    category: 'Skincare Diskon Opening Toko (Max Order 11 June)',
    price: 92000,
    dp: 80000,
    image: 'foto/kirage-shampoo-92.jpeg',
    status: 'closed',
    badge: null
  },
  {
    id: 149,
    name: 'Non Chemical Sunscreen Prodefense',
    category: 'Skincare Diskon Opening Toko (Max Order 11 June)',
    price: 120000,
    dp: 105000,
    image: 'foto/nonchemical-sunscreen-120.jpeg',
    status: 'closed',
    badge: null
  },
   {
    id: 150,
    name: 'Skin Aqua Moist UV',
    category: 'Skincare Diskon Opening Toko (Max Order 11 June)',
    price: 64000,
    dp: 50000,
    image: 'foto/skin-aqua-moist-v-90-64.jpeg',
    status: 'closed',
    badge: null
  },
  {
    id: 151,
    name: 'Anessa Sunscreen',
    category: 'Skincare Diskon Opening Toko (Max Order 11 June)',
    price: 105000,
    dp: 90000,
    image: 'foto/Anesa-113-105.jpeg',
    status: 'closed',
    badge: null
  },
   {
    id: 161,
    name: 'UV Sun Stick',
    category: 'Skincare',
    price: 150000,
    dp: 135000,
    image: 'foto/uv-sun-stick-150.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 162,
    name: 'Pocket Perfume',
    category: 'Skincare',
    price: 150000,
    dp: 135000,
    image: 'foto/parfum-150.jpeg',
    status: 'open',
    badge: null
  },
{
    id: 163,
    name: 'Totebag Motif',
    category: 'Things',
    price: 290000,
    dp: 275000,
    image: 'foto/tas-290.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 164,
    name: 'Lunch Bag',
    category: 'Things',
    price: 220000,
    dp: 205000,
    image: 'foto/lunch-220.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 165,
    name: 'Sumpit + Tempat',
    category: 'Things',
    price: 150000,
    dp: 135000,
    image: 'foto/sumpit-high-150.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 166,
    name: 'Scalp Headspa Brush',
    category: 'Things',
    price: 180000,
    dp: 165000,
    image: 'foto/scalp-brush180.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 167,
    name: 'Scrub Kaki',
    category: 'Skincare',
    price: 150000,
    dp: 135000,
    image: 'foto/scrubkaki-150.jpeg',
    status: 'open',
    badge: null
  },

  {
    id: 168,
    name: 'Calamee Ice Cooling Square mask 50 pcs',
    category: 'Skincare',
    price: 140000,
    dp: 125000,
    image: 'foto/calamee-icesquare-50pcs-140.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 169,
    name: 'Retinol Eye Base Serum',
    category: 'Skincare',
    price: 210000,
    dp: 195000,
    image: 'foto/retinol-eyex-base-210.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 170,
    name: 'CICA Acne Patch 72 pcs',
    category: 'Skincare',
    price: 97000,
    dp:80000,
    image: 'foto/patch-isi72-97.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 171,
    name: 'Chifure Cleansing Oil',
    category: 'Skincare',
    price: 125000,
    dp:105000,
    image: 'foto/chifure-cleansing-125.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 172,
    name: 'Anua Serum 77+',
    category: 'Skincare',
    price: 330000,
    dp:315000,
    image: 'foto/anua-77plus-330.jpeg',
    status: 'open',
    badge: null
  },
{
    id: 173,
    name: 'Anua 1+1 (15+ dan 100+)',
    category: 'Skincare',
    price: 350000,
    dp:335000,
    image: 'foto/anuas1plus1-350.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 174,
    name: 'Anua 100+',
    category: 'Skincare',
    price: 360000,
    dp:345000,
    image: 'foto/anus100plus-360.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 175,
    name: 'Hadalabo Gokyujun Anti Aging',
    category: 'Skincare',
    price: 165000,
    dp:350000,
    image: 'foto/hadalabo-gokyujun-165.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 176,
    name: 'Shampoo Melt Refill',
    category: 'Skincare',
    price: 180000,
    dp:165000,
    image: 'foto/shanpoo-meltrefll-180.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 177,
    name: 'Shampoo Melt Refill Treatment',
    category: 'Skincare',
    price: 180000,
    dp:165000,
    image: 'foto/shampoo-treatment-180.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 178,
    name: 'Shampoo Melt Deep Shampoo',
    category: 'Skincare',
    price: 180000,
    dp:165000,
    image: 'foto/deepshampoo-180.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 179,
    name: 'Night Repair Treatment',
    category: 'Skincare',
    price: 155000,
    dp:140000,
    image: 'foto/nightrepair-155.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 180,
    name: 'Bricks',
    category: 'Things',
    price: 135000,
    dp:120000,
    image: 'foto/bricks-135.jpeg',
    status: 'open',
    badge: null
  },
   {
    id: 189,
    name: 'Rom&nd Pallette Eyeshadow',
    category: 'Makeup',
    price: 230000,
    dp: 215000,
    image: 'foto/rom&nd-pallette-eyeshadow-230.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 190,
    name: 'Medicube SunStick PDRN Collagen',
    category: 'Skincare',
    price: 195000,
    dp: 180000,
    image: 'foto/medicube-pdrncollagen-sunstick-195.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 191,
    name: 'Mediheal 30 Sheets',
    category: 'Skincare',
    price: 320000,
    dp: 315000,
    image: 'foto/mediheal-30sheets-320.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 192,
    name: 'Medicube PDRN Sheet Mask',
    category: 'Skincare',
    price: 58000,
    dp: 45000,
    image: 'foto/medicube-pdrn-58.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 193,
    name: 'Nature Republic Peach PDRN Dew Essence',
    category: 'Skincare',
    price: 330000,
    dp: 315000,
    image: 'foto/nauture-rep-peachpdrndewessence-330.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 194,
    name: 'Anua Serum 15+',
    category: 'Skincare',
    price: 325000,
    dp: 305000,
    image: 'foto/anuaserum15plus-325.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 195,
    name: 'Anua Sheet Mask 7 Lembar',
    category: 'Skincare',
    price: 95000,
    dp: 80000,
    image: 'foto/anuaheet-7lembar-95.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 196,
    name: 'dAlba Tone Up Sun Cream',
    category: 'Skincare',
    price: 285000,
    dp: 270000,
    image: 'foto/dalba-toneup-285-sun.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 197,
    name: 'Moncchichi x Blush & Lipgloss Bonus Keyring',
    category: 'Makeup',
    price: 220000,
    dp: 200000,
    image: 'foto/mocchichixblushlipglosskri210kanan220.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 198,
    name: 'Shiseido Fino Hair Oil Premium Touch',
    category: 'Skincare',
    price: 165000,
    dp: 150000,
    image: 'foto/shiseido-fino-165.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 199,
    name: 'Maskara Heroine',
    category: 'Makeup',
    price: 124000,
    dp: 110000,
    image: 'foto/maskara-heroine-124.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 200,
    name: 'Wosado Bulu Mata Magnetik (Isi + Aplikator) ',
    category: 'Skincare',
    price: 510000,
    dp: 495000,
    image: 'foto/wosado-bulmatmagentik-510-aplikator.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 201,
    name: 'Daisy Doll by Mary Quant Powder Blush & Highlighter ',
    category: 'Makeup',
    price: 215000,
    dp: 200000,
    image: 'foto/daisydoll-bymryquant-powderblush-215.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 202,
    name: 'Purukiss Jelly Lip Mask',
    category: 'Skincare',
    price: 95000,
    dp: 80000,
    image: 'foto/purukiss-jellylipmask-95.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 203,
    name: 'Vecci Pallette',
    category: 'Skincare',
    price: 180000,
    dp: 165000,
    image: 'foto/vecci-pallette-180.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 204,
    name: 'SANA Namerakahonpo Eye Cream',
    category: 'Skincare',
    price: 130000,
    dp: 115000,
    image: 'foto/SANA-eyecream-130.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 205,
    name: 'Keyring',
    category: 'Things',
    price: 130000,
    dp: 115000,
    image: 'foto/Keyring-130.jpeg',
    status: 'open',
    badge: null
  },
  
  // ── Merchandise & Collab ────────────────────────────────────────────
  {
    id: 181,
    name: 'Merchandise Haikyuu Puzzle Acrylic',
    category: 'Merchandise & Collab',
    price: 205000,
    dp:195000,
    image: 'foto/merch-haikyuu-puzzleacrylic-205.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 182,
    name: 'UNO Pokemon',
    category: 'Merchandise & Collab',
    price: 150000,
    dp: 135000,
    image: 'foto/uno-pokemon-150.jpeg',
    status: 'open',
    badge: null
  },
  
  {
    id: 184,
    name: 'UNO Conan, Bluelock & Attack on Titan',
    category: 'Merchandise & Collab',
    price: 205000,
    dp: 195000,
    image: 'foto/uno-aot-bluelock-conan-205.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 185,
    name: 'Bricks Haikyuu',
    category: 'Merchandise & Collab',
    price: 230000,
    dp: 215000,
    image: 'foto/bricks-haikyuu-230.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 186,
    name: 'Bag Charm Haikyuu Bird',
    category: 'Merchandise & Collab',
    price: 85000,
    dp: 70000,
    image: 'foto/ganci-haikyuu-85.jpeg',
    status: 'open',
    badge: null
  },
  {
    id: 188,
    name: 'Anpanman Coin Pocket',
    category: 'Merchandise & Collab',
    price: 150000,
    dp: 125000,
    image: 'foto/anpanman-pocket-150.jpeg',
    status: 'open',
    badge: null
  },
 

  // ── Donki ────────────────────────────────────────────
  
 

  
  

  
  
  
  
  
  
  
  
  
  
  
];
