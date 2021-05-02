<template>
  <section class="text-gray-700">
    <div class="w-full mx-auto lg:py-6">
      <div class="flex flex-wrap px-4 py-8 mx-auto md:py-12 lg:max-w-7xl sm:px-6 lg:px-8">
        <div class="w-full mb-6 lg:w-1/2 lg:pr-10 lg:py-6 lg:mb-0">
          <h2 class="text-sm tracking-widest text-gray-500 uppercase title-font">
            custom designed
          </h2>
          <h1 class="text-3xl font-bold text-gray-900 title-font">
            Soft Enamel Pins
          </h1>
          <img alt="ecommerce" class="object-cover object-center w-full h-64 mb-4 rounded-md shadow-md lg:hidden" src="https://images.unsplash.com/photo-1526659074712-d13c13df4484?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&crop=focalpoint&fp-x=.565&fp-y=.55&w=800&h=800&q=80">
          <BrandTabs />
          <p class="mb-4 leading-relaxed">
            Our pins are struck from the highest quality metal to ensure a beautiful, classy, and durable product. They are extremely versatile and adaptable, with a variety of uses that are only limited by your imagination. Get started in minutes with a free quote.
          </p>
          <div class="flex py-2 border-t border-gray-300">
            <span class="text-gray-500">Production Method</span>
            <span class="ml-auto text-gray-900">Soft Enamel</span>
          </div>
          <div class="flex py-2 border-t border-gray-300">
            <span class="text-gray-500">Pin Plating</span>
            <span class="ml-auto text-gray-900">Antique Gold</span>
          </div>
          <div class="flex py-2 border-t border-gray-300">
            <span class="text-gray-500">Size (radius)</span>
            <span class="ml-auto text-gray-900">1.25"</span>
          </div>
          <div class="flex py-2 mb-6 border-t border-b border-gray-300">
            <span class="text-gray-500">Backing</span>
            <span class="ml-auto text-gray-900">Butterfly Clutch</span>
          </div>
          <div class="flex">
            <span class="text-2xl font-medium text-gray-900 title-font">$2.97</span>
            <button class="flex px-6 py-2 ml-auto text-white bg-blue-500 border-0 rounded focus:outline-none hover:bg-blue-600">
              Get a Quote
            </button>
            <button class="inline-flex items-center justify-center w-10 h-10 p-0 ml-4 text-gray-500 bg-gray-200 border-0 rounded-full">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
              </svg>
            </button>
          </div>
          <!-- <div class="absolute flex mt-6 space-x-4">
            <img alt="Pic 1" src="~/static/service.png" class="w-auto h-24 border border-gray-200 rounded-md">
            <img alt="Pic 2" src="~/static/serviceBack.png" class="w-auto h-24 border border-gray-200 rounded-md">
          </div> -->
        </div>
        <img alt="ecommerce" class="hidden object-cover object-center w-full h-64 rounded-md shadow-md lg:block lg:w-1/2 lg:h-auto" src="https://images.unsplash.com/photo-1526659074712-d13c13df4484?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&crop=focalpoint&fp-x=.565&fp-y=.55&w=800&h=800&q=80">
      </div>
    </div>
  </section>
</template>

<script>
import BrandTabs from '~/components/BrandTabs'
export default {
  name: 'ProductCard',
  components: {
    BrandTabs
  }
}
</script>

<style scoped>
.max-w-8xl {
  max-width: 97rem !important;
}
</style>
