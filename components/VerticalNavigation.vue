<template>
  <nav class="w-full max-w-xs">
    <h3 class="mt-4 mb-8 text-4xl antialiased font-extrabold text-white">
      Pin Processes
    </h3>
    <a
      v-for="(choice, c) in choices"
      :key="choice"
      href="#"
      :class="[c > 0 ? 'mt-1' : 'mt-0', choice === selected ? 'text-gray-900 bg-gray-100 hover:bg-gray-100 focus:bg-gray-200' : 'text-blue-50 hover:bg-blue-50 focus:text-blue-500 focus:bg-blue-50']"
      class="flex items-center px-3 py-2 text-sm font-medium leading-5 transition duration-150 ease-in-out rounded-md group hover:text-gray-900 focus:outline-none"
      aria-current="page"
      @click.prevent="changeSelected(choice)"
    >
      <span class="truncate">
        {{ choice }}
      </span>
    </a>
    <div class="hidden mt-8">
      <h3 id="projects-headline" class="px-3 text-xs font-semibold tracking-wider text-blue-100 uppercase leading-4">
        Projects
      </h3>
      <div class="mt-1" role="group" aria-labelledby="projects-headline">
        <a href="#" class="flex items-center px-3 py-2 text-sm font-medium leading-5 transition duration-150 ease-in-out rounded-md text-blue-50 group hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50">
          <span class="truncate">
            Website redesign
          </span>
        </a>
        <a href="#" class="flex items-center px-3 py-2 mt-1 text-sm font-medium leading-5 transition duration-150 ease-in-out rounded-md text-blue-50 group hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50">
          <span class="truncate">
            GraphQL API
          </span>
        </a>
        <a href="#" class="flex items-center px-3 py-2 mt-1 text-sm font-medium leading-5 transition duration-150 ease-in-out rounded-md text-blue-50 group hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50">
          <span class="truncate">
            Customer migration guides
          </span>
        </a>
        <a href="#" class="flex items-center px-3 py-2 mt-1 text-sm font-medium leading-5 transition duration-150 ease-in-out rounded-md text-blue-50 group hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50">
          <span class="truncate">
            Profit sharing program
          </span>
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'VerticalNavigation',
  data () {
    return {
      selected: 'Soft Enamel',
      choices: [
        'Soft Enamel',
        'Hard Enamel',
        'Die Struck',
        'Offset Printed',
        'Silk Screened'
      ]
    }
  },
  methods: {
    changeSelected (choice) {
      this.selected = choice
      this.$emit('chosen', choice)
    }
  }
}
</script>
