<template>
  <main class="flex items-center justify-center w-full h-screen bg-gray-700">
    <button class="px-4 py-2 mt-4 text-gray-700 bg-white shadow rounded-md focus:outline-none focus:ring-gray" @click.prevent="showDrop = !showDrop">
      Show dropdown
    </button>
    <BadgeSetExpand :opened="showDrop" />
  </main>
</template>

<script>
import BadgeSetExpand from '~/components/BadgeSetExpand'

export default {
  components: {
    BadgeSetExpand
  },
  layout: 'blank',
  data () {
    return {
      showDrop: false
    }
  }
}
</script>
