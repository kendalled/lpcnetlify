<template>
  <ul class="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    <li v-for="employee in teamMembers" :key="employee.name" class="flex flex-col text-center bg-white rounded-lg shadow col-span-1">
      <div class="flex flex-col flex-1 p-8">
        <div class="flex-shrink-0 w-32 h-32 mx-auto overflow-hidden bg-black rounded-full">
          <img class="object-cover w-auto h-full" :src="employee.image" alt="Profile picture">
        </div>
        <h3 class="mt-6 text-sm font-medium text-gray-900 leading-5">
          {{ employee.name }}
        </h3>
        <dl class="flex flex-col justify-between flex-grow mt-1">
          <dt class="sr-only">
            Title
          </dt>
          <dd class="text-sm text-gray-500 leading-5">
            {{ employee.position }}
          </dd>
          <dt class="sr-only">
            Role
          </dt>
          <dd class="mt-3">
            <span class="px-2 py-1 text-xs font-medium text-teal-800 bg-teal-100 rounded-full leading-4">Admin</span>
          </dd>
        </dl>
      </div>
      <div class="border-t border-gray-200">
        <div class="flex -mt-px">
          <div class="flex flex-1 w-0 border-r border-gray-200">
            <a target="_blank" rel="nofollow" :href="'mailto:' + employee.email" class="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border border-transparent rounded-bl-lg leading-5 transition duration-150 ease-in-out hover:text-gray-500 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:border-blue-300 focus:z-10">
              <svg class="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span class="ml-3">Email</span>
            </a>
          </div>
          <div class="flex flex-1 w-0 -ml-px">
            <a href="#" class="relative inline-flex items-center justify-center flex-1 w-0 py-4 text-sm font-medium text-gray-700 border border-transparent rounded-br-lg leading-5 transition duration-150 ease-in-out hover:text-gray-500 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:border-blue-300 focus:z-10">
              <svg class="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span class="ml-3">Call</span>
            </a>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'OurTeam',
  data () {
    return {
      teamMembers: [
        {
          name: 'Grant Twilley',
          position: 'Owner, CEO',
          email: 'ttaspeedracer@hotmail.com',
          image: 'https://firebasestorage.googleapis.com/v0/b/lapelpinsandcoins-5f3f1.appspot.com/o/Profiles%2Fracer.jpg?alt=media&token=bb622b38-d9ea-44c3-b173-feed6f9e4a3d'
        },
        {
          name: 'Tina Gardiakos',
          position: 'Lead Graphic Designer',
          email: 'artwork@lapelpinsandcoins.com',
          image: 'https://firebasestorage.googleapis.com/v0/b/lapelpinsandcoins-5f3f1.appspot.com/o/Profiles%2Fprofile.jpg?alt=media&token=ddba532c-30e2-44ea-a1a0-cfb708e1659a'
        },
        {
          name: 'Dani Bucaro',
          position: 'Sales & Content',
          email: 'info@lapelpinsandcoins.com',
          image: 'https://firebasestorage.googleapis.com/v0/b/lapelpinsandcoins-5f3f1.appspot.com/o/Profiles%2Fskunk.jpg?alt=media&token=d794ed0a-6a85-4fcd-8bfb-773b0776035f'
        },
        {
          name: 'Kendall Jackson',
          position: 'Web Developer',
          email: 'kendallkj00@gmail.com',
          image: 'https://firebasestorage.googleapis.com/v0/b/lapelpinsandcoins-5f3f1.appspot.com/o/Profiles%2Fhqdefault.jpg?alt=media&token=b6d51538-1d0f-40e8-b537-fc2d3650ed8a'
        }
      ]
    }
  }
}
</script>
