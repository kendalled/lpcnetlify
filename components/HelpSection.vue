<template>
  <transition-group
    enter-active-class="transition duration-150 ease-out transform"
    enter-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="absolute transition duration-100 ease-in transform"
    leave-class="opacity-100"
    leave-to-class="opacity-0"
    move-class="transition duration-300 ease-in-out transform"
    tag="main"
    class="max-w-screen-xl px-4 pt-16 pb-24 mx-auto space-y-10 sm:px-6 lg:px-8"
  >
    <h1 key="title" class="text-3xl font-bold text-center text-gray-800 lg:text-4xl">
      How can we help you?
    </h1>
    <div key="search" class="max-w-md mx-auto">
      <label class="relative block w-full mx-auto">
        <span class="sr-only">Search</span>
        <span class="absolute inset-y-0 flex items-center pl-4">
          <svg
            class="w-6 h-6 text-gray-500"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </span>
        <span class="block w-full rounded-lg shadow-lg">
          <input
            type="text"
            placeholder="Describe your question"
            class="block w-full py-4 pl-12 pr-4 text-gray-900 placeholder-gray-500 transition duration-300 ease-in-out bg-white rounded-lg sm:text-sm sm:leading-5 focus:outline-none focus:ring"
          >
        </span>
      </label>
    </div>
    <section key="list" class="max-w-md mx-auto">
      <transition-group
        enter-active-class="transition duration-150 ease-out transform"
        enter-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="absolute transition duration-100 ease-in transform"
        leave-class="opacity-100"
        leave-to-class="opacity-0"
        move-class="transition duration-300 ease-in-out transform"
        tag="ul"
        class="divide-y-2 divide-gray-200"
      >
        <li
          v-for="item in questions"
          :key="item.id"
          class="relative py-4 space-y-1 cursor-pointer"
          @click="toggle(item.id)"
        >
          <div class="flex justify-between">
            <h2 class="text-base font-medium text-gray-700">
              {{ item.query }}
            </h2>
            <svg
              :class="{ 'rotate-180': currentIndex === item.id }"
              class="w-5 h-5 text-gray-400 transition duration-300 ease-in-out transform"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <transition
            enter-active-class="transition duration-150 ease-out delay-100 transform"
            enter-class="-translate-y-2 opacity-0"
            enter-to-class="translate-y-0 opacity-100"
            leave-active-class="absolute transition duration-100 ease-in transform"
            leave-class="translate-y-0 opacity-100"
            leave-to-class="-translate-y-2 opacity-0"
          >
            <p
              v-show="isOpen && currentIndex === item.id"
              class="w-full text-sm leading-5 text-gray-700"
            >
              {{ item.answer }}
            </p>
          </transition>
        </li>
      </transition-group>
    </section>

    <HelpCards key="cards" :cards="cards" />
  </transition-group>
</template>

<script>
import HelpCards from '~/components/HelpCards'
export default {
  name: 'HelpSection',
  components: {
    HelpCards
  },
  data () {
    return {
      isOpen: false,
      currentIndex: null,
      questions: [
        {
          id: 1,
          query: 'How long does shipping take?',
          answer: 'Once your design is finalized and you have checked out, you can expect to receive your custom items in under 14 days. Have a tight deadline? No worries! Rush orders are available.'
        },
        {
          id: 2,
          query: 'What material should I choose?',
          answer: 'There are several materials and plating options available to make your custom item stand out. If you are unsure about what choices on the quote form suit your needs, feel free to ask! At Lapel Pins and Coins, we believe in superior customer service. Each order is different, so we always help you choose the options that best suit your design.'
        },
        {
          id: 3,
          query: 'Will I get my product on time?',
          answer: 'We will work with you to meet any deadline! Once we have received your approval and payment, we begin production on your order immediately. We give you expected delivery dates, but we have no control over unforeseen circumstances. If you experience any problem with your order arriving, contact us! We’ll be here to help.'
        },
        {
          id: 4,
          query: 'Can I change my design?',
          answer: 'Yes! We offer you unlimited revisions on all art proofs, free of charge. Change it up as much as you’d like to get your design just right.'
        },
        {
          id: 5,
          query: 'What is your minimum order size?',
          answer: 'Our minimum order quantity for pins is 100 pieces. Challenge coin orders need to be a minimum of 50 pieces. Contact us for any additional questions about your order size.'
        }
      ],
      cards: [
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
  },
  methods: {
    toggle (id) {
      if (this.currentIndex !== id) {
        this.isOpen = true
        this.currentIndex = id
      } else if (this.currentIndex === id) {
        this.currentIndex = null
      }
    }
  }
}
</script>
