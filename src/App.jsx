
function App() {

  return (
    <>
      <div className="container">
        {/* Header */}
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0">
            <a href="/" className="d-inline-flex align-items-center link-body-emphasis text-decoration-none">
              <i className="fa-solid fa-book fa-lg" style={{ color: "#74C0FC" }}></i>
              <span className="ms-2 fs-4">bookstore</span>
            </a>
          </div>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#" className="nav-link px-2">Home</a></li>
            <li><a href="#" className="nav-link px-2">Book</a></li>
            <li><a href="#" className="nav-link px-2">Team</a></li>
            <li><a href="#" className="nav-link px-2">Contact</a></li>
          </ul>

          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">Login</button>
            <button type="button" className="btn btn-primary">Register</button>
          </div>
        </header>

        {/* Hero */}
        <div className="container my-5">
          <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
              <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Atomic Habits: Perubahan Kecil yang Memberikan Hasil Luar Biasa.</h1>
              <p className="lead">Cara mudah dan terbukti untuk membentuk kebiasaan baik dan menghilangkan kebiasaan buruk.</p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Buy Now</button>
                <button type="button" className="btn btn-outline-secondary btn-lg px-4">Detail</button>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                <img className="rounded-lg-3" src="https://cdn.gramedia.com/uploads/items/9786020633176_.Atomic_Habit.jpg" alt="" width="640"/>
            </div>
          </div>
        </div>

        {/* Product List */}
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Best Seller</h1>
              <p className="lead text-body-secondary">Discover the books that are most read and bought right now. A curated selection of the most popular and highly recommended titles. Don't miss out on the favorite titles of other readers!</p>
              <p>
                <a href="#" className="btn btn-primary my-2 m-2">Views</a>
                <a href="#" className="btn btn-secondary my-2">Other Book</a>
              </p>
            </div>
          </div>
        </section>

        <div className="album py-5 bg-body-tertiary">
          <div className="container">

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div className="col">
                <div className="card shadow-sm">
                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Your Image Description" preserveAspectRatio="xMidYMid slice">
                  <title>Your Image Title</title>
                  <image href="https://cdn.gramedia.com/uploads/items/9786020607275_Teardrop1_Air-Mata.jpg" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" />
                </svg>
                  <div className="card-body">
                    <p className="card-text">Eureka tidak bisa bangkit dari kepedihan karena kepergian ibunya. Sang ibu meninggal saat mereka mengalami kecelakaan yang membuat ibu dan anak itu tenggelam ke lautan yang dalam.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Buy</button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Your Image Description" preserveAspectRatio="xMidYMid slice">
                  <title>Your Image Title</title>
                  <image href="https://cdn.gramedia.com/uploads/items/The_Song_of_Achilles_cov.jpg" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" />
                </svg>
                  <div className="card-body">
                    <p className="card-text">Yunani pada zaman para pahlawan. Patroclus, seorang pangeran muda yang kikuk, diasingkan ke istana Raja Peleus dan putranya yang sempurna, Achilles.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Buy</button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Your Image Description" preserveAspectRatio="xMidYMid slice">
                  <title>Your Image Title</title>
                  <image href="https://cdn.gramedia.com/uploads/items/PK_Cover-Bungo_Stray_Dogs-01-INA.jpg" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" />
                </svg> 
                  <div className="card-body">
                    <p className="card-text">Doppo Kunikida adalah seorang detektif yang idealis sekaligus kaku dari “Biro Detektif Bersenjata”, sebuah biro dengan keahlian menyelesaikan kasus-kasus berbahaya.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Buy</button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card shadow-sm">
                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Your Image Description" preserveAspectRatio="xMidYMid slice">
                  <title>Your Image Title</title>
                  <image href="https://cdn.gramedia.com/uploads/items/9786024811372_Cover_Teh_dan.jpg" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" />
                </svg>
                  <div className="card-body">
                    <p className="card-text">Dari penulis karya sastra pemenang Kusala Sastra Khatulistiwa 2014 kategori prosa., Semua untuk Hindia, hadir kembali tiga belas cerita pendek berlatar kolonial.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Buy</button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Your Image Description" preserveAspectRatio="xMidYMid slice">
                  <title>Your Image Title</title>
                  <image href="https://cdn.gramedia.com/uploads/items/9786023857333_The-Son-Of-Neptune---The-Heroes-Of-Olympus-2-Republish.jpg" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" />
                </svg>                  
                  <div className="card-body">
                    <p className="card-text">Saat terbangun dari tidur panjang, Percy hanya bisa mengingat satu nama lain Annabeth. Dia tidak bisa mengingat asal-usulnya ataupun penyebab banyak monster mengejar dan ingin membunuhnya.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Buy</button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Your Image Description" preserveAspectRatio="xMidYMid slice">
                  <title>Your Image Title</title>
                  <image href="https://cdn.gramedia.com/uploads/items/9786023853076_charlie_and_chocolate_factory.jpg" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" />
                </svg>
                  <div className="card-body">
                    <p className="card-text">Aku, Willy Wonka, telah memutuskan untuk mengizinkan lima anak mengunjungi pabrikku. kelima anak beruntung ini akan mendapatkan kesempatan untuk melihat semua rahasia dan sihir di dalamnya.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Buy</button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card shadow-sm">
                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Your Image Description" preserveAspectRatio="xMidYMid slice">
                  <title>Your Image Title</title>
                  <image href="https://cdn.gramedia.com/uploads/items/9786020398525_The-Tale-of-Shikanoko1_Kaisar-Delapan-Pulau-Emperor-of-the-Eight-Islands.jpg" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" />
                </svg>
                  <div className="card-body">
                    <p className="card-text">Sudah bertahun-tahun klan Kakizuki dan Miboshi berseteru, dan sekarang akhirnya berhadapan langsung. Kaisar hampir wafat dan masing-masing klan mendukung putra yang berlainan untuk menjadi penerus takhta.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Buy</button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Your Image Description" preserveAspectRatio="xMidYMid slice">
                  <title>Your Image Title</title>
                  <image href="https://cdn.gramedia.com/uploads/items/9786237191032.jpg" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" />
                </svg>
                  <div className="card-body">
                    <p className="card-text">Alvaro Ganendra Pratama, seorang cowok “Most Wanted” yang selalu berhasil mencuri hati setiap siswi di SMA Nasional yang melihatnya. Dia bukanlah seorang bad boy, melainkan hanya ketua Tim Futsal.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Buy</button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Your Image Description" preserveAspectRatio="xMidYMid slice">
                  <title>Your Image Title</title>
                  <image href="https://cdn.gramedia.com/uploads/items/9786023853564_the-bliss-bak.jpg" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" />
                </svg>
                  <div className="card-body">
                    <p className="card-text">Dua hal yang tak pernah Rose bayangkan: terbang ke Italia demi menyelamatkan sang bibi yang diculik Count Caruso dan menyamar menjadi anggota No Direction, boy band paling tenar di dunia..</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Buy</button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="container">
          <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
              <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
              <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Features</a></li>
              <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Pricing</a></li>
              <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">FAQs</a></li>
              <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li>
            </ul>
            <p className="text-center text-body-secondary">&copy; 2025 NF Academy</p>
          </footer>
        </div>
      </div>
    </>
  )
}

export default App
