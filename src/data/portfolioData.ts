import { SwotCategory } from '../types';

export const PERSONAL_INFO = {
  name: 'Yoga Dwi Pratama',
  title: 'Mahasiswa Informatika • Universitas PGRI Yogyakarta',
  location: 'Yogyakarta, Indonesia',
  institution: 'Universitas PGRI Yogyakarta',
  bio: 'Analisis SWOT diri sebagai bagian dari refleksi pengembangan pribadi — memetakan kekuatan dan kelemahan internal serta peluang dan ancaman eksternal untuk merancang langkah pengembangan diri yang lebih terarah.',
  aboutIntro:
    'Saya adalah mahasiswa Informatika di Universitas PGRI Yogyakarta. Halaman ini berisi analisis SWOT atas diri saya sendiri: sebuah pemetaan jujur tentang kekuatan yang saya miliki, kelemahan yang perlu diperbaiki, peluang yang dapat dimanfaatkan, serta ancaman yang perlu diantisipasi.',
  aboutPoints: [
    'Faktor internal: kekuatan & kelemahan',
    'Faktor eksternal: peluang & ancaman',
    'Refleksi jujur untuk pengembangan diri',
    'Landasan merancang strategi perbaikan',
  ],
  stats: [
    { value: '8', label: 'Kekuatan Teridentifikasi' },
    { value: '7', label: 'Kelemahan yang Disadari' },
    { value: '13', label: 'Peluang & Ancaman Eksternal' },
  ],
};

