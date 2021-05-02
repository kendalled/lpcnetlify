<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
import adminauth from '~/mixins/adminauth'
export default {
  name: 'Login',
  mixins: [adminauth]
}
</script>
