<template>
  <section class="grid max-w-2xl gap-8 mx-auto lg:grid-cols-3">
    <div
      v-for="card in cards"
      :key="card.id"
      class="flex flex-col mx-auto overflow-hidden transition-transform duration-150 ease-in-out transform bg-white rounded-lg shadow-md cursor-pointer sm:max-w-xs group hover:-translate-y-1"
    >
      <div class="flex h-24">
        <img
          :src="card.coverImage"
          alt=""
          class="object-cover object-center w-full h-full"
        >
      </div>
      <div class="p-3">
        <p class="text-sm font-medium leading-5 text-center text-gray-600 group-hover:text-gray-800">
          {{ card.title }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HelpCards',
  props: {
    cards: {
      type: Array,
      default () {
        return [
          {
            id: 1,
            title: 'Email support',
            coverImage:
            'https://images.unsplash.com/photo-1557200134-90327ee9fafa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80'
          },
          {
            id: 2,
            title: 'Phone support',
            coverImage:
            'https://images.unsplash.com/photo-1587560699334-bea93391dcef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80'
          },
          {
            id: 3,
            title: 'Live chat',
            coverImage:
            'https://images.unsplash.com/photo-1488998287214-1e668a8e0dc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80'
          }
        ]
      }
    }
  }
}
</script>
