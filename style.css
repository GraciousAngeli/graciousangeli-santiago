/* Reset and base */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Montserrat', sans-serif;
  background: transparent !important;
  color: #222;
  line-height: 1.6;
  overflow-x: hidden;
  position: relative;
}

body::before {
  display: none !important;
}

/* Optional: fade out main content for smoother tab transitions */
main, .container, .contacts-section, .about-section, .services-section, .partners-section, .info-section {
  transition: opacity 0.25s cubic-bezier(.4,0,.2,1);
}
body.page-transitioning main,
body.page-transitioning .container,
body.page-transitioning .contacts-section,
body.page-transitioning .about-section,
body.page-transitioning .services-section,
body.page-transitioning .partners-section,
body.page-transitioning .info-section {
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
}

/* Container and layout */
.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 10;
}
.centered-content {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
}

/* Softer, more classic rounded shapes and more padding for cards/sections */
.container, .about-card, .service-card, .partner-text, .contacts-section, .info-section {
  border-radius: 2rem;
  box-shadow: 0 8px 32px rgba(8, 8, 8, 0.1), 0 1.5px 8px rgba(11, 11, 11, 0.08);
  background: rgba(255,255,255,0.95);
  backdrop-filter: blur(2px);
  padding: 2.5rem 2rem;
}

/* Remove white background shape from hero */
.hero-section.destino-hero {
  background: none !important;
  border-radius: 0 !important;
  box-shadow: none !important;
}

/* Glassmorphism effect for cards and welcome section */
.container, .about-card, .service-card, .partner-text, .contacts-section, .info-section, .destino-welcome .container {
  background: rgba(255,255,255,0.18) !important;
  box-shadow: 0 8px 32px rgba(8, 8, 8, 0.18), 0 1.5px 8px rgba(11, 11, 11, 0.10) !important;
  backdrop-filter: blur(12px) saturate(160%) !important;
  -webkit-backdrop-filter: blur(12px) saturate(160%) !important;
  border-radius: 1.5rem !important;
  border: 1.5px solid rgba(255,255,255,0.22) !important;
}

/* Make sure text is readable on glass cards */
.about-card, .service-card, .partner-text, .contacts-section, .info-section, .destino-welcome .container {
  color: #222 !important;
}

/* Add extra padding for cards and sections on mobile */
@media (max-width: 768px) {
  .container, .about-card, .service-card, .partner-text, .contacts-section, .info-section {
    padding: 1.5rem 1rem;
  }
}

/* Header - raise navbar slightly and fix logo hitbox/alignment */
.header {
  width: 100vw !important;
  max-width: 100vw !important;
  left: 0 !important;
  right: 0 !important;
  margin: 0 !important;
  position: fixed !important;
  top: 0 !important;
  z-index: 2000 !important;
  min-height: 56px !important;
  height: 56px !important;
  padding: 0 !important;
  /* Glassmorphism effect for header */
  background: rgba(255,255,255,0.18) !important;
  box-shadow: 0 8px 32px rgba(8, 8, 8, 0.18), 0 1.5px 8px rgba(11, 11, 11, 0.10) !important;
  backdrop-filter: blur(12px) saturate(160%) !important;
  -webkit-backdrop-filter: blur(12px) saturate(160%) !important;
  border-radius: 0 0 1.5rem 1.5rem !important;
  border-bottom: 1.5px solid rgba(255,255,255,0.22) !important;
}
.header .header-container {
  background: transparent !important;
  border-radius: 0 0 1.5rem 1.5rem !important;
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  flex-wrap: nowrap !important;
}
@media (max-width: 900px) {
  .header {
    min-height: 44px !important;
    height: 44px !important;
    border-radius: 0 0 1.2rem 1.2rem !important;
  }
  .header .header-container {
    border-radius: 0 0 1.2rem 1.2rem !important;
  }
}

/* --- NAVBAR LOGO & NAME ALIGNMENT FIX --- */
.logo {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  font-weight: 700;
  font-size: 1.08rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #fff;
  background: none;
  box-shadow: none;
  border-radius: 0;
  padding: 0 0.1rem 0 0.1rem;
  height: 38px;
  line-height: 38px;
  margin-left: 2vw; /* reduced margin-left to prevent overlap */
  position: relative;
  z-index: 2;
}
.logo img {
  height: 28px;
  width: 28px;
  min-width: 28px;
  min-height: 28px;
  object-fit: contain;
  filter: drop-shadow(0 0 2px rgba(12, 12, 12, 0.6));
  background: none;
  border-radius: 50%;
  margin-right: 0.15rem;
  margin-bottom: 0;
  display: block;
}
.logo span {
  display: inline-block;
  vertical-align: middle;
  line-height: 1;
  padding-top: 2px;
  white-space: nowrap;
  max-width: 200px;
  width: 100%;
  overflow: visible;
  font-size: 1.08rem;
  letter-spacing: 1.2px;
}

@media (max-width: 900px) {
  .logo span {
    max-width: 120px;
    font-size: 0.98rem;
    letter-spacing: 1px;
  }
}

/* Fix logo link hitbox so it doesn't overlap nav links */
.logo {
  max-width: 260px;
  width: auto;
}
.logo:hover, .logo:focus {
  text-decoration: none;
}

/* Nav links alignment */
.nav {
  flex: 1;
  display: flex;
  align-items: center;
  height: 100%;
  gap: 2.2rem;
  justify-content: flex-end;
  background: none;
  box-shadow: none;
}

.nav-links {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 2.2rem;
  margin-right: 2vw; /* reduced margin-right to balance logo margin */
  height: 100%;
  padding: 0;
  background: none;
  box-shadow: none;
  border-radius: 0;
  position: relative;
  z-index: 1;
}

.nav-links {
  gap: 1.2rem;
  margin-right: 6vw !important; /* match logo margin-left for symmetry */
}

.nav-links li {
  display: flex !important;
  align-items: center !important;
  height: 100%;
}

