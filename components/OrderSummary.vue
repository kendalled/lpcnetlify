<template>
  <div class="w-full px-4 pb-12 bg-white">
    <div class="flex w-full my-1">
      <div class="w-2/3 h-auto">
        <span class="text-sm text-gray-700">{{ data.category }}</span>
        <span class="text-sm text-gray-700">({{ data.qty }} ct):</span>
      </div>
      <div class="w-1/3 font-semibold text-right text-gray-600 rounded">
        ${{ data.cost }}
      </div>
    </div>
    <div class="flex w-full pb-4 my-1 border-b">
      <div class="w-2/3 h-auto">
        <span class="text-sm text-gray-700">Taxes:</span>
      </div>
      <div class="w-1/3 font-semibold text-right text-gray-600 rounded">
        ${{ taxes.toFixed(2) }}
      </div>
    </div>
    <div class="flex w-full pt-4">
      <div class="w-full">
        <span class="block font-semibold">Total:</span>
        <span class="block text-sm text-gray-600">(Including tax)</span>
      </div>
      <div class="flex items-center justify-end w-1/3 text-2xl font-bold text-gray-800">
        ${{ total.toFixed(2) }}
      </div>
    </div>
    <div class="flex justify-between w-full h-auto px-4 py-4 mt-4 border rounded">
      <span class="w-3/4 text-sm font-semibold text-gray-600">FedEx Shipping - $0.00</span>
      <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6 text-gray-600"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
    </div>
    <button class="w-full py-3 mt-4 bg-blue-600 rounded shadow hover:bg-blue-500 transition-colors duration-200 text-blue-50 hover:text-white">
      Complete your order
    </button>
  </div>
</template>

<script>
export default {
  name: 'OrderSummary',
  props: {
    data: {
      type: Object,
      default () {
        return { active: true, backing: 'Butterfly Clutch', category: 'Challenge Coins', cost: 299.45, country: 'US', customer: 'OcnlqUf94mOvZQ24iYZvWTwl42w1', deadline: { nanoseconds: 0, seconds: 1584547200 }, details: 'A circular challenge coin with the state of Florida in the center.', discountCode: 'NEWCUSTOMER', email: 'kendallkj00@gmail.com', id: 'project1', name: 'Kendall Jackson', packaging: 'Poly Bag', phone: '(407) 716-8966', plating: 'Antique Silver', production: 'Die Struck', proofs: ['https://firebasestorage.googleapis.com/v0/b/lapelpinsandcoins2.appspot.com/o/Ball-8-Pin.png?alt=media&token=a33e9e9b-43c9-4196-a611-4e0b82403ed4', 'https://firebasestorage.googleapis.com/v0/b/lapelpinsandcoins2.appspot.com/o/Ball-8-Pin.png?alt=media&token=a33e9e9b-43c9-4196-a611-4e0b82403ed4'], qty: 500, referenceFiles: ['https://firebasestorage.googleapis.com/v0/b/lapelpinsandcoins2.appspot.com/o/Ball-8-Pin.png?alt=media&token=a33e9e9b-43c9-4196-a611-4e0b82403ed4', 'https://firebasestorage.googleapis.com/v0/b/lapelpinsandcoins2.appspot.com/o/Ball-8-Pin.png?alt=media&token=a33e9e9b-43c9-4196-a611-4e0b82403ed4'], sentArtist: false, size: 0.75, state: 'FL', status: -1, zip: '32746' }
      }
    }
  },
  computed: {
    quote () {
      return this.$store.state.quote.quote
    },
    taxes () {
      return (this.data.cost * 0.07)
    },
    total () {
      return (this.data.cost + this.taxes)
    }
  }
}
</script>
