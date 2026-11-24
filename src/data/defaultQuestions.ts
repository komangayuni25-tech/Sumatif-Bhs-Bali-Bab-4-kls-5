import { Question } from '../types';
import wacanaSekolahImg from '../assets/images/wacana_sekolah_bali_1795493368201.jpg';
import mereraosanKelasImg from '../assets/images/mereraosan_kelas_bali_1795493367859.jpg';
import pupuhPucungImg from '../assets/images/pupuh_pucung_bali_1795493368878.jpg';
import cecimpedanBuahImg from '../assets/images/cecimpedan_buah_bali_1795493368802.jpg';

/**
 * Bank Soal Standar Asesmen Sumatif Mata Pelajaran BAHASA BALI
 * SD Negeri 3 Loloan Timur - Kelas 5 - Kurikulum Merdeka
 *
 * Lingkup Materi:
 * 1. Ngecacen Wacana
 * 2. Nyurat Indik Angka Bali 1-100
 * 3. Mereraosan (Percakapan di Kelas)
 * 4. Mirengang Pupuh Sekar Alit (Pupuh Pucung)
 * 5. Cecimpedan
 *
 * Komposisi Soal:
 * - 30 Butir Pilihan Ganda (PG) [Nomor 1 - 30] (Bobot: 2 poin/butir = 60 poin)
 * - 5 Butir Pilihan Ganda Kompleks Kategori (3 Pernyataan Benar/Salah) [Nomor 31 - 35] (Bobot: 6 poin/butir = 30 poin)
 * Total: 35 Butir Soal (Skor Maksimal: 90 poin -> Nilai Akhir Skala 100)
 */

