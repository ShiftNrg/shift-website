<template>
  <div id="scene" class="scene">
    <div class="maincontainer">
      <article class="news view">
        <div class="heading">
          <div class="category">category</div>
          <h1>3 Myths About Decentralized Distributed Blockchain Network</h1>
        </div>
        <div class="inner">
          <div class="Intro">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
          </div>
          <div class="Text">
            <h4>Dis parturient montes</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
              semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
              porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
              ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
              viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
              imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
              ultricies nisi. Nam eget dui.
            </p>
            <h4>Nullam dictum felis eu mollis</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium.
            </p>
          </div>
          <div class="aside">
            <nuxt-link :to="{ name: 'index' }" class="back">
              <span class="icon">
                <svg-icon name="arrow" width="20" height="20"></svg-icon>
              </span>
            </nuxt-link>
            <div class="socialshare">
              <ul class="social">
                <li class="toggle">
                  <button type="button">
                    <span class="icon">
                      <svg-icon name="share" width="25" height="25"></svg-icon>
                    </span>
                  </button>
                </li>
                <li class="notshown">
                  <a
                    target="_blank"
                    href="http://www.twitter.com/share?url={$smarty.server.HTTP_HOST}{$smarty.server.REQUEST_URI}"
                    class="tw"
                    rel="noopener"
                    ><span> Twitter</span></a
                  >
                </li>
                <li class="notshown">
                  <a
                    target="_blank"
                    href="http://www.facebook.com/sharer/sharer.php?u={$smarty.server.HTTP_HOST}{$smarty.server.REQUEST_URI}"
                    class="fb"
                    rel="noopener"
                    ><span> Facebook</span></a
                  >
                </li>
                <li class="notshown">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/shareArticle?mini=true&amp;url=http://{$smarty.server.HTTP_HOST}{$smarty.server.REQUEST_URI}"
                    class="in"
                    rel="noopener"
                    ><span> LinkedIn</span></a
                  >
                </li>
                <li class="notshown">
                  <a
                    target="_blank"
                    href="javascript:(function()%7Bvar%20e=document.createElement('script');e.setAttribute('type','text/javascript');e.setAttribute('charset','UTF-8');e.setAttribute('src','http://assets.pinterest.com/js/pinmarklet.js?r='+Math.random()*99999999);document.body.appendChild(e)%7D)(); void 0"
                    class="pin"
                    rel="noopener"
                    ><span> Pinterest</span></a
                  >
                </li>
                <li class="notshown">
                  <a
                    target="_blank"
                    href="mailto:?SUBJECT=Bekijk ook eens > {$smarty.server.HTTP_HOST}{$smarty.server.REQUEST_URI}"
                    class="email"
                    rel="noopener"
                    ><span> Email</span></a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </article>
      <section class="news latest">
        <div class="payoff">updates</div>
        <div class="inner">
          <h3 class="h5">Related updates and news</h3>
          <ul class="block-grid up3">
            <li>
              <article class="newsarticle linkdiv">
                <div class="inner">
                  <time datetime="2019-07-03">
                    <span class="day">03</span>
                    <span class="month">jul</span>
                  </time>
                  <div class="category">category</div>
                  <h3>
                    <nuxt-link :to="{ name: 'news' }">
                      3 Myths About <br />
                      Decentralized Distributed <br />
                      Blockchain Network
                    </nuxt-link>
                  </h3>
                  <nav>
                    <nuxt-link :to="{ name: 'news' }" class="more-inline2">
                      Read more
                    </nuxt-link>
                  </nav>
                </div>
              </article>
            </li>
            <li>
              <article class="newsarticle linkdiv">
                <div class="inner">
                  <time datetime="2019-07-02">
                    <span class="day">02</span>
                    <span class="month">jul</span>
                  </time>
                  <div class="category">category</div>
                  <h3>
                    <nuxt-link :to="{ name: 'news' }">
                      Fighting Fakes With Blockchain: How To Make
                      Anti-Counterfeiting...
                    </nuxt-link>
                  </h3>
                  <nav>
                    <nuxt-link :to="{ name: 'news' }" class="more-inline2">
                      Read more
                    </nuxt-link>
                  </nav>
                </div>
              </article>
            </li>
            <li>
              <article class="newsarticle linkdiv">
                <div class="inner">
                  <time datetime="2019-05-29">
                    <span class="day">29</span>
                    <span class="month">may</span>
                  </time>
                  <div class="category">category</div>
                  <h3>
                    <nuxt-link :to="{ name: 'news' }">
                      How To Establish Protocols Between Parties With
                      <br />
                      Competing Interests
                    </nuxt-link>
                  </h3>
                  <nav>
                    <nuxt-link :to="{ name: 'news' }" class="more-inline2">
                      Read more
                    </nuxt-link>
                  </nav>
                </div>
              </article>
            </li>
          </ul>
          <nav>
            <a href="#" class="more-inline">Read more insights from Shift</a>
          </nav>
        </div>
      </section>
    </div>
    <custom-footer></custom-footer>
  </div>
</template>

<script>
import Footer from '../components/footer'
export default {
  name: 'News',
  components: { CustomFooter: Footer }
}
</script>

<style scoped></style>
