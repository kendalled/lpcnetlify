<template>
  <div class="flex w-full h-auto">
    <span
      class="relative inline-flex items-center justify-center w-10 h-5 cursor-pointer flex-no-shrink focus:outline-none"
      role="checkbox"
      tabindex="0"
      :aria-checked="value.toString()"
      @focus="focused = true"
      @blur="focused = false"
      @click="toggle()"
      @keydown.space.prevent="toggle()"
    >
      <span aria-hidden="true" :class="[toggled ? 'bg-indigo-600' : 'bg-gray-200']" class="absolute h-4 mx-auto rounded-full w-9 transition-colors ease-in-out duration-200" />
      <span aria-hidden="true" :class="[toggled ? 'translate-x-5' : 'translate-x-0', focused ? 'shadow-outline border-blue-300' : 'border-gray-200']" class="absolute left-0 inline-block w-5 h-5 bg-white border rounded-full shadow transform transition-transform ease-in-out duration-200" />
    </span>
    <p class="text-sm text-gray-400">
      Are you sure you want to delete it?
    </p>
  </div>
</template>

<script>
export default {
  name: 'Toggle',
  data () {
    return {
      focused: false,
      toggled: false
    }
  }
}
</script>
