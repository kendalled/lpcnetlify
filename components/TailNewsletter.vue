<template>
  <div class="bg-gray-800">
    <div class="px-4 py-12 mx-auto max-w-screen-xl sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center">
      <div class="lg:w-0 lg:flex-1">
        <h2 class="text-3xl font-extrabold tracking-tight text-white leading-9 sm:text-4xl sm:leading-10">
          Sign up for our newsletter
        </h2>
        <p class="max-w-3xl mt-3 text-lg text-gray-300 leading-6">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.
        </p>
      </div>
      <div class="mt-8 lg:mt-0 lg:ml-8">
        <form class="sm:flex">
          <input aria-label="Email address" type="email" required class="w-full px-5 py-3 text-base text-gray-900 placeholder-gray-500 bg-white border border-transparent appearance-none leading-6 rounded-md focus:outline-none focus:placeholder-gray-400 transition duration-150 ease-in-out sm:max-w-xs" placeholder="Enter your email">
          <div class="mt-3 shadow rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
            <button class="flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white bg-indigo-500 border border-transparent leading-6 rounded-md hover:bg-indigo-400 focus:outline-none focus:bg-indigo-400 transition duration-150 ease-in-out">
              Notify me
            </button>
          </div>
        </form>
        <p class="mt-3 text-sm text-gray-300 leading-5">
          We care about the protection of your data. Read our
          <a href="#" class="font-medium text-white underline">
            Privacy Policy.
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TailNewsletter'
}
</script>
