<template>
  <div>
    <div class="banner">
      <div class="Info">
        <ul class="block-grid">
          <li>
            {{ 'Name: Wrapped ' + shiftInfo.name }}
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
          <li>
            {{ shiftData.ShiftToWeth }}
          </li>
          <li>
            {{ shiftData.WethToShift }}
          </li>
          <li>
            {{ 'Maximum Supply: ' + '10 * SHIFT Supply from explorer API' }}
          </li>
          <li>
            {{ 'Market Cap: ' + 'Supply *  Price' }}
          </li>
          <li>
            {{ 'Exchange: ' +
            <a href="https://uniswap.wshift.trade/" target="_blank"></a>}}
          </li>
          <li>
            {{ 'Trading Pair Info: ' +
            <a href="https://info.uniswap.wshift.trade/" target="_blank"></a>}}
          </li>
          <li>
            {{ 'Coinmarketcap: ' +
            <a
              href="https://coinmarketcap.com/currencies/wshift/"
              target="_blank"
            ></a>
            }}
          </li>
          <li>
            {{ 'Coingecko: ' +
            <a href="LINK" target="_blank"></a> }}
          </li>
          <li>
            {{ 'Etherscan: ' +
            <a
              href="https://etherscan.io/address/0x96efd428c8f17df05d316b741f4fab9d9f4a6588"
              target="_blank"
            ></a>
            }}
          </li>
          <li>
            {{ 'Contract: ' +
            <a
              href="https://etherscan.io/address/0x96efd428c8f17df05d316b741f4fab9d9f4a6588#code"
              target="_blank"
            ></a>
            }}
          </li>
          <li>
            {{ 'Audit: ' +
            <a
              href="https://github.com/ShiftNrg/wrappedShift/blob/master/wShift_audit.pdf"
              target="_blank"
            ></a>
            }}
          </li>
        </ul>
      </div>
      <div>
        <ul class="block-grid">
          <li><br /></li>
          <li><br /></li>
          <li><br /></li>
          <li>
            {{ 'Name: Lisk-based ' + shiftInfo.name }}
          </li>
          <li>
            {{ 'Symbol: SHIFT' }}
          </li>
          <li>
            {{ 'Supply: ' + 'from explorer API' }}
          </li>
          <li>
            {{ '1 SHIFT = XXX BTC from wSHIFT data' }}
          </li>
          <li>
            {{ '1 BTC = XXX SHIFT from wSHIFT data' }}
          </li>
          <li>
            {{ 'Maximum Supply: ' + 'SHIFT Supply from explorer API' }}
          </li>
          <li>
            {{ 'Market Cap: ' + 'Supply *  Price' }}
          </li>
          <li>
            {{ 'Exchange: ' +
            <a href="https://bilaxy.com/trade/SHIFT_USDT" target="_blank"></a>}}
          </li>
          <li>
            {{ 'Coinmarketcap: ' +
            <a
              href="https://coinmarketcap.com/currencies/shift/"
              target="_blank"
            ></a>
            }}
          </li>
          <li>
            {{ 'Coingecko: ' +
            <a href="LINK" target="_blank"></a>}}
          </li>
          <li>
            {{ 'Explorer: ' +
            <a href="https://explorer.shiftnrg.org/" target="_blank"></a>}}
          </li>
          <li><br /></li>
        </ul>
      </div>
      <div>
        <ul class="block-grid">
          <li><br /></li>
          <li><br /></li>
          <li>
            {{
              'Uniswap Stats: ' +
                'VOLUME/LIQUIDITY/POOLEDTOKENS/FEES/TRANSACTIONS'
            }}
          </li>
          <li>
            {{ 'Migrations/Swaps completed/pending/volume' }}
          </li>
          <li>
            {{ 'Current GAS/GWEI PRICES: ' + 'from https://ethgas.watch/ API' }}
          </li>
          <li>
            {{ 'Swap Cost Estimates from GAS/GWEI prices' }}
          </li>
          <li>
            {{ 'Swap Options w/pics from Matts graphics' }}
          </li>
          <li>
            {{ 'Thanks to LPs' }}
          </li>
          <li>
            {{ 'Inflation' }}
          </li>
          <li>
            {{ 'Why wSHIFT?: '
            <a
              href="https://news.shiftnrg.org/shiftnrg-announces-redenomination-of-shift-to-wrapped-shift-wshift-68e2f65ffc1"
              target="_blank"
            ></a>
          </li>
          <li>
            {{ 'ShiftNrg Website: ' +
            <a href="https://shiftnrg.org/" target="_blank"></a>
            }}
          </li>
          <li>
            {{ 'ShiftNrg News Site: ' +
            <a href="https://news.shiftnrg.org/" target="_blank"></a>
            }}
          </li>
          <li>
            {{ 'Discord, Twitter, Email' }}
          </li>
          <li><br /></li>
          <li>
            {{
              '1 SHIFT = 10 wSHIFT; "Maximum Supply" for each token represents a hypothetical, mutually dependent combination of both tokens.'
            }}
          </li>
          <li>
            {{
              'Prices are based on most recently available data and are subject to market conditions.'
            }}
          </li>
          <li>
            {{ 'ShiftNrg does not endorse any centralized exchanges.' }}
          </li>
          <li><br /></li>
          <li>
            {{ '© Shift 2021 - All Rights Reserved' }}
          </li>
          <li><br /></li>
          <li><br /></li>
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
