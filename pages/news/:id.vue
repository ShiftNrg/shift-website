<template>
  <div id="scene" class="scene">
    <div class="maincontainer">
      <article class="news view">
        <div class="heading">
          <div class="category">{{ article.category }}</div>
          <h1>{{ article.title }}</h1>
        </div>
        <div class="inner">
          <div v-html="article.content" class="Text"></div>
          <div class="aside">
            <nuxt-link :to="{ name: 'index', hash: '#news' }" class="back">
              <span class="icon">
                <svg-icon name="arrow" width="20" height="20"></svg-icon>
              </span>
            </nuxt-link>
            <!--
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
            -->
          </div>
        </div>
      </article>
      <section class="news latest">
        <!--
        <div class="payoff">
          {{ newsData.label }}
        </div>
        -->
        <div class="inner">
          <h3 class="h5">
            {{ newsData.title }}
          </h3>
          <ul class="block-grid up3">
            <li
              v-for="(news, key) of newsData.items.slice(0, 4)"
              v-show="article.id != news.id"
              :key="'news-' + key"
            >
              <article
                :ref="'newsarticle-' + news.id"
                @click="goToNewsArticle(news.id)"
                class="newsarticle"
              >
                <div class="inner">
                  <time :datetime="news.datetime">
                    <span class="day">{{ news.day }}</span>
                    <span class="month">{{ news.month }}</span>
                  </time>
                  <div class="category">{{ news.category }}</div>
                  <h3>{{ news.title }}</h3>
                  <nav>
                    <a href="#" class="more-inline2">
                      {{ newsData.readMore }}
                    </a>
                  </nav>
                </div>
              </article>
            </li>
          </ul>
          <!--
          <nav>
            <nuxt-link
              :to="{ name: 'news-:id', params: { id: 1 } }"
              class="more-inline"
            >
              {{ newsData.readMoreInsights }}
            </nuxt-link>
          </nav>
          -->
        </div>
      </section>
    </div>
    <custom-footer></custom-footer>
  </div>
</template>

<script>
import Footer from '../../components/footer'
import { animatePage } from '../../plugins/animations'
export default {
  name: 'News',
  components: { CustomFooter: Footer },
  transition: {
    name: 'fadein',
    mode: 'out-in'
  },
  computed: {
    newsData() {
      if (!process.client) {
        return {}
      }
      return (window.indexData || {}).news || {}
    },
    article() {
      if (!process.client) {
        return {}
      }
      return (
        (this.newsData.items || []).find(
          (x) => x.id === Number(this.$route.params.id)
        ) || {}
      )
    }
  },
  created() {
    if (!Object.keys(this.article).length) {
      this.$router.push({ name: 'index' })
    }
  },
  validate({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id)
  },
  methods: {
    goToNewsArticle(id) {
      animatePage(this.$refs['newsarticle-' + id][0], () =>
        this.$router.push({
          name: 'news-:id',
          params: { id }
        })
      )
    }
  }
}
</script>

<style scoped></style>