export const SWOT_DATA: SwotCategory[] = [
  {
    id: 'strengths',
    letter: 'S',
    title: 'Strengths',
    englishTitle: 'Kekuatan',
    subtitle: 'Faktor internal yang menjadi modal utama',
    description:
      'Kekuatan-kekuatan yang saya miliki dan dapat diandalkan dalam mengerjakan tugas, menghadapi masalah, serta berinteraksi dengan lingkungan sekitar.',
    items: [
      {
        title: 'Mampu bekerja dengan intensitas tinggi',
        description:
          'Saya mampu mengerjakan tugas atau proyek dengan intensitas yang tinggi, bahkan melebihi kemampuan teman-teman saya, terutama ketika saya memiliki ketertarikan terhadap tugas atau proyek tersebut.',
      },
      {
        title: 'Memiliki daya tahan dalam mengerjakan tugas',
        description:
          'Saya mampu bekerja dalam waktu yang panjang dan tetap fokus ketika mengerjakan sesuatu yang saya minati. Saya bahkan mampu mengurangi waktu istirahat atau begadang apabila diperlukan untuk menyelesaikan suatu proyek atau tugas.',
      },
      {
        title: 'Mampu mengerjakan beberapa tugas secara bersamaan',
        description:
          'Ketika menghadapi dua atau lebih tugas dalam waktu yang bersamaan, saya mampu membagi fokus dan pikiran sehingga beberapa pekerjaan dapat tetap dikerjakan tanpa terlalu mengganggu satu sama lain.',
      },
      {
        title: 'Mampu mengontrol emosi dan suasana hati',
        description:
          'Saya merasa memiliki kemampuan yang cukup baik dalam mengontrol emosi dan suasana hati. Ketika menghadapi tugas atau masalah, saya cenderung dapat tetap tenang selama saya sudah memahami permasalahan yang dihadapi.',
      },
      {
        title: 'Mampu memetakan masalah sebelum bertindak',
        description:
          'Sebelum mengerjakan suatu proyek atau tugas, saya biasanya berusaha memahami maksud, alur, dan tingkat kesulitan pekerjaan tersebut terlebih dahulu. Setelah mengetahui bagaimana cara menyelesaikannya, saya dapat mengerjakannya dengan lebih tenang.',
      },
      {
        title: 'Mampu beradaptasi dengan lingkungan',
        description:
          'Saya mampu menyesuaikan diri dan memosisikan diri ketika berada di lingkungan atau situasi yang berbeda, termasuk ketika berada di lingkungan yang tidak terlalu saya kenal.',
      },
      {
        title: 'Mampu memberikan solusi terhadap permasalahan',
        description:
          'Saya cukup mampu melihat permasalahan dan mencoba memberikan solusi ketika orang lain atau diri saya sendiri menghadapi suatu masalah.',
      },
      {
        title: 'Mudah berbaur dan memiliki rasa humor',
        description:
          'Saya memiliki sifat humoris dan cukup mampu berbaur dengan orang lain. Hal tersebut membantu saya dalam mencairkan suasana dan membangun interaksi dengan lingkungan sekitar.',
      },
    ],
  },
  {
    id: 'weaknesses',
    letter: 'W',
    title: 'Weaknesses',
    englishTitle: 'Kelemahan',
    subtitle: 'Faktor internal yang perlu diperbaiki',
    description:
      'Kelemahan-kelemahan yang saya sadari dalam diri saya dan berpotensi menghambat produktivitas, relasi, maupun pengembangan diri apabila tidak ditangani.',
    items: [
      {
        title: 'Sulit memulai pekerjaan ketika belum memiliki keinginan',
        description:
          'Saya cenderung sulit memulai suatu pekerjaan apabila belum memiliki keinginan atau dorongan untuk mengerjakannya. Hal ini dapat menyebabkan pekerjaan tertentu tertunda meskipun sebenarnya pekerjaan tersebut perlu segera diselesaikan.',
      },
      {
        title: 'Cenderung membutuhkan ketertarikan terhadap pekerjaan',
        description:
          'Kemampuan saya untuk bekerja dengan sangat intensif biasanya muncul ketika saya tertarik dengan proyek atau tugas tersebut. Sebaliknya, ketika suatu pekerjaan kurang menarik bagi saya, motivasi dan produktivitas saya dapat menurun.',
      },
      {
        title: 'Cenderung menarik diri ketika terlalu lelah',
        description:
          'Ketika sudah merasa sangat lelah, saya cenderung tidur lebih banyak dan mengurangi interaksi dengan orang lain. Kondisi tersebut terkadang berlangsung cukup lama sehingga dapat mengurangi aktivitas sosial saya.',
      },
      {
        title: 'Masih kurang dalam membangun relasi',
        description:
          'Saya merasa masih memiliki keterbatasan dalam membangun dan memperluas relasi. Padahal, relasi dapat memberikan berbagai pengalaman, informasi, maupun peluang baru.',
      },
      {
        title: 'Kurang fleksibel terhadap kegiatan spontan',
        description:
          'Saya lebih nyaman apabila suatu kegiatan sudah direncanakan sebelumnya. Jika diajak keluar atau melakukan kegiatan secara tiba-tiba tanpa adanya perencanaan sebelumnya, saya cenderung menolak.',
      },
      {
        title: 'Kurang aktif berkomunikasi ketika berada di rumah',
        description:
          'Ketika sudah berada di rumah, saya cenderung sulit dihubungi atau tidak terlalu aktif berkomunikasi dengan orang lain. Hal ini dapat membuat komunikasi atau hubungan dengan orang lain menjadi kurang intensif.',
      },
      {
        title: 'Penggunaan bahasa yang terlalu santai dalam bercanda',
        description:
          'Dalam lingkungan pertemanan, saya terkadang menggunakan kata-kata kasar ketika bercanda. Kebiasaan tersebut perlu dikontrol karena tidak semua lingkungan atau orang dapat menerima cara berkomunikasi seperti itu.',
      },
    ],
  },
  {
    id: 'opportunities',
    letter: 'O',
    title: 'Opportunities',
    englishTitle: 'Peluang',
    subtitle: 'Faktor eksternal yang dapat dimanfaatkan',
    description:
      'Peluang-peluang di sekitar saya — dari perkuliahan, teknologi, hingga hobi — yang dapat dimanfaatkan untuk mengembangkan kemampuan dan memperbaiki kekurangan.',
    items: [
      {
        title: 'Pengembangan kemampuan di bidang Informatika',
        description:
          'Sebagai mahasiswa Informatika, saya memiliki kesempatan untuk terus mengembangkan kemampuan dalam bidang pemrograman dan teknologi informasi sesuai dengan bidang yang saya pelajari.',
      },
      {
        title: 'Mempelajari pembuatan sistem informasi yang kompleks',
        description:
          'Saya memiliki tujuan untuk mampu membangun sistem informasi yang kompleks. Perkuliahan, tugas, proyek, dan skripsi dapat menjadi sarana untuk meningkatkan kemampuan tersebut secara bertahap.',
      },
      {
        title: 'Proyek dan skripsi dapat menjadi portofolio',
        description:
          'Berbagai proyek yang saya kerjakan selama kuliah dapat dikembangkan menjadi portofolio yang menunjukkan kemampuan saya kepada pihak lain, khususnya ketika nantinya memasuki dunia kerja.',
      },
      {
        title: 'Perkembangan teknologi AI sebagai alat bantu',
        description:
          'Perkembangan AI yang semakin pesat tidak hanya menjadi tantangan, tetapi juga dapat menjadi peluang untuk meningkatkan produktivitas, membantu proses belajar, mencari referensi, dan mengembangkan sistem yang lebih baik.',
      },
      {
        title: 'Membangun relasi melalui dunia profesional',
        description:
          'Kegiatan perkuliahan, proyek, magang, pekerjaan, komunitas, maupun kegiatan lainnya dapat dimanfaatkan untuk mulai memperluas relasi yang selama ini masih menjadi salah satu kekurangan saya.',
      },
      {
        title: 'Mengembangkan hobi bermain gitar',
        description:
          'Hobi bermain gitar yang saya miliki dapat dikembangkan menjadi sesuatu yang lebih produktif. Saya dapat mengembangkan kemampuan tersebut melalui konten digital, media sosial, kolaborasi, atau bahkan menggabungkannya dengan kemampuan di bidang Informatika.',
      },
      {
        title: 'Menggabungkan kemampuan Informatika dengan minat musik',
        description:
          'Saya memiliki peluang untuk menggabungkan kemampuan di bidang Informatika dengan hobi musik, misalnya dengan membuat aplikasi, website, atau sistem informasi yang berkaitan dengan musik.',
      },
    ],
  },
  {
    id: 'threats',
    letter: 'T',
    title: 'Threats',
    englishTitle: 'Ancaman',
    subtitle: 'Faktor eksternal yang perlu diantisipasi',
    description:
      'Ancaman-ancaman dari lingkungan luar yang berpotensi menghambat perkembangan saya apabila tidak disikapi dengan kesiapan untuk terus belajar dan beradaptasi.',
    items: [
      {
        title: 'Perkembangan teknologi yang sangat cepat',
        description:
          'Perkembangan teknologi, khususnya AI, berlangsung sangat cepat sehingga saya harus terus belajar dan mengikuti perkembangan agar kemampuan yang saya miliki tidak tertinggal.',
      },
      {
        title: 'Persaingan di bidang teknologi semakin tinggi',
        description:
          'Semakin banyak orang yang memiliki kemampuan di bidang Informatika dan teknologi membuat persaingan dalam mendapatkan pekerjaan maupun peluang profesional menjadi semakin tinggi.',
      },
      {
        title: 'Keterbatasan relasi dapat mengurangi peluang',
        description:
          'Relasi yang masih terbatas dapat menjadi hambatan dalam mendapatkan informasi mengenai peluang pekerjaan, proyek, pengalaman, maupun kesempatan untuk mengembangkan kemampuan.',
      },
      {
        title: 'Ketergantungan pada minat dapat memengaruhi produktivitas',
        description:
          'Karena saya lebih mudah bekerja ketika tertarik terhadap suatu tugas, pekerjaan yang kurang sesuai dengan minat dapat menjadi tantangan dan berpotensi membuat saya menunda pekerjaan.',
      },
      {
        title: 'Kelelahan dapat mengurangi aktivitas sosial',
        description:
          'Ketika terlalu lelah, saya cenderung mengurangi interaksi dengan orang lain. Jika berlangsung terlalu lama, hal tersebut dapat menghambat proses membangun dan mempertahankan relasi.',
      },
      {
        title: 'Perubahan kebutuhan dunia kerja',
        description:
          'Dunia kerja di bidang teknologi terus mengalami perubahan dan membutuhkan kemampuan yang semakin beragam. Oleh karena itu, saya perlu terus meningkatkan kemampuan teknis maupun kemampuan komunikasi dan kerja sama agar dapat menyesuaikan diri dengan kebutuhan tersebut.',
      },
    ],
  },
];
