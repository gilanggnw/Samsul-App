<template>
  <header>
    <div class="header-content">
      <div class="left-section">
        <img
          class="logo"
          src="https://raw.githubusercontent.com/gilanggnw/Samsul/refs/heads/main/LOGO%20SAMSUL%20INVERTED%20NO%20BG%20NO%20TEXT.png"
          alt="SAMSUL Logo"
        />
        <span class="web-title">SAMSUL</span>
      </div>
      <nav class="nav-menu">
        <router-link to="/" class="nav-link" active-class="active">Beranda</router-link>
        <router-link to="/layanan" class="nav-link" active-class="active">Layanan</router-link>
        <router-link to="/tentang" class="nav-link" active-class="active">Tentang Kita</router-link>
      </nav>
      <div class="right-section">
        <!-- Profile Section -->
        <div class="profile-box">
          <div class="profile">
            <img class="avatar" src="https://raw.githubusercontent.com/gilanggnw/Samsul/refs/heads/main/Images/Avatar.jpg" alt="User">
            <span>Mr Samsul</span>
          </div>
        </div>

        <!-- Cash Button -->
        <div 
          class="cash-container" 
          @mouseenter="showPopup" 
          @mouseleave="hidePopup"
          @mouseover="keepPopupVisible"
        >
          <button class="cash-button">
            <span class="samsul-cash">Rp500.000</span>
          </button>
          <div v-if="isPopupVisible" class="popup">
            <ul class="options-list">
              <li @click="selectOption('Top Up')">Top Up</li>
              <li @click="selectOption('Tarik Tunai')">Tarik Tunai</li>
              <li @click="selectOption('Transfer')">Transfer</li>
              <li @click="selectOption('Riwayat')">Riwayat</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      isPopupVisible: false, // controls visibility of the popup
    };
  },
  methods: {
    showPopup() {
      this.isPopupVisible = true;
    },
    hidePopup() {
      this.isPopupVisible = false;
    },
    keepPopupVisible() {
      this.isPopupVisible = true; // Keep popup visible when hovering over the popup
    },
    selectOption(option) {
      console.log(option); // Example: Handle selected option
    }
  },
};
</script>

<style scoped>
/* Header styles */
header {
  background-color: #003366;
  color: #f1f1f1;
  padding: 10px 0;
  width: 100%;
  position: relative;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
}

.left-section {
  display: flex;
  align-items: center;
}

.logo {
  width: 50px;
  margin-right: 10px;
}

.web-title {
  font-size: 1.5em;
  font-weight: bold;
  color: #f1f1f1;
}

.nav-menu {
  display: flex;
  gap: 20px;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 5px;
}

.nav-link:hover, .nav-link.active {
  background-color: #3498db;
}

.right-section {
  display: flex;
  gap: 20px; /* Space between profile and cash buttons */
  align-items: center;
}

/* Profile Section */
.profile-box {
  display: flex;
  align-items: center;
}

.profile {
  display: flex;
  align-items: center;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: #ffffff;
  border: 2px solid #3498db;
}

/* Cash Button Styling */
.cash-container {
  position: relative;
}

.cash-button {
  background-color: #3498db;
  border: none;
  color: white;
  font-size: 1.2em;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.cash-button:hover {
  background-color: #2980b9;
}

.samsul-cash {
  font-size: 1.2em;
  font-weight: bold;
}

/* Popup Styling */
.popup {
  position: absolute;
  top: 100%; /* Position the popup below the Cash button */
  left: 0;
  transform: translateX(0%);
  background-color: #2c3e50;
  color: white;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  opacity: 0; /* Start with the popup hidden */
  visibility: hidden; /* Ensure it’s invisible initially */
  transition: opacity 0.3s ease-in-out, visibility 0s 0.3s;
}

.popup {
  opacity: 1;
  visibility: visible;
  transition: opacity 0.3s ease-in-out, visibility 0s;
}

.options-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.options-list li {
  padding: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.options-list li:hover {
  background-color: #3498db;
}
</style>
