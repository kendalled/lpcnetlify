<template>
  <div class="loader" />
</template>

<style lang="scss" scoped>
.loader {
  position: absolute;
  top: 50%;
  left: 50%;
  // transform: translate(-50%,-50%);
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 4px solid #1a56db;
  border-right-color: transparent;
  transform-origin: center;
  animation: rotate 1s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>

<script>
export default {
  name: 'Loader'
}
</script>
