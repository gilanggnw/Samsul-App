<template>
  <section class="beranda">
    <!-- Poster Image at the top -->
    <div class="poster">
      <img src="https://raw.githubusercontent.com/gilanggnw/Samsul/refs/heads/main/Images/Banner.png" alt="SAMSUL Emission Monitoring" class="poster-image" />
    </div>
    
    <!-- Text Content Below -->
    <div class="content">
      <h1>Welcome to SAMSUL Emission Monitoring</h1>
    </div>

    <!-- New Section for the Message -->
    <div class="message-section">
      <div class="message-content">
        <div class="person-info">
          <img src="https://raw.githubusercontent.com/gilanggnw/Samsul/refs/heads/main/Images/Members/Abror_removedbg.png" alt="Ahmad Abror" class="person-image" />
          <div class="text-info">
            <p class="message-text">"Kami hadirkan SAMSUL. Kelola Sampah, Kurangi Emisi, Tingkatkan Kesadaran."</p>
            <span class="name">Ahmad Abror</span>
            <span class="title">Chief of Executive</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Description Section: What is SAMSUL? -->
    <div class="description-section">
      <h2>What is SAMSUL?</h2>
      <p>
        SAMSUL adalah platform yang hadir guna membantu mengatur emisi karbon yang ada di Indonesia bagi para pemilik usaha kecil sebagai solusi untuk mengurangi emisi karbon dan meningkatkan kesadaran akan pentingnya pengelolaan sampah yang berkelanjutan.
      </p>
      <p>
        SAMSUL hadir dengan fitur-fitur inovatif untuk membantu usaha kecil dalam berkontribusi pada Net Zero Emission 2060!
      </p>
    </div>

    <!-- SAMSUL Provides Section with Logo and Description -->
    <section class="logo-description-section">
      <h2>SAMSUL Provides</h2>
      <div class="description-logo-container">
        <!-- Description Section -->
        <div class="description-left">
          <ul>
            <li>Bentuk hati melambangkan kepedulian SAMSUL terhadap lingkungan dan komunitas.</li>
            <li>Panah daur ulang mencerminkan misi utama SAMSUL dalam pengelolaan limbah dan pengurangan emisi karbon, serta keberlanjutan.</li>
            <li>Fokus SAMSUL pada usaha kecil. Ini mengingatkan bahwa usaha kecil memiliki peran besar dalam mendukung lingkungan jika dikelola dengan tepat.</li>
          </ul>
        </div>
        
        <!-- Logo Section -->
        <div class="logo-right">
          <img src="https://raw.githubusercontent.com/gilanggnw/Samsul/refs/heads/main/Images/LOGO_SAMSUL_Black_NoBg.png" alt="SAMSUL Logo" class="samsul-logo" />
        </div>
      </div>
    </section>

  </section>
</template>

<script>
export default {
  name: 'AppBeranda'
};
</script>

<style scoped>
/* Beranda styles */
.beranda {
  text-align: center;
  max-width: 1200px; /* Limit the content width */
  margin: 0 auto; /* Center the section */
}

.poster {
  width: 100%; /* Full width */
  margin-bottom: 20px; /* Space between image and text */
}

.poster-image {
  width: 100%; /* Make image responsive */
  height: auto; /* Keep the aspect ratio */
  border-radius: 10px; /* Optional rounded corners for the image */
}

.content {
  padding: 10px;
}

h1 {
  font-size: 3em; /* Larger font for title */
  margin-bottom: 10px; /* Reduced space between title and message section */
  color: #2c3e50; /* Title color */
}

/* New Message Section with Dark Blue Background */
.message-section {
  background-color: #003366; /* Dark blue background */
  padding: 40px;
  margin-top: 10px; /* Reduced space between title and message section */
  border-radius: 10px; /* Optional rounded corners */
  color: white;
}

.message-content {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
}

.person-info {
  display: flex;
  align-items: center;
  gap: 20px;
  text-align: left;
}

.person-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid white;
}

.text-info {
  max-width: 500px;
}

.message-text {
  font-size: 1.8em;
  font-weight: bold;
  margin-bottom: 20px;
  color: #f1f1f1;
}

.name {
  display: block;
  font-size: 1.3em;
  font-weight: bold;
  margin-top: 10px;
}

.title {
  display: block;
  font-size: 1.1em;
  font-style: italic;
  color: #f39c12; /* Optional color for the title */
}

/* New Description Section with Left-aligned Text */
.description-section {
  background-color: #f4f4f4; /* Light background for description */
  padding: 40px 20px;
  margin-top: 40px; /* Space between the message section and description */
  border-radius: 10px;
  text-align: left; /* Align text to the left */
  max-width: 1200px; /* Limit the max width */
  margin-left: auto; /* Center the section horizontally */
  margin-right: auto;
}

.description-section h2 {
  font-size: 2.2em;
  margin-bottom: 20px;
  color: #003366;
}

.description-section p {
  font-size: 1.1em;
  line-height: 1.8;
  color: #34495e;
  margin-bottom: 15px;
}

/* SAMSUL Provides Section */
.logo-description-section {
  text-align: center;
  padding: 40px 20px;
  background-color: #f4f4f4; /* Light background */
  margin-top: 40px;
  border-radius: 10px;
}

.logo-description-section h2 {
  font-size: 2.2em;
  color: #003366;
  margin-bottom: 20px;
  text-align: left; /* Align header to the left */
}

.description-logo-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  gap: 2px; /* Add gap between left and right sections */
}

.description-left {
  width: 70%; /* Adjusted to 70% */
  text-align: left;
  padding-right: 20px; /* Add padding to the right for spacing */
}

.description-left ul {
  list-style-type: disc; /* Use bullet points */
  padding-left: 20px; /* Add padding to make the list neat */
}

.description-left li {
  font-size: 1.1em;
  line-height: 1.8;
  color: #34495e;
  margin-bottom: 10px;
}

.logo-right {
  width: 30%;
  display: flex;
  justify-content: flex-end; /* Right-align the logo */
  padding-right: 90px; /* Added padding to the right for more space */
}

.samsul-logo {
  width: 220px; /* Adjust size of the logo */
  height: auto;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .description-logo-container {
    flex-direction: column; /* Stack content on smaller screens */
    text-align: center;
  }

  .description-left {
    width: 100%;
    margin-right: 0;
    margin-bottom: 20px;
  }

  .logo-right {
    width: 100%;
    justify-content: center; /* Center logo on smaller screens */
  }

  .samsul-logo {
    width: 180px; /* Adjust logo size for mobile */
  }
}

@media (max-width: 480px) {
  .description-left p {
    font-size: 1em; /* Adjust font size for smaller screens */
  }

  .samsul-logo {
    width: 140px;
  }
}
</style>
