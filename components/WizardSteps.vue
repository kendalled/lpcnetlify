<template>
  <div class="w-full py-6 mx-auto max-w-7xl">
    <div class="flex">
      <div class="w-1/4">
        <div class="relative mb-2">
          <div class="flex items-center w-10 h-10 mx-auto text-lg text-white bg-green-500 rounded-full">
            <span class="w-full text-center text-white">
              <svg class="w-full fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path class="heroicon-ui" d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zm14 8V5H5v6h14zm0 2H5v6h14v-6zM8 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
              </svg>
            </span>
          </div>
        </div>

        <div class="text-xs text-center md:text-base">
          Select Server
        </div>
      </div>

      <div class="w-1/4">
        <div class="relative mb-2">
          <div class="absolute flex items-center content-center align-middle align-center" style="width: calc(100% - 2.5rem - 1rem); top: 50%; transform: translate(-50%, -50%)">
            <div class="items-center flex-1 w-full align-middle bg-gray-200 rounded align-center">
              <div class="w-0 py-1 bg-green-300 rounded" style="width: 100%;" />
            </div>
          </div>

          <div class="flex items-center w-10 h-10 mx-auto text-lg text-white bg-green-500 rounded-full">
            <span class="w-full text-center text-white">
              <svg class="w-full fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path class="heroicon-ui" d="M19 10h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2h-2a1 1 0 0 1 0-2h2V8a1 1 0 0 1 2 0v2zM9 12A5 5 0 1 1 9 2a5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm8 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h5a5 5 0 0 1 5 5v2z" />
              </svg>
            </span>
          </div>
        </div>

        <div class="text-xs text-center md:text-base">
          Add User
        </div>
      </div>

      <div class="w-1/4">
        <div class="relative mb-2">
          <div class="absolute flex items-center content-center align-middle align-center" style="width: calc(100% - 2.5rem - 1rem); top: 50%; transform: translate(-50%, -50%)">
            <div class="items-center flex-1 w-full align-middle bg-gray-200 rounded align-center">
              <div class="w-0 py-1 bg-green-300 rounded" style="width: 33%;" />
            </div>
          </div>

          <div class="flex items-center w-10 h-10 mx-auto text-lg text-white bg-white border-2 border-gray-200 rounded-full">
            <span class="w-full text-center text-gray-600">
              <svg class="w-full fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path class="heroicon-ui" d="M9 4.58V4c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v.58a8 8 0 0 1 1.92 1.11l.5-.29a2 2 0 0 1 2.74.73l1 1.74a2 2 0 0 1-.73 2.73l-.5.29a8.06 8.06 0 0 1 0 2.22l.5.3a2 2 0 0 1 .73 2.72l-1 1.74a2 2 0 0 1-2.73.73l-.5-.3A8 8 0 0 1 15 19.43V20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-.58a8 8 0 0 1-1.92-1.11l-.5.29a2 2 0 0 1-2.74-.73l-1-1.74a2 2 0 0 1 .73-2.73l.5-.29a8.06 8.06 0 0 1 0-2.22l-.5-.3a2 2 0 0 1-.73-2.72l1-1.74a2 2 0 0 1 2.73-.73l.5.3A8 8 0 0 1 9 4.57zM7.88 7.64l-.54.51-1.77-1.02-1 1.74 1.76 1.01-.17.73a6.02 6.02 0 0 0 0 2.78l.17.73-1.76 1.01 1 1.74 1.77-1.02.54.51a6 6 0 0 0 2.4 1.4l.72.2V20h2v-2.04l.71-.2a6 6 0 0 0 2.41-1.4l.54-.51 1.77 1.02 1-1.74-1.76-1.01.17-.73a6.02 6.02 0 0 0 0-2.78l-.17-.73 1.76-1.01-1-1.74-1.77 1.02-.54-.51a6 6 0 0 0-2.4-1.4l-.72-.2V4h-2v2.04l-.71.2a6 6 0 0 0-2.41 1.4zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
              </svg>
            </span>
          </div>
        </div>

        <div class="text-xs text-center md:text-base">
          Setting
        </div>
      </div>

      <div class="w-1/4">
        <div class="relative mb-2">
          <div class="absolute flex items-center content-center align-middle align-center" style="width: calc(100% - 2.5rem - 1rem); top: 50%; transform: translate(-50%, -50%)">
            <div class="items-center flex-1 w-full align-middle bg-gray-200 rounded align-center">
              <div class="w-0 py-1 bg-green-300 rounded" style="width: 0%;" />
            </div>
          </div>

          <div class="flex items-center w-10 h-10 mx-auto text-lg text-white bg-white border-2 border-gray-200 rounded-full">
            <span class="w-full text-center text-gray-600">
              <svg class="w-full fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path class="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z" />
              </svg>
            </span>
          </div>
        </div>

        <div class="text-xs text-center md:text-base">
          Finished
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WizardSteps',
  data () {
    return {
      step: 0
    }
  }
}
</script>
