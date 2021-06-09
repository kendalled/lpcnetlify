<template>
  <LoginWrapper @login="login" @logout="signOut" />
</template>

<script>
// import { auth } from '~/plugins/firebase'
import LoginWrapper from '~/components/LoginWrapper'
export default {
  components: {
    LoginWrapper
  },
  layout: 'login',
  head () {
    return {
      title: 'Account Login | Lapel Pins & Coins',
      meta: [
        { hid: 'description', name: 'description', content: 'We support traditional login methods like Email and Password, as well as Google, Microsoft, & Apple authentication. Sign up in seconds and get started with your design.' }
      ],
      link: [
        { rel: 'canonical', href: 'https://lapelpinsandcoins.com/login' }
      ]
    }
  },
  methods: {
    login (email, pw) {
      // const au = auth
      // const router = this.$router
      // if (process.browser) {
      //   au.signInWithEmailAndPassword(email, pw).catch(function (error) {
      //     // Handle Errors here.
      //     // const errorCode = error.code
      //     const errorMessage = error.message
      //     // vm.error = true
      //     alert(errorMessage)
      //     return true
      //   }).then(() => {
      //     router.push('/admin')
      //   })
      // }
      console.log('log in attempt')
    },
    register (email, pw) {
      // const au = auth
      // if (process.browser) {
      //   au.createUserWithEmailAndPassword(email, pw).catch(function (error) {
      //   // Handle Errors here.
      //     const errorMessage = error.message
      //     // vm.error = true
      //     alert(errorMessage)
      //     return true
      //   })
      // }
      console.log('register attempt')
    },
    signOut () {
      // const router = this.$router
      // auth.signOut().then(function () {
      //   router.push('/')
      //   console.log('signing out...')
      // }).catch(function (e) {
      //   console.log(e)
      // })
      console.log('signing out...')
    }
  }
}
</script>
