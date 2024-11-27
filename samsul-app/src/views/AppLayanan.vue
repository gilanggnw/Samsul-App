<template>
  <section class="layanan">
    <!-- Title and Subtitle Section -->
    <div class="service-header">
      <h1>Services by SAMSUL</h1>
      <p class="subtitle">Pick your service from the list below</p>
    </div>

    <!-- Service Grid Section (3x3 grid of services) -->
    <div class="service-grid">
      <!-- Service 1 -->
      <div class="service-item">
        <img class="service-icon" src="https://raw.githubusercontent.com/gilanggnw/Samsul/refs/heads/main/Images/Services/SDaur.png" alt="Icon 1" />
        <span class="service-title">S-Daur</span>
      </div>
      <!-- Service 2 -->
      <div class="service-item">
        <img class="service-icon" src="https://raw.githubusercontent.com/gilanggnw/Samsul/refs/heads/main/Images/Services/SAnalisis.png" alt="Icon 2" />
        <span class="service-title">S-Analisis</span>
      </div>
      <!-- Service 3 -->
      <div class="service-item">
        <img class="service-icon" src="https://raw.githubusercontent.com/gilanggnw/Samsul/refs/heads/main/Images/Services/STimbang.png" alt="Icon 3" />
        <span class="service-title">S-Timbang</span>
      </div>
      <!-- Service 4 -->
      <div class="service-item">
        <img class="service-icon" src="https://raw.githubusercontent.com/gilanggnw/Samsul/refs/heads/main/Images/Services/SPanggil.png" alt="Icon 4" />
        <span class="service-title">S-Panggil</span>
      </div>
      <!-- Service 5 -->
      <div class="service-item">
        <img class="service-icon" src="https://raw.githubusercontent.com/gilanggnw/Samsul/refs/heads/main/Images/Services/SMaggot.png" alt="Icon 5" />
        <span class="service-title">S-Maggot</span>
      </div>
      <!-- Service 6 -->
      <div class="service-item">
        <img class="service-icon" src="https://raw.githubusercontent.com/gilanggnw/Samsul/refs/heads/main/Images/Services/SMitra.png" alt="Icon 6" />
        <span class="service-title">S-Mitra</span>
      </div>
      <!-- Service 7 -->
      <div class="service-item">
        <img class="service-icon" src="https://raw.githubusercontent.com/gilanggnw/Samsul/refs/heads/main/Images/Services/STjabang.png" alt="Icon 7" />
        <span class="service-title">S-Tjabang</span>
      </div>
      <!-- Service 8 -->
      <div class="service-item">
        <img class="service-icon" src="https://raw.githubusercontent.com/gilanggnw/Samsul/refs/heads/main/Images/Services/Spromo.png" alt="Icon 8" />
        <span class="service-title">S-Promo</span>
      </div>
      <!-- Service 9 -->
      <div class="service-item">
        <img class="service-icon" src="https://raw.githubusercontent.com/gilanggnw/Samsul/refs/heads/main/Images/Services/SPoin.png" alt="Icon 9" />
        <span class="service-title">S-Poin</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AppLayanan',
};
</script>

<style scoped>
/* General Styles */
.layanan {
  padding: 20px;
}

/* Header Section */
.service-header {
  text-align: center;
  margin-bottom: 30px;
}

.service-header h1 {
  font-size: 2.5em;
  color: #2c3e50;
  font-weight: bold;
}

.subtitle {
  font-size: 1.2em;
  color: #7f8c8d;
}

/* Service Grid Layout */
.service-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 equal columns */
  gap: 20px; /* Gap between grid items */
  padding: 20px;
}

.service-item {
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column; /* Align icon and title vertically */
  align-items: center; /* Center the items horizontally */
}

.service-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
}

.service-icon {
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
}

.service-title {
  font-size: 1.2em;
  font-weight: bold;
  color: #2c3e50;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .service-grid {
    grid-template-columns: repeat(2, 1fr); /* 2 columns for medium screens */
  }
}

@media (max-width: 480px) {
  .service-grid {
    grid-template-columns: 1fr; /* 1 column for smaller screens */
  }
}
</style>
