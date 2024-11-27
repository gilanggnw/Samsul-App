<template>
  <main>
    <div class="main-content">
      <slot></slot> <!-- Dynamic content will be inserted here -->
    </div>
  </main>
</template>

<script>
export default {
  name: 'AppMain'
};
</script>

<style scoped>
/* Main content styles */
main {
  flex-grow: 1;
  background-color: #f4f4f4;
  padding: 20px;
}

.main-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
