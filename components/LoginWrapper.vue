<template>
  <div class="flex items-center justify-center h-screen px-4 py-12 bg-gray-50 sm:px-6 lg:px-8">
    <transition
      enter-class="transform opacity-0"
      enter-active-class="transition-opacity duration-200 ease-out"
      enter-to-class="transform scale-100 opacity-100"
      leave-class="transform scale-100 opacity-100"
      leave-active-class="transition-opacity duration-150 ease-in"
      leave-to-class="transform opacity-0"
    >
      <div v-if="!isLoader" class="w-full max-w-md">
        <div>
          <!-- todo: logout UI -->
          <img class="w-auto h-12 mx-auto cursor-pointer" src="~/static/logo.svg" alt="Workflow" @click="signOut">
          <h1 class="mt-6 text-3xl font-extrabold leading-9 text-center text-gray-900">
            Sign in to your account
          </h1>
          <p class="mt-2 text-sm leading-5 text-center text-gray-600 max-w">
            Or
            <nuxt-link to="/" href="#" class="font-medium text-blue-600 transition duration-150 ease-in-out hover:text-blue-500 focus:outline-none focus:underline">
              return to the homepage
            </nuxt-link>
          </p>
        </div>
        <form class="mt-8" action="#" method="POST">
          <input type="hidden" name="remember" value="true">
          <div class="rounded-md shadow-sm">
            <div>
              <input
                v-model="email"
                aria-label="Email address"
                name="email"
                type="text"
                required
                class="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                placeholder="Email address"
              >
            </div>
            <div class="-mt-px">
              <input
                v-model="pw"
                aria-label="Password"
                name="password"
                type="password"
                required
                class="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                placeholder="Password"
              >
            </div>
          </div>

          <div class="flex items-center justify-between mt-6">
            <div class="flex items-center">
              <input id="remember_me" checked disabled type="checkbox" class="w-4 h-4 text-blue-600 transition duration-150 ease-in-out form-checkbox">
              <label for="remember_me" class="block ml-2 text-sm leading-5 text-gray-900">
                Remember me
              </label>
            </div>

            <div class="text-sm leading-5">
              <a href="#" class="font-medium text-blue-600 transition duration-150 ease-in-out hover:text-blue-500 focus:outline-none focus:underline">
                Forgot your password?
              </a>
            </div>
          </div>

          <div class="mt-6">
            <button type="submit" class="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white transition duration-150 ease-in-out bg-blue-600 border border-transparent rounded-md group hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200 focus:ring-opacity-50 active:bg-blue-700" @click.prevent="login">
              <span class="absolute left-0 pl-3 inset-y">
                <svg class="w-5 h-5 text-blue-500 transition duration-150 ease-in-out group-hover:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                </svg>
              </span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </transition>
    <transition
      enter-class="transform opacity-0"
      enter-active-class="transition-opacity duration-200 ease-out"
      enter-to-class="transform scale-100 opacity-100"
      leave-class="transform scale-100 opacity-100"
      leave-active-class="transition-opacity duration-150 ease-in"
      leave-to-class="transform opacity-0"
    >
      <Loader v-if="isLoader" />
    </transition>
  </div>
</template>

<script>
import Loader from '~/components/Loader'
export default {
  name: 'LoginWrapper',
  components: {
    Loader
  },
  data () {
    return {
      email: '',
      pw: '',
      isLoader: false
    }
  },
  methods: {
    signOut () {
      this.$emit('logout')
    },
    login () {
      this.isLoader = true
      console.log('sending login')
      this.$emit('login', this.email, this.pw)
    }
  }
}
</script>
