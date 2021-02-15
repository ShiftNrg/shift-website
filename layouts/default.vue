<template>
  <div>
    <div v-if="!cookieConsentAcknowledged" class="cookie-container">
      <div class="cookie-body">
        <p class="H4 maincontainer Intro Text">
          We use cookies to provide you with the best experience.
          <a
            class="cookie-policy-btn"
            href="downloads/cookie_policy.docx"
            target="_blank"
          >
            Learn More
          </a>
          <button @click="ackCookieConsent('true')" class="cookie-btn bg-green">
            <span class="cookie-btn-span">
              Accept
            </span>
          </button>
          <button @click="ackCookieConsent('false')" class="cookie-btn bg-red">
            <span class="cookie-btn-span">
              Disable Cookies
            </span>
          </button>
        </p>
      </div>
    </div>
    <div id="mobile-toggle">
      <button
        id="hamburger-menu"
        @click="toggleMenu"
        class="hamburger hamburger--squeeze responsive-menu-button"
        type="button"
        data-action="togglemenu"
      >
        <span class="hamburger-box"><span class="hamburger-inner"></span></span>
      </button>
      <logo />
    </div>
    <header id="header">
      <logo />

      <ol class="nav mainnav">
        <li>
          <nuxt-link
            :to="{ name: 'index', hash: '#top' }"
            :data-action="$route.name === 'index' ? 'scrollto' : ''"
          >
            Home
          </nuxt-link>
        </li>
        <li>
          <a
            :data-action="$route.name === 'index' ? 'scrollto' : ''"
            href="/#roadmap"
          >
            Roadmap
          </a>
        </li>
        <li>
          <a
            :data-action="$route.name === 'index' ? 'scrollto' : ''"
            href="/#news"
          >
            News
          </a>
        </li>
        <li>
          <a
            :data-action="$route.name === 'index' ? 'scrollto' : ''"
            href="/#team"
          >
            Team
          </a>
        </li>
        <!--
        <li class="dropdown">
          <a href="#">Blog & Updates</a>
          <div class="dropdown-menu">
            <div class="aside">
              <figure>
                <img src="~/assets/images/navigation/dropdown.jpg" alt="" />
                <figcaption>
                  Foundation of <br />a new token utility.
                </figcaption>
              </figure>
              <ol class="nav dropdown-list">
                <li>
                  <a href="#2">
                    <span class="title">Overview</span>
                    <span class="subtitle"
                      >Learn more about our blockchain systems</span
                    >
                  </a>
                </li>
                <li>
                  <a href="#2">
                    <span class="title">Overview</span>
                    <span class="subtitle"
                      >Learn more about our blockchain systems</span
                    >
                  </a>
                </li>
                <li>
                  <a href="#2">
                    <span class="title">Overview</span>
                    <span class="subtitle"
                      >Learn more about our blockchain systems</span
                    >
                  </a>
                </li>
                <li>
                  <a href="#2">
                    <span class="title">Overview</span>
                    <span class="subtitle"
                      >Learn more about our blockchain systems</span
                    >
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </li>
        -->
      </ol>
      <ol class="nav topnav">
        <li>
          <a
            :data-action="$route.name === 'index' ? 'scrollto' : ''"
            href="/#footer"
          >
            Contact
          </a>
        </li>
        <li>
          <a
            :data-action="$route.name === 'index' ? 'scrollto' : ''"
            href="/#footer"
          >
            Resources
          </a>
        </li>
        <li class="cta">
          <a
            href="https://github.com/shiftnrg/shift-nano/releases"
            target="_blank"
          >
            Nano Wallet
          </a>
        </li>
      </ol>
    </header>
    <div id="topcontainer" style="opacity:0;">
      <div id="backlayer" class="backlayer"></div>
      <div id="frontlayer" class="frontlayer"></div>
      <nuxt />
    </div>
    <div class="stickysocials">
      <div class="label">Join our community</div>
      <a href="https://discord.gg/fgzxABX" title="Discord" target="_blank">
        <span class="icon">
          <svg-icon name="discord" height="36" width="36" />
        </span>
      </a>
      <!--
      <a href="https://www.facebook.com/ShiftNrg" title="Facebook" target="_blank">
        <span class="icon">
          <svg-icon name="facebook" height="36" width="36" />
        </span>
      </a>
      -->
      <a href="https://t.me/ShiftProject" title="Telegram" target="_blank">
        <span class="icon">
          <svg-icon name="telegram" height="36" width="36" />
        </span>
      </a>
      <a href="https://twitter.com/ShiftNrg" title="Twitter" target="_blank">
        <span class="icon">
          <svg-icon name="twitter" height="36" width="36" />
        </span>
      </a>
      <!-- <a
        href="https://www.youtube.com/ShiftProject"
        title="Youtube"
        target="_blank"
      >
        <span class="icon">
          <svg-icon name="youtube" height="36" width="36" />
        </span>
      </a> -->
    </div>
  </div>
</template>

<style></style>
<script>
import Logo from '../components/logo'
import { toggleMenu } from '../plugins/index'

export default {
  components: { Logo },
  data() {
    return {
      cookieConsentAcknowledged: null
    }
  },
  beforeMount() {
    this.cookieConsentAcknowledged =
      window.localStorage.getItem('cookieConsentAcknowledged') || null
  },
  methods: {
    toggleMenu() {
      toggleMenu()
    },
    ackCookieConsent(choice) {
      window.localStorage.setItem('cookieConsentAcknowledged', choice)
      this.cookieConsentAcknowledged = choice
    }
  }
}
</script>
