<template>
  <!-- This example requires Tailwind CSS v1.4.0+ -->
  <div class="relative z-0">
    <div class="relative z-10 bg-white shadow">
      <div class="flex px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
        <button type="button" class="inline-flex items-center text-base font-medium text-gray-500 space-x-2 leading-6 transition duration-150 ease-in-out group hover:text-gray-900 focus:outline-none focus:text-gray-900">
          <span>Solutions</span>
          <!-- Item active: "text-gray-600", Item inactive: "text-gray-400" -->
          <svg class="w-5 h-5 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-500" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    </div>

    <!--
    Flyout menu, show/hide based on flyout menu state.

    Entering: "transition ease-out duration-200"
      From: "opacity-0 -translate-y-1"
      To: "opacity-100 translate-y-0"
    Leaving: "transition ease-in duration-150"
      From: "opacity-100 translate-y-0"
      To: "opacity-0 -translate-y-1"
  -->
    <div class="absolute inset-x-0 shadow-lg transform">
      <div class="absolute inset-0 flex">
        <div class="w-1/2 bg-white" />
        <div class="w-1/2 bg-gray-50" />
      </div>
      <div class="relative mx-auto grid grid-cols-1 max-w-7xl lg:grid-cols-2">
        <nav class="px-4 py-8 bg-white grid gap-y-10 sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12">
          <div class="space-y-5">
            <h3 class="text-sm font-medium tracking-wide text-gray-500 uppercase leading-5">
              Company
            </h3>
            <ul class="space-y-6">
              <li class="flow-root">
                <a href="#" class="flex items-center p-3 -m-3 text-base font-medium text-gray-900 space-x-4 leading-6 transition duration-150 ease-in-out rounded-md hover:bg-gray-50">
                  <svg
                    class="flex-shrink-0 w-6 h-6 text-gray-400"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>About</span>
                </a>
              </li>
              <li class="flow-root">
                <a href="#" class="flex items-center p-3 -m-3 text-base font-medium text-gray-900 space-x-4 leading-6 transition duration-150 ease-in-out rounded-md hover:bg-gray-50">
                  <svg
                    class="flex-shrink-0 w-6 h-6 text-gray-400"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span>Customers</span>
                </a>
              </li>
              <li class="flow-root">
                <a href="#" class="flex items-center p-3 -m-3 text-base font-medium text-gray-900 space-x-4 leading-6 transition duration-150 ease-in-out rounded-md hover:bg-gray-50">
                  <svg
                    class="flex-shrink-0 w-6 h-6 text-gray-400"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                  <span>Press</span>
                </a>
              </li>
              <li class="flow-root">
                <a href="#" class="flex items-center p-3 -m-3 text-base font-medium text-gray-900 space-x-4 leading-6 transition duration-150 ease-in-out rounded-md hover:bg-gray-50">
                  <svg
                    class="flex-shrink-0 w-6 h-6 text-gray-400"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Careers</span>
                </a>
              </li>
              <li class="flow-root">
                <a href="#" class="flex items-center p-3 -m-3 text-base font-medium text-gray-900 space-x-4 leading-6 transition duration-150 ease-in-out rounded-md hover:bg-gray-50">
                  <svg
                    class="flex-shrink-0 w-6 h-6 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span>Privacy</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="space-y-5">
            <h3 class="text-sm font-medium tracking-wide text-gray-500 uppercase leading-5">
              Resources
            </h3>
            <ul class="space-y-6">
              <li class="flow-root">
                <a href="#" class="flex items-center p-3 -m-3 text-base font-medium text-gray-900 space-x-4 leading-6 transition duration-150 ease-in-out rounded-md hover:bg-gray-50">
                  <svg
                    class="flex-shrink-0 w-6 h-6 text-gray-400"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span>Community</span>
                </a>
              </li>
              <li class="flow-root">
                <a href="#" class="flex items-center p-3 -m-3 text-base font-medium text-gray-900 space-x-4 leading-6 transition duration-150 ease-in-out rounded-md hover:bg-gray-50">
                  <svg class="flex-shrink-0 w-6 h-6 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  <span>Partners</span>
                </a>
              </li>
              <li class="flow-root">
                <a href="#" class="flex items-center p-3 -m-3 text-base font-medium text-gray-900 space-x-4 leading-6 transition duration-150 ease-in-out rounded-md hover:bg-gray-50">
                  <svg
                    class="flex-shrink-0 w-6 h-6 text-gray-400"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Guides</span>
                </a>
              </li>
              <li class="flow-root">
                <a href="#" class="flex items-center p-3 -m-3 text-base font-medium text-gray-900 space-x-4 leading-6 transition duration-150 ease-in-out rounded-md hover:bg-gray-50">
                  <svg
                    class="flex-shrink-0 w-6 h-6 text-gray-400"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Webinars</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div class="px-4 py-8 space-y-6 bg-gray-50 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
          <div class="space-y-6">
            <h3 class="text-sm font-medium tracking-wide text-gray-500 uppercase leading-5">
              From the blog
            </h3>
            <ul class="space-y-6">
              <li class="flow-root">
                <a href="#" class="flex p-3 -m-3 rounded-lg transition duration-150 ease-in-out hover:bg-gray-100 sm:space-x-8">
                  <div class="flex-shrink-0 hidden sm:block">
                    <img class="object-cover w-32 h-20 rounded-md" src="https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2849&q=80" alt="">
                  </div>
                  <div class="flex-1 w-0 space-y-1">
                    <h4 class="text-base font-medium text-gray-900 truncate leading-6">
                      Boost your conversion rate
                    </h4>
                    <p class="text-sm text-gray-500 leading-5">
                      Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.
                    </p>
                  </div>
                </a>
              </li>
              <li class="flow-root">
                <a href="#" class="flex p-3 -m-3 rounded-lg transition duration-150 ease-in-out hover:bg-gray-100 sm:space-x-8">
                  <div class="flex-shrink-0 hidden sm:block">
                    <img class="object-cover w-32 h-20 rounded-md" src="https://images.unsplash.com/1/apple-gear-looking-pretty.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt="">
                  </div>
                  <div class="flex-1 w-0 space-y-1">
                    <h4 class="text-base font-medium text-gray-900 truncate leading-6">
                      How to use search engine optimization to drive traffic to your site
                    </h4>
                    <p class="text-sm text-gray-500 leading-5">
                      Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.
                    </p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div class="text-sm font-medium leading-5">
            <a href="#" class="text-blue-600 transition duration-150 ease-in-out hover:text-blue-500">
              View all posts &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FlyoutSolo',
  data () {
    return {
      mobileOpen: false,
      desktopOpen: false
    }
  }
}
</script>
