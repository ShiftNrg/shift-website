<template>
  <div id="scene" class="scene">
    <div ref="banner" class="banner">
      <div class="newsflash">
        <div class="label">
          {{ ((indexData.banner || {}).newsFlash || {}).badge }}
        </div>
        <a
          :href="((indexData.banner || {}).newsFlash || {}).link"
          data-action="scrollto"
          class="title"
        >
          {{ ((indexData.banner || {}).newsFlash || {}).description }}
        </a>
      </div>
      <div class="slogan">
        <div ref="line1" class="line1">
          <span class="spacer"></span>
          <span
            v-for="(word, key) in getWords(
              (indexData.banner || {}).line1 || ''
            )"
            :key="'line1-' + key"
            class="word"
          >
            <span
              v-for="(char, charKey) in word"
              :key="'line1-' + key + '-' + charKey"
              class="letter"
            >
              {{ char }}
            </span>
            <span
              v-if="checkIfLastWord((indexData.banner || {}).line1 || '', key)"
            >
              &nbsp;
            </span>
          </span>
        </div>
        <div ref="line2" class="line2">
          <span class="spacer"></span>
          <span
            v-for="(word, key) in getWords(
              (indexData.banner || {}).line2 || ''
            )"
            :key="'line2-' + key"
            class="word"
          >
            <span
              v-for="(char, charKey) in word"
              :key="'line2-' + key + '-' + charKey"
              class="letter"
            >
              {{ char }}
            </span>
            <span
              v-if="checkIfLastWord((indexData.banner || {}).line2 || '', key)"
            >
              &nbsp;
            </span>
          </span>
        </div>
        <div class="line3">
          {{ (indexData.banner || {}).line3 }}
        </div>
      </div>
      <div class="image">
        <img src="~/assets/images/banner/1.png" alt="" />
      </div>
      <div class="socials">
        <span class="label">{{ (indexData.social || {}).label }}</span>
        <span class="seperator">-</span>
        <a
          v-for="(socialLink, socialKey) of (indexData.social || {}).links"
          :key="socialKey"
          :href="socialLink"
          target="_blank"
          >{{ socialKey }}</a
        >
      </div>

      <button @click="scrollTop" class="scrollto2">
        <span class="icon">
          <svg-icon name="arrow" height="36" width="36" />
        </span>
      </button>
    </div>
    <div ref="mainContainer" class="maincontainer">
      <section ref="locknload" class="locknload">
        <div class="inner">
          <h1>
            {{ ((indexData.lockNLoad || {}).title || {}).left }}
            <span>{{ ((indexData.lockNLoad || {}).title || {}).middle }}</span>
            {{ ((indexData.lockNLoad || {}).title || {}).right }}
          </h1>
          <div class="Intro">
            <p>
              {{ (indexData.lockNLoad || {}).subtitle }}
            </p>
          </div>
          <ol :class="activeLockNLoad ? 'inactive' : ''" class="steps">
            <li
              v-for="step of (indexData.lockNLoad || {}).steps"
              :key="step.title"
            >
              <article>
                <span class="icon">
                  <img :src="step.icon" height="120" width="120" />
                </span>
                <h3>{{ step.title }}</h3>
                <div class="Text">
                  <p>
                    {{ step.description }}
                  </p>
                </div>
                <span class="next">
                  <svg-icon name="step" height="42" width="42"></svg-icon>
                </span>
              </article>
            </li>
          </ol>
          <ol class="steps reversed">
            <li
              v-for="step of (indexData.lockNLoad || {}).stepsReversed"
              :key="step.title"
            >
              <article>
                <span class="icon">
                  <img :src="step.icon" height="120" width="120" />
                </span>
                <h3>{{ step.title }}</h3>
                <div class="Text">
                  <p>
                    {{ step.description }}
                  </p>
                </div>
                <span class="next">
                  <svg-icon name="step" height="42" width="42"></svg-icon>
                </span>
              </article>
            </li>
          </ol>
          <div class="Intro">
            <p>
              {{ ((indexData.lockNLoad || {}).intro || {}).description }}
              <button
                @click="activeLockNLoad = !activeLockNLoad"
                type="button"
                class="more-inline"
              >
                {{
                  !activeLockNLoad
                    ? ((indexData.lockNLoad || {}).intro || {}).linkText
                    : ((indexData.lockNLoad || {}).intro || {}).activeText
                }}
              </button>
            </p>
          </div>
          <nav>
            <a
              v-for="button of (indexData.lockNLoad || {}).buttons"
              :key="button.link"
              :href="button.link"
              :target="button.target"
              class="more"
            >
              {{ button.text }}
            </a>
          </nav>
        </div>
      </section>
      <section ref="issues" class="issues right">
        <div class="inner">
          <h4>
            {{ (indexData.issues || {}).subtitle }}
          </h4>
          <h3>{{ (indexData.issues || {}).title }}</h3>
          <div class="Intro">
            <p>
              {{ (indexData.issues || {}).description }}
            </p>
          </div>
          <ul class="block-grid up4">
            <li
              v-for="(issue, key) of (indexData.issues || {}).items"
              :key="'issue-' + key"
            >
              <article>
                <div class="issue">
                  <div
                    v-if="issue.upcoming"
                    class="corner-ribbon top-right purple"
                  >
                    Upcoming
                  </div>
                  <h3>{{ issue.title }}</h3>
                  <span class="icon">
                    <svg-icon
                      :name="issue.icon"
                      width="60"
                      height="60"
                    ></svg-icon>
                  </span>
                  <div class="Content">
                    <p><i class="fas fa-times"></i> {{ issue.content }}</p>
                  </div>
                </div>
                <div class="answer">
                  <h3 v-html="issue.answer.title"></h3>
                  <div class="Content">
                    <p>
                      <i class="fas fa-check"></i>
                      {{ issue.answer.description }}
                    </p>
                  </div>
                </div>
              </article>
            </li>
          </ul>
        </div>
      </section>
      <section ref="cases" class="cases">
        <div class="inner">
          <h4>
            {{ (indexData.cases || {}).subtitle }}
          </h4>
          <h3>{{ (indexData.cases || {}).title }}</h3>
          <div class="Intro">
            <p>
              {{ (indexData.cases || {}).description }}
            </p>
          </div>
          <ul class="block-grid up3">
            <li
              v-for="(textCase, key) of (indexData.cases || {}).items"
              :key="'case-' + key"
            >
              <article>
                <figure>
                  <img :src="textCase.icon" alt="" />
                </figure>
                <h3>{{ textCase.title }}</h3>
                <div class="Content">
                  <p>
                    {{ textCase.description }}
                  </p>
                </div>
              </article>
            </li>
          </ul>
        </div>
      </section>
      <section ref="usps" class="usps">
        <div class="inner">
          <h4>
            {{ (indexData.usps || {}).subtitle }}
          </h4>
          <h3>{{ (indexData.usps || {}).title }}</h3>
          <div class="Intro">
            <p>
              {{ (indexData.usps || {}).description }}
            </p>
          </div>
          <ul :class="['block-grid', 'up4', hasActiveUsps]">
            <li
              v-for="(usps, key) of (indexData.usps || {}).items"
              :key="'usps-' + key"
              :class="['hasExcerpt', getActiveUspsClass(key)]"
              @click.stop.prevent="toggleActiveUsps(key)"
            >
              <article>
                <span class="icon">
                  <svg-icon :name="usps.icon" width="60" height="60"></svg-icon>
                </span>
                <h5>{{ usps.title }}</h5>
                <div class="Text">
                  <p>
                    {{ usps.description }}
                  </p>
                </div>
                <div @click.stop.prevent="" class="Excerpt">
                  <i @click="closeActiveUsps()" class="fas fa-close"></i>
                  <div class="inner">
                    <p>
                      {{ usps.excerpt }}
                    </p>
                  </div>
                </div>
              </article>
            </li>
          </ul>
        </div>
      </section>
      <article ref="overview" class="overview">
        <div class="inner Intro">
          <div class="aside">
            <h4>
              {{ (indexData.overview || {}).subtitle }}
            </h4>
            <h3>
              {{ (indexData.overview || {}).title }}
            </h3>
            <div class="Introtext">
              <p>
                {{ (indexData.overview || {}).description }}
              </p>
            </div>
          </div>
        </div>
        <div
          v-for="(overviewItem, key) of (indexData.overview || {}).items"
          :key="'overview-' + key"
          class="inner"
        >
          <figure>
            <img :src="overviewItem.image" alt="" />
          </figure>
          <div class="aside">
            <h4>{{ overviewItem.subtitle }}</h4>
            <h3>{{ overviewItem.title }}</h3>
            <div class="Text">
              <p
                v-for="(overviewItemText,
                overviewItemTextKey) of overviewItem.description"
                :key="'overviewItemText-' + overviewItemTextKey"
              >
                {{ overviewItemText }}
              </p>
              <ul>
                <li
                  v-for="(overviewItemList,
                  overviewItemListKey) of overviewItem.items"
                  :key="'overviewItemText-' + overviewItemListKey"
                  v-html="overviewItemList"
                ></li>
              </ul>
            </div>
            <nav>
              <a
                :href="((indexData.overview || {}).footerLink || {}).link"
                class="more-inline"
              >
                {{ ((indexData.overview || {}).footerLink || {}).text }}
              </a>
            </nav>
          </div>
        </div>
      </article>
      <section ref="vision" class="vision right">
        <div class="inner">
          <h4>
            {{ (indexData.vision || {}).subtitle }}
          </h4>
          <h3>
            {{ (indexData.vision || {}).title }}
          </h3>
          <div class="Intro">
            <p>
              {{ (indexData.vision || {}).description }}
            </p>
          </div>
          <ul :class="['block-grid', 'up3', hasActiveVision]">
            <li
              v-for="(vision, key) of (indexData.vision || {}).items"
              :key="'vision-' + key"
              :class="[
                !!vision.excerpt ? 'hasExcerpt' : '',
                getActiveVisionClass(key)
              ]"
              @click="toggleActiveVision(key)"
            >
              <article>
                <h3>{{ vision.title }}</h3>
                <div class="Text">
                  <p>
                    {{ vision.description }}
                  </p>
                </div>
                <div
                  v-if="!!vision.excerpt"
                  @click.stop.prevent=""
                  class="Excerpt"
                >
                  <i @click="closeActiveVision" class="fas fa-close"></i>
                  <div class="inner">
                    <p>
                      {{ vision.excerpt }}
                    </p>
                  </div>
                </div>
              </article>
            </li>
          </ul>
        </div>
      </section>
      <section id="roadmap" ref="roadmap" class="roadmap">
        <div class="inner">
          <h4>
            {{ (indexData.roadmap || {}).subtitle }}
          </h4>
          <h3>
            {{ (indexData.roadmap || {}).title }}
          </h3>
          <div class="Intro">
            <p>
              {{ (indexData.roadmap || {}).description }}
            </p>
          </div>

          <div class="roadmapCarousel">
            <button
              @click="slider.go('<')"
              type="button"
              class="prevoverlay"
            ></button>
            <button
              @click="slider.go('>')"
              type="button"
              class="nextoverlay"
            ></button>
            <div class="glide__track" data-glide-el="track">
              <ul class="glide__slides">
                <li
                  v-for="(roadmap, key) of (indexData.roadmap || {}).items"
                  :key="'roadmap-' + key"
                  class="glide__slide"
                >
                  <article>
                    <div class="state">
                      <div class="label">{{ roadmap.label }}</div>
                      <div :class="'p' + roadmap.percentage" class="c100">
                        <span>{{ roadmap.percentage }}%</span>
                        <div class="slice">
                          <div class="bar"></div>
                          <div class="fill"></div>
                        </div>
                      </div>
                    </div>
                    <h3>{{ roadmap.title }}</h3>
                    <div class="Content">
                      <ul>
                        <li
                          v-for="roadmapItem of roadmap.items"
                          :key="roadmapItem"
                          :class="roadmapItem.class"
                        >
                          {{ roadmapItem.item }}
                        </li>
                      </ul>
                    </div>
                  </article>
                </li>
              </ul>
            </div>

            <div class="glide__arrows" data-glide-el="controls">
              <button
                class="glide__arrow glide__arrow--left"
                data-glide-dir="<"
              >
                <span class="icon">
                  <svg-icon name="arrow" width="20" height="20"></svg-icon>
                </span>
              </button>
              <button
                class="glide__arrow glide__arrow--right"
                data-glide-dir=">"
              >
                <span class="icon">
                  <svg-icon name="arrow" width="20" height="20"></svg-icon>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section id="team" ref="team" class="news latest">
        <div class="inner">
          <h1 class="h1">
            {{ indexData.team.title }}
          </h1>
          <h2 class="h2">
            {{ indexData.team.subtitle }}
          </h2>
          <p></p>
          <div class="Intro">
            <h4 class="h4">
              {{ indexData.team.description }}
            </h4>
          </div>
          <p></p>
          <ul class="block-grid up5">
            <li
              v-for="(team, items) of (indexData.team || {}).items.slice(0, 5)"
              :key="items.label"
              class="hasExcerpt"
            >
              <h3>{{ team.label }}</h3>
              <h2>{{ team.title }}</h2>
              <p></p>
              <h4>{{ team.description }}</h4>
              <p></p>
              <h4>{{ team.experience }}</h4>
              <a v-bind:href="team.link" class="more-inline">LinkedIn</a>
              <a v-bind:href="team.social" class="more-inline">Twitter</a>
              <p></p>
              <div class="image">
                <img v-bind:src="team.image" class="rounded-lg object-fit" />
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section id="news" ref="news" class="news latest">
        <!--
        <div class="payoff">
          {{ (indexData.news || {}).label }}
        </div>
        -->
        <div class="inner">
          <h3 class="h5">
            {{ (indexData.news || {}).title }}
          </h3>
          <ul class="block-grid up3">
            <li
              v-for="(news, key) of (indexData.news || {}).items.slice(0, 3)"
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
                      {{ (indexData.news || {}).readMore }}
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
              {{ (indexData.news || {}).readMoreInsights }}
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
import { initializeBanner } from '../plugins/initialize-banner'
import Footer from '../components/footer'
import { animatePage, scrollTop } from '../plugins/animations'
import { initializeRoadmap } from '../plugins/modules/roadmap'
import { fakepreload, scrollHandler } from '../plugins/modules/viewport'
import { sameheight } from '../plugins/modules/sameheight'

