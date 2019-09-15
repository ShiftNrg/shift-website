<template>
  <footer id="footer">
    <div id="footer-top">
      <div class="left">
        <div class="subtitle">Stay updated</div>
        <div class="title">Newsletter</div>
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
    </div>
    <div id="footer-middle">
      <div class="left">
        <logo />
      </div>
      <div class="right">
        <ul class="linkgroups block-grid up4">
          <li>
            <h5>Company info</h5>
            <ul class="linkgroup">
              <li><a href="#">Lorem ipsum dolor sit</a></li>
              <li><a href="#">Nascetur ridiculus mus ae</a></li>
              <li><a href="#">Nam pretium turpise</a></li>
              <li><a href="#">Tincidunt non euismod</a></li>
              <li><a href="#">Hasellus nec sem</a></li>
            </ul>
          </li>
          <li>
            <h5>Tincidunt non</h5>
            <ul class="linkgroup">
              <li><a href="#">Lorem ipsum dolor sit</a></li>
              <li><a href="#">Nascetur ridiculus mus ae</a></li>
              <li><a href="#">Nam pretium turpise</a></li>
              <li><a href="#">Tincidunt non euismod</a></li>
              <li><a href="#">Hasellus nec sem</a></li>
            </ul>
          </li>
          <li>
            <h5>Pretium turpise</h5>
            <ul class="linkgroup">
              <li><a href="#">Lorem ipsum dolor sit</a></li>
              <li><a href="#">Nascetur ridiculus mus ae</a></li>
              <li><a href="#">Nam pretium turpise</a></li>
              <li><a href="#">Tincidunt non euismod</a></li>
              <li><a href="#">Hasellus nec sem</a></li>
            </ul>
          </li>
          <li>
            <h5>Hasellus nec</h5>
            <ul class="linkgroup">
              <li><a href="#">Lorem ipsum dolor sit</a></li>
              <li><a href="#">Nascetur ridiculus mus ae</a></li>
              <li><a href="#">Nam pretium turpise</a></li>
              <li><a href="#">Tincidunt non euismod</a></li>
              <li><a href="#">Hasellus nec sem</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div id="footer-bottom">
      <ol class="nav footernav">
        <li>© Shift 2019 - All rights reserved</li>
        <li><a href="#">Terms and Conditions</a></li>
        <li><a href="#">Privacy Statement</a></li>
        <li><a href="#">Cookies</a></li>
      </ol>
      <div class="socials">
        <div class="label">Join our community</div>
        <a href="#" title="Discord">
          <span class="icon">
            <svg-icon name="discord" width="36" height="36"></svg-icon>
          </span>
        </a>
        <a href="#" title="Facebook">
          <span class="icon">
            <svg-icon name="facebook" width="36" height="36"></svg-icon>
          </span>
        </a>
        <a href="#" title="Twitter">
          <span class="icon">
            <svg-icon name="twitter" width="36" height="36"></svg-icon>
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
  components: { Logo }
}
</script>

<style scoped></style>
