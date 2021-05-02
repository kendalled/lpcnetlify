<template>
  <div class="grid grid-cols-2 px-4 py-5 space-y-4 sm:grid-cols-9 sm:gap-8 sm:p-6 sm:space-y-0">
    <!-- group 1 -->
    <CustomSelectAdmin class="col-span-2 sm:col-span-3" :title="'Style'" :options="styles" @chosen="updateQuote" />
    <CustomSelectAdmin class="col-span-2 sm:col-span-3" :title="'Sizing'" :options="sizingOptions" @chosen="updateQuote" />
    <label class="block col-span-2 space-y-1 text-sm font-medium leading-5 text-gray-700 sm:col-span-3">
      <span class="text-sm font-medium text-gray-700">Quantity <span class="text-xs text-gray-500">{{ priceRate }}</span></span>
      <input v-model="customQty" type="number" placeholder="0" class="block w-full text-base font-normal border-gray-300 rounded-md shadow-sm sm:text-sm focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
    </label>
    <!-- group 2 -->
    <CustomSelectAdmin class="col-span-2 sm:col-span-3" :title="'Plating'" :options="platingOptions" @chosen="updateQuote" />
    <CustomSelectAdmin class="col-span-2 sm:col-span-3" :title="'Backing'" :options="backingOptions" @chosen="updateQuote" />
    <CustomSelectAdmin class="col-span-2 sm:col-span-3" :title="'Packaging'" :options="packagingOptions" @chosen="updateQuote" />
    <!-- extraneous -->
    <CustomMultiSelectAdmin class="col-span-2 sm:col-span-3" :title="'Extras'" :options="addonOptions" @chosen="showChosen" />
    <CustomSelectAdmin class="col-span-2 sm:col-span-3" :title="'Discount'" :options="discountOptions" @chosen="updateQuote" />

    <CustomCounter
      v-for="(addon, a) in pinAddons"
      :key="addon.name"
      :title="addon.name"
      :ind="a"
      class="col-span-2 sm:col-span-1"
      @updated="updateAddon"
    />
    <!-- price display -->
    <div class="grid grid-cols-3 col-span-2 gap-2 sm:grid-cols-6 sm:col-span-9">
      <h2 class="h-auto col-span-3 px-4 py-1 mb-3 text-sm leading-loose tracking-tight text-gray-800 border border-gray-200 rounded sm:mb-6 bg-gray-50">
        Retail Price: <span v-if="integerRetail" class="text-gray-600">${{ roundToTwo(result * customQty + staticExtras) }}</span>
        <span v-else>${{ roundToTwo(result * customQty + staticExtras) }}</span>
      </h2>
      <h2 class="h-auto col-span-3 px-4 py-1 mb-3 text-sm leading-loose tracking-tight text-gray-800 border border-gray-200 rounded sm:mb-6 bg-gray-50">
        Price (after discount): <span v-if="integerQuote" class="text-green-600">${{ roundToTwo((result * customQty + staticExtras) * pinDiscount.val) }}</span>
        <span v-else class="text-green-600">${{ roundToTwo((result * customQty + staticExtras) * pinDiscount.val) }}</span>
      </h2>
    </div>
  </div>
</template>

