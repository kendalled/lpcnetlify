<template>
  <nav class="bg-gray-800" @keydown.escape="dropOpen = false">
    <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="border-b border-gray-700">
        <div class="flex items-center justify-between h-16 px-4 sm:px-0">
          <!-- desktop links -->
          <div class="flex items-center">
            <nuxt-link class="flex-shrink-0" to="/">
              <img class="w-8 h-8" src="~/static/logo.svg" alt="">
            </nuxt-link>
            <div class="hidden md:block">
              <div class="flex items-baseline ml-10">
                <nuxt-link v-for="(link, l) in links" :key="l" :class="[l === 0 ? 'ml-0': 'ml-4', l === selected ? 'px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white' : 'px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700']" :to="link.href">
                  {{ link.title }}
                </nuxt-link>
              </div>
            </div>
          </div>
          <!-- desktop dropdown -->
          <div class="hidden md:block">
            <div class="flex items-center ml-4 md:ml-6">
              <button class="p-1 text-gray-400 border-2 border-transparent rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700">
                <svg class="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              <div class="relative ml-3">
                <div>
                  <button class="flex items-center max-w-xs overflow-hidden text-sm text-white rounded-full focus:outline-none focus:shadow-solid" @click="dropOpen = !dropOpen">
                    <img class="object-cover w-8 h-8 rounded-full" :src="userPhoto" alt="">
                  </button>
                </div>
                <div
                  v-if="dropOpen"
                  class="fixed inset-0 focus:outline-none"
                  tabindex="-1"
                  @click="dropOpen = false"
                />
                <transition
                  enter-class="transform scale-95 opacity-0"
                  enter-active-class="transition duration-200 ease-out"
                  enter-to-class="transform scale-100 opacity-100"
                  leave-class="transform scale-100 opacity-100"
                  leave-active-class="transition duration-75 ease-in"
                  leave-to-class="transform scale-95 opacity-0"
                >
                  <div
                    v-show="dropOpen"
                    class="absolute right-0 z-50 w-56 mt-2 origin-top-right rounded-md shadow-lg"
                  >
                    <div class="bg-white rounded-md ring-1 ring-black ring-opacity-5">
                      <div class="px-4 py-3">
                        <p class="text-sm leading-5">
                          Signed in as:
                        </p>
                        <p class="text-sm font-medium leading-5 text-gray-900">
                          {{ email }}
                        </p>
                      </div>
                      <div class="border-t border-gray-100" />
                      <div class="py-1">
                        <nuxt-link v-for="elem in dropdown" :key="elem.title" :to="elem.href" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
                          {{ elem.title }}
                        </nuxt-link>
                      </div>
                      <div class="border-t border-gray-100" />
                      <div class="py-1">
                        <form method="POST" action="#">
                          <button type="submit" class="block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" @click.prevent="signOut">
                            Sign out
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </transition>
              </div>
            </div>
          </div>
          <!-- mobile dropdown & links -->
          <div class="flex -mr-2 md:hidden">
            <button class="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white" @click="open = !open">
              <svg class="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path
                  :class="[open ? 'hidden' : 'inline-flex']"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
                <path
                  :class="[!open ? 'hidden' : 'inline-flex']"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div :class="[open ? 'block' : 'hidden']" class="border-b border-gray-700 md:hidden">
      <div class="px-2 py-3 sm:px-3">
        <nuxt-link v-for="(link, q) in links" :key="q" :to="link.href" :class="[q === 0 ? 'mt-0' : 'mt-1', q === selected ? 'block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none' : 'block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700']">
          {{ link.title }}
        </nuxt-link>
      </div>
      <div class="pt-4 pb-3 border-t border-gray-700">
        <div class="flex items-center px-5">
          <div class="flex-shrink-0 w-10 h-10 overflow-hidden rounded-full">
            <img class="object-cover w-10 h-10" :src="userPhoto" alt="">
          </div>
          <div class="ml-3">
            <div class="text-base font-medium leading-none text-white">
              {{ displayName }}
            </div>
            <div class="mt-1 text-sm font-medium leading-none text-gray-400">
              {{ email }}
            </div>
          </div>
        </div>
        <div class="px-2 mt-3">
          <nuxt-link v-for="(elem, o) in mobiledrop" :key="elem.title" :to="elem.href" :class="o === 0 ? 'mt-0' : 'mt-1'" class="block px-3 py-2 text-base font-medium text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">
            {{ elem.title }}
          </nuxt-link>
          <a href="#" class="block px-3 py-2 mt-1 text-base font-medium text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700" @click.prevent="signOut">Sign out</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
// import { auth } from '~/plugins/firebase'
export default {
  name: 'AdminNav',
  data () {
    return {
      dropOpen: false,
      open: false,
      displayName: 'Your Account',
      userPhoto: '',
      email: '',
      mobiledrop: [
        {
          title: 'Your Profile',
          href: '/admin'
        },
        {
          title: 'Settings',
          href: '/admin'
        }
      ],
      dropdown: [
        {
          title: 'Account Settings',
          href: '/admin'
        },
        {
          title: 'Support',
          href: '/admin'
        },
        {
          title: 'License',
          href: '/admin'
        }
      ],
      links: [
        {
          title: 'Dashboard',
          href: '/admin'
        },
        {
          title: 'Projects',
          href: '/admin/projects'
        },
        {
          title: 'Changelog',
          href: '/admin/changelog'
        },
        {
          title: 'Artwork',
          href: '/admin/artwork'
        },
        {
          title: 'Calculator',
          href: '/admin/pricing'
        }
      ]
    }
  },
  computed: {
    selected () {
      const path = this.$route.path
      return (path === '/admin' || path === '/admin/') ? 0 : path === '/admin/projects' ? 1 : path === '/admin/changelog' ? 2 : path === '/admin/artwork' ? 3 : 4
    }
  }
  // mounted () {
  //   const user = auth.currentUser
  //   if (user != null) {
  //     this.email = user.email
  //     this.displayName = user.displayName
  //     this.userPhoto = user.photoURL
  //   }
  // },
  // methods: {
  //   signOut () {
  //     const vm = this
  //     auth.signOut().then(function () {
  //       vm.$router.push('/admin/login')
  //       console.log('signing out...')
  //     }).catch(function (e) {
  //       console.log(e)
  //     })
  //   }
  // }
}
</script>
