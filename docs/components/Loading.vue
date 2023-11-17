<template>
  <div v-if="isLoading" class="loader">
    <img src="https://cdn.dribbble.com/users/416315/screenshots/4275501/media/ba4a16a75df2b9ad42cfe383bd252fd0.gif" alt="Loading..." />
  </div>
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
