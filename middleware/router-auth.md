// This is `@middleware/router-auth.js`
// Credit to https://www.davidroyer.me/blog/nuxtjs-firebase-auth/

export default function ({
  store,
  redirect,
  route
}) {
  store.state.user !== null && route.name === 'login' ? redirect('/admin') : console.log('u good')
  store.state.user === null && isAdminRoute(route) ? redirect('/login') : console.log('u bad')
}

function isAdminRoute (route) {
  if (route.matched.some(record => record.path === '/admin')) {
    return true
  }
}


<template>
  <div class="flex flex-col justify-center min-h-screen py-12 bg-gray-50 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <!-- <img class="w-auto mx-auto h-9" src="~/static/lapel.svg" alt="Lapel Pins and Coins"> -->
      <h2 class="mt-6 text-3xl font-extrabold text-center text-gray-900 leading-9">
        Sign in to your account
      </h2>
      <p class="mt-2 text-sm text-center text-gray-600 leading-5 max-w">
        Or
        <nuxt-link to="/" href="#" class="font-medium text-blue-600 transition duration-150 ease-in-out hover:text-blue-500 focus:outline-none focus:underline">
          return to the homepage
        </nuxt-link>
      </p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
        <form action="#" method="POST">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 leading-5">
              Email address
            </label>
            <div class="mt-1 rounded-md shadow-sm">
              <input id="email" placeholder="you@example.com" type="email" required class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 appearance-none transition duration-150 ease-in-out rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:border-blue-300 sm:text-sm sm:leading-5">
            </div>
          </div>

          <div class="mt-6">
            <label for="password" class="block text-sm font-medium text-gray-700 leading-5">
              Password
            </label>
            <div class="mt-1 rounded-md shadow-sm">
              <input id="password" placeholder="••••••••••" type="password" required class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 appearance-none transition duration-150 ease-in-out rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:border-blue-300 sm:text-sm sm:leading-5">
            </div>
          </div>

          <div class="flex items-center justify-between mt-6">
            <div class="flex items-center">
              <input id="remember_me" checked disabled type="checkbox" class="w-4 h-4 text-blue-600 transition duration-150 ease-in-out form-checkbox">
              <label for="remember_me" class="block ml-2 text-sm text-gray-900 leading-5">
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
            <span class="block w-full rounded-md shadow-sm">
              <button type="submit" class="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent transition duration-150 ease-in-out rounded-md hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200 focus:ring-opacity-50 active:bg-blue-700">
                Sign in
              </button>
            </span>
          </div>
        </form>

        <div class="mt-6">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300" />
            </div>
            <div class="relative flex justify-center text-sm leading-5">
              <span class="px-2 text-gray-500 bg-white">
                Or continue with
              </span>
            </div>
          </div>

          <div class="mt-6 grid grid-cols-3 gap-3">
            <div>
              <span class="inline-flex w-full rounded-md shadow-sm">
                <button type="button" class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 leading-5 transition duration-150 ease-in-out rounded-md hover:text-gray-400 focus:outline-none focus:border-blue-300 focus:ring-blue">
                  <svg class="h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clip-rule="evenodd" />
                  </svg>
                </button>
              </span>
            </div>

            <div>
              <span class="inline-flex w-full rounded-md shadow-sm">
                <button type="button" class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 leading-5 transition duration-150 ease-in-out rounded-md hover:text-gray-400 focus:outline-none focus:border-blue-300 focus:ring-blue">
                  <svg class="h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </button>
              </span>
            </div>

            <div>
              <span class="inline-flex w-full rounded-md shadow-sm">
                <button type="button" class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 leading-5 transition duration-150 ease-in-out rounded-md hover:text-gray-400 focus:outline-none focus:border-blue-300 focus:ring-blue">
                  <svg class="h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd" />
                  </svg>
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'login'
}
</script>