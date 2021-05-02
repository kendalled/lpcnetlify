<template>
  <div ref="flyout" class="absolute inset-x-0 hidden shadow-lg transform md:block" @click="emitClose">
    <div class="absolute inset-0 flex">
      <div class="w-1/2 bg-white" />
      <div class="w-1/2 bg-gray-50" />
    </div>
    <div class="relative mx-auto grid grid-cols-1 max-w-7xl lg:grid-cols-2">
      <nav class="px-4 py-8 bg-white grid gap-y-10 sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12">
        <div class="space-y-5">
          <h3 class="text-sm font-medium tracking-wide text-gray-500 uppercase leading-5">
            Pin types
          </h3>
          <ul class="space-y-6">
            <li class="flow-root">
              <nuxt-link to="/pins/hard-enamel" class="flex items-center p-3 -m-3 text-base font-medium text-gray-900 space-x-4 leading-6 transition duration-150 ease-in-out rounded-md hover:bg-gray-100">
                <span>Hard Enamel</span>
              </nuxt-link>
            </li>
            <li class="flow-root">
              <nuxt-link to="/pins/die-struck" class="flex items-center p-3 -m-3 text-base font-medium text-gray-900 space-x-4 leading-6 transition duration-150 ease-in-out rounded-md hover:bg-gray-100">
                <span>Die Struck</span>
              </nuxt-link>
            </li>
            <li class="flow-root">
              <nuxt-link to="/pins/soft-enamel" class="flex items-center p-3 -m-3 text-base font-medium text-gray-900 space-x-4 leading-6 transition duration-150 ease-in-out rounded-md hover:bg-gray-100">
                <span>Soft Enamel</span>
              </nuxt-link>
            </li>
            <li class="flow-root">
              <nuxt-link to="/pins/offset-printed" class="flex items-center p-3 -m-3 text-base font-medium text-gray-900 space-x-4 leading-6 transition duration-150 ease-in-out rounded-md hover:bg-gray-100">
                <span>Offset Printed</span>
              </nuxt-link>
            </li>
            <li class="flow-root">
              <nuxt-link to="/pins/silk-screen" class="flex items-center p-3 -m-3 text-base font-medium text-gray-900 space-x-4 leading-6 transition duration-150 ease-in-out rounded-md hover:bg-gray-100">
                <span>Silk Screened</span>
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="space-y-5">
          <h3 class="text-sm font-medium tracking-wide text-gray-500 uppercase leading-5">
            Popular
          </h3>
          <ul class="space-y-6">
            <li class="flow-root">
              <nuxt-link to="/pins/sports-trading" class="flex items-center p-3 -m-3 text-base font-medium text-gray-900 space-x-4 leading-6 transition duration-150 ease-in-out rounded-md hover:bg-gray-100">
                <span>Sports Pins</span>
              </nuxt-link>
            </li>
            <li class="flow-root">
              <nuxt-link to="/pins/medical" class="flex items-center p-3 -m-3 text-base font-medium text-gray-900 space-x-4 leading-6 transition duration-150 ease-in-out rounded-md hover:bg-gray-100">
                <span>Nursing Pins</span>
              </nuxt-link>
            </li>
            <li class="flow-root">
              <nuxt-link to="/pins/school" class="flex items-center p-3 -m-3 text-base font-medium text-gray-900 space-x-4 leading-6 transition duration-150 ease-in-out rounded-md hover:bg-gray-100">
                <span>School Pins</span>
              </nuxt-link>
            </li>
            <li class="flow-root">
              <nuxt-link to="/pins/video-game" class="flex items-center p-3 -m-3 text-base font-medium text-gray-900 space-x-4 leading-6 transition duration-150 ease-in-out rounded-md hover:bg-gray-100">
                <span>Gaming Pins</span>
              </nuxt-link>
            </li>
            <li class="flow-root">
              <nuxt-link to="/pins/military" class="flex items-center p-3 -m-3 text-base font-medium text-gray-900 space-x-4 leading-6 transition duration-150 ease-in-out rounded-md hover:bg-gray-100">
                <span>Military Pins</span>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </nav>
      <nav class="px-4 py-8 grid gap-y-10 bg-gray-50 sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
        <div class="space-y-5">
          <h3 class="text-sm font-medium tracking-wide text-gray-500 uppercase leading-5">
            hobby
          </h3>
          <ul class="space-y-6">
            <li class="flow-root">
              <nuxt-link to="/pins/hard-enamel" class="flex items-center p-3 -m-3 text-base font-medium text-gray-900 space-x-4 leading-6 transition duration-150 ease-in-out rounded-md hover:bg-gray-100">
                <span>Hard Enamel</span>
              </nuxt-link>
            </li>
            <li class="flow-root">
              <nuxt-link to="/pins/die-struck" class="flex items-center p-3 -m-3 text-base font-medium text-gray-900 space-x-4 leading-6 transition duration-150 ease-in-out rounded-md hover:bg-gray-100">
                <span>Die Struck</span>
              </nuxt-link>
            </li>
            <li class="flow-root">
              <nuxt-link to="/pins/soft-enamel" class="flex items-center p-3 -m-3 text-base font-medium text-gray-900 space-x-4 leading-6 transition duration-150 ease-in-out rounded-md hover:bg-gray-100">
                <span>Soft Enamel</span>
              </nuxt-link>
            </li>
            <li class="flow-root">
              <nuxt-link to="/pins/offset-printed" class="flex items-center p-3 -m-3 text-base font-medium text-gray-900 space-x-4 leading-6 transition duration-150 ease-in-out rounded-md hover:bg-gray-100">
                <span>Offset Printed</span>
              </nuxt-link>
            </li>
            <li class="flow-root">
              <nuxt-link to="/pins/silk-screen" class="flex items-center p-3 -m-3 text-base font-medium text-gray-900 space-x-4 leading-6 transition duration-150 ease-in-out rounded-md hover:bg-gray-100">
                <span>Silk Screened</span>
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="space-y-5">
          <h3 class="text-sm font-medium tracking-wide text-gray-500 uppercase leading-5">
            Corporate
          </h3>
          <ul class="space-y-6">
            <li class="flow-root">
              <nuxt-link to="/pins/sports-trading" class="flex items-center p-3 -m-3 text-base font-medium text-gray-900 space-x-4 leading-6 transition duration-150 ease-in-out rounded-md hover:bg-gray-100">
                <span>Team Pins</span>
              </nuxt-link>
            </li>
            <li class="flow-root">
              <nuxt-link to="/pins/medical" class="flex items-center p-3 -m-3 text-base font-medium text-gray-900 space-x-4 leading-6 transition duration-150 ease-in-out rounded-md hover:bg-gray-100">
                <span>Nursing Pins</span>
              </nuxt-link>
            </li>
            <li class="flow-root">
              <nuxt-link to="/pins/school" class="flex items-center p-3 -m-3 text-base font-medium text-gray-900 space-x-4 leading-6 transition duration-150 ease-in-out rounded-md hover:bg-gray-100">
                <span>School Pins</span>
              </nuxt-link>
            </li>
            <li class="flow-root">
              <nuxt-link to="/pins/video-game" class="flex items-center p-3 -m-3 text-base font-medium text-gray-900 space-x-4 leading-6 transition duration-150 ease-in-out rounded-md hover:bg-gray-100">
                <span>Gaming Pins</span>
              </nuxt-link>
            </li>
            <li class="flow-root">
              <nuxt-link to="/pins/military" class="flex items-center p-3 -m-3 text-base font-medium text-gray-900 space-x-4 leading-6 transition duration-150 ease-in-out rounded-md hover:bg-gray-100">
                <span>Military Pins</span>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </nav>
      <!-- <div class="px-4 py-8 space-y-6 bg-gray-50 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
            <div class="space-y-6">
              <h3 class="text-sm font-medium tracking-wide text-gray-500 uppercase leading-5">
                From the blog
              </h3>
              <ul class="space-y-6">
                <li class="flow-root">
                  <nuxt-link to="/blog/history-of-nursing-pins" class="flex p-3 -m-3 rounded-lg transition duration-150 ease-in-out hover:bg-gray-100 sm:space-x-8">
                    <div class="flex-shrink-0 hidden sm:block">
                      <img class="object-cover w-32 h-20 rounded-md" src="https://a.storyblok.com/f/78493/1024x1024/42b3b9c66f/nursingpins.jpg" alt="">
                    </div>
                    <div class="flex-1 w-0 space-y-1">
                      <h4 class="text-base font-medium text-gray-900 truncate leading-6">
                        The History of Nursing Pins
                      </h4>
                      <p class="text-sm text-gray-500 leading-5">
                        Nursing pins have played a vital role in healthcare for over twenty years. Learn about their interesting backstory.
                      </p>
                    </div>
                  </nuxt-link>
                </li>
                <li class="flow-root">
                  <nuxt-link to="/blog/disney-pins" class="flex p-3 -m-3 rounded-lg transition duration-150 ease-in-out hover:bg-gray-100 sm:space-x-8">
                    <div class="flex-shrink-0 hidden sm:block">
                      <img class="object-cover w-32 h-20 rounded-md" src="https://a.storyblok.com/f/78493/2000x1253/389368234a/disneypins.jpg" alt="">
                    </div>
                    <div class="flex-1 w-0 space-y-1">
                      <h4 class="text-base font-medium text-gray-900 truncate leading-6">
                        A Complete History of Disney Pins
                      </h4>
                      <p class="text-sm text-gray-500 leading-5">
                        An in-depth overview of the origins, changes, and loyal community behind Disney's famous lapel pins.
                      </p>
                    </div>
                  </nuxt-link>
                </li>
              </ul>
            </div>
            <div class="text-sm font-medium leading-5">
              <nuxt-link to="/blog" class="text-blue-600 transition duration-150 ease-in-out hover:text-blue-500">
                View all pins &rarr;
              </nuxt-link>
            </div>
          </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'FlyoutWorse',
  methods: {
    emitClose () {
      this.$emit('close')
    }
  }
}
</script>
