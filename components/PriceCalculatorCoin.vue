<template>
  <div class="grid grid-cols-2 px-4 py-5 space-y-4 sm:grid-cols-9 sm:gap-8 sm:p-6 sm:space-y-0">
    <!-- group 1 -->
    <CustomSelectAdmin class="col-span-2 sm:col-span-3" :title="'Color'" :options="colors" @chosen="updateQuote" />
    <CustomSelectAdmin class="col-span-2 sm:col-span-3" :title="'Sizing'" :options="sizingOptions" @chosen="updateQuote" />
    <!-- <CustomSelectAdmin class="col-span-2 sm:col-span-3" :title="'Quantity'" :options="quantityOptions" @chosen="updateQuote" /> -->
    <label class="block col-span-2 space-y-1 text-sm font-medium leading-5 text-gray-700 sm:col-span-3">
      <span class="text-sm font-medium text-gray-700">Quantity <span class="text-xs text-gray-500">{{ priceRate }}</span></span>
      <input v-model="customQty" type="number" placeholder="0" class="block w-full text-base font-normal border-gray-300 rounded-md shadow-sm sm:text-sm focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
    </label>
    <!-- group 2 -->
    <CustomSelectAdmin class="col-span-2 sm:col-span-3" :title="'Plating'" :options="platingOptions" @chosen="updateQuote" />
    <CustomSelectAdmin class="col-span-2 sm:col-span-3" :title="'Edge'" :options="edgeOptions" @chosen="updateQuote" />
    <CustomSelectAdmin class="col-span-2 sm:col-span-3" :title="'Packaging'" :options="packagingOptions" @chosen="updateQuote" />
    <!-- extraneous -->
    <CustomMultiSelectAdmin class="col-span-2 sm:col-span-3" :title="'Extras'" :options="addonOptions" @chosen="showChosen" />
    <CustomSelectAdmin class="col-span-2 sm:col-span-3" :title="'Discount'" :options="discountOptions" @chosen="updateQuote" />
    <div v-if="pinAddons.length === 0" class="col-span-2 sm:col-span-3" />
    <CustomCounter
      v-for="(addon, a) in pinAddons"
      :key="addon.name"
      :title="addon.name"
      :ind="a"
      class="col-span-2 sm:col-span-1"
      @updated="updateAddon"
    />
    <ToggleGuy :label="'3D Mold'" :label-two="'Side one'" @toggled="moldOne = !moldOne" />
    <ToggleGuy :label="'3D Mold'" :label-two="'Side two'" @toggled="moldTwo = !moldTwo" />
    <!-- price display -->
    <div class="grid grid-cols-3 col-span-2 gap-2 sm:grid-cols-6 sm:col-span-9">
      <h2 class="h-auto col-span-3 px-4 py-1 mb-3 text-sm leading-loose tracking-tight text-gray-800 border border-gray-200 rounded sm:mb-6 bg-gray-50">
        Retail Price: <span v-if="integerRetail" class="text-gray-600">${{ (roundToTwo(result * customQty + staticExtras) + moldFee) }} <span v-if="isMoldFee">(${{ roundToTwo(result * pinQty.val + staticExtras) }} + ${{ roundToTwo(moldFee) }} mold fee)</span></span>
        <span v-else>${{ (roundToTwo(result * customQty + staticExtras) + moldFee) }} <span v-if="isMoldFee">(${{ roundToTwo(result * pinQty.val + staticExtras) }} + ${{ roundToTwo(moldFee) }} mold fee)</span></span>
      </h2>
      <h2 class="h-auto col-span-3 px-4 py-1 mb-3 text-sm leading-loose tracking-tight text-gray-800 border border-gray-200 rounded sm:mb-6 bg-gray-50">
        Price (after discount): <span v-if="integerQuote" class="text-green-600">${{ roundToTwo((result * customQty + staticExtras + moldFee) * pinDiscount.val) }}</span>
        <span v-else class="text-green-600">${{ roundToTwo((result * customQty + staticExtras + moldFee) * pinDiscount.val) }}</span>
      </h2>
    </div>
  </div>
</template>