<script>
import CustomSelectAdmin from '~/components/CustomSelectAdmin'
import CustomCounter from '~/components/CustomCounter'
import CustomMultiSelectAdmin from '~/components/CustomMultiSelectAdmin'
export default {
  name: 'PriceCalculator',
  components: {
    CustomSelectAdmin,
    CustomCounter,
    CustomMultiSelectAdmin
  },
  data () {
    return {
      customQty: 0,
      // new data
      pinType: { name: 'Style', key: 'style' },
      styles: [
        { name: 'Soft Enamel', key: 'softEnamel' },
        { name: 'Hard Enamel', key: 'hardEnamel' },
        { name: 'Offset Printed', key: 'offsetPrinted' },
        { name: 'Die Struck', key: 'dieStruck' },
        { name: 'Silk Screen', key: 'silkScreen' }
      ],
      pinPlating: { name: 'Plating', cost: '$0.00' },
      platingOptions: [
        { name: 'Polished Gold', cost: '$0.00' },
        { name: 'Polished Silver', cost: '$0.00' },
        { name: 'Polished Copper', cost: '$0.00' },
        { name: 'Polished Nickel', cost: '$0.00' },
        { name: 'Black Metal', cost: '$0.00', $isDisabled: false },
        { name: 'Antiqued Gold', cost: '$0.40' },
        { name: 'Antiqued Silver', cost: '$0.35' },
        { name: 'Antiqued Copper', cost: '$0.30' },
        { name: 'Dual Plated', cost: '$0.70' },
        { name: 'Color Coated', cost: '$0.25', $isDisabled: false }
      ],
      pinSizing: { name: 'Size', key: 'threefourths' },
      sizingOptions: [
        { name: '.75\'\'', key: 'threefourths' },
        { name: '1.0\'\'', key: 'one' },
        { name: '1.25\'\'', key: 'onetwofive' },
        { name: '1.50\'\'', key: 'onefivezero' },
        { name: '1.75\'\'', key: 'onesevenfive' },
        { name: '2.0\'\'', key: 'two' }
      ],
      pinBacking: { name: 'Backing', cost: '$0.00' },
      backingOptions: [
        { name: 'Butterfly Clutch', cost: '$0.00' },
        { name: 'Black Rubber', cost: '$0.00' },
        { name: 'Yellow Rubber', cost: '$0.00' },
        { name: 'Deluxe Clutch', cost: '$0.20' },
        { name: 'Safety Pin', cost: '$0.20' },
        { name: 'Jewelry Clutch', cost: '$0.30' },
        { name: 'Keychain Loop', cost: '$0.50' },
        { name: 'Cufflink Clutch', cost: '$0.75' },
        { name: 'Round Magnet', cost: '$0.75' },
        { name: 'Bar Magnet', cost: '$1.50' }
      ],
      pinPackaging: { name: 'Packaging', cost: '$0.00' },
      packagingOptions: [
        { name: 'Poly Bag', cost: '$0.00' },
        { name: 'PVC Pouch', cost: '$0.00' },
        { name: 'Velvet Bag', cost: '$0.55' },
        { name: 'Acrylic Case', cost: '$1.00' },
        { name: 'Velvet Case', cost: '$4.00' }
      ],
      pinAddons: [],
      addonOptions: [
        { name: 'Glitter(s)', qty: 1, cost: '$0.25' },
        { name: 'Gemstone(s)', qty: 1, cost: '$0.20' },
        { name: 'Cutout(s)', qty: 1, cost: '$0.10' },
        { name: 'Extra Post(s)', qty: 1, cost: '$0.08' },
        { name: 'Epoxy Dome(s)', qty: 1, cost: '$0.20' },
        { name: 'Keychain Loop', qty: 1, cost: '$0.50' },
        { name: '3D Mold', qty: 1, cost: '$100.00' },
        { name: 'Zinc Alloy Mold', qty: 1, cost: '$30.00' },
        { name: 'Custom Backing', qty: 1, cost: '$30.00' }
      ],
      pinQty: { name: 'Quantity', key: 'onehundred', val: 0 },
      quantityOptions: [
        { name: '100', key: 'onehundred', val: 100 },
        { name: '200', key: 'twohundred', val: 200 },
        { name: '300', key: 'threehundred', val: 300 },
        { name: '500', key: 'fivehundred', val: 500 },
        { name: '750', key: 'sevenfifty', val: 750 },
        { name: '1000', key: 'thousand', val: 1000 },
        { name: '2000', key: 'twothousand', val: 2000 }
      ],
      pinDiscount: { name: 'Discount', val: 1.0, cost: 'Full Price' },
      discountOptions: [
        { name: 'SAMEDAY', val: 0.95, cost: '5% Off' },
        { name: 'FIRSTORDER', val: 0.9, cost: '10% Off' },
        { name: 'REORDER', val: 0.9, cost: '10% Off' },
        { name: 'LPC20', val: 0.8, cost: '20% Off' },
        { name: 'RESELLER', val: 0.75, cost: '25% Off' }
      ]
    }
  },
  computed: {
    priceRate () {
      return (this.pinQty.val === 0 || this.customQty < 100 ? '' : '(' + this.pinQty.val.toString() + ' ct. pricing)')
    },
    closestQuantity () {
      for (let i = 0; i < this.quantityOptions.length; i++) {
        const elem = this.quantityOptions[i]
        if (this.customQty === elem.val) {
          return this.quantityOptions[i]
        } else if (this.customQty >= 2000) {
          return this.quantityOptions[this.quantityOptions.length - 1]
        } else if (this.customQty < elem.val) {
          return this.quantityOptions[i - 1]
        } else if (elem.val < this.customQty) {
          continue
        }
      }
      return { name: 'Quantity', key: 'onehundred', val: 0 }
    },
    isAddons () {
      return (this.pinAddons.length > 0)
    },
    integerRetail () {
      const data = this.roundToTwo(this.result * this.pinQty.val + this.staticExtras)
      return (Number.isInteger(data))
    },
    integerQuote () {
      const data = this.roundToTwo((this.result * this.pinQty.val + this.staticExtras) * this.pinDiscount.val)
      return (Number.isInteger(data))
    },
    result () {
      const style = this.pinType.key
      const sizing = this.pinSizing.key
      const qty = this.pinQty.key
      const pricing = {
        style: {
          threefourths: {
            onehundred: '$0.00',
            twohundred: '$0.00',
            threehundred: '$0.00',
            fivehundred: '$0.00',
            sevenfifty: '$0.00',
            thousand: '$0.00',
            twothousand: '$0.00'
          },
          one: {
            onehundred: '$0.00',
            twohundred: '$0.00',
            threehundred: '$0.00',
            fivehundred: '$0.00',
            sevenfifty: '$0.00',
            thousand: '$0.00',
            twothousand: '$0.00'
          },
          onetwofive: {
            onehundred: '$0.00',
            twohundred: '$0.00',
            threehundred: '$0.00',
            fivehundred: '$0.00',
            sevenfifty: '$0.00',
            thousand: '$0.00',
            twothousand: '$0.00'
          },
          onefivezero: {
            onehundred: '$0.00',
            twohundred: '$0.00',
            threehundred: '$0.00',
            fivehundred: '$0.00',
            sevenfifty: '$0.00',
            thousand: '$0.00',
            twothousand: '$0.00'
          },
          onesevenfive: {
            onehundred: '$0.00',
            twohundred: '$0.00',
            threehundred: '$0.00',
            fivehundred: '$0.00',
            sevenfifty: '$0.00',
            thousand: '$0.00',
            twothousand: '$0.00'
          },
          two: {
            onehundred: '$0.00',
            twohundred: '$0.00',
            threehundred: '$0.00',
            fivehundred: '$0.00',
            sevenfifty: '$0.00',
            thousand: '$0.00',
            twothousand: '$0.00'
          }
        },
        softEnamel: {
          threefourths: {
            onehundred: '$2.55',
            twohundred: '$2.01',
            threehundred: '$1.47',
            fivehundred: '$1.23',
            sevenfifty: '$1.12',
            thousand: '$1.07',
            twothousand: '$0.96'
          },
          one: {
            onehundred: '$2.62',
            twohundred: '$2.09',
            threehundred: '$1.55',
            fivehundred: '$1.27',
            sevenfifty: '$1.17',
            thousand: '$1.10',
            twothousand: '$0.98'
          },
          onetwofive: {
            onehundred: '$2.69',
            twohundred: '$2.23',
            threehundred: '$1.66',
            fivehundred: '$1.33',
            sevenfifty: '$1.21',
            thousand: '$1.13',
            twothousand: '$1.04'
          },
          onefivezero: {
            onehundred: '$2.86',
            twohundred: '$2.43',
            threehundred: '$1.95',
            fivehundred: '$1.44',
            sevenfifty: '$1.31',
            thousand: '$1.24',
            twothousand: '$1.11'
          },
          onesevenfive: {
            onehundred: '$3.18',
            twohundred: '$2.68',
            threehundred: '$2.20',
            fivehundred: '$1.71',
            sevenfifty: '$1.57',
            thousand: '$1.51',
            twothousand: '$1.41'
          },
          two: {
            onehundred: '$3.38',
            twohundred: '$2.89',
            threehundred: '$2.40',
            fivehundred: '$1.90',
            sevenfifty: '$1.77',
            thousand: '$1.69',
            twothousand: '$1.59'
          }
        },
        offsetPrinted: {
          threefourths: {
            onehundred: '$2.78',
            twohundred: '$2.20',
            threehundred: '$1.62',
            fivehundred: '$1.38',
            sevenfifty: '$1.30',
            thousand: '$1.24',
            twothousand: '$1.12'
          },
          one: {
            onehundred: '$2.82',
            twohundred: '$2.27',
            threehundred: '$1.72',
            fivehundred: '$1.43',
            sevenfifty: '$1.34',
            thousand: '$1.27',
            twothousand: '$1.14'
          },
          onetwofive: {
            onehundred: '$2.89',
            twohundred: '$2.35',
            threehundred: '$1.82',
            fivehundred: '$1.49',
            sevenfifty: '$1.40',
            thousand: '$1.31',
            twothousand: '$1.19'
          },
          onefivezero: {
            onehundred: '$3.16',
            twohundred: '$2.59',
            threehundred: '$2.12',
            fivehundred: '$1.59',
            sevenfifty: '$1.49',
            thousand: '$1.41',
            twothousand: '$1.27'
          },
          onesevenfive: {
            onehundred: '$3.35',
            twohundred: '$2.70',
            threehundred: '$2.43',
            fivehundred: '$1.93',
            sevenfifty: '$1.83',
            thousand: '$1.75',
            twothousand: '$1.69'
          },
          two: {
            onehundred: '$3.61',
            twohundred: '$2.99',
            threehundred: '$2.64',
            fivehundred: '$2.19',
            sevenfifty: '$2.11',
            thousand: '$1.99',
            twothousand: '$1.95'
          }
        },
        dieStruck: {
          threefourths: {
            onehundred: '$2.54',
            twohundred: '$2.00',
            threehundred: '$1.46',
            fivehundred: '$1.22',
            sevenfifty: '$1.11',
            thousand: '$1.06',
            twothousand: '$0.95'
          },
          one: {
            onehundred: '$2.61',
            twohundred: '$2.08',
            threehundred: '$1.54',
            fivehundred: '$1.26',
            sevenfifty: '$1.16',
            thousand: '$1.09',
            twothousand: '$0.97'
          },
          onetwofive: {
            onehundred: '$2.68',
            twohundred: '$2.22',
            threehundred: '$1.65',
            fivehundred: '$1.32',
            sevenfifty: '$1.20',
            thousand: '$1.12',
            twothousand: '$1.03'
          },
          onefivezero: {
            onehundred: '$2.85',
            twohundred: '$2.43',
            threehundred: '$1.94',
            fivehundred: '$1.43',
            sevenfifty: '$1.30',
            thousand: '$1.23',
            twothousand: '$1.10'
          },
          onesevenfive: {
            onehundred: '$3.17',
            twohundred: '$2.67',
            threehundred: '$2.19',
            fivehundred: '$1.70',
            sevenfifty: '$1.56',
            thousand: '$1.50',
            twothousand: '$1.40'
          },
          two: {
            onehundred: '$3.37',
            twohundred: '$2.88',
            threehundred: '$2.39',
            fivehundred: '$1.89',
            sevenfifty: '$1.76',
            thousand: '$1.68',
            twothousand: '$1.58'
          }
        },
        hardEnamel: {
          threefourths: {
            onehundred: '$2.66',
            twohundred: '$2.11',
            threehundred: '$1.55',
            fivehundred: '$1.28',
            sevenfifty: '$1.19',
            thousand: '$1.11',
            twothousand: '$1.04'
          },
          one: {
            onehundred: '$2.69',
            twohundred: '$2.17',
            threehundred: '$1.66',
            fivehundred: '$1.36',
            sevenfifty: '$1.23',
            thousand: '$1.19',
            twothousand: '$1.14'
          },
          onetwofive: {
            onehundred: '$2.80',
            twohundred: '$2.26',
            threehundred: '$1.75',
            fivehundred: '$1.43',
            sevenfifty: '$1.30',
            thousand: '$1.23',
            twothousand: '$1.19'
          },
          onefivezero: {
            onehundred: '$3.05',
            twohundred: '$2.53',
            threehundred: '$2.00',
            fivehundred: '$1.53',
            sevenfifty: '$1.43',
            thousand: '$1.38',
            twothousand: '$1.30'
          },
          onesevenfive: {
            onehundred: '$3.30',
            twohundred: '$2.73',
            threehundred: '$2.33',
            fivehundred: '$1.83',
            sevenfifty: '$1.73',
            thousand: '$1.65',
            twothousand: '$1.59'
          },
          two: {
            onehundred: '$3.57',
            twohundred: '$3.07',
            threehundred: '$2.58',
            fivehundred: '$2.09',
            sevenfifty: '$1.99',
            thousand: '$1.91',
            twothousand: '$1.85'
          }
        },
        silkScreen: {
          threefourths: {
            onehundred: '$2.54',
            twohundred: '$2.00',
            threehundred: '$1.46',
            fivehundred: '$1.22',
            sevenfifty: '$1.11',
            thousand: '$1.06',
            twothousand: '$0.95'
          },
          one: {
            onehundred: '$2.61',
            twohundred: '$2.08',
            threehundred: '$1.54',
            fivehundred: '$1.26',
            sevenfifty: '$1.16',
            thousand: '$1.09',
            twothousand: '$0.97'
          },
          onetwofive: {
            onehundred: '$2.68',
            twohundred: '$2.22',
            threehundred: '$1.65',
            fivehundred: '$1.32',
            sevenfifty: '$1.20',
            thousand: '$1.12',
            twothousand: '$1.03'
          },
          onefivezero: {
            onehundred: '$2.85',
            twohundred: '$2.42',
            threehundred: '$1.94',
            fivehundred: '$1.43',
            sevenfifty: '$1.30',
            thousand: '$1.23',
            twothousand: '$1.10'
          },
          onesevenfive: {
            onehundred: '$3.17',
            twohundred: '$2.67',
            threehundred: '$2.19',
            fivehundred: '$1.70',
            sevenfifty: '$1.56',
            thousand: '$1.50',
            twothousand: '$1.40'
          },
          two: {
            onehundred: '$3.37',
            twohundred: '$2.88',
            threehundred: '$2.39',
            fivehundred: '$1.89',
            sevenfifty: '$1.76',
            thousand: '$1.68',
            twothousand: '$1.58'
          }
        }
      }
      // get values of extras
      const plating = parseFloat(this.pinPlating.cost.replace('$', ''))
      const backing = parseFloat(this.pinBacking.cost.replace('$', ''))
      const packaging = parseFloat(this.pinPackaging.cost.replace('$', ''))
      let addons = 0.0
      for (let i = 0; i < this.pinAddons.length; i++) {
        if (this.pinAddons[i].name !== '3D Mold' && this.pinAddons[i].name !== 'Zinc Alloy Mold' && this.pinAddons[i].name !== 'Custom Backing') {
          addons += (parseFloat(this.pinAddons[i].cost.replace('$', '')) * this.pinAddons[i].qty)
        }
      }
      // cost of all extras (used to have + addons at end of next line)
      const extraCost = plating + backing + packaging + addons
      // base price rounded to 2 decimals, then returned
      const baseprice = parseFloat(pricing[style][sizing][qty].replace('$', '')) + extraCost
      const rounded = this.roundToTwo(baseprice)
      return rounded
    },
    staticExtras () {
      let cost = 0.0
      if (this.pinType.key === 'offsetPrinted') {
        cost += 100.0
      }
      if (this.pinType.key === 'silkScreen') {
        cost += 20.0
      }
      for (let i = 0; i < this.pinAddons.length; i++) {
        if (this.pinAddons[i].name === '3D Mold' || this.pinAddons[i].name === 'Zinc Alloy Mold' || this.pinAddons[i].name === 'Custom Backing') {
          cost += parseFloat(this.pinAddons[i].cost.replace('$', ''))
        }
      }
      return cost
    },
    isHardEnamel () {
      return this.pinType.key === 'hardEnamel'
    }
  },
  watch: {
    closestQuantity (newVal) {
      if (this.pinQty !== newVal && newVal) {
        this.pinQty = newVal
      }
    }
  },
  methods: {
    roundToTwo (num) {
      return +(Math.round(num + 'e+2') + 'e-2')
    },
    updateQuote (val, title) {
      if (title === 'Style') {
        this.pinType = val
      } else if (title === 'Sizing') {
        this.pinSizing = val
      } else if (title === 'Quantity') {
        this.pinQty = val
      } else if (title === 'Plating') {
        this.pinPlating = val
      } else if (title === 'Backing') {
        this.pinBacking = val
      } else if (title === 'Packaging') {
        this.pinPackaging = val
      } else if (title === 'Discount') {
        this.pinDiscount = val
      }
    },
    updateAddon (ind, qty) {
      this.pinAddons[ind].qty = qty
    },
    showChosen (val) {
      this.pinAddons = val
    }
  }
}
</script>
