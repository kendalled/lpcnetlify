<template>
  <div class="overflow-hidden bg-white shadow  sm:rounded-lg">
    <div class="px-4 py-5 border-b border-gray-200 sm:px-6">
      <h3 class="text-lg font-medium text-gray-900 leading-6">
        Applicant Information
      </h3>
      <p class="max-w-2xl mt-1 text-sm text-gray-500 leading-5">
        Personal details and application.
      </p>
    </div>
    <div class="px-4 py-5 sm:px-6">
      <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
        <div class="sm:col-span-1">
          <dt class="text-sm font-medium text-gray-500 leading-5">
            Full name
          </dt>
          <dd class="mt-1 text-sm text-gray-900 leading-5">
            Margot Foster
          </dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="text-sm font-medium text-gray-500 leading-5">
            Application for
          </dt>
          <dd class="mt-1 text-sm text-gray-900 leading-5">
            Backend Developer
          </dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="text-sm font-medium text-gray-500 leading-5">
            Email address
          </dt>
          <dd class="mt-1 text-sm text-gray-900 leading-5">
            margotfoster@example.com
          </dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="text-sm font-medium text-gray-500 leading-5">
            Salary expectation
          </dt>
          <dd class="mt-1 text-sm text-gray-900 leading-5">
            $120,000
          </dd>
        </div>
        <div class="sm:col-span-2">
          <dt class="text-sm font-medium text-gray-500 leading-5">
            About
          </dt>
          <dd class="mt-1 text-sm text-gray-900 leading-5">
            Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
          </dd>
        </div>
        <div class="sm:col-span-2">
          <dt class="text-sm font-medium text-gray-500 leading-5">
            Attachments
          </dt>
          <dd class="mt-1 text-sm text-gray-900 leading-5">
            <ul class="border border-gray-200 rounded-md">
              <li class="flex items-center justify-between py-3 pl-3 pr-4 text-sm leading-5">
                <div class="flex items-center flex-1 w-0">
                  <svg class="flex-shrink-0 w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd" />
                  </svg>
                  <span class="flex-1 w-0 ml-2 truncate">
                    resume_back_end_developer.pdf
                  </span>
                </div>
                <div class="flex-shrink-0 ml-4">
                  <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out">
                    Download
                  </a>
                </div>
              </li>
              <li class="flex items-center justify-between py-3 pl-3 pr-4 text-sm border-t border-gray-200 leading-5">
                <div class="flex items-center flex-1 w-0">
                  <svg class="flex-shrink-0 w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd" />
                  </svg>
                  <span class="flex-1 w-0 ml-2 truncate">
                    coverletter_back_end_developer.pdf
                  </span>
                </div>
                <div class="flex-shrink-0 ml-4">
                  <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out">
                    Download
                  </a>
                </div>
              </li>
            </ul>
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DescriptionList'
}
</script>