<script>
import ToggleGuy from '~/components/ToggleGuy'
import CustomSelectAdmin from '~/components/CustomSelectAdmin'
import CustomCounter from '~/components/CustomCounter'
import CustomMultiSelectAdmin from '~/components/CustomMultiSelectAdmin'
export default {
  name: 'PriceCalculatorCoin',
  components: {
    ToggleGuy,
    CustomSelectAdmin,
    CustomCounter,
    CustomMultiSelectAdmin
  },
  data () {
    return {
      customQty: 0,
      // new data
      pinType: { name: 'Color', key: 'color' },
      moldOne: false,
      moldTwo: false,
      moldPricingOne: [
        50.00,
        62.50,
        75.00,
        87.50,
        100.00,
        112.50,
        125.00
      ],
      moldPricingTwo: [
        100.00,
        125.00,
        150.00,
        175.00,
        200.00,
        225.00,
        250.00
      ],
      colors: [
        { name: 'Colorless', key: 'colorless' },
        { name: 'Color on One Side', key: 'oneSide' },
        { name: 'Color on Both Sides', key: 'bothSides' }
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
      pinSizing: { name: 'Size', key: 'onefivezero' },
      sizingOptions: [
        { name: '1.50\'\'', key: 'onefivezero' },
        { name: '1.75\'\'', key: 'onesevenfive' },
        { name: '2.0\'\'', key: 'two' },
        { name: '2.25\'\'', key: 'twotwofive' },
        { name: '2.50\'\'', key: 'twofivezero' },
        { name: '2.75\'\'', key: 'twosevenfive' },
        { name: '3.0\'\'', key: 'three' }
      ],
      coinEdge: { name: 'Edge', cost: '$0.00' },
      edgeOptions: [
        { name: 'Plain Edge', cost: '$0.00' },
        { name: 'Rope Edge', cost: '$0.00' },
        { name: 'Oblique Edge', cost: '$0.35' },
        { name: 'Cross Cut Edge', cost: '$0.35' },
        { name: 'Bezeled Edge', cost: '$0.35' },
        { name: 'Spur Edge', cost: '$0.60' }
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
      pinQty: { name: 'Quantity', key: 'fifty', val: 0 },
      quantityOptions: [
        { name: '50', key: 'fifty', val: 50 },
        { name: '100', key: 'onehundred', val: 100 },
        { name: '300', key: 'threehundred', val: 300 },
        { name: '500', key: 'fivehundred', val: 500 },
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
      return (this.pinQty.val === 0 || this.customQty < 50 ? '' : '(' + this.pinQty.val.toString() + ' ct. pricing)')
    },
    moldFee () {
      if ((!this.moldOne && !this.moldTwo) || (this.pinSizing.name === 'Size') || (this.pinQty.val >= 300 && this.pinSizing.name !== '2.75\'\'' && this.pinSizing.name !== '3.0\'\'')) {
        return 0.00
      } else {
        return (this.moldOne && this.moldTwo ? this.moldPricingTwo[this.sizingOptions.indexOf(this.pinSizing)] : this.moldPricingOne[this.sizingOptions.indexOf(this.pinSizing)])
      }
    },
    isMoldFee () {
      // if ((!this.moldOne && !this.moldTwo) || (this.pinSizing.name === 'Size') || (this.pinQty.val >= 300 && this.pinSizing.name !== '2.75\'\'' && this.pinSizing.name !== '3.0\'\'')) {
      //   return false
      // } else {
      //   return true
      // }
      return (!((!this.moldOne && !this.moldTwo) || (this.pinSizing.name === 'Size') || (this.pinQty.val >= 300 && this.pinSizing.name !== '2.75\'\'' && this.pinSizing.name !== '3.0\'\'')))
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
      return { name: 'Quantity', key: 'fifty', val: 0 }
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
        color: {
          onefivezero: {
            fifty: '$0.00',
            onehundred: '$0.00',
            threehundred: '$0.00',
            fivehundred: '$0.00',
            thousand: '$0.00',
            twothousand: '$0.00'
          },
          onesevenfive: {
            fifty: '$0.00',
            onehundred: '$0.00',
            threehundred: '$0.00',
            fivehundred: '$0.00',
            thousand: '$0.00',
            twothousand: '$0.00'
          },
          two: {
            fifty: '$0.00',
            onehundred: '$0.00',
            threehundred: '$0.00',
            fivehundred: '$0.00',
            thousand: '$0.00',
            twothousand: '$0.00'
          },
          twotwofive: {
            fifty: '$0.00',
            onehundred: '$0.00',
            threehundred: '$0.00',
            fivehundred: '$0.00',
            thousand: '$0.00',
            twothousand: '$0.00'
          },
          twofivezero: {
            fifty: '$0.00',
            onehundred: '$0.00',
            threehundred: '$0.00',
            fivehundred: '$0.00',
            thousand: '$0.00',
            twothousand: '$0.00'
          },
          twosevenfive: {
            fifty: '$0.00',
            onehundred: '$0.00',
            threehundred: '$0.00',
            fivehundred: '$0.00',
            thousand: '$0.00',
            twothousand: '$0.00'
          },
          three: {
            fifty: '$0.00',
            onehundred: '$0.00',
            threehundred: '$0.00',
            fivehundred: '$0.00',
            thousand: '$0.00',
            twothousand: '$0.00'
          }
        },
        colorless: {
          onefivezero: {
            fifty: '$4.85',
            onehundred: '$2.96',
            threehundred: '$2.50',
            fivehundred: '$2.44',
            thousand: '$2.40',
            twothousand: '$2.35'
          },
          onesevenfive: {
            fifty: '$5.35',
            onehundred: '$3.22',
            threehundred: '$2.80',
            fivehundred: '$2.73',
            thousand: '$2.70',
            twothousand: '$2.64'
          },
          two: {
            fifty: '$5.80',
            onehundred: '$3.52',
            threehundred: '$3.06',
            fivehundred: '$2.97',
            thousand: '$2.94',
            twothousand: '$2.88'
          },
          twotwofive: {
            fifty: '$6.85',
            onehundred: '$4.37',
            threehundred: '$3.69',
            fivehundred: '$3.49',
            thousand: '$3.42',
            twothousand: '$3.37'
          },
          twofivezero: {
            fifty: '$7.26',
            onehundred: '$4.95',
            threehundred: '$3.95',
            fivehundred: '$3.91',
            thousand: '$3.75',
            twothousand: '$3.70'
          },
          twosevenfive: {
            fifty: '$8.29',
            onehundred: '$5.66',
            threehundred: '$5.10',
            fivehundred: '$4.88',
            thousand: '$4.66',
            twothousand: '$4.61'
          },
          three: {
            fifty: '$9.19',
            onehundred: '$6.37',
            threehundred: '$6.25',
            fivehundred: '$5.86',
            thousand: '$5.53',
            twothousand: '$5.48'
          }
        },
        oneSide: {
          onefivezero: {
            fifty: '$5.25',
            onehundred: '$3.17',
            threehundred: '$2.73',
            fivehundred: '$2.68',
            thousand: '$2.63',
            twothousand: '$2.58'
          },
          onesevenfive: {
            fifty: '$5.83',
            onehundred: '$3.49',
            threehundred: '$3.13',
            fivehundred: '$3.07',
            thousand: '$3.03',
            twothousand: '$2.97'
          },
          two: {
            fifty: '$6.40',
            onehundred: '$3.93',
            threehundred: '$3.54',
            fivehundred: '$3.49',
            thousand: '$3.40',
            twothousand: '$3.37'
          },
          twotwofive: {
            fifty: '$7.22',
            onehundred: '$4.63',
            threehundred: '$4.21',
            fivehundred: '$4.18',
            thousand: '$4.12',
            twothousand: '$0.00'
          },
          twofivezero: {
            fifty: '$8.24',
            onehundred: '$5.66',
            threehundred: '$5.20',
            fivehundred: '$4.70',
            thousand: '$4.45',
            twothousand: '$4.33'
          },
          twosevenfive: {
            fifty: '$8.97',
            onehundred: '$6.11',
            threehundred: '$5.78',
            fivehundred: '$5.41',
            thousand: '$5.15',
            twothousand: '$5.10'
          },
          three: {
            fifty: '$9.95',
            onehundred: '$6.45',
            threehundred: '$6.34',
            fivehundred: '$6.09',
            thousand: '$5.90',
            twothousand: '$5.85'
          }
        },
        bothSides: {
          onefivezero: {
            fifty: '$5.58',
            onehundred: '$3.39',
            threehundred: '$3.00',
            fivehundred: '$2.93',
            thousand: '$2.85',
            twothousand: '$2.80'
          },
          onesevenfive: {
            fifty: '$6.32',
            onehundred: '$3.85',
            threehundred: '$3.46',
            fivehundred: '$3.42',
            thousand: '$3.37',
            twothousand: '$3.32'
          },
          two: {
            fifty: '$7.05',
            onehundred: '$4.29',
            threehundred: '$3.97',
            fivehundred: '$3.92',
            thousand: '$3.87',
            twothousand: '$3.82'
          },
          twotwofive: {
            fifty: '$7.67',
            onehundred: '$4.85',
            threehundred: '$4.51',
            fivehundred: '$4.45',
            thousand: '$4.38',
            twothousand: '$4.33'
          },
          twofivezero: {
            fifty: '$8.61',
            onehundred: '$5.75',
            threehundred: '$5.41',
            fivehundred: '$5.29',
            thousand: '$5.28',
            twothousand: '$5.23'
          },
          twosevenfive: {
            fifty: '$9.51',
            onehundred: '$6.32',
            threehundred: '$6.00',
            fivehundred: '$5.77',
            thousand: '$5.62',
            twothousand: '$5.57'
          },
          three: {
            fifty: '$10.56',
            onehundred: '$6.88',
            threehundred: '$6.59',
            fivehundred: '$6.22',
            thousand: '$5.98',
            twothousand: '$5.93'
          }
        }
      }
      // get values of extras
      const plating = parseFloat(this.pinPlating.cost.replace('$', ''))
      const edge = parseFloat(this.coinEdge.cost.replace('$', ''))
      const packaging = parseFloat(this.pinPackaging.cost.replace('$', ''))
      let addons = 0.0
      for (let i = 0; i < this.pinAddons.length; i++) {
        if (this.pinAddons[i].name !== '3D Mold' && this.pinAddons[i].name !== 'Zinc Alloy Mold' && this.pinAddons[i].name !== 'Custom Backing') {
          addons += (parseFloat(this.pinAddons[i].cost.replace('$', '')) * this.pinAddons[i].qty)
        }
      }
      // cost of all extras (used to have + addons at end of next line)
      const extraCost = plating + edge + packaging + addons
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
      if (title === 'Color') {
        this.pinType = val
      } else if (title === 'Sizing') {
        this.pinSizing = val
      } else if (title === 'Quantity') {
        this.pinQty = val
      } else if (title === 'Plating') {
        this.pinPlating = val
      } else if (title === 'Edge') {
        this.coinEdge = val
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
