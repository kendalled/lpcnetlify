<template>
  <div id="sweg" class="flex flex-col">
    <nav class="w-auto py-4 ml-auto mr-56 border-l-2 border-blue-600 section-nav">
      <ol>
        <li v-for="(choice, j) in choices" :key="j">
          <a :href="'#' + choice.title" @click.prevent="testScroll(choice.title)">{{ choice.title }}</a>
        </li>
        <!-- Add more links -->
        <li>
          <a href="#Your-Quote">Details</a>
          <ul>
            <li class="">
              <a href="#Your-Quote--Design" @click.prevent="testScroll('Your-Quote--Design')">Design</a>
            </li>
            <li class="">
              <a href="#Your-Quote--Contact" @click.prevent="testScroll('Your-Quote--Contact')">Contact</a>
            </li>
            <li class="">
              <a href="#Your-Quote--Summary" @click.prevent="testScroll('Your-Quote--Summary')">Summary</a>
            </li>
          </ul>
        </li>
      </ol>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'ScrollNav',
  data () {
    return {
      choices: [
        {
          ind: 0,
          title: 'Production',
          imgs: [
            {
              uid: 0,
              title: 'Die Struck',
              src: 'https://lapelpinsandcoins.com/images/quote/AGold.png',
              pros: ['Great for intricate designs.', 'The lack of color allows for a professional look.', 'The quickest manufacturing method.'],
              cons: ['If your logo or design requires color, this is not the option.']
            },
            {
              uid: 1,
              title: ' Soft Enamel',
              src: 'https://lapelpinsandcoins.com/images/quote/softenamel.png',
              pros: ['Great for intricate designs.', 'Enamel fill gives the design texture.', 'Most cost effective production method.'],
              cons: ['Colors cannot touch, meaning no gradients.']
            },
            {
              uid: 2,
              title: 'Cloisonné',
              src: 'https://lapelpinsandcoins.com/images/quote/cloisonne.png',
              pros: ['Great for intricate designs.', 'Hard enamel fill results in your design being smooth to the touch.', 'Timeless and professional look.'],
              cons: ['Black nickel plating cannot be made into hard enamel.']
            },
            {
              uid: 3,
              title: 'Silk Screen',
              src: 'https://lapelpinsandcoins.com/images/quote/silkscreen.png',
              pros: ['Great for logos or emblems.', 'Smooth texture with sharp detail.', 'Colors are extremely vivid.'],
              cons: ['The coating can scratch, so an epoxy dome is recommended.']
            },
            {
              uid: 4,
              title: 'Offset Printed',
              src: 'https://lapelpinsandcoins.com/images/quote/offset2.png',
              pros: ['Great for photographs.', 'Built-in protection with epoxy dome.', 'Quick manufacturing time.'],
              cons: ['Does not have any texture to the design.']
            }
          ]
        },
        {
          ind: 1,
          title: 'Sizing',
          imgs: [
            {
              uid: 0,
              title: '0.75\'\'',
              src: 'https://lapelpinsandcoins.com/images/newsizing/penny.png',
              pros: ['Great for intricate designs.', 'The lack of color allows for a professional look.'],
              cons: ['If your logo or design requires color, this is not the option.']
            },
            {
              uid: 1,
              title: '1.00\'\'',
              src: 'https://lapelpinsandcoins.com/images/newsizing/quarter.png',
              pros: ['Great for intricate designs.', 'The lack of color allows for a professional look.'],
              cons: ['If your logo or design requires color, this is not the option.']
            },
            {
              uid: 2,
              title: '1.25\'\'',
              src: 'https://lapelpinsandcoins.com/images/newsizing/50centcoin.png',
              pros: ['Great for intricate designs.', 'The lack of color allows for a professional look.'],
              cons: ['If your logo or design requires color, this is not the option.']
            },
            {
              uid: 3,
              title: '1.50\'\'',
              src: 'https://lapelpinsandcoins.com/images/newsizing/dollarcoin.png',
              pros: ['Great for intricate designs.', 'The lack of color allows for a professional look.'],
              cons: ['If your logo or design requires color, this is not the option.']
            },
            {
              uid: 4,
              title: '1.75\'\'',
              src: 'https://lapelpinsandcoins.com/images/newsizing/golfball.png',
              pros: ['Great for intricate designs.', 'The lack of color allows for a professional look.'],
              cons: ['If your logo or design requires color, this is not the option.']
            }
          ]
        },
        {
          ind: 2,
          title: 'Plating',
          imgs: [
            {
              uid: 0,
              title: 'A. Silver',
              src: 'https://lapelpinsandcoins.com/images/quote/ASilver.png',
              pros: ['Great for intricate designs.', 'The lack of color allows for a professional look.'],
              cons: ['If your logo or design requires color, this is not the option.']
            },
            {
              uid: 1,
              title: 'P. Copper',
              src: 'https://lapelpinsandcoins.com/images/quote/HPCopper.png',
              pros: ['Great for intricate designs.', 'The lack of color allows for a professional look.'],
              cons: ['If your logo or design requires color, this is not the option.']
            },
            {
              uid: 2,
              title: 'A. Copper',
              src: 'https://lapelpinsandcoins.com/images/quote/ACopper.png',
              pros: ['Great for intricate designs.', 'The lack of color allows for a professional look.'],
              cons: ['If your logo or design requires color, this is not the option.']
            },
            {
              uid: 3,
              title: 'A. Gold',
              src: 'https://lapelpinsandcoins.com/images/quote/AGold.png',
              pros: ['Great for intricate designs.', 'The lack of color allows for a professional look.'],
              cons: ['If your logo or design requires color, this is not the option.']
            },
            {
              uid: 4,
              title: 'Dual Plated',
              src: 'https://lapelpinsandcoins.com/images/quote/DualPlated.png',
              pros: ['Great for intricate designs.', 'The lack of color allows for a professional look.'],
              cons: ['If your logo or design requires color, this is not the option.']
            }
          ]
        },
        {
          ind: 3,
          title: 'Backing',
          imgs: [
            {
              uid: 0,
              title: 'B. Clutch',
              src: 'https://lapelpinsandcoins.com/images/quote/butterfly.png',
              pros: ['Great for intricate designs.', 'The lack of color allows for a professional look.'],
              cons: ['If your logo or design requires color, this is not the option.']
            },
            {
              uid: 1,
              title: 'B. Rubber',
              src: 'https://lapelpinsandcoins.com/images/quote/blackrubber.png',
              pros: ['Great for intricate designs.', 'The lack of color allows for a professional look.'],
              cons: ['If your logo or design requires color, this is not the option.']
            },
            {
              uid: 2,
              title: 'Y. Rubber',
              src: 'https://lapelpinsandcoins.com/images/quote/yellowrubber.png',
              pros: ['Great for intricate designs.', 'The lack of color allows for a professional look.'],
              cons: ['If your logo or design requires color, this is not the option.']
            },
            {
              uid: 3,
              title: 'Safety Pin',
              src: 'https://lapelpinsandcoins.com/images/quote/safetypin.png',
              pros: ['Great for intricate designs.', 'The lack of color allows for a professional look.'],
              cons: ['If your logo or design requires color, this is not the option.']
            },
            {
              uid: 4,
              title: 'Deluxe Clutch',
              src: 'https://lapelpinsandcoins.com/images/quote/deluxe.png',
              pros: ['Great for intricate designs.', 'The lack of color allows for a professional look.'],
              cons: ['If your logo or design requires color, this is not the option.']
            }
          ]
        },
        {
          ind: 4,
          title: 'Packaging',
          imgs: [
            {
              uid: 0,
              title: 'Poly Bag',
              src: 'https://lapelpinsandcoins.com/images/quote/poly.jpg',
              pros: ['Included with every order.', 'Provides basic protection from scratches.'],
              cons: ['If you hand out your pins, they may see slight wear and tear.']
            },
            {
              uid: 1,
              title: 'Velvet Bag',
              src: 'https://lapelpinsandcoins.com/images/quote/velvet.jpg',
              pros: ['Cost effective and sleek.', 'Keeps your custom pin secure and safe.'],
              cons: ['Does not provide protection against drops.']
            },
            {
              uid: 2,
              title: 'Acrylic Case',
              src: 'https://lapelpinsandcoins.com/images/quote/acryliccase.jpg',
              pros: ['Showcases your design with a transparent top.', 'Keeps your custom pin secure and safe.'],
              cons: ['If your logo or design requires color, this is not the option.']
            },
            {
              uid: 3,
              title: 'Velvet Case',
              src: 'https://lapelpinsandcoins.com/images/quote/velvetcase.jpg',
              pros: ['Great for professional events or awards.', 'Keeps your custom pin secure and safe.'],
              cons: ['Although classy and premium, velvet cases are costly.']
            }
          ]
        }
      ]
    }
  },
  mounted () {
    if (process.browser) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute('id')
          if (entry.intersectionRatio > 0) {
            document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active')
          } else {
            document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active')
          }
        })
      })

      // Track all sections that have an `id` applied
      document.querySelectorAll('section[id]').forEach((section) => {
        observer.observe(section)
      })
    }
  },
  methods: {
    testScroll (elem) {
      if (process.browser) {
        document.getElementById(elem).scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }
  }
}
</script>
