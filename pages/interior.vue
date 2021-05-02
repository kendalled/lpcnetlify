<template>
  <div class="flex items-center justify-center w-full min-h-screen bg-gray-100">
    <TailSidebar />
  </div>
</template>

<script>
import TailSidebar from '~/components/TailSidebar'

export default {
  layout: 'blank',
  components: {
    TailSidebar
  }
}
</script>
