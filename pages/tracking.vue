<template>
  <div class="relative min-h-screen py-32 bg-gray-100">
    <TallSteps />
    <LongSteps />
  </div>
</template>

<script>
import LongSteps from '~/components/LongSteps'
import TallSteps from '~/components/TallSteps'
export default {
  components: {
    LongSteps,
    TallSteps
  }
}
</script>
