<template>
  <div class="mt-8">
    <h3 class="text-lg font-medium text-gray-900 leading-6">
      Last year
    </h3>
    <div class="mt-5 overflow-hidden bg-white rounded-lg shadow grid grid-cols-1 md:grid-cols-3">
      <div>
        <div class="px-4 py-5 sm:p-6">
          <dl>
            <dt class="text-base font-normal text-gray-900 leading-6">
              Total Subscribers
            </dt>
            <dd class="flex items-baseline justify-between mt-1 md:block lg:flex">
              <div class="flex items-baseline text-2xl font-semibold text-blue-600 leading-8">
                71,897
                <span class="ml-2 text-sm font-medium text-gray-500 leading-5">
                  from 70,946
                </span>
              </div>
            </dd>
          </dl>
        </div>
      </div>
      <div class="border-gray-200 md:border-0 md:border-l">
        <div class="px-4 py-5 sm:p-6">
          <dl>
            <dt class="text-base font-normal text-gray-900 leading-6">
              Avg. Open Rate
            </dt>
            <dd class="flex items-baseline justify-between mt-1 md:block lg:flex">
              <div class="flex items-baseline text-2xl font-semibold text-blue-600 leading-8">
                58.16%
                <span class="ml-2 text-sm font-medium text-gray-500 leading-5">
                  from 56.14%
                </span>
              </div>
            </dd>
          </dl>
        </div>
      </div>
      <div class="border-gray-200 md:border-0 md:border-l">
        <div class="px-4 py-5 sm:p-6">
          <dl>
            <dt class="text-base font-normal text-gray-900 leading-6">
              Avg. Click Rate
            </dt>
            <dd class="flex items-baseline justify-between mt-1 md:block lg:flex">
              <div class="flex items-baseline text-2xl font-semibold text-blue-600 leading-8">
                24.57%
                <span class="ml-2 text-sm font-medium text-gray-500 leading-5">
                  from 28.62
                </span>
              </div>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminStats2'
}
</script>
