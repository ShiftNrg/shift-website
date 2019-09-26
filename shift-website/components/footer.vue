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
      <div class="left" id="section-footer">
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
import Logo from './logo'
export default {
  name: 'Footer',
  components: { Logo },
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
  }
}
</script>

<style scoped></style>
