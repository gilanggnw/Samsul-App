<template>
  <section class="beranda">
    <!-- Poster Image at the top -->
    <div class="poster">
      <img src="https://raw.githubusercontent.com/gilanggnw/Samsul/refs/heads/main/Images/Banner.png" alt="SAMSUL Emission Monitoring" class="poster-image" />
    </div>
    
    <!-- Text Content Below -->
    <div class="content">
      <h1>Welcome to SAMSUL Emission Monitoring</h1>
      <p>This is the homepage of the SAMSUL project.</p>
    </div>
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
  padding: 20px;
}

h1 {
  font-size: 3em; /* Larger font for title */
  margin-bottom: 20px; /* Add space below the title */
  color: #2c3e50; /* Title color */
}

p {
  font-size: 1.5em; /* Larger font for paragraph */
  line-height: 1.6;
  margin-top: 0;
  color: #34495e; /* Text color */
}

/* Responsive Adjustments for smaller screens */
@media (max-width: 768px) {
  h1 {
    font-size: 2.5em; /* Scale down heading size */
  }

  p {
    font-size: 1.3em; /* Scale down paragraph size */
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 2em; /* Further scale down for mobile */
  }

  p {
    font-size: 1.1em; /* Adjust paragraph for mobile */
  }
}
</style>
