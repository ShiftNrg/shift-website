<template>
  <footer id="footer">
    <div id="footer-top">
      <!--
      <div class="left">
        <div class="subtitle">{{ footerData.subtitle }}</div>
        <div class="title">{{ footerData.title }}</div>
      </div>
      <form class="right">
        <div class="input-group">
          <div class="input-group-addon">
            <span class="icon">
              <svg-icon name="email" width="22" height="22"></svg-icon>
            </span>
          </div>
          <input
            class="form-control"
            type="text"
            placeholder="E-mail address"
          />
          <div class="input-group-btn">
            <button type="submit" class="btn">Subscribe</button>
          </div>
        </div>
      </form>
      -->
    </div>
    <div id="footer-middle">
      <div id="section-footer" class="left">
        <logo />
      </div>
      <div class="right">
        <ul class="linkgroups block-grid up4">
          <li
            v-for="(footerItem, footerKey) of footerData.footerItems"
            :key="'footer-' + footerKey"
          >
            <h5>{{ footerItem.title }}</h5>
            <ul class="linkgroup">
              <li
                v-for="footerItemLink of footerItem.links"
                :key="footerItemLink.text"
              >
                <a :href="footerItemLink.link" target="_blank">
                  {{ footerItemLink.text }}
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div id="footer-bottom">
      <ol class="nav footernav">
        <li
          v-for="footerBottomItem of footerData.bottomItems"
          :key="footerBottomItem.text"
        >
          <a
            v-if="footerBottomItem.link"
            :href="footerBottomItem.link"
            target="_blank"
          >
            {{ footerBottomItem.text }}
          </a>
          <span v-else>
            {{ footerBottomItem.text }}
          </span>
        </li>
      </ol>
      <div class="shiftcost">
        <ul class="linkgroups block-grid up2">
          <li>
            {{ shiftData.ShiftToWeth ? shiftData.ShiftToWeth : '' }}
          </li>
          <li>
            {{ shiftData.WethToShift ? shiftData.WethToShift : '' }}
          </li>
        </ul>
      </div>
      <div class="socials">
        <div class="label">{{ socialData.label }}</div>
        <a
          v-for="(socialLink, socialKey) of socialData.links"
          :key="socialKey"
          :title="socialKey"
          :href="socialLink"
          target="_blank"
        >
          <span class="icon">
            <svg-icon
              :name="socialKey.toLowerCase()"
              width="36"
              height="36"
            ></svg-icon>
          </span>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
import { ChainId, Token, WETH, Fetcher, Route } from '@uniswap/sdk'
import Logo from './logo'
export default {
  name: 'Footer',
  components: { Logo },
  data() {
    return {
      shiftData: {
        WethToShift: null,
        ShiftToWeth: null
      }
    }
  },
  computed: {
    socialData() {
      if (!process.client) {
        return {}
      }
      return (window.indexData || {}).social || {}
    },
    footerData() {
      if (!process.client) {
        return {}
      }
      return (window.indexData || {}).footer || {}
    }
  },
  mounted() {
    this.getDataFromUniswap()
  },
  methods: {
    async getDataFromUniswap() {
      const chainId = ChainId.MAINNET
      const tokenAddress = '0x4b4571925e94ccd8C546b39462A270cC9b3ed1e4'
      const tokenName = 'SHIFT'
      const tokenSymbol = 'wSHIFT'
      const tokenDecimals = 18
      const SHIFT = new Token(
        chainId,
        tokenAddress,
        tokenDecimals,
        tokenSymbol,
        tokenName
      )

      const pair = await Fetcher.fetchPairData(SHIFT, WETH[SHIFT.chainId])
      const route = new Route([pair], WETH[SHIFT.chainId])
      this.shiftData.WethToShift =
        '1 ETH = ' + route.midPrice.toSignificant(6) + ' wSHIFT'
      this.shiftData.ShiftToWeth =
        '1 wSHIFT = ' + route.midPrice.invert().toSignificant(6) + ' ETH'
      // eslint-disable-next-line
      console.log(SHIFT, pair, route)
    }
  }
}
</script>

<style scoped></style>
