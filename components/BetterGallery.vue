<template>
  <section class="text-gray-700 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col w-full mb-20 text-center">
        <h1 class="mb-4 text-2xl font-medium text-gray-900 sm:text-3xl title-font">
          Master Cleanse Reliac Heirloom
        </h1>
        <p class="mx-auto text-base leading-relaxed lg:w-2/3">
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.
        </p>
      </div>
      <div class="flex flex-wrap -m-4">
        <div v-for="i in 6" :key="i" class="p-4 lg:w-1/3 sm:w-1/2">
          <div class="relative flex">
            <img alt="gallery" class="absolute inset-0 object-cover object-center w-full h-full rounded shadow-md" src="https://dummyimage.com/600x360">
            <div class="relative z-10 w-full px-8 py-10 transition-opacity duration-150 ease-in-out bg-white border-4 border-gray-200 rounded opacity-0 hover:opacity-100">
              <h2 class="mb-1 text-sm font-medium tracking-widest text-blue-500 title-font">
                THE SUBTITLE
              </h2>
              <h1 class="mb-3 text-lg font-medium text-gray-900 title-font">
                Shooting Stars
              </h1>
              <p class="leading-relaxed">
                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BetterGallery'
}
</script>
