<template>
  <div>
    <div id="mobile-toggle">
      <button
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
          <nuxt-link :to="{ name: 'index' }">
            Home
          </nuxt-link>
        </li>
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
        <li><a href="#">Solutions</a></li>
        <li><a href="#">Contact</a></li>
      </ol>
      <ol class="nav topnav">
        <li><a href="#">Company</a></li>
        <li><a href="#">Resources</a></li>
        <li class="cta"><a href="#">Get started</a></li>
      </ol>
    </header>
    <nuxt />
    <div id="topcontainer" style="opacity:0;">
      <div id="backlayer" class="backlayer"></div>
      <div id="frontlayer" class="frontlayer"></div>
      <div class="stickysocials">
        <div class="label">Join our community</div>
        <a href="#" title="Discord">
          <span class="icon">
            <svg-icon name="discord" height="36" width="36" />
          </span>
        </a>
        <a href="#" title="Facebook">
          <span class="icon">
            <svg-icon name="facebook" height="36" width="36" />
          </span>
        </a>
        <a href="#" title="Twitter">
          <span class="icon">
            <svg-icon name="twitter" height="36" width="36" />
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<style></style>
<script>
import Logo from '../components/logo'
export default {
  components: { Logo }
}
</script>
