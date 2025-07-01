<template>
  <div>
    <QuoteBanner :show="errorNotif" :message="'Please enter your payment details.'" :message2="'Use the credit card field below.'" @close="closeNotif" />
    <BetterCheckoutAgain @error="showError" />
    <TailFoot />
  </div>
</template>

<script>
export default {
  layout: 'checkout',
  data () {
    return {
      errorNotif: false
    }
  },
  head () {
    return {
      title: 'Secure Checkout | Lapel Pins & Coins',
      meta: [
        { hid: 'description', name: 'description', content: 'Complete your secure checkout for custom lapel pins, challenge coins, or keychains. Safe payment processing with instant confirmation.' },
        { hid: 'robots', name: 'robots', content: 'noindex, nofollow' }
      ]
    }
  },
  methods: {
    showError () {
      this.errorNotif = true
      const vm = this
      setTimeout(() => {
        vm.errorNotif = false
      }, 4000)
    },
    closeNotif () {
      this.errorNotif = false
    }
  }
}
</script>