export const INITIAL_QUESTIONS: Question[] = [
  // ============================================================================
  // BAGIAN I: 30 SOAL PILIHAN GANDA (PG)
  // ============================================================================

  // --- MATERI 1: NGECACEN WACANA (SOAL 1 - 6) ---
  {
    id: 1,
    type: 'pg',
    element: 'Peserta didik mampu memahami dari teks wacana',
    topic: 'Ngecacen Wacana: Gotong Royong di Sekolah',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat menentukan informasi tersurat dari teks wacana pendek tentang kerja bakti di sekolah.',
    image: wacanaSekolahImg,
    text: `Wacen wacana ring sor puniki antuk urati!\n\n"Rahina Redite semeng, murid-murid kelas lima SD Negeri 3 Loloan Timur mabersih-bersih ring natah sekolah. Putu lan Made nyampat daun-daun tuh nganggen sampat lidi. Luh Sari nyiram bunga ring taman sekolah mangda tetep asri. Sami murid bagia pisan ngamargiang karya bakti punika."\n\nNapi sane kamargiang olih murid-murid kelas lima ring natah sekolah manut wacana lan gambar ring ajeng?`,
    options: [
      { id: 'A', text: 'Mabersih-bersih utawi karya bakti ring natah sekolah' },
      { id: 'B', text: 'Malajah nyurat aksara Bali ring ruang kelas' },
      { id: 'C', text: 'Matembang pupuh pucung ring bale banjar' },
      { id: 'D', text: 'Mamelali ka pasih sareng kulawarga' },
    ],
    correctAnswer: 'A',
    explanation: 'Ring wacana kabaosang murid-murid kelas lima mabersih-bersih (karya bakti) ring natah sekolah rahina Redite semeng.',
  },
  {
    id: 2,
    type: 'pg',
    element: 'Peserta didik mampu memahami dari teks wacana',
    topic: 'Ngecacen Wacana: Tokoh dan Tugasnya',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengidentifikasi tokoh dan kegiatan dalam teks wacana.',
    text: `Wacen punggelan wacana ring sor!\n\n"Sabilang semeng sadurung ngranjing ka kelas, Komang Ayu nulungin ibu guru nyiapang buku tulis lan kapur. Risampune bel mamunyi, sami murid masila tur ngaturang panganjali Om Swastyastu."\n\nSira sane nulungin ibu guru nyiapang buku tulis sadurung ngranjing ka kelas?`,
    options: [
      { id: 'A', text: 'Putu Bagus' },
      { id: 'B', text: 'Komang Ayu' },
      { id: 'C', text: 'Made Sintya' },
      { id: 'D', text: 'Wayan Gede' },
    ],
    correctAnswer: 'B',
    explanation: 'Manut punggelan wacana ring ajeng, sane nulungin ibu guru nyiapang buku tulis lan kapur inggih punika Komang Ayu.',
  },
  {
    id: 3,
    type: 'pg',
    element: 'Peserta didik mampu memahami dari teks wacana',
    topic: 'Ngecacen Wacana: Kosa Kata Bahasa Bali',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengartikan kata berbahasa Bali dalam konteks kalimat wacana.',
    text: `Ring wacana mabasa Bali kabaosang: "Murid-murid nyampat daun-daun tuh ring natah sekolah mangda tamanne tetep asri."\n\nTeges kruna "natah" ring lengkara punika inggih punika ...`,
    options: [
      { id: 'A', text: 'Atap genteng sekolah' },
      { id: 'B', text: 'Ruang perpustakaan' },
      { id: 'C', text: 'Halaman atau pekarangan' },
      { id: 'D', text: 'Meja guru ring kelas' },
    ],
    correctAnswer: 'C',
    explanation: 'Kruna "natah" ring basa Bali tegesnyane halaman utawi pekarangan (halaman sekolah).',
  },
  {
    id: 4,
    type: 'pg',
    element: 'Peserta didik mampu memahami dari teks wacana',
    topic: 'Ngecacen Wacana: Ide Pokok Paragraf',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menentukan gagasan pokok (pikiran utama) dari teks wacana bergambar.',
    image: `<svg viewBox="0 0 440 130" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="440" height="130" rx="12" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5"/>
      <rect x="16" y="14" width="408" height="24" rx="6" fill="#1d4ed8"/>
      <text x="220" y="30" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">KUTIPAN WACANA: NGALESTARIANG BASA BALI</text>
      <text x="24" y="56" font-family="sans-serif" font-size="10.5" fill="#1e293b">"Basa Bali punika tetamian leluhur sane patut kalestariang olih para</text>
      <text x="24" y="73" font-family="sans-serif" font-size="10.5" fill="#1e293b">yowana. Ring rahina Wraspati, sami murid kaajakin mababaosan</text>
      <text x="24" y="90" font-family="sans-serif" font-size="10.5" fill="#1e293b">nganggen basa Bali alus mangda tetep ajeg lan nenten ical."</text>
      <text x="24" y="114" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#1d4ed8">Catetan: Wraspati = Hari Kamis | Tetamian = Warisan</text>
    </svg>`,
    text: 'Napi pikobet utama (ide pokok) saking kutipan wacana ring gambar di atas?',
    options: [
      { id: 'A', text: 'Pentingnya melestarikan Bahasa Bali sebagai warisan leluhur' },
      { id: 'B', text: 'Larangan berbicara di kelas pada hari Kamis' },
      { id: 'C', text: 'Cara membuat kalender Bali dan nama-nama hari' },
      { id: 'D', text: 'Kegiatan olahraga bersama pada hari Minggu pagi' },
    ],
    correctAnswer: 'A',
    explanation: 'Wacana punika nlatarang indik kewajiban ngalestariang basa Bali pinaka tetamian leluhur antuk mababaosan basa Bali.',
  },
  {
    id: 5,
    type: 'pg',
    element: 'Peserta didik mampu memahami dari teks wacana',
    topic: 'Ngecacen Wacana: Nilai Moral',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 2,
    indicator: 'Siswa dapat menyimpulkan pesan moral (amanat) dari teks wacana berbahasa Bali.',
    text: `Wacen wacana ring sor!\n\n"I Made setata jujur yening mablanja ring kantin sekolah. Sedek dina anu, ia manggihin pipis dasa tali rupiah labuh ring ajeng kelas. Made raris ngaturang pipis punika majeng ring Ibu Guru mangda kauningayang ring murid sane kelangan."\n\nSolah patut (amanat) sane prasida kaambil saking parilaksana I Made inggih punika ...`,
    options: [
      { id: 'A', text: 'Nganggen pipis sane kapanggihin anggen numbas jaja' },
      { id: 'B', text: 'Mengembalikan barang temuan dan bersikap jujur di mana saja' },
      { id: 'C', text: 'Nengil kemawon yening wenten timpal sane kelangan barang' },
      { id: 'D', text: 'Nenten dados mablanja ring kantin sekolah ritatkala istirahat' },
    ],
    correctAnswer: 'B',
    explanation: 'Parilaksana I Made nyinahang sikap jujur lan tanggung jawab antuk ngaturang barang/pipis temuan ring guru mangda kawaliang ka sang madue.',
  },
  {
    id: 6,
    type: 'pg',
    element: 'Peserta didik mampu memahami dari teks wacana',
    topic: 'Ngecacen Wacana: Teknik Membaca Pemahaman',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menentukan langkah tepat dalam memahami isi teks wacana (ngecacen wacana).',
    text: 'Ritatkala iraga "ngecacen wacana" mangda gelis uning ring daging bacaane, parikrama sane patut kalaksanayang inggih punika ...',
    options: [
      { id: 'A', text: 'Macaa wacana antuk tenget, ngrereh kruna kunci, lan nyimpulang daging bacaan' },
      { id: 'B', text: 'Maca judulne manten tan perlu maca paragraf isinne' },
      { id: 'C', text: 'Maca saking ungkur ka arep mangda gelis puput' },
      { id: 'D', text: 'Ngawacen antuk suwara keras tanpa mikirang teges krunane' },
    ],
    correctAnswer: 'A',
    explanation: 'Ngecacen wacana (membaca/membedah wacana) kalaksanayang antuk maca teliti, ngrereh kruna kunci, tur nyimpulang daging wacana.',
  },

  // --- MATERI 2: NYURAT INDIK ANGKA BALI 1 - 100 (SOAL 7 - 12) ---
  {
    id: 7,
    type: 'pg',
    element: 'Peserta didik mampu menulis angka Bali dengan benar',
    topic: 'Nyurat Angka Bali: Simbol Angka Dasar 1-9 & 0',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengidentifikasi bentuk aksara angka Bali dasar (1-9 dan 0).',
    image: `<svg viewBox="0 0 460 125" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="460" height="125" rx="12" fill="#fffbeb" stroke="#fcd34d" stroke-width="1.5"/>
      <text x="230" y="22" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#92400e" text-anchor="middle">AKSARA ANGKA BALI DASAR (0 - 9)</text>
      <g transform="translate(14, 34)">
        <rect x="0" y="0" width="39" height="72" rx="6" fill="#ffffff" stroke="#f59e0b"/>
        <text x="19.5" y="34" font-family="Noto Sans Balinese, serif" font-size="22" fill="#1e293b" text-anchor="middle">᭑</text>
        <text x="19.5" y="54" font-family="sans-serif" font-size="11" font-weight="bold" fill="#b45309" text-anchor="middle">1</text>
        <text x="19.5" y="66" font-family="sans-serif" font-size="8" fill="#64748b" text-anchor="middle">Siki</text>
      </g>
      <g transform="translate(58, 34)">
        <rect x="0" y="0" width="39" height="72" rx="6" fill="#ffffff" stroke="#f59e0b"/>
        <text x="19.5" y="34" font-family="Noto Sans Balinese, serif" font-size="22" fill="#1e293b" text-anchor="middle">᭒</text>
        <text x="19.5" y="54" font-family="sans-serif" font-size="11" font-weight="bold" fill="#b45309" text-anchor="middle">2</text>
        <text x="19.5" y="66" font-family="sans-serif" font-size="8" fill="#64748b" text-anchor="middle">Kalih</text>
      </g>
      <g transform="translate(102, 34)">
        <rect x="0" y="0" width="39" height="72" rx="6" fill="#ffffff" stroke="#f59e0b"/>
        <text x="19.5" y="34" font-family="Noto Sans Balinese, serif" font-size="22" fill="#1e293b" text-anchor="middle">᭓</text>
        <text x="19.5" y="54" font-family="sans-serif" font-size="11" font-weight="bold" fill="#b45309" text-anchor="middle">3</text>
        <text x="19.5" y="66" font-family="sans-serif" font-size="8" fill="#64748b" text-anchor="middle">Tiga</text>
      </g>
      <g transform="translate(146, 34)">
        <rect x="0" y="0" width="39" height="72" rx="6" fill="#ffffff" stroke="#f59e0b"/>
        <text x="19.5" y="34" font-family="Noto Sans Balinese, serif" font-size="22" fill="#1e293b" text-anchor="middle">᭔</text>
        <text x="19.5" y="54" font-family="sans-serif" font-size="11" font-weight="bold" fill="#b45309" text-anchor="middle">4</text>
        <text x="19.5" y="66" font-family="sans-serif" font-size="8" fill="#64748b" text-anchor="middle">Papat</text>
      </g>
      <g transform="translate(190, 34)">
        <rect x="0" y="0" width="39" height="72" rx="6" fill="#ffffff" stroke="#f59e0b"/>
        <text x="19.5" y="34" font-family="Noto Sans Balinese, serif" font-size="22" fill="#1e293b" text-anchor="middle">᭕</text>
        <text x="19.5" y="54" font-family="sans-serif" font-size="11" font-weight="bold" fill="#b45309" text-anchor="middle">5</text>
        <text x="19.5" y="66" font-family="sans-serif" font-size="8" fill="#64748b" text-anchor="middle">Lima</text>
      </g>
      <g transform="translate(234, 34)">
        <rect x="0" y="0" width="39" height="72" rx="6" fill="#ffffff" stroke="#f59e0b"/>
        <text x="19.5" y="34" font-family="Noto Sans Balinese, serif" font-size="22" fill="#1e293b" text-anchor="middle">᭖</text>
        <text x="19.5" y="54" font-family="sans-serif" font-size="11" font-weight="bold" fill="#b45309" text-anchor="middle">6</text>
        <text x="19.5" y="66" font-family="sans-serif" font-size="8" fill="#64748b" text-anchor="middle">Nem</text>
      </g>
      <g transform="translate(278, 34)">
        <rect x="0" y="0" width="39" height="72" rx="6" fill="#ffffff" stroke="#f59e0b"/>
        <text x="19.5" y="34" font-family="Noto Sans Balinese, serif" font-size="22" fill="#1e293b" text-anchor="middle">᭗</text>
        <text x="19.5" y="54" font-family="sans-serif" font-size="11" font-weight="bold" fill="#b45309" text-anchor="middle">7</text>
        <text x="19.5" y="66" font-family="sans-serif" font-size="8" fill="#64748b" text-anchor="middle">Pitu</text>
      </g>
      <g transform="translate(322, 34)">
        <rect x="0" y="0" width="39" height="72" rx="6" fill="#ffffff" stroke="#f59e0b"/>
        <text x="19.5" y="34" font-family="Noto Sans Balinese, serif" font-size="22" fill="#1e293b" text-anchor="middle">᭘</text>
        <text x="19.5" y="54" font-family="sans-serif" font-size="11" font-weight="bold" fill="#b45309" text-anchor="middle">8</text>
        <text x="19.5" y="66" font-family="sans-serif" font-size="8" fill="#64748b" text-anchor="middle">Kutus</text>
      </g>
      <g transform="translate(366, 34)">
        <rect x="0" y="0" width="39" height="72" rx="6" fill="#ffffff" stroke="#f59e0b"/>
        <text x="19.5" y="34" font-family="Noto Sans Balinese, serif" font-size="22" fill="#1e293b" text-anchor="middle">᭙</text>
        <text x="19.5" y="54" font-family="sans-serif" font-size="11" font-weight="bold" fill="#b45309" text-anchor="middle">9</text>
        <text x="19.5" y="66" font-family="sans-serif" font-size="8" fill="#64748b" text-anchor="middle">Sia</text>
      </g>
      <g transform="translate(410, 34)">
        <rect x="0" y="0" width="39" height="72" rx="6" fill="#ffffff" stroke="#f59e0b"/>
        <text x="19.5" y="34" font-family="Noto Sans Balinese, serif" font-size="22" fill="#1e293b" text-anchor="middle">᭐</text>
        <text x="19.5" y="54" font-family="sans-serif" font-size="11" font-weight="bold" fill="#b45309" text-anchor="middle">0</text>
        <text x="19.5" y="66" font-family="sans-serif" font-size="8" fill="#64748b" text-anchor="middle">Windu</text>
      </g>
    </svg>`,
    text: 'Cingak tabel aksara angka Bali ring ajeng! Yening iraga jagi nyurat angka "25" nganggen aksara angka Bali, wangunnyane inggih punika ...',
    options: [
      { id: 'A', text: '᭒᭕' },
      { id: 'B', text: '᭕᭒' },
      { id: 'C', text: '᭓᭕' },
      { id: 'D', text: '᭒᭔' },
    ],
    correctAnswer: 'A',
    explanation: 'Angka 2 (Kalih) punika ᭒ lan angka 5 (Lima) punika ᭕, dadosnyane angka 25 kasurat ᭒᭕.',
  },
  {
    id: 8,
    type: 'pg',
    element: 'Peserta didik mampu menulis angka Bali dengan benar',
    topic: 'Nyurat Angka Bali: Kosakata Bilangan 11-25',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat menyebutkan nama bilangan 25 (selai) dan 21 (selikur) dalam bahasa Bali.',
    text: 'Ring wilangan basa Bali, angka 21 kabaos "selikur". Yening angka 25 kabaos ...',
    options: [
      { id: 'A', text: 'Duang dasa' },
      { id: 'B', text: 'Selai' },
      { id: 'C', text: 'Seket' },
      { id: 'D', text: 'Pasasur' },
    ],
    correctAnswer: 'B',
    explanation: 'Ring basa Bali, 20 = duang dasa, 21 = selikur, 25 = selai, 35 = pasasur/sasur, lan 50 = seket.',
  },
  {
    id: 9,
    type: 'pg',
    element: 'Peserta didik mampu menulis angka Bali dengan benar',
    topic: 'Nyurat Angka Bali: Aturan Carik Siki',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menjelaskan fungsi tanda baca Carik Siki (᭞) saat menulis angka Bali dalam kalimat.',
    image: `<svg viewBox="0 0 420 105" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="420" height="105" rx="12" fill="#f0f9ff" stroke="#7dd3fc" stroke-width="1.5"/>
      <text x="210" y="24" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0369a1" text-anchor="middle">UGER-UGER NYURAT ANGKA BALI RING LENGKARA</text>
      <rect x="95" y="36" width="230" height="44" rx="8" fill="#ffffff" stroke="#0284c7" stroke-width="1.5"/>
      <text x="210" y="65" font-family="Noto Sans Balinese, serif" font-size="24" fill="#0f172a" text-anchor="middle">᭞᭕᭐᭞</text>
      <text x="210" y="95" font-family="sans-serif" font-size="9.5" fill="#334155" text-anchor="middle">Angka kaapit antuk Carik Siki (᭞ ... ᭞) mangda nenten kacampur sareng aksara</text>
    </svg>`,
    text: 'Cingak gambar aturan nyurat angka Bali ring ajeng! Angka ᭞᭕᭐᭞ punika mateges wilangan ...',
    options: [
      { id: 'A', text: '15 (Limolas)' },
      { id: 'B', text: '35 (Pasasur)' },
      { id: 'C', text: '50 (Seket)' },
      { id: 'D', text: '100 (Satus)' },
    ],
    correctAnswer: 'C',
    explanation: '᭕ = 5 lan ᭐ = 0, dadosnyane ᭞᭕᭐᭞ punika angka 50 (seket) sane kaapit antuk Carik Siki.',
  },
  {
    id: 10,
    type: 'pg',
    element: 'Peserta didik mampu menulis angka Bali dengan benar',
    topic: 'Nyurat Angka Bali: Bilangan 12, 18, 35, 50, 75, 100',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengonversi penyebutan bilangan Bahasa Bali (seket, telung benang, satus) ke angka Latin.',
    text: 'Putu madue buku tulis akehnyane "telung benang", nanging Made madue buku akehnyane "seket". Yening kasurat nganggen angka Latin, wilangan "telung benang" lan "seket" inggih punika ...',
    options: [
      { id: 'A', text: '30 lan 50' },
      { id: 'B', text: '75 lan 50' },
      { id: 'C', text: '45 lan 60' },
      { id: 'D', text: '85 lan 40' },
    ],
    correctAnswer: 'B',
    explanation: 'Ring wilangan basa Bali: telung benang = 75, seket = 50, setiman = 45, pasasur = 35, lan satus = 100.',
  },
  {
    id: 11,
    type: 'pg',
    element: 'Peserta didik mampu menulis angka Bali dengan benar',
    topic: 'Nyurat Angka Bali: Membaca Angka 1 - 100',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat membaca kombinasi aksara angka Bali menjadi bilangan 1-100 dengan tepat.',
    image: `<svg viewBox="0 0 420 110" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="420" height="110" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <g transform="translate(22, 18)">
        <rect width="110" height="72" rx="8" fill="#ffffff" stroke="#3b82f6" stroke-width="1.5"/>
        <text x="55" y="42" font-family="Noto Sans Balinese, serif" font-size="24" fill="#1e3a8a" text-anchor="middle">᭞᭔᭕᭞</text>
        <text x="55" y="62" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#475569" text-anchor="middle">Kartu A</text>
      </g>
      <g transform="translate(155, 18)">
        <rect width="110" height="72" rx="8" fill="#ffffff" stroke="#10b981" stroke-width="1.5"/>
        <text x="55" y="42" font-family="Noto Sans Balinese, serif" font-size="24" fill="#065f46" text-anchor="middle">᭞᭗᭘᭞</text>
        <text x="55" y="62" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#475569" text-anchor="middle">Kartu B</text>
      </g>
      <g transform="translate(288, 18)">
        <rect width="110" height="72" rx="8" fill="#ffffff" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="55" y="42" font-family="Noto Sans Balinese, serif" font-size="24" fill="#92400e" text-anchor="middle">᭞᭑᭐᭐᭞</text>
        <text x="55" y="62" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#475569" text-anchor="middle">Kartu C</text>
      </g>
    </svg>`,
    text: 'Cingak tetiga kartu angka Bali ring ajeng! Urutan nilai angka Kartu A, Kartu B, lan Kartu C inggih punika ...',
    options: [
      { id: 'A', text: '35, 68, lan 10' },
      { id: 'B', text: '45, 78, lan 100' },
      { id: 'C', text: '54, 87, lan 100' },
      { id: 'D', text: '42, 79, lan 110' },
    ],
    correctAnswer: 'B',
    explanation: 'Kartu A = ᭔᭕ (45 / setiman), Kartu B = ᭗᭘ (78 / pitung dasa kutus), lan Kartu C = ᭑᭐᭐ (100 / satus).',
  },
  {
    id: 12,
    type: 'pg',
    element: 'Peserta didik mampu menulis angka Bali dengan benar',
    topic: 'Nyurat Angka Bali: Soal Cerita Bilangan 1-100',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 2,
    indicator: 'Siswa dapat menyelesaikan operasi hitung sederhana lalu menuliskannya ke dalam aksara angka Bali.',
    text: 'Ring perpustakaan SD Negeri 3 Loloan Timur wenten buku cerita basa Bali akehnyane "seket" (50) buku. Raris Ibu Guru Komang Ayu nambahin malih "pasasur" (35) buku. Akeh buku mangkin yening kasurat antuk angka Bali inggih punika ...',
    options: [
      { id: 'A', text: '᭞᭗᭕᭞' },
      { id: 'B', text: '᭞᭘᭐᭞' },
      { id: 'C', text: '᭞᭘᭕᭞' },
      { id: 'D', text: '᭞᭙᭕᭞' },
    ],
    correctAnswer: 'C',
    explanation: 'Seket (50) + Pasasur (35) = 85. Angka 8 (kutus) = ᭘ lan angka 5 (lima) = ᭕, dadosnyane kasurat ᭞᭘᭕᭞.',
  },

  // --- MATERI 3: MERERAOSAN / PERCAKAPAN DI KELAS (SOAL 13 - 18) ---
  {
    id: 13,
    type: 'pg',
    element: 'Peserta didik mampu mendemonstrasikan percakapan di kelas',
    topic: 'Mereraosan: Etika & Unggah-Ungguh Basa',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat menentukan ragam bahasa Bali yang tepat saat bercakap-cakap dengan guru di kelas.',
    image: mereraosanKelasImg,
    text: 'Ritatkala murid-murid mereraosan (mababaosan) sareng Ibu Guru ring kelas, basa Bali sane patut kaanggen inggih punika ...',
    options: [
      { id: 'A', text: 'Basa Bali Alus (Singgih/Sor) sane sopan lan santun' },
      { id: 'B', text: 'Basa Bali Kasar mangda gelis karesep' },
      { id: 'C', text: 'Basa Bali Andap sekadi sareng alit-alite' },
      { id: 'D', text: 'Suwara sane keras tur nyrengen' },
    ],
    correctAnswer: 'A',
    explanation: 'Ritatkala mereraosan sareng sang sane patut kasinggihang sakadi guru utawi rerama, wajib nganggen Basa Bali Alus (anggah-ungguhing basa Bali).',
  },
  {
    id: 14,
    type: 'pg',
    element: 'Peserta didik mampu mendemonstrasikan percakapan di kelas',
    topic: 'Mereraosan: Melengkapi Dialog Siswa',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat melengkapi teks percakapan antar teman di kelas dengan kata tanya yang tepat.',
    text: `Wacen punggelan mereraosan ring sor puniki!\n\nPutu : "Om Swastyastu, Made. ... Made rauh ka sekolah semengan?"\nMade : "Om Swastyastu, Putu. Tiang rauh ka sekolah jam setengah pitu semeng."\n\nKruna pitaken sane patut anggen nagingin titik-titik ring ajeng inggih punika ...`,
    options: [
      { id: 'A', text: 'Sira (Siapa)' },
      { id: 'B', text: 'Kuda (Berapa)' },
      { id: 'C', text: 'Pidan / Jam kuda (Kapan / Jam berapa)' },
      { id: 'D', text: 'Dija (Di mana)' },
    ],
    correctAnswer: 'C',
    explanation: 'Jawaban Made nyinahang galah ("jam setengah pitu semeng"), mawinan kruna pitaken sane patut inggih punika "Jam kuda" utawi "Pidan".',
  },
  {
    id: 15,
    type: 'pg',
    element: 'Peserta didik mampu mendemonstrasikan percakapan di kelas',
    topic: 'Mereraosan: Salam Pembuka & Penutup',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat menentukan salam pembuka dan penutup yang sopan saat mendemonstrasikan percakapan di kelas.',
    text: 'Sadurung ngawitin lan wusan mendemonstrasiang percakapan (mereraosan) ring ajeng kelas, para murid patut ngaturang salam pembuka lan pamuput sane patut, inggih punika ...',
    options: [
      { id: 'A', text: 'Om Swastyastu ... Om Santih, Santih, Santih Om' },
      { id: 'B', text: 'Matur suksma ... Rahajeng wengi' },
      { id: 'C', text: 'Ampura ... Dados tiang budal' },
      { id: 'D', text: 'Suksma ... Om Swastyastu' },
    ],
    correctAnswer: 'A',
    explanation: 'Salam pembuka ring Bali inggih punika "Om Swastyastu" lan salam pamuput (penutup) inggih punika "Om Santih, Santih, Santih Om".',
  },
  {
    id: 16,
    type: 'pg',
    element: 'Peserta didik mampu mendemonstrasikan percakapan di kelas',
    topic: 'Mereraosan: Izin Kepada Guru',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat memilih kalimat izin yang santun kepada guru dalam dialog kelas.',
    image: `<svg viewBox="0 0 430 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="430" height="120" rx="12" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5"/>
      <rect x="18" y="16" width="394" height="34" rx="8" fill="#ffffff" stroke="#16a34a"/>
      <text x="30" y="37" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#166534">Dayu : "Ibu Guru, tiang nunas lugra jagi ka kamar mandi jebos."</text>
      <rect x="18" y="62" width="394" height="38" rx="8" fill="#dcfce7" stroke="#22c55e"/>
      <text x="30" y="85" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#14532d">Ibu Guru : "Inggih Dayu, durusang. Sampunang lali wangsul malih."</text>
    </svg>`,
    text: 'Ring percakapan di atas, kruna "nunas lugra" sane kaanggen olih Dayu mateges ...',
    options: [
      { id: 'A', text: 'Mohon maaf karena terlambat' },
      { id: 'B', text: 'Meminta izin dengan sopan' },
      { id: 'C', text: 'Mengucapkan terima kasih' },
      { id: 'D', text: 'Meminjam buku pelajaran' },
    ],
    correctAnswer: 'B',
    explanation: 'Kruna "nunas lugra" ring basa Bali Alus mateges memohon izin (permisi) antuk tata krama sane sopan.',
  },
  {
    id: 17,
    type: 'pg',
    element: 'Peserta didik mampu mendemonstrasikan percakapan di kelas',
    topic: 'Mereraosan: Demonstrasi / Bermain Peran',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengevaluasi hal penting yang harus diperhatikan saat mendemonstrasikan percakapan di depan kelas.',
    text: 'Luh Sari lan Wayan Gede polih giliran mendemonstrasiang mereraosan ring arep kelas. Mangda timpal-timpale sami resep lan seneng mirengang, napi sane patut kalaksanayang olih Luh Sari lan Wayan Gede?',
    options: [
      { id: 'A', text: 'Nganggen suwara sane tatas (jelas), intonasi sane patut, lan mimik/ekspresi sane cocok' },
      { id: 'B', text: 'Mabaos alon pisan sambilang ngeliat ka tembok kelas' },
      { id: 'C', text: 'Maca teks dialog antuk gelis tanpa jeda lan nenten saling pandang' },
      { id: 'D', text: 'Kedek-kedek ritatkala timpalne sedek ngucapang lengkara serius' },
    ],
    correctAnswer: 'A',
    explanation: 'Demonstrasi mereraosan sane becik merluang lafal sane tatas (jelas), intonasi sane tepat, ekspresi (semita), lan komunikasi mata sane alami.',
  },
  {
    id: 18,
    type: 'pg',
    element: 'Peserta didik mampu mendemonstrasikan percakapan di kelas',
    topic: 'Mereraosan: Basa Alus Anggota Tubuh & Aktivitas',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menggunakan kata basa alus yang tepat dalam percakapan dengan orang yang lebih tua/guru.',
    text: 'Yening iraga mababaosan sareng Ibu Guru: "Ibu Guru, tiang sampun puput ... tugas Bahasa Bali." Kruna alus sane patut anggen nagingin lengkara punika inggih punika ...',
    options: [
      { id: 'A', text: 'ngaryanin / nyurat' },
      { id: 'B', text: 'ngamah' },
      { id: 'C', text: 'medem' },
      { id: 'D', text: 'pules' },
    ],
    correctAnswer: 'A',
    explanation: '"Ngaryanin" (membuat/mengerjakan) utawi "nyurat" (menulis) punika kruna sane alus lan sopan yening mabaos sareng guru.',
  },

  // --- MATERI 4: MIRENGANG PUPUH SEKAR ALIT - PUPUH PUCUNG (SOAL 19 - 24) ---
  {
    id: 19,
    type: 'pg',
    element: 'Peserta didik mampu melantunkan salah satu pupuh',
    topic: 'Pupuh Sekar Alit: Mengenal Pupuh Pucung',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengidentifikasi kelompok tembang tradisional Bali tempat Pupuh Pucung berasal.',
    image: pupuhPucungImg,
    text: 'Cingak gambar murid-murid sane sedek malajah matembang sareng Ibu Guru! Pupuh Pucung punika ngranjing ring soroh tembang Bali sane mawasta ...',
    options: [
      { id: 'A', text: 'Sekar Rare (Gending Rare)' },
      { id: 'B', text: 'Sekar Alit (Tembang Macapat)' },
      { id: 'C', text: 'Sekar Madya (Kidung)' },
      { id: 'D', text: 'Sekar Agung (Kakawin)' },
    ],
    correctAnswer: 'B',
    explanation: 'Ring kasusastraan Bali, Pupuh Pucung, Ginada, Ginanti, Sinom, Maskumambang, lan sane lianan ngranjing ring Sekar Alit (Macapat).',
  },
  {
    id: 20,
    type: 'pg',
    element: 'Peserta didik mampu melantunkan salah satu pupuh',
    topic: 'Pupuh Pucung: Istilah Guru Wilangan & Guru Dingdong',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat menjelaskan pengertian Guru Wilangan dan Guru Dingdong dalam aturan pupuh.',
    text: 'Ritatkala melantunkan pupuh sekar alit, wenten uger-uger sane mawasta "Guru Wilangan" lan "Guru Dingdong". Sane kabaos Guru Dingdong inggih punika ...',
    options: [
      { id: 'A', text: 'Akeh baris (carik) ring sajeroning apada' },
      { id: 'B', text: 'Akeh kecap wanda (suku kata) ring nyabran carik' },
      { id: 'C', text: 'Labuh suwara (huruf vokal) ring pamuput nyabran carik' },
      { id: 'D', text: 'Aran pengawi sane ngaryanin pupuh' },
    ],
    correctAnswer: 'C',
    explanation: 'Guru Wilangan = jumlah suku kata per baris, Guru Dingdong = suara vokal akhir (a, i, u, e, o) ring ungkur baris, lan Pada Lingsa = gabungan kalih punika.',
  },
  {
    id: 21,
    type: 'pg',
    element: 'Peserta didik mampu melantunkan salah satu pupuh',
    topic: 'Pupuh Pucung: Pada Lingsa Pupuh Pucung',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menentukan rumus Pada Lingsa Pupuh Pucung (4u, 8u, 6a, 8i, 4u, 8a).',
    image: `<svg viewBox="0 0 430 145" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="430" height="145" rx="12" fill="#faf5ff" stroke="#d8b4fe" stroke-width="1.5"/>
      <text x="215" y="22" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#6b21a8" text-anchor="middle">CONTOH BAIT PUPUH PUCUNG (BALI)</text>
      <text x="30" y="45" font-family="sans-serif" font-size="10.5" fill="#1e293b">1. Bi-bi A-nu</text>
      <text x="320" y="45" font-family="monospace" font-size="10.5" font-weight="bold" fill="#7e22ce">(4u)</text>
      <text x="30" y="63" font-family="sans-serif" font-size="10.5" fill="#1e293b">2. la-mun pa-yu lu-as man-jus</text>
      <text x="320" y="63" font-family="monospace" font-size="10.5" font-weight="bold" fill="#7e22ce">(8u)</text>
      <text x="30" y="81" font-family="sans-serif" font-size="10.5" fill="#1e293b">3. an-teng ke-ke-mu-da</text>
      <text x="320" y="81" font-family="monospace" font-size="10.5" font-weight="bold" fill="#7e22ce">(6a)</text>
      <text x="30" y="99" font-family="sans-serif" font-size="10.5" fill="#1e293b">4. yat-na-in nga-ba ma-su-i</text>
      <text x="320" y="99" font-family="monospace" font-size="10.5" font-weight="bold" fill="#7e22ce">(8i)</text>
      <text x="30" y="117" font-family="sans-serif" font-size="10.5" fill="#1e293b">5. ti-uk pun-tul</text>
      <text x="320" y="117" font-family="monospace" font-size="10.5" font-weight="bold" fill="#7e22ce">(4u)</text>
      <text x="30" y="135" font-family="sans-serif" font-size="10.5" fill="#1e293b">6. ba-wang ang-gon pa-si-ke-pan</text>
      <text x="320" y="135" font-family="monospace" font-size="10.5" font-weight="bold" fill="#7e22ce">(8a)</text>
    </svg>`,
    text: 'Manut tabel bait Pupuh Pucung ring ajeng, akeh carik (baris) ring sajeroning apada Pupuh Pucung inggih punika ...',
    options: [
      { id: 'A', text: '4 carik' },
      { id: 'B', text: '6 carik' },
      { id: 'C', text: '8 carik' },
      { id: 'D', text: '10 carik' },
    ],
    correctAnswer: 'B',
    explanation: 'Pupuh Pucung ring tembang Bali madue 6 carik (baris) ring apada antuk pada lingsa: 4u, 8u, 6a, 8i, 4u, 8a.',
  },
  {
    id: 22,
    type: 'pg',
    element: 'Peserta didik mampu melantunkan salah satu pupuh',
    topic: 'Pupuh Pucung: Menghitung Pada Lingsa Baris',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 2,
    indicator: 'Siswa dapat menganalisis jumlah suku kata dan huruf vokal akhir pada sebuah carik Pupuh Pucung.',
    text: 'Yening wenten carik kaping kalih Pupuh Pucung sane mamunyi: "nyadia melajahang raga" (nya-di-a me-la-ja-hang ra-ga = 9 suku kata), punapi carik punika sampun anut ring uger-uger pada lingsa carik kaping kalih Pupuh Pucung (8u)?',
    options: [
      { id: 'A', text: 'Sampun anut santukan vokal akhirne a' },
      { id: 'B', text: 'Nenten anut, santukan carik kaping kalih patutne 8 suku kata tur labuh suwara "u"' },
      { id: 'C', text: 'Sampun anut santukan wenten kruna melajahang' },
      { id: 'D', text: 'Nenten anut santukan patutne 12 suku kata tur labuh suwara "i"' },
    ],
    correctAnswer: 'B',
    explanation: 'Carik kaping kalih Pupuh Pucung madue pada lingsa 8u (8 wanda lan labuh suwara u), nenten 9a.',
  },
  {
    id: 23,
    type: 'pg',
    element: 'Peserta didik mampu melantunkan salah satu pupuh',
    topic: 'Pupuh Pucung: Melengkapi Bait Pupuh Pucung',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat melengkapi kata yang rumpang pada lirik Pupuh Pucung.',
    text: `Jangkepin punggelan Pupuh Pucung ring sor puniki!\n\n"Bibi Anu,\nlamun payu luas manjus,\nanteng kekemuda,\nyatnain ngaba masui,\ntiuk puntul,\nbawang anggon ..."\n\nKruna sane patut anggen ngjangkepin carik kaping nem inggih punika ...`,
    options: [
      { id: 'A', text: 'pasikepan (8a)' },
      { id: 'B', text: 'meblanja (8a)' },
      { id: 'C', text: 'malali (6i)' },
      { id: 'D', text: 'mepayas (8u)' },
    ],
    correctAnswer: 'A',
    explanation: 'Carik kaping nem Pupuh Pucung punika "bawang anggon pasikepan" (ba-wang ang-gon pa-si-ke-pan = 8 wanda, akhir a -> 8a).',
  },
  {
    id: 24,
    type: 'pg',
    element: 'Peserta didik mampu melantunkan salah satu pupuh',
    topic: 'Pupuh Sekar Alit: Watak & Teknik Melantunkan Pupuh',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengidentifikasi cara dan sikap yang baik dalam melantunkan (ngwacen/matembang) Pupuh Pucung.',
    text: 'Ritatkala iraga mirengang lan melantunkan Pupuh Pucung, sane patut kauratiang mangda tembange becik kapireng inggih punika ...',
    options: [
      { id: 'A', text: 'Rengas, suwara nyaring ngejer, lan tan nganggen gregel' },
      { id: 'B', text: 'Suwara (wirama/guru lagu), pangucap kruna sane tatas, lan penghayatan (rasa)' },
      { id: 'C', text: 'Mabaca gelis sekadi mabaos biasa tan nganggen nada tembang' },
      { id: 'D', text: 'Ngubah jumlah suku kata manut keneh dewek' },
    ],
    correctAnswer: 'B',
    explanation: 'Matembang pupuh sekar alit merluang wirama (lagu/nada), wirasa (penghayatan), lan pangucap kruna sane tatas manut pada lingsa.',
  },

  // --- MATERI 5: CECIMPEDAN (SOAL 25 - 30) ---
  {
    id: 25,
    type: 'pg',
    element: 'Peserta didik mampu membuat salah satu contoh cecimpedan',
    topic: 'Cecimpedan: Pengertian & Tebak Buah Bergambar',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat menjawab contoh cecimpedan tentang buah-buahan berdasarkan ilustrasi gambar.',
    image: cecimpedanBuahImg,
    text: `Cingak gambar woh-wohan ring ajeng!\n\n"Apa ke: kulitne masesik cara naga, isinne putih manis, tur batunne selem?"\n\nCawisan (jawaban) cecimpedan punika manut gambar inggih punika ...`,
    options: [
      { id: 'A', text: 'Buah Nyuh (Kelapa)' },
      { id: 'B', text: 'Buah Salak' },
      { id: 'C', text: 'Buah Nanas' },
      { id: 'D', text: 'Buah Gedang (Pepaya)' },
    ],
    correctAnswer: 'B',
    explanation: 'Buah salak madue kulit masesik coklat, daging buah putih manis, tur batu (biji) selem keras.',
  },
  {
    id: 26,
    type: 'pg',
    element: 'Peserta didik mampu membuat salah satu contoh cecimpedan',
    topic: 'Cecimpedan: Fungsi & Pengertian dalam Bahasa Indonesia',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat menjelaskan arti kata Cecimpedan dalam tradisi lisan Bali.',
    text: 'Ring paribasa Bali, "Cecimpedan" punika pateh tegesnyane ring basa Indonesia sareng ...',
    options: [
      { id: 'A', text: 'Teka-teki atau tebak-tebakan' },
      { id: 'B', text: 'Dongeng atau cerita rakyat' },
      { id: 'C', text: 'Puisi lama empat baris (pantun)' },
      { id: 'D', text: 'Pidato resmi di balai banjar' },
    ],
    correctAnswer: 'A',
    explanation: 'Cecimpedan inggih punika bebaosan mabentuk teka-teki (tebak-tebakan) tradisional Bali sane ketah nganggen kruna pangawit "Apa ke...".',
  },
  {
    id: 27,
    type: 'pg',
    element: 'Peserta didik mampu membuat salah satu contoh cecimpedan',
    topic: 'Cecimpedan: Tebak Benda Klasik',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menjawab cecimpedan tradisional Bali "Apa ke anak cerik maid cacing?".',
    text: 'Cecimpedan klasik Bali sane sering kaplajahin olih anak SD inggih punika: "Apa ke anak cerik maid cacing?"\n\nCawisan sane patut saking cecimpedan punika inggih punika ...',
    options: [
      { id: 'A', text: 'Jaum misi benang (Jarum dan benang)' },
      { id: 'B', text: 'Sampat lidi lan kranjang' },
      { id: 'C', text: 'Potlot lan pangapus' },
      { id: 'D', text: 'Kedis cempirit ngamah uled' },
    ],
    correctAnswer: 'A',
    explanation: 'Jaum (jarum) kaumpamayang anak cerik, tur benang sane katarik (kaid) kaumpamayang cacing.',
  },
  {
    id: 28,
    type: 'pg',
    element: 'Peserta didik mampu membuat salah satu contoh cecimpedan',
    topic: 'Cecimpedan: Membuat Cecimpedan Sesuai Gambar',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 2,
    indicator: 'Siswa dapat menyusun kalimat cecimpedan yang tepat untuk mendeskripsikan buah nanas.',
    image: cecimpedanBuahImg,
    text: 'Made jagi ngaryanin cecimpedan sane cawisanne "Buah Nanas" (sekadi ring gambar sisin tengen). Cecimpedan sane paling patut kakaryanin olih Made inggih punika ...',
    options: [
      { id: 'A', text: 'Apa ke ngelah mata liu nanging tusing nyidaang ningalin?' },
      { id: 'B', text: 'Apa ke batisne papat nanging tusing nyidaang majalan?' },
      { id: 'C', text: 'Apa ke yen peteng idup, yen lemah mati?' },
      { id: 'D', text: 'Apa ke putih di jaba, kuning di tengah, tur nyak mapanggang?' },
    ],
    correctAnswer: 'A',
    explanation: 'Buah nanas kulitne madue bintik-bintik sekadi mata akeh ("mata liu"), nanging nenten nyidaang ningalin.',
  },
  {
    id: 29,
    type: 'pg',
    element: 'Peserta didik mampu membuat salah satu contoh cecimpedan',
    topic: 'Cecimpedan: Struktur Kata Pembuka',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengidentifikasi kata tanya pembuka yang khas pada cecimpedan.',
    text: 'Yening iraga jagi ngaryanin cecimpedan mabasa Bali, kruna pangawit (kata pembuka) sane ketah kaanggen inggih punika ...',
    options: [
      { id: 'A', text: '"Om Swastyastu..."' },
      { id: 'B', text: '"Buka sloka..."' },
      { id: 'C', text: '"Apa ke..."' },
      { id: 'D', text: '"Duk dumun..."' },
    ],
    correctAnswer: 'C',
    explanation: 'Cecimpedan ketah kakawitin antuk kruna pitaken "Apa ke..." (Apakah gerangan...).',
  },
  {
    id: 30,
    type: 'pg',
    element: 'Peserta didik mampu membuat salah satu contoh cecimpedan',
    topic: 'Cecimpedan: Kreasi Cecimpedan Benda di Kelas',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 2,
    indicator: 'Siswa dapat menentukan jawaban tepat dari contoh cecimpedan baru tentang benda di ruang kelas.',
    text: 'Wayan ngaryanin cecimpedan indik piranti ring ruang kelas: "Apa ke awakne selem utawi putih, demen kadulang kapur utawi spidol, nanging tusing taen wareg?"\n\nCawisan cecimpedan punika inggih punika ...',
    options: [
      { id: 'A', text: 'Papan tulis' },
      { id: 'B', text: 'Meja guru' },
      { id: 'C', text: 'Lemari buku' },
      { id: 'D', text: 'Jendela kaca' },
    ],
    correctAnswer: 'A',
    explanation: 'Papan tulis warna selem (blackboard) nganggen kapur utawi putih (whiteboard) nganggen spidol.',
  },

  // ============================================================================
  // BAGIAN II: 5 SOAL PILIHAN GANDA KOMPLEKS KATEGORI (3 PERNYATAAN BENAR / SALAH)
  // ============================================================================

  // --- PGK KATEGORI 1: NGECACEN WACANA (SOAL 31) ---
  {
    id: 31,
    type: 'pgk_kategori',
    element: 'Peserta didik mampu memahami dari teks wacana',
    topic: 'Evaluasi Isi Teks Wacana Sekolah',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 6,
    indicator: 'Siswa dapat mengevaluasi kesesuaian tiga pernyataan (Benar/Salah) berdasarkan teks wacana dan gambar.',
    image: wacanaSekolahImg,
    text: `Wacen wacana ring sor puniki raris pilih BENAR utawi SALAH majeng nyabran pernyataan!\n\n"Ring SD Negeri 3 Loloan Timur, sabilang rahina Saniscara murid-murid ngamargiang gerakan 'Sekolah Asri lan Resik'. Putu ngaba kranjang sampah, Luh Sari nyiram sekar jepun, tur Made nyampat ring ajeng kelas. Sami murid mabusana rapi lan saling tulung mangda lingkungan sekolah sehat."`,
    statements: [
      {
        id: 's1',
        text: 'Gerakan "Sekolah Asri lan Resik" kalaksanayang sabilang rahina Saniscara (Sabtu).',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Ring wacana kabaosang Luh Sari tugasnyane nyampat ring ajeng kelas.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Murid-murid saling tulung mangda lingkungan sekolah tetep sehat lan bersih.',
        correctAnswer: true,
      },
    ],
    explanation: 'Pernyataan 1 Benar (rahina Saniscara). Pernyataan 2 Salah (Luh Sari nyiram sekar jepun, sane nyampat punika Made). Pernyataan 3 Benar (saling tulung mangda sekolah sehat).',
  },

  // --- PGK KATEGORI 2: NYURAT ANGKA BALI 1 - 100 (SOAL 32) ---
  {
    id: 32,
    type: 'pgk_kategori',
    element: 'Peserta didik mampu menulis angka Bali dengan benar',
    topic: 'Verifikasi Penulisan & Nilai Angka Bali 1-100',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 6,
    indicator: 'Siswa dapat menentukan kebenaran 3 pernyataan terkait pasangan lambang aksara angka Bali dan nilainya (1-100).',
    image: `<svg viewBox="0 0 430 105" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="430" height="105" rx="12" fill="#fffbeb" stroke="#fbbf24" stroke-width="1.5"/>
      <text x="215" y="22" font-family="sans-serif" font-size="11" font-weight="bold" fill="#92400e" text-anchor="middle">KARTU UJI ANGKA BALI (1 - 100)</text>
      <g transform="translate(22, 32)">
        <rect width="115" height="56" rx="8" fill="#ffffff" stroke="#f59e0b"/>
        <text x="57" y="34" font-family="Noto Sans Balinese, serif" font-size="22" fill="#0f172a" text-anchor="middle">᭞᭒᭕᭞</text>
        <text x="57" y="50" font-family="sans-serif" font-size="9" font-weight="bold" fill="#64748b" text-anchor="middle">Angka I</text>
      </g>
      <g transform="translate(157, 32)">
        <rect width="115" height="56" rx="8" fill="#ffffff" stroke="#f59e0b"/>
        <text x="57" y="34" font-family="Noto Sans Balinese, serif" font-size="22" fill="#0f172a" text-anchor="middle">᭞᭖᭐᭞</text>
        <text x="57" y="50" font-family="sans-serif" font-size="9" font-weight="bold" fill="#64748b" text-anchor="middle">Angka II</text>
      </g>
      <g transform="translate(292, 32)">
        <rect width="115" height="56" rx="8" fill="#ffffff" stroke="#f59e0b"/>
        <text x="57" y="34" font-family="Noto Sans Balinese, serif" font-size="22" fill="#0f172a" text-anchor="middle">᭞᭙᭙᭞</text>
        <text x="57" y="50" font-family="sans-serif" font-size="9" font-weight="bold" fill="#64748b" text-anchor="middle">Angka III</text>
      </g>
    </svg>`,
    text: 'Cingak tetiga kartu angka Bali ring ajeng, raris pilih BENAR utawi SALAH majeng pernyataan ring sor!',
    statements: [
      {
        id: 's1',
        text: 'Angka I (᭞᭒᭕᭞) mateges 25 lan ring basa Bali kabaos "selai".',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Angka II (᭞᭖᭐᭞) punika lambang saking angka 50 (seket).',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Angka III (᭞᭙᭙᭞) mateges 99 (sangang dasa sia) tur kaapit antuk Carik Siki.',
        correctAnswer: true,
      },
    ],
    explanation: 'Pernyataan 1 Benar (᭒᭕ = 25 = selai). Pernyataan 2 Salah (᭖᭐ punika 60 / nem dasa, nenten 50). Pernyataan 3 Benar (᭙᭙ = 99 lan kaapit antuk Carik Siki ᭞).',
  },

  // --- PGK KATEGORI 3: MERERAOSAN / PERCAKAPAN (SOAL 33) ---
  {
    id: 33,
    type: 'pgk_kategori',
    element: 'Peserta didik mampu mendemonstrasikan percakapan di kelas',
    topic: 'Etika & Praktik Mereraosan di Kelas',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 6,
    indicator: 'Siswa dapat menilai tiga pernyataan mengenai tata krama dan ragam bahasa dalam percakapan di kelas.',
    image: mereraosanKelasImg,
    text: 'Cingak gambar murid sedek mereraosan ring kelas, raris pilih BENAR utawi SALAH majeng pernyataan indik tata krama mereraosan ring sor!',
    statements: [
      {
        id: 's1',
        text: 'Ritatkala mereraosan sareng Ibu Guru, murid patut nganggen Basa Bali Alus.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Yening timpalne sedek mabaos ring arep kelas, iraga dados megat (memotong) baosne tanpa izin.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Ngawitin demonstrasi percakapan antuk "Om Swastyastu" lan mabaos antuk suwara tatas punika solah sane patut.',
        correctAnswer: true,
      },
    ],
    explanation: 'Pernyataan 1 Benar (sareng guru nganggen Basa Alus). Pernyataan 2 Salah (nenten dados megat baos anak lian ritatkala mabaos). Pernyataan 3 Benar (nganggen salam pembuka lan suwara tatas).',
  },

  // --- PGK KATEGORI 4: PUPUH SEKAR ALIT - PUPUH PUCUNG (SOAL 34) ---
  {
    id: 34,
    type: 'pgk_kategori',
    element: 'Peserta didik mampu melantunkan salah satu pupuh',
    topic: 'Struktur & Pelantunan Pupuh Pucung',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 6,
    indicator: 'Siswa dapat menentukan kebenaran tiga pernyataan tentang aturan Pada Lingsa dan pelantunan Pupuh Pucung.',
    image: `<svg viewBox="0 0 430 100" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="430" height="100" rx="12" fill="#f5f3ff" stroke="#c4b5fd" stroke-width="1.5"/>
      <text x="215" y="24" font-family="sans-serif" font-size="11" font-weight="bold" fill="#5b21b6" text-anchor="middle">PADA LINGSA PUPUH PUCUNG (SEKAR ALIT)</text>
      <rect x="24" y="38" width="382" height="32" rx="8" fill="#ffffff" stroke="#8b5cf6"/>
      <text x="215" y="59" font-family="monospace" font-size="14" font-weight="bold" fill="#4c1d95" text-anchor="middle">4u  •  8u  •  6a  •  8i  •  4u  •  8a</text>
      <text x="215" y="88" font-family="sans-serif" font-size="9.5" fill="#475569" text-anchor="middle">Contoh Carik 1: Bi-bi A-nu (4u) | Carik 2: la-mun pa-yu lu-as man-jus (8u)</text>
    </svg>`,
    text: 'Cingak bagan Pada Lingsa Pupuh Pucung ring ajeng, raris pilih BENAR utawi SALAH majeng nyabran pernyataan ring sor!',
    statements: [
      {
        id: 's1',
        text: 'Pupuh Pucung ngranjing ring tembang Sekar Alit sane madue 6 carik ring apada.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Carik kaping tiga Pupuh Pucung pada lingsannyane "6a", mateges 6 suku kata lan labuh suwara "a".',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Carik pamuput (kaping nem) Pupuh Pucung patutne labuh suwara "i" (8i).',
        correctAnswer: false,
      },
    ],
    explanation: 'Pernyataan 1 Benar (Pupuh Pucung = Sekar Alit, 6 carik). Pernyataan 2 Benar (6a = 6 kecap wanda, vokal akhir a). Pernyataan 3 Salah (carik kaping nem punika 8a, nenten 8i).',
  },

  // --- PGK KATEGORI 5: CECIMPEDAN (SOAL 35) ---
  {
    id: 35,
    type: 'pgk_kategori',
    element: 'Peserta didik mampu membuat salah satu contoh cecimpedan',
    topic: 'Identifikasi & Pembuatan Contoh Cecimpedan',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 6,
    indicator: 'Siswa dapat mengevaluasi kecocokan tiga contoh cecimpedan dan jawabannya sesuai ilustrasi.',
    image: cecimpedanBuahImg,
    text: 'Cingak gambar woh-wohan Bali ring ajeng, raris tentuang BENAR utawi SALAH nyabran pasangan cecimpedan lan cawisanne ring sor!',
    statements: [
      {
        id: 's1',
        text: 'Cecimpedan: "Apa ke di tengahne misi yeh, di sisinne misi daging putih, di jabane kulit keras?" — Cawisanne: Buah Nyuh (Kelapa).',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Cecimpedan: "Apa ke kulitne masesik, isinne putih manis, batunne selem?" — Cawisanne: Buah Nanas.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Cecimpedan ketah kakawitin antuk kruna pitaken "Apa ke..." tur kagenahang ring paribasa Bali.',
        correctAnswer: true,
      },
    ],
    explanation: 'Pernyataan 1 Benar (buah nyuh misi yeh, daging putih, kulit keras). Pernyataan 2 Salah (kulit masesik tur batu selem punika buah Salak, nenten Nanas). Pernyataan 3 Benar (cecimpedan nganggen "Apa ke...").',
  },
];
