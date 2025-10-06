document.addEventListener("DOMContentLoaded", function () {
  const postsContainer = document.getElementById("posts-container");

  // Data contoh postingan
  const posts = [
    {
      title: "Tuntutan Perbaikan Jalan di Desa Makmur",
      content:
        "Sudah hampir 2 tahun jalan utama menuju desa kami rusak parah. Mohon perhatian dari pemerintah daerah untuk segera diperbaiki. Akses warga jadi terhambat, terutama saat musim hujan.",
      author: "Warga_Peduli",
      date: "26 Sep 2025",
      likes: 124,
      comments: 32,
      shares: 15,
    },
    {
      title: "Aspirasi Mengenai Biaya Sekolah yang Semakin Tinggi",
      content:
        "Biaya administrasi dan SPP di beberapa sekolah swasta terus meningkat. Banyak orang tua yang kesulitan. Adakah kebijakan yang bisa meringankan beban kami?",
      author: "Orangtua_Bijak",
      date: "25 Sep 2025",
      likes: 256,
      comments: 78,
      shares: 40,
    },
    {
      title: "Perlunya Ruang Terbuka Hijau di Perkotaan",
      content:
        "Jakarta semakin sesak. Kita butuh lebih banyak taman dan ruang terbuka hijau untuk menjaga keseimbangan lingkungan dan kesehatan mental warga kota.",
      author: "Pejuang_Alam",
      date: "24 Sep 2025",
      likes: 89,
      comments: 14,
      shares: 8,
    },
  ];

  // Fungsi untuk membuat elemen postingan
  function createPostElement(post) {
    const postCard = document.createElement("div");
    postCard.classList.add("post-card");

    postCard.innerHTML = `
            <div class="post-header">
                <h3 class="post-title">${post.title}</h3>
                <p class="post-meta">oleh ${post.author} • ${post.date}</p>
            </div>
            <p class="post-content">${post.content}</p>
            <div class="post-actions">
                <button>❤️ ${post.likes}</button>
                <button>💬 ${post.comments}</button>
                <button>🔗 ${post.shares}</button>
            </div>
        `;

    return postCard;
  }

  // Tampilkan semua postingan ke halaman
  posts.forEach((post) => {
    const postElement = createPostElement(post);
    postsContainer.appendChild(postElement);
  });
});
