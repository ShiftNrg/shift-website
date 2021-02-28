<template>
  <div>
    <div class="banner">
      <div class="Info">
        <ul class="block-grid">
          <li>
            {{ 'Name: ' + shiftInfo.name }}
          </li>
          <li>
            {{ 'Token Address: ' + shiftInfo.tokenAddress }}
          </li>
          <li>
            {{ 'Symbol: ' + shiftInfo.symbol }}
          </li>
          <li>
            {{ 'Decimals: ' + shiftInfo.decimals }}
          </li>
          <li><br /></li>
          <li>
            {{ shiftData.ShiftToWeth }}
          </li>
          <li>
            {{ shiftData.WethToShift }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { ChainId, Token, WETH, Fetcher, Route } from '@uniswap/sdk'
export default {
  name: 'Footer',
  components: {},
  data() {
    return {
      shiftData: {
        WethToShift: null,
        ShiftToWeth: null
      },
      gasData: {}
    }
  },
  computed: {
    shiftInfo() {
      if (!process.client) {
        return {}
      }
      return (window.indexData || {}).shift || {}
    }
  },
  mounted() {
    this.getDataFromUniswap()
  },
  methods: {
    async getDataFromUniswap() {
      const chainId = ChainId.MAINNET
      const { name, symbol, decimals, tokenAddress } = this.shiftInfo
      const SHIFT = new Token(chainId, tokenAddress, decimals, symbol, name)
      const pair = await Fetcher.fetchPairData(SHIFT, WETH[SHIFT.chainId])
      const route = new Route([pair], WETH[SHIFT.chainId])

      this.shiftData.WethToShift =
        '1 ETH = ' + route.midPrice.toSignificant(6) + ' wSHIFT'
      this.shiftData.ShiftToWeth =
        '1 wSHIFT = ' + route.midPrice.invert().toSignificant(6) + ' ETH'
      // eslint-disable-next-line
      console.log(SHIFT, pair, route)
      // eslint-disable-next-line
      console.log(this.shiftInfo)
    },
    getEthData() {
      axios
        .get(
          '...api key here.................................................................',
          {
            method: 'GET',
            mode: 'no-cors'
          }
        )
        .then((response) => {
          // eslint-disable-next-line
          console.log(response.data)
          this.gasData = response.data
        })
    }
  }
}
</script>
