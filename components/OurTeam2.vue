<template>
  <div class="mt-8">
    <h3 class="text-lg font-medium text-gray-900 leading-6">
      Your team
    </h3>
    <ul class="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <li v-for="employee in otherEmployees" :key="employee.name" class="bg-white rounded-lg shadow col-span-1">
        <div class="flex items-center justify-between w-full p-6 space-x-6">
          <div class="flex-1 truncate">
            <div class="flex items-center space-x-3">
              <h3 class="text-sm font-medium text-gray-900 truncate leading-5">
                {{ employee.name }}
              </h3>
              <span class="flex-shrink-0 inline-block px-2 py-0.5 text-gray-800 text-xs leading-4 font-medium bg-gray-100 rounded-full">Admin</span>
            </div>
            <p class="mt-1 text-sm text-gray-500 truncate leading-5">
              {{ employee.position }}
            </p>
          </div>
          <div class="flex items-center flex-shrink-0 overflow-hidden bg-gray-300 rounded-full focus:outline-none focus:shadow-solid">
            <img class="object-cover w-10 h-10 rounded-full" :src="employee.image" alt="Profile picture">
          </div>
        <!-- <img class="flex-shrink-0 w-10 h-10 bg-gray-300 rounded-full" :src="employee.image" alt=""> -->
        </div>
        <div class="border-t border-gray-200">
          <div class="flex -mt-px">
            <div class="flex flex-1 w-0 border-r border-gray-200">
              <a :href="'mailto:' + employee.email" class="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border border-transparent rounded-bl-lg leading-5 transition duration-150 ease-in-out hover:text-gray-500 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:border-blue-300 focus:z-10">
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
  </div>
</template>

<script>
export default {
  name: 'OurTeam2',
  data () {
    return {
      teamMembers: [
        {
          name: 'Grant Twilley',
          position: 'Founder & CEO',
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
  },
  computed: {
    otherEmployees () {
      const first = this.$store.getters.getFirst || 'Admin'
      return this.teamMembers.filter(x => x.name.split(' ')[0] !== first)
    }
  }
}
</script>
