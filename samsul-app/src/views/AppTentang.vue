<template>
  <section class="meet-the-team">
    <h1>Meet the Team</h1>
    <!-- First Row with One Member -->
    <div class="row">
      <div class="team-member">
        <div class="circle-border">
          <img src="https://raw.githubusercontent.com/gilanggnw/Samsul/refs/heads/main/Images/Members/Abror_removedbg.png" alt="Member 1" />
        </div>
        <h2>Ahmad Abror</h2>
        <p class="position">Chief of Executive</p>
        <p class="origin">Statistika Bisnis</p>
        <p class="phone">+62 853-4881-0225</p>
      </div>
    </div>

    <!-- Second Row with Four Members -->
    <div class="row">
      <div class="team-member">
        <div class="circle-border">
          <img src="https://raw.githubusercontent.com/gilanggnw/Samsul/refs/heads/main/Images/Members/Gilang.png" alt="Member 2" />
        </div>
        <h2>Gilang Gunawan Saputra</h2>
        <p class="position">Chief of Technology</p>
        <p class="origin">Teknik Informatika</p>
        <p class="phone">+62 813-1147-7093</p>
      </div>
      <div class="team-member">
        <div class="circle-border">
          <img src="https://raw.githubusercontent.com/gilanggnw/Samsul/refs/heads/main/Images/Members/Fhikri.png" alt="Member 3" />
        </div>
        <h2>Fhikri Haykal Oktarianto</h2>
        <p class="position">Chief of Operational</p>
        <p class="origin">Statistika Bisnis</p>
        <p class="phone">+62 812-4961-4071</p>
      </div>
      <div class="team-member">
        <div class="circle-border">
          <img src="https://raw.githubusercontent.com/gilanggnw/Samsul/refs/heads/main/Images/Members/Helvy.png" alt="Member 4" />
        </div>
        <h2>Helvy Tiana Rosa Nabila</h2>
        <p class="position">Chief of Marketing</p>
        <p class="origin">Statistika Bisnis</p>
        <p class="phone">+62 822-6494-2314</p>
      </div>
      <div class="team-member">
        <div class="circle-border">
          <img src="https://raw.githubusercontent.com/gilanggnw/Samsul/refs/heads/main/Images/Members/Insania.png" alt="Member 5" />
        </div>
        <h2>Insania Firdausy</h2>
        <p class="position">Chief of Finance</p>
        <p class="origin">Statistika Bisnis</p>
        <p class="phone">+62 878-6522-0294</p>
      </div>
    </div>

    <!-- See More About Us Section -->
    <div class="about-us">
      <h2>Our Contact</h2>
      <div class="contact-info">
        <p><strong>Email:</strong> <a href="mailto:its.samsulsite@gmail.com">its.samsulsite@gmail.com</a></p>
        <p><strong>Phone:</strong> <a href="tel:+62822-6494-2314">+62 822-6494-2314</a></p>
        <p><strong>Instagram:</strong> <a href="https://https://www.instagram.com/samsul.site/" target="_blank" rel="noopener noreferrer">@samsul.site</a></p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AppTentang' // Still using the AppTentang name
};
</script>

<style scoped>
/* Meet the Team Section Styles */
.meet-the-team {
  text-align: center;
  padding: 20px;
}

h1 {
  font-size: 2.1em;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 30px;
}

/* Layout for the rows */
.row {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
}

.row .team-member {
  width: 200px;
  padding: 20px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.circle-border {
  width: 150px; /* Size of the circle */
  height: 150px; /* Size of the circle */
  border-radius: 50%; /* Makes it circular */
  border: 5px solid #3498db; /* Border color around the circle */
  overflow: hidden; /* Ensures the image fits within the circle */
  margin: 0 auto; /* Center the image within the circle */
}

.circle-border img {
  width: 100%; /* Makes the image fill the container */
  height: 100%; /* Makes the image fill the container */
  object-fit: cover; /* Ensures the image doesn't stretch, and maintains aspect ratio */
}

h2 {
  color: #34495e;
  font-size: 1.2em;
}

.position,
.origin,
.phone {
  font-size: 1em;
  color: #7f8c8d;
  margin-bottom: 10px;
}

/* About Us Section */
.about-us {
  margin-top: 50px;
  text-align: center;
}

.about-us h2 {
  font-size: 2em;
  color: #2c3e50;
  margin-bottom: 20px;
}

.contact-info p {
  font-size: 1.2em;
  color: #34495e;
  margin: 10px 0;
}

.contact-info a {
  color: #3498db;
  text-decoration: none;
}

.contact-info a:hover {
  text-decoration: underline;
}

/* Adjust for smaller screens */
@media (max-width: 768px) {
  .row {
    flex-direction: column;
    align-items: center;
  }

  .row .team-member {
    width: 90%;
    margin-bottom: 30px;
  }
}
</style>