.nav-links li a {
  display: flex !important;
  align-items: center !important;
  height: 56px !important;
  line-height: 56px !important;
  padding: 0 0.7rem !important;
  background: none !important;
  box-shadow: none !important;
  border-radius: 0 !important;
  color: #fff;
  font-size: 1.05rem;
  transition: color 0.2s, border-bottom 0.2s;
  border: none;
  border-bottom: 2.5px solid transparent;
}

/* --- Ensure nav bar text font is consistent for all tabs --- */
.nav-links li a {
  font-family: 'Montserrat', sans-serif !important;
  font-weight: 700 !important;
  font-size: 1.05rem !important;
  letter-spacing: 1px !important;
  text-transform: uppercase !important;
}
@media (max-width: 900px) {
  .nav-links li a {
    font-size: 0.98rem !important;
    letter-spacing: 0.5px !important;
  }
}

.nav-links li a.active, .nav-links li a:hover {
  color: #ffcc33;
  background: none;
  box-shadow: none;
  border-bottom: 2.5px solid #ffcc33;
}

.nav-links li a::after,
.nav-links li a.active::after {
  display: none;
}

@media (max-width: 768px) {
  .nav-links {
    margin-right: 4vw !important; /* slightly less on mobile for space */
    margin-left: 0 !important;
  }
}

/* Remove extra nav bar shapes and gradients on mobile */
@media (max-width: 768px) {
  nav ul {
    width: 220px !important;
    max-width: none !important;
    min-width: 0 !important;
    max-height: 80vh !important;
    overflow-y: auto !important;
    padding: 0.5rem 0.2rem !important;
    margin: 0 !important;
    background: none !important;
    box-shadow: none !important;
    border-radius: 0 0 0 8px !important;
    opacity: 1;
    visibility: visible;
    top: 50px !important;
    right: 0 !important;
  }
  nav ul.show {
    width: 220px !important;
    max-width: none !important;
    min-width: 0 !important;
    max-height: 80vh !important;
    overflow-y: auto !important;
    padding: 0.5rem 0.2rem !important;
    margin: 0 !important;
    background: none !important;
    box-shadow: none !important;
    border-radius: 0 0 0 8px !important;
    opacity: 1;
    visibility: visible;
  }
  .nav-links {
    gap: 0.5rem;
    flex-direction: column;
    align-items: flex-start;
  }
  .nav-links li {
    margin: 0.5rem 0;
  }
  .nav-links li a {
    font-size: 1rem;
    padding: 0.4rem 0.75rem;
    color: #fff;
    background: none !important;
    border-radius: 0 !important;
    min-width: unset;
    text-align: left;
    height: auto;
    line-height: normal;
    display: block;
    word-break: normal;
  }
}

/* Hero Section */
.hero-section, .front-hero-section {
  background: linear-gradient(135deg, rgba(255,255,255,0.85), rgba(195,207,226,0.85)), url('C:/Users/LENOVO/OneDrive/Videos/Website/Logo/Front BG.JPG') center/cover no-repeat;
  color: #003366;
  padding: 6rem 0;
  min-height: 80vh;
  border-radius: 0 0 80px 80px / 40px 40px 0 0;
  box-shadow: 0 8px 30px rgba(3,86,169,0.15);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.hero-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  flex-wrap: wrap;
  position: relative;
  z-index: 10;
}

.hero-text {
  flex: 1 1 400px;
  font-size: 1.5rem;
  opacity: 0;
  animation: slideInLeft 1s ease forwards;
}

.hero-text h1 {
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 2rem;
  color: #0356a9;
  text-shadow: 0 0 10px rgba(255,255,255,0.7);
}

.hero-text p {
  margin-bottom: 2rem;
  color: #003366;
  font-size: 1.5rem;
}

.btn-primary {
  background-color: #ff7f00;
  color: #fff;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.3rem;
  font-weight: 700;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 102, 0, 0.3);
}

.btn-primary:hover {
  background-color: #e67300;
}

.hero-image {
  flex: 1 1 300px;
  text-align: center;
  animation: slideInRight 1s ease forwards;
  opacity: 0;
}

.hero-image img {
  max-width: 100%;
  height: auto;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(3,86,169,0.15);
}

/* Modern hero section inspired by reference */
.hero-section.modern-hero {
  position: relative;
  background: none;
  min-height: 520px;
  padding: 0 0 0 0;
  display: flex;
  align-items: flex-end;
  overflow: visible;
}
.hero-bg-svg {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  z-index: 0;
  pointer-events: none;
  min-height: 420px;
}
.hero-bg-svg svg {
  width: 100%;
  height: 100%;
  display: block;
}

.modern-hero-content {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  min-height: 420px;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
}