export default {
  components: { CustomFooter: Footer },
  transition: {
    name: 'fadeup',
    mode: 'out-in'
  },
  data() {
    return {
      activeUsps: false,
      activeVision: false,
      activeLockNLoad: false,
      slider: undefined,
      debounce: undefined
    }
  },
  computed: {
    hasActiveUsps() {
      return this.activeUsps ? 'hasactive' : ''
    },
    hasActiveVision() {
      return this.activeVision ? 'hasactive' : ''
    },
    indexData() {
      if (process.client) {
        return window.indexData
      }
      return {}
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  mounted() {
    fakepreload.init()
    sameheight.init()
    scrollHandler(document.querySelectorAll(fakepreload.selectors))
    initializeBanner(this.$refs.line1, this.$refs.line2)
    this.slider = initializeRoadmap()
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
    this.slider.destroy()
  },
  methods: {
    getWords(word) {
      return word.split(' ')
    },
    checkIfLastWord(sentence, key) {
      return key !== this.getWords(sentence).length - 1
    },
    scrollTop() {
      scrollTop(this.$refs.mainContainer)
    },
    toggleActiveUsps(index) {
      this.activeUsps = this.activeUsps === index ? false : index
    },
    getActiveUspsClass(index) {
      return this.activeUsps === index ? 'active' : ''
    },
    closeActiveUsps() {
      this.activeUsps = false
    },
    toggleActiveVision(index) {
      this.activeVision = this.activeVision === index ? false : index
    },
    getActiveVisionClass(index) {
      return this.activeVision === index ? 'active' : ''
    },
    closeActiveVision() {
      this.activeVision = false
    },
    goToNewsArticle(id) {
      animatePage(this.$refs['newsarticle-' + id][0], () =>
        this.$router.push({
          name: 'news-:id',
          params: { id }
        })
      )
    },
    handleScroll() {
      const elems = document.querySelectorAll(fakepreload.selectors)
      window.addEventListener('scroll', () => {
        if (this.debounce) {
          window.clearTimeout(this.debounce)
        }
        this.debounce = window.setTimeout(function() {
          scrollHandler(elems)
        }, 8)
      })
    }
  }
}
</script>
