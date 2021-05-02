<template>
  <div class="w-screen h-screen bg-gray-50">
    <ThanksModal :message="'Your order has been successfully placed. Expect a confirmation email and invoice shortly.'" />
  </div>
</template>

<script>
import ThanksModal from '~/components/ThanksModal'
export default {
  components: {
    ThanksModal
  },
  layout: 'login'
}
</script>
