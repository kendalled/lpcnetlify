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