.modern-hero-text {
  flex: 1 1 420px;
  max-width: 540px;
  color: #05388a;
  padding-left: 2.5rem;
  padding-right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.modern-hero-text h1 {
  font-size: 3.2rem;
  font-weight: 900;
  margin-bottom: 1.2rem;
  color: #05388a;
  letter-spacing: 1.5px;
  text-shadow: 0 2px 12px #e6f0ff;
}
.hero-sub {
  font-size: 1.35rem;
  color: #3440e2;
  margin-bottom: 2.2rem;
  font-weight: 500;
  line-height: 1.5;
}
.modern-cta {
  background: linear-gradient(90deg, #3440e2, #4756ff);
  color: #fff;
  font-size: 1.18rem;
  font-weight: 700;
  border-radius: 2rem;
  padding: 0.9rem 2.8rem;
  box-shadow: 0 4px 18px rgba(52,64,226,0.13);
  border: none;
  transition: background 0.3s, transform 0.2s, box-shadow 0.2s;
}
.modern-cta:hover {
  background: linear-gradient(90deg, #4756ff, #3440e2);
  transform: translateY(-2px) scale(1.04);
  box-shadow: 0 8px 32px rgba(52,64,226,0.18);
}

.modern-hero-image {
  flex: 1 1 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 260px;
  min-height: 260px;
  padding-right: 2.5rem;
}
.modern-hero-image img {
  width: 320px;
  height: 320px;
  object-fit: contain;
  border-radius: 50%;
  box-shadow: 0 8px 32px rgba(52,64,226,0.10);
  background: #fff;
  border: 8px solid #e6f0ff;
}

@media (max-width: 900px) {
  .modern-hero-content {
    flex-direction: column-reverse;
    gap: 1.5rem;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
  .modern-hero-text {
    padding-left: 1rem;
    padding-right: 1rem;
    text-align: center;
    align-items: center;
  }
  .modern-hero-image {
    padding-right: 0;
    margin-bottom: 1.5rem;
  }
  .modern-hero-image img {
    width: 200px;
    height: 200px;
  }
}

/* Destino-style hero section */
.hero-section.destino-hero {
  position: relative;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 0;
  margin: 0;
}
.hero-bg-image {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  /* background image removed to be set inline in index.html */
  background: none;
  z-index: 1;
  width: 100%;
  height: 100%;
  filter: brightness(0.6) saturate(1.1);
  transition: filter 0.3s;
}
.hero-overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: linear-gradient(120deg, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.2) 100%);
  z-index: 2;
}
.hero-center-content {
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  color: #fff;
  padding: 3rem 1rem 2rem 1rem;
}
.hero-logo {
  width: 110px;
  height: 110px;
  margin-bottom: 1.5rem;
  border-radius: 50%;
  box-shadow: 0 4px 24px rgba(0,0,0,0.18);
  background: #fff;
  object-fit: cover;
}
.destino-headline {
  font-family: 'Playfair Display', serif;
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  letter-spacing: 1px;
  text-shadow: 0 2px 16px rgba(0,0,0,0.18);
}
.destino-subheadline {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
  margin-bottom: 2rem;
  color: #f3f3f3;
  text-shadow: 0 1px 8px rgba(0,0,0,0.18);
}
.btn-primary.destino-cta {
  font-size: 1.1rem;
  padding: 0.85rem 2.5rem;
  border-radius: 30px;
  background: linear-gradient(90deg, #ffb347 0%, #ffcc33 100%);
  color: #222;
  font-weight: 700;
  border: none;
  box-shadow: 0 2px 12px rgba(0,0,0,0.10);
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
  cursor: pointer;
  outline: none;
}
.btn-primary.destino-cta:hover {
  background: linear-gradient(90deg, #ffcc33 0%, #ffb347 100%);
  color: #111;
  box-shadow: 0 4px 24px rgba(0,0,0,0.18);
}

/* Transparent header overlay for hero */
.header {
  position: absolute;
  top: 0; left: 0; right: 0;
  background: rgba(0,0,0,0.18);
  box-shadow: none;
  z-index: 10;
  transition: background 0.3s;
}
.header .header-container {
  background: transparent;
}

/* Welcome section below hero */
.destino-welcome {
  background: #fff;
  padding: 3rem 0 2.5rem 0;
  text-align: center;
}
.destino-welcome h2 {
  font-family: 'Playfair Display', serif;
  font-size: 2.1rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 1rem;
}
.destino-welcome-text {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem;
  color: #444;
  max-width: 700px;
  margin: 0 auto;
}

/* --- NAVBAR OVERLAP FIX FOR ALL PAGES --- */
main {
  padding-top: 70px !important;
}

.hero-section.destino-hero {
  margin-top: -70px !important;
}

@media (max-width: 600px) {
  .logo {
    height: 36px;
    font-size: 0.98rem;
    line-height: 36px;
  }
  .logo img {
    height: 26px;
    width: 26px;
    min-width: 26px;
    min-height: 26px;
  }
  main {
    padding-top: 56px !important;
  }
  .hero-section.destino-hero {
    margin-top: -56px !important;
  }
}

/* Info Sections */
.info-section {
  margin: 4rem 0;
  background: linear-gradient(135deg, #e2e1e1 0%, #f5f7fa 100%);
  color: #003366;
  padding: 3rem 2rem;
  border-radius: 30px;
  font-family: 'Montserrat', sans-serif;
  box-shadow: 0 8px 30px rgba(3,86,169,0.08);
  animation: fadeIn 1.5s ease forwards;
  opacity: 0;
  font-size: 1.3rem;
}

.info-section h2 {
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: #ff6600;
  text-align: center;
  text-shadow: 0 0 8px rgba(255, 102, 0, 0.2);
}

.info-content p {
  font-size: 1.15rem;
  line-height: 1.6;
  text-align: left;
  max-width: 900px;
  margin: 0 auto 1.5rem auto;
}

.info-section h2 {
  font-size: 2.8rem;
  margin-bottom: 1rem;
  text-align: center;
  letter-spacing: 1.5px;
  font-weight: 700;
}

.info-content p:last-child {
  margin-bottom: 0;
}

/* About Section */
.about-section {
  margin: 4rem 0;
  padding: 2rem;
  border-radius: 20px;
  background: linear-gradient(135deg, #003366cc 0%, #0055a5cc 100%);
  color: #222;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 51, 102, 0.6);
  animation: fadeIn 1.5s ease forwards;
  opacity: 0;
}

.about-section h2 {
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #ff6600;
  text-align: center;
  text-shadow: 0 0 8px rgba(255, 102, 0, 0.8);
}

.about-content {
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.1rem;
  line-height: 1.6;
  text-align: left;
  padding: 0 1rem;
}

/* About Us cards */
.about-card {
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 18px rgba(0,51,102,0.08);
  padding: 2rem 1.5rem;
  margin-bottom: 2rem;
  color: #222;
  transition: transform 0.3s cubic-bezier(.25,.8,.25,1), box-shadow 0.3s;
}

.about-card:hover {
  transform: translateY(-8px) scale(1.03) rotate(-1deg);
  box-shadow: 0 16px 40px rgba(255, 102, 0, 0.18);
}

.about-card h3 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #003366;
  font-weight: 700;
  text-shadow: 0 0 6px rgba(0, 51, 102, 0.8);
}

.about-card p {
  margin-bottom: 1rem;
  line-height: 1.5;
  font-size: 1.2rem;
}

.about-card {
  padding: 3rem 2rem;
}

.about-card h3 {
  font-size: 2rem;
}

/* Services Section */
.services-section {
  margin: 4rem 0;
  text-align: center;
}

.services-section h2 {
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #003366;
  text-shadow: 0 0 6px rgba(0, 51, 102, 0.8);
}

.section-intro {
  font-size: 1.15rem;
  max-width: 700px;
  margin: 0 auto 2rem auto;
  color: #f0f0f0;
  line-height: 1.5;
  font-weight: 400;
}

.services-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.service-card {
  /* background-color: white; */
  background: transparent;
  border-radius: 20px;
  box-shadow: none;
  padding: 1.5rem;
  transition: transform 0.3s cubic-bezier(.25,.8,.25,1), box-shadow 0.3s cubic-bezier(.25,.8,.25,1), background 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;
}

/* Uniform service card image size (match video card size) */
.service-card img, .service-image, .service-card video.service-video {
  width: 320px !important;
  height: 180px !important;
  object-fit: cover !important;
  background-color: #fff;
  border-radius: 1.2rem;
  margin-bottom: 1rem;
  display: block;
  box-shadow: 0 2px 12px rgba(0,0,0,0.10);
  transition: box-shadow 0.3s cubic-bezier(.25,.8,.25,1), filter 0.3s cubic-bezier(.25,.8,.25,1);
}

/* Fix for contacts background video layering */
#contacts-bg-video {
  position: fixed !important;
  top: 0;
  left: 0;
  width: 100vw !important;
  height: 100vh !important;
  object-fit: cover !important;
  z-index: 0 !important;
  pointer-events: none !important;
}

.service-card:hover img,
.service-card:hover .service-image,
.service-card:hover video.service-video {
  box-shadow: 0 16px 40px rgba(255, 102, 0, 0.18), 0 2px 12px rgba(0,0,0,0.10);
  filter: brightness(1.08) saturate(1.1);
}

@media (max-width: 600px) {
  .service-card img, .service-image, .service-card video.service-video {
    width: 100% !important;
    min-width: 0;
    height: 140px !important;
    border-radius: 0.8rem;
  }
}

.service-card:hover {
  transform: translateY(-10px) scale(1.03);
  box-shadow: 0 16px 40px rgba(255, 102, 0, 0.18), 0 2px 12px rgba(0,0,0,0.10);
  background: rgba(255,255,255,0.32);
  border: 1.5px solid #ff6600;
}

.service-card img {
  width: 80px;
  height: 80px;
  margin-bottom: 1rem;
}

.service-card h3 {
  color: #003366;
  font-weight: 700;
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 6px rgba(0, 51, 102, 0.8);
}

.service-card p {
  font-size: 1rem;
  color: #333;
  line-height: 1.4;
  margin: 0;
  text-align: justify;
}

/* Partners Section */
.partners-section {
  margin: 4rem 0;
  text-align: center;
}

.partners-section h2 {
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #003366;
  text-shadow: 0 0 6px rgba(0, 51, 102, 0.8);
}

.partners-logos {
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.partner-logo img {
  max-height: 100px;
  max-width: 180px;
  object-fit: contain;
  filter: drop-shadow(0 0 4px rgba(0,0,0,0.3));
  transition: transform 0.3s ease;
  border-radius: 12px;
}

.partner-logo img:hover {
  transform: scale(1.1);
  filter: drop-shadow(0 0 10px rgba(255, 102, 0, 0.8));
}

.partner-text {
  max-width: 900px;
  margin: 0 auto;
  background: linear-gradient(135deg, #003366cc 0%, #0055a5cc 100%);
  color: #222;
  padding: 1.5rem;
  border-radius: 20px;
  font-size: 1rem;
  line-height: 1.5;
  text-align: justify;
  box-shadow: 0 8px 30px rgba(0, 51, 102, 0.6);
}

/* Contacts Section */
.contacts-section {
  font-family: 'Montserrat', sans-serif !important;
  font-size: 1.08rem !important;
  font-weight: 500 !important;
  color: #222 !important;
  max-width: 1100px;
  margin: 4rem auto;
  padding: 2.5rem 2rem;
  border-radius: 1.5rem !important;
  box-shadow: 0 8px 32px rgba(8, 8, 8, 0.18), 0 1.5px 8px rgba(11, 11, 11, 0.10) !important;
  background: rgba(255,255,255,0.18) !important;
  text-align: center;
}
.contacts-main {
  display: flex;
  gap: 2.5rem;
  justify-content: center;
  align-items: flex-start;
  max-width: 900px;
  margin: 3.5rem auto 2.5rem auto;
  padding: 0;
  flex-wrap: nowrap;
  position: relative;
  z-index: 10;
  background: transparent !important;
}
.contacts-info-card, .contacts-form-card {
  max-width: 420px;
  min-width: 260px;
  width: 100%;
  margin: 0 auto 1.2rem auto;
  box-sizing: border-box;
  align-items: center;
  text-align: center;
  padding: 2.2rem 2rem 2.2rem 2.2rem;
}

/* --- MOBILE OVERRIDES (unchanged) --- */
@media (max-width: 900px) {
  .contacts-section {
    max-width: 98vw !important;
    padding: 1.5rem 1.2rem !important;
    margin: 2rem auto 1.5rem auto !important;
  }
  .contacts-main {
    flex-direction: column;
    max-width: 98vw !important;
    padding: 0 !important;
    align-items: center !important;
    justify-content: center !important;
    width: 100% !important;
  }
  .contacts-info-card, .contacts-form-card {
    max-width: 420px !important;
    width: 100% !important;
    margin: 0 auto 1.2rem auto !important;
    box-sizing: border-box !important;
    align-items: center !important;
    text-align: center !important;
    padding-left: 0.5rem !important;
    padding-right: 0.5rem !important;
  }
}
@media (max-width: 600px) {
  .contacts-section {
    max-width: 100vw !important;
    padding: 0.5rem 0 !important;
    margin: 0 auto !important;
    background: none !important;
    box-shadow: none !important;
  }
  .contacts-main {
    flex-direction: column !important;
    align-items: center !important;
    justify-content: flex-start !important;
    gap: 1.2rem !important;
    max-width: 100vw !important;
    width: 100vw !important;
    padding: 0 !important;
    margin: 0 auto !important;
  }
  .contacts-info-card, .contacts-form-card {
    width: 92vw !important;
    max-width: 98vw !important;
    min-width: 0 !important;
    margin: 0 auto 1.2rem auto !important;
    border-radius: 1.2rem !important;
    box-shadow: 0 4px 24px rgba(5,56,138,0.10) !important;
    background: #fff !important;
    padding: 1.2rem 1rem !important;
    align-items: stretch !important;
    text-align: left !important;
    box-sizing: border-box !important;
  }
  .contacts-info-card h2, .contacts-form-card h3 {
    text-align: left !important;
    margin-left: 0.1rem !important;
  }
}
.contacts-info-card {
  background: rgba(255,255,255,0.92);
  border-radius: 1.2rem;
  box-shadow: 0 4px 24px rgba(5,56,138,0.10);
  padding: 2.2rem 2rem 2.2rem 2.2rem;
  color: #05388a;
  min-width: 260px;
  max-width: 340px;
  flex: 1 1 320px;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  font-size: 1.05rem;
  border: 1.5px solid #e3eaf7;
  text-align: left;
  align-items: flex-start;
}
.contacts-info-card h2 {
  font-size: 1.4rem;
  color: #05388a;
  margin-bottom: 0.7rem;
  font-weight: 700;
}
.contacts-info-list {
  list-style: none;
  padding: 0;
  margin: 0 0 1.2rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}
.contacts-info-list li {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  color: #05388a;
  font-size: 1.05rem;
  align-items: flex-start;
}
.contacts-info-list .icon {
  font-size: 1.2rem;
  color: #1976d2;
}
.business-hours {
  margin: 0.5rem 0 1.2rem 0;
}
.business-hours h4 {
  color: #1976d2;
  font-size: 1.08rem;
  margin-bottom: 0.3rem;
}
.business-hours table {
  width: 100%;
  font-size: 0.98rem;
  color: #05388a;
  margin-left: 0;
}
.business-hours td {
  padding: 0.12rem 0.3rem;
}
.location-info {
  background: #eaf2fb;
  border-radius: 8px;
  padding: 0.7rem 1rem;
  font-size: 0.98rem;
  color: #05388a;
  margin-bottom: 0.7rem;
  border-left: 4px solid #1976d2;
}
.contacts-form-card {
  background: rgba(255,255,255,0.98);
  border-radius: 1.2rem;
  box-shadow: 0 4px 24px rgba(5,56,138,0.10);
  padding: 2.2rem 2.2rem 2.2rem 2rem;
  color: #05388a;
  flex: 1 1 380px;
  min-width: 260px;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border: 1.5px solid #e3eaf7;
}
.contacts-form-card h3 {
  margin-bottom: 1.2rem;
  color: #05388a;
  font-size: 1.25rem;
  font-weight: 700;
}
.contacts-form {
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
}
.contacts-form label {
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.2rem;
  color: #1976d2;
}
.contacts-form input,
.contacts-form textarea {
  padding: 0.7rem 0.9rem;
  border: 1.5px solid #b5c6e0;
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  background: #f7faff;
  resize: none;
  color: #05388a;
}
.contacts-form input:focus,
.contacts-form textarea:focus {
  outline: none;
  border-color: #1976d2;
  background: #eaf2fb;
}
.contacts-form textarea {
  min-height: 90px;
  max-height: 200px;
}
.contacts-form button {
  background: #1976d2;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.8rem 0;
  font-size: 1.1rem;
  font-weight: 600;
  margin-top: 0.5rem;
  cursor: pointer;
  transition: background 0.2s;
  box-shadow: 0 2px 8px rgba(25,118,210,0.08);
}
.contacts-form button:hover {
  background: #1256a2;
}
.get-directions {
  display: flex;
  gap: 1rem;
  margin: 1.2rem 0 0.5rem 0;
}
.get-directions a {
  flex: 1 1 120px;
  background: #1976d2;
  color: #fff;
  border-radius: 8px;
  padding: 0.7rem 0;
  text-align: center;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none !important;
  transition: background 0.2s;
  box-shadow: 0 2px 8px rgba(25,118,210,0.08);
}
.get-directions a:hover {
  background: #1256a2;
}
@media (max-width: 600px) {
  .contacts-section {
    max-width: 100vw !important;
    padding: 0.5rem 0 !important;
    margin: 0 auto !important;
    background: none !important;
    box-shadow: none !important;
  }
  .contacts-main {
    flex-direction: column !important;
    align-items: center !important;
    justify-content: flex-start !important;
    gap: 1.2rem !important;
    max-width: 100vw !important;
    width: 100vw !important;
    padding: 0 !important;
    margin: 0 auto !important;
  }
  .contacts-info-card, .contacts-form-card {
    width: 92vw !important;
    max-width: 98vw !important;
    min-width: 0 !important;
    margin: 0 auto 1.2rem auto !important;
    border-radius: 1.2rem !important;
    box-shadow: 0 4px 24px rgba(5,56,138,0.10) !important;
    background: #fff !important;
    padding: 1.2rem 1rem !important;
    align-items: stretch !important;
    text-align: left !important;
    box-sizing: border-box !important;
  }
  .contacts-info-card h2, .contacts-form-card h3 {
    text-align: left !important;
    margin-left: 0.1rem !important;
  }
  footer, .custom-footer {
    padding-left: 1.2rem !important;
    padding-right: 1.2rem !important;
    box-sizing: border-box !important;
  }
}

/* Footer */
footer {
  background: linear-gradient(90deg, #002244cc 0%, #003366cc 100%);
  color: white;
  text-align: center;
  padding: 1rem 0;
  font-size: 0.9rem;
  box-shadow: 0 -2px 10px rgba(0,0,0,0.5);
  backdrop-filter: saturate(180%) blur(20px);
  position: relative;
  bottom: 0;
  width: 100%;
}

/* Style for social-connect to match contacts-info-card */
.social-connect {
  background: rgba(255,255,255,0.92);
  border-radius: 1.2rem;
  box-shadow: 0 4px 24px rgba(5,56,138,0.10);
  padding: 2.2rem 2rem 2.2rem 2.2rem;
  color: #05388a;
  min-width: 320px;
  max-width: 420px;
  font-size: 1.05rem;
  text-align: left;
  margin: 0 0 0 1.5rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

/* Footer font style and size adjustment for contacts page */
body.contacts-page footer {
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
}

body.contacts-page .footer-bottom {
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  text-align: left;
  padding-left: 0.5rem;
}

/* Fix footer at bottom for contacts page */
body.contacts-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

body.contacts-page main {
  flex: 1;
}

/* Fix footer at bottom for partners page on mobile */
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

body.partners-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
}

body.partners-page main {
  flex: 1;
}

body.partners-page footer {
  position: relative;
  bottom: auto;
  width: 100%;
  margin-top: 0;
  background: linear-gradient(90deg, #002244cc 0%, #003366cc 100%);
  box-shadow: 0 -2px 10px rgba(0,0,0,0.5);
  backdrop-filter: saturate(180%) blur(20px);
  color: white;
  text-align: center;
  padding: 1rem 0;
  font-size: 0.9rem;
  z-index: 1000;
}

/* Remove underline on all links */
a {
  text-decoration: none !important;
}

a:hover {
  text-decoration: none !important;
}

/* --- HEADER: FULLY TRANSPARENT, NO BORDER RADIUS --- */
.header {
  background: transparent !important;
  border-radius: 0 !important;
}
.header .header-container {
  background: transparent !important;
  border-radius: 0 !important;
}

/* --- NAVBAR: REMOVE ALL BORDER RADIUS, FULLY TRANSPARENT BG --- */
.nav, .nav-links, nav ul, nav ul.show {
  background: transparent !important;
  border-radius: 0 !important;
  box-shadow: none !important;
}

/* --- NAVBAR MOBILE VISIBILITY & TRANSPARENCY FIX --- */
@media (max-width: 900px) {
  nav ul {
    display: none !important;
    opacity: 0 !important;
    visibility: hidden !important;
    position: absolute !important;
    top: 44px !important;
    right: 0 !important;
    width: 220px !important;
    max-width: 90vw !important;
    min-width: 120px !important;
    border-radius: 0 !important;
    margin: 0 !important;
    z-index: 2050 !important;
    background: #05388ae6 !important; /* Deep blue, semi-transparent */
    box-shadow: none !important;
    padding: 0.5rem 0.2rem !important;
    overflow-y: auto !important;
    flex-direction: column !important;
    transition: opacity 0.3s, visibility 0.3s;
  }
  nav ul.show {
    display: flex !important;
    opacity: 1 !important;
    visibility: visible !important;
  }
  .nav-links {
    flex-direction: column !important;
    align-items: flex-start !important;
    width: 100% !important;
    gap: 0.5rem !important;
    margin: 0 !important;
    padding: 0 !important;
  }
  .nav-links li {
    margin: 0.5rem 0 !important;
    width: 100% !important;
  }
  .nav-links li a {
    font-size: 1rem !important;
    padding: 0.4rem 0.75rem !important;
    color: #fff !important;
    background: none !important;
    border-radius: 0 !important;
    min-width: unset !important;
    text-align: left !important;
    height: auto !important;
    line-height: normal !important;
    display: block !important;
    word-break: normal !important;
    width: 100% !important;
  }
}

/* --- HAMBURGER MENU: 3 EQUAL LINES, CENTERED --- */
.hamburger {
  background: none !important;
  border: none !important;
  box-shadow: none !important;
  width: 44px !important;
  height: 44px !important;
  display: none !important;
  align-items: center !important;
  justify-content: center !important;
  position: relative;
  cursor: pointer;
}
@media (max-width: 900px) {
  .hamburger {
    display: flex !important;
  }
}
.hamburger span,
.hamburger span::before,
.hamburger span::after {
  display: block;
  position: absolute;
  left: 8px;
  right: 8px;
  height: 3px;
  background: #fff;
  border-radius: 2px;
  transition: all 0.3s ease;
  content: '';
  width: auto;
}
.hamburger span {
  top: 50%;
  transform: translateY(-50%);
}
.hamburger span::before {
  content: '';
  top: -10px;
  left: 0;
  right: 0;
}
.hamburger span::after {
  content: '';
  top: 10px;
  left: 0;
  right: 0;
}

/* --- MOBILE NAVBAR: SHOW ALL TABS, NO SCROLL --- */
@media (max-width: 900px) {
  nav ul {
    display: none !important;
    opacity: 0 !important;
    visibility: hidden !important;
    position: absolute !important;
    top: 44px !important;
    right: 0 !important;
    width: 220px !important;
    max-width: 90vw !important;
    min-width: 120px !important;
    border-radius: 0 !important;
    margin: 0 !important;
    z-index: 2050 !important;
    background: #05388ae6 !important;
    box-shadow: none !important;
    padding: 0.5rem 0.2rem !important;
    overflow-y: visible !important;
    max-height: none !important;
    height: auto !important;
    flex-direction: column !important;
    transition: opacity 0.3s, visibility 0.3s;
  }
  nav ul.show {
    display: flex !important;
    opacity: 1 !important;
    visibility: visible !important;
    max-height: none !important;
    height: auto !important;
  }
  .nav-links {
    flex-direction: column !important;
    align-items: flex-start !important;
    width: 100% !important;
    gap: 0.5rem !important;
    margin: 0 !important;
    padding: 0 !important;
    max-height: none !important;
    height: auto !important;
    overflow: visible !important;
  }
  .nav-links li {
    margin: 0.5rem 0 !important;
    width: 100% !important;
  }
  .nav-links li a {
    font-size: 1rem !important;
    padding: 0.4rem 0.75rem !important;
    color: #fff !important;
    background: none !important;
    border-radius: 0 !important;
    min-width: unset !important;
    text-align: left !important;
    height: auto !important;
    line-height: normal !important;
    display: block !important;
    word-break: normal !important;
    width: 100% !important;
  }
}
/* Animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Section fade-in animation */
main > section, .service-card, .about-card {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s cubic-bezier(.25,.8,.25,1) forwards;
}
main > section:nth-child(1) { animation-delay: 0.1s; }
main > section:nth-child(2) { animation-delay: 0.3s; }
.service-card { animation-delay: 0.2s; }
.about-card { animation-delay: 0.2s; }

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: none;
  }
}

/* Responsive */
@media (max-width: 768px) {
  .hero-content {
    flex-direction: column;
  }

  nav ul {
    opacity: 0;
    visibility: hidden;
    flex-direction: column;
    background: rgba(0, 51, 102, 0.9);
    position: absolute;
    top: 60px;
    right: 0;
    width: 220px;
    border-radius: 0 0 0 8px;
    box-shadow: 0 8px 20px rgba(0,0,0,0.5);
    z-index: 1001;
    transition: opacity 0.3s ease, visibility 0.3s ease;
  }

  nav ul.show {
    display: flex;
    opacity: 1;
    visibility: visible;
    background: none !important;
    border-radius: 0 !important;
    box-shadow: none !important;
  }

  .hamburger {
    display: flex;
    z-index: 1002;
  }

  /* Fix text alignment and spacing for phone resolutions */
  body, html {
    font-size: 14px;
  }

  .hero-text, .info-section p, .section-intro, .service-card p {
    text-align: left;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  nav ul {
    width: 220px;
    right: 0;
    top: 50px;
    border-radius: 0 0 0 8px;
  }

  .nav-links li {
    margin: 0.5rem 0;
  }

  .nav-links li a {
    font-size: 1rem;
    padding: 0.4rem 0.75rem;
    display: block;
    color: #f0f0f0;
  }

  .header {
    min-height: 32px !important;
    height: 32px !important;
    padding: 0 !important;
    top: 0.1rem !important;
  }
  .header .header-container {
    min-height: 32px !important;
    height: 32px !important;
    padding: 0 0.3rem !important;
  }
  .logo {
    height: 28px !important;
    min-height: 28px !important;
    font-size: 0.82rem !important;
    line-height: 28px !important;
    max-width: 120px !important;
    padding: 0 0.05rem !important;
  }
  .logo img {
    height: 22px !important;
    width: 22px !important;
    min-width: 22px !important;
    min-height: 22px !important;
    margin-right: 0.08rem !important;
  }
  .logo span {
    font-size: 0.82rem !important;
    max-width: 80px !important;
    padding-top: 0 !important;
  }
}

/* Ensure header spans full width and fixes mobile nav issues */
.header {
  width: 100vw !important;
  left: 0 !important;
  right: 0 !important;
  margin: 0 !important;
  position: fixed !important;
  top: 0 !important;
  z-index: 2000 !important;
  background: none !important;
}
.header .header-container {
  width: 100vw !important;
  max-width: 100vw !important;
  margin: 0 !important;
  padding: 0 0.5rem !important;
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  background: none !important;
}
@media (max-width: 768px) {
  .header, .header .header-container {
    min-height: 44px !important;
    height: 44px !important;
  }
  nav ul, nav ul.show {
    top: 44px !important;
  }
}

/* --- CLEANED MOBILE NAV TABS VISIBILITY & ALIGNMENT --- */
@media (max-width: 768px) {
  nav ul {
    position: absolute !important;
    top: 44px !important; /* match header height */
    right: 0 !important;
    left: auto !important;
    width: 220px !important;
    max-width: 90vw !important;
    min-width: 120px !important;
    border-radius: 0 !important;
    margin: 0 !important;
    z-index: 2050 !important;
    display: none !important;
    opacity: 0 !important;
    visibility: hidden !important;
    background: none !important;
    box-shadow: none !important;
    padding: 0.5rem 0.2rem !important;
    overflow-y: auto !important;
    transition: opacity 0.3s, visibility 0.3s;
  }
  nav ul.show {
    display: flex !important;
    flex-direction: column !important;
    opacity: 1 !important;
    visibility: visible !important;
    background: #05388ae6 !important; /* Deep blue, semi-transparent */
    border-radius: 0 !important;
    box-shadow: none !important;
  }
  .hamburger {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    height: 44px !important;
    width: 44px !important;
    margin-left: auto !important;
    z-index: 2100 !important;
    cursor: pointer;
  }
  .nav-links {
    width: 100%;
    gap: 0.5rem;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 !important;
    padding: 0 !important;
  }
  .nav-links li {
    margin: 0.5rem 0;
    width: 100%;
  }
  .nav-links li a {
    font-size: 1rem;
    padding: 0.4rem 0.75rem;
    color: #fff;
    background: none !important;
    border-radius: 0 !important;
    min-width: unset !important;
    text-align: left !important;
    height: auto !important;
    line-height: normal !important;
    display: block !important;
    word-break: normal !important;
    width: 100%;
  }
}

/* --- REMOVE UNWANTED HEADER LAYER/SHADOW/BORDER --- */
.header {
  background: none !important;
  box-shadow: none !important;
  border: none !important;
  outline: none !important;
}
.header .header-container {
  background: none !important;
  box-shadow: none !important;
  border: none !important;
  outline: none !important;
}

/* --- LOGO & LOGO TEXT: MOVE TOWARD CENTER (NOT FULLY CENTERED) --- */
.logo {
  margin-left: 8vw !important;
  padding-left: 0.2rem !important;
}

/* --- ENLARGE CONTACT CARDS FOR MORE PADDING --- */
.contacts-main {
  max-width: 1200px;
  padding: 2.5rem 1.5rem;
}
.contacts-info-card, .contacts-form-card {
  max-width: 540px;
  padding: 2.8rem 2.5rem;
}
@media (max-width: 900px) {
  .contacts-main {
    padding: 1.5rem 0.5rem;
  }
  .contacts-info-card, .contacts-form-card {
    padding: 1.5rem 0.7rem;
    max-width: 100%;
  }
}

/* Remove blue background from about-section */
.about-section {
  background: none !important;
  box-shadow: none !important;
}

/* Align text in contacts info card to the left */
.contacts-info-card {
  text-align: left;
  align-items: flex-start;
}
.contacts-info-card h2,
.contacts-info-list,
.business-hours {
  text-align: left;
  width: 100%;
}
.contacts-info-list li {
  align-items: flex-start;
}
.business-hours table {
  margin-left: 0;
}
@media (max-width: 600px) {
  .contacts-info-card {
    text-align: left !important;
    align-items: flex-start !important;
    padding-left: 1rem !important;
    padding-right: 1rem !important;
  }
  .contacts-info-card h2,
  .contacts-info-list,
  .business-hours {
    text-align: left !important;
    width: 100% !important;
  }
}
.service-card h3,
.service-card p,
.service-card .service-note {
  text-align: center;
}

.service-card .service-note {
  font-size: 1rem;
  color: #0356a9;
  margin-top: 0.5rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-align: center;
  font-weight: bold;
  display: block;
}
.custom-footer {
  background: linear-gradient(90deg, #002244cc 0%, #003366cc 100%);
  color: white;
  padding: 2.5rem 0 1.2rem 0;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  border-top: 1.5px solid #234;
}
.footer-main {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2.5rem;
  text-align: left;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}
.footer-col {
  flex: 1 1 260px;
  min-width: 220px;
  margin-bottom: 1.2rem;
}
.footer-col h3 {
  font-family: 'Playfair Display', serif !important;
  font-style: italic !important;
  font-weight: 700 !important;
  font-size: 1.25rem;
  margin-bottom: 0.7rem;
  color: #fff;
}
.footer-col p,
.footer-col ul,
.footer-col ul li,
.footer-col ul li a,
.footer-col form,
.footer-col input,
.footer-col button {
  font-family: 'Montserrat', sans-serif !important;
  font-weight: 400;
  color: #fff;
}
.footer-col ul li a {
  font-weight: 400;
}
.footer-col .newsletter-form button {
  color: #222;
  font-weight: 700;
}
.newsletter-form {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
}
.newsletter-form input[type="email"] {
  flex: 1 1 120px;
  padding: 0.6rem 0.9rem;
  border-radius: 6px 0 0 6px;
  border: none;
  font-size: 1rem;
  outline: none;
}
.newsletter-form button {
  background: #ffcc33;
  color: #222;
  border: none;
  border-radius: 0 6px 6px 0;
  padding: 0 1.2rem;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s;
}
.newsletter-form button:hover {
  background: #ffd966;
}
.footer-bottom {
  text-align: center !important;
  width: 100% !important;
  display: block !important;
  padding-right: 0 !important;
  padding-left: 0 !important;
  margin-top: 1.2rem;
  font-size: 0.98rem;
  color: #e0e0e0;
}
@media (max-width: 900px) {
  .footer-bottom {
    text-align: center;
    padding-right: 0;
    padding-left: 0;
  }
}

/* Formal Team Section */
.formal-team-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255,255,255,0.18) !important;
  box-shadow: 0 8px 32px rgba(8, 8, 8, 0.18) !important;
  backdrop-filter: blur(12px) saturate(160%) !important;
  -webkit-backdrop-filter: blur(12px) saturate(160%) !important;
  border-radius: 1.2rem;
  padding: 2.5rem 2rem;
  margin-bottom: 2.5rem;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

/* Management Card Heading */
.management-card {
  background: rgba(255,255,255,0.95);
  border-radius: 1.2rem;
  box-shadow: 0 8px 32px rgba(8, 8, 8, 0.1);
  padding: 1.5rem 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}
.management-card h2, .management-card h3 {
  margin: 0;
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  color: #003366 !important;
  font-weight: 700;
  text-shadow: 0 0 6px rgba(0, 51, 102, 0.8);
}
.team-details-col {
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: center;
}
.team-details-col h3 {
  color: #ff9900;
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  margin-bottom: 0.7rem;
  margin-top: 0;
  text-align: center;
}
.team-details-col ul {
  text-align: left;
  font-size: 1.08rem;
  margin-bottom: 1.5rem;
  padding-left: 1.2rem;
  width: 100%;
}
.team-details-col ul li {
  margin-bottom: 0.5rem;
  line-height: 1.5;
}
.offices-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  margin-top: 0.5rem;
  width: 100%;
  max-width: 700px !important;
  margin-left: auto !important;
  margin-right: auto !important;
}
.office-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #003366;
  margin-bottom: 0.2rem;
  display: block;
}
.offices-list div {
  background: #f8fbff !important;
  border-radius: 1.2rem !important;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06) !important;
  padding: 1.5rem 1.2rem !important;
  font-size: 1rem;
  color: #222;
  margin-bottom: 0.2rem;
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
  align-items: center !important;
  text-align: center !important;
  min-height: 180px !important;
  max-width: 700px !important;
  margin-left: auto !important;
  margin-right: auto !important;
}
@media (max-width: 900px) {
  .formal-team-section {
    padding: 1.2rem 0.7rem;
    max-width: 100vw;
  }
  .team-details-col {
    max-width: 100vw;
    padding: 0 0.5rem;
  }
  .offices-list {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}

/* Bolder, colored headings and strong text for all main sections */
.about-section h2, .about-section h3, .about-section strong,
.services-section h2, .services-section h3, .services-section strong,
.contacts-section h2, .contacts-section h3, .contacts-section strong,
.partners-section h2, .partners-section h3, .partners-section strong,
.management-card h2, .management-card h3 {
  font-weight: 800 !important;
  color: #003366 !important;
  text-shadow: none !important;
  letter-spacing: 0.5px;
}
.partner-text strong {
  font-weight: 700 !important;
  color: #003366 !important;
  text-shadow: none !important;
}

/* Add Intro Rust font-face (make sure to add the font files to your project) */
@font-face {
  font-family: 'Intro Rust';
  src: url('fonts/IntroRust.woff2') format('woff2'),
       url('fonts/IntroRust.woff') format('woff'),
       url('fonts/IntroRust.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

/* Use Intro Rust for footer and headings */
.footer-col h3,
.footer-col p,
.footer-col ul,
.footer-col ul li,
.footer-col form,
.footer-col input,
.footer-col button {
  font-family: 'Intro Rust', sans-serif !important;
}

h1, h2, h3, h4, h5, h6, .logo span, .nav-links a {
  font-family: 'Intro Rust', sans-serif !important;
}
