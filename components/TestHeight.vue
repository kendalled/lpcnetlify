<template>
  <div class="px-3 pt-10 pb-20 bg-gray-100">
    <h1 class="text-center text-gray-600">
      <div class="font-bold">
        Smooth Accordion
      </div>
      using Alpine.js (w/ x-for) + Tailwind CSS
    </h1>

    <div class="max-w-2xl mx-auto my-10 space-y-4 lg:space-y-6">
      <section v-for="(item, index) in faq" :key="`item-{$index}`">
        <div class="p-3 bg-white rounded-md shadow-md item">
          <div class="flex items-center cursor-pointer" @click="faq_selected !== index ? faq_selected = index : faq_selected = null">
            <div class="flex items-center justify-center w-8 h-8 text-lg font-bold text-indigo-400 bg-indigo-100 rounded-md md:w-10 md:h-10 font-display">
              <span>{{ index + 1 }}</span>
            </div>
            <div class="ml-3 text-indigo-600 md:ml-4 lg:ml-6 md:text-lg">
              <span>{{ item.question }}</span>
            </div>
          </div>
          <div class="relative overflow-hidden transition-all duration-700 max-h-0" x-bind:style="faq_selected === index ? `max-height:  ${ $el.scrollHeight }px` : ``">
            <div class="py-2 pl-3 ml-8 space-y-3 text-gray-700 md:ml-10 md:pl-4 lg:pl-6">
              <span v-for="(ans, index) in item.answer" :key="`item-ans-{$index}`">
                <p>{{ ans }}</p>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestHeight',
  data () {
    return {
      faq: [
        {
          question: 'What is Alpine.js?',
          answer: [
            'Bacon ipsum dolor amet boudin hamburger jerky spare ribs, bacon leberkas beef ribs sausage turkey pancetta tenderloin chicken.',
            'Meatball landjaeger turducken. Bacon bresaola tenderloin cow rump pork chop.'
          ]
        },
        {
          question: 'Is it difficult to learn?',
          answer: [
            'Boudin sausage hamburger tenderloin beef chislic prosciutto pancetta. Beef tongue pork meatloaf.',
            'Chicken pork chop turducken ground round. Shank bresaola burgdoggen short loin ham hock ham. Boudin tri-tip swine drumstick strip steak tail.'
          ]
        },
        {
          question: 'How can I use this code?',
          answer: [
            'Salami filet mignon strip steak venison rump chicken bresaola. Shank flank tongue ribeye. Beef pork chop sirloin venison chicken jowl.',
            'Doner corned beef kielbasa beef ribs ground round cow salami swine.'
          ]
        }
      ],
      faq_selected: null
    }
  }
}
</script>
