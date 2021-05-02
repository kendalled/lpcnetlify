<template>
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
        <div class="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-50">
                  Name
                </th>
                <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-50">
                  URL
                </th>
                <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-50">
                  last update
                </th>
                <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-50">
                  Status
                </th>
                <th class="px-6 py-3 bg-gray-50" />
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="page in pages" :key="page.slug">
                <td class="px-6 py-4 text-sm font-medium leading-5 text-gray-900 whitespace-nowrap">
                  {{ page.title }}
                </td>
                <td class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-nowrap">
                  <a :href="'https://lapelpinsandcoins.com' + page.slug" target="_blank" class="hover:underline hover:text-gray-500">{{ 'https://lapelpinsandcoins.com' + page.slug }}</a>
                </td>
                <td class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-nowrap">
                  {{ page.date }}
                </td>
                <td class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-nowrap">
                  {{ page.status }}
                </td>
                <td class="px-6 py-4 text-sm font-medium leading-5 text-right whitespace-nowrap">
                  <a :href="'https://lapelpinsandcoins.com' + page.slug" target="_blank" class="text-blue-600 hover:text-blue-900">View</a>
                </td>
              </tr>

            <!-- More rows... -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageList',
  props: {
    pages: {
      type: Array,
      default () {
        return [
          {
            title: 'Offset Printed Pins',
            slug: '/pins/offset-printed',
            status: 'Published',
            date: 'September 26, 2020'
          },
          {
            title: 'Silk Screen Pins',
            slug: '/pins/silk-screen',
            status: 'Published',
            date: 'September 26, 2020'
          }
        ]
      }
    }
  }
}
</script>
