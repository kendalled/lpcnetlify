<template>
  <!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
  <div class="pt-12 bg-gray-800 sm:pt-16">
    <div class="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-extrabold leading-9 text-gray-50 sm:text-4xl sm:leading-10">
          Trusted by developers from over 80 planets
        </h2>
        <p class="mt-3 text-xl leading-7 text-gray-100 sm:mt-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus repellat laudantium.
        </p>
      </div>
    </div>
    <div class="pb-12 mt-10 bg-blue-900 sm:pb-16">
      <div class="relative">
        <div class="absolute inset-0 bg-gray-800 h-1/2" />
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StackedStats'
}
</script>
