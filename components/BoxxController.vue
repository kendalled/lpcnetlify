<template>
  <svg width="647" height="277" xmlns="http://www.w3.org/2000/svg">
    <!-- <g>
      <title>background</title>
      <rect
        id="canvas_background"
        fill="#fff"
        height="279"
        width="649"
        y="-1"
        x="-1"
      />
      <g
        display="none"
        id="canvasGrid"
        overflow="visible"
        y="0"
        x="0"
        height="100%"
        width="100%"
      >
        <rect
          fill="url(#gridpattern)"
          stroke-width="0"
          y="0"
          x="0"
          height="100%"
          width="100%"
        />
      </g>
    </g> -->
    <g>
      <title>Layer 1</title>
      <ellipse
        v-for="(button, b) in buttons"
        :id="button.name"
        :key="b"
        ry="19.5"
        rx="19.5"
        :cy="button.cy"
        :cx="button.cx"
        stroke-width="1.5"
        stroke="#000"
        class="cursor-pointer"
        :fill="[button.pressed ? '#ff9e18' : '#fff']"
        @click="pressButton(b)"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'BoxxController',
  data () {
    return {
      shieldDrop: [
        17,
        10,
        11
      ],
      buttons: [
        {
          name: 'Mod Y (Walk slow)',
          pressed: false,
          cy: 228.25,
          cx: 202.25
        },
        {
          name: 'Mod X (Walk fast)',
          pressed: false,
          cy: 188.25,
          cx: 160.25
        },
        {
          name: 'Start',
          pressed: false,
          cy: 76.25,
          cx: 328.25
        },
        {
          name: 'Y',
          pressed: false,
          cy: 20.25,
          cx: 529.25
        },
        {
          name: 'R',
          pressed: false,
          cy: 26.25,
          cx: 477.25
        },
        {
          name: 'C-left',
          pressed: false,
          cy: 209.25,
          cx: 460.25
        },
        {
          name: 'A',
          pressed: false,
          cy: 225.25,
          cx: 504.25
        },
        {
          name: 'C-right',
          pressed: false,
          cy: 195.25,
          cx: 544.25
        },
        {
          name: 'C-down',
          pressed: false,
          cy: 256.25,
          cx: 467.25
        },
        {
          name: 'C-up',
          pressed: false,
          cy: 178.25,
          cx: 496.25
        },
        {
          name: 'L',
          pressed: false,
          cy: 64.25,
          cx: 20.25
        },
        {
          name: 'Down (Analog stick)',
          pressed: false,
          cy: 54.25,
          cx: 125.25
        },
        {
          name: 'B',
          pressed: false,
          cy: 76.25,
          cx: 476.25
        },
        {
          name: 'X',
          pressed: false,
          cy: 70.25,
          cx: 526.25
        },
        {
          name: 'Up (Analog stick)',
          pressed: false,
          cy: 79.25,
          cx: 626.25
        },
        {
          name: 'Z',
          pressed: false,
          cy: 70.25,
          cx: 576.25
        },
        {
          name: 'Left (Analog stick)',
          pressed: false,
          cy: 54.25,
          cx: 73.25
        },
        {
          name: 'Right (Analog stick)',
          pressed: false,
          cy: 67.25,
          cx: 177.25
        }
      ]
    }
  },
  computed: {
    pressedButtons () {
      return this.buttons.filter(x => (x.pressed))
    }
  },
  watch: {
    pressedButtons (newVal, oldVal) {
      this.$emit('update', newVal)
    }
  },
  methods: {
    performInput () {
      const inputs = this.shieldDrop
      inputs.forEach((input) => {
        setTimeout(() => {
          this.pressButton(input)
        }, 1000)
      })
    },
    pressButton (ind) {
      console.log('Index: ' + ind)
      console.log('Button: ' + this.buttons[ind].name)
      this.buttons[ind].pressed = !this.buttons[ind].pressed
    }
  }
}
</script>
