import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _f680affc = () => interopDefault(import('../node_modules/@nuxtjs/svg-sprite/lib/pages/icons-list.vue' /* webpackChunkName: "" */))
const _32d57772 = () => interopDefault(import('../pages/shift-info.vue' /* webpackChunkName: "pages/shift-info" */))
const _40b66447 = () => interopDefault(import('../pages/news/:id.vue' /* webpackChunkName: "pages/news/:id" */))
const _ee183cd8 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/_icons",
    component: _f680affc,
    name: "icons-list"
  }, {
    path: "/shift-info",
    component: _32d57772,
    name: "shift-info"
  }, {
    path: "/news/:id",
    component: _40b66447,
    name: "news-:id"
  }, {
    path: "/",
    component: _ee183cd8,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
